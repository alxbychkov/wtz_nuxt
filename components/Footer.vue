<template>
  <div class="footer">
    <div class="pagination-block">
      <p>
        <span>1 ... 19 </span>
        <span class="current">20</span>
        <span> ... 356</span>
      </p>
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
.pagination-block .current {
  margin: 0 5px;
  font-size: 16px;
  font-weight: bold;
}
</style>
