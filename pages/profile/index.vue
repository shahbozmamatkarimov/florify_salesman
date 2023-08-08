<template>
  <main>
    <NavbarTop>Profil</NavbarTop>
    <i class="px-10">developing...</i>
  </main>
</template>

<script>
definePageMeta({
  layout: "custom",
});
import { reactive, toRefs } from "vue";

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

<style lang="scss" scoped></style>
