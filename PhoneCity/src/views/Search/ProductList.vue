<template>
  <div class="product-list-wrap" style="background: #f9f9f9;">
    <div class="product-list-content">
      <header class="category-header wrap">
        <i class="iconfont icon-fanhui4" @click="goBack"></i>
        <div class="header-search">
          <van-icon class="nbSearch" name="search" />
          <input
            type="text"
            class="search-title"
            v-model="keyword"
			placeholder="请输入商品名以寻找"
			@keyup="getSearch(keyword)"/>
        </div>
        <span class="search-btn" @click="deLete"><van-icon name="clear" /></span>
      </header>
	  <van-cell is-link @click="showPopup" v-if="!searchList.length<1">搜索历史</van-cell>
	  <van-popup class="search-histroy" v-model="show" position="left">
		  		  <div class="title">历史记录</div>
				  <div class="delete" @click="empty">清空记录</div>
		  		  <div>
		  			  <div class="historylist" 
					  v-for="(item,index) in searchList" 
					  :key="index" >
						<div class="history-left" @click="goSearchDetail(item)">{{item}}</div> 
						<van-icon class="clean" name="close" @click="emptyindex(index)"/></div>		  
		  		  </div>
	  </van-popup>	 
      <van-tabs type="card" color="#FF6B01" @click="changeTab" >
        <van-tab title="推荐" name=""></van-tab>
        <van-tab title="新品" name="new"></van-tab>
        <van-tab title="价格" name="price"></van-tab>
      </van-tabs>
    </div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="product-list-refresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了..."
        @load="onLoad"
        @offset="300"
      >
	    <div class="recommend" v-if="!productList.length"> 
			<p class="recommend-things">推荐产品</p>
			<ul>
				<li v-for="(item, index) in recommendlist" :key="index" @click="getSearch(item.name)"> {{item.name}}</li>
			</ul>
		</div>
        <div class="product-item" v-for="(item, index) in productList" :key="index" @click="productDetail(item)">
          <img :src="prefix(item.goodsCoverImg)" />
          <div class="product-info">
            <p class="name">{{item.goodsName}}</p>
            <p class="subtitle">{{item.goodsIntro}}</p>
            <span class="price">￥ {{item.sellingPrice}}</span>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getQueryString } from '@/common/js/utils'
