<template>
  <div class="skeleton" :style="{ 'height': height + 'px', 'width': width + 'px', backgroundColor: bgColor }"></div>
  <div class="skeleton"
    :style="{ 'height': height + 'px', 'width': width + 'px', backgroundColor: bgColor, left: (width + 2) * 1 + 'px' }"
    style="animation-delay:100ms;"></div>
  <div class="skeleton"
    :style="{ 'height': height + 'px', 'width': width + 'px', backgroundColor: bgColor, left: (width + 2) * 2 + 'px' }"
    style="animation-delay:200ms;"></div>
</template>

<script setup>
defineProps({
  visible: Boolean,
  height: {
    type: Number,
    default: 10,
  },
  width: {
    type: Number,
    default: 10,
  },
  bgColor: {
    type: String,
    default: "#fff"
  }
});
</script>

<style lang="scss" scoped>
.skeleton {
  position: absolute;
  // left: 0;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  transition: all 1s ease-in-out;
  animation: skeletonAni 0.7s infinite ease-in-out;
}

@keyframes skeletonAni {
  0% {
    top: 50%;
  }

  50% {
    top: 0;
  }

  100% {
    top: 50%;
  }
}
</style>
