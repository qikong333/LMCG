package com.liumu.shop.order.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

/**
 * 实体
 */
@Entity
@Table(name = "OD_BASE")
public class OdBase {

    private Long orderId;//订单ID
    private String orderNo;//订单编号
    private Integer orderPayStatus;//订单支付状态, 1:待支付,2:已支付,3:已退款,4:部份支付
    private Integer orderStatus;//订单状态 1:待付款,2:待发货,3:待收货,4:待评价,5:已完成,6:待自提,7:退款中,8:已退款,9:已取消,10:已删除,11:订单已支付，待商家确认(线下),12:待系统确认(线下),13:换货中,14:已换货,
    // 15:已退货,19:订单超时
    private String orderSource;//订单来源
    private String distributionStatus;//配送状态
    private Double orderTotalprice;//订单总价
    private Date orderCommittime;//订单提交时间
    private Date payTime;//支付时间
    private Date shipTime;//发货时间
    private Date reachTime;//确认收货时间，线下系统确认时间
    private Date divideTime;//分账时间
    private Date orderDealtime;//订单成交时间
    private Long passId;//通行证ID
    private Long shopid;//商家编码
    private String account;//代销点操作账号（针对代销商下单）
    private Long salesagentPlaceid;//代销点ID（针对代销商下单）
    private Double transportCostsAct;//实际运费
    private Double transportCosts;//运费
    private Integer transportType;//配送方式.0:配送,1:自提
    private String expressType;//运送快递
    private String expressName;//运送快递名称
    private String waybilldNo;//运单号
    private Long addressId;//收获地址ID
    private String userName;//收货人姓名
    private String userMobile;//收货人电话
    private String userAddress;//收货人地址
    private Integer needBill;//是否需要发票
    private Integer billType;//发票类别
    private String billContnet;//发票内容
    private String billTitle;//发票抬头
    private String billAddress;//发票地址
    private Integer paySource;//支付来源
    private Integer payType;//支付方式 1:表示微信，2.M卡支付 3.混合支付  4:表示支付宝 
    private String discountInfo;//折扣信息(折扣券)
    private String bankCard;//银行卡号
    private String bankName;//银行名称
    private String recordStatus;//记录状态
    private Long createBy;//创建人
    private Date createtime;//创建时间
    private Long updateBy;//修改人
    private Date updatetime;//修改时间
    private Double receivable;//应收
    private Double paidIn;//实收
    private String orderMessage;//订单留言
    private Integer needReceipt;//是否需要商品随附单
    private Integer orderDealStatus;//单处理状态(OD.OrderDealStatus)
    private Long outstoreBillId;//出库单ID
    private String remindStatus;//提醒状态
    private String isUseScore;//IS_USE_SCORE
    private String score;//使用的积分
    private Integer isUseCoupon;//是否使用优惠券 0:不使用,1:已使用
    private Double usedCouponAmount;//优惠券金额
    private String transportTypeName;//配送方式名称
    private Integer orderTotalNum;//订单商品数量
    private String returnOrder;//售后标识 0退货 1换货 2退款
    private Double returnAmount;//退款金额
    private String forderNo;//来源主订单号
    private String dflag;//是否已分账
    private String otype;//订单类型 01用户 02大客户
    private Long custid;//客户编码
    private String itembackflag;//商品退货标识 01部分退款 02全部退款
    private Long pickingid;//发货人ID
    private String cancelreason;//取消原因
    private Double totalprofit;//总利润
    private Double useBalance;//使用的账户余额
    private Double useRebates;//使用的返利金额
    private Byte orderType;//订单类型（0：线上，1：线下O2O）
    private Double scoreAmount;//积分抵扣金额
    private String vipPay;//是否VIP会员支付
    private String isRetTranCost;//是否退运费
    private String divideShop;//是否已分账给商家
    private Date refundFinTime;//最近一次退款退货完成时间
    private Date delayTakeTime;//延时收货时间
    private Byte version;//VERSION
    private Long shopDistributionId;//配送方式id
    private Long couponId; //优惠劵id
    private Long couponMsPassRelationId;//优惠券关联ID
    private Date transportStartTime;//配送开始时间
    private Date transportEndTime;//配送结束时间
    private String receiveCode;//提货码
    private Double unpaidAmount;//未支付金额
    private Long discountRatio;//折扣比例
    private String ischeck;//是否查询

