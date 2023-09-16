<template>
  <main>
    <section class="border-b-2 mx-10 mb-1">
      <nav class="flex items-center w-full z-50 -mt-1">
        <div class="w-full flex flex-wrap items-center h-32 justify-between">
          <div
            class="flex items-center gap-1 self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >
            <h1><slot></slot></h1>
            <img
              class="font-semibold text-3xl"
              src="../assets/svg/star.svg"
              alt="star"
            />
          </div>
          <div class="flex xl:w-auto w-full justify-between gap-6">
            <form class="lg:block hidden">
              <div class="relative xl:min-w-[350px]">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <img src="../assets/svg/search.svg" alt="search" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block xl:min-w-full h-12 pl-10 md:text-lg outline-none rounded-lg bg-white"
                  placeholder="Qidirish..."
                  required
                />
              </div>
            </form>
            <button
              type="submit"
              @click="is_search = !is_search"
              class="bg-white lg:hidden rounded-lg px-4 py-2"
            >
              <img src="../assets/svg/search.svg" alt="search" />
            </button>
            <button
              type="button"
              class="text-white bg-white rounded-lg px-4 py-2"
            >
              <img src="../assets/svg/bell.svg" alt="search" />
            </button>
            <div @click="() => (productStore.state.openEditModal = true)">
              <button
                type="button"
                class="flex items-center gap-2 text-white bg-[#45D469] hover:bg-[#2ead4d] font-medium rounded-lg px-5 py-2.5"
              >
                <img src="../assets/svg/plus.svg" alt="search" />
                Mahsulot qo'shish
              </button>
            </div>
          </div>
        </div>
      </nav>
      <form v-if="is_search" class="w-full">
        <div class="relative lg:hidden w-full">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <img src="../assets/svg/search.svg" alt="search" />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full h-12 pl-10 outline-none rounded-lg bg-white"
            placeholder="Qidirish..."
            required
          />
        </div>
      </form>
    </section>
    <!-- Modal toggle -->
    <section>
      <!-- Main modal -->
      <div
        v-if="productStore.state.openEditModal"
        tabindex="-1"
        aria-hidden="true"
        class="flex justify-center items-center bg-[#8c8cee0d] backdrop-blur-[1px] fixed top-0 left-0 right-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)]"
      >
        <div class="relative ml-[260px] w-full max-h-full">
          <!-- Modal content -->
          <form
            @submit.prevent="handleSubmit"
            class="relative w-full bg-[#F4F4F6] shadow dark:bg-gray-700"
          >
            <!-- Modal header -->
            <div
              class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
            >
              <div
                class="flex items-center gap-1 self-center text-2xl font-semibold whitespace-nowrap"
              >
                <h1>Mahsulot qo‘shish</h1>
                <img
                  class="font-semibold text-3xl"
                  src="../assets/svg/star.svg"
                  alt="star"
                />
              </div>
              <button
                @click="() => closeModal()"
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <i class="bx bx-x text-2xl"></i>
              </button>
            </div>
            <!-- Modal body -->
            <div
              class="gap-10 grid grid-cols-2 w-full overflow-x-hidden overflow-y-auto max-h-[79vh]"
            >
              <div class="flex col-span-1 flex-col p-6">
                <div class="border-b-2 pb-5 mb-5 space-y-5">
                  <label for="category">Mahsulot kategoriyasi</label>
                  <a-select
                    id="category"
                    size="large"
                    v-model:value="create.category_id"
                    show-search
                    placeholder="Kategoriyani tanlang"
                    style="width: 100%"
                    :options="options"
                    :filter-option="filterOption"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @change="handleChange"
                    required=""
                  ></a-select>
                  <!-- <button
                    type="button"
                    class="py-3 px-4 max-w-fit bg-[#fff] rounded-lg text-[#242424]"
                  >
                    Tasdiqlash
                  </button> -->
                </div>
                <div class="space-y-5 pb-5">
                  <label class="flex gap-3" for="name"
                    ><span>Mahsulot nomi<i class="text-[#FF6161]">*</i></span
                    ><img src="../assets/svg/warn.svg" alt="img"
                  /></label>
                  <a-input
                    id="name"
                    size="large"
                    v-model:value="create.name"
                    placeholder="Mahsulot nomini kiriting"
                    show-count
                    :maxlength="20"
                    required
                  />
                </div>
                <div class="pb-5 space-y-5">
                  <label class="flex gap-3" for="description"
                    ><span>Mahsulot tavsifi<i class="text-[#FF6161]">*</i></span
                    ><img src="../assets/svg/warn.svg" alt="img"
                  /></label>
                  <div>
                    <a-textarea
                      id="description"
                      v-model:value="create.description"
                      placeholder="Tavsif yozish..."
                      :auto-size="{ minRows: 3, maxRows: 6 }"
                      required
                    />
                  </div>
                </div>
                <div class="pb-5 space-y-5">
                  <label for="price">Mahsulot narxi *</label><br />
                  <a-space>
                    <a-input-number
                      id="price"
                      v-model:value="create.price"
                      class="w-full placeholder-[#555555]"
                      size="large"
                      placeholder="Mahsulot narxini kiriting"
                      type="number"
                      required
                    />
                  </a-space>
                </div>
                <div class="pb-5 space-y-5">
                  <label for="deal">Zahira miqdori</label><br />
                  <a-space>
                    <a-input-number
                      id="deal"
                      v-model:value="create.quantity"
                      class="w-full placeholder-[#555555]"
                      size="large"
                      placeholder="Zahira miqdorinii kiriting"
                      type="number"
                      required
                    />
                  </a-space>
                </div>
              </div>
              <div class="pt-6 w-full">
                <h1 class="text-lg">
                  Mahsulot galeriyasi <i class="text-[#FF6161]">*</i>
                </h1>

                <!---------------------------- Main Image -------------------------------------->

                <div
                  class="mt-6 border border-gray-200 rounded-xl w-[400px] h-[360px] relative"
                  v-if="store.file1"
                >
                  <img
                    class="w-full h-full opacity-50 absolute object-cover rounded-xl"
                    :src="store.file1"
                    alt="img"
                  />
                  <label
                    for="imageMain"
                    class="flex flex-col hover:bg-[#0000002a] cursor-pointer top-0 z-10 h-full rounded-xl relative justify-center items-center"
                  >
                    <img
                      class="scale-150 mx-auto py-2"
                      src="../assets/svg/whiteplaceholder.svg"
                      alt="img"
                    />
                    <p class="text-[#FFFFFF]">
                      R<span class="lowercase">asmni o‘zgartirish</span>
                    </p>
                  </label>
                </div>
                <label
                  v-else
                  for="imageMain"
                  class="flex flex-col mt-6 gap-3 text-center justify-center items-center w-[400px] h-[360px] bg-white border rounded-xl border-dashed border-[#F9F9F9]"
                >
                  <div>
                    <img
                      class="scale-150 mx-auto py-2"
                      src="../assets/svg/upload.svg"
                      alt="img"
                    />
                    <p class="w-[210px]">
                      R<span class="lowercase"
                        >asmni shu yerga qo‘ying yoki yuklang</span
                      >
                    </p>
                    <p class="text-sm font-medium">
                      (J<span class="lowercase">peg, png ruxsat berilgan)</span>
                    </p>
                  </div>
                </label>
                <input
                  @change="(e) => uploadFile(e, 1)"
                  class="w-0 h-0 overflow-hidden"
                  type="file"
                  accept="image/*"
                  id="imageMain"
                />

                <!---------------------------- image1 -------------------------------------->

                <div
                  class="flex items-center justify-between gap-2 h-[80px] w-[400px] bg-white rounded-xl"
                  v-if="store.file2"
                >
                  <div class="flex px-2 items-center gap-2">
                    <img
                      class="w-[60px] h-[60px] border border-gray-200 object-cover rounded-xl"
                      :src="store.file2"
                      alt="img"
                    />
                    <div class="space-y-1">
                      <h1 class="text-[#232321] line-clamp-1 font-semibold">
                        {{ store.name2 }}
                      </h1>
                      <p class="text-[#454545] text-sm">{{ store.size2 }} KB</p>
                    </div>
                  </div>
                  <div class="flex gap-5 pr-2 pt-7">
                    <label for="image1">
                      <img
                        class="cursor-pointer pt-1"
                        src="../assets/svg/edit.svg"
                        alt="edit"
                      />
                    </label>
                    <img
                      @click="() => deleteFile(2)"
                      class="cursor-pointer"
                      src="../assets/svg/delete.svg"
                      alt="delete"
                    />
                  </div>
                </div>
                <label
                  v-else
                  for="image1"
                  class="flex px-2 items-center justify-around h-[80px] w-[400px] bg-white rounded-xl"
                >
                  <img
                    class="scale-150"
                    src="../assets/svg/upload.svg"
                    alt="img"
                  />
                  <div class="text-[15px]">
                    R<span class="lowercase"
                      >asmni shu yerga qo‘ying yoki ko‘rib chiqing</span
                    >
                    <p>
                      (J<span class="lowercase">peg, png ruxsat berilgan)</span>
                    </p>
                  </div>
                </label>
                <input
                  @change="(e) => uploadFile(e, 2)"
                  class="w-0 h-0 overflow-hidden"
                  type="file"
                  id="image1"
                />

                <!---------------------------- image2 -------------------------------------->

                <div
                  class="flex items-center justify-between gap-2 h-[80px] w-[400px] bg-white rounded-xl"
                  v-if="store.file3"
                >
                  <div class="flex px-2 items-center gap-2">
                    <img
                      class="w-[60px] h-[60px] border border-gray-200 object-cover rounded-xl"
                      :src="store.file3"
                      alt="img"
                    />
                    <div class="space-y-1">
                      <h1 class="text-[#232321] line-clamp-1 font-semibold">
                        {{ store.name3 }}
                      </h1>
                      <p class="text-[#454545] text-sm">{{ store.size3 }} KB</p>
                    </div>
                  </div>
                  <div class="flex gap-5 pr-2 pt-7">
                    <label for="image2">
                      <img
                        class="cursor-pointer pt-1"
                        src="../assets/svg/edit.svg"
                        alt="edit"
                      />
                    </label>
                    <img
                      @click="() => deleteFile(3)"
                      class="cursor-pointer"
                      src="../assets/svg/delete.svg"
                      alt="delete"
                    />
                  </div>
                </div>
                <label
                  v-else
                  for="image2"
                  class="flex px-2 items-center justify-around h-[80px] w-[400px] bg-white rounded-xl"
                >
                  <img
                    class="scale-150"
                    src="../assets/svg/upload.svg"
                    alt="img"
                  />
                  <div class="text-[15px]">
                    R<span class="lowercase"
                      >asmni shu yerga qo‘ying yoki ko‘rib chiqing</span
                    >
                    <p>
                      (J<span class="lowercase">peg, png ruxsat berilgan)</span>
                    </p>
                  </div>
                </label>
                <input
                  class="w-0 h-0 overflow-hidden"
                  type="file"
                  @change="(e) => uploadFile(e, 3)"
                  id="image2"
                />

                <!---------------------------- image3 -------------------------------------->

                <div v-show="store.step > 2">
                  <div
                    class="flex items-center justify-between gap-2 h-[80px] w-[400px] bg-white rounded-xl"
                    v-if="store.file4"
                  >
                    <div class="flex px-2 items-center gap-2">
                      <img
                        class="w-[60px] h-[60px] border border-gray-200 object-cover rounded-xl"
                        :src="store.file4"
                        alt="img"
                      />
                      <div class="space-y-1">
                        <h1 class="text-[#232321] line-clamp-1 font-semibold">
                          {{ store.name4 }}
                        </h1>
                        <p class="text-[#454545] text-sm">
                          {{ store.size4 }} KB
                        </p>
                      </div>
                    </div>
                    <div class="flex gap-5 pr-2 pt-7">
                      <label for="image4">
                        <img
                          class="cursor-pointer pt-1"
                          src="../assets/svg/edit.svg"
                          alt="edit"
                        />
                      </label>
                      <img
                        @click="() => deleteFile(4)"
                        class="cursor-pointer"
                        src="../assets/svg/delete.svg"
                        alt="delete"
                      />
                    </div>
                  </div>
                  <label
                    v-else
                    for="image4"
                    class="flex px-2 items-center justify-around h-[80px] w-[400px] bg-white rounded-xl"
                  >
                    <img
                      class="scale-150"
                      src="../assets/svg/upload.svg"
                      alt="img"
                    />
                    <div class="text-[15px]">
                      R<span class="lowercase"
                        >asmni shu yerga qo‘ying yoki ko‘rib chiqing</span
                      >
                      <p>
                        (J<span class="lowercase"
                          >peg, png ruxsat berilgan)</span
                        >
                      </p>
                    </div>
                  </label>
                  <input
                    @change="(e) => uploadFile(e, 4)"
                    class="w-0 h-0 overflow-hidden"
                    type="file"
                    id="image4"
                  />
                </div>

                <!---------------------------- image4 -------------------------------------->

                <div v-show="store.step > 3">
                  <div
                    class="flex items-center justify-between gap-2 h-[80px] w-[400px] bg-white rounded-xl"
                    v-if="store.file5"
                  >
                    <div class="flex px-2 items-center gap-2">
                      <img
                        class="w-[60px] h-[60px] border border-gray-200 object-cover rounded-xl"
                        :src="store.file5"
                        alt="img"
                      />
                      <div class="space-y-1">
                        <h1 class="text-[#232321] line-clamp-1 font-semibold">
                          {{ store.name5 }}
                        </h1>
                        <p class="text-[#454545] text-sm">
                          {{ store.size5 }} KB
                        </p>
                      </div>
                    </div>
                    <div class="flex gap-5 pr-2 pt-7">
                      <label for="image5">
                        <img
                          class="cursor-pointer pt-1"
                          src="../assets/svg/edit.svg"
                          alt="edit"
                        />
                      </label>
                      <img
                        @click="() => deleteFile(5)"
                        class="cursor-pointer"
                        src="../assets/svg/delete.svg"
                        alt="delete"
                      />
                    </div>
                  </div>
                  <label
                    v-else
                    for="image5"
                    class="flex px-2 items-center justify-around h-[80px] w-[400px] bg-white rounded-xl"
                  >
                    <img
                      class="scale-150"
                      src="../assets/svg/upload.svg"
                      alt="img"
                    />
                    <div class="text-[15px]">
                      R<span class="lowercase"
                        >asmni shu yerga qo‘ying yoki ko‘rib chiqing</span
                      >
                      <p>
                        (J<span class="lowercase"
                          >peg, png ruxsat berilgan)</span
                        >
                      </p>
                    </div>
                  </label>
                  <input
                    class="w-0 h-0 overflow-hidden"
                    type="file"
                    @change="(e) => uploadFile(e, 5)"
                    id="image5"
                  />
                </div>

                <button
                  v-show="store.step < 4"
                  @click="() => (store.step += 1)"
                  type="button"
                  class="mt-6 h-[50px] w-[400px] bg-white rounded-xl"
                >
                  Rasm qo‘shish
                </button>
              </div>
            </div>
            <!-- Modal footer -->
            <div
              class="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
            >
              <button
                @click="() => closeModal()"
                data-modal-hide="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Bekor qilish
              </button>
              <button
                v-if="!store.is_submit"
                data-modal-hide="defaultModal"
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                :disabled="store.is_submit ? true : false"
              >
                Yuklash
              </button>
              <button
                v-else
                disabled="true"
                type="button"
                class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gray-100 hover:text-blue-700 focus:z-10 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  ></path>
                </svg>
                Yuklanmoqda...
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useNotification } from "../composables/notification";
import { useProductsStore } from "@/store/products";

