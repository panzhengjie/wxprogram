// pages/edit_addr/edit_addr.js
var datas = require('../../utils/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    saveToastHidden:true,
    data_province:'请选择省份',
    province: datas.provinceData(),
    city: datas.cityData(),
    proviIndex: 0,
    cityIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindProviPickerChange:function(e){
    console.log(e)
    this.setData({
      proviIndex: e.detail.value
    })
  },
  bindCityPickerChange: function (e) {
    console.log(e)
    this.setData({
      cityIndex: e.detail.value
    })
  },
  submitForm: function (e) {
    console.log('保存成功')
    this.setData({
      saveToastHidden: false
    })
  },
  hideToast(){
    this.setData({
      saveToastHidden:true
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