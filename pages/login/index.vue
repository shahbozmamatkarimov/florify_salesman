<template>
  <main class="min-h-screen bg-white grid grid-cols-2">
    <section class="overflow-hidden p-10 h-screen">
      <img
        class="w-full h-full object-cover rounded-l-2xl"
        src="../../assets/svg/login.svg"
        alt="img"
      />
    </section>
    <section class="flex items-center justify-center">
      <form
        class="flex flex-col font-medium w-96 space-y-9"
        @submit.prevent="handleSubmit"
      >
        <h1 class="font-bold text-3xl">Hisobga kirish</h1>
        <a-space direction="vertical">
          <a-input
            type="text"
            bordered="false"
            autofocus
            class="font-medium input w-full focus:border-0 border-0 focus:outline-0 outline-0 focus:ring-0 ring-0 placeholder-[#555555] -ml-3"
            v-model:value="form.username"
            autocomplete="username"
            placeholder="Loginni kiriting"
            required
          />
          <hr />
        </a-space>
        <a-space direction="vertical">
          <a-input
            bordered="false"
            class="font-medium input w-full focus:border-0 border-0 focus:outline-0 outline-0 focus:ring-0 ring-0 placeholder-[#555555] -ml-3"
            v-model:value="form.password"
            minlength="13"
            maxlength="13"
            autocomplete="tel"
            placeholder="Telefon raqamni kiriting"
            required
          />
          <hr />
        </a-space>
        <button
          type="submit"
          class="text-white bg-[#5C0099] border border-[#5C0099] active:bg-white active:text-[#5C0099] h-12 rounded-xl"
        >
          Davom etish
        </button>
        <button
          type="button"
          @click="$router.push('/checking_phone')"
          class="text-[#6188FF] text-center"
        >
          Parolni unutdingizmi?
        </button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { useNotification } from "../../composables/notification";
const { showLoading, showSuccess, showError } = useNotification();
const router = useRouter();
definePageMeta({
  layout: "none",
});

const form = reactive({
  username: "",
  password: "",
});

const handleSubmit = () => {
  showLoading("So'rov tekshirilmoqda...");
  const data = {
    username: form.username,
    password: form.password,
  };
  fetch("https://florify-market.onrender.com/api/salesman/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.access_token);
      if (res.message === "Parol mos kelmadi!") {
        showError("Telefon raqami topilmadi!");
        return;
      }

      router.push("/");
      showSuccess("Tizimga muvaffaqiyatli kirildi!");
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style lang="scss" scoped></style>
