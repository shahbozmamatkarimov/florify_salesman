<template>
  <main>
    <NavbarTop>Sharhlar</NavbarTop>
    <div
      class="flex gap-10 px-10 overflow-hidden overflow-y-auto mb-2 max-h-[90vh]"
    >
      <section class="w-full bg-white rounded-xl mb-2">
        <div class="mb-4">
          <ul
            class="flex text-[#666666] flex-wrap px-6 text-sm font-medium text-center"
          >
            <li class="mr-2">
              <button
                class="inline-block pt-4 mr-4 pb-2 border-b-2 border-[#5C0099] text-[#5C0099] rounded-t-lg"
              >
                Hammasi
              </button>
            </li>
            <li class="mr-2">
              <button
                class="inline-block pt-4 mr-4 pb-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              >
                Yangi sharhlar
              </button>
            </li>
            <li class="mr-2">
              <button
                class="inline-block pt-4 mr-4 pb-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              >
                Javob yozilmagan
              </button>
            </li>
            <li>
              <button
                class="inline-block pt-4 mr-4 pb-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              >
                Javob yozilgan
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div class="bg-gray-50">
            <div
              class="relative overflow-x-auto overflow-hidden overflow-y-auto max-h-[71vh] shadow-md rounded-b-xl"
            >
              <table class="w-full text-sm text-left text-gray-500">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="i in 10"
                    :key="i"
                    :class="i % 2 == 0 ? 'bg-[#F7F9FF]' : 'bg-white'"
                    class="hover:bg-gray-100 cursor-pointer"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 text-[#6188FF] font-medium whitespace-nowrap"
                    >
                      Lolalar assorti
                    </th>
                    <td class="flex px-6 py-4">
                      <img
                        v-for="img in 5"
                        :key="img"
                        src="../../assets/svg/yellowstar.svg"
                        alt="star"
                      />
                    </td>
                    <td class="px-6 py-4 text-[#242424]">02 July, 2023</td>
                    <td class="px-6 py-4">
                      <img
                        v-show="i % 2 == 0"
                        src="../../assets/svg/read.svg"
                        alt="read"
                      />
                      <img
                        v-show="i % 2 == 1"
                        src="../../assets/svg/unread.svg"
                        alt="read"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            id="dashboard"
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p class="text-sm text-gray-500">
              This is some placeholder content the
              <strong class="font-medium text-gray-800 dark:text-white"
                >Dashboard tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            id="settings"
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p class="text-sm text-gray-500">
              This is some placeholder content the
              <strong class="font-medium text-gray-800 dark:text-white"
                >Settings tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            id="contacts"
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p class="text-sm text-gray-500">
              This is some placeholder content the
              <strong class="font-medium text-gray-800 dark:text-white"
                >Contacts tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </section>
      <section
        class="flex hidden flex-col max-h-[70vh] shadow sticky top-0 items-center justify-center w-[420px] bg-white rounded-xl"
      >
        <img src="../../assets/svg/message.svg" alt="message" />
        <h1 class="w-40 text-center">
          Batafsil ko‘rish uchun, sharhlardan birortasini tanglang
        </h1>
      </section>
      <section
        class="flex flex-col overflow-hidden overflow-y-auto p-5 text-sm max-h-[80vh] shadow sticky top-0 items-center w-[420px] bg-white rounded-xl"
      >
        <ul class="space-y-5">
          <li>Haridorga javob yozish</li>
          <hr />
          <li class="font-medium text-[#242424]">Lolalar assorti</li>
          <li class="flex justify-between">
            <p class="font-medium text-sm">Umida Salohiddinova</p>
            <div class="flex">
              <img
                v-for="i in 5"
                :key="i"
                src="../../assets/svg/yellowstar.svg"
                alt="star"
              />
            </div>
          </li>
          <li class="flex justify-between">
            <h1 class="text-[#454545] text-sm">Buyurtma qilgan vaqt</h1>
            <p class="text-[#242424]">29 Dek, 2022</p>
          </li>
          <li class="flex justify-between">
            <h1 class="text-[#454545] text-sm">Sharh qoldirgan</h1>
            <p class="text-[#242424]">2 Iyul, 2023</p>
          </li>
          <li class="flex justify-between">
            <h1 class="text-[#454545] text-sm">ID sharh</h1>
            <p class="text-[#242424]">268153</p>
          </li>
          <hr />
          <li class="flex">
            <img
              v-for="i in 5"
              :key="i"
              src="../../assets/svg/yellowstar.svg"
              alt="star"
            />
          </li>
          <li>
            Огромная благодарность за подаренный праздник души!!!Все прошло
            исключительно на высшем уровне,расстояние не помеха порадовать
            родную душу!!!!
          </li>
          <hr />
          <li>
            <div class="p-5"></div>
            <h1 class="text-[#6188FF] hidden">Sizning javobingiz</h1>
            <form>
              <a-textarea
                v-model:value="comment"
                class="placeholder-[#454545]"
                :autoSize="{ minRows: 3, maxRows: 6 }"
                showCount
                placeholder="Javob yozish..."
                :maxlength="250"
                required
                oninvalid="setCustomValidity('Iltimos, javobingizni kiriting!')"
                oninput="setCustomValidity('')"
              />
              <div class="text-end w-full mt-7">
                <button
                  class="bg-[#EEEEEE] rounded-md h-8 pb-1 w-20 text-[#000000]"
                >
                  Yuborish
                </button>
              </div>
            </form>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>
<script setup>
// layout
// const  layout = "custom"
// layout

definePageMeta({
  layout: "custom",
});

const comment = ref("");
</script>
<style lang="scss" scoped></style>
