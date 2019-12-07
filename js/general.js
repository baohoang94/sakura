
	

$(document).ready(function(){
	//capnhatgiohang();
	$("body").click(function(){
		$(".search_result").hide();
	});
	
	$(window).scroll(function(){
            if ($(this).scrollTop() > 450) {
                $('header').addClass("topbarin");
            } else {
                $('header').removeClass("topbarin");
            }
     }); 
	
	$('.btn_back_to_top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	$(".sub").mouseenter(function(){
		 	$(this).find('.titlea').addClass('active');
			$(this).find('.sub_hi').show();	
				
	});
	$(".sub").mouseleave(function(){
			$(this).find('.sub_hi').hide();	
			$(this).find('.titlea').removeClass('active');
				
	});	
		 $(".lang").mouseenter(function(){
			$(this).find('.lang_sub').show();	
				
	});
	$(".lang").mouseleave(function(){
			$(this).find('.lang_sub').hide();	
				
	});
	$( "#search_local" ).click(function() {	
	$("#search_local").val('');
	  $.ajax({
				   type: "POST",
				   url: base_url + "tinh-thanh-local",
				   data: "key= "+document.getElementById('search_local').value,			  
					success: function(data){			  			
							$('.search_result').css('display','block');	
							$('.search_result').html(data);
										
						 },
						   error: function(){}
				});
	});
	
	$('#search_local').on('keyup', function (event) {				
			$.ajax({
			   type: "POST",
			   url: base_url + "tinh-thanh-local",
			   data: "key= "+document.getElementById('search_local').value,			  
				success: function(data){			  			
						$('.search_result').css('display','block');	
						$('.search_result').html(data);
									
					 },
					   error: function(){}
			});
     
  	 }); 
   
   
	 $(".list_video").owlCarousel({
		autoPlay: false,
	  navText : ["",""],
	  rewindNav : true,
	  lazyLoad: true,
      slideSpeed : 300,
      paginationSpeed : 300,
      items : 1
      });	
	
	//$.stickysidebarscroll(".sticky_top",{offset: {top: 0, bottom: 310}});
	
	$(".icon_rep_cmt").click(function(){
		$(this).find(".box_rep").show();
	});
	$(".menu_doctor").hover(function(){
		$(".menu_lv3").show();
	},function(){
		$(".menu_lv3").hide();
	});	
	$(window).scroll(function(){if($(this).scrollTop()>100){$('.topbar').addClass("topbarin");}else{$('.topbar').removeClass("topbarin");}});
	
	
	$(".lang").mouseenter(function(){$(this).find('.sub_lang').show();});$(".lang").mouseleave(function(){$(this).find('.sub_lang').hide();});$('#search_top').on('keyup',function(event){if(event.which=='13'){return searchTopAllV();}});$(".content_dire").click(function(){$(this).toggleClass("btn_view");$(this).find(".detailQId").slideToggle(300);});$(".btn_view").click(function(){$(this).toggleClass("btn_view");});$(".bt_comment").click(function(){$(".idComnetDetail").slideDown(0,function(){});});
	$(".banner_news").owlCarousel({SingleItem:true,autoPlay:true,navigation:true,pagination:false,slideSpeed:300,paginationSpeed:300,items:1,navigationText:["",""]});
	$(".list_product_slide").owlCarousel({
		//autoPlay:true,
		navigation:true,slideSpeed:400,paginationSpeed:400,items:4,navigationText:["",""]});
	$(".slide_action").owlCarousel({autoPlay:true,navigation:true,slideSpeed:400,paginationSpeed:400,items:1,SingleItem:true,});$(".img_showroom").owlCarousel({autoPlay:true,navigation:true,slideSpeed:400,paginationSpeed:400,items:1,SingleItem:true,});
	$(".slider_store").owlCarousel({autoPlay:true,navigation:true,slideSpeed:400,paginationSpeed:400,items:1,SingleItem:true,navigationText:["",""]});
	$(".iconsearchV").click(function(){return searchTopAllV();});});	
	
	function chang_img_category(url,link_a){
		$('#category_product').attr('src',url);
		$('#linkCategoryPd').attr('href',link_a);

}	
	function searchTopAllV(){id_view=$('#search_top').val();if(id_view==""){return false;}id_view=change_alias(id_view)+"/";if(id_view!=""){window.location=base_url+'search/'+id_view;}else{$('#boxSearch').addClass('txtError');}}function xem_them_category(base_url){id_category=document.getElementById('categoryId').value;limit=document.getElementById('limitCount').value;$.ajax({type:"POST",url:base_url+"xemthem_category",data:"id_category= "+id_category+" & limit="+limit,success:function(data){$('.product_boder').append(data);limit_part=parseInt(limit)+20;$('#limitCount').val(limit_part).show();},error:function(){}});}function xem_them_Search(base_url){key_word=document.getElementById('searchKeyword').value;limit=document.getElementById('limitCount').value;$.ajax({type:"POST",url:base_url+"xemthem_searchall",data:"key_word= "+key_word+" & limit="+limit,success:function(data){$('.product_boder').append(data);limit_part=parseInt(limit)+20;$('#limitCount').val(limit_part).show();},error:function(){}});}function formatCurrency(num){num=num.toString().replace(/$|,/g,'');if(isNaN(num))num="0";sign=(num==(num=Math.abs(num)));num=Math.floor(num*100+0.50000000001);num=Math.floor(num/100).toString();for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));return(((sign)?'':'-')+num);}function themgiohang(value_id,base_url){$.ajax({type:"POST",url:base_url+"gio-hang-poup",data:"value_id= "+value_id,success:function(data){$('#poup_all_to').html(data);$('#poup_all_to').popup('show');},error:function(){}});}function closePopup(){$('#poup_all_to').popup('hide');$('#poup_all_to').html('');}function dat_hang_next(base_url){$('#poup_all_to').popup('hide');$('#poup_all_to').html('');$.ajax({type:"POST",url:base_url+"thong-tin-nguoi-nhan",success:function(data){$('#poup_all_to').html(data);$('#poup_all_to').popup('show');},error:function(){}});}function danghangViewAdmin(base_url){error=0;ho_ten=document.getElementById('dhn_ho_ten').value;dien_thoai=document.getElementById('dhn_so_di_dong').value;dia_chi=document.getElementById('dhn_dia_chi').value;tinh_thanh=document.getElementById('dhn_tinh_thanh').value;ghi_chu=document.getElementById('dhn_Ghichu').value;if(CheckBlank(ho_ten)){$('#dhn_ho_ten').addClass('error');error=1;}if(CheckBlank(dien_thoai)){$('#dhn_so_di_dong').addClass('error');error=1;}if(CheckBlank(dia_chi)){$('#dhn_dia_chi').addClass('error');error=1;}if(CheckBlank(tinh_thanh)){$('#dhn_tinh_thanh').addClass('error');error=1;}if(error==1){return false;}$.ajax({type:"POST",url:base_url+"mail/gio-hang",data:{ho_ten:ho_ten,dien_thoai:dien_thoai,dia_chi:dia_chi,tinh_thanh:tinh_thanh,ghi_chu:ghi_chu},success:function(data){}});closePopup();$('#poup_all_to').html('<div class="title_gio_hang title_nhan_hang" style="line-height:56px">CẢM ƠN QUÝ KHÁCH ĐÃ ĐẶT HÀNG!<span class="close_poup" onclick="return closePopup();">X</span></div><span class="thongbao"><br/> Quý khách vui lòng đợi trong vài phút chuyên viên tư vấn sẽ gọi lại quý khách để xác nhận thông tin!</span>');$('#poup_all_to').popup('show');}function TrimInput(sString){if(sString!=''){while(sString.substring(0,1)==' '){sString=sString.substring(1,sString.length);}while(sString.substring(sString.length-1,sString.length)==' '){sString=sString.substring(0,sString.length-1);}return sString;}}function CheckBlank(str){if(TrimInput(str)==''||str==''){return true;}else{return false;}}function dat_hang_nhanh(value_id,base_url,type){$.ajax({type:"POST",url:base_url+"dat-hang-nhanh-popup",data:{value_id:value_id,type:type},success:function(data){$('#poup_all_to').html(data);$('#poup_all_to').popup('show');},error:function(){}});}function danghangViewAdminNhanh(base_url){error=0;ho_ten=document.getElementById('dhn_ho_ten').value;dien_thoai=document.getElementById('dhn_so_di_dong').value;dia_chi=document.getElementById('dhn_dia_chi').value;tinh_thanh=document.getElementById('dhn_tinh_thanh').value;ghi_chu=document.getElementById('dhn_Ghichu').value;type_order=document.getElementById('type_order').value;ip_product=document.getElementById('ip_product').value;thiet_bi=document.getElementById('thiet_bi').value;if(CheckBlank(ho_ten)){$('#dhn_ho_ten').addClass('error');error=1;}if(CheckBlank(dien_thoai)){$('#dhn_so_di_dong').addClass('error');error=1;}if(CheckBlank(dia_chi)){$('#dhn_dia_chi').addClass('error');error=1;}if(CheckBlank(tinh_thanh)){$('#dhn_tinh_thanh').addClass('error');error=1;}if(error==1){return false;}$.ajax({type:"POST",url:base_url+"mail/dat-hang-nhanh",data:{ho_ten:ho_ten,dien_thoai:dien_thoai,dia_chi:dia_chi,tinh_thanh:tinh_thanh,ghi_chu:ghi_chu,type_order:type_order,ip_product:ip_product,thiet_bi:thiet_bi},success:function(data){}});closePopup();if(type_order==1){$('#poup_all_to').html('<div class="title_gio_hang title_nhan_hang" style="line-height:56px">CẢM ƠN QUÝ KHÁCH ĐÃ ĐẶT HÀNG!<span class="close_poup" onclick="return closePopup();">X</span></div><span class="thongbao"><br/> Quý khách vui lòng đợi trong vài phút chuyên viên tư vấn sẽ gọi lại quý khách để xác nhận thông tin!</span>');$('#poup_all_to').popup('show');}else{$('#poup_all_to').html('<div class="title_gio_hang title_nhan_hang" style="line-height:56px">CẢM ƠN QUÝ KHÁCH ĐÃ YÊU CẦU TƯ VẤN!<span class="close_poup" onclick="return closePopup();">X</span></div><span class="thongbao"><br/>Quý khách vui lòng đợi trong vài phút chuyên gia tư vấn sẽ gọi lại quý khách để tư vấn cách chăm sóc da cũng như chọn mua sản phẩm phù hợp với tình trạng da của quý khách!</span>');$('#poup_all_to').popup('show');}}function comentNulluser(base_url){noi_dung_com=document.getElementById('noi_dung_com').value;ho_ten=document.getElementById('ho_ten').value;email_com=document.getElementById('email_com').value;id_product=document.getElementById('id_product').value;value2=document.getElementById('diem').value;if(value2=="0"){value2=5;}else{value2=value2;}error=0;if(CheckBlank(noi_dung_com)){$('#noi_dung_com').addClass('error');error=1;}if(CheckBlank(ho_ten)){$('#ho_ten').addClass('error');error=1;}if(CheckBlank(email_com)){$('#email_com').addClass('error');error=1;}if(error==1){return false;}$('#noi_dung_com').val('');$('#ho_ten').val('');$('#email_com').val('');$.ajax({type:"POST",url:base_url+"add-comment.html",data:"noi_dung_com= "+noi_dung_com+" & ho_ten="+ho_ten+" & email_com="+email_com+" & id_product="+id_product+" & value2="+value2,success:function(data){},error:function(){}});link_addd_commnent='<div class="commentDetailTopLeft"> <span class="titl">'+ho_ten+'</span> <span class="date">Mới bình luận</span> </div><div class="commentDetailBootom">'+noi_dung_com+'</div>';$("#commentNewAll").append(link_addd_commnent);}function comentNulluserANotNull(value_id,base_url){$.ajax({type:"POST",url:base_url+"binh-luan-popup",data:{value_id:value_id},success:function(data){$('#poup_all_to').html(data);$('#poup_all_to').popup('show');},error:function(){}});}function comnent_tra_loi_iuser(base_url){noi_dung_com=document.getElementById('noi_dung_com_tra_loi').value;id_product=document.getElementById('ip_comment').value;$.ajax({type:"POST",url:base_url+"tra-loi-comment",data:"noi_dung_com= "+noi_dung_com+"& id_product="+id_product,success:function(data){return closePopup();},error:function(){}});}function searchProduct(){id_view=$('#search').val();id_view=change_alias(id_view)+"/";if(id_view!="/"){window.location=base_url+'tim-kiem/'+id_view;}else{}}function change_alias(alias){var str=alias;str=str.toLowerCase();str=str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");str=str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");str=str.replace(/ì|í|ị|ỉ|ĩ/g,"i");str=str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");str=str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");str=str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");str=str.replace(/d/g,"d");str=str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");str=str.replace(/-+-/g,"-");str=str.replace(/^\-+|\-+$/g,"");return str;}function ativeMenuLoaiDa(var_e,var_t){$('#loaida').find('.iconE').removeClass("iconEavtive");$(var_e).find('.iconE').addClass("iconEavtive");$('#loaidaval').val("Da "+var_t);}function ativeMenuChucnang(var_e,var_t){$('#chucnang').find('.iconV').removeClass("iconEavtive");$(var_e).find('.iconV').addClass("iconEavtive");$('#chucnangval').val(var_t);}function ativeMenuThuongHieu(var_e,var_t){$('#thuonghieu').find('.iconV').removeClass("iconEavtive");$(var_e).find('.iconV').addClass("iconEavtive");$('#thuoghieuval').val(var_t);}function ativeMenuDotuoi(var_e,var_t){$('#dotuoi').find('.iconE').removeClass("iconEavtive");$(var_e).find('.iconE').addClass("iconEavtive");$('#dotuoiVal').val(var_t);}function ativeMenuGioiTinh(var_e,var_t){$('#gioitinh').find('.iconE').removeClass("iconEavtive");$(var_e).find('.iconE').addClass("iconEavtive");$('#gioitinhval').val(var_t);}function searchAjax(){do_tuoi=document.getElementById('dotuoiVal').value;gioi_tinh=document.getElementById('gioitinhval').value;loai_da=document.getElementById('loaidaval').value;loai_da=document.getElementById('loaidaval').value;chuc_nang=document.getElementById('chucnangval').value;chon_gia_tu=document.getElementById('toPrice').value;chon_gia_den=document.getElementById('fromPrice').value;thuong_hieu=document.getElementById('thuoghieuval').value;$('.product_l').empty();$('.product_l').html("<div class='loadAjax'></div>");$.ajax({type:"POST",url:base_url+"search_ajax_san_pham",data:"do_tuoi= "+do_tuoi+" & gioi_tinh="+gioi_tinh+" & loai_da="+loai_da+" & chuc_nang="+chuc_nang+" & chon_gia_tu="+chon_gia_tu+" & chon_gia_den="+chon_gia_den+" & thuong_hieu="+thuong_hieu,success:function(data){$('.product_l').empty();$('.product_l').html(data).show();},error:function(){}});}function deleteSearchLoaiDa(_val){$('#loaida').find('.iconE').removeClass("iconEavtive");$('#loaidaval').val("");searchAjax();}function deleteSearchChucNang(_val){$('#chucnang').find('.iconV').removeClass("iconVavtive");$('#chucnangval').val("");searchAjax();}function deleteSearchGiaTu(_val){$('#toPrice').val("");searchAjax();}function deleteSearchGiaDen(_val){$('#fromPrice').val("");searchAjax();}function deleteSearchThuonghieu(_val){$('#thuonghieu').find('.iconV').removeClass("iconVavtive");$('#thuoghieuval').val("");searchAjax();}function deleteSearchGioiTinh(_val){$('#gioitinh').find('.iconE').removeClass("iconEavtive");$('#gioitinhval').val("");searchAjax();}function deleteSearchDoTuoi(_val){$('#dotuoi').find('.iconE').removeClass("iconEavtive");$('#dotuoiVal').val("");searchAjax();}$(document).ready(function(){$("#seeMoreClickThuongHieu").click(function(){id_thuong_hieu=document.getElementById('searchThuongHieu').value;limit=document.getElementById('limitCount').value;$.ajax({type:"POST",url:base_url+"xemthem_thuonghieu",data:"id_thuong_hieu= "+id_thuong_hieu+" & limit="+limit,success:function(data){$('.product_boder').append(data);limit_part=parseInt(limit)+20;$('#limitCount').val(limit_part).show();},error:function(){}});});});function yeu_cau_tu_van(base_url){error=0;ho_ten=document.getElementById('dhn_ho_ten').value;dien_thoai=document.getElementById('dhn_so_di_dong').value;dia_chi=document.getElementById('dhn_dia_chi').value;tinh_thanh=document.getElementById('dhn_tinh_thanh').value;ghi_chu=document.getElementById('dhn_Ghichu').value;thiet_bi=document.getElementById('thiet_bi').value;if(CheckBlank(ho_ten)){$('#dhn_ho_ten').addClass('error');error=1;}if(CheckBlank(dien_thoai)){$('#dhn_so_di_dong').addClass('error');error=1;}if(CheckBlank(dia_chi)){$('#dhn_dia_chi').addClass('error');error=1;}if(CheckBlank(tinh_thanh)){$('#dhn_tinh_thanh').addClass('error');error=1;}if(error==1){return false;}$('#dhn_tinh_thanh').val('');$('#dhn_so_di_dong').val('');$('#dhn_ho_ten').val('');$('#dhn_tinh_thanh').val('');$.ajax({type:"POST",url:base_url+"mail/yeu-cau-tu-van-full",data:{ho_ten:ho_ten,dien_thoai:dien_thoai,dia_chi:dia_chi,tinh_thanh:tinh_thanh,ghi_chu:ghi_chu,thiet_bi:thiet_bi},success:function(data){}});$('.box_yeu_cau_tu_van').html('<span class="thongbao"><div class="titile_yeu_cau_tu_van title_nhan_hang" style="line-height:56px">CẢM ƠN BẠN ĐÃ YÊU CẦU TƯ VẤN!</div><br/>Chuyên gia sẽ gọi lại bạn sau khi nhận được yêu cầu này!</span>');}function CheckEmail(s){s=TrimInput(s);if(s.indexOf(" ")>0)return false;if(s.indexOf("@")==-1)return false;if(s.indexOf(".")==-1)return false;if(s.indexOf("..")>0)return false;if(s.indexOf("@")!=s.lastIndexOf("@"))return false;if((s.indexOf("@.")!=-1)||(s.indexOf(".@")!=-1))return false;if((s.indexOf("@")==s.length-1)||(s.indexOf(".")==0))return false;if((s.indexOf(".")==s.length-1)||(s.indexOf("@")==0))if(s.indexOf("@")>s.indexOf("."))return false;var str="0123456789abcdefghikjlmnopqrstuvwxysz-@._";for(var i=0;i<s.length;i++){if(str.indexOf(s.charAt(i))==-1)return false;}return true;}function sendMailSakura(base_url){ho_ten=document.getElementById('ho_ten').value;email=document.getElementById('email_sned').value;so_dien_thoai=document.getElementById('so_dien_thoai').value;noi_dung_cau_hoi=document.getElementById('noi_dung_cau_hoi').value;error=0;if(CheckBlank(ho_ten)){$('#ho_ten').addClass('txtError');error=1;}else{$('#ho_ten').removeClass('txtError');}if(CheckBlank(email)){$('#email_sned').addClass('txtError');error=1;}if(!CheckBlank(email)){if(!CheckEmail(email)){$('#email_sned').addClass('txtError');error=1;}else{$('#email_sned').removeClass('txtError');}}if(CheckBlank(so_dien_thoai)){$('#so_dien_thoai').addClass('txtError');error=1;}else{$('#so_dien_thoai').removeClass('txtError');}if(CheckBlank(noi_dung_cau_hoi)){$('#noi_dung_cau_hoi').addClass('txtError');error=1;}else{$('#noi_dung_cau_hoi').removeClass('txtError');}if(error==1){return false;}$.ajax({type:"POST",url:base_url+"send_contact",data:{ho_ten:ho_ten,email:email,so_dien_thoai:so_dien_thoai,noi_dung_cau_hoi:noi_dung_cau_hoi},success:function(data){$('.bsDcH').html('<div class="loadSendmail"><div class="guiThanhCOng">Thank you!</div></div>')
$('#ho_ten').val("");$('#email_sned').val("");$('#so_dien_thoai').val("");$('#noi_dung_cau_hoi').val("");},error:function(){}});}function comentNulluser(){var myRadio2=$('input[name=rating_img]');var value2=myRadio2.filter(':checked').val();if(value2==""){value2=5;}else{value2=value2;}error=0;if(document.getElementById('ho_ten').value==""){$("#ho_ten").addClass("errorBT");error=1;}if(document.getElementById('titile').value==""){$("#titile").addClass("errorBT");error=1;}if(document.getElementById('noi_dung_com').value==""){$("#noi_dung_com").addClass("errorBT");error=1;}if(error==1){return false;}noi_dung_com=document.getElementById('noi_dung_com').value;ho_ten=document.getElementById('ho_ten').value;titile=document.getElementById('titile').value;id_product=document.getElementById('id_product').value;$('#noi_dung_com').val("");$('#titile').val("");$('#ho_ten').val("");$.ajax({type:"POST",url:base_url+"add-comment.html",data:"noi_dung_com= "+noi_dung_com+" & ho_ten="+ho_ten+" & titile="+titile+" & id_product="+id_product+" & value2="+value2,success:function(data){location.reload();},error:function(){}});}function addToCart_detail(value_id){id_val=document.getElementById('id_count_value').value;$.ajax({type:"POST",url:base_url+"gio_hang_insert",data:{value_id:value_id,id_val:id_val},success:function(data){window.location=base_url+'shopping-bags/';},error:function(){}});return false;}function sendEmailNews(){
	
	if(CheckBlank(document.getElementById('emailKm').value)){$('#emailKm').addClass('txtError');document.getElementById('emailKm').focus();return false;}if(!CheckEmail(document.getElementById('emailKm').value)){$('#emailKm').addClass('txtError');document.getElementById('emailBt').focus();return false;}$.ajax({type:"POST",url:base_url+"dang-ky-khuyen-mai.html",data:"email= "+document.getElementById('emailKm').value,success:function(data){if(data=="1"){$('#emailKm').addClass('txtError');}else{$('#emailKm').removeClass('txtError');alert("Cảm ơn quý khách đã đăng ký nhận thông tin khuyến mãi!");}},error:function(){}});}function search_dia_diem(){dia_diem=document.getElementById('dia_diem').value;$.ajax({type:"POST",url:base_url+"vi-tri-cua-hang-ajax",data:"dia_diem="+dia_diem,success:function(data){$('.ajax_map_reload').html(data);initMap();},error:function(){alert(" nto ok");}});}function check_system_find_city(val){id_system=val;$("#search_local").val("");$.ajax({type:"POST",url:base_url+"check-find-ajax",data:"id_system="+id_system+" & system_find_city="+1,success:function(data){$("#name_county").html("");$("#name_city").html(data);},error:function(){alert(" Not ok");}});}function check_city_find_county(val){id_city=val;$.ajax({type:"POST",url:base_url+"check-find-ajax",data:"id_city="+id_city+" & city_find_county="+1,success:function(data){$("#name_county").html(data);},error:function(){alert(" Not ok");}});}function ques_1_check(var_t,var_e){$("#val_ques_1").val(var_e);}function ques_2_check(var_t,var_e){$("#val_ques_2").val(var_e);}function ques_3_check(var_t,var_e){$("#val_ques_3").val(var_e);}function ques_4_check(var_t,var_e){$("#val_ques_4").val(var_e);}function ques_5_check(var_t,var_e){$("#val_ques_5").val(var_e);}function ques_6_check(var_t,var_e){$("#val_ques_6").val(var_e);}function ques_7_check(var_t,var_e){$("#val_ques_7").val(var_e);}function ques_8_check(var_t,var_e){$("#val_ques_8").val(var_e);}function ques_9_check(var_t,var_e){$("#val_ques_9").val(var_e);}function ques_10_check(var_t,var_e){$("#val_ques_10").val(var_e);}function ques_11_check(var_t,var_e){$("#val_ques_11").val(var_e);}function ques_12_check(var_t,var_e){$("#val_ques_12").val(var_e);}function ques_13_check(var_t,var_e){$("#val_ques_13").val(var_e);}function ques_14_check(var_t,var_e){$("#val_ques_14").val(var_e);}function ques_15_check(var_t,var_e){$("#val_ques_15").val(var_e);}function ques_16_check(var_t,var_e){$("#val_ques_16").val(var_e);}function ques_17_check(var_t,var_e){$("#val_ques_17").val(var_e);}function ques_18_check(var_t,var_e){$("#val_ques_18").val(var_e);}function ques_19_check(var_t,var_e){$("#val_ques_19").val(var_e);}function ques_20_check(var_t,var_e){$("#val_ques_20").val(var_e);}function ques_21_check(var_t,var_e){$("#val_ques_21").val(var_e);}var flag_show=0;function quiz_test_chap_1(){if(document.getElementById('val_ques_1').value==''||document.getElementById('val_ques_2').value==''||document.getElementById('val_ques_3').value==''||document.getElementById('val_ques_4').value==''||document.getElementById('val_ques_5').value==''||document.getElementById('val_ques_6').value==''||document.getElementById('val_ques_7').value==''||document.getElementById('val_ques_8').value==''||document.getElementById('val_ques_9').value==''||document.getElementById('val_ques_10').value==''||document.getElementById('val_ques_11').value==''){alert("Xin hãy trả lời hết câu hỏi trước khi xem kết quả !");return false;}score_1=Number(document.getElementById('val_ques_1').value);score_2=Number(document.getElementById('val_ques_2').value);score_3=Number(document.getElementById('val_ques_3').value);score_4=Number(document.getElementById('val_ques_4').value);score_5=Number(document.getElementById('val_ques_5').value);score_6=Number(document.getElementById('val_ques_6').value);score_7=Number(document.getElementById('val_ques_7').value);score_8=Number(document.getElementById('val_ques_8').value);score_9=Number(document.getElementById('val_ques_9').value);score_10=Number(document.getElementById('val_ques_10').value);score_11=Number(document.getElementById('val_ques_11').value);total=0;total=Number(score_1)+Number(score_2)+Number(score_3)+Number(score_4)+Number(score_5)+Number(score_6)+Number(score_7)+Number(score_8)+Number(score_9)+Number(score_10)+Number(score_11);if(Number(total)>=34&&Number(total)<=44){$("#result_1").html("Ở bài test số 1 số điểm của bạn là: "+total+", kết quả DA RẤT DẦU (O)");$("#result_1").addClass("btn_result_select");$("#result_1").removeAttr('onclick');$("#result_chap_1").val("O");}else if(Number(total)>=27&&Number(total)<=33){$("#result_1").html("Ở bài test số 1 số điểm của bạn là: "+total+", kết quả DA HƠI DẦU (O)");$("#result_1").addClass("btn_result_select");$("#result_1").removeAttr('onclick');$("#result_chap_1").val("O");}else if(Number(total)>=17&&Number(total)<=26){$("#result_1").html("Ở bài test số 1 số điểm của bạn là: "+total+", kết quả DA HƠI KHÔ (D)");$("#result_1").addClass("btn_result_select");$("#result_1").removeAttr('onclick');$("#result_chap_1").val("D");}else if(Number(total)>=11&&Number(total)<=16){$("#result_1").html("Ở bài test số 1 số điểm của bạn là: "+total+", kết quả DA KHÔ (D)");$("#result_1").addClass("btn_result_select");$("#result_1").removeAttr('onclick');$("#result_chap_1").val("D");}for(var i=1;i<20;i++){$("#val_ques_"+i).val("");}$("input:radio").attr("checked",false);flag_show++;if(Number(flag_show)==4){$(".result_total").show();}}function quiz_test_chap_2(){if(document.getElementById('val_ques_1').value==''||document.getElementById('val_ques_2').value==''||document.getElementById('val_ques_3').value==''||document.getElementById('val_ques_4').value==''||document.getElementById('val_ques_5').value==''||document.getElementById('val_ques_6').value==''||document.getElementById('val_ques_7').value==''||document.getElementById('val_ques_8').value==''||document.getElementById('val_ques_9').value==''||document.getElementById('val_ques_10').value==''||document.getElementById('val_ques_11').value==''||document.getElementById('val_ques_12').value==''||document.getElementById('val_ques_13').value==''||document.getElementById('val_ques_14').value==''||document.getElementById('val_ques_15').value==''||document.getElementById('val_ques_16').value==''||document.getElementById('val_ques_17').value==''||document.getElementById('val_ques_18').value==''){alert("Xin hãy trả lời hết câu hỏi trước khi xem kết quả !");return false;}score_1=Number(document.getElementById('val_ques_1').value);score_2=Number(document.getElementById('val_ques_2').value);score_3=Number(document.getElementById('val_ques_3').value);score_4=Number(document.getElementById('val_ques_4').value);score_5=Number(document.getElementById('val_ques_5').value);score_6=Number(document.getElementById('val_ques_6').value);score_7=Number(document.getElementById('val_ques_7').value);score_8=Number(document.getElementById('val_ques_8').value);score_9=Number(document.getElementById('val_ques_9').value);score_10=Number(document.getElementById('val_ques_10').value);score_11=Number(document.getElementById('val_ques_11').value);score_12=Number(document.getElementById('val_ques_12').value);score_13=Number(document.getElementById('val_ques_13').value);score_14=Number(document.getElementById('val_ques_14').value);score_15=Number(document.getElementById('val_ques_15').value);score_16=Number(document.getElementById('val_ques_16').value);score_17=Number(document.getElementById('val_ques_17').value);score_18=Number(document.getElementById('val_ques_18').value);total=0;total=Number(score_1)+Number(score_2)+Number(score_3)+Number(score_4)+Number(score_5)+Number(score_6)+Number(score_7)+Number(score_8)+Number(score_9)+Number(score_10)+Number(score_11)+Number(score_12)+Number(score_13)+Number(score_14)+Number(score_15)+Number(score_16)+Number(score_17)+Number(score_18);if(Number(total)>=34&&Number(total)<=72){$("#result_2").html("Ở bài test số 2 số điểm của bạn là: "+total+", kết quả DA RẤT NHẠY CẢM (S)");$("#result_2").addClass("btn_result_select");$("#result_2").removeAttr('onclick');$("#result_chap_2").val("S");}else if(Number(total)>=30&&Number(total)<=33){$("#result_2").html("Ở bài test số 2 số điểm của bạn là: "+total+", kết quả DA HƠI NHẠY CẢM (S)");$("#result_2").addClass("btn_result_select");$("#result_2").removeAttr('onclick');$("#result_chap_2").val("S");}else if(Number(total)>=25&&Number(total)<=29){$("#result_2").html("Ở bài test số 2 số điểm của bạn là: "+total+", kết quả DA HƠI KHỎE (R)");$("#result_2").addClass("btn_result_select");$("#result_2").removeAttr('onclick');$("#result_chap_2").val("R");}else if(Number(total)>=18&&Number(total)<=24){$("#result_2").html("Ở bài test số 2 số điểm của bạn là: "+total+", kết quả DA RẤT KHỎE (R)");$("#result_2").addClass("btn_result_select");$("#result_2").removeAttr('onclick');$("#result_chap_2").val("R");}for(var i=1;i<20;i++){$("#val_ques_"+i).val("");}$("input:radio").attr("checked",false);flag_show++;if(Number(flag_show)==4){$(".result_total").show();}}function quiz_test_chap_3(){if(document.getElementById('val_ques_1').value==''||document.getElementById('val_ques_2').value==''||document.getElementById('val_ques_3').value==''||document.getElementById('val_ques_4').value==''||document.getElementById('val_ques_5').value==''||document.getElementById('val_ques_6').value==''||document.getElementById('val_ques_7').value==''||document.getElementById('val_ques_8').value==''||document.getElementById('val_ques_9').value==''||document.getElementById('val_ques_10').value==''){alert("Xin hãy trả lời hết câu hỏi trước khi xem kết quả !");return false;}score_1=Number(document.getElementById('val_ques_1').value);score_2=Number(document.getElementById('val_ques_2').value);score_3=Number(document.getElementById('val_ques_3').value);score_4=Number(document.getElementById('val_ques_4').value);score_5=Number(document.getElementById('val_ques_5').value);score_6=Number(document.getElementById('val_ques_6').value);score_7=Number(document.getElementById('val_ques_7').value);score_8=Number(document.getElementById('val_ques_8').value);score_9=Number(document.getElementById('val_ques_9').value);score_10=Number(document.getElementById('val_ques_10').value);total=0;total=Number(score_1)+Number(score_2)+Number(score_3)+Number(score_4)+Number(score_5)+Number(score_6)+Number(score_7)+Number(score_8)+Number(score_9)+Number(score_10);if(Number(total)>=34&&Number(total)<=72){$("#result_3").html("Ở bài test số 3 số điểm của bạn là: "+total+", kết quả DA THUỘC LOẠI NHIỄM SẮC TỐ (P)");$("#result_3").addClass("btn_result_select");$("#result_chap_3").val("P");$("#result_3").removeAttr('onclick');}else if(Number(total)>=10&&Number(total)<=30){$("#result_3").html("Ở bài test số 3 số điểm của bạn là: "+total+", kết quả DA THUỘC LOẠI NHIỄM SẮC TỐ (N)");$("#result_3").addClass("btn_result_select");$("#result_chap_3").val("N");$("#result_3").removeAttr('onclick');}for(var i=1;i<20;i++){$("#val_ques_"+i).val("");}$("input:radio").attr("checked",false);flag_show++;if(Number(flag_show)==4){$(".result_total").show();}}function quiz_test_chap_4(){if(document.getElementById('val_ques_1').value==''||document.getElementById('val_ques_2').value==''||document.getElementById('val_ques_3').value==''||document.getElementById('val_ques_4').value==''||document.getElementById('val_ques_5').value==''||document.getElementById('val_ques_6').value==''||document.getElementById('val_ques_7').value==''||document.getElementById('val_ques_8').value==''||document.getElementById('val_ques_9').value==''||document.getElementById('val_ques_10').value==''||document.getElementById('val_ques_11').value==''||document.getElementById('val_ques_12').value==''||document.getElementById('val_ques_13').value==''||document.getElementById('val_ques_14').value==''||document.getElementById('val_ques_15').value==''||document.getElementById('val_ques_16').value==''||document.getElementById('val_ques_17').value==''||document.getElementById('val_ques_18').value==''||document.getElementById('val_ques_19').value==''||document.getElementById('val_ques_20').value==''||document.getElementById('val_ques_21').value==''){alert("Xin hãy trả lời hết câu hỏi trước khi xem kết quả !");return false;}score_1=Number(document.getElementById('val_ques_1').value);score_2=Number(document.getElementById('val_ques_2').value);score_3=Number(document.getElementById('val_ques_3').value);score_4=Number(document.getElementById('val_ques_4').value);score_5=Number(document.getElementById('val_ques_5').value);score_6=Number(document.getElementById('val_ques_6').value);score_7=Number(document.getElementById('val_ques_7').value);score_8=Number(document.getElementById('val_ques_8').value);score_9=Number(document.getElementById('val_ques_9').value);score_10=Number(document.getElementById('val_ques_10').value);score_11=Number(document.getElementById('val_ques_11').value);score_12=Number(document.getElementById('val_ques_12').value);score_13=Number(document.getElementById('val_ques_13').value);score_14=Number(document.getElementById('val_ques_14').value);score_15=Number(document.getElementById('val_ques_15').value);score_16=Number(document.getElementById('val_ques_16').value);score_17=Number(document.getElementById('val_ques_17').value);score_18=Number(document.getElementById('val_ques_18').value);score_19=Number(document.getElementById('val_ques_19').value);score_20=Number(document.getElementById('val_ques_20').value);score_21=Number(document.getElementById('val_ques_21').value);total=0;total=Number(score_1)+Number(score_2)+Number(score_3)+Number(score_4)+Number(score_5)+Number(score_6)+Number(score_7)+Number(score_8)+Number(score_9)+Number(score_10)+Number(score_11)+Number(score_12)+Number(score_13)+Number(score_14)+Number(score_15)+Number(score_16)+Number(score_17)+Number(score_18)+Number(score_19)+Number(score_20)+Number(score_21);if(Number(total)>=20&&Number(total)<=40){$("#result_4").html("Ở bài test số 4 số điểm của bạn là: "+total+", kết quả DA CĂNG (T)");$("#result_4").addClass("btn_result_select");$("#result_chap_4").val("T");$("#result_4").removeAttr('onclick');}else if(Number(total)>=41&&Number(total)<=85){$("#result_4").html("Ở bài test số 4 số điểm của bạn là: "+total+", kết quả DA NHĂN (W)");$("#result_4").addClass("btn_result_select");$("#result_chap_4").val("W");$("#result_4").removeAttr('onclick');}for(var i=1;i<21;i++){$("#val_ques_"+i).val("");}$("input:radio").attr("checked",false);flag_show++;if(Number(flag_show)==4){$('html, body').animate({scrollTop:$(".image_alert").offset().top},'slow');}}function result_total(){if(document.getElementById("result_chap_1").value==''||document.getElementById("result_chap_2").value==''||document.getElementById("result_chap_3").value==''||document.getElementById("result_chap_4").value==''){alert("Bạn cần hoàn tất 4 phần kiểm tra trắc nghiệm da trước khi xem kết quả cuối cùng")}else{skin_notation=document.getElementById("result_chap_1").value+document.getElementById("result_chap_2").value+document.getElementById("result_chap_3").value+document.getElementById("result_chap_4").value;$.ajax({type:"POST",url:base_url+"ajax-quiz-test",data:"skin_notation="+skin_notation,success:function(data){$('.main').html(data);$('html, body').animate({scrollTop:$(".quiz_test").offset().top},'slow');},error:function(){alert(" Not ok");}});}}function check_radio(var_t,var_e){$("#val_radio").val(var_e);}
	function test(){
		if(CheckBlank(document.getElementById('ho_ten').value)){$('#ho_ten').addClass('txtError');$('#ho_ten').focus();return false;}else{$('#ho_ten').removeClass('txtError');}
		if(CheckBlank(document.getElementById('so_dien_thoai').value)){$('#so_dien_thoai').addClass('txtError');$('#so_dien_thoai').focus();return false;}else{$('#so_dien_thoai').removeClass('txtError');}
		
		if(CheckBlank(document.getElementById('khu_vuc').value)){
			$('#khu_vuc').addClass('txtError');
			$("#khu_vuc").focus();
			return false;
		}else{
			$('#khu_vuc').removeClass('txtError');
		}
		
		if(document.getElementById('val_radio').value==""){alert("Mời chọn yêu cầu");return false;}
		ten_bac_si=document.getElementById('ten_bac_si').value;
		khu_vuc=document.getElementById('khu_vuc').value;
		ho_ten=document.getElementById('ho_ten').value;
		so_dien_thoai=document.getElementById('so_dien_thoai').value;
		noi_dung_cau_hoi=document.getElementById('noi_dung_cau_hoi').value;
		
		
		date_format=document.getElementById('date_format').value;request=document.getElementById('val_radio').value;order_appointment=1;$.ajax({type:"POST",url:base_url+"send_contact",data:{ho_ten:ho_ten,so_dien_thoai:so_dien_thoai,noi_dung_cau_hoi:noi_dung_cau_hoi,ten_bac_si:ten_bac_si,khu_vuc:khu_vuc,date_format:date_format,request:request,order_appointment:order_appointment},success:function(data){
	//alert(data);
	alert("Đặt lịch khám thành công !");location.reload();
	},error:function(){alert("loi");}});}
	
