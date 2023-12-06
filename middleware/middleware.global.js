import { defineNuxtRouteMiddleware } from "#app";
import { useProfileStore } from "@/store";

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    if (process.client) {
      const token = localStorage.getItem("token");
      const isRoute = [
        "login",
        "forgot_password",
        "otp_verification",
        "checking_phone",
        "new_password",
      ].includes(to.name);
      console.log(to.name);
      console.log(isRoute);
      if (token || token != undefined || token != null) {
        const useProfile = useProfileStore();
        const parts = token.split(".");
        const exp = parts[1];
        let decodedPayload;
        if (exp) {
          decodedPayload = JSON.parse(atob(exp));
        } else {
          return;
        }
        console.log(decodedPayload);
        const experition = decodedPayload.exp;
        const now = +Date.now().toString().slice(0, 10);
        console.log(now, experition);
        console.log(now >= experition);
        if (now >= experition) {
          console.log(now >= experition);
          localStorage.removeItem("token");
          return navigateTo("/login");
        }
        useProfile.getProfile();
      } else if (!isRoute) {
        return navigateTo("/login");
      }
    }
  } catch (error) {
    console.log(error);
    if (to.path !== "/login") {
      return navigateTo("/login");
    }
  }
});