const { showLoading, showSuccess, showWarning, showError } = useNotification();
const productStore = useProductsStore();

const runtimeconfig = useRuntimeConfig();
const baseUrlImage = ref(runtimeconfig.public.apiBaseUrl?.slice(0, -3));
const baseUrl = runtimeconfig.public.apiBaseUrl;

const price = ref();
const description = ref();
const options = ref([]);
const optionsId = ref([]);
const is_search = ref(false);

const store = reactive({
  upload1: "",
  file1: "",
  name1: "",
  size1: "",
  upload2: "",
  file2: "",
  name2: "",
  size2: "",
  upload3: "",
  file3: "",
  name3: "",
  size3: "",
  upload4: "",
  file4: "",
  name4: "",
  size4: "",
  upload5: "",
  file5: "",
  name5: "",
  size5: "",
  step: 2,
  is_submit: false,
});

const create = reactive({
  name: "",
  description: "",
  price: "",
  color: "red",
  category_id: "Kategoriyani tanlang",
  salesman_id: "",
  quantity: "",
});

function closeModal() {
  store.upload1 = "";
  store.file1 = "";
  store.name1 = "";
  store.size1 = "";
  store.upload2 = "";
  store.file2 = "";
  store.name2 = "";
  store.size2 = "";
  store.upload3 = "";
  store.file3 = "";
  store.name3 = "";
  store.size3 = "";
  store.upload4 = "";
  store.file4 = "";
  store.name4 = "";
  store.size4 = "";
  store.upload5 = "";
  store.file5 = "";
  store.name5 = "";
  store.size5 = "";
  store.step = "";
  create.name = "";
  create.description = "";
  create.price = "";
  create.color = "red";
  create.category_id = "Kategoriyani tanlang";
  create.salesman_id = "";
  create.quantity = "";
  productStore.state.openEditModal = false;
}