//function hover_key_dic(val){
//	
//	if(val !='')
//	{
//		$.ajax({
//			   type: "POST",
//			   url: base_url + "hover_key_dic",
//			   data: {val: val},			  
//				success: function(data){
//					
//					if(data !="" && data !=' ')
//					{
//						$(".tooltiptext").html(data);
//					}else{return false;}
//			 },
//			   error: function(){return false;}
//		});
//	}
//}
function hover_key_dic(val){
	
	if(val !='')
	{
		$.ajax({
			   type: "POST",
			   url: base_url + "hover_key_dic",
			   data: {val: val},			  
				success: function(data){
					
					if(data !="")
					{
						//$('.tooltip').tooltipster({							
//							content: data,
//							contentAsHTML: true,
//							
//						});

						$('.tooltip').tooltipster({contentAsHTML:true,animation:'fade',delay:100,updateAnimation:'fade',repositionOnScroll:false,});
						// at some point you may decide to update its content:
						$('.tooltip').tooltipster('content', data);
						// ...and open it:
						$('.tooltip').tooltipster('open');
						
					}
			 },
			   error: function(){}
		});
	}
}

function delete_rep_cmt(id_cmt,rep_delete){
	if(id_cmt=='' || rep_delete==''){
		alert("Có lỗi xảy ra ko thể xóa Cmt !");
		return false;
	}
	info="Bạn có chắc là muốn xóa bình luận này !";
	if( !confirm(info)) {
		return false;
	}else{
		$.ajax({
			   type: "POST",
			   url: base_url + "delete_rep_cmt",
			   data: {id_cmt: id_cmt, rep_delete: rep_delete},			  
				success: function(data){

					
					if(data=='ok')
					{
						alert("Xóa bình luận thành công !");
						location.reload();
					}else{
						alert("Xóa bình luận chưa được, xin vui lòng thữ lại !");
					}
				},
			   error: function(){}
		});
	}
}

