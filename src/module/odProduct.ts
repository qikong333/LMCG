export interface odProduct{
    shopid:any;//商店ID
    itemid: any;//ID
    pid: any;//商品ID
    productName: string;//商品名称
    productTitle: string;//商品标题
    productQty: number;//商品数量
    salePrice: number;//商品单价
    productTotleprice: number; //商品总价
    mainpic: string;  //图片url
    isUseActivity:any;//是否是活动价(0:否,1:是)
}