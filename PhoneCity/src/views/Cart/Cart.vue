<template>
  <div class="cart-box">
    <s-header :name='"购物车"'></s-header>
    <div class="cart-body">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <van-swipe-cell :right-width="50" v-for="(item, index) in list" :key="index">
          <div class="good-item">
            <van-checkbox :name="item.cartItemId" />
            <div class="good-img"><img :src="prefix(item.goodsCoverImg)" alt="" @click="goToDetail(item)"></div>
            <div class="good-desc">
              <div class="good-title">
                <span>{{ item.goodsName }}</span>
                <span>x{{ item.goodsCount }}</span>
              </div>
              <div class="good-btn">
                <div class="price">¥{{ item.sellingPrice }}</div>
                <van-stepper
                  integer
                  :min="1"
                  :value="item.goodsCount"
                  :name="item.cartItemId"
                  async-change
                  @change="onChange"
                />
              </div>
            </div>
          </div>
          <van-button
            slot="right"
            square
            icon="delete"
            type="danger"
            class="delete-button"
            @click="deleteGood(item.cartItemId)"
          />
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      v-if="list.length > 0"
      class="submit-all"
      :price="total * 100"
      button-text="结算"
      @submit="onSubmit"
    >
	  <van-button type="info" @click="toggleAll">全选</van-button>
    </van-submit-bar>
    <div class="empty" v-if="!list.length">
		<van-notice-bar color="#1989fa" background="#FFFBE8" left-icon="info-o">
		  猜你喜欢,iPhone11  iPhone11Pro 小米
		</van-notice-bar>
		<div class="guess-like">
				<ul>
					<img src="http://47.99.134.126:28019/goods-img/075a188a-9045-45f0-9c67-1e42e0552aa2.jpg" alt="" @click="goToiphone11">
					<img src="http://47.99.134.126:28019/goods-img/7368f461-fd0a-4f37-bc8b-31d8ad3d6e95.jpg" alt="" @click="goToiphone12">
					<img src="http://47.99.134.126:28019/goods-img/0025ad55-e260-4a00-be79-fa5b8c5ac0de.jpg" alt="" @click="goToiphone11pro">
					<img src="http://47.99.134.126:28019/goods-img/76670f49-4556-40ae-b485-3b25dcdcb636.jpg" alt="" @click="goToxiaomi">
				</ul>
		</div>
      <van-icon name="smile-o" />
      <div class="title">购物车空空空如也</div>	  
      <van-button color="#1baeae" type="primary" @click="goTo" block>前往首页</van-button>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import { Toast } from 'vant'
import navBar from '@/components/NavBar'
import sHeader from '@/components/SimpleHeader'
import { getCart, deleteCartItem, modifyCart } from '../../service/cart'
export default {
  data() {
    return {
      checked: false,
      list: [],
      all: false,
      result: [],
      checkAll: true
    }
  },
  components: {
    navBar,
    sHeader
  },
  mounted() {
    this.init()
  },
  computed: {
    total: function() {
      let sum = 0
      let _list = this.list.filter(item => this.result.includes(item.cartItemId))
      _list.forEach(item => {
        sum += item.goodsCount * item.sellingPrice
      })
      return sum
    },
	
  },
  methods: {
    async init() {
      Toast.loading({ message: '加载中...', forbidClick: true });
      const { data } = await getCart({ pageNumber: 1 })
      this.list = data
      this.result = data.map(item => item.cartItemId)
      Toast.clear()
    },
    goBack() {
      this.$router.go(-1)
    },
    goTo() {
      this.$router.push({ path: 'home' })
    },
	goToDetail(item) {
	  this.$router.push({ path: `product/${item.goodsId}` })
	},
	goToiphone11(item) {
	  this.$router.push({ path: `product/10283` })
	},
	goToiphone12(item) {
	  this.$router.push({ path: `product/10281` })
	},
	goToiphone11pro(item) {
	  this.$router.push({ path: `product/10290` })
	},
	goToxiaomi(item) {
	  this.$router.push({ path: `product/10797` })
	},
	
    async onChange(value, detail) {
      if (this.list.filter(item => item.cartItemId == detail.name)[0].goodsCount == value) return
      Toast.loading({ message: '修改中...', forbidClick: true });
      const params = {
        cartItemId: detail.name,
        goodsCount: value
      }
      const { data } = await modifyCart(params)
      this.list.forEach(item => {
        if (item.cartItemId == detail.name) {
          item.goodsCount = value
        }
      })
      Toast.clear();
    },
    async onSubmit() {
      if (this.result.length == 0) {
        Toast.fail('请选择商品进行结算')
        return
      }
      const params = JSON.stringify(this.result)
      this.$router.push({ path: `create-order?cartItemIds=${params}` })
    },
    async deleteGood(id) {
      const { data } = await deleteCartItem(id)
      this.$store.dispatch('updateCart')
      this.init()
    },  
	toggleAll() {
	      this.$refs.checkboxGroup.toggleAll();
	},
  }
}
</script>

<style lang="less">
  @import '../../common/style/mixin';
  .cart-box {
    .cart-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      .fj();
      .wh(100%, 44px);
      line-height: 44px;
      padding: 0 10px;
      .boxSizing();
      color: #252525;
      background: #fff;
      border-bottom: 1px solid #dcdcdc;
      .cart-name {
        font-size: 14px;
      }
    }
    .cart-body {
      margin: 45px 0 100px 0;
      // padding-left: 0;
	  background: #f2f2f2;
      .good-item {
        display: flex;
		margin-bottom: 10px;
		background: #fff;
        .good-img {
          img {
            .wh(100px, 100px)
          }
        }
        .good-desc {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          padding: 20px;
          .good-title {
            display: flex;
            justify-content: space-between;
          }
          .good-btn {
            display: flex;
            justify-content: space-between;
            .price {
              font-size: 16px;
              color: red;
              line-height: 28px;
            }
            .van-icon-delete {
              font-size: 20px;
              margin-top: 4px;
            }
          }
        }
      }
      .delete-button {
        width: 50px;
        height: 100%;
      }
    }
    .empty {
      width: 100%;
      margin: 0 auto;
      text-align: center;
      margin-top: -50px;
      .van-icon-smile-o {
        font-size: 50px;
      }
	  p {
		  font-size: 20px;
	  }
	  .guess-like {
		  // width: 100%;
		  .wh(100%,30%);
		  // display: flex;
		  // border: 1px solid red;
		  overflow-x:scroll;
		  
		  ul {
			  margin: 0;
			  padding: 0;
			  display: flex;
			  .wh(150%,100%)
		  }
		  img {
			  flex: 1;
			  width: 20%;
			  height: 20%;
			  // display: flex;
		  }
	  }
      .title {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
    .submit-all {
      margin-bottom: 50px;
      .van-checkbox {
        margin-left: 10px
      }
      .van-submit-bar__text {
        margin-right: 10px
      }
      .van-submit-bar__button {
        background: @primary;
      }
    }
    .van-checkbox__icon--checked .van-icon {
      background-color: @primary;
      border-color: @primary;
    }
  }
</style>
