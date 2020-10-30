<template>
  <div class="user-box">
    <div class="user-info">
		<div class="hearImg">
			<img :src="userInfo.avatar"/>
			<div @click.stop="uploadHeadImg" class="changeImg">
				<p>更换头像</p>
				<input type="file" accept="image/*"  @change="handleFile" class="hiddenInput"/>
			</div>		
		</div>
      <div class="info">		 
        <div class="user-desc">
          <span>{{ user.nickName }}</span>
          <span>{{ user.loginName }}</span>
        </div>
      </div>
    </div>
    <ul class="user-list">
      <li @click="goTo('order')">
		  <i class="iconfont icon-dingdan" style="color: red;"></i>
        <span>我的订单</span>
        <van-icon name="arrow" />
      </li>
	  <li @click="goTo('vip')">
		  <i class="iconfont icon-huiyuan" style="color:orange;"></i>
		<span>会员中心</span>
		<van-icon name="arrow" />
	  </li>
	  <li @click="goTo('discount')">
		  <i class="iconfont icon-youhuiquan" style="color:dodgerblue;"></i>
	  	<span>我的优惠</span>
	  	<van-icon name="arrow" />
	  </li>
	  <li @click="goTo('gift')">
		  <i class="iconfont icon-liwu" style="color:pink;"></i>
	  	<span>礼物兑换码</span>
	  	<van-icon name="arrow" />
	  </li>
	  <li @click="goTo('map')">
		  <i class="iconfont icon-home" style="color:#FF8B43;"></i>
	  	<span>小米之家</span>
	  	<van-icon name="arrow" />
	  </li>
      <li @click="goTo('setting')">
		  <i class="iconfont icon-zhanghaoguanli" style="color:#0570DB;"></i>
        <span>账号管理</span>
        <van-icon name="arrow" />
      </li>
      <li @click="goTo('address?from=mine')">
		  <i class="iconfont icon-zu15" style="color:#DD4A68;"></i>
        <span>地址管理</span>
        <van-icon name="arrow" />
      </li>
      <li @click="goTo('about')">
		  <i class="iconfont icon-wode-lianxikefu" style="color: #0570DB;"></i>
        <span>联系客服</span>
        <van-icon name="arrow" />
      </li>
	  <li  @click="goTo('setup')">
		  <i class="iconfont icon-shezhi" style="color:#ED6A0C;"></i>
	  	<span>设置</span>
	  	<van-icon name="arrow" />
	  </li>
    </ul>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from '../components/NavBar'
import { getUserInfo } from '../service/user'
export default {
  components: {
    navBar,
  },
  data() {
    return {
      user: {},
	  userInfo:{
		  avatar:'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg'
	  }
    }
  },
  async mounted() {
    const { data } = await getUserInfo()
    this.user = data
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    goTo(r) {
      this.$router.push({ path: r })
    },
	uploadHeadImg(){
		this.$el.querySelector('.hiddenInput').click()
	},
	handleFile(e){
		let $target = e.target || e.srcElement
		let file = $target.files[0]
		var reader = new FileReader()
		reader.onload = (data) => {
			let res = data.target || data.srcElement
			this.userInfo.avatar = res.result
		}
		reader.readAsDataURL(file)
	},
  }
}
</script>

<style lang="less" scoped>
  @import '../common/style/mixin';
  .user-box {
	  background: #f9f9f9;
    .user-header {
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
      .user-name {
        font-size: 14px;
      }
    }
    .user-info {
      width: 100%;
      margin: 0 ;
      height: 115px;
	  background: url(../assets/bg.png)center 0 #f37d0f;;
	  background-size: auto 100%;
      box-shadow: 0 2px 5px #269090;
      border-radius: 6px;
	  .hearImg {
		  float: left;
		  width: 30%;
		  height: 100%;
		  img {
		    .wh(50%, 50%);
		    border-radius: 50%;
		    margin-top: 10px;
			margin-left: 50%;
		  }
		  .changeImg {
			  width: 100%;
			  height: 30%;
			  text-align: right;
			  color: #fff;
			  p {
				  margin-top: 0;
				  width: 100%;
				  height: 100%;
				  font-size: 14px;
			  }
			  .hiddenInput{
				  display: none;
			  }
		  }
	  }
      .info {
        position: relative;
        width: 68%;
		float: right;
        height: 100%;
        padding: 25px 5px;
        .boxSizing();
        
        .user-desc {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
		  margin-top: 10px;
          line-height: 20px;
          font-size: 14px;
          color:#fff;
          span {
            font-size: 14px;
            padding: 2px 0;
          }
        }
        .account-setting {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 13px;
          color: #fff;
          .van-icon-setting-o {
            font-size: 16px;
            vertical-align: -3px;
            margin-right: 4px;
          }
        }
      }
    }
    .user-list {
	  background: #f9f9f9;
      padding: 0 20px;
      margin-top: 20px;
      li {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
		margin-bottom: 10px;
		background: #fff;
		border-radius: 10px;
		.iconfont {
			font-size: 20px;
			margin: 0 10px;
		}
		span {
			height: 20px;
			margin: 20px;
		}
        .van-icon-arrow {
          margin-top: 13px;
					float: right;
        }
      }
    }
  }
</style>