import { search } from '../../service/good'
import { Toast } from 'vant'
export default {
  data() {
    return {
      keyword: this.$route.query.keyword || '',
	  show:false,
      searchBtn: false,
	  search_val:'',
	  showFlag:false,
	  loadShow:false,
	  searchList:'',
      seclectActive: false,
      refreshing: false,
      list: [],
	  recommendlist:[
		  {name:'iphone 11'},
		  {name:'HUAWEI'},
		  {name:'小米9'},
		  {name:'AirPods'},
		  {name:'Airdots'},
		  {name:'蓝牙耳机'},
		  {name:'睡衣'},
		  {name:'洁面'},
		  {name:'口红'},
	  ],
      loading: false,
      finished: false,
      productList: [],
      totalPage: 0,
      page: 1,
      orderBy: ''
    }
  },
  created(){
	  this.searchList = JSON.parse(localStorage.getItem('keyword')) || []; //先读取local里存储的历史记录 
	   // this.emptyindex()
  },
  methods: {
	showPopup() {
	        this.show = true;
	 },
	 // 清空历史记录
	 empty(){
		 if(!this.searchList.length){
			 this.$toast.success('没有可删除的历史记录'); 
		 }else{
			this.$toast.success('清空历史搜索成功');
			 // localStorage.removeItem('keyword');
			 localStorage.setItem('keyword', JSON.stringify(this.keyword))
			 this.searchList = []; 
			 this.showFlag = false
		 }	 
	 },
	 // 删除某条历史记录
	 emptyindex(index){
		this.searchList.splice(index, 1);
		// localStorage.setItem('keyword', JSON.stringify(this.keyword).index)
	 },
	  goSearchDetail(key,type){		 
	      this.keyword = key
		  this.onRefresh()
	   },
     async init() {
      const { categoryId, from } = this.$route.query
      if (!categoryId && !this.keyword) {
        // Toast.fail('请输入关键词')
        this.finished = true
        this.loading = false;
        return
      }
      const { data, data: { list } } = await search({ pageNumber: this.page, goodsCategoryId: categoryId,
			keyword: this.keyword, orderBy: this.orderBy })
			console.log(data)
			console.log(list)
      this.productList = this.productList.concat(list)
	  console.log(this.productList)
      this.totalPage = data.totalPage
      this.loading = false;
      if (this.page >= data.totalPage) this.finished = true
    },
    goBack() {
      this.$router.go(-1)
    },
    productDetail(item) {
      this.$router.push({ path: `product/${item.goodsId}` })
    },
    getSearch(key,type) {
	  this.keyword = key
      this.onRefresh()
	  console.log(123)
	   const value = this.keyword.trim()
	    	  if(!value){//判断输入框的值是否为空  如果为空 直接返回不在执行
	    	  	return;
	    	  }
	    	  //如果local里不存在当前输入的关键词 则存到local里
	    	  if(this.searchList.indexOf(value) === -1){
	    	    this.searchList.unshift(value)
	    	    //历史记录最多只取十个
	    	    this.searchList = this.searchList.slice(0,10)
	    	    localStorage.setItem('keyword',JSON.stringify(this.searchList))
	    	  }
	  
    },
	deLete(key,type){
		this.keyword = ""
		this.onRefresh()
	},
    pageScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 50 ? this.seclectActive = true : this.seclectActive = false
    },
    onLoad() {
      if (!this.refreshing && this.page < this.totalPage) {
        this.page = this.page +1
      }
      if (this.refreshing) {
        this.productList = [];
        this.refreshing = false;
      }
      this.init()
    },
    onRefresh() {
      this.refreshing = true
      this.finished = false
      this.loading = true
      this.page = 1
      this.onLoad()
    },
    changeTab(name, title) {
      this.orderBy = name
      this.onRefresh()
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../common/style/mixin';
  .product-list-content {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: #fff;
    .category-header {
      .fj();
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
      .boxSizing();
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
        width: 76%;
        height: 20px;
        line-height: 20px;
        margin: 10px 0;
        padding: 5px 0;
        color: #232326;
        background: #F7F7F7;
        .borderRadius(20px);
        .nbSearch {
          padding: 2px 5px 0 20px;
          font-size: 17px;
        }
        .search-title {
          font-size: 12px;
          color: #666;
          background: #F7F7F7;
        }
    }
    .icon-More {
      font-size: 20px;
    }
    .search-btn {
      height: 28px;
      margin: 8px 0;
      line-height: 28px;
      padding:5px 10px 0;
      color: #fff;
	  font-size: 20px;
      background: @primary;
      .borderRadius(5px);
      margin-top: 10px;
    }
  }
  .search-histroy {
	  width: 140px;
	  height: 100%;
	  background: #333333;
	  .title {
		  text-align: center;
		  color:#BD2C00;
		  font-size: 14px;
	  }
	  .delete {
		  text-align: center;
		  color: #FF0000;
		  margin: 5px;
	  }
	  .historylist {
		  width: 100%;
		  height: 20px;
		  line-height: 20px;
		  border: 1px solid #f9f9f9;
		  background: #f9f9f9;
		  margin-top: 10px;
		  font-size: 14px;
		  
		  .history-left {
			  float: left;
		  }
		  .clean {
		  	  float: right;
			  margin-right: 5px;
			  margin-top: 2px;
			  font-size: 18px;
		  }
	  }
	 
	 
  }
}
  .product-list-refresh {
    margin-top: 100px;
	.recommend {
		.recommend-things {
			font-size: 16px;
			margin:0 20px;
			border-bottom: 1px solid gray;
		}
		ul {
			margin: 10px 20px;
			padding: 0;
			width: 90%;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			li {
				width: 25%;
				font-size: 14px;
				text-align: center;
				margin: 5px;
				padding: 2px;
				border: 1px solid gainsboro;
				border-radius: 20px;
			}
		}
	}
    .product-item {
      .fj();
      width: 100%;
      height: 120px;
	  margin-top: 10px;
      padding: 10px 0;
      border-bottom: 1px solid #dcdcdc;
      img {
        width: 140px;
        height: 120px;
        padding: 0 10px;
        .boxSizing();
      }
      .product-info {
          width: 56%;
          height: 120px;
          padding: 5px;
          text-align: left;
          .boxSizing();
          p {
            margin: 0
          }
          .name {
            width: 100%;
            max-height: 40px;
            line-height: 20px;
            font-size: 15px;
            color: #333;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
          .subtitle {
            width: 100%;
            max-height: 20px;
            padding: 10px 0;
            line-height: 25px;
            font-size: 13px;
            color: #999;
            overflow: hidden;
          }
          .price {
            color: @primary;
            font-size: 16px;
          }
      }
  }
}
</style>
