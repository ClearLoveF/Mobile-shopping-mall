<template>
	<div class="app">
		<s-header :name="'设置'"></s-header>
		<div class="user">
			<p>当前账户</p>
			<div class="user_info">
				<img src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg" alt="">
				<div class="user-desc">
				  <span>昵称：{{ user.nickName }}</span>
				  <span>用户名：{{ user.loginName }}</span>
				  <div>当前登录</div>
				</div>
			</div>
		</div>
		<div class="list">
			<ul>
				<li>是否接受好友消息
					<van-switch class="van-swith" 
					:value="checked" 
					@input="onInput"
					size="24px" 
					active-color="#07c160" 
					inactive-color="#fff" />
				</li>
				<li>是否接受每日推荐
					<van-switch class="van-swith"
					v-model="checked1" 
					size="24px" 
					active-color="#07c160" 
					inactive-color="#fff" />
				</li>
				<li>是否接受附近好货
					<van-switch class="van-swith"
					v-model="checked2" 
					size="24px" 
					active-color="#07c160" 
					inactive-color="#fff" />
				</li>
				<li>账户与安全 <van-icon name="arrow" /></li>
				<li>支付密码</li>
				<li>隐私设置</li>
				<li>好友可见我的订单
					<van-switch class="van-swith"
					v-model="checked3"
					size="24px" 
					active-color="#07c160" 
					inactive-color="#fff" />
				</li>
			</ul>
			<van-button class="save-btn" color="#FF6B01" type="primary" @click="logout" block>退出登录</van-button>
		</div>
	</div>
</template>
<script>
	import sHeader from '@/components/SimpleHeader'
	import { getUserInfo,logout } from '@/service/user'
	import { setLocal } from '@/common/js/utils'
	import { Dialog } from 'vant'
	export default {
		components: {
		  sHeader
		},
		data(){
			return {
				user:'',
				checked: true,
				checked1: true,
				checked2: true,
				checked3: true,
			}
		},
		async mounted() {
		  const { data } = await getUserInfo()
			console.log(data)
		  this.user = data
		},
		 methods: {
		    onInput(checked) {
		      Dialog.confirm({
		        title: '确认切换吗',
		        message: '再次切换可恢复',
		      }).then(() => {
		        this.checked = checked;
		      });
		    },
			async logout() {
			  const { resultCode } = await logout()
			  if (resultCode == 200) {
			    setLocal('token', '')
			    window.location.href = '/'
			  }
			}
		  },
	}
</script>
<style lang="less" scoped>
	.app {
		background: #f9f9f9;
		.user {
			width: 90%;
			padding:0 0 10px 0;
			background: #fff;
			border-radius: 10px;
			margin:0 auto;
			margin-top: 55px;
			p {
				font-size: 16px;
				margin-top: 0;
			}
			img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
			.user_info{
				border: 1px solid #EE0A24;
				position: relative;
				background: #ffc9b8;
				display: flex;
				padding: 15px;
				border-radius: 10px;
				.user-desc {
					div {
						position: absolute;
						top: 0;
						right: 0;
						background: #ffaa7f;
						padding: 5px;
						border-radius: 10px;
					}
					span {
						display: block;
						padding-left: 10px;
						margin-top: 5px;
					}
				}			
			}
		}
		.list {
			width: 100%;
			background: #fff;
			margin-top: 15px;
			ul {
				margin: 0;
				padding: 0;
				
				li {
					width: 90%;
					height: 40px;
					margin: 5px auto;
					background: #f9f9f9;
					line-height: 40px;
					border-radius: 10px;
					.van-swith {
						margin-top: 10px;
						float: right;
					}
				}
			}
		}
	}
</style>