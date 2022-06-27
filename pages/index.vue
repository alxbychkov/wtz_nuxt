<template>
  <div>
    <div class="container">
      <Item v-for="photo in photos" :key="photo.id" :photo="photo" />
      <Footer :page="page" @changePage="changePage" />
    </div>
  </div>
</template>
<script setup>
import { useFetch } from "#app";

const route = useRoute();
const router = useRouter();
const photos = ref([]);

const pageHash =
  route.hash && route.hash.indexOf("#page=") === 0 ? +route.hash.substr(6) : 1;
const page = ref(pageHash);

const renderPhotos = async () => {
  const { data } = await useFetch(`/api/photos/${page.value}`);

  photos.value = data.value;
};

await renderPhotos();

const changePage = async (value) => {
  renderPhotos(value);

  page.value = value;

  if (value !== 1) router.push({ hash: `#page=${value}` });
  else if (route.hash) router.push({ hash: "" });
};
</script>
