<template>
  <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
    <van-swipe-item><img src="../assets/banner1.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="../assets/banner2.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="../assets/banner3.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="../assets/banner4.jpg" alt=""></van-swipe-item>
	<van-swipe-item><img src="../assets/banner5.jpg" alt=""></van-swipe-item>
	<van-swipe-item><img src="../assets/banner6.jpg" alt=""></van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  
}
</script>

<style lang='less' scoped>
  .my-swipe .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
