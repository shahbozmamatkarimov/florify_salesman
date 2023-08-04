<template>
  <header>
    <Sidebar />

    <div class="sm:ml-64">
      <Navbar />
      <div class="overflow-hidden overflow-y-auto max-h-screen">
        <slot />
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