    //订单产品列表
    private List<OdProduct> odProductList;
    //商店名称
    private String shopName;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ORDER_ID")
    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }


    @Column(name = "ORDER_NO")
    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }


    @Column(name = "ORDER_PAY_STATUS")
    public Integer getOrderPayStatus() {
        return orderPayStatus;
    }

    public void setOrderPayStatus(Integer orderPayStatus) {
        this.orderPayStatus = orderPayStatus;
    }


    @Column(name = "ORDER_STATUS")
    public Integer getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(Integer orderStatus) {
        this.orderStatus = orderStatus;
    }


    @Column(name = "ORDER_SOURCE")
    public String getOrderSource() {
        return orderSource;
    }

    public void setOrderSource(String orderSource) {
        this.orderSource = orderSource;
    }


    @Column(name = "DISTRIBUTION_STATUS")
    public String getDistributionStatus() {
        return distributionStatus;
    }

    public void setDistributionStatus(String distributionStatus) {
        this.distributionStatus = distributionStatus;
    }


    @Column(name = "ORDER_TOTALPRICE")
    public Double getOrderTotalprice() {
        return orderTotalprice;
    }

    public void setOrderTotalprice(Double orderTotalprice) {
        this.orderTotalprice = orderTotalprice;
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "ORDER_COMMITTIME")
    public Date getOrderCommittime() {
        return orderCommittime;
    }

    public void setOrderCommittime(Date orderCommittime) {
        this.orderCommittime = orderCommittime;
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "PAY_TIME")
    public Date getPayTime() {
        return payTime;
    }

    public void setPayTime(Date payTime) {
        this.payTime = payTime;
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "SHIP_TIME")
    public Date getShipTime() {
        return shipTime;
    }

    public void setShipTime(Date shipTime) {
        this.shipTime = shipTime;
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "REACH_TIME")
    public Date getReachTime() {
        return reachTime;
    }

    public void setReachTime(Date reachTime) {
        this.reachTime = reachTime;
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DIVIDE_TIME")
    public Date getDivideTime() {
        return divideTime;
    }

    public void setDivideTime(Date divideTime) {
        this.divideTime = divideTime;
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "ORDER_DEALTIME")
    public Date getOrderDealtime() {
        return orderDealtime;
    }

    public void setOrderDealtime(Date orderDealtime) {
        this.orderDealtime = orderDealtime;
    }


    @Column(name = "PASS_ID")
    public Long getPassId() {
        return passId;
    }

    public void setPassId(Long passId) {
        this.passId = passId;
    }


    @Column(name = "SHOPID")
    public Long getShopid() {
        return shopid;
    }

    public void setShopid(Long shopid) {
        this.shopid = shopid;
    }


    @Column(name = "ACCOUNT")
    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }


    @Column(name = "SALESAGENT_PLACEID")
    public Long getSalesagentPlaceid() {
        return salesagentPlaceid;
    }

    public void setSalesagentPlaceid(Long salesagentPlaceid) {
        this.salesagentPlaceid = salesagentPlaceid;
    }


    @Column(name = "TRANSPORT_COSTS_ACT")
    public Double getTransportCostsAct() {
        return transportCostsAct;
    }

    public void setTransportCostsAct(Double transportCostsAct) {
        this.transportCostsAct = transportCostsAct;
    }


    @Column(name = "TRANSPORT_COSTS")
    public Double getTransportCosts() {
        return transportCosts;
    }

    public void setTransportCosts(Double transportCosts) {
        this.transportCosts = transportCosts;
    }


    @Column(name = "TRANSPORT_TYPE")
    public Integer getTransportType() {
        return transportType;
    }

    public void setTransportType(Integer transportType) {
        this.transportType = transportType;
    }


    @Column(name = "EXPRESS_TYPE")
    public String getExpressType() {
        return expressType;
    }

    public void setExpressType(String expressType) {
        this.expressType = expressType;
    }


    @Column(name = "EXPRESS_NAME")
    public String getExpressName() {
        return expressName;
    }

    public void setExpressName(String expressName) {
        this.expressName = expressName;
    }


    @Column(name = "WAYBILLD_NO")
    public String getWaybilldNo() {
        return waybilldNo;
    }

    public void setWaybilldNo(String waybilldNo) {
        this.waybilldNo = waybilldNo;
    }


    @Column(name = "ADDRESS_ID")
    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }


    @Column(name = "USER_NAME")
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    @Column(name = "USER_MOBILE")
    public String getUserMobile() {
        return userMobile;
    }

    public void setUserMobile(String userMobile) {
        this.userMobile = userMobile;
    }


    @Column(name = "USER_ADDRESS")
    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }


    @Column(name = "NEED_BILL")
    public Integer getNeedBill() {
        return needBill;
    }

    public void setNeedBill(Integer needBill) {
        this.needBill = needBill;
    }


    @Column(name = "BILL_TYPE")
    public Integer getBillType() {
        return billType;
    }

    public void setBillType(Integer billType) {
        this.billType = billType;
    }


    @Column(name = "BILL_CONTNET")
    public String getBillContnet() {
        return billContnet;
    }

    public void setBillContnet(String billContnet) {
        this.billContnet = billContnet;
    }


    @Column(name = "BILL_TITLE")
    public String getBillTitle() {
        return billTitle;
    }

    public void setBillTitle(String billTitle) {
        this.billTitle = billTitle;
    }


    @Column(name = "BILL_ADDRESS")
    public String getBillAddress() {
        return billAddress;
    }

    public void setBillAddress(String billAddress) {
        this.billAddress = billAddress;
    }


    @Column(name = "PAY_SOURCE")
    public Integer getPaySource() {
        return paySource;
    }

    public void setPaySource(Integer paySource) {
        this.paySource = paySource;
    }


    @Column(name = "PAY_TYPE")
    public Integer getPayType() {
        return payType;
    }

    public void setPayType(Integer payType) {
        this.payType = payType;
    }


    @Column(name = "DISCOUNT_INFO")
    public String getDiscountInfo() {
        return discountInfo;
    }

    public void setDiscountInfo(String discountInfo) {
        this.discountInfo = discountInfo;
    }


    @Column(name = "BANK_CARD")
    public String getBankCard() {
        return bankCard;
    }

    public void setBankCard(String bankCard) {
        this.bankCard = bankCard;
    }


    @Column(name = "BANK_NAME")
    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }


    @Column(name = "RECORD_STATUS")
    public String getRecordStatus() {
        return recordStatus;
    }

    public void setRecordStatus(String recordStatus) {
        this.recordStatus = recordStatus;
    }


    @Column(name = "CREATE_BY")
    public Long getCreateBy() {
        return createBy;
    }

    public void setCreateBy(Long createBy) {
        this.createBy = createBy;
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CREATETIME")
    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }


    @Column(name = "UPDATE_BY")
    public Long getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(Long updateBy) {
        this.updateBy = updateBy;
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "UPDATETIME")
    public Date getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }


    @Column(name = "RECEIVABLE")
    public Double getReceivable() {
        return receivable;
    }

    public void setReceivable(Double receivable) {
        this.receivable = receivable;
    }


    @Column(name = "PAID_IN")
    public Double getPaidIn() {
        return paidIn;
    }

    public void setPaidIn(Double paidIn) {
        this.paidIn = paidIn;
    }


    @Column(name = "ORDER_MESSAGE")
    public String getOrderMessage() {
        return orderMessage;
    }

    public void setOrderMessage(String orderMessage) {
        this.orderMessage = orderMessage;
    }


    @Column(name = "NEED_RECEIPT")
    public Integer getNeedReceipt() {
        return needReceipt;
    }

    public void setNeedReceipt(Integer needReceipt) {
        this.needReceipt = needReceipt;
    }


    @Column(name = "ORDER_DEAL_STATUS")
    public Integer getOrderDealStatus() {
        return orderDealStatus;
    }

    public void setOrderDealStatus(Integer orderDealStatus) {
        this.orderDealStatus = orderDealStatus;
    }


    @Column(name = "OUTSTORE_BILL_ID")
    public Long getOutstoreBillId() {
        return outstoreBillId;
    }

    public void setOutstoreBillId(Long outstoreBillId) {
        this.outstoreBillId = outstoreBillId;
    }


    @Column(name = "REMIND_STATUS")
    public String getRemindStatus() {
        return remindStatus;
    }

    public void setRemindStatus(String remindStatus) {
        this.remindStatus = remindStatus;
    }


    @Column(name = "IS_USE_SCORE")
    public String getIsUseScore() {
        return isUseScore;
    }

    public void setIsUseScore(String isUseScore) {
        this.isUseScore = isUseScore;
    }


    @Column(name = "SCORE")
    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }


    @Column(name = "IS_USE_COUPON")
    public Integer getIsUseCoupon() {
        return isUseCoupon;
    }

    public void setIsUseCoupon(Integer isUseCoupon) {
        this.isUseCoupon = isUseCoupon;
    }


    @Column(name = "USED_COUPON_AMOUNT")
    public Double getUsedCouponAmount() {
        return usedCouponAmount;
    }

    public void setUsedCouponAmount(Double usedCouponAmount) {
        this.usedCouponAmount = usedCouponAmount;
    }


    @Column(name = "TRANSPORT_TYPE_NAME")
    public String getTransportTypeName() {
        return transportTypeName;
    }

    public void setTransportTypeName(String transportTypeName) {
        this.transportTypeName = transportTypeName;
    }


    @Column(name = "ORDER_TOTAL_NUM")
    public Integer getOrderTotalNum() {
        return orderTotalNum;
    }

    public void setOrderTotalNum(Integer orderTotalNum) {
        this.orderTotalNum = orderTotalNum;
    }


    @Column(name = "RETURN_ORDER")
    public String getReturnOrder() {
        return returnOrder;
    }

    public void setReturnOrder(String returnOrder) {
        this.returnOrder = returnOrder;
    }


    @Column(name = "RETURN_AMOUNT")
    public Double getReturnAmount() {
        return returnAmount;
    }

    public void setReturnAmount(Double returnAmount) {
        this.returnAmount = returnAmount;
    }


    @Column(name = "FORDER_NO")
    public String getForderNo() {
        return forderNo;
    }

    public void setForderNo(String forderNo) {
        this.forderNo = forderNo;
    }


    @Column(name = "DFLAG")
    public String getDflag() {
        return dflag;
    }

    public void setDflag(String dflag) {
        this.dflag = dflag;
    }


    @Column(name = "OTYPE")
    public String getOtype() {
        return otype;
    }

    public void setOtype(String otype) {
        this.otype = otype;
    }


    @Column(name = "CUSTID")
    public Long getCustid() {
        return custid;
    }

    public void setCustid(Long custid) {
        this.custid = custid;
    }


    @Column(name = "ITEMBACKFLAG")
    public String getItembackflag() {
        return itembackflag;
    }

    public void setItembackflag(String itembackflag) {
        this.itembackflag = itembackflag;
    }


    @Column(name = "PickingID")
    public Long getPickingid() {
        return pickingid;
    }

    public void setPickingid(Long pickingid) {
        this.pickingid = pickingid;
    }


    @Column(name = "CancelReason")
    public String getCancelreason() {
        return cancelreason;
    }

    public void setCancelreason(String cancelreason) {
        this.cancelreason = cancelreason;
    }


    @Column(name = "TotalProfit")
    public Double getTotalprofit() {
        return totalprofit;
    }

    public void setTotalprofit(Double totalprofit) {
        this.totalprofit = totalprofit;
    }


    @Column(name = "USE_BALANCE")
    public Double getUseBalance() {
        return useBalance;
    }

    public void setUseBalance(Double useBalance) {
        this.useBalance = useBalance;
    }


    @Column(name = "USE_REBATES")
    public Double getUseRebates() {
        return useRebates;
    }

    public void setUseRebates(Double useRebates) {
        this.useRebates = useRebates;
    }


    @Column(name = "ORDER_TYPE")
    public Byte getOrderType() {
        return orderType;
    }

    public void setOrderType(Byte orderType) {
        this.orderType = orderType;
    }


    @Column(name = "SCORE_AMOUNT")
    public Double getScoreAmount() {
        return scoreAmount;
    }

    public void setScoreAmount(Double scoreAmount) {
        this.scoreAmount = scoreAmount;
    }


    @Column(name = "VIP_PAY")
    public String getVipPay() {
        return vipPay;
    }

    public void setVipPay(String vipPay) {
        this.vipPay = vipPay;
    }


    @Column(name = "IS_RET_TRAN_COST")
    public String getIsRetTranCost() {
        return isRetTranCost;
    }

    public void setIsRetTranCost(String isRetTranCost) {
        this.isRetTranCost = isRetTranCost;
    }


    @Column(name = "DIVIDE_SHOP")
    public String getDivideShop() {
        return divideShop;
    }

    public void setDivideShop(String divideShop) {
        this.divideShop = divideShop;
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "REFUND_FIN_TIME")
    public Date getRefundFinTime() {
        return refundFinTime;
    }

    public void setRefundFinTime(Date refundFinTime) {
        this.refundFinTime = refundFinTime;
    }


    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DELAY_TAKE_TIME")
    public Date getDelayTakeTime() {
        return delayTakeTime;
    }

    public void setDelayTakeTime(Date delayTakeTime) {
        this.delayTakeTime = delayTakeTime;
    }


    @Column(name = "VERSION")
    public Byte getVersion() {
        return version;
    }

    public void setVersion(Byte version) {
        this.version = version;
    }


    @Column(name = "SHOP_DISTRIBUTION_ID")
    public Long getShopDistributionId() {
        return shopDistributionId;
    }

    public void setShopDistributionId(Long shopDistributionId) {
        this.shopDistributionId = shopDistributionId;
    }

    @Column(name = "COUPON_ID")
    public Long getCouponId() {
        return couponId;
    }

    public void setCouponId(Long couponId) {
        this.couponId = couponId;
    }

    @Column(name = "COUPON_MSPASS_RELATION_ID")
    public Long getCouponMsPassRelationId() {
        return couponMsPassRelationId;
    }

    public void setCouponMsPassRelationId(Long couponMsPassRelationId) {
        this.couponMsPassRelationId = couponMsPassRelationId;
    }

    @Transient
    public List<OdProduct> getOdProductList() {
        return odProductList;
    }

    public void setOdProductList(List<OdProduct> odProductList) {
        this.odProductList = odProductList;
    }

    @Transient
    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "TRANSPORT_START_TIME")
    public Date getTransportStartTime() {
        return transportStartTime;
    }

    public void setTransportStartTime(Date transportStartTime) {
        this.transportStartTime = transportStartTime;
    }

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "transport_end_time")
    public Date getTransportEndTime() {
        return transportEndTime;
    }

    public void setTransportEndTime(Date transportEndTime) {
        this.transportEndTime = transportEndTime;
    }

    @Column(name = "RECEIVE_CODE")
    public String getReceiveCode() {
        return receiveCode;
    }

    public void setReceiveCode(String receiveCode) {
        this.receiveCode = receiveCode;
    }

    @Column(name = "UNPAID_AMOUNT")
    public Double getUnpaidAmount() {
        return unpaidAmount;
    }

    public void setUnpaidAmount(Double unpaidAmount) {
        this.unpaidAmount = unpaidAmount;
    }
    

    @Column(name = "discount_ratio")
	public Long getDiscountRatio() {
		return discountRatio;
	}

	public void setDiscountRatio(Long discountRatio) {
		this.discountRatio = discountRatio;
	}

    @Column(name = "ischeck")
	public String getIscheck() {
		return ischeck;
	}

	public void setIscheck(String ischeck) {
		this.ischeck = ischeck;
	}
    
	
}