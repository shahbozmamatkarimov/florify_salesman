<template>
  <main>
    <section>
      <nav class="flex items-center w-full z-50 -mt-1 mb-1">
        <div
          class="w-full flex flex-wrap items-center h-32 border-b-2 justify-between mx-10"
        >
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
          <div class="flex gap-6">
            <form>
              <div class="relative min-w-[350px]">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <img src="../assets/svg/search.svg" alt="search" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block min-w-full h-12 pl-10 outline-none rounded-lg bg-white"
                  placeholder="Qidirish..."
                  required
                />
              </div>
            </form>
            <button
              type="button"
              class="text-white bg-white rounded-lg px-4 py-2"
            >
              <img src="../assets/svg/bell.svg" alt="search" />
            </button>
            <div @click="() => (open = true)">
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
    </section>
    <!-- Modal toggle -->
    <section>
      <!-- Main modal -->
      <div
        v-if="open"
        tabindex="-1"
        aria-hidden="true"
        class="flex justify-center items-center bg-[#8c8cee0d] backdrop-blur-[1px] fixed top-0 left-0 right-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)]"
      >
        <div class="relative w-full ml-64 max-h-full">
          <!-- Modal content -->
          <form
            @submit.prevent="handleSubmit"
            class="relative bg-[#F4F4F6] shadow dark:bg-gray-700"
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
                @click="() => (open = false)"
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <i class="bx bx-x text-2xl"></i>
              </button>
            </div>
            <!-- Modal body -->
            <div
              class="grid grid-cols-2 gap-10 overflow-x-hidden overflow-y-auto max-h-[79vh]"
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
                    required
                  ></a-select>
                  <button
                    class="py-3 px-4 max-w-fit bg-[#fff] rounded-lg text-[#242424]"
                  >
                    Tasdiqlash
                  </button>
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
                      v-model:value="create.quintity"
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
                <Upload />
              </div>
            </div>
            <!-- Modal footer -->
            <div
              class="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
            >
              <button
                @click="() => (open = false)"
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
                Yuklash
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from "../server/axios"
const open = ref(false);
const price = ref();
const description = ref();

const create = reactive({
  name: "",
  description: "",
  price: "",
  color: "red",
  category_id: "97fcd808-b2be-4d7a-ab9d-eaf176b61222",
  salesman_id: "14cd91d4-dcb1-4e2d-b499-da98f6736436",
  // quintity: "",
});

const options = ref([
  {
    value: "jack",
    label: "Jack",
  },
  {
    value: "lucy",
    label: "Lucy",
  },
  {
    value: "tom",
    label: "Tom",
  },
]);

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  console.log("focus");
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const handleSubmit = () => {
  console.log(create);
  axios
    .post("product", create)
    .then((res) => {
      console.log(create);
      console.log(res, 'res');
    })
    .catch((error) => {
      console.log(create, "error");
      console.log(error);
    });
};
</script>

<style lang="scss" scoped>
label {
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
}
</style>
