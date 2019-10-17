// pages/home/home.js
var datas = require('../../utils/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_url:'',
    navList: datas.getIndexNavData(),
    curNavId: 1,//nav栏的index
    curIndex:1 ,//
    list: datas.getIndexNavSectionData()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      banner_url: datas.getBannerData()
    })
    
  },
  switchTab(e){
   // console.log(e)
    this.setData({
      curNavId:e.currentTarget.dataset.index,
      curIndex: e.currentTarget.dataset.index 
    })
  },
  ToBook(){
    wx.navigateTo({
      url: '../book/book',
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