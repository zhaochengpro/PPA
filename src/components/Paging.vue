<template>
  <div class="demo-pagination-block">
    <el-config-provider :locale="locale">
      <el-pagination small v-model:current-page="pagingParams.page" v-model:page-size="pagingParams.size"
        :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="pagingParams.total"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </el-config-provider>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElPagination } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
defineProps({
  pagingParams: {
    type: Object,
    default: () => { },
  },
});
const emit = defineEmits(['sizeChange', 'currentChange']);
const locale = computed(() => {
  return localStorage.getItem('language') === 'zh' ? zhCn : '';
});
const handleSizeChange = (val) => {
  emit('sizeChange', val);
};
const handleCurrentChange = (val) => {
  emit('currentChange', val);
};
</script>

<style lang="scss" scoped>
.demo-pagination-block {
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :deep(.el-input__wrapper) {
    background: none;
    border: 1px solid #999;
    box-shadow: none;
    width: 20px;
  }

  :deep(.el-input__inner) {
    border: none;
  }

  :deep(.el-pager li) {
    background: none;
    color: #999;
  }

  :deep(.el-pager li.is-active) {
    border: 1px solid #999;
  }

  :deep(.el-pagination button) {
    border: none;
    color: #999;
    background: none;
  }

  :deep(.el-pagination .btn-next .el-icon) {
    font-size: 21px;
  }

  :deep(.el-pagination .btn-prev .el-icon) {
    font-size: 21px;
  }
}
</style>
