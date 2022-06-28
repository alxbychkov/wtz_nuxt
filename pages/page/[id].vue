<template>
  <div class="container">
    <Item v-for="photo in photos" :key="photo.id" :photo="photo" />
    <Pagination :page="page" />
  </div>
</template>
<script setup>
import { usePhotos } from "../../composables/usePhotos";

const route = useRoute();
const page = +route.params.id;
const photos = ref([]);

photos.value = await usePhotos(page);
</script>
