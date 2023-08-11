<template>
  <main>
    <NavbarTop>Sozlamalar</NavbarTop>
    <section class="grid grid-cols-3 px-10 gap-5">
      <ul
        class="col-span-1 mb-20 text-gray-600 overflow-hidden rounded-xl overflow-y-auto max-h-[82vh] min-h-[82vh] shadow-md bg-white"
      >
        <li @click="step = 1" class="px-10 py-3 flex gap-3 cursor-pointer">
          <div class="w-7 flex justify-center">
            <img
              v-if="step === 1"
              src="../../assets/settings/check1.svg"
              alt="check"
            />
            <img v-else src="../../assets/settings/check.svg" alt="check" />
          </div>
          <p :class="{ 'text-[#5C0099]': step == 1 }">Chek</p>
        </li>
        <hr />
        <li @click="step = 2" class="px-10 py-3 flex gap-3 cursor-pointer">
          <div class="w-7 flex justify-center">
            <img
              v-if="step === 2"
              src="../../assets/settings/session1.svg"
              alt="check"
            />
            <img v-else src="../../assets/settings/session.svg" alt="check" />
          </div>
          <p :class="{ 'text-[#5C0099]': step == 2 }">Session</p>
        </li>
        <hr />
        <li @click="step = 3" class="px-10 py-3 flex gap-3 cursor-pointer">
          <div class="w-7 flex justify-center">
            <img
              v-if="step === 3"
              src="../../assets/settings/lang1.svg"
              alt="check"
            />
            <img v-else src="../../assets/settings/lang.svg" alt="check" />
          </div>
          <p :class="{ 'text-[#5C0099]': step == 3 }">Dastur tili</p>
        </li>
        <hr />
        <li @click="step = 4" class="px-10 py-3 flex gap-3 cursor-pointer">
          <div class="w-7 flex justify-center">
            <img
              v-if="step === 4"
              src="../../assets/settings/bell1.svg"
              alt="check"
            />
            <img v-else src="../../assets/settings/bell.svg" alt="check" />
          </div>
          <p :class="{ 'text-[#5C0099]': step == 4 }">Xabarnomalar</p>
        </li>
        <hr />
      </ul>

      <div
        v-show="step === 1"
        class="relative col-span-2 pb-20 overflow-hidden overflow-y-auto max-h-[82vh] bg-white overflow-x-auto shadow-md rounded-xl"
      ></div>

      <div
        v-show="step === 2"
        class="relative col-span-2 pb-20 overflow-hidden overflow-y-auto max-h-[82vh] bg-white overflow-x-auto shadow-md rounded-xl"
      >
        <h1 class="px-6 py-4 text-2xl font-medium">Session</h1>
        <table class="w-full text-sm text-left">
          <thead class="text-xs uppercase bg-gray-50">
            <tr class="font-medium text-gray-500">
              <th scope="col" class="px-6 py-4 text-black">№</th>
              <th scope="col" class="px-6 py-4">Platform</th>
              <th scope="col" class="px-6 py-4">Browser</th>
              <th scope="col" class="px-6 py-4">Device info</th>
              <th scope="col" class="px-6 py-4">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="pb-20 overflow-hidden overflow-y-auto max-h-[82vh]">
            <tr
              v-for="i in 3"
              :key="i"
              class="font-medium border-b hover:bg-gray-50"
            >
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                {{ i }}
              </th>
              <td class="px-6 py-4">“Windows”</td>
              <td class="px-6 py-4">Chrome</td>
              <td class="px-6 py-4">MS-7A74</td>
              <td
                class="px-6 py-4 flex gap-2 text-right text-[#FF6161] font-medium"
              >
                <img src="../../assets/svg/block.svg" alt="" />
                Terminate
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        v-show="step === 3"
        class="relative col-span-2 pb-20 space-y-4 px-10 overflow-hidden overflow-y-auto max-h-[82vh] bg-white overflow-x-auto shadow-md rounded-xl"
      >
        <h1 class="pt-4">Dastur tili</h1>
        <hr class="-mx-10" />

        <div class="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-[#5C0099] focus:ring-0 bg-transparent p-2 border-[#5C0099]"
          />
          <label for="default-radio-1" class="ml-2 text-sm font-medium"
            >Русский</label
          >
        </div>
        <hr class="-mx-10" />
        <div class="flex items-center">
          <input
            checked="true"
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-[#5C0099] focus:ring-0 bg-transparent p-2 border-[#5C0099]"
          />
          <label for="default-radio-2" class="ml-2 text-sm font-medium"
            >Uzbek</label
          >
        </div>
        <hr class="-mx-10" />
      </div>
      <div
        v-show="step === 4"
        class="relative col-span-2 pb-20 space-y-4 px-10 overflow-hidden overflow-y-auto max-h-[82vh] bg-white overflow-x-auto shadow-md rounded-xl"
      >
        <h1 class="pt-4 text-2xl font-semibold">Xabarnomalar</h1>
        <hr class="-mx-10" />

        <div class="flex justify-between items-center">
          <div>
            <h1 class="font-semibold">Elektron pochta</h1>
            <p class="text-gray-600">O'tkazib yuborilgan faollik xabarlari</p>
          </div>

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5C0099]"
            ></div>
          </label>
        </div>
        <hr class="-mx-10" />
        <div class="flex justify-between items-center">
          <div>
            <h1 class="font-semibold">Buyurtma</h1>
            <p class="text-gray-600">Buyurtma uchun xabarnoma</p>
          </div>

          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5C0099]"
            ></div>
          </label>
        </div>
        <hr class="-mx-10" />
      </div>
    </section>
  </main>
</template>

<script setup>
const step = ref(1);
</script>

<style lang="scss" scoped></style>
