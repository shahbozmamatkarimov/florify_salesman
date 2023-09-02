import { reactive, computed } from "vue";

export const useGetProductStore = () => {
  const store = reactive({
    data: [],
    allData: [],
    isLoading: true,
  });
  function getProducts(token) {
    store.isLoading = true;
    fetch("https://florify-market.onrender.com/api/product", {
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
          // router.push("/login");
        }
        store.data = res;
        store.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  store.allData = computed(() => store.data);
  console.log(store.allData);

  return { getProducts, store };
};