const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

function deleteFile(id) {
  if (id === 2) {
    store.file2 = "";
  } else if (id === 3) {
    store.file3 = "";
  } else if (id === 4) {
    store.file4 = "";
  } else {
    store.file5 = "";
  }
}

function uploadFile(e, number) {
  if (!e.target.files[0].type.includes("image")) {
    showWarning("Iltimos, rasm kiriting!");
    return;
  }
  if (number == 1) {
    const file = e.target.files[0];
    store.upload1 = file;
    store.name1 = file.name;
    store.size1 = Math.floor(file.size / 1000);
    store.file1 = URL.createObjectURL(file);
  } else if (number == 2) {
    const file = e.target.files[0];
    store.upload2 = file;
    store.name2 = file.name;
    store.size2 = Math.floor(file.size / 1000);
    store.file2 = URL.createObjectURL(file);
  } else if (number == 3) {
    const file = e.target.files[0];
    store.upload3 = file;
    store.name3 = file.name;
    store.size3 = Math.floor(file.size / 1000);
    store.file3 = URL.createObjectURL(file);
  } else if (number == 4) {
    const file = e.target.files[0];
    store.upload4 = file;
    store.name4 = file.name;
    store.size4 = Math.floor(file.size / 1000);
    store.file4 = URL.createObjectURL(file);
  } else {
    const file = e.target.files[0];
    store.upload5 = file;
    store.name5 = file.name;
    store.size5 = Math.floor(file.size / 1000);
    store.file5 = URL.createObjectURL(file);
  }
}