function admin_rep_comment(val_id){
	ho_ten_rep=document.getElementById("ho_ten_rep_"+val_id).value;
	noi_dung_com_rep=document.getElementById("noi_dung_com_rep_"+val_id).value;
	id_cmt_rep=document.getElementById("id_cmt_rep_"+val_id).value;
	if(noi_dung_com_rep =='')
	{
		alert("Vui lòng điền nội dung trả lời !");
		$("#noi_dung_com_rep").focus();
		return false;
	}
	
	$.ajax({
		type: "POST",
		url: base_url + "add-rep-comment.html",
		data: {ho_ten_rep: ho_ten_rep, noi_dung_com_rep: noi_dung_com_rep,id_cmt_rep: id_cmt_rep},			  
		success: function(data){					
			if(data =='ok')
			{
				alert("Trả lời bình luận thành công !");
				location.reload();
			}else
			{
				alert("Trả lời bình luận xảy ra lỗi, vui lòng thữ lại sau !")
			}
		},
		error: function(){alert("Xin vui lòng thữ lại sau!");}
	});
}

function show_popup_order(pro_id){
	$.ajax({
		type: "POST",
		url: base_url + "product/show_popup_order",
		data: {pro_id:pro_id},			  
		success: function(data){					
			$('#poup_all_to').html(data);
			$('#poup_all_to').popup('show');
		},
		error: function(){alert("Xin vui lòng thữ lại sau!");}
	});
	
	
}

