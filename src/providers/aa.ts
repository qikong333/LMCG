
// // 订单提交要接受的参数


// //每个商品要组装一个aa
// let odProduct = {
//     itemid: this.carPile[i].ids,//商品ID
//     productName: this.carPile[i].name,//商品名称
//     productTitle: this.carPile[i].title,//商品标题
//     productQty: this.carPile[i].num,//商品数量
//     salePrice: this.carPile[i].sprice,//商品单价
//     productTotleprice: this.carPile[i].sprice * this.carPile[i].num, //商品总价
//     shopid: Variable.getInstance().shopid, //商家ID
//     isUseActivity: 0//是否是活动价(0:否,1:是)
// }


// // 就一个，在提交订单页面获取到的信息
// let odBase = {
//     shopid: Variable.getInstance().shopid, //商店ID
//     transportType: Since,//配送方式(0:配送,1:自提)
//     transportStartTime: this.now + ' ' + timeq,//配送开始时间:(yyyy-MM-dd HH:mm:ss)
//     transportEndTime: this.now + ' ' + timeh,//配送结束时间
//     userAddress: this.provinceName + this.cityName + this.countyName + this.addressDetail,//收货人地址
//     userName: this.username,//收货人名称
//     userMobile: this.mobileno,//收货人电话
//     isUseCoupon: 1, //是否使用优惠券(0:不使用,1:已使用)
//     couponId: this.couponActivityId, //优惠券ID
//     couponMsPassRelationId: this.id,//优惠券关联ID
//     usedCouponAmount: this.amount,//优惠券金额
//     orderTotalprice: this.orderz,//订单总价(所有商品单价*数量的和)
//     receivable: this.ordery,//应收(订单总价-优惠券金额)
//     payType: 3 //支付状态
//     orderMessage//备注
// };

// let params = {
//     shopid: localStorage.getItem('shopId'),//商店ID
//     itemid: this.datas.itemId,//ID
//     pid: this.datas.pid,//商品ID
//     productName: this.datas.name,//商品名称
//     productTitle: this.datas.ctitle,//商品标题
//     productQty: this.datas.selectNum,//商品数量
//     salePrice: this.datas.sprice,//商品单价
//     productTotleprice: this.datas.Totleprice, //商品总价
//     mainpic: this.datas.mainpic,  //图片url
//     isUseActivity: 0//是否是活动价(0:否,1:是)
// }