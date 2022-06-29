<template>
  <div class="container">
    <Item v-for="photo in photos" :key="photo.id" :photo="photo" />
    <Pagination :page="page" />
  </div>
</template>
<script setup lang="ts">
import { Ref } from "vue";
import { usePhotos } from "../../composables/api";

const route = useRoute();
const page = +route.params.id as Number;
const photos = ref<Ref>([] as any);

photos.value = await usePhotos(page);
</script>
