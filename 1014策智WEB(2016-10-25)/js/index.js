$(document).ready(function(e) {
	
	setTimeout(function(){
		$('.item .carousel-caption p').eq(0).css('opacity','1').addClass('animated1 fadeInUp1 go');
		$('.mengban').eq(0).css('opacity','0.2');
	},800);
	setTimeout(function(){
		$('.carousel-caption .liaojie').eq(0).css('opacity','1').addClass('animated1 fadeInUp1 go');
	},840);
	$('#ad-carousel').on('slid.bs.carousel', function () {
		$('.mengban').css('opacity','0');
		$('.carousel-caption p').css('opacity','0').removeClass('animated1 fadeInUp1 go');
		$('.carousel-caption .liaojie').css('opacity','0').removeClass('animated1 fadeInUp1 go');
		$('.active').find('.mengban').css('opacity','0.2');
		setTimeout(function(){
			$('.active').find('p').css('opacity','1').addClass('animated1 fadeInUp1 go');
		},800);
		setTimeout(function(){
			$('.active').find('.liaojie').css('opacity','1').addClass('animated1 fadeInUp1 go');
		},840);
		
	});
	//点击联系我们
	if($('#FullName').val().length > 0 )
	{
		$(".input1 p").hide();
	}
	if($('#Telephone').val().length > 0 )
	{
		$(".input2 p").hide();
	}
	if($('#mailbox').val().length > 0 )
	{
		$(".input3 p").hide();
	}
	if($('#Telephone2').val().length > 0 )
	{
		$(".dianhua2 span").hide();
	}
	if($('#AddTheGoods_bottom_textarea').val().length > 0 )
	{
		$(".textarea1 p").hide();
	}
	
	$('#ContactUs').click(function(){
		$('.contact').show();
	});
	$('.cha').click(function(){
		$('.contact').hide();
	});
	//登入界面
	
	//获取每个图片
	var aImg=$('#aimg').children();
	aImg.eq(0).click(function(){
		aImg.removeClass('back3').removeClass('back4');
		$(this).addClass('back2');
		$('.over').hide();
		$('.over').eq($(this).index()).show();
	});
	aImg.eq(1).click(function(){
		aImg.removeClass('back2').removeClass('back4');
		$(this).addClass('back3');
		$('.over').hide();
		$('.over').eq($(this).index()).show();
	}); 
	aImg.eq(2).click(function(){
		aImg.removeClass('back2').removeClass('back3');
		$(this).addClass('back4');
		$('.over').hide();
		$('.over').eq($(this).index()).show();
	});

	//表单验证
	
	var a,b,c,d;
	
	
	$('.input1 p').click(function(){
		$("#FullName").focus();
	});
	$('.input2 p').click(function(){
		$("#Telephone").focus();
	});
	$('.input3 p').click(function(){
		$("#mailbox").focus();
	});
	$('.textarea1 p').click(function(){
		$("#AddTheGoods_bottom_textarea").focus();
	});
	//验证姓名
	$("#FullName").focus(function(){
		$(".input1 p").hide();
	}).blur(function(){
		if($("#FullName").val() == 0)
		{
			$(".input1 p").show();
		}
        var m =  $("#FullName").val().match(/^[\u4e00-\u9fa5]{2,4}$/i);
        if($("#FullName").val().length>=1 && $("#FullName").val().length<=9) 
		{
			$('#span1').hide();
			$("#FullName").removeClass('border1');
			a=true;
			bOk();
			
		}
        else 
		{
			$('#span1').show().css('color','#e60012');
			$("#FullName").addClass('border1');
			b=false;
			bOk();
		};
    });
	//验证手机号
	$("#Telephone").focus(function(){
		$(".input2 p").hide();
	}).blur(function(){
		if($("#Telephone").val() == 0)
		{
			$(".input2 p").show();
		}
        var m =  $("#Telephone").val().match(/^1[34578]\d{9}$/);
        if(!m) 
		{
			$('#span2').show().css('color','#e60012');
			$("#Telephone").addClass('border1');
			
			b=false;
			bOk();
		}
        else 
		{
			$('#span2').hide()
			$("#Telephone").removeClass('border1');
			
			b=true;
			bOk();
		};
    });
	//验证姓名和电话都对的时候 改变（接通客服）的样式
	function bOk(){
		if(a && b && d)
		{
			$('#fasong1').css({
				color:'#424242',
				borderColor:'#424242',
				cursor:'pointer'
			});
			$('#fasong1').hover(function(){
				$(this).css({
					color:'#fff',
					backgroundColor:'#424242'
				});
			},function(){
				$(this).css({
					color:'#424242',
					borderColor:'#424242',
					backgroundColor:'#f2f2f2'
				});
			});
		}
		else{
			$('#fasong1').css({
				color:'#a0a0a0',
				borderColor:'#c8c8c8',
				cursor:'default'
			});
			 $("#fasong1").unbind();
		}
	}
	//控制留言点击事件
	$('#AddTheGoods_bottom_textarea').focus('click',function(){
		$('.textarea1 p').hide();
	}).blur(function(){
		if($("#AddTheGoods_bottom_textarea").val() == 0)
		{
			$(".textarea1 p").show();
		}
	});
	//控制留言板里面的内容
	$('#AddTheGoods_bottom_textarea').on('keyup',function(){
		checkLen(this,150);
	});
	//验证邮箱
	$("#mailbox").focus(function(){
		$(".input3 p").hide();
	}).blur(function(){
		if($("#mailbox").val() == 0)
		{
			$(".input3 p").show();
		}
        var m =  $("#mailbox").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
        if(!m) 
		{
			$("#mailbox").addClass('border1');
			$("#span3").css({
					color:'#e60012'
				});
			d=false;
			bOk();
			
		}
        else 
		{
			$("#mailbox").removeClass('border1');
			$("#span3").hide();
			d=true;
			bOk();
		};
    });
	//点击项目
	$('.project p').click(function(){
			$('#ol1').show();
		return false;//关键是这里，阻止冒泡
		});
	$('#ol1 li').click(function(){
		$('.project_top').html($(this).html()).css('color','#000');
		$('#ol1').hide();
	});
	$(document).click(function(){
		if($('#ol1').show()){
			$('#ol1').hide();
		}
	});
	//获取光标的时候 改变字体的大小
	//验证手机号2
	$('.dianhua2 span').click(function(){
		$(this).hide();
		$("#Telephone2").focus();
	});
	$("#Telephone2").focus(function(ev){
		if($('#Telephone2').val() ==0)
		{
			$(this).css('fontSize','30px');
		}
		$('#Telephone2').css('color','#000');
		$('.dianhua2 span').hide();
		$(this).css({
			color:'#000',
			borderColor:'#c8c8c8',
			fontSize:'30px'
		});
	}).blur(function(){
			if($('#Telephone2').val() == 0)
			{
				$('.dianhua2 span').show();
			}
			$(this).css('fontSize','30px');
			var m =  $("#Telephone2").val().match(/^0?1[3|4|5|8][0-9]\d{8}$/);
		   	if(!m) 
			{
				$('#Telephone2').css('color','#e60012');
				$("#Telephone2").addClass('border1');
				c=false;
				cOk();
			}
			else 
			{
				$('#Telephone2').css('color','#000');
				$("#Telephone2").removeClass('border1');
				c=true;
				cOk();
			};
    	});
	 $("#Telephone2").keyup(function () {
		//如果输入非数字，则替换为''，如果输入数字，则在每4位之后添加一个空格分隔
		if($(this).val().length == 11)
		{
			$("#Telephone2").blur();
		}
		this.value = this.value.replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, "$1");
	})
	// 如果姓名电话都验证完  下面完成并发送样式改变
	function cOk(){
		if(c)
		{
			$('#fasong2').css({
				color:'#424242',
				borderColor:'#424242',
				cursor:'pointer'
			});
			$('#fasong2').hover(function(){
				$(this).css({
					color:'#fff',
					backgroundColor:'#424242'
				});
			},function(){
				$(this).css({
					color:'#424242',
					borderColor:'#424242',
					backgroundColor:'#f2f2f2'
				});
			});
		}
		else{
			$('#fasong2').css({
				color:'#a0a0a0',
				borderColor:'#c8c8c8'
			});
			$("#fasong2").unbind();
		}
	}	
	
	//给头部加的滚轮事件
	var oDiv=document.getElementById('navbar');
	window.onscroll=function(){
		var osT=document.body.scrollTop || document.documentElement.scrollTop;
		if(osT>=71 )
		{
			oDiv.style.background='#101010';
		}
		else{
			oDiv.style.background='rgba(0,0,0,0)';
		}
	};
	// 控制文字的个数	checkLen(div,个数) 
	function checkLen(obj,znumber)  
	{ 
	    var maxChars = znumber;//最多字符数 
	    if (obj.value.length > maxChars) 
	    {
	    	obj.value = obj.value.substring(0,maxChars); 
	    	alert('最多'+znumber+'字符数' );
	    } 
	} 








});



















