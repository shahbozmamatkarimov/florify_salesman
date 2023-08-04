<template>
  <main>
    <section>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 min-h-screen bg-white flex flex-col justify-between z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="px-8 overflow-y-auto">
          <div class="flex items-center h-32">
            <img class="w-24 h-7" src="../assets/svg/logo.svg" alt="logo" />
          </div>
          <ul class="space-y-3 font-medium">
            <li v-for="i in sidebar" :key="i.id">
              <router-link
                :to="i.path"
                class="flex items-center h-12 w-44 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img id="icon" :src="i.icon" alt="icon" />
                <img class="hidden" id="icon1" :src="i.icon1" alt="icon" />
                <span class="ml-3">{{ i.title }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <button class="flex gap-2 p-10 text-[#FF6161]">
          <img src="../assets/svg/logout.svg" alt="img" />
          Chiqish
        </button>
      </aside>
    </section>
  </main>
</template>

<script setup>
import { sidebar } from "../constants/sidebar";
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #5c0099;
  background: #5c00990d;
  border-radius: 10px;
  #icon {
    display: none;
  }
  #icon1 {
    display: block;
  }
}
</style>
