<template>
  <header class="simple-header">
    <i class="iconfont icon-fanhui2" @click="goBack"></i>
    <div class="simple-header-name">{{ name }}</div>
	<div class="right">
		<van-cell class="share" @click="showShare = true" ><van-icon name="share" /></van-cell>
		<van-share-sheet
		  v-model="showShare"
		  title="请把我推给你有需要的朋友"
		  :options="options"
		   @select="onSelect"
		/>
	</div>
	
  </header>
</template>

<script>
	import {Toast} from 'vant';
export default {
	data(){
		 return {
			 showShare: false,
			       options: [
			         [
			           { name: '微信', icon: 'wechat' },
			           { name: '微博', icon: 'weibo' },
			           { name: 'QQ', icon: 'qq' },
			         ],
			         [
			           { name: '复制链接', icon: 'link' },
			           { name: '分享海报', icon: 'poster' },
			           { name: '二维码', icon: 'qrcode' },
			         ],
					]
		    };
	},
  props: {
    name: {
      type: String,
      default: ''
    },
    back: {
      type: String,
      default: ''
    }
  },
  methods: {
    goBack() {
      if (!this.back) {
        this.$router.go(-1)
      } else {
        this.$router.push({ path: this.back })
      }
      this.$emit('callback')
    },
	goTo() {
	  this.$router.push({ path: 'home' })
	},
	onSelect(option) {
	      Toast(option.name);
	      this.showShare = false;
	    },
  }
}
</script>

<style lang="less" scoped>
  @import '../common/style/mixin';
  
  .simple-header {
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
    background: #e7eaed;
    border-bottom: 1px solid #dcdcdc;
	.iconfont {
		margin-left: 15px;
	}
	.share {
		.wh(50px,44px);
		background: #e7eaed;
	}
    .simple-header-name {
      font-size: 14px;
	  text-align: center;
	  flex: 1;
    }
	.shopping-more {
		.wh(90px,40px);
	}
  }
</style>
