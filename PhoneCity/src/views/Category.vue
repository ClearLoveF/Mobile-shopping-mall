<template>
  <div class="categray">
      <nav-bar></nav-bar>
	  <van-tabs v-model="active" type="card" color="#FF6B01" animated>
	    <van-tab title="iphone专区">
			<div class="iphone">
				<div class="head-img">
					<ul>
						<img src="../assets/iPhone/1.png" alt="">
						<img src="../assets/iPhone/2.png" alt="">
					</ul>
				</div>
				<div class="conent">
					<img src="../assets/iPhone/7.png" alt="">
				</div>
				<div class="text">
					<img src="../assets/iPhone/3.png" alt="">
					<p class="t1">好日子要记好</p>
					<p class="t2">iPhone 12 Pro Max</p>
					<p class="t3">11 月 6 日晚 9 点</p>
					<p class="t4">开始预购</p>
					<p class="t5">11 月 13 日发售</p>
				</div>
				<div class="con-img">
					<img src="../assets/iPhone/4.png" alt="">
				</div>
				<div class="con-img">
					<img src="../assets/iPhone/5.png" alt="">
				</div>
				<div class="con-img">
					<img src="../assets/iPhone/6.png" alt="">
				</div>
			</div>
		</van-tab>
	    <van-tab title="华为专区">
			<div class="huawei">
				<img src="../assets/huawei/1.png" alt="">
				<img src="../assets/huawei/2.png" alt="">
				<img src="../assets/huawei/3.png" alt="">
				<img src="../assets/huawei/4.png" alt="">
				<img src="../assets/huawei/5.png" alt="">
				<img src="../assets/huawei/6.png" alt="">
				<img src="../assets/huawei/7.png" alt="">
				<span></span>
			</div>
		</van-tab>
	    <van-tab title="小米专区">
			<div class="mi">
				<div class="cont1-img">
					<img src="../assets/mi/1.webp" alt="">
					<img src="../assets/mi/2.webp" alt="">
				</div>
				<div class="swipe">
					<van-swipe  :width="200" @change="onChange">
					  <van-swipe-item>
						  <img src="../assets/mi/1.png" alt="">
					  </van-swipe-item>
					  <van-swipe-item>
						  <img src="../assets/mi/2.png" alt="">
					  </van-swipe-item>
					  <van-swipe-item>
						  <img src="../assets/mi/3.png" alt="">
					  </van-swipe-item>
					  <van-swipe-item>
						  <img src="../assets/mi/4.png" alt="">
					  </van-swipe-item>
					  <van-swipe-item>
						  <img src="../assets/mi/5.png" alt="">
					  </van-swipe-item>
					</van-swipe>
				</div>
				<div class="cont2-img">
					<img src="../assets/mi/6.png" alt="">
					<img src="../assets/mi/7.png" alt="">
				</div>
				<div class="video">
					<video poster="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a62dd460899d6a3d37f1ff9cbb780d78.jpg?f=webp&amp;w=1280&amp;h=720&amp;bg=0" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e77d427d894cff2ca101f51e3a4c0301.mp4" data-log_code="hd#page=promotion&amp;bid=3640424.0" playsinline="playsinline" webkit-playsinline="webkit-playsinline" x-webkit-airplay="x-webkit-airplay" preload="none" controls="controls" data-settrack="true" onclick="_msq.push(['trackEvent','hd#page=promotion&amp;bid=3640424.0','','aa6b36fbc8a2bd55-b2aef6336abcc156','&quot;&quot;']);" stat_exposure="true"></video>
				</div>
				<div class="cont3-img">
					<img src="../assets/mi/8.png" alt="">					
				</div>
				<div class="video">
					<video poster="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7460eb0042ebcdbcd7626a358f8942b2.jpg?f=webp&amp;w=1280&amp;h=720&amp;bg=FFFFFF" src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/33447323e14427cf1f65a965237748c8.mp4" data-log_code="hd#page=promotion&amp;bid=3626682.0" playsinline="playsinline" webkit-playsinline="webkit-playsinline" x-webkit-airplay="x-webkit-airplay" preload="none" controls="controls" data-settrack="true" onclick="_msq.push(['trackEvent','hd#page=promotion&amp;bid=3626682.0','','aa6b36fbc8a2bd55-911bd640aa4a3492','&quot;&quot;']);" stat_exposure="true"></video>
				</div>
				<span></span>
			</div>
		</van-tab>
	  </van-tabs>
    
  </div>
</template>

<script>
import navBar from '@/components/NavBar'
export default {
  components: {
    navBar,
  },
  data() {
    return {
	   active: 0,
	   current:0
    }
  },
  methods: {
    goHome () {
      this.$router.push({ path: 'home' })
    },
	onChange(index) {
	      this.current = index;
	    },
  }
}
</script>
<style lang="less" scoped>
  @import '../common/style/mixin';
  .categray {
    background: #ff5500;
	.van-tabs {
		background: #ff5500;
		margin-top: 5px;
		.iphone {
			width: 100%;		
			.head-img {
				width: 100%;
				height: 110px;
				overflow-x: scroll;
				&::-webkit-scrollbar{
					display: none;
				}
				ul {
					width: 200%;
					margin: 0;
					height: 110px;
					img {
						width: 50%;
						height: 110px;
					}
				}
			}
			.conent {
				background: #000;
				img {
					display: block;
					width: 90%;
					margin-left:7%;
				}
			}
			.text {
				width: 100%;
				height: 600px;
				background: #000;
				img {
					display: block;
					width: 50%;
					margin: 0 auto;
				}
				.t1 {
					text-align: center;
					color: #fff;
					font-size: 22px;
					font-weight: 600;
				}
				.t2 {
					text-align: center;
					color: #fff;
					font-size: 18px;
				}
				.t3 {
					text-align: center;
					color: #c8c8c8;
					font-size: 18px;
				}
				.t4 {
					text-align: center;
					color: #c8c8c8;
					font-size: 18px;
					margin-top: -20px;
				}
				.t5 {
					text-align: center;
					color: #c8c8c8;
					font-size: 18px;
				}
			}
			.con-img {
				width: 100%;
				img {
					width: 100%;
					margin-top: -5px;
				}
			}
		}
		.huawei {
			width: 100%;
			img {
				width: 100%;
				margin-top: -3px;
			}
			span {
				display: block;
				width: 100%;
				height: 45px;
			}
		}
		.mi {
			width: 100%;
			.cont1-img {
				width: 100%;
				img {
					width: 100%;
					margin-top: -3px;
				}
			}
			.swipe {
				width: 100%;
				margin-top: -3px;
				background: #74BB6F;
			}
			.cont2-img {
				width: 100%;
				background: #7093BB;
				img {
					width: 100%;
				}
			}
			.video {
				width: 100%;
				video {
					width: 100%;
				}
			}
			.cont3-img {
				width: 100%;
				background: #7093BB;
				img {
					width: 100%;
				}
			}
			span {
				display: block;
				width: 100%;
				height: 45px;
			}
		}
	}
  }
</style>
