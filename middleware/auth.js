import { defineNuxtRouteMiddleware } from "#app";
import { useAuthStore } from "@/store/auth";

export default defineNuxtRouteMiddleware(async () => {
    const authStore = useAuthStore();
    authStore.checkAuth();    
});
