<template>
  <main>
    <section>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 min-h-screen bg-white md:flex hidden flex-col justify-between z-40 w-64 h-screen"
        aria-label="Sidebar"
      >
        <div class="px-8 overflow-y-auto">
          <div class="flex items-center h-32">
            <img class="w-24 h-7" src="../assets/svg/logo.svg" alt="logo" />
          </div>
          <div class="flex gap-2 mb-16 cursor-pointer">
            <div
              class="flex items-center justify-center md:min-w-[44px] min-w-[64px] md:h-11 md:w-11 h-16 w-16 object-cover shadowPhoto bg-[#7112AF] rounded-full"
              v-if="!useProfile.store.userImage"
            >
              <img
                class="w-6 h-6"
                src="@/assets/nodata/userplaceholder.svg"
                alt="Photo"
              />
            </div>
            <img
              v-else
              class="md:min-w-[6rem] md:h-24 md:w-24 h-16 w-16 object-cover shadowPhoto bg-gray-300 rounded-full"
              :src="useProfile.store.userImage"
              alt="Photo"
            />
            <div>
              <h1 class="font-medium truncate max-w-[100px]">{{ useProfile.profile.username }}</h1>
              <a class="text-sm text-[#999999]" href="#"> +998{{ useProfile.profile.phone}}</a>
            </div>
            <p class="ml-5 my-auto">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9L12 15L6 9"
                  stroke="#454545"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
          <ul class="space-y-3 font-medium">
            <li v-for="i in sidebar" :key="i.id">
              <router-link
                :to="i.path"
                class="flex items-center h-12 w-44 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img id="icon" :src="i.icon" alt="icon" />
                <img class="hidden" id="icon1" :src="i.icon1" alt="icon" />
                <span class="ml-3">{{ i[$t("uz")] }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <button class="flex gap-2 p-10 text-[#FF6161]">
          <img src="../assets/svg/logout.svg" alt="img" />
          {{ $t("logout") }}
        </button>
      </aside>
    </section>
    <section>
      <aside
        class="fixed w-full md:hidden z-50 bottom-0 h-[72px] py-[10px] bg-white"
      >
        <ul class="my-auto grid grid-cols-5 justify-center">
          <li class="mx-auto" v-for="i in sidebar" :key="i.id">
            <router-link
              :to="i.path"
              class="flex flex-col items-center justify-center h-12 max-w-fit text-gray-900 rounded-lg"
            >
              <img id="icon" :src="i._icon" alt="icon" />
              <img class="hidden" id="icon1" :src="i.icon1" alt="icon" />
              <p class="text-[10px]">{{ i.title }}</p>
            </router-link>
          </li>
        </ul>
      </aside>
    </section>
  </main>
</template>

<script setup>
import { sidebar } from "../constants/sidebar";
import { useProfileStore } from "@/store";
const useProfile = useProfileStore();
</script>

<style lang="scss" scoped>
@media (max-w-768px) {
  .router-link-exact-active {
    background: #5c00990d;
    border-radius: 10px;
  }
}

.router-link-exact-active {
  color: #5c0099;
  #icon {
    display: none;
  }
  #icon1 {
    display: block;
  }
}
</style>
