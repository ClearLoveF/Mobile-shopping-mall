import Vue from 'vue'
import md5 from 'js-md5';
import App from './App.vue'
import router from './router'
import store from './store'
import { prefix } from '@/common/js/utils'
import { Divider, Popup, Overlay, Loading, Dialog,ShareSheet , ContactCard, Form, AddressEdit, AddressList, Field, CellGroup, Cell, SwipeCell, Icon, Stepper, Card, Checkbox, CheckboxGroup, Button, Swipe, SwipeItem, PullRefresh, List, Tab, Tabs, GoodsAction, GoodsActionIcon, GoodsActionButton, SubmitBar, Toast, CountDown,NoticeBar,Rate,DropdownMenu, DropdownItem ,Uploader,CouponCell, CouponList ,Empty ,Step, Steps,Switch  } from 'vant'
import 'lib-flexible/flexible'
import BaiduMap from 'vue-baidu-map'

Vue.use(Divider).use(Popup).use(Overlay).use(Loading).use(Dialog).use(Toast).use(ContactCard).use(Form).use(AddressEdit).use(AddressList).use(Field).use(CellGroup).use(Cell).use(SwipeCell).use(Icon).use(Stepper).use(Card).use(Button).use(Swipe).use(SwipeItem).use(PullRefresh).use(List).use(Tab).use(Tabs).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(SubmitBar).use(Checkbox).use(CheckboxGroup).use(CountDown).use(NoticeBar).use(Rate).use(DropdownMenu).use(DropdownItem).use(Uploader).use(ShareSheet).use(CouponCell).use(CouponList).use(Empty).use(Step).use(Steps).use(Switch)
Vue.config.productionTip = false
Vue.use(BaiduMap, {
    ak: 'hvsN117PzsjClMGDLWxTnFkYLlRvFGEG'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$md5 = md5;
Vue.prototype.prefix = prefix;

Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
}
