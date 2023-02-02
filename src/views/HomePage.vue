<template>
  <Header />
  <div class="video_content">
    <video loop autoplay>
      <source src="@/assets/index.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { reactive } from 'vue';
import { useI18n } from '@/locales';
import { useRouter } from 'vue-router';

const t = useI18n();
const router = useRouter();


function toAuction() {
  router.push('/auction');
}
</script>

<style lang="scss" scoped>

</style>
