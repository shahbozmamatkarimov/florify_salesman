<template>
  <nav
    class="flex items-center w-full z-50 h-32 -mt-1 mb-1"
  >
    <div
      class="w-full flex flex-wrap items-center justify-between px-10"
    >
      <div
        class="flex items-center gap-1 self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
      >
        <h1>Dashboard</h1>
        <img
          class="font-semibold text-3xl"
          src="../assets/svg/star.svg"
          alt="star"
        />
      </div>
      <div class="flex gap-6">
        <form>
          <div class="relative max-w-[650px]">
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
        <button
          type="button"
          class="flex items-center gap-2 text-white bg-[#45D469] hover:bg-[#2ead4d] font-medium rounded-lg px-5 py-2.5"
        >
          <img src="../assets/svg/plus.svg" alt="search" />
          Mahsulot qo'shish
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
