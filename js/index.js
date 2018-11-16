$(function(){
	//weui.alert('alert');
//	var countmarq = 0;
//	var countmarqdis = 1;
//	$(".inner-right-information").css("top",0);
//	var marq = setInterval(function(){
//		if(countmarq%2 == 0){
//			console.log(countmarq)
//			$(".inner-right-information").css("top",-(countmarqdis*24)+'px');
//			countmarqdis++
//		}
//		countmarq++
//	},1000)

//选择位置
	$(".left-header").on("click",function(){
		window.location.href = "pages/location.html"
	})
//位置确定 调到主页
	$(".city-list-item").on("click",function(){
		window.location.href = "../index.html"
		
	})
//显示选择车型列表
	$(".select-car").on("click",function(){
		$("#history-car[data-v-0cf629e2]").css("display","block");
		$(".board").css("display","block")
	})
//未添加车型  跳转选择车型 ,车型列表 添加车型 跳到选择车型
	$(".unselect-car,.history-bottom-button").on("click",function(){
		window.location.href = "pages/selectCar.html"
	})
	// 跳转选择服务类型
	$(".serve-item,.baoyang-img").on("click",function(){
		window.location.href = "pages/selectGoods.html"
	})
	// 跳转选择服务类型
	$(".left-content").on("click",function(){
		window.location.href = "pages/selectGoods.html"
	})
	//跳转 分享活动
	$(".right-bottom").on("click",function(){
		window.location.href = "pages/oldUserShare.html"
	})
	//已选列表 编辑
	$("#history-car .bianji").on("click",function(){
		$("#history-car .select-car").css("display","none")
		$("#history-car .right-box").css("display","block")
	})
	//跳转 保险类型页
	$(".right-top").on("click",function(){
		window.location.href = "pages/sourceList.html"
	})
	//选择车型 1,2,3步
	$(".brand-line").on("click",function(){
		$(".series-content").css("display","block");
		$(".board").css("display","block")
	})
	$(".series-line").on("click",function(){
		$(".series-content").css("display","none");
		$(".year-list").css("display","block")
	})
	$(".year-line").on("click",function(){
		$(".year-list").css("display","none");
		$(".model-list").css("display","block")
	})
	
	//车型选择返回  车型列表按钮
	$(".series-content .return-button").on("click",function(){
		$(".series-content").css("display","none");
		$(".board").css("display","none")
	})
	$(".year-list .return-button").on("click",function(){
		$(".series-content").css("display","block");
		$(".year-list").css("display","none");
	})
	$(".model-list .return-button").on("click",function(){
		$(".year-list").css("display","block");
		$(".model-list").css("display","none");
	})
	//车型 选择结束 跳转首页
	$(".model-list .model-line").on("click",function(){
		window.location.href = "../index.html"
	})
	//跳转到 我的订单
	$("#my-order").on("click",function(){
		window.location.href = "orderlist.html"
	})
	//跳转到 我的卡券
	$("#my-coupon").on("click",function(){
		window.location.href = "../pages/couponList.html"
	})
	//跳转到 意见反馈 jin数据	
	$("#feedback").on("click",function(){
		window.location.href = "https://jinshuju.net/f/RevzDw"
	})
	//退出登录  确认弹窗
	$(".quit-button").on("click",function(){
		$(".personal-model").css("display","block");
		$(".board").css("display","block");
	})
	//取消退出  弹窗消失
	$(".personal-model .cancel").on("click",function(){
		$(".personal-model").css("display","none");
		$(".board").css("display","none");
	})
	//banner 跳转页面
	$(".headbanner").on("click",function(){
		window.location.href = "pages/bannerdetail.html"
	})
	//服务列表  选择服务c
	$(".service-line").on("click",function(){
		if($(this).find("i").eq(0).hasClass("selected-circle-button")){
			$(this).find("i").eq(0).html("&#xe68b;")
			$(this).find("i").eq(0).removeClass("selected-circle-button")
			$(this).siblings(".service-item").css("display","none")
		}else{
			$(this).find("i").eq(0).html("&#xe6e8;").addClass("selected-circle-button")
			$(this).siblings(".service-item").css("display","block")
		}
	})
	//赠送服务  默认 不可点service
	$('.service-line[data-type="12"]').unbind();
	
	//选择 服务类型  下一步
	$("#price-bar .next-step").on("click",function(){
		
		var sele = 1;//1 已选好服务 0 未选择服务类型
		if(sele){
			window.location.href = 'information.html'
		}else{
			$("#popup").css("display","block");
		}
	})
	//服务详情介绍内页
	$(".service-name .name i").on("click",function(){
		window.location.href = "introGoods.html"
	})
	//查看选择明细 箭头翻转
	$("#price-bar .right-line").on("click",function(){
		if($(this).hasClass("right-line-show")){
			$(this).removeClass("right-line-show");
			$(".board").css("display","block");
			$(".order-detail-list").css("display","block");
			$("#price-bar .right-line .iconfont").html("&#xe660;");
		}else{
			$(this).addClass("right-line-show");
			$(".board").css("display","none");
			$(".order-detail-list").css("display","none");
			$("#price-bar .right-line .iconfont").html("&#xe656;");
		}
		
	})
	// 开发票  跳转到开发票信息填写
	
	$(".invoice-line").on("click",function(){
		window.location.href = "invoice.html"
	})
	
	//确认未选车型 弹窗消失
	$(".popup-button").on("click",function(){
		$("#popup").css("display","none");
	})
	
	
	//选择详细地址
//	$(".street-line").on("click",function(){
//	})
	//底部bar 跳转按钮
	$("#app-footer .footer-item").on("click",function(){
		var _index = $(this).index();
		console.log(_index);
		if(_index == 0){
			window.location.href = '/xieche/index.html'
		}else if(_index == 1){
			window.location.href = '/xieche/pages/orderlist.html'
		}else{
			window.location.href = '/xieche/pages/personal.html'
		}
	})
	//点击遮罩层   个页面的层消失
	$(".board").on("click",function(){
		$(this).css("display","none")
		//选车型 浮窗消失
		$(".series-content").css("display","none");
		$(".year-list").css("display","none");
		$(".model-list").css("display","none");
		//首页已选列表浮窗消失history-car
		$("#history-car").css("display","none");
		//退出确认弹窗 消失
		$(".personal-model").css("display","none");
		//选择服务明细隐藏  箭头反向
		$(".order-detail-list").css("display","none")
		$("#price-bar .right-line .iconfont").html("&#xe656;");
		// 优惠券选择 消失
		$("#coupon-list").hide();
		
		//支付方式选择 消失
		$("#pay-type").hide();
		
		//发票须知弹窗 消失invoice-detail
		$(".invoice-detail").hide();
	})
	
})