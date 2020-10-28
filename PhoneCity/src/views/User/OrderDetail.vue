<template>
  <div class="order-detail-box">
    <s-header :name="'订单详情'" @callback="close"></s-header>
	<van-card
	  v-for="item in detail.newBeeMallOrderItemVOS"
	  :key="item.goodsId"
	  style="background: #fff"
	  :num="item.goodsCount"
	  :price="item.sellingPrice"
	  desc="全场包邮"
	  :title="item.goodsName"
	  :thumb="prefix(item.goodsCoverImg)"
	  @click="goToDetail(item)"
	/>
    <div class="order-status">
      <div class="status-item">
        <label>订单状态：</label>
        <span>{{ detail.orderStatusString }}</span>
      </div>
      <div class="status-item">
        <label>订单编号：</label>
        <span>{{ detail.orderNo }}</span>
      </div>
      <div class="status-item">
        <label>下单日期：</label>
        <span>{{ detail.createTime }}</span>
      </div>
    </div>
    <div class="order-price">
      <div class="price-item">
        <label>商品金额：</label>
        <span>¥ {{ detail.totalPrice }}</span>
      </div>
      <div class="price-item">
        <label>配送方式：</label>
        <span>顺丰快递</span>
      </div>
    </div>
    <div class="address">
		<span>地址管理</span>
		<span>更改地址</span>
		<span>新增地址</span>
	</div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import { getOrderDetail} from '@/service/order'
import { Dialog, Toast } from 'vant'
export default {
  components: {
    sHeader
  },
  data() {
    return {
      detail: {},
      showPay: false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
	// goToAddress(){
	// 	this.$router.push({path:'address'})
	// },
    async init() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      });
      const { id } = this.$route.query
      const { data } = await getOrderDetail(id)
	  console.log(data)
      this.detail = data
      Toast.clear()
    },
	goToDetail(item) {
	  this.$router.push({ path: `product/${item.goodsId}` })
	},
    cancelOrder(id) {
      Dialog.confirm({
        title: '确认取消订单？',
      }).then(() => {
      })
    },
    close() {
      Dialog.close()
    }
  }
}
</script>

<style lang="less" scoped>
  .order-detail-box {
    background: #f7f7f7;
    .order-status {
      background: #fff;
      margin-top: 10px;
	  border-radius: 10px;
      padding: 20px;
      font-size: 15px;
      .status-item {
        margin-bottom: 10px;
        label {
          color: #999;
        }
      }
    }
    .order-price {
      background: #fff;
      margin: 20px 0;
      padding: 20px;
      font-size: 15px;
	  border-radius: 10px;
      .price-item {
        margin-bottom: 10px;
        label {
          color: #999;
        }
        span {

        }
      }
    }
    .van-card {
      margin-top: 50px;
	  border-radius: 10px;
    }
    .van-card__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
	.address {
		width: 100%;
		background: #fff;
		border-radius: 10px;
		
		span:nth-child(1) {
			display: block;
			text-align: center;
			font-size: 16px;
			color: #DF5000;
		}
		span:nth-child(2),
		span:nth-child(3) {
			display: inline-block;
			width: 50%;
			text-align: center;
			font-size: 14px;
			padding: 10px 0;
		}
		span:nth-child(2):hover,
		span:nth-child(3):hover {
			color: red;
		}
	}
  }
</style>
