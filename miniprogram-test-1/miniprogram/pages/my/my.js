// pages/log/log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{
      list1: [
        {
          // icon: "/images/关于我们.png",
          name: "我的发表"
        }
      ],
      list2: [
        {
          // icon: "/images/circle1.png",
          name: "我的收藏"
        },
        {
          // icon: "/images/circle1.png",
          name: "我的服装"
        },
      ],
      list3: [
        {
          // icon: "/images/circle1.png",
          name: "关于我们"
        }
      ]
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	
  },
	click() {
		wx.navigateTo({
			url: '/pages/my/wenzhang',
		})

	},
	favorate(){
		wx.navigateTo({
			url: '/pages/my/mylike',
		})
	},
	about(){
		wx.navigateTo({
			url: '/pages/my/about',
		})
	}
})