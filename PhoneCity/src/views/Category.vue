<template>
  <div class="categray">
    <div>
      <header class="category-header wrap">
        <i class="iconfont icon-fanhui3" @click="goHome"></i>
        <div class="header-search">
		  <van-icon class="nbSearch" name="search" />
          <router-link tag="span" class="search-title" to="./product-list?from=category">促销活动,降价大甩卖</router-link>
        </div>
		<img src="../assets/mi-logo.png" alt="">
      </header>
      <nav-bar></nav-bar>
      <div class="search-wrap" ref="searchWrap">
        <list-scroll :scroll-data="categoryData" class="nav-side-wrapper">
          <ul class="nav-side">
            <li
              v-for="item in categoryData"
              :key="item.categoryId"
              v-text="item.categoryName"
              :class="{'active' : currentIndex == item.categoryId}"
              @click="selectMenu(item.categoryId)"
            ></li>
			<li>外出 游玩 风景</li>
			<li>亲子 情侣 朋友</li>
			<li>相机 记录 写真</li>
          </ul>
        </list-scroll>
        <div class="search-content">
          <list-scroll :scroll-data="categoryData" >
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <template v-for="(category, index) in categoryData">
                  <div class="swiper-slide" v-if="currentIndex == category.categoryId" :key="index">
                    <div class="category-list" v-for="(products, index) in category.secondLevelCategoryVOS" :key="index">
                      <p class="catogory-title">{{products.categoryName}}</p>
                      <div class="product-item" v-for="(product, index) in products.thirdLevelCategoryVOS.slice(0 , 12)" :key="index" @click="selectProduct(product)">
						  <img src="../assets/tv.jpg" class="product-img" alt="">
                        <p v-text="product.categoryName" class="product-title"></p>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </list-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/NavBar'
import listScroll from '@/components/ListScroll'
import { getCategory } from "../service/good";
export default {
  components: {
    navBar,
    listScroll
  },
  data() {
    return {
      categoryData: [],
      currentIndex: 15
    }
  },
  async mounted() {
    this.setWrapHeight()
    const { data } = await getCategory()
	console.log(data)
    this.categoryData = data
  },
  methods: {
    goHome () {
      this.$router.push({ path: 'home' })
    },
    setWrapHeight() {
      // 设置视口高度
      let $screenHeight = document.documentElement.clientHeight
      this.$refs.searchWrap.style.height = $screenHeight - 100 + 'px'
    },
    selectMenu(index) {
      this.currentIndex = index
    },
    selectProduct(item){
      this.$router.push({ path: `product-list?categoryId=${item.categoryId}` })
    },
  }
}
</script>
<style lang="less" scoped>
  @import '../common/style/mixin';
  .categray {
    .category-header {
      background: #FF6B01;
      position: fixed;
      left: 0;
      top: 0;
      .fj();
      .wh(100%, 50px);
      line-height: 50px;
      padding: 0 15px;
      box-sizing: border-box;
      font-size: 15px;
      color: #656771;
      z-index: 10000;
      &.active {
        background: @primary;
      }
      .icon-left {
        font-size: 25px;
        font-weight: bold;
      }
      .header-search {
        display: flex;
        width: 80%;
        height: 20px;
        line-height: 20px;
        margin: 10px 0;
        padding: 5px 0;
        color: #232326;
        background: #F7F7F7;
        border-radius: 20px;
        .nbSearch {
          padding: 2px 10px 0 20px;
          font-size: 17px;
        }
        .search-title {
          font-size: 12px;
          color: #666;
        }
      }
      .icon-More {
        font-size: 20px;
      }
    }
  }
  .search-wrap {
    .fj();
    width: 100%;
    margin-top: 50px;
    background: #F8F8F8;
    border-top: 1px solid #999;
    .nav-side-wrapper {
      width: 28%;
      height: 100%;
      overflow: hidden;
      .nav-side {
        width: 100%;
        .boxSizing();
        background: #F8F8F8;
        li {
          width: 100%;
          height: 56px;
          text-align: center;
          line-height: 56px;
          font-size: 14px;
          &.active {
            color: @primary;
            background: #FFFFFF;
          }
        }
      }
    }
    .search-content {
      width: 72%;
      height: 100%;
      padding: 0 10px;
      background: #f5f5f5;
      .boxSizing();
      .swiper-container {
        width: 100%;
        .swiper-slide {
          width: 100%;
          .category-main-img {
            width: 100%;
          }
          .category-list {
            display: flex;
            flex-wrap: wrap;
            flex-shrink: 0;
            width: 100%;
            .catogory-title {
              width: 100%;
              font-size: 17px;
              font-weight: 500;
              padding: 20px 0;
			  text-align: center;
			  border-bottom: 1px solid red;
            }
            .product-item {
              width: 33.3333%;
              margin-bottom: 10px;
              text-align: center;
              font-size: 15px;
              .product-img {
                .wh(60px, 60px);
              }
            }
          }
        }
      }
    }
  }
</style>
