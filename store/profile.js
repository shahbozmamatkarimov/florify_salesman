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
  });

  const profile = reactive({
    image: "",
    username: "",
    phone: "",
    address: "",
    email: "",
  });

  function editProfile() {
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
        store.editInfoModal = false;
        getProfile();
      })
      .catch((err) => {
        store.editInfoModal = false;
        console.log(err);
      });
  }

  function getProfile() {
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
        store.profile = res.data;
        profile.username = res.data?.username;
        profile.address = res.data?.address;
        profile.phone = res.data?.phone?.slice(4);
        store.userImage = baseUrlImage.value + "/" + res.data?.image;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { store, profile, editProfile, getProfile };
});
