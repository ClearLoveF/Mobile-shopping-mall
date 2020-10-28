<template>
  <div class="about">
	  <s-header :name='"联系客服"'></s-header>
		<div class="text">
			<ul>
				<li><a href="https://static.account.xiaomi.com/html/privacy/account/zh_CN.html">小米隐私政策<van-icon name="arrow" /></a></li>
				<li><a href="https://static.account.xiaomi.com/html/agreement/account/cn.html">小米账号使用协议<van-icon name="arrow" /></a></li>
				<li><a href="https://www.mi.com/about/user-agreement">小米商城用户协议<van-icon name="arrow" /></a></li>
				<li><a href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html">小米商城隐私政策<van-icon name="arrow" /></a></li>
			</ul>
		</div>
  </div>
</template>

<script>
	import sHeader from '@/components/SimpleHeader'
export default {
 methods: {
   goBack() {
     this.$router.go(-1)
   },
   },
	 components: {
	   sHeader
	 },
}
</script>

<style lang="less" scoped>
	@import '../../common/style/mixin';
  .about {
    box-sizing: border-box;
	.text {
		.wh(100%,400px);
		margin-top: 55px;
		
		li {
			.wh(100%,40px);
			// border: 1px solid red;
			
			a {
				display: inline-block;
				.wh(100%,40px);
				line-height: 40px;
				font-size: 16px;
				text-indent: 10px;
				border-bottom: 1px solid #f9f9f9;
				.van-icon-arrow{
					float: right;
					margin-top: 13px;
				}
			}
		}
	}
  }
</style>
