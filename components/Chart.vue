<template>
  <main class="min-h-screen pt-20">
    <section class="flex gap-10 items-center justify-between">
      <div
        class="rounded-xl overflow-hidden overflow-x-auto w-full h-[25rem] px-5 pb-10 bg-[#FFFFFF]"
        id="main"
      >
        <div class="flex justify-between sticky left-0 items-center gap-2 py-5">
          <div class="flex gap-2 items-center">
            <img class="pt-1" src="../assets/svg/money.svg" alt="money" />
            <h1 class="font-medium text-3xl">122 552 250,80 so‘m</h1>
          </div>
          <div class="flex mr-4">
            <select
              class="duration-100 border cursor-pointer border-gray-300 focus:border-gray-300 focus:ring-0 rounded-lg"
            >
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
            <img
              class="-ml-6 scale-150"
              src="./../assets/svg/strelka.svg"
              alt=""
            />
          </div>
        </div>
        <div class="flex py-6 gap-5">
          <ul class="space-y-6 px-2 sticky -left-5 bg-white z-30">
            <li>200</li>
            <li>150</li>
            <li>100</li>
            <li>50</li>
            <li>0</li>
          </ul>
          <div>
            <ul class="flex gap-6">
              <li
                v-for="(i, index) in data[0].May"
                :key="index"
                class="flex relative flex-col -top-3 items-center gap-5 justify-end"
              >
                <div>
                  <div
                    class="popover__wrapper flex flex-col items-center mx-[0.8px]"
                  >
                    <div class="popover__content flex flex-col items-center">
                      <p class="text-[#45D469] text-xs whitespace-nowrap">
                        {{ i.order }}+ buyurtma
                      </p>
                      <p
                        class="font-bold text-sm text-[#242424] whitespace-nowrap"
                      >
                        {{ i.sum }} so‘m
                      </p>
                    </div>
                    <textarea
                      class="bg-[#5C0099] mx-auto rounded-lg w-4 -mt-10 pointer-events-none block border-none resize-none"
                      :rows="i.order > 25 ? `${i.order / 25}px` : '1px'"
                      disabled
                    ></textarea>
                    <p class="pt-5 whitespace-nowrap">
                      <span v-if="index < 9">0</span>{{ index + 1 }} May
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- chart 2 -->
      <div class="w-[400px] px-10 h-96 bg-[#FFFFFF] py-5 rounded-xl" id="main">
        <h1 class="text-sm">Tashriflar soni</h1>
        <p class="font-medium text-3xl py-2">1.345.987</p>
        <div class="text-white font-medium py-5">
          <div
            class="bg-[#EF9B00] w-44 h-44 rounded-full flex flex-col space-y-1 items-center justify-center"
          >
            <h1 class="text-sm">Mobil dastur</h1>
            <p class="text-xl">1.148.541</p>
          </div>
          <div
            class="bg-[#4684CE] w-28 h-28 rounded-full ml-32 -mt-16 flex flex-col space-y-1 items-center justify-center"
          >
            <h1>Veb sayt</h1>
            <p>9.999.999</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const value = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
    disabled: true,
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];

const data = [
  {
    May: [
      { order: 100, sum: "34.568.150" },
      { order: 150, sum: "25.508.120" },
      { order: 110, sum: "30.500.100" },
      { order: 50, sum: "5.560.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 100, sum: "34.568.150" },
      { order: 150, sum: "25.508.120" },
      { order: 110, sum: "30.500.100" },
      { order: 50, sum: "5.560.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 100, sum: "34.568.150" },
      { order: 150, sum: "25.508.120" },
      { order: 110, sum: "30.500.100" },
      { order: 50, sum: "5.560.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
    ],
  },
];
</script>

<style lang="scss" scoped>
/* Popover styling */
.popover__wrapper {
  position: relative;
  top: 60px;
}
.popover__content {
  opacity: 0;
  position: absolute;
  top: -50px;
  background-color: #e6e6e6;
  box-shadow: 0 0px 1px 0 rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  height: 60px;
  width: 160px;
  z-index: 99;
}
.popover__content:before {
  position: absolute;
  z-index: 99;
  content: "";
  right: calc(50% - 10px);
  bottom: -10px;
  border-style: solid;
  border-width: 1px 10px 10px 10px;
  border-color: transparent transparent #e6e6e6 transparent;
  transition-duration: 0.3s;
  transition-property: transform;
  transform: rotate(180deg);
}
.popover__wrapper:hover .popover__content {
  z-index: 99;
  opacity: 1;
  visibility: visible;
  transform: translate(0, -60px);
  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}

/* Popover styling */
</style>
