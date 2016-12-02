
;(function($){
	//默认参数
	var defaults= {
		Left:50,
		Top:100,
		dotSize:6,
		borderWeight:1,
		borderColor:'#000',
		fontFamily:'Microsoft YaHei',
		fontSize:14,
	};
	$.fn.elevatorNav = function(options){
		var navArr = [];
		var timer = null;
		var options = $.extend(defaults,options || {});
		$('#elevatorNav a').each(function(index,ele){
			var DomId = $(ele).attr('href');
			var dom = $(DomId)
			var offsetTop = dom.offset().top;
			var domHeight = dom.height() / 2;
			navArr.push(offsetTop + domHeight);
		});

		function liClickHandler(event){
			event = window.event || event;
			event.stopPropagation();
			event.preventDefault();
			$(this).addClass('current')
			.siblings('li').removeClass('current');
			var targetId = $(this).children('a').attr('href');
			var destination = $(targetId).offset().top;
			var leader = $(document).scrollTop();
			timer = setInterval(function(){		
				leader = leader + (destination - leader) /10;
				window.scrollTo(0,leader);
				if(Math.abs(destination - leader) < 1){
					clearInterval(timer);
				}
			},5);
		};
		function windowScroll(){
			setTimeout(function(){
				var docScrollTop = $(document).scrollTop();
				var li_length = $('#elevatorNav li').length;
				var num = search(navArr,docScrollTop);
				num = num < li_length - 1 ? num+1:num;
				$('#elevatorNav li').eq(num).addClass('current')
				.siblings('li').removeClass('current');	
			},600)
		};

		//用于判断当前scrollTop值处在哪两个元素之间。
		function search(arr,targetNum){
		    var start = 0;
		    var end = arr.length-1;
		    while(start <= end){
		        var m = Math.floor((start + end) / 2);
		        if(arr[m] > targetNum){
		            end = m - 1;
		        }
		        else if(arr[m] < targetNum){
		            start = m + 1;
		        }
		        else{
		            if(arr[m-1] == targetNum){
		                return m-1;
		            }
		                return m;
		        }
		    }  
		    return end;
		};

		//根据默认参数或用户输入的参数进行初始化
		function staticInit(options){
			$('#elevatorNav').css({'top': options.Top, 'left': options.Left});
			$('#elevatorNav li').css({'width': options.dotSize,'height':options.dotSize});
			$('#elevatorNav li a').css({'width': options.dotSize,'height':options.dotSize});
			$('#elevatorNav li span').css({'font':options.fontSize+'px/'+options.fontSize+'px '+options.fontFamily,'left': options.dotSize+10,'margin-top': -options.fontSize/2});
		}
		staticInit(options);
		return this.each(function(){
			$(window).on('scroll',windowScroll);
			$('#elevatorNav ol li').on('mouseenter mouseleave',function(){
				$(this).toggleClass('active');
				$(this).children('span').toggleClass('showText');
			});
			$('#elevatorNav ol li').on('click',liClickHandler);
		});
	}
})(jQuery);