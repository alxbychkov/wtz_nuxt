<template>
  <div class="container">
    <Item v-for="photo in photos" :key="photo.id" :photo="photo" />
    <Footer />
  </div>
</template>
<script setup>
import { useAsyncData } from "#app";

const API_KEY = "oNY7ILLJAH6J5_904imiLFyCY_8boZZnWMsrg2RH0Ig";
const page = 0;
const URL = `https://api.unsplash.com/photos?limit=50&client_id=${API_KEY}`;
const { data: photos } = await useAsyncData("photos", () => $fetch(URL));
</script>
