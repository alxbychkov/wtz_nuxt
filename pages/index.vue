<template>
  <div class="container">
    <Item v-for="photo in photos" :key="photo.id" :photo="photo" />
    <Pagination :page="1" />
  </div>
</template>
<script setup lang="ts">
import { Ref } from "vue";
import { usePhotos } from "../composables/api";

const photos = ref<Ref>([] as any);

photos.value = await usePhotos(1);
</script>
