<template>
	<div id="allmap">
		<s-header :name="'小米之家'"></s-header>
		<div class="Map">
			<baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
				<!--缩放-->
				<bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
				<!--定位-->
				<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
				<bm-control :offset="{width: '10px', height: '10px'}">
					<bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 999999}">
						<input type="text" placeholder="请输入搜索关键字" class="serachinput">
					</bm-auto-complete>
				</bm-control> 
				<!--点-->
				<bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
					<!--提示信息-->
					<bm-info-window :show="map.show">小米旗舰店</bm-info-window>
				</bm-marker>
			</baidu-map>
		</div>
		<ul>
			<li>小米天河区专卖店
			<p>营业时间：08：30--18：30</p>
			</li>
			<li>小米白云区专卖店
			<p>营业时间：08：30--18：30</p>
			</li>
			<li>小米花都区专卖店
			<p>营业时间：08：30--18：30</p>
			</li>
			<li>小米番禺区专卖店
			<p>营业时间：08：30--18：30</p>
			</li>
			<li>小米黄埔区专卖店
			<p>营业时间：08：30--18：30</p>
			</li>
		</ul>
	</div>
</template>
<script>
	import sHeader from '@/components/SimpleHeader'
	import {BmAutoComplete,BmControl} from 'vue-baidu-map'
	export default {
		name: "demo",
		data: () => ({
			map: {
				center: {
					lng: 113.361924,
					lat: 23.126704
				},
				
				zoom: 15,
				show: true,
				dragging: true
			},
			keyword:''
		}),
		components: {
			sHeader,
			BmAutoComplete,
			BmControl
			
		},
		 watch: {
		      value: function (currentValue) {
		        this.showMapComponent = currentValue
		        if (currentValue) {
		          this.keyword = ''
		        }
		      }
		    },
		methods: {
			handler({
				BMap,
				map
			}) {
				let me = this;
				console.log(BMap, map)
				// 鼠标缩放
				map.enableScrollWheelZoom(true);
				// 点击事件获取经纬度
				map.addEventListener('click', function(e) {
					console.log(e.point.lng, e.point.lat)
				})
			},


		}
	}
</script>
<style lang="less" scoped>
	.Map {
		.map {
			width: 100%;
			height: 400px;
			position: fixed;
			left: 0;
			top: 45px;
		}
		.serachinput {
			width: 80%;
			height: 30px;
			margin-left: 100px;
			opacity: .8;
		}
	}
	ul {
		margin: 445px 0 0 0;
		height: 220px;
		overflow-y:scroll ;
		li{
			height: 55px;
			font-size: 14px;
			border-bottom: 1px solid #646566;
			border-radius: 10px;
			padding: 10px;
		}
	}
</style>
