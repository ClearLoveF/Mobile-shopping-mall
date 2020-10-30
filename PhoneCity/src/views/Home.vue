<template>
  <div>
    <header class="home-header wrap" :class="{'active' : headerScroll}">
        <router-link tag="i" to="/"><img src="../assets/mi-logo.png" alt=""></router-link>
        <div class="header-search">      
            <router-link tag="div" 
			class="search-title" 
			to="./product-list?from=home">输入商品名称以寻找</router-link>
        </div>
        <router-link class="login" tag="span" to="./login" v-if="!isLogin">登录</router-link>
        <router-link class="login" tag="span" to="./user" v-else>
		  个人中心
        </router-link>
    </header>
    <nav-bar></nav-bar>
    <swiper></swiper>
    <div class="good">
      <header class="good-header">新品上线</header>
	 <van-notice-bar
	   left-icon="volume-o"
	   scrollable
	   text="科技重新定义了生活、这仅仅是个开始,生来多彩、岂止于大,唯一的不同，是处处不同,一切都刚刚好"
	 />
      <div class="good-box">
		  
        <div class="good-item" v-for="item in newGoodses.slice(0 , 4)" 
			:key="item.goodsId" 
			@click="goToDetail(item)"
			>
          <img :src="prefix(item.goodsCoverImg)" alt="">
          <div class="good-desc">
            <div class="title">{{ item.goodsName }}</div>
            <div class="price">¥ {{ item.sellingPrice }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="good">
      <header class="good-header">热门商品</header>
	  <van-count-down class="van-time" :time="120000000" format="DD 天 HH 时 mm 分 ss 秒" />
      <div class="good-box">
        <div class="good-item" v-for="item in hots" :key="item.goodsId" @click="goToDetail(item)">
          <img :src="prefix(item.goodsCoverImg)" alt="">
          <div class="good-desc">
            <div class="title">{{ item.goodsName }}</div>
            <div class="price">¥ {{ item.sellingPrice }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="good" :style="{ paddingBottom: '100px'}">
      <header class="good-header">最新推荐</header>
	  <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
	    猜你喜欢,速来试试吧
	  </van-notice-bar>
      <div class="good-box">
        <div class="good-item" v-for="item in recommends" :key="item.goodsId" @click="goToDetail(item)">
			<div class="good-clear">{{ item.goodsIntro }}{{item.tag}}</div>
          <img :src="prefix(item.goodsCoverImg)" alt="">
          <div class="good-desc">
            <div class="title">{{ item.goodsName }}</div>
            <div class="price">¥ {{ item.sellingPrice }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/NavBar'
import swiper from '@/components/Swiper'
import { getHome } from '../service/home'
import { getUserInfo } from '../service/user'
import { getLocal } from '@/common/js/utils'
import { Toast } from 'vant'
export default {
  name: 'home',
  data() {
    return {
      isLogin: false,
      headerScroll: false,
      hots: [],
      newGoodses:[],
      recommends: [],   
    }
  },
  components: {
    navBar,
    swiper
  },
  async mounted() {
    const token = getLocal('token')
		console.log(token)
    if (token) {
      this.isLogin = true
    }
    window.addEventListener('scroll', this.pageScroll)
    Toast.loading({
      message: '加载中...',
      forbidClick: true
    });
    const { data } = await getHome()
    this.newGoodses = data.newGoodses
    this.hots = data.hotGoodses
    this.recommends = data.recommendGoodses
    Toast.clear()
  },
  methods: {
    pageScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 100 ? this.headerScroll = true : this.headerScroll = false
    },
    goToDetail(item) {
      this.$router.push({ path: `product/${item.goodsId}` })
    }
  }
}
</script>

<style lang="less" scoped >
  @import '../common/style/mixin';
  .home-header {
      position: fixed;
      left: 0;
      top: 0;
      .wh(100%, 50px);
      .fj();
      line-height: 50px;
      padding: 0 10px;
      .boxSizing();
      font-size: 15px;
      color: #fff;
      z-index: 10000;
      &.active {
        background: @primary;
        .login {
          color: #fff;
        }
      }

      .header-search {
          display: flex;
          .wh(68%, 20px);
          line-height: 20px;
          margin: 10px 0;
          padding: 5px 0;
          color: #232326;
          background: rgba(255, 255, 255, .7);
          border-radius: 20px;
          .app-name {
              padding: 0 10px;
              color: @primary;
              font-size: 20px;
              font-weight: bold;
              border-right: 1px solid #666;
          }
          .icon-search {
              padding: 0 10px;
              font-size: 17px;
          }
          .search-title {
			  width: 100%;
			  height: 100%;
              font-size: 12px;
			  margin-left: 10px;
              color: #666;
          }
      }
      .icon-iconyonghu{
        color: #fff;
        font-size: 22px;
      }
      .login {
        color: @primary;
        line-height: 52px;
        .van-icon-manager-o {
          font-size: 20px;
          vertical-align: -3px;
        }
      }
  }
  .category-list {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 13px;
    div {
      display: flex;
      flex-direction: column;
      width: 20%;
      text-align: center;
      img {
        .wh(40px, 40px);
        margin: 13px auto 8px auto;
      }
    }
  }
  .good {
    .good-header {
      background: #f9f9f9;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: @primary;
      font-size: 16px;
      font-weight: 500;	
    }
	
	.notice-swipe {
	    height: 40px;
	    line-height: 40px;
	  }
	
	.van-time {
		margin-top: 10px;
		font-size: 15px;
		font-weight: 600;
	}
    .good-box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .good-item {
		margin-top: 10px;
        box-sizing: border-box;
        width: 50%;
        border-bottom: 1PX solid #e9e9e9;
        padding: 10px 10px;
		.good-clear {
			text-align: center;
			font-size: 10px;
			color: #FF6B01;
			font-weight: 600;
		}
        img {
          display: block;
          width: 120px;
          margin: 0 auto;
        }
        .good-desc {
          text-align: center;
          font-size: 14px;
          padding: 10px 0;
          .title {
            color: #222333;
          }
          .price {
            color: @primary;
          }
        }
        &:nth-child(2n + 1) {
          border-right: 1PX solid #e9e9e9;
        }
      }
    }
  }
  .floor-list {
      width: 100%;
      padding-bottom: 50px;
      .floor-head {
        width: 100%;
        height: 40px;
        background: #F6F6F6;
      }
      .floor-content {
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
        width: 100%;
        .boxSizing();
        .floor-category {
          width: 50%;
          padding: 10px;
          border-right: 1px solid #dcdcdc;
          border-bottom: 1px solid #dcdcdc;
          .boxSizing();
          &:nth-child(2n) {
            border-right: none;
          }
          p {
            font-size: 17px;
            color: #333;
            &:nth-child(2) {
              padding: 5px 0;
              font-size: 13px;
              color: @primary;
            }
          }
          .floor-products {
            .fj();
            width: 100%;
            img {
              .wh(65px, 65px);
            }
          }
      }
    }
  }
</style>
