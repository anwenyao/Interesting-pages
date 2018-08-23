$(document).ready(function(){
	//浏览器视口宽高
	var width = window.innerWidth;	
	var height = window.innerHeight;	
	$('section').width(width);
	$('section').height(height);
	
	$('.container').width(width);
	$('.container').height(12*height);
	
	var nowSec = 0;
	$('.container').swipe({	//事件  滑动方向 滑动距离 滑动时间 手指个数
		swipe:function(event,direction,distance,duration,fingercount){
			//实现翻页
			if(direction == 'up'){
				nowSec++;
			}else if(direction == 'down'){
				nowSec--;
			}
			//判断边界
			if(nowSec == 0){
				nowSec = 0;
			}else if(nowSec > 11){
				nowSec = 11;
			}
			//实现翻页候进行动画效果
			$('.container').animate({
				top:'-'+ (100 * nowSec) + '%'
			},400,function(){
				startAni();
			});
		}//end of swipe
		
	
	});
	
	
//--------dh-----------
	//第一页
//	$(".dhpage .page1-childhood").animate({width:"62%"},2000);
	$(".dhpage .page1-childhood").fadeIn(2000,function(){
		$(".dhpage .page1-sailboat").animate({left:"70%"},2000);
		$(".dhpage .page1-flight").animate({bottom:"25%",left:"10%"},2000);
	});
	/*$(".page1-building").fadeIn(2000,function(){
		//淡入淡出完成后再去执行
		//fadein fadeoout animate 最后接受的参数是一个函数，这个函数的内容是淡入淡出动画执行后再执行
		$(".page1-flight").animate({width: "70%"},2000);
	});
*/	

//--------dh------------




	
	function startAni(){
		//dh
		if(nowSec==1){
			//第二页依次淡入
			$(".dhpage .page2-xiaoshihou").fadeIn(1000,function(){
				$(".dhpage .page2-tianlan").fadeIn(2000,function(){
					$(".dhpage .page2-border").fadeIn(2000,function(){
					$(".dhpage .page2-sky").animate({width:"88%"},2000)
				});
				});
				
			});
		}
//		if(nowSec==2){
//			if(count){
//				
//			}
//			count=0;
//		}
		//end of dh
		
		if(nowSec == 2){
			$('.awy_sec3 .font').eq(0).fadeIn(1000,function(){
				$('.awy_sec3 .font').eq(1).fadeIn(1000,function(){
//					$('.awy_sec3 .font').fadeOut(2000);
					$('.awy_sec3 .fz').eq(0).animate({
						top:'40%',
						left:'42.5%'
					},2000,function(){
						$('.awy_sec3 .fz').eq(1).animate({
							top:'38%',
							left:'26%'
						},2000);
						$('.awy_sec3 .fz').eq(2).animate({
							top:'55%',
							left:'61%'
						},2000);
						
					});
				});
			});
		}// end of if
		
		if(nowSec == 3){
			$('.awy_sec4 .font01').eq(0).fadeIn(1000,function(){
				$('.awy_sec4 .font01').eq(1).fadeIn(1000,function(){
					$('.awy_sec4 img').eq(4).fadeIn(1000);
				});
			});
		}//end of if
		
		
	//end awy
		
	//start yhq
	if(nowSec==4)
		{$(".yhq1-txt").animate({opacity:"0"},2000,function(){
		$('.yhq1-girl').animate({bottom:"7%"},1000)
		$('.yhq1-girl').animate({bottom:"2%"},1000,function(){
			$('.yhq1-txt2').fadeIn(1000);
		})
	});}
		if(nowSec==5)
		{
		$('.wenhao2').fadeIn(2000,function(){
			$('.wenhao3').fadeIn(1000);
		});
		$('.yhq2-dream').animate({height:"14.5%"},1000,function(){
			$('.yhq2-dream2').css({animation: "ride 1s linear" ,display:"block"});
				$('.yhq2-dream3').fadeIn(1000,function(){
					$('.yhq2-dream4').animate({right:"58%",width:"45%"},1000,function(){
						$('.yhq2-1').animate({height:"0"},1000,function(){
							$('.yhq2-dream').remove();
							$('.yhq2-dream5').fadeIn(1000);
							$('.yhq2-txt3').fadeIn(1000,function(){
									$('.yhq2-txt2').fadeIn(700,function(){
								$('.yhq2-2wen').css({animation:"sho 2s ",display:"block"});
							});
							})
						})
					});
			});
		});
	  }
	//end yhq
	
	
	//start szh
	if(nowSec==6)
	{
		$("#szh_text1").fadeIn(2000,function(){
			
					$("#szh_text2").fadeIn(1000,function(){

								$("#szh_text3").fadeIn(1000,function(){
									
											$("#szh_text4").fadeIn(1000)

								})

					})

		})
		
	
		$(".szh_sec6 .szh_img1").fadeIn(2000)

		$(".szh_img3").animate({bottom:"40%"},2000,function(){
			
			$(".szh_img3").addClass("big");
			$(".szh_img1").addClass("big");

		});
	
		$(".szh_img5").animate({bottom:"-10%"},2000)
		$(".szh_img5").addClass("big");

	
	}
	if(nowSec==7)
	{
		$("#szh_img6").animate({left:"0"},4000);
		$("#szh_txt6").fadeIn(2000,function(){
					$("#szh_txt7").fadeIn(2000,function(){
						$("#szh_txt5").fadeIn(2000,function(){
							$("#szh_img6").animate({left:"100%"},4000)
							$("#szh_img7").animate({left:"0"},6000,function(){
								$("#szh_img7").animate({left:"100%"},2000)
								$("#szh_img8").animate({left:"0"},2000,function(){
									$("#szh_img8").animate({left:"100%"},2000)
									$("#szh_img9").animate({left:"0"},2000,function(){
											$("#szh_img9").animate({left:"100%"},2000)
											$("#szh_img10").animate({left:"0"},2000,function(){
												$("#szh_img6").remove();
												$("#szh_img7").remove();
												$("#szh_img8").remove();
			
												$("#szh_img9").remove();
											});

									});
								});

							});
						});

					});

			
		});
		
	}
	

	//cjj
	if(nowSec==8){
	 	$(".page8-chaung").fadeIn(1000,function(){
	 	$(".page8-fenglign").fadeIn(1000,function(){
	 	starply();
	 	});
	 });
	 	}
	 if(nowSec==9){
   		$(".page9-qiqiu").animate({width:"28%",height:"30%"},5000);
	 }
	//cjj end
	
	
	//	start jhq
	if(nowSec==10){
			$(".jhq_11_txt").fadeIn(2000,function(){
				$(".jhq_11_ballon").addClass("anim_zoom");
				$(".jhq_11_astronaut").addClass("anim_rotate1");
				$(".jhq_11_math").addClass("anim_rotate");
				$(".jhq_11_machine").addClass("anim_zoom1");
				$(".jhq_11_map").addClass("anim_rotate");
				$(".jhq_11_pen").addClass("anim_rotate1");
				$(".jhq_11_aid").addClass("anim_zoom1");
			})
		}
		else if(nowSec==11){
			$(".jhq_12_bg").fadeIn(2000,function(){
				$(".jhq_12_leaf").animate({width:"70%"},2000);
			    $(".jhq_12_plane").animate({right:"0"},4000,function(){
//					$(".jhq_12_photo1").addClass("ph_rotate");
//					$(".jhq_12_photo3").addClass("ph_rotate");
//					$(".jhq_12_photo4").addClass("ph_rotate");
//					$(".jhq_12_photo5").addClass("ph_rotate");
//					$(".jhq_12_photo6").addClass("ph_rotate");
	            })
			})
		}
	//end jhq
	
	//cjj
	function starply(){
	 	$(".page8-feiji1").css('width','12%');
	 	var index = 0;
	 	var timer = setInterval(function(){
	 		$('.cx').eq(index).css('display','block').siblings().css('display','none');
	 		console.log(index);
	 		index++;
	 		if(index == 8){
	 			clearInterval(timer);
	 		};
	 	},400);
	}//end of cjj


	}//end of startAni
	



		$('#music').on('click',function(){
		var $audio = document.getElementById('audio');
		console.log($audio);
		console.log($audio.paused);
		if($audio.paused){
			$audio.play();
			$('#music').attr('src','img/musicBtn.png');
		}else{
			$audio.pause();
			$('#music').attr('src','img/musicBtnOff.png');
			
		}
		
	});
	
});
