// pages/technician/technician.js
var datas = require('../../utils/data.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rangeList: ['美发','美颜','美甲'],
    casIndex:0,
    casIndex2:0,
    rangeLise2: util.replacePhone(datas.userData().addrs, false),
    technicians: datas.getSkilledData()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      list: that.data.technicians
    })
  },
  bindCasPickerChange: function (e) {
    this.setData({
      casIndex: e.detail.value
    })
  },
  bindCasPickerChange2:function(e){
    this.setData({
      casIndex2: e.detail.value
    })
  },
  navigateDetail: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../technician_detail/technician_detail?aid=' + e.currentTarget.dataset.aid
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