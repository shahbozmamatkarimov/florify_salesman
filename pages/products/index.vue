<template>
  <main>
    <Navbar>Mahsulotlar</Navbar>
    <div class="px-10 pb-40 overflow-hidden overflow-y-auto max-h-[82vh]">
      <section>
        <ul class="flex gap-10 border-b-2 py-5 text-[#555555] -mt-2">
          <li
            @click="step = index"
            :class="{ 'text-[#5C0099]': step == index }"
            class="leading-3 cursor-pointer duration-1000 pt-2 border-b-2 border-transparent font-bold"
            v-for="(i, index) in category"
            :key="i"
          >
            {{ i }}
            <span
              v-show="step == index"
              class="inline-block duration-1000 w-full border-b-2 border-[#5C0099]"
            ></span>
          </li>
        </ul>
      </section>
      <section class="flex items-center justify-between my-10">
        <nav aria-label="Page navigation example">
          <ul class="flex items-center font-medium -space-x-px h-10 text-xl">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border-gray-300 rounded-l-lg hover:bg-[#9630d9] hover:text-white"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center bg-[#5C0099] hover:bg-[#9630d9] justify-center px-4 h-10 leading-tight text-white border-l border-gray-300"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-l border-gray-300 hover:bg-[#9630d9] hover:text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 flex items-center justify-center px-4 h-10 leading-tight border-l border-blue-300 text-gray-500 bg-white hover:bg-[#9630d9] hover:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-l border-gray-300 hover:bg-[#9630d9] hover:text-white"
                >4</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-l border-gray-300 hover:bg-[#9630d9] hover:text-white"
                >5</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-l border-gray-300 rounded-r-lg hover:bg-[#9630d9] hover:text-white"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <nav
          class="flex items-center border cursor-pointer border-[#666666] rounded-lg px-4 py-2 gap-3 h-10 w-32"
        >
          <img class="h-6 w-6" src="../../assets/svg/filter.svg" alt="filter" />
          Filtrlash
        </nav>
      </section>
      <section
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-2 gap-5"
      >
        <div v-for="i in 8" :key="i" class="max-w-sm bg-white rounded-lg">
          <img
            @click="open = true"
            class="rounded-t-lg cursor-pointer w-full h-[166px] object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cIDWfMyU-Sl4TFYFABztCniCx0EpkKBkUWO3MhRKqS8vTmWNidp8y3-FNM30Ltg8nws&usqp=CAU"
            alt=""
          />
          <div class="p-5">
            <div class="flex justify-between items-center">
              <button
                class="h-9 w-20 border pb-1 border-[#45D469] text-[#45D469] font-medium rounded-lg"
              >
                Sotuvda
              </button>
              <img
                class="cursor-pointer"
                src="../../assets/svg/dot.svg"
                alt="actions"
              />
            </div>
            <div class="flex font-medium justify-between leading-10">
              <ul class="mb-3 text-[#666666] dark:text-gray-400">
                <li>ID</li>
                <li>Reyting</li>
                <li>Ko‘rilganlar soni</li>
                <li>Sotilgan</li>
                <li>Qaytarilgan</li>
                <li>Nuqson</li>
                <li class="text-lg font-semibold text-[#242424]">Фрида Кало</li>
                <li class="text-[#000000]">700 000 so‘m dan</li>
              </ul>
              <ul class="mb-3 text-end text-[#000000] dark:text-gray-400">
                <li>#55213</li>
                <li>0.00</li>
                <li>115</li>
                <li>11</li>
                <li>0</li>
                <li>0</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <!-- Main modal -->
        <div
          v-show="open"
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          class="flex justify-center items-center absolute bg-[#8c8cee0d] backdrop-blur-[1px] z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-4xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div
                class="flex items-center justify-between px-4 pt-1 pb-4 border-b rounded-t"
              >
                <div>
                  <ul class="flex flex-wrap text-sm font-medium text-center">
                    <li class="mr-2">
                      <button
                        class="inline-block p-4 pb-2 border-b-2 text-[#5C0099] rounded-t-lg border-[#5C0099]"
                      >
                        Informatsiya
                      </button>
                    </li>
                    <li class="mr-2">
                      <button
                        class="inline-block p-4 pb-2 border-b-2 border-transparent rounded-t-lg hover:text-[#5C0099] hover:border-[#5C0099]"
                      >
                        Tahrirlash
                      </button>
                    </li>
                  </ul>
                </div>
                <button
                  @click="open = false"
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <i class="bx bx-x text-2xl font-bold"></i>
                </button>
              </div>
              <!-- Modal body -->
              <div class="px-10 py-5">
                <ul class="space-y-6">
                  <li class="font-semibold text-lg text-[#242424]">
                    Фрида Кало
                  </li>
                  <li class="flex gap-6 items-center">
                    <button
                      class="h-9 w-20 border pb-1 border-[#45D469] text-[#45D469] font-medium rounded-lg"
                    >
                      Sotuvda
                    </button>
                    <p>#55213</p>
                  </li>
                  <li>Mahsulot rasmi</li>
                  <li class="flex items-center gap-5">
                    <img
                      class="w-60 h-56 rounded-xl"
                      src="../../assets/images/stripes.jpg"
                      alt="img"
                    />
                    <img
                      v-for="i in 3"
                      :key="i"
                      class="w-44 h-40 rounded-xl"
                      src="../../assets/images/stripes.jpg"
                      alt="img"
                    />
                  </li>
                  <li>Narxi</li>
                  <li class="font-medium text-lg">700 000 so‘m</li>
                  <hr />
                  <li>KOMISSIYA</li>
                  <li class="font-medium text-lg">10 %</li>
                  <hr />
                  <li>MAHSULOT KARTASIGA HAVOLA</li>
                  <li>
                    <a
                      class="text-[#6188FF] font-medium text-lg border-b border-[#6188FF]"
                      href="#"
                      >Фрида Кало</a
                    >
                  </li>
                  <hr />
                  <li>REYTINGI</li>
                  <li class="flex gap-5 font-medium text-lg">
                    <img src="../../assets/svg/rating.svg" alt="rate" />
                    <p>0./5 (0 ta sharh)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
const category = [
  "Hammasi",
  "Sotilganlar",
  "Sotilmaganlar",
  "Arxivlanganlar",
  "Bloklanganlar",
];

const open = ref(false);
const step = ref(0);
</script>

<style lang="scss" scoped></style>