function closePopup()
{
	$('#poup_all_to').popup('hide');
	$('#poup_all_to').html('');	
	
}

function convert_formatmoney(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

function number_change(){
	var a = parseInt(document.getElementById("number_order").value); 
	var b = parseInt(document.getElementById("price_one").value);
	//alert(convert_formatmoney(a*b));return false;
	$("#price_final_val").html(convert_formatmoney(a*b));
	$("#number_order_change").val(a);
	//$("#number_order").val(2);
	//alert(a);
}

function order_product(){
	ho_ten=document.getElementById("ho_ten_khach").value;
	if(ho_ten==""){
		alert("Vui lòng nhập họ tên");
		$("#ho_ten_khach").focus();
		return false;
	}
	so_dien_thoai=document.getElementById("so_dien_thoai").value;
	if(so_dien_thoai==""){
		alert("Vui lòng nhập số điện thoại");
		$("#so_dien_thoai").focus();
		return false;
	}
	dia_chi=document.getElementById("dia_chi").value;
	tinh_thanh=document.getElementById("tinh_thanh").value;
	ghi_chu=document.getElementById("ghi_chu").value;
	so_luong=document.getElementById("number_order_change").value;
	pro_id=document.getElementById("pro_id").value;
	pro_price_final=document.getElementById("pro_price_final").value;
	
	total=$("#price_final_val").text();
	ten_san_pham=$("#name_product").text();
	thiet_bi="Điện thoại";
	//alert(so_luong);
	//return false;
	$.ajax({
		type: "POST",
		url: base_url + "mail/dat-hang-nhanh",
		data: {pro_id:pro_id,ho_ten:ho_ten,so_dien_thoai:so_dien_thoai,dia_chi:dia_chi,tinh_thanh:tinh_thanh,ghi_chu:ghi_chu,so_luong:so_luong,total:total,ten_san_pham:ten_san_pham,thiet_bi:thiet_bi,pro_price_final:pro_price_final},			  
		success: function(data){					
			if(data=='ok'){
				alert("Đặt hàng thành công ! Chúng tôi sẽ liên hệ lại quý khách trong thời gian sớm nhất, trân trọng !")
			}
		},
		error: function(){alert("Xin vui lòng thữ lại sau!");}
	});
}


//gio hang
function capnhatgiohang(){
	$.ajax({
		   type: "POST",
		   url: base_url + "gio-hang/updatecount",
		   data: "",			  
		   success: function(data){	
		   $("#count_pro").html(data);
		   $("#count_pro_scroll").html(data);
		   
		},
		   error: function(){alert("Cập nhật lỗi !")}
		});
}

function themgiohang(value_id)
{
		number_product=document.getElementById("number_product").value;		
		$.ajax({
		   type: "POST",
		   url: base_url + "gio_hang_insert",
		   data:{value_id:value_id,number_product:number_product},		  
		   success: function(data){	
		   //alert(data);return false
			$('#poup_all_to').html(data);
			$('#poup_all_to').popup('show');
			capnhatgiohang();
		},
		   error: function(){alert("Thêm vào giỏ thất bại, xin vui lòng thữ lại sau !")}
		});
		
		
	return false;
}

function checkUpdateGiaHang(obj,base_url){_val=$('#quality_'+obj).val();count_val=parseInt($('#produc_price_'+obj).val())*parseInt(_val);$.ajax({type:"POST",url:base_url+"gio-hang/updatetotal",data:"rowidV= "+obj+" & qtyV="+_val,success:function(data){
		$('#tongTienCart').html(data+" đ");
		$('#pro_sum_'+obj).html(formatCurrency(count_val)+" đ");
		capnhatgiohang();
	},error:function(){}});}

function deleteGioHang(_val,base_url){
	if(confirm("Bạn có chắc là muốn xóa !")){
		$('#rowPro_'+_val).remove();
		//alert(base_url);return false;
		$.ajax({type:"POST",url:base_url+"gio-hang/xoa",
		data:"qtyV="+_val,
		success:function(data){
			//alert(data);
			$('#tongTienCart').html(data+" đ");capnhatgiohang();
		},error:function(){alert("thữ lại sau !")}});
	}else{
		return false
	}
}

function input_infomation(){
	$(".box_input").fadeIn();
	$(".btn_visible").fadeOut();
}

function checkPhone(txtPhone) {
	//alert(txtPhone);return false;
    var a = txtPhone;
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function order_cart(){
	
	ho_ten=document.getElementById("ho_ten_khach").value;
	if(ho_ten==""){
		alert("Vui lòng nhập họ tên");
		$("#ho_ten_khach").focus();
		return false;
	}
	so_dien_thoai=document.getElementById("so_dien_thoai").value;
	if(so_dien_thoai==""){
		alert("Vui lòng nhập số điện thoại");
		$("#so_dien_thoai").focus();
		return false;
	}
	if(!checkPhone(so_dien_thoai)){
		alert("Xin vui lòng nhập số điện thoại hợp lệ !");$("#so_dien_thoai").select();return false;
	}
	//alert("ok");return false;
	dia_chi=document.getElementById("dia_chi").value;
	tinh_thanh=document.getElementById("tinh_thanh").value;
	ghi_chu=document.getElementById("ghi_chu").value;
	thiet_bi="Máy tính - Laptop";
	
	//alert(total);return false;
	$.ajax({type:"POST",url:base_url+"mail/gio-hang",
	data:{name_order:ho_ten,name_adress:dia_chi,name_phone:so_dien_thoai,tinh_thanh:tinh_thanh,ghi_chu:ghi_chu,thiet_bi:thiet_bi},
	success:function(data){		
		//alert(data);return false;
			//catnhatgiohang();
			if(data=="cart_empty"){
				window.location.reload();
			}else{
				//alert("Đặt hàng thành công ! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất !");
				window.location.replace(base_url+"dat-hang-thanh-cong.html");
			}
	},error:function(){alert("thữ lại sau !")}});
}

function goback(){
	window.history.back();
}

function city_click(value){
	
	$(".list_local").hide();
	$.ajax({type:"POST",url:base_url+"tim_dia_chi_mua_hang_gan_nhat_theo_thanh_pho",
	data:{value:value},
	beforeSend: function(){
        $("#loading-image").show();
    },
    complete: function(){
        $("#loading-image").hide();
    },
	success:function(data){
		
		$(".list_local").html(data);
		$(".list_local").fadeIn("fast");
		jQuery('html, body').animate({ scrollTop: jQuery(".list_local").offset().top -150 }, 470);
		return false;
	},error:function(){alert("thữ lại sau !")}});
}

function system_select_ajax_city(){
	system_select_value= document.getElementById("system_select_value").value;
	$.ajax({
	   type: "POST",
	   url: base_url + "front/agency/system_select_ajax_city",
	   data: {system_select_value:system_select_value},			  
	   success: function(data){	
	   		$("#system_ajax_city").html(data);	
	   		//alert(data);return false;	   	   						
								  },
	   error: function(){}
	});
}

function search_list_local(){
	
	if(document.getElementById('system_select_value').value==""){alert("Xin mời chọn hệ thống");return false;}
		
	id_system=document.getElementById('system_select_value').value;
	
	id_city=document.getElementById('name_city').value;
	
	//alert(id_city);return false;
	
	$.ajax({
		type:"POST",
		url:base_url+"search-local-ajax",
		data:{id_system:id_system,id_city:id_city},
		success:function(data){
			//alert(data);return false;
			$(".map").html(data);
			$('.search_result').css('display','none');
			$('html, body').animate({scrollTop:$(".map").offset().top -150},'slow');
			},
		error:function(){alert(" Not ok");}
		})
;}
function dang_ky()
{

		$.ajax({
		   type: "POST",
		   url: base_url + "dang-ky-ajax",		  
		   success: function(data){	
		   //alert(data);return false
			$('#poup_all_to').html(data);
			$('#poup_all_to').popup('show');	
		},
		   error: function(){alert("Xin vui lòng thử lại sau !")}
		});
		
	return false;
}

function register_user()
{	
	user_name=document.getElementById('user_name').value;
	user_email=document.getElementById('user_email').value;
	user_phone=document.getElementById('user_phone').value;
	user_password=document.getElementById('user_password').value;
	user_re_password=document.getElementById('user_re_password').value;	
	user_day=document.getElementById('user_day').value;	
	user_month=document.getElementById('user_month').value;
	user_year=document.getElementById('user_year').value;
	user_male_or_female=document.getElementById('user_male_or_female').value;
	user_promotion=0;
	if($('#user_promotion').prop("checked") == true){
		user_promotion=1;
	}		
	error=0;
	if(CheckBlank(user_name))
	{	
		$('#user_name').addClass('error');
		error=1;	
	}
	else
	{
		$('#user_name').removeClass('error');
	}
	if(CheckBlank(user_email))
	{	
		$('#user_email').addClass('error');
		error=1;	
	}
	else
	{
		$('#user_email').removeClass('error');
	}	
	if(CheckBlank(user_phone))
	{	
		$('#user_phone').addClass('error');
		error=1;	
	}
	else
	{
		$('#user_phone').removeClass('error');
	}
	if(CheckBlank(user_male_or_female))
	{	
		$('#user_male_or_female').addClass('error');
		error=1;	
	}
	else
	{
		$('#user_male_or_female').removeClass('error');
	}
	if(CheckBlank(user_password))
	{	
		$('#user_password').addClass('error');
		error=1;	
	}	
	else
	{
		$('#user_password').removeClass('error');
	}
	if(CheckBlank(user_re_password))
	{	
		$('#user_re_password').addClass('error');
		error=1;	
	}
	else
	{
		$('#user_re_password').removeClass('error');
	}
	if(!CheckBlank(user_password))
	{		
		if(user_password!=user_re_password)
		{
			$('#user_re_password').addClass('error');
			error=1;
		}
		else
		{
			$('#user_re_password').removeClass('error');
		}
		mk = user_password.length; 
		if(parseInt(mk<7))
		{
			$('#user_password').addClass('error');
			error=1;
		}
		else
		{
			$('#user_password').removeClass('error');
		}
	}
	if(CheckEmail(user_email)!=true)
	{
		$('#user_email').addClass('error');
		return false;
	}
	else
	{
		$('#user_email').removeClass('error');
	}	
	
	if(error==1)
	{
		return false;
	}
	$('.bt_register').hide();
		
	$.ajax({
		   type: "POST",
		   url:base_url + "dang-ky-add",
		   data:{user_name: user_name,user_email: user_email,user_phone: user_phone,user_password: user_password,user_re_password: user_re_password,user_day: user_day,user_month: user_month,user_year: user_year,user_male_or_female: user_male_or_female,user_promotion: user_promotion},			  
			   success: function(data){				 
				   if(data==2)
				   {
					   $('.bt_register').show();
					   $('#user_phone').addClass('error');
					   $('#phone_error').html("Số điện thoại đã tồn tại");
					   return false;					   
				   }
				   else
				   {
					   $('#user_phone').removeClass('error');
					   $('#phone_error').html("");
				   }
				   if(data==3)
				   {
					    $('.bt_register').show();
					   $('#user_email').addClass('error');
					   $('#email_error').html("Email đã tồn tại");
					   return false;
				   }
				   else
				   {
					   $('#user_email').removeClass('error');
					   $('#email_error').html("");
				   }
				   $('.register_in').html('<div class="register_tb"><strong>Cảm ơn quý khách đã đăng ký tài khoản tại SAKURA Vietnam</strong> <br/>Vui lòng kiểm tra hộp thư email ' +user_email+' để kích hoạt tài khoản!</div>');	
					  				
		 },
		   error: function(){}
	});
	
}
function dang_nhap()
{

		$.ajax({
		   type: "POST",
		   url: base_url + "dang-nhap-ajax",		  
		   success: function(data){	
		   //alert(data);return false
			$('#poup_all_to').html(data);			
			$('#poup_all_to').popup('show');
		
		},
		   error: function(){alert("Xin vui lòng thử lại sau !")}
		});
		
	return false;
}
function login_user()
{	
	
	user_email=document.getElementById('user_email').value;	
	user_password=document.getElementById('user_password').value;
	error=0;
	if(CheckBlank(user_email))
	{	
		$('#user_email').addClass('error');
		error=1;	
	}
	else
	{
		$('#user_email').removeClass('error');
	}	
	
	if(CheckBlank(user_password))
	{	
		$('#user_password').addClass('error');
		error=1;	
	}	
	else
	{
		$('#user_password').removeClass('error');
	}	
	if(!CheckBlank(user_password))
	{	
		mk = user_password.length; 		
		if(mk<7)
		{
			$('#user_password').addClass('error');
			error=1;
		}
		else
		{
			$('#user_password').removeClass('error');
		}
	}	
	if(CheckEmail(user_email)!=true)
	{
		$('#user_email').addClass('error');
		error=1;
	}
	else
	{
		$('#user_email').removeClass('error');
	}
	
	
	if(error==1)
	{
		return false;
	}
	
	
	$.ajax({
		   type: "POST",
		   url:base_url + "login-ajax",
		   data:{user_email: user_email,user_password: user_password },			  
			   success: function(data){	
			   if(data==1)
			   {
					location.reload(true);
			   }
			   else
			   {
				  $('#user_email').addClass('error');
				  $('#user_password').addClass('error');	
				  $('#email_error').html('Mật khẩu hoặc email không đúng vui lòng thử lại !');			   
			   }
			  					  				
		 },
		   error: function(){}
	});
	
}
function love_product(product_id)
{	
	
	$.ajax({
		   type: "POST",
		   url:base_url + "love-product",
		   data:{product_id: product_id},			  
			   success: function(data){				  				  
				   $('section .top .right .cart_d .lv').remove();
								  				
		 },
		   error: function(){}
	});
	
}
function quen_mat_khau()
{	
	email_user=document.getElementById('email_user').value;	
	error=0;	
	if(CheckBlank(email_user))
	{	
		$('#email_user').addClass('error');
		return false;	
	}
	else
	{
		$('#email_user').removeClass('error');
	}	
	if(CheckEmail(email_user)!=true)
	{
		$('#email_user').addClass('error');
		return false;
	}
	else
	{
		$('#email_user').removeClass('error');
	}	
	$.ajax({
		   type: "POST",
		   url:base_url + "check-email-tk",
		   data:{email_user: email_user},			  
			   success: function(data){
				   if(data==1)
				   {
					   $(".llmk").hide();
					  $( "#resetPass" ).submit(); 
				   }
				   else
				   {
					   $('#email_user_tb').html('Email không tồn tại hoặc chưa được kích hoạt!');
				   }				 
				   return false;
		 },
		   error: function(){}
	});
	
}
function search_ajax_local(id,name,lat,lng)
{
	$('#search_local').val(name);
	$('.search_result').hide();		
	$.ajax({
		type:"POST",
		url:base_url+"search-local-ajax",
		data:{id:id,lat:lat,lng:lng},
		success:function(data){					
			$(".map").html(data);
			
			},
		error:function(){alert(" Not ok");}
		})
}