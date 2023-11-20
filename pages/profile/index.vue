<template>
  <main>
    <Navbar>Profil</Navbar>

    <section class="grid lg:grid-cols-2 gap-5 lg:px-10 sm:px-5 px-0 pt-5">
      <div class="space-y-5 pb-20 overflow-hidden overflow-y-auto max-h-[82vh]">
        <ul class="bg-[#FFFFFF] sm:rounded-xl font-medium p-5 space-y-6">
          <li class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Shaxsiy ma'lumotlar</h1>
            <img
              class="cursor-pointer"
              @click="useProfile.store.editInfoModal = true"
              src="../../assets/svg/editBtn.svg"
              alt="edit"
            />
          </li>
          <hr class="-mx-5" />
          <li class="flex items-center gap-5">
            <div
              class="flex items-center justify-center min-w-[6rem] h-24 w-24 object-cover shadowPhoto overflow-hidden bg-[#7112AF] rounded-full"
            >
              <img v-if="useProfile.store.profile?.image?.length"
                class="h-full w-full object-cover"
                :src="baseUrlImage + '/' + useProfile.store.profile?.image"
                alt="Photo"
              />
              <img v-else
                class="h-12 w-12"
                src="@/assets/nodata/userplaceholder.svg"
                alt="Photo"
              />
            </div>
            <div>
              <h1 class="text-lg font-semibold">
                <span v-if="useProfile.store.profile?.username?.length">{{ useProfile.store.profile?.username }}</span>
                <EmptyProfile v-else @click="useProfile.store.editInfoModal = true"
                  >Ismingizni kiriting</EmptyProfile
                >
              </h1>
              <p class="font-medium">
                <span v-if="useProfile.store.profile?.address?.length">{{ useProfile.store.profile?.address }}</span>
                <EmptyProfile v-else @click="useProfile.store.editInfoModal = true"
                  >Manzilingizni kiriting</EmptyProfile
                >
              </p>
            </div>
          </li>
          <hr class="-mx-5" />
          <li>
            <p class="text-[#6188FF] pb-1">Telefon raqam</p>
            <p class="font-medium">
              <span v-if="useProfile.store.profile?.phone?.length">{{ useProfile.store.profile?.phone }}</span>
              <EmptyProfile v-else @click="useProfile.store.editInfoModal = true"
                  >Telefon raqamingizni kiriting</EmptyProfile
                >
            </p>
          </li>
          <!-- <hr class="-mx-5" /> -->
          <!-- <li class="-mb-3 text-[#6188FF]">Ijtimoiy tarmoqlar</li> -->
          <!-- <li class="flex justify-between items-center pb-5">
            <div class="flex items-center gap-2">
              <img src="../../assets/svg/facebook.svg" alt="facebook" />
              <p>@munavvar</p>
            </div>
            <div class="flex items-center gap-2">
              <img src="../../assets/svg/instagramm.svg" alt="facebook" />
              <p>@munavvar</p>
            </div>
            <div class="flex items-center gap-2">
              <img src="../../assets/svg/telegram.svg" alt="facebook" />
              <p>@munavvar</p>
            </div>
          </li> -->
        </ul>
        <ul
          class="bg-[#FFFFFF] text-[#242424] sm:rounded-xl font-medium p-5 space-y-6"
        >
          <li class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Do'kon ma'lumotlari</h1>
            <img
              @click="store.editLocation = true"
              class="cursor-pointer"
              src="../../assets/svg/editBtn.svg"
              alt="edit"
            />
          </li>
          <hr class="-mx-5" />
          <li>
            <p class="text-[#6188FF] pb-1">Manzil</p>
            <p class="font-medium">
              <EmptyProfile @click="store.editLocation = true"
                  >Do'kon manzilini kiriting</EmptyProfile
                >
            </p>
          </li>
          <hr class="-mx-5" />
          <li>
            <p class="text-[#6188FF] pb-1">Do'kon telefon raqami</p>
            <p class="font-medium">
              <EmptyProfile @click="store.editLocation = true"
                  >Do'kon telefon raqamini kiriting</EmptyProfile
                >
            </p>
          </li>
          <hr class="-mx-5 pb-10" />
        </ul>
      </div>
    </section>

    <!-- <EditCard v-show="card.useProfile.store.editInfoModal" /> -->

    <!-- edit info -->
    <a-modal v-model:open="useProfile.store.editInfoModal" centered>
      <form @submit.prevent="useProfile.editProfile">
        <ul
          class="bg-[#FFFFFF] rounded-xl font-medium md:p-5 space-y-6 max-w-[30rem] w-full"
        >
          <li class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Shaxsiy ma'lumotlar</h1>
            <i
              @click="closeModal"
              class="bx bx-x text-2xl font-bold cursor-pointer"
            ></i>
          </li>
          <hr class="-mx-5" />
          <li class="flex items-center gap-5">
            <div
              class="flex items-center justify-center min-w-[6rem] h-24 w-24 object-cover shadowPhoto bg-[#7112AF] rounded-full"
              v-if="!useProfile.store.userImage"
            >
              <img
                class="h-12 w-12"
                src="@/assets/nodata/userplaceholder.svg"
                alt="Photo"
              />
            </div>
            <img
              v-else
              class="md:min-w-[6rem] md:h-24 md:w-24 h-16 w-16 object-cover shadowPhoto bg-gray-300 rounded-full"
              :src="useProfile.store.userImage"
              alt="Photo"
            />
            <a-dropdown class="-ml-11 mt-16" :trigger="['click']">
              <a class="items-center ant-dropdown-link" @click.prevent>
                <i class="bx bxs-camera-plus text-3xl"></i>
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <label for="userPhoto">O'zgartirish</label>
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item @click="() => deleteProduct(i.id)"
                    >O'chirish</a-menu-item
                  >
                </a-menu>
              </template>
            </a-dropdown>
            <input
              id="userPhoto"
              @change="(e) => uploadFile(e)"
              class="w-0 h-0 overflow-hidden"
              type="file"
              accept="image/*"
            />
            <div class="w-full">
              <h1 class="text-lg font-semibold">
                <a-input
                  type="text"
                  class="rounded-md h-9"
                  v-model:value="useProfile.profile.username"
                  placeholder="To'liq ismingizni kiriting..."
                  minlength="3"
                  required
                />
              </h1>
              <p class="font-medium">
                <a-input
                  type="text"
                  class="rounded-md mt-2 h-9"
                  v-model:value="useProfile.profile.address"
                  placeholder="Manzilingizni kiriting..."
                />
              </p>
            </div>
          </li>
          <hr class="-mx-5" />
          <li>
            <p class="text-[#6188FF] pb-1">Telefon raqam</p>
            <p class="font-medium">
              <a-input
                type="tel"
                prefix="+998"
                class="rounded-md"
                v-model:value="useProfile.profile.phone"
                placeholder=""
              />
            </p>
          </li>
          <li
            class="flex items-center justify-between pt-5 px-5 -mx-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              @click="closeModal"
              data-modal-hide="defaultModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Bekor qilish
            </button>
            <button
              data-modal-hide="defaultModal"
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Saqlash
            </button>
          </li>
        </ul>
      </form>
    </a-modal>

    <!-- edit info -->
    <a-modal v-model:open="store.editLocation" centered>
      <!-- edit location -->
      <form @submit.prevent="handleSubmit">
        <ul
          class="bg-[#FFFFFF] rounded-xl max-w-[25rem] w-full font-medium mx-auto sm:px-5 sm:py-5 space-y-6"
        >
          <li class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Do'kon ma'lumotlari</h1>
            <i
              @click="closeModal"
              class="bx bx-x text-2xl font-bold cursor-pointer"
            ></i>
          </li>
          <hr class="-mx-5" />
          <li>
            <p class="text-[#6188FF] pb-1">Manzil</p>
            <p class="font-medium">
              <a-input
                type="text"
                class="rounded-md mt-2 h-9"
                v-model:value="form.address"
                placeholder="Manzilingizni kiriting..."
                required
              />
            </p>
          </li>
          <hr class="-mx-5" />
          <li>
            <p class="text-[#6188FF] pb-1">Do'kon telefon raqami</p>
            <p class="font-medium">
              <a-input
                type="tel"
                prefix="+998"
                class="rounded-md"
                v-model:value="store.phone"
                placeholder=""
                required
              />
            </p>
          </li>
          <li
            class="flex items-center justify-between px-5 pt-5 -mx-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              @click="closeModal"
              data-modal-hide="defaultModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Bekor qilish
            </button>
            <button
              data-modal-hide="defaultModal"
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Saqlash
            </button>
          </li>
        </ul>
      </form>
    </a-modal>
  </main>
