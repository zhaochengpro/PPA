<template>
  <div class="float-msg" v-if="visible">
    <div class="msg-card">
      <svg class="tips-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        v-if="status == 'Success'">
        <path
          d="M511.434623 63.564711c-247.428276 0-448.010617 200.582341-448.010617 448.01164 0 247.430322 200.581318 448.01164 448.010617 448.01164 247.432369 0 448.012663-200.581318 448.012663-448.01164C959.447287 264.147052 758.865969 63.564711 511.434623 63.564711zM773.519714 382.576325 447.871959 704.039781 245.771031 507.044128l63.996546-68.093864 138.15964 138.15964 261.086343-261.087367L773.519714 382.576325z"
          fill="#16A34A"></path>
      </svg>

      <svg class="tips-icon" v-else width="128" height="128" viewBox="0 0 128 128" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="64" fill="#DC2626" />
        <path
          d="M61.7564 73.0163C61.8284 74.4133 62.982 75.509 64.3808 75.509V75.509C65.7797 75.509 66.9333 74.4133 67.0053 73.0163L68.4128 45.7106L68.5716 36.2618C68.611 33.9197 66.7232 32 64.3808 32V32C62.0385 32 60.1507 33.9197 60.1901 36.2618L60.3488 45.7106L61.7564 73.0163ZM64.4192 94.4018C67.1072 94.4018 69.3344 92.4818 69.3344 89.4098C69.3344 86.3378 67.1072 84.2642 64.4192 84.2642C61.6544 84.2642 59.4272 86.3378 59.4272 89.4098C59.4272 92.4818 61.6544 94.4018 64.4192 94.4018Z"
          fill="white" />
      </svg>

      <dl>
        <dt>{{ status }}</dt>
        <dd>{{ content }}</dd>
      </dl>
      <a class="closebtn" href="#" @click.prevent="closeHandle">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M548.992 503.744L885.44 167.328a31.968 31.968 0 1 0-45.248-45.248L503.744 458.496 167.328 122.08a31.968 31.968 0 1 0-45.248 45.248l336.416 336.416L122.08 840.16a31.968 31.968 0 1 0 45.248 45.248l336.416-336.416L840.16 885.44a31.968 31.968 0 1 0 45.248-45.248L548.992 503.744z">
          </path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean,
  status: {
    type: String,
    default: 'Success',
  },
  content: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['update:visible']);

function closeHandle() {
  emit('update:visible', false);
}
setTimeout(() => {
  emit('update:visible', false);
}, 3000);
</script>

<style lang="scss" scoped>

</style>
