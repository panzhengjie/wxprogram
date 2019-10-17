// pages/book/book.js
var datas = require('../../utils/data.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    casIndex2: 0,
    rangeLise2: util.replacePhone(datas.userData().addrs, false),
    date: '2019-11-14',
    time: '12:00',
    bookToastHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindCasPickerChange2: function (e) {//地址选择
    this.setData({
      casIndex2: e.detail.value
    })
  },
  bindDateChange:function(e){//日期选择
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange(e){ //时间选择
    this.setData({
      time: e.detail.value
    })
  },
  bindToastTap(){ //按钮预定
    this.setData({
      bookToastHidden: false
    })
  },
  hideToast(){ //预定组件
    this.setData({
      bookToastHidden:true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})