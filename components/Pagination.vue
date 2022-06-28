<script setup>
const total = useCounter();

const props = defineProps({
  page: Number,
});

const next = (props.page + 1).toString();
const prev = (props.page - 1).toString();
</script>
<template>
  <div class="footer">
    <div class="pagination-block">
      <div class="pages">
        <div v-if="page > 1">
          <NuxtLink to="/" v-if="page > 2">1</NuxtLink>
          <span v-if="page > 2">...</span>
          <NuxtLink :to="`/page/${prev}`">{{ prev }} </NuxtLink>
        </div>
        <div class="current">{{ page }}</div>
        <div v-if="page < 354">
          <NuxtLink :to="`/page/${next}`">{{ next }} </NuxtLink>
          <span v-if="page < 353">...</span>
          <NuxtLink v-if="page < 353" to="/page/354">354</NuxtLink>
        </div>
      </div>
      <div class="footer-cart">{{ total }} руб.</div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #000000;
  color: #ffffff;
  font-size: 14px;
  line-height: 60px;
  text-align: center;
}
.pagination-block {
  padding: 0 20px;
  position: relative;
  margin: 0 auto;
}
.pagination-block .current {
  margin: 0 5px;
  font-size: 16px;
  font-weight: bold;
}
.pages {
  display: flex;
  justify-content: center;
}
.footer-cart {
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
}
.footer-cart::after {
  content: url(/assets/images/cart.png);
  margin-left: 6px;
}
@media (min-width: 320px) and (max-width: 480px) {
  .pagination-block {
    width: 100%;
  }
}

@media (min-width: 480px) and (max-width: 768px) {
  .pagination-block {
    width: 440px;
  }
}

@media (min-width: 769px) {
  .pagination-block {
    width: 660px;
  }
}
</style>
