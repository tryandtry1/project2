// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category_type:
    [
      {
        id:1,
        "image-url": "",
        "title": "主食" 
      },
      {
        id:2,
        "image-url": "",
        "title": "肉类" 
      },
      {
        id:3,
        "image-url": "",
        "title": "蔬菜" 
      },
      {
        id:4,
        "image-url": "",
        "title": "水果" 
      }
    ],

    imgUrl: ["stapleFood.svg","meat.svg","vegetables.svg","fruit.svg"],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },


  goList(e){
    console.log("跳转到列表页啦！",e.currentTarget.dataset.id)
    wx.navigateTo({
      url: "/pages/category/foodList/foodList?id=" + e.currentTarget.dataset.id
    })
  }

})