function getCategory() {
  fetch("https://florify.onrender.com/api/category", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (
        res.message == "Token vaqti tugagan!" ||
        res.message == "Token topilmadi!"
      ) {
        router.push("/login");
      }
      console.log(res, "category");
      for (let i of res) {
        options.value.push({
          value: i.id,
          label: i.name,
        });
        optionsId.value.push(i.id);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

const handleSubmit = () => {
  if (create.category_id === "Kategoriyani tanlang") {
    showWarning("Iltimos, Mahsulot kategoriyasini tanlang!");
    return;
  }
  if (!store.file1) {
    showWarning("Asosiy rasm yuklanmagan");
    return;
  }

  const token = localStorage.getItem("token");

  showLoading("Ma'lumotlar yuborilmoqda...");
  store.is_submit = true;
  fetch("https://florify.onrender.com/api/product", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(create),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (
        res.message == "Token vaqti tugagan!" ||
        res.message == "Token topilmadi!"
      ) {
        router.push("/login");
      }
      if (res.message === "Mahsulot qo'shildi") {
        showLoading("Rasmlar yuklanmoqda...");

        const files = [
          store.file1,
          store.file2,
          store.file3,
          store.file4,
          store.file5,
        ];

        const uploadFiles = [
          store.upload1,
          store.upload2,
          store.upload3,
          store.upload4,
          store.upload5,
        ];
        let images = 0;
        let t = 0;
        for (let i = 0; i < 5; i++) {
          if (files[i]) {
            if (uploadFiles[i]) {
              images += 1;
              const formData = new FormData();
              formData.append("image", uploadFiles[i]);
              uploadImage(formData);
            }
          }
        }
        function uploadImage(formData) {
          fetch(
            `https://florify.onrender.com/api/image/create/${res.product?.id}`,
            {
              method: "POST",
              body: formData,
            }
          )
            .then((res) => {
              console.log(res);
              if (res.status === 201) {
                t += 1;
                // getProduct.getProducts(token);
                if (t == images) {
                  closeModal();
                  showSuccess("Mahsulot qo'shildi");
                  store.is_submit = false;
                  productStore.getProducts(1);
                }
              } else {
                showError("Iltimos, Rasmlarni to'g'ri formatda kiriting!");
              }
            })
            .catch((err) => {
              console.log(err);
              showError("Iltimos, Rasmlarni to'g'ri formatda kiriting!");
            });
        }
      } else {
        showError("Iltimos, ma'lumotlarni to'g'ri tartibda kiriting!");
      }
    })
    .catch((err) => {
      console.log(err);
      showError("Iltimos, ma'lumotlarni to'g'ri tartibda kiriting!");
    });
};

watch(
  () => productStore.showProductById,
  () => {
    const product = productStore.showProductById;
    console.log(product);
    create.name = product.name;
    create.description = product.description;
    create.price = product.price;
    create.color = product.color;
    create.category_id = product.category_id;
    create.salesman_id = product.salesman_id;
    create.quantity = product.quantity;

    store.step = product.image?.length;
    for (let i = 1; i <= product.image?.length; i++) {
      store[`file${i}`] = baseUrlImage.value + product.image[i - 1]?.image;
      // store[`upload${i}`] = baseUrlImage.value + product.upload[i-1]?.image;
    }
  }
);

onBeforeMount(() => {
  getCategory();
});

onMounted(() => {
  create.salesman_id = localStorage.getItem("salesman_id");
})
</script>

<style lang="scss" scoped>
label {
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
}

// upload image

/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
