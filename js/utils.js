function checkVersion(){
    var u = navigator.userAgent;

    return {
        trident: u.indexOf('Trident') > -1,                             //IE鍐呮牳
        presto: u.indexOf('Presto') > -1,                               //opera鍐呮牳
        webKit: u.indexOf('AppleWebKit') > -1,                          //鑻规灉銆佽胺姝屽唴鏍�
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,     //鐏嫄鍐呮牳
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),                     //鏄惁涓虹Щ鍔ㄧ粓绔�
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),                //ios缁堢
        android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,    //android缁堢
        iPhone: u.indexOf('iPhone') > -1,                              //鏄惁涓篿Phone鎴栬€匭QHD娴忚鍣�
        iPad: u.indexOf('iPad') > -1,                                   //鏄惁iPad
        webApp: u.indexOf('Safari') == -1,                              //鏄惁web搴旇绋嬪簭锛屾病鏈夊ご閮ㄤ笌搴曢儴
        weixin: u.indexOf('MicroMessenger') > -1,                       //鏄惁寰俊
        qq: u.match(/\sQQ/i) == " qq",                                  //鏄惁QQ
        app: u.indexOf('tiantianApp') > -1                              //鏄惁鍦╝pp鍐�
    };
}



function getWH (){
	return {
		width : window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
		height : window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight
	}
}

function resizeEvent(callback, obj){

	obj = !!obj ? obj : {step : 300};
	
	window.addEventListener('resize', function (){
		var time = (new Date()).getTime();

		if(!obj.time || (time - obj.time) >= obj.step){
			callback();
			obj.time = time;
		}
	}, false)
}