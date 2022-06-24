<template>
  <div class="container">
    <Item v-for="photo in photos" :key="photo.id" :photo="photo" />
    <Footer :page="page" @changePage="changePage" />
  </div>
</template>
<script setup>
import { useFetch } from "#app";

const route = useRoute();
const API_KEY = "oNY7ILLJAH6J5_904imiLFyCY_8boZZnWMsrg2RH0Ig";
const photos = ref([]);

const pageHash =
  route.hash && route.hash.indexOf("#page=") === 0 ? +route.hash.substr(6) : 1;
const page = ref(pageHash);

const renderPhotos = async (value = "") => {
  const page = value ? value : pageHash;
  const URL = `https://api.unsplash.com/photos?page=${page}&per_page=30&client_id=${API_KEY}`;
  const { data } = await useFetch(URL);

  return data.value;
};

const getPhotos = async (value = "") => {
  photos.value = await renderPhotos(value ? value : "");
};

await getPhotos(1);

const changePage = (value) => {
  getPhotos(value);
  page.value = value;
  console.log("index:", value);
};
</script>
