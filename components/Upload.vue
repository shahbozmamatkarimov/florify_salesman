<template>
  <div class="flex flex-col w-full pr-6">
    <a-space direction="vertical" class="w-full" size="large">
      <a-upload-dragger
        v-model:file-list="fileList2"
        list-type="picture"
        :max-count="5"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      >
        <a-button class="h-80 border-0 min-w-full">
          <img class="mx-auto scale-[5] pb-7 pt-5" src="../assets/svg/upload.svg" alt="upload">
          <h1 class="mx-auto text-lg">Rasm yuklash uchun bosing</h1>
          <p>(jpeg, png ruxsat berilgan)</p>
        </a-button>
      </a-upload-dragger>
    </a-space>
  </div>
</template>
<script setup>
const fileList = ref([]);
const previewVisible = ref(false);
const previewImage = ref("");
const previewTitle = ref("");
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = "";
};
const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value =
    file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
};
</script>
<style scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
