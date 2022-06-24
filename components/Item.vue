<template>
  <div class="item">
    <div class="item-head">
      <div class="item-head__icon">
        <img :src="photo.user.profile_image.small" alt="avatar" class="icon" />
      </div>
      <div class="item-head__author">
        <p class="name">{{ photo.user.name }}</p>
        <NuxtLink :to="`/user/${photo.user.username}`" class="name-link">
          @{{ photo.user.username }}
        </NuxtLink>
      </div>
    </div>
    <div class="item-body">
      <img :src="photo.urls.small" alt="photo" />
    </div>
    <div class="item-footer">
      <div class="item-count">
        <div class="item-count-plus" @click="increment">+</div>
        <div class="item-count-minus" @click="decrement">-</div>
        <div class="item-count-total">{{ count }}</div>
      </div>
      <div class="item-price">{{ price }} руб.</div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  photo: Object,
});

const setPrice = (a) => Math.floor(a * 678);
const price = setPrice(props.photo.likes);
const count = ref(0);
const total = useCounter();
const increment = () => {
  count.value++;
  total.value += +price;
};
const decrement = () => {
  if (count.value) {
    count.value--;
    total.value -= +price;
  }
};
</script>
