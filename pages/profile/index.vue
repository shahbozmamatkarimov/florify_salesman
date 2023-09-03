
<template>
  <main>
    <NavbarTop>Profil</NavbarTop>
    <section class="grid grid-cols-2 gap-5 px-10">
      <div class="space-y-5 pb-20 overflow-hidden overflow-y-auto max-h-[82vh]">
        <ul class="bg-[#FFFFFF] rounded-xl font-medium p-5 space-y-6">
          <li class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">Shaxsiy ma'lumotlar</h1>
            <img src="../../assets/svg/editBtn.svg" alt="edit" />
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
          <hr class="-mx-5" />
          <li class="-mb-3 text-[#6188FF]">Ijtimoiy tarmoqlar</li>
          <li class="flex justify-between items-center pb-5">
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
          </li>
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
            <p class="text-[#6188FF] pb-1">Do‘kon telefon raqam</p>
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
  </main>
</template>

<script>
definePageMeta({
  layout: "custom",
});
export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.shadowPhoto {
  box-shadow: 0 14px 24px 0 #2424242a;
}
.card1 {
  background: #8903e2;
}
</style>
