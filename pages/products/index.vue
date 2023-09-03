<template>
  <main>
    <Navbar>Mahsulotlar</Navbar>
    <div class="px-10 overflow-hidden overflow-y-auto max-h-[82vh]">
      <section>
        <ul class="flex gap-10 border-b-2 py-5 text-[#555555] -mt-2">
          <li
            v-for="(i, index) in category"
            :key="i"
            :class="{ 'text-[#5C0099]': step == index }"
            class="leading-3 cursor-pointer duration-1000 pt-2 border-b-2 border-transparent font-bold"
            @click="step = index"
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
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            @click="returnPage"
            :class="store.page == 1 ? 'bg-gray-300' : ''"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            @click="
              () => {
                store.page = store.page > 5 ? store.page + i - 5 : i;
                getProduct(store.token, store.page);
              }
            "
            v-for="i in store.total_pages >= 5 ? 5 : store.total_pages"
            :key="i"
            :class="
              store.page == (store.page > 5 ? store.page + i - 5 : i)
                ? 'bg-[#5C0099] text-white'
                : ''
            "
            class="relative inline-flex items-center hover:bg-[#9630d9] px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          >
            {{ store.page > 5 ? store.page + i - 5 : i }}
          </button>
          <button
            @click="addPage"
            :class="store.total_pages <= store.page ? 'bg-gray-300' : ''"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
        <nav
          class="flex items-center border cursor-pointer border-[#666666] rounded-lg px-4 py-2 gap-3 h-10 w-32"
        >
          <img class="h-6 w-6" src="../../assets/svg/filter.svg" alt="filter" />
          Filtrlash
        </nav>
      </section>
      <section
        v-if="store.isLoading"
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-2 gap-5"
      >
        <div v-for="i in 8" :key="i.id" class="max-w-sm bg-white rounded-lg">
          <img
            alt="img"
            class="rounded-t-lg animate-pulse cursor-pointer border w-full h-[166px] object-cover"
            src="https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png"
            @click="open = true"
          />
          <div class="p-5">
            <div class="flex justify-between items-center">
              <button
                class="h-9 w-20 border pb-1 animate-pulse border-gray-200 bg-gray-200 font-medium rounded-lg"
              ></button>
              <img
                class="cursor-pointer"
                src="../../assets/svg/dot.svg"
                alt="actions"
              />
            </div>
            <div class="flex font-medium justify-between leading-10">
              <ul
                class="mb-3 text-[#666666] dark:text-gray-400 space-y-5 mt-3 w-full"
              >
                <li
                  v-for="i in 6"
                  :key="i"
                  class="h-5 rounded-lg bg-gray-200 animate-pulse"
                ></li>
                <li
                  class="h-5 rounded-lg bg-gray-200 w-1/2 text-lg font-semibold animate-pulse text-[#242424]"
                ></li>
                <li
                  class="h-5 rounded-lg bg-gray-200 w-1/2 text-lg font-semibold animate-pulse text-[#242424]"
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section v-else-if="!store.products?.length || false">
        <p
          class="flex flex-col items-center justify-center bg-white rounded-xl shadow h-80 gap-5"
        >
          <img src="../../assets/svg/cartLoading.svg" alt="not_found" />
          Mahsulotlar topilmadi Figmaga qarab o'zgartiriladi...
        </p>
      </section>
      <section
        v-else
        class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-2 gap-5"
      >
        <div
          v-for="i in store.products"
          :key="i.id"
          class="max-w-sm bg-white rounded-lg"
        >
          <img
            v-if="!i.image?.length"
            alt="img"
            class="rounded-t-lg cursor-pointer border w-full h-[166px] object-cover"
            src="https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png"
            @click="open = true"
          />
          <img
            v-if="i.image?.length"
            class="rounded-t-lg cursor-pointer w-full h-[166px] object-cover"
            :src="baseUrl + i.image[0]?.image"
            alt="img"
            @click="
              open = true;
              getOneProduct(i.id);
            "
          />
          <div class="p-5">
            <div class="flex justify-between items-center">
              <button
                class="h-9 w-20 border pb-1 border-[#45D469] text-[#45D469] font-medium rounded-lg"
              >
                Sotuvda
              </button>
              <a-dropdown :trigger="['click']">
                <a class="items-center ant-dropdown-link" @click.prevent>
                  <img
                    class="cursor-pointer"
                    src="../../assets/svg/dot.svg"
                    alt="actions"
                  />
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item @click="() => getOneProduct(i.id)">
                      O'zgartirish
                    </a-menu-item>
                    <a-menu-item key="1"> Ko'rish </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item @click="() => deleteProduct(i.id)"
                      >O'chirish</a-menu-item
                    >
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
            <div class="flex font-medium justify-between leading-10">
              <ul class="mb-3 text-[#666666] dark:text-gray-400">
                <li>ID</li>
                <li>Reyting</li>
                <li>Ko‘rilganlar soni</li>
                <li>Sotilgan</li>
                <li>Qaytarilgan</li>
                <li>Nuqson</li>
                <li class="text-lg font-semibold text-[#242424]">
                  {{ i.name }}
                </li>
                <li class="text-[#000000]">
                  <span>{{ i.price }}</span> so‘m dan
                </li>
              </ul>
              <ul class="mb-3 text-end text-[#000000] dark:text-gray-400">
                <li>#{{ i.id }}</li>
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
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                  @click="open = false"
                >
                  <i class="bx bx-x text-2xl font-bold"></i>
                </button>
              </div>
              <!-- Modal body -->
              <div class="px-10 py-5">
                <ul class="space-y-6" v-for="i in store.showProduct" :key="i?.id">
                  <li class="font-semibold text-lg text-[#242424]">
                    {{i.name}}
                  </li>
                  <li class="flex gap-6 items-center">
                    <button
                      class="h-9 w-20 border pb-1 border-[#45D469] text-[#45D469] font-medium rounded-lg"
                    >
                      Sotuvda
                    </button>
                    <p>#{{i.id}}</p>
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
                  <li class="font-medium text-lg">{{ i.price }} so‘m</li>
                  <hr />
                  <li>KOMISSIYA</li>
                  <li class="font-medium text-lg">10 %</li>
                  <hr />
                  <li>MAHSULOT KARTASIGA HAVOLA</li>
                  <li>
                    <a
                      class="text-[#6188FF] font-medium text-lg border-b border-[#6188FF]"
                      href="#"
                      >{{i.name}}</a
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
      <section>
        <div
          class="flex items-center mt-20 justify-between border-t rounded-lg border-gray-200 bg-white px-4 py-3 sm:px-6"
        >
          <div class="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >Previous</a
            >
            <a
              href="#"
              class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >Next</a
            >
          </div>
          <div
            class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"
          >
            <div>
              <p class="text-sm text-gray-700">
                <span class="font-medium">{{ store.total_count }}</span>
                ta natijadan
                <span class="font-medium">{{ store.currentPage }}</span>
                dan
                <span class="font-medium">10</span>
                gacha koʻrsatilmoqda
              </p>
            </div>
            <div>
              <nav
                class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  @click="returnPage"
                  :class="store.page == 1 ? 'bg-gray-300' : ''"
                  class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  @click="
                    () => {
                      store.page = store.page > 5 ? store.page + i - 5 : i;
                      getProduct(store.token, store.page);
                    }
                  "
                  v-for="i in store.total_pages >= 5 ? 5 : store.total_pages"
                  :key="i"
                  :class="
                    store.page == (store.page > 5 ? store.page + i - 5 : i)
                      ? 'bg-[#5C0099] text-white'
                      : ''
                  "
                  class="relative inline-flex items-center hover:bg-[#9630d9] px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >
                  {{ store.page > 5 ? store.page + i - 5 : i }}
                </button>
                <button
                  @click="addPage"
                  :class="store.total_pages <= store.page ? 'bg-gray-300' : ''"
                  class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { useNotification } from "../composables/notification";

