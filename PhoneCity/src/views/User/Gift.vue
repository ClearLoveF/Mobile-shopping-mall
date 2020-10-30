<template>
	<div class="gift">
		<s-header :name="'礼物码兑换'"></s-header>
		<div class="input">
			<input type="text" placeholder="输入礼物码兑换并使用"> <span>兑换</span>
		</div>	
		<van-steps :active="active" active-icon="success" active-color="#38f">
		  <van-step>输入兑换码</van-step>
		  <van-step>领取兑换码</van-step>
		  <van-step>兑换</van-step>
		  <van-step>兑换完成</van-step>
		</van-steps>
		<div class="image">
			<img src="../../assets/gift.png" alt="">
		</div>
	</div>
</template>
<script>
	import sHeader from '@/components/SimpleHeader'
	export default {
		data() {
		    return {
		      active: 0,
		    };
		  },
		components: {
		  sHeader
		},
	}
</script>
<style lang="less" scoped>
	.gift {
		width: 100%;
		height: 100%;
		background: rgb(238,238,238);
		.input {
			margin-top: 50px;
			height: 50px;
			background: #f8f8f8;
			input {
				width: 80%;
				height: 30px;
				margin-top: 8px;
				margin-left: 10px;
				text-indent: 10px;
				border: 1px solid #b5b5b5;
			}
			span {
				display: inline-block;
				width: 10%;
				height: 30px;
				font-size: 16px;
				margin-left: 10px;
			}
		}
		.image {
			width: 100%;
			height: 240px;
			text-align: center;
			
			img {
				width: 75%;
				height: 110px;
				margin-top: 60px;
			}
		}
	}
	
</style>