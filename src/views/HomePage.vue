<template>
  <Header />
  <div class="video_content">
    <video loop autoplay preload="auto" id="ppa-video" muted>
      <source src="@/assets/index.mp4" type="video/mp4" />
    </video>

    <audio loop autoplay id="ppa-audio">
      <source src="@/assets/bg.mp3" type="audio/mpeg" />
    </audio>
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
const isMute = ref(true);


function toAuction() {
  router.push('/auction');
}

onMounted(() => {
  // document.getElementById("ppa-video").muted = false;
  window.localStorage.setItem("isMute", false)
  isMute.value = window.localStorage.getItem("isMute") == null ? false : eval(window.localStorage.getItem("isMute"))
  console.log("xxx", window.localStorage.getItem("isMute") == null ? false : eval(window.localStorage.getItem("isMute")))

  // document.getElementById("ppa-video").muted = true;
  let audio = document.getElementById("ppa-audio");
  audio.oncanplay = function () {
    console.log("canplay")
    document.body.addEventListener("mousemove", function () {
      audio.play()
    })
  }

  audio.onplay = () => {
    console.log("playing")
  }
})



bus.on("toggleMute", (val) => {
  isMute.value = val;
  console.log(document.getElementById("ppa-audio"), val);

  if (!val) document.getElementById("ppa-audio").play();
  else document.getElementById("ppa-audio").pause();
  // document.getElementById("ppa-video").setAttribute("muted", false);
  // document.getElementById("ppa-video").play();
})

</script>

<style lang="scss" scoped>

</style>
