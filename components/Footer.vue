<script setup>
const total = useCounter();
</script>
<template>
  <div class="footer">
    <div class="pagination-block">
      <div class="pages">
        <span>1 ... 19 </span>
        <span class="current">20</span>
        <span> ... 356</span>
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
  cursor: pointer;
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
