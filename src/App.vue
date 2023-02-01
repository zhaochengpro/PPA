<template>
  <div class="web-container" :class="{ 'active-menu-m': menuSwitch }">
    <router-view />
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();

  const menuSwitch = computed(() => {
    return store.state.menuSwitch;
  });
</script>

<style lang="scss" scoped></style>
