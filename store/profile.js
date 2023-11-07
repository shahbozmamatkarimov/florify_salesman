import { defineStore } from "pinia";
import axios from "axios";

export const useProfileStore = defineStore("profile", () => {
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.apiBaseUrl;

  const store = reactive({});

  const profile = reactive({
    image: "",
    full_name: "",
    phone: "",
    address: "",
    email: "",
  });

  function editProfile() {
    console.log("Hello from");
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("salesman_id");
    console.log(profile.phone);
    const formData = new FormData();
    formData.append("image", profile.image);
    formData.append("full_name", profile.full_name);
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { store, profile, editProfile };
});