const { showLoading, showSuccess, showWarning, showError } = useNotification();

const runtimeconfig = useRuntimeConfig();
const baseUrl = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -4));
const router = useRouter();
console.log(baseUrl.value);

const category = [
  "Hammasi",
  "Sotilganlar",
  "Sotilmaganlar",
  "Arxivlanganlar",
  "Bloklanganlar",
];

const open = ref(false);
const step = ref(0);

const store = reactive({
  products: [],
  isLoading: true,
  currentPage: 0,
  total_count: 0,
  total_pages: 0,
  page: 1,
  showProduct: "",
});

function addPage() {
  if (store.total_pages <= store.page) return;
  store.page += 1;
  getProduct(store.token, store.page);
}

function returnPage() {
  if (store.page < 2) return;
  store.page -= 1;
  getProduct(store.token, store.page);
}

function getProduct(token, page) {
  store.isLoading = true;
  fetch(`https://florify-market.onrender.com/api/product/page?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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
      console.log(res.data?.records);
      console.log(res.data?.pagination);
      store.products = res.data?.records;
      store.currentPage = res.data?.pagination?.currentPage;
      store.total_count = res.data?.pagination?.total_count;
      store.total_pages = res.data?.pagination?.total_pages;
      store.isLoading = false;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getOneProduct(id) {
  fetch(`https://florify-market.onrender.com/api/product/${id}`, {
    method: "GET",
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
      store.showProduct = [res];
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteProduct(id) {
  showLoading("So'rov yuborilmoqda...");
  fetch(`https://florify-market.onrender.com/api/product/${id}`, {
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
      getProduct(store.token, store.page);
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  const token = localStorage.getItem("token");
  getProduct(token, store.page);
});
</script>

<style lang="scss" scoped></style>
