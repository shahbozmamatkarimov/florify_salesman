import { defineStore } from "pinia";
import axios from "axios";

export const useProductsStore = defineStore("products", () => {
  const runtimeconfig = useRuntimeConfig();
  const baseUrl = runtimeconfig.public.apiBaseUrl;

  const state = reactive({
    products: [],
    isLoading: true,
    currentPage: 0,
    total_count: 0,
    total_pages: 0,
    page: 1,
    showProduct: "",
    openEditModal: false,
  });

  const allProducts = computed(() => state.products);
  const showProductById = computed(() => state.showProduct);

  function getProducts() {
    state.isLoading = true;
    axios
      .get(baseUrl + "/product/1:10")
      .then((res) => {
        if (
          res.message === "Token vaqti tugagan!" ||
          res.message === "Token topilmadi!"
        ) {
          router.push("/login");
        }
        console.log(res.data.data?.records);
        console.log(res.data.data?.pagination);
        state.products = res.data.data?.records;
        state.currentPage = res.data.data?.pagination?.currentPage;
        state.total_count = res.data.data?.pagination?.total_count;
        state.total_pages = res.data.data?.pagination?.total_pages;
        state.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getOneProduct(id) {
    state.openEditModal = true;
    state.isLoading = true;
    fetch(baseUrl + `/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (
          res.message === "Token vaqti tugagan!" ||
          res.message === "Token topilmadi!"
        ) {
          router.push("/login");
        }
        console.log(res);
        state.showProduct = res;
        state.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { state, getProducts, getOneProduct, allProducts, showProductById };
});
