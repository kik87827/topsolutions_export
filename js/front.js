if( window.console == undefined ){ console = { log : function(){} }; }
/** browser checker **/
var touchstart = "ontouchstart" in window;
var focusGlobalItem = "a,button,textarea,input[type='button'],input[type='image'],input[type='input'],input[type='password'],input[type='checkbox'],input[type='radio'],select,[tabindex]";
var userAgent=navigator.userAgent.toLowerCase();
;(function($){$.browserTest=function(a,z){var u='unknown',x='X',m=function(r,h){for(var i=0;i<h.length;i=i+1){r=r.replace(h[i][0],h[i][1]);}return r;},c=function(i,a,b,c){var r={name:m((a.exec(i)||[u,u])[1],b)};r[r.name]=true;r.version=(c.exec(i)||[x,x,x,x])[3];if(r.name.match(/safari/)&&r.version>400){r.version='2.0';}if(r.name==='presto'){r.version=($.browser.version>9.27)?'futhark':'linear_b';}r.versionNumber=parseFloat(r.version,10)||0;r.versionX=(r.version!==x)?(r.version+'').substr(0,1):x;r.className=r.name+r.versionX;return r;};a=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape']]):a).toLowerCase();$.browser=$.extend((!z)?$.browser:{},c(a,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));$.layout=c(a,/(gecko|konqueror|msie|opera|webkit)/,[['konqueror','khtml'],['msie','trident'],['opera','presto']],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);$.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[u])[0].replace('sunos','solaris')};if(!z){$('html').addClass([$.os.name,$.browser.name,$.browser.className,$.layout.name,$.layout.className].join(' '));}};$.browserTest(navigator.userAgent);})(jQuery);//http://jquery.thewikies.com/browser/
$(function(){
});
$(window).on("load",function(){
	headerFunc();
});

function menurock(target){
	$(function(){
		var target_obj = $(target);
		if(target_obj.length){
			target_obj.addClass("active");
		}
	});
}

function headerFunc(){
	var $gnb_one = $(".gnb_one");
	var $header_wrap = $(".header_wrap");
	var $htop_gnb_list_w = $(".htop_gnb_list_w");
	var $htop_gnb_list = $(".htop_gnb_list");
	var $gnb_two_dep_w = $(".gnb_two_dep_w");
	var $htop_gnb_li = $(".htop_gnb_list > li");
	var $gnb_two_dep_list = $(".gnb_two_dep_list");
	var $gnb_bg = $(".gnb_bg");
	var $btn_total_call = $(".btn_total_call");
	var maxHeightValue = 0;
	var maxheight = [];
	var gnbIs = false;

	// init
	$gnb_two_dep_w.css({"height" : "" });
	$gnb_two_dep_w.each(function(){
		var $this = $(this);
		var maxwid = [];
		var $this_dep = $this.find(".gnb_two");
		$this_dep.each(function(){
			maxwid.push($(this).width());
		});
		$this.css({ "min-width" : Math.max.apply(null,maxwid) + 120});
		maxheight.push($(this).height());
	});
	maxHeightValue = Math.max.apply(null,maxheight);
	//$gnb_two_dep_w.height(maxHeightValue);
	$htop_gnb_list.addClass("ready");

	$htop_gnb_li.hoverIntent({
		over : function(){
			$gnb_two_dep_w.removeClass("zup");
			var $this = $(this);
			var $t_gnb_two_dep_w = $this.find(".gnb_two_dep_w");
			
			$htop_gnb_li.not($this).removeClass("active");
			$htop_gnb_li.not($this).find(".gnb_two_dep_w").hide();
			$htop_gnb_li.not($this).find(".gnb_two_dep_w").css({height : 0});
			
			$this.addClass("active");
			$t_gnb_two_dep_w.show();
			setTimeout(function(){
				$t_gnb_two_dep_w.css({height : maxHeightValue});
				$gnb_bg.css({height : maxHeightValue});
			},30);
		},
		out : function(){

		},
		interval : 30
	});

	$htop_gnb_list_w.hoverIntent({
		over : function(){
			
		},
		out : function(){
			$htop_gnb_li.find(".gnb_two_dep_w").css({height : 0});
			$gnb_bg.css({height : 0});
			setTimeout(function(){
				$htop_gnb_li.removeClass("active");
			},510);
		},
		interval : 30
	});

	$btn_total_call.on("click",function(e){
		e.preventDefault();
		$(this).toggleClass("type2");
		$(".total_menu_wrap").slideToggle();
		$htop_gnb_li.removeClass("active");
		$htop_gnb_li.find(".gnb_two_dep_w").css({height : 0}).removeClass("active");
		$gnb_bg.css({height : 0});
	});


	$header_wrap.on("mouseleave",function(){
		
	});

	$(window).on("resize",function(){
		// action();
	}).resize();

	// function action(){
	
	// 	$gnb_two_dep_list.css({"padding-left" : "" });
	// 	$htop_gnb_li.each(function(index){
	// 		$(this).find(".gnb_two_dep_list").css({"padding-left" : $gnb_one.eq(index).offset().left });
	// 	});
	// }

}

function wordmax(target){
	var $target = $(target);
	var targetArray = [];
	$target.css({"min-width" : ""});
	$target.each(function(){
		targetArray.push($(this).width());
	});
	$target.css({"min-width" : Math.max.apply(null,targetArray)});
}