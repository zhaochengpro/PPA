<template>
  <Header />
  <div class="video_content">
    <video loop autoplay :muted="isMute">
      <source src="@/assets/index.mp4" type="video/mp4"/>

    </video>

  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { onMounted, reactive, ref } from 'vue';
import { useI18n } from '@/locales';
import { useRouter } from 'vue-router';
import bus from 'vue3-eventbus'

const t = useI18n();
const router = useRouter();
const isMute = ref(false);


function toAuction() {
  router.push('/auction');
}

onMounted(() => {
  // isMute.value = false;
  isMute.value = window.localStorage.getItem("isMute") == null ? false :  eval(window.localStorage.getItem("isMute"))
})

bus.on("toggleMute", (val) => {
  isMute.value = val;
})

</script>

<style lang="scss" scoped>
</style>
