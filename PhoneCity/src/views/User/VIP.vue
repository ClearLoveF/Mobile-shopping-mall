<template>
	<div>
		<s-header :name="'会员中心'"></s-header>
		<div class="APP">
			<p>请前往小米商城App查看会员福利</p>
			<a href="http://s1.mi.com/m/appdownload/?mfull_ad&enter=1">立即下载小米商城App</a>
		</div>
	</div>
</template>
<script>
	import sHeader from '@/components/SimpleHeader'
	export default {
		components: {
		  sHeader
		},
	}
</script>
<style lang="less" scoped>
	.APP {
		width: 100%;
		// height: 100px;
		margin-top: 40px;
		p {
			text-align: center;
			font-size: 18px;
			margin: 100px 0 50px;
		}
		a {
			display: inline-block;
			width: 70%;
			height: 50px;
			line-height: 50px;
			font-size: 18px;
			background: #FF6700;
			color: #fff;
			margin: 10px 15%;
			text-align: center;
		}
	}
	
</style>