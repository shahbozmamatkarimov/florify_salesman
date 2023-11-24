import { defineStore } from "pinia";
import axios from "axios";

export const useProfileStore = defineStore("profile", () => {
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.apiBaseUrl;
  const baseUrlImage = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -4));

  const store = reactive({
    userImage: "",
    profile: "",
    editInfoModal: false,
    isLoading: false,
  });

  const profile = reactive({
    image: "",
    username: "",
    phone: "",
    address: "",
    email: "",
  });

  function editProfile() {
    store.isLoading = true;
    store.editInfoModal = false;
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("salesman_id");
    const formData = new FormData();
    formData.append("image", profile.image);
    formData.append("username", profile.username);
    formData.append("phone", "+998" + profile.phone);
    formData.append("address", profile.address);
    formData.append("email", profile.email);
    axios
      .patch(baseUrl + "/salesman/profile/" + id, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setProfile(res?.data?.salesman);
      })
      .catch((err) => {
        store.isLoading = false;
        console.log(err);
      });
  }

  function getProfile() {
    store.isLoading = true;
    if (process.client) {
      const id = localStorage.getItem("salesman_id");
      axios
        .get(baseUrl + `/salesman/${id}`)
        .then((res) => {
          if (
            res.message === "Token vaqti tugagan!" ||
            res.message === "Token topilmadi!"
          ) {
            router.push("/login");
          }
          console.log(res);
          setProfile(res?.data);
        })
        .catch((err) => {
          if (err.response.data.message == "Sotuvchi topilmadi!") {
            navigateTo("/login");
          }
          store.isLoading = false;
        });
    }
  }

  function setProfile(res) {
    store.profile = res;
    profile.username = res?.username;
    profile.address = res?.address;
    profile.phone = res?.phone?.slice(4);
    store.userImage = baseUrlImage.value + "/" + res?.image;
    store.isLoading = false;
  }

  return { store, profile, editProfile, getProfile };
});
