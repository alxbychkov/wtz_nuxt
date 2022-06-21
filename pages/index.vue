<template>
  <div>
    {{ data.value }}
    <div class="item" v-for="photo in data.value" :key="photo.id">
      {{ photo }}
      <div class="item-head">
        <div class="item-head__icon">
          <img :src="photo.avatar" alt="avatar" class="icon" />
        </div>
        <div class="item-head__author">
          <p class="name">{{ photo.name }}</p>
          <a :href="photos.href" target="_blank" class="name-link">{{
            photo.username
          }}</a>
        </div>
      </div>
      <div class="item-body">
        <img :src="photo.photo" alt="photo" />
      </div>
      <div class="item-footer"></div>
    </div>
  </div>
</template>
<script setup>
import { useAsyncData } from "#app";

const API_KEY = "oNY7ILLJAH6J5_904imiLFyCY_8boZZnWMsrg2RH0Ig";
const page = 0;
const URL = `https://api.unsplash.com/photos?page=${page}&client_id=${API_KEY}`;
const { data } = await useAsyncData("photos", () => $fetch(URL));

console.log(data.value);
</script>
