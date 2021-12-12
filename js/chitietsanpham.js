$(document).ready(function() {
    $(".comments").empty();

    function return_html(i, j) {
        var html = '<div class="mt-3 pb-4 border-bottom comment"><h5 class ="fw-bold ten_commenter">' + obj_comment.infor_comments[i].comment[j].hovaten + '</h5><span class="sosao"><i class ="fas fa-star text-secondary"></i><i class ="fas fa-star text-secondary"></i><i class ="fas fa-star text-secondary"></i><i class ="fas fa-star text-secondary"></i><i class ="fas fa-star text-secondary"></i></span><p class ="text_comment">' + obj_comment.infor_comments[i].comment[j].text + '</p><div class ="danhgia_binhluan"><span class ="me-2"><i class ="far fa-thumbs-up"></i> Hữu ích</span><span><i class ="far fa-comments"></i> Thảo luận</span></div> </div>';
        return html;
    }
    var string_of_product = localStorage.getItem("productsJSON");
    var string_of_info_product = localStorage.getItem("info_product_clicked");
    var string_of_img_product = localStorage.getItem("img_product_clicked");
    if (string_of_product == null || string_of_info_product == null || string_of_img_product == null) {
        $("html").hide();
    } else {
        var obj_info_product = JSON.parse(string_of_info_product);
        var obj_img_product = JSON.parse(string_of_img_product);
        $(".cungloai").text("Máy hút bụi " + obj_info_product.loaisp);
        $(".cungloaicunghang").text("Máy hút bụi " + obj_info_product.loaisp + " " + obj_info_product.hang);
        $("#picture").attr("src", obj_img_product.img1);
        $("#img_modal").attr("src", obj_info_product.img);
        $(".tensanpham").text(obj_info_product.tensp);
        $("#tsp_modal").text(obj_info_product.tensp);
        $(".danhgia").text(obj_info_product.soluot_danhgia);
        var danh_gia = document.getElementsByClassName("danhgia")[0];
        if (danh_gia.innerHTML != "") {
            $(".textdanhgia").text(" đánh giá");
        }
        $(".title_danhgia").text("Đánh giá " + obj_info_product.tensp);
        if (obj_info_product.sosao == "") {
            $(".sosao").hide();
        } else {
            var children_sosao1 = $(".sosao")[0].children;
            var children_sosao2 = $(".sosao")[1].children;
            for (var j = 0; j < obj_info_product.sosao; j++) {
                children_sosao1[j].className = "fas fa-star text-warning";
                children_sosao2[j].className = "fas fa-star text-warning";
            }
        }
        $(".giadagiam").text(obj_info_product.gia_dagiam);
        $(".giachuagiam").text(obj_info_product.gia_chuagiam);
        $(".phantramgiam").text(obj_info_product.phantramgiam);

        var string_of_comment = localStorage.getItem("commentsJSON");
        if (string_of_comment != null) {
            var obj_comment = JSON.parse(string_of_comment);
            var where_to_insert = document.getElementsByClassName("comments")[0];
            for (var i = 0; i < obj_comment.infor_comments.length; i++) {
                if (obj_comment.infor_comments[i].tensp == obj_info_product.tensp) {
                    for (var j = 0; j < obj_comment.infor_comments[i].comment.length; j++) {
                        where_to_insert.insertAdjacentHTML('beforeend', return_html(i, j));
                        var class_star = document.getElementsByClassName("sosao");
                        var children_star = class_star[class_star.length - 1].children;
                        var star = obj_comment.infor_comments[i].comment[j].sosao;
                        for (var child = 0; child < star; child++) {
                            children_star[child].className = "fas fa-star text-warning";
                        }
                    }
                    break;
                }
            }
        }

        // Regex
        // 1. Regex Họ và tên
        function regex_hovaten() {
            var hovaten_val = $(".hovaten").val();
            var hovaten_regex = /^([A-Z][a-z]*\s{0,1}){1,}$/;
            if (hovaten_val.trim() == "") {
                $(".loi").text("Họ và tên không được bỏ trống");
                return false;
            } else if (!hovaten_regex.test(hovaten_val)) {
                $(".loi").text("Họ và tên với chữ cái đầu của mỗi từ phải viết hoa!");
                return false;
            } else {
                $(".loi").text("");
                return true;
            }
        }
        // 2. Regex Số điện thoại
        function regex_sodienthoai() {
            var sodienthoai_val = $(".sdt").val();
            var sodienthoai_regex = /^(03|05|07|09)[0-9]{8}$/;
            if (sodienthoai_val.trim() == "") {
                $(".loi").text("Số điện thoại không được bỏ trống");
                return false;
            } else if (!sodienthoai_regex.test(sodienthoai_val)) {
                $(".loi").text("Số điện thoại gồm 10 chữ số với đầu số thuộc (03|05|07|09)!");
                return false;
            } else {
                $(".loi").text("");
                return true;
            }
        }

        //Blur fields are required
        $(".hovaten").blur(regex_hovaten);
        $(".sdt").blur(regex_sodienthoai);

        //modal
        $('#myModal').modal({ backdrop: 'static', keyboard: false })
        var clicked_ngoisao = false;
        var ngoisao_index;
        $(".ngoisao").click(function() {
            clicked_ngoisao = true;
            var ngoisao = $(".ngoisao");
            ngoisao_index = $(this).index();
            $(".ngoisao").children("div").attr("class", "small");
            $(ngoisao[ngoisao_index]).children("div").attr("class", "small text-warning");
            //console.log(ngoisao_index);
            for (var i = 0; i <= ngoisao_index; i++) {
                $(ngoisao[i]).children("i").attr("class", "fas fa-star text-warning fs-3");
            }
            if (ngoisao_index < 4) {
                for (var i = ngoisao_index + 1; i <= 4; i++) {
                    $(ngoisao[i]).children("i").attr("class", "far fa-star text-warning fs-3");
                }
            }
        });
        $(".dong_modal").click(function() {
            clicked_ngoisao = false;
            var comment = $("#comment");
            var hovaten_value = $(".hovaten");
            var sdt_value = $(".sdt");
            var email_value = $(".email");
            $(".ngoisao").children("i").attr("class", "far fa-star text-warning fs-3");
            $(".ngoisao").children("div").attr("class", "small");
            comment.val("");
            hovaten_value.val("");
            sdt_value.val("");
            email_value.val("");
            $(".loi").text("");
        });
        $(".guidanhgia").click(function() {
            var comment = $("#comment");
            var hovaten_value = $(".hovaten");
            if (clicked_ngoisao == false) {
                $(".loi").text("Bạn chưa đánh giá điểm sao, vui lòng đánh giá.");
            } else if (clicked_ngoisao == true) {
                $(".loi").text("");
            }
            if (clicked_ngoisao == true && comment.val().trim() != "" && regex_hovaten() && regex_sodienthoai()) {
                $("#myModal").modal("hide");
                $(".ngoisao").children("i").attr("class", "far fa-star text-warning fs-3");
                $(".ngoisao").children("div").attr("class", "small");

                var string_of_comment = localStorage.getItem("commentsJSON");
                if (string_of_comment == null) {
                    var obj_comment = { infor_comments: [{ tensp: obj_info_product.tensp, sosaotrungbinh: ngoisao_index + 1, comment: [{ hovaten: hovaten_value.val(), sosao: ngoisao_index + 1, text: comment.val() }] }] };
                    var convert_from_obj_to_string = JSON.stringify(obj_comment);
                    localStorage.setItem("commentsJSON", convert_from_obj_to_string);

                } else {
                    var da_tung_comment = false;
                    var tong_sosao = 0;
                    var trungbinh_sosao = 0;
                    var obj_comment = JSON.parse(string_of_comment);
                    for (var i = 0; i < obj_comment.infor_comments.length; i++) {
                        // Sản phẩm vừa đã comment là đã từng được comment trước đó
                        if (obj_comment.infor_comments[i].tensp == obj_info_product.tensp) {
                            obj_comment.infor_comments[i].comment.push({ hovaten: hovaten_value.val(), sosao: ngoisao_index + 1, text: comment.val() });
                            for (var j = 0; j < obj_comment.infor_comments[i].comment.length; j++) {
                                tong_sosao += Number(obj_comment.infor_comments[i].comment[j].sosao);
                            }
                            trungbinh_sosao = Math.round(tong_sosao / obj_comment.infor_comments[i].comment.length);
                            obj_comment.infor_comments[i].sosaotrungbinh = trungbinh_sosao;
                            da_tung_comment = true;
                            break;
                        }
                    }
                    if (da_tung_comment == false) {
                        obj_comment.infor_comments.push({ tensp: obj_info_product.tensp, sosaotrungbinh: ngoisao_index + 1, comment: [{ hovaten: hovaten_value.val(), sosao: ngoisao_index + 1, text: comment.val() }] });
                    }
                    var convert_from_obj_to_string = JSON.stringify(obj_comment);
                    localStorage.setItem("commentsJSON", convert_from_obj_to_string);
                }
                var obj_product = JSON.parse(string_of_product);
                for (var i = 0; i < obj_comment.infor_comments.length; i++) {
                    for (var j = 0; j < obj_product.infor_products.length; j++) {
                        if (obj_comment.infor_comments[i].tensp == obj_product.infor_products[j].tensp) {
                            obj_product.infor_products[j].sosao = obj_comment.infor_comments[i].sosaotrungbinh;
                            obj_product.infor_products[j].soluot_danhgia = obj_comment.infor_comments[i].comment.length;
                            break;
                        }
                    }
                }
                var convert_from_obj_to_string = JSON.stringify(obj_product);
                localStorage.setItem("productsJSON", convert_from_obj_to_string);

                location.reload();
            }
        });
    }
});