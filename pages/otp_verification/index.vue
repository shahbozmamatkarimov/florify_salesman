<template>
  <main class="bg-[#203843]">
    <section class="flex flex-col items-center justify-center min-h-screen">
      <div
        class="flex bg-[#80808099] text-white flex-col items-center justify-center sm:w-[30rem] py-5 px-4 rounded-xl shadow-lg border"
      >
        <h1 class="h-10 text-2xl">Kodni kiriting</h1>
        <p>Biz <span>{{ otpStore?.state?.phone.slice(0,4) }}</span> <span>{{otpStore?.state.phone.slice(4,6)}}</span>***<span>{{ otpStore?.state.phone.slice(9,19) }}</span> telefon raqamingizga kod yubordik</p>
        <div class="otp-field py-5">
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
          <input class="space" type="text" maxlength="1" />
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
          <input type="text" maxlength="1" />
        </div>
        <p @click="$router.push('/check_phone')" class="cursor-pointer text-blue-600 hover:underline">Telefon raqamini qaytadan kiritish</p>
      </div>
    </section>
  </main>
</template>

<script setup>
// import { onBeforeMount, onMounted } from "vue";
// import { useNotificationStore } from "../../stores/notification";
// import { useOtpStore } from "../../stores/otp";
// import { useRouter } from "vue-router";

// const notification = useNotificationStore();
// const otpStore = useOtpStore();
// const router = useRouter();

// onMounted(() => {
//   const inputs = document.querySelectorAll(".otp-field input");

//   inputs.forEach((input, index) => {
//     input.dataset.index = index;
//     input.addEventListener("keyup", handleOtp);
//     input.addEventListener("paste", handleOnPasteOtp);
//   });

//   function handleOtp(e) {
//     /**
//      * <input type="text" 👉 maxlength="1" />
//      * 👉 NOTE: On mobile devices `maxlength` property isn't supported,
//      * So we to write our own logic to make it work. 🙂
//      */
//     const input = e.target;
//     let value = input.value;
//     let isValidInput = value.match(/[0-9a-z]/gi);
//     input.value = "";
//     input.value = isValidInput ? value[0] : "";

//     let fieldIndex = input.dataset.index;
//     if (fieldIndex < inputs.length - 1 && isValidInput) {
//       input.nextElementSibling.focus();
//     }

//     if (e.key === "Backspace" && fieldIndex > 0) {
//       input.previousElementSibling.focus();
//     }

//     if (fieldIndex == inputs.length - 1 && isValidInput) {
//       submit();
//     }
//   }

//   function handleOnPasteOtp(e) {
//     const data = e.clipboardData.getData("text");
//     const value = data.split("");
//     if (value.length === inputs.length) {
//       inputs.forEach((input, index) => (input.value = value[index]));
//       submit();
//     }
//   }

//   function submit() {
//     // 👇 Entered OTP
//     let otp = "";
//     inputs.forEach((input) => {
//       otp += input.value;
//       input.disabled = true;
//       input.classList.add("disabled");
//     });
//     if (otp == otpStore.state.otp) {
//       otpStore.state.is_true = true;
//       router.push("/register");
//     } else {
//       notification.warning("Kod mos kelmadi, iltimos qayta urinib ko'ring");
//       inputs.forEach((input) => {
//         input.value = "";
//         input.disabled = false;
//         input.classList.remove("disabled");
//       });
//     }
//   }
// });

// onBeforeMount(() => {
//   if (otpStore.state.phone == "") {
//     router.push("/check_phone");
//   }
// });
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #282a36;
  height: 100vh;
  color: #fff;
}

.otp-field {
  display: flex;
}

.otp-field input {
  width: 50px;
  font-size: 32px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin: 2px;
  border: 2px solid #55525c;
  background: #21232d;
  font-weight: bold;
  color: #fff;
  outline: none;
  transition: all 0.1s;
}

.otp-field input:focus {
  border: 2px solid #a527ff;
  box-shadow: 0 0 2px 2px #a527ff6a;
}

.disabled {
  opacity: 0.5;
}

.space {
  margin-right: 1rem !important;
}
</style>