</template>

<script setup>
import axios from "axios";
import { useProfileStore } from "@/store";
import { useNotification } from "../composables/notification";
import { useCardStore } from "@/store/card";

definePageMeta({
  middleware: ["auth"],
});

const useProfile = useProfileStore();
const card = useCardStore();
const { showLoading, showSuccess, showWarning, showError } = useNotification();

const runtimeconfig = useRuntimeConfig();
const baseUrlImage = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -4));
const baseUrl = runtimeconfig.public.apiBaseUrl;
const router = useRouter();

definePageMeta({
  // layout: "custom",
});

const store = reactive({
  modal: false,
  editLocation: false,
  phone: "",
  salesman_id: "",
  token: "",
  userImage: "",
  profile: "",
});

const form = reactive({
  full_name: "",
  address: "",
  phone: "",
});

function closeModal() {
  useProfile.store.editInfoModal = false;
  store.editLocation = false;
}

function uploadFile(e) {
  if (!e.target.files[0].type.includes("image")) {
    showWarning("Iltimos, rasm kiriting!");
    return;
  }
  const file = e.target.files[0];
  useProfile.store.userImage = URL.createObjectURL(file);
  useProfile.profile.image = file;
}

function handleSubmit() {
  form.phone = "+998" + store.phone;
  fetch(baseUrl + `/salesman/profile/${store.salesman_id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${store.token}`,
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .then((res) => {
      if (
        res.message === "Token vaqti tugagan!" ||
        res.message === "Token topilmadi!"
      ) {
        router.push("/login");
      }
      console.log(res);
      // store.showProduct = [res];
    })
    .catch((err) => {
      console.log(err);
    });
}

// function getProfile() {
//   const id = localStorage.getItem("salesman_id");
//   axios.get(baseUrl + `/salesman/${id}`)
//     .then((res) => {
//       if (
//         res.message === "Token vaqti tugagan!" ||
//         res.message === "Token topilmadi!"
//       ) {
//         router.push("/login");
//       }
//       console.log(res);
//       useProfile.store.profile = res.data;
//       useProfile.profile.username = res.data?.username;
//       useProfile.profile.address = res.data?.address;
//       useProfile.profile.phone = res.data?.phone?.slice(4);
//       useProfile.store.userImage = baseUrlImage.value + "/" + res.data?.image;
//       console.log(useProfile.store.userImage);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

function deleteProduct(id) {
  showLoading("So'rov yuborilmoqda...");
  fetch(baseUrl + `/product/${store.salesman_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${store.token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (
        res.message === "Token vaqti tugagan!" ||
        res.message === "Token topilmadi!"
      ) {
        router.push("/login");
      }
      console.log(res);
      showSuccess(res.message);
      productStore.getProducts();
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  store.token = localStorage.getItem("token");
  useProfile.getProfile();
  store.salesman_id = localStorage.getItem("salesman_id");
  if (!store.token || !store.salesman_id) {
    router.push("/login");
  }
});
</script>

<style lang="scss" scoped>
.shadowPhoto {
  box-shadow: 0 14px 24px 0 #2424242a;
}
.card1 {
  background: #8903e2;
}
</style>

<!-- <div class="pb-20 overflow-hidden overflow-y-auto max-h-[82vh]">
        <ul
          class="flex flex-col h-[699px] rounded-xl items-center bg-[#FFFFFF]"
        >
          <li class="flex items-center justify-between w-[476px] pt-5">
            <h1 class="text-2xl font-semibold">Karta ma‘lumotlar</h1>
            <img class="cursor-pointer" @click="card.useProfile.store.editInfoModal = true" src="../../assets/svg/editBtn.svg" alt="edit" />
          </li>
          <hr class="w-full my-5" />
          <li
            class="flex relative mb-10 backdrop-blur-sm flex-col h-[240px] z-20 w-[476px] px-5 text-[#FFFFFF] rounded-2xl bg-[#6E10AD]"
          >
            <div
              class="bg-[#5C009966] -z-10 rounded-2xl top-2 left-2 absolute min-h-[240px] w-[458px]"
            ></div>
            <div
              class="bg-[#9c39de2a] -z-20 rounded-2xl top-4 left-4 absolute min-h-[240px] w-[436px]"
            ></div>
            <button
              class="text-xs rounded-ee-2xl -mx-5 rounded-ss-2xl bg-[#DE4EC9] h-6 w-28"
            >
              Asosiy kartam
            </button>
            <p class="pt-16 text-3xl font-bold">22 230 539.62 so‘m</p>
            <p class="pt-8 text-2xl">8600 60** **** 1224</p>
            <div class="flex pt-3 justify-between">
              <div class="flex gap-5 items-center">
                <p class="text-sm">MADRAXIMOV RAHMATULLOH</p>
                <p>02/27</p>
              </div>
              <i class="uppercase">uzcard</i>
            </div>
          </li>
          <li
            class="flex mb-10 relative backdrop-blur-sm flex-col h-[240px] z-20 w-[476px] px-5 text-[#FFFFFF] rounded-2xl bg-[#AE1177]"
          >
            <div
              class="bg-[#ae117782] -z-10 rounded-2xl top-2 left-2 absolute min-h-[240px] w-[458px]"
            ></div>
            <div
              class="bg-[#9c39de2a] -z-20 rounded-2xl top-4 left-4 absolute min-h-[240px] w-[436px]"
            ></div>
            <button
              class="text-xs rounded-ee-2xl -mx-5 rounded-ss-2xl bg-[#CEB991] h-6 w-28"
            >
              Zahira karta
            </button>
            <p class="pt-16 text-3xl font-bold">22 230 539.62 so‘m</p>
            <p class="pt-8 text-2xl">8600 60** **** 1224</p>
            <div class="flex pt-3 justify-between">
              <div class="flex gap-5 items-center">
                <p class="text-sm">MADRAXIMOV RAHMATULLOH</p>
                <p>02/27</p>
              </div>
              <i class="uppercase">uzcard</i>
            </div>
          </li>
        </ul>
      </div> -->

<!-- edit modal -->
<!-- <form
      @submit.prevent="handleSubmit"
      v-show="useProfile.store.editInfoModal"
      tabindex="-1"
      class="flex justify-center min-h-screen items-center bg-[#8080804c] absolute top-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <ul class="bg-[#FFFFFF] rounded-xl font-medium p-5 space-y-6 w-[30rem]">
        <li class="flex items-center justify-between">
          <h1 class="text-2xl font-semibold">Shaxsiy ma'lumotlar</h1>
          <i
            @click="closeModal"
            class="bx bx-x text-2xl font-bold cursor-pointer"
          ></i>
        </li>
        <hr class="-mx-5" />
        <li class="flex items-center gap-5">
          <img
            v-if="!useProfile.store.userImage"
            class="min-w-[6rem] h-24 w-24 object-cover shadowPhoto bg-gray-300 rounded-full"
            src="@/assets/nodata/userplaceholder.svg"
            alt="Photo"
          />
          <img
            v-else
            class="min-w-[6rem] h-24 w-24 object-cover shadowPhoto bg-gray-300 rounded-full"
            :src="useProfile.store.userImage"
            alt="Photo"
          />
          <a-dropdown class="-ml-11 mt-16" :trigger="['click']">
            <a class="items-center ant-dropdown-link" @click.prevent>
              <i class="bx bxs-camera-plus text-3xl"></i>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <label for="userPhoto">O'zgartirish</label>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item @click="() => deleteProduct(i.id)"
                  >O'chirish</a-menu-item
                >
              </a-menu>
            </template>
          </a-dropdown>
          <input
            id="userPhoto"
            @change="(e) => uploadFile(e)"
            class="w-0 h-0 overflow-hidden"
            type="file"
            accept="image/*"
          />
          <div class="w-full">
            <h1 class="text-lg font-semibold">
              <a-input
                type="text"
                class="rounded-md h-9"
                v-model:value="form.full_name"
                placeholder="To'liq ismingizni kiriting..."
                required
              />
            </h1>
            <p class="font-medium">
              <a-input
                type="text"
                class="rounded-md mt-2 h-9"
                v-model:value="form.address"
                placeholder="Manzilingizni kiriting..."
                required
              />
            </p>
          </div>
        </li>
        <li>
          <p class="text-[#6188FF] pb-1">Email</p>
          <p class="font-semibold">
            <a-input
              type="email"
              class="rounded-md"
              v-model:value="form.email"
              placeholder="Emailingizni kiriting..."
              required
            />
          </p>
        </li>
        <hr class="-mx-5" />
        <li>
          <p class="text-[#6188FF] pb-1">Telefon raqam</p>
          <p class="font-medium">
            <a-input
              type="tel"
              prefix="+998"
              class="rounded-md"
              v-model:value="store.phone"
              placeholder=""
              required
            />
          </p>
        </li>
        <li
          class="flex items-center justify-between p-6 -mx-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            @click="closeModal"
            data-modal-hide="defaultModal"
            type="button"
            class="text-gray-500 bg-white hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Bekor qilish
          </button>
          <button
            data-modal-hide="defaultModal"
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Saqlash
          </button>
        </li>
      </ul>
    </form> -->
