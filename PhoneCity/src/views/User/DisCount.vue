<template>
	<div>
		<s-header :name="'优惠券列表'"></s-header>
		<div class="tab">
			<van-tabs v-model="active">
			  <van-tab title="未使用">
				  <van-empty
				    class="custom-image"
				    image="https://img.yzcdn.cn/vant/custom-empty-image.png"
				    description="您没有未使用的优惠券"
				  />
			  </van-tab>
			  <van-tab title="已使用/已过期">
				  <ul class="tab-list">
				  	<li>
						<span class="pic">￥<b>600</b></span>
						<span class="text">
							<p>华为mate 40 12GB+128GB 600元优惠券</p>
							<p class="cont">仅华为商城/华为授权店/华为直供专营店/华为线下旗舰店</p>
						</span>
					</li>
					<li>
						<span class="pic">￥<b>600</b></span>
						<span class="text">
							<p>华为mate 40 12GB+128GB 600元优惠券</p>
							<p class="cont">仅华为商城/华为授权店/华为直供专营店/华为线下旗舰店</p>
						</span>
					</li>
					<li>
						<span class="pic">￥<b>600</b></span>
						<span class="text">
							<p>华为mate 40 12GB+128GB 600元优惠券</p>
							<p class="cont">仅华为商城/华为授权店/华为直供专营店/华为线下旗舰店</p>
						</span>
					</li>
					<li>
						<span class="pic">￥<b>600</b></span>
						<span class="text">
							<p>华为mate 40 12GB+128GB 600元优惠券</p>
							<p class="cont">仅华为商城/华为授权店/华为直供专营店/华为线下旗舰店</p>
						</span>
					</li>
					<li>
						<span class="pic">￥<b>600</b></span>
						<span class="text">
							<p>华为mate 40 12GB+128GB 600元优惠券</p>
							<p class="cont">仅华为商城/华为授权店/华为直供专营店/华为线下旗舰店</p>
						</span>
					</li>
					<li>
						<span class="pic">￥<b>600</b></span>
						<span class="text">
							<p>华为mate 40 12GB+128GB 600元优惠券</p>
							<p class="cont">仅华为商城/华为授权店/华为直供专营店/华为线下旗舰店</p>
						</span>
					</li>			  	
				  </ul>
			  </van-tab>
			</van-tabs>
		</div>
	</div>
</template>
<script>
	import sHeader from '@/components/SimpleHeader'
	export default {
		data(){
			return {
				active:0,
			}
		},
		components: {
		  sHeader
		},
	}
</script>
<style lang="less" scoped>
	.tab {
		margin-top: 55px;
		
		.tab-list{
			li {
				background:rgb(216,216,216);
				opacity: .7;
				height: 100px;
				margin: 10px;
				padding: 10px;
				color: #fff;
				border-radius:10px ;
				.pic {
					display: inline-block;
					width: 100px;
					height: 88px;
					line-height: 88px;
					font-size: 20px;
					text-align: center;
					float: left;
					b{
						font-size: 30px;
					}
				}
				.text {
					font-size: 14px;
					.cont {
						width: 70%;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
		}
	}
</style>