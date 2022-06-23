<script setup>
const total = useCounter();
const route = useRoute();
const pageHash = (route.hash && route.hash.indexOf('#page=') === 0) ? +route.hash.substr(6) : 1;
const page = ref(pageHash);
</script>
<template>
  <div class="footer">
    <div class="pagination-block">
      <div class="pages">
        <div v-if="page > 2">
          <a href="/">1</a> ... <a :href="`#page=${page - 1}`">{{ page - 1 }}</a></div>
        <div class="current">{{ page }}</div>
        <div v-if="page < 356"> <a :href="`#page=${page + 1}`">{{ page + 1 }}</a> <span v-if="page < 355">...</span> <a href="#page=356" v-if="page < 355">356</a></div>
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
