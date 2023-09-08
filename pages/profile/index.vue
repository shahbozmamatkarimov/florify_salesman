<template>
  <main>
    <NavbarTop>Profil</NavbarTop>
    <section class="grid grid-cols-2 gap-5 px-10">
      <div class="space-y-5 pb-20 overflow-hidden overflow-y-auto max-h-[82vh]">
        <ul class="bg-[#FFFFFF] rounded-xl font-medium p-5 space-y-6">
          <li class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Shaxsiy ma'lumotlar</h1>
            <img class="cursor-pointer" @click="store.modal = true" src="../../assets/svg/editBtn.svg" alt="edit" />
          </li>
          <hr class="-mx-5" />
          <li class="flex items-center gap-5">
            <img
              class="h-24 w-24 object-cover shadowPhoto bg-gray-300 rounded-full"
              src="https://sxprotection.com.au/wp-content/uploads/2016/07/team-placeholder.png"
              alt="Photo"
            />
            <div>
              <h1 class="text-lg font-semibold">Rahmatulloh Madraximov</h1>
              <p class="font-medium">Tashkent, Uzbekistan</p>
            </div>
          </li>
          <li>
            <p class="text-[#6188FF] pb-1">Email</p>
            <p class="font-semibold">rahmatullohmadraximov@gmail.com</p>
          </li>
          <hr class="-mx-5" />
          <li>
            <p class="text-[#6188FF] pb-1">Telefon raqam</p>
            <p class="font-medium">+998 91 476 9070</p>
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
        <ul class="bg-[#FFFFFF] rounded-xl font-medium p-5 space-y-6">
          <li class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Do‘kon ma‘lumotlari</h1>
            <img src="../../assets/svg/editBtn.svg" alt="edit" />
          </li>
          <hr class="-mx-5" />
          <li>
            <p class="text-[#6188FF] pb-1">Manzil</p>
            <p class="font-medium">
              Toshkent, Shayhontohur t, Labzak m, Abay k, 29-uy
            </p>
          </li>
          <hr class="-mx-5" />
          <li>
            <p class="text-[#6188FF] pb-1">Do‘kon telefon raqami</p>
            <p class="font-medium">+998 95 002 7987</p>
          </li>
          <hr class="-mx-5 pb-10" />
        </ul>
      </div>
      <div class="pb-20 overflow-hidden overflow-y-auto max-h-[82vh]">
        <ul
          class="flex flex-col h-[699px] rounded-xl items-center bg-[#FFFFFF]"
        >
          <li class="flex items-center justify-between w-[476px] pt-5">
            <h1 class="text-2xl font-semibold">Karta ma‘lumotlar</h1>
            <img src="../../assets/svg/editBtn.svg" alt="edit" />
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
      </div>
    </section>

    <!-- edit modal -->
    <div v-show="store.modal"
      tabindex="-1"
      class="flex justify-center min-h-screen items-center bg-[#8080804c] absolute top-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <ul class="bg-[#FFFFFF] rounded-xl font-medium p-5 space-y-6 w-[30rem]">
        <li class="flex items-center justify-between">
          <h1 class="text-2xl font-semibold">Shaxsiy ma'lumotlar</h1>
          <i @click="closeModal" class="bx bx-x text-2xl font-bold cursor-pointer"></i>
        </li>
        <hr class="-mx-5" />
        <li class="flex items-center gap-5">
          <img
            class="h-24 w-24 object-cover shadowPhoto bg-gray-300 rounded-full"
            src="https://sxprotection.com.au/wp-content/uploads/2016/07/team-placeholder.png"
            alt="Photo"
          />
          <a-dropdown class="-ml-11 mt-16" :trigger="['click']">
            <a class="items-center ant-dropdown-link" @click.prevent>
              <i class="bx bxs-camera-plus text-3xl"></i>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="() => getOneProduct(i.id)">
                  O'zgartirish
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item @click="() => deleteProduct(i.id)"
                  >O'chirish</a-menu-item
                >
              </a-menu>
            </template>
          </a-dropdown>
          <div class="w-full">
            <h1 class="text-lg font-semibold">
              <a-input
                class="rounded-md h-9"
                v-model:value="value"
                placeholder="To'liq ismingizni kiriting..."
              />
            </h1>
            <p class="font-medium">
              <a-input
                class="rounded-md mt-2 h-9"
                v-model:value="value"
                placeholder="Manzilingizni kiriting..."
              />
            </p>
          </div>
        </li>
        <li>
          <p class="text-[#6188FF] pb-1">Email</p>
          <p class="font-semibold">
            <a-input
              class="rounded-md"
              v-model:value="value"
              placeholder="Emailingizni kiriting..."
            />
          </p>
        </li>
        <hr class="-mx-5" />
        <li>
          <p class="text-[#6188FF] pb-1">Telefon raqam</p>
          <p class="font-medium">
            <a-input
              class="rounded-md"
              v-model:value="value"
              placeholder="Telefon raqamingizni kiriting..."
            />
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
            type="submit  "
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Saqlash
          </button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

const store = reactive({
  modal: false,
})

const form = reactive({
  full_name: "",
  address: "",
  email: "",
  phone: "",
  image: "",
})

function closeModal() {
  store.modal = false;
}
</script>

<style lang="scss" scoped>
.shadowPhoto {
  box-shadow: 0 14px 24px 0 #2424242a;
}
.card1 {
  background: #8903e2;
}
</style>
