<template>
  <div class="container">
    <Item v-for="photo in photos" :key="photo.id" :photo="photo" />
    <Pagination :page="1" />
  </div>
</template>
<script setup>
import { usePhotos } from "../composables/usePhotos";

const photos = ref([]);

photos.value = await usePhotos(1);
</script>
