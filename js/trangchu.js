$(document).ready(function() {
    function return_html(i) {
        var html = '<div class="border border-2 rounded-3 d-inline-block product"><a href = "../html/chitietsanpham.html"><img src ="' + obj_product.infor_products[i].img + '" alt = "" class = "img_product"><div class = "p-2"><div class = "tensp fs-5">' + obj_product.infor_products[i].tensp + '</div><div class = "small"><span class = "giachuagiam text-decoration-line-through">' + obj_product.infor_products[i].gia_chuagiam + '</span><span class=phantramgiam> ' + obj_product.infor_products[i].phantramgiam + '</span></div><div class = "giadagiam fw-bold">' + obj_product.infor_products[i].gia_dagiam + '</div><div class = "doyeuthich"><span class = "so_sao"><i class = "fas fa-star text-secondary"></i><i class = "fas fa-star text-secondary"></i><i class = "fas fa-star text-secondary"></i><i class = "fas fa-star text-secondary"></i><i class = "fas fa-star text-secondary"></i></span><span class = "tong_danhgia">' + obj_product.infor_products[i].soluot_danhgia + '</span></div></div></a><div class = "btn-group"><button type = "button" class = "border add_to_cart px-2 py-2"><i class = "fas fa-shopping-cart me-2"></i>ADD TO CART</button><button type = "button" class = "border love px-3"><i class = "fas fa-heart px-1"></i></button><button type = "button" class ="border sosanh px-3"><i class = "fas fa-exchange-alt"></i></button></div></div>';
        return html;
    }

    function ngoisao() {
        var sosao = document.querySelectorAll(".so_sao");
        for (var i = 0; i < obj_product.infor_products.length; i++) {
            if (obj_product.infor_products[i].sosao == "") {
                sosao[i].textContent = "";
            } else {
                var children_sosao = sosao[i].children;
                for (var j = 0; j < obj_product.infor_products[i].sosao; j++) {
                    children_sosao[j].className = "fas fa-star text-warning";
                }
            }
        }
    }

    function removeAccents(str) {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .replace(/\s/g, '')
            .toLowerCase();
    }

    function xacdinh_gia(giasanpham) {
        var giasp = Number(giasanpham.replace("đ", "").replace(/\./g, ""));
        if (giasp < 2000000) {
            return "duoi2trieu";
        } else if (giasp >= 2000000 && giasp < 3000000) {
            return "tu2-3trieu";
        } else if (giasp >= 3000000 && giasp <= 4000000) {
            return "tu3-4trieu";
        } else {
            return "tren4trieu";
        }
    }

    function xacdinh_congsuat(congsuatsanpham) {
        if (congsuatsanpham.indexOf("Pa") == -1) {
            var congsuatsp_donvi_w = Number(congsuatsanpham.replace("W", "").replace(" ", ""));
        } else {
            var congsuatsp_donvi_pa = Number(congsuatsanpham.replace("Pa", "").replace(" ", ""));
            var congsuatsp_donvi_w = Math.round(congsuatsp_donvi_pa * 100 / (Math.pow(10, 12))) / 100;
        }
        if (congsuatsp_donvi_w < 2000) {
            return "duoi2000w";
        } else {
            return "tren2000w";
        }
    }
    var string_of_product = localStorage.getItem("productsJSON");
    if (string_of_product == null) {
        var obj_product = {
            infor_products: [{ img: "../img/demgiuong_deerma.png", tensp: "Máy hút bụi đệm giường diệt khuẩn UV Deerma CM1300", loaisp: "đệm giường", hang: "Deerma", gia_chuagiam: "1.420.000đ", phantramgiam: "-20%", gia_dagiam: "1.136.000đ", sosao: "", soluot_danhgia: "", khoangchuabui: "Hộp chứa - 0.4 lít", congsuat: "350 W", dauhutbui: "Đầu hút khe và chổi, Đầu hút đệm, Đầu hút bụi lớn", tienich: "Đèn UV diệt khuẩn", noisanxuat: "Trung Quốc" }],
            another_imgs_product: [
                { img1: "../img/demgiuong_deerma2.png" },
                { img1: "../img/xehoi_electrolux2.png" },
                { img1: "../img/danghop_samsung2.png" },
                { img1: "../img/congnghiep_panasonic2.png" },
                { img1: "../img/hoinuoc_hakawa2.png" },
                { img1: "../img/danghop_philips2.png" },
                { img1: "../img/danghop_bluestone2.png" },
                { img1: "../img/khongday_hafele2.png" }
            ]
        };

        obj_product.infor_products.push({ img: "../img/xehoi_electrolux.png", tensp: "Máy hút bụi cầm tay Electrolux ZB6214IGM", loaisp: "cho xe hơi", hang: "Electrolux", gia_chuagiam: "2.190.000đ", phantramgiam: "-15%", gia_dagiam: "1.861.000đ", sosao: "", soluot_danhgia: "", khoangchuabui: "Hộp chứa - 0.5 lít", congsuat: "54 W", dauhutbui: "Đầu hút chổi", tienich: "Bánh xe Soft Steer", noisanxuat: "Trung Quốc" });
        obj_product.infor_products.push({ img: "../img/danghop_samsung.png", tensp: "Máy hút bụi Samsung VC18M21M0VN/SV-N", loaisp: "dạng hộp", hang: "Samsung", gia_chuagiam: "2.290.000đ", phantramgiam: "-5%", gia_dagiam: "2.175.000đ", sosao: "", soluot_danhgia: "", khoangchuabui: "Hộp chứa - 1.5 lít", congsuat: "1800W", dauhutbui: "Đầu hút khe, Đầu hút sàn", tienich: "Dây điện tự thu gọn", noisanxuat: "Việt Nam" });
        obj_product.infor_products.push({ img: "../img/congnghiep_panasonic.png", tensp: "Máy hút bụi công nghiệp Panasonic MC-YL637SN49", loaisp: "công nghiệp", hang: "Panasonic", gia_chuagiam: "", phantramgiam: "", gia_dagiam: "5.020.000đ", sosao: "", soluot_danhgia: "", khoangchuabui: "21 lít", congsuat: "2300W", dauhutbui: "", tienich: "Có chức năng thổi bụi, Dây điện tự thu gọn", noisanxuat: "Malaysia" });
        obj_product.infor_products.push({ img: "../img/hoinuoc_hakawa.png", tensp: "Máy vệ sinh hơi nước đa chức năng HAKAWA HK-N2", loaisp: "hơi nước", hang: "Hakawa", gia_chuagiam: "3.069.000đ", phantramgiam: "-12%", gia_dagiam: "2.685.000đ", sosao: "", soluot_danhgia: "", khoangchuabui: "0.23 lít", congsuat: "1600W", dauhutbui: "Đầu cọ ráp, Đầu hút chổi, Đầu lau sàn, Đầu là quần áo, rèm, Đầu vệ sinh kính", tienich: "Làm sạch & diệt khuẩn bằng hơi nước nhiệt độ cao", noisanxuat: "Trung Quốc" });
        obj_product.infor_products.push({ img: "../img/danghop_philips.png", tensp: "Máy hút bụi Philips FC9350 1800 W", loaisp: "dạng hộp", hang: "Philips", gia_chuagiam: "2.999.000đ", phantramgiam: "-11%", gia_dagiam: "2.649.000đ", sosao: "", soluot_danhgia: "", khoangchuabui: "Hộp chứa - 1.5 lít", congsuat: "1800W", dauhutbui: "Đầu hút khe, Đầu hút sàn", tienich: "Dây điện tự thu gọn, Điều chỉnh sức hút bụi", noisanxuat: "Trung Quốc" });
        obj_product.infor_products.push({ img: "../img/danghop_bluestone.png", tensp: "Máy hút bụi Bluestone VCB-8037 1600W", loaisp: "dạng hộp", hang: "Bluestone", gia_chuagiam: "1.999.000đ", phantramgiam: "-6%", gia_dagiam: "1.860.000đ", sosao: "", soluot_danhgia: "", khoangchuabui: "Hộp chứa - 1.5 lít", congsuat: "1600W", dauhutbui: "Đầu hút khe, Đầu hút bàn chải, Đầu hút thảm, Đầu hút sàn", tienich: "Dây điện tự thu gọn", noisanxuat: "Trung Quốc" });
        obj_product.infor_products.push({
            img: "../img/khongday_hafele.png",
            tensp: "Máy hút bụi cầm tay Hafele HSV-21G",
            loaisp: "cho xe hơi",
            hang: "Hafele",
            gia_chuagiam: "5.360.000",
            phantramgiam: "-18%",
            gia_dagiam: "4.392.000đ",
            sosao: "",
            soluot_danhgia: "",
            khoangchuabui: "Hộp chứa - 0.6 lít",
            congsuat: "100W",
            dauhutbui: "Đầu hút khe, Đầu hút khe có bàn chải, Đầu hút sofa, Đầu hút thảm ",
            tienich: "",
            noisanxuat: ""
        });
        var convert_from_obj_to_string = JSON.stringify(obj_product);
        localStorage.setItem("productsJSON", convert_from_obj_to_string);
    } else {
        var obj_product = JSON.parse(string_of_product);
        // obj_product.infor_products.push({ img: "../img/demgiuong_midea.png", tensp: "Máy hút bụi đệm giường diệt khuẩn UV Midea MVC-BC5UV", loaisp: "đệm giường", hang: "Midea", gia_chuagiam: "2.770.000đ", phantramgiam: "-6%", gia_dagiam: "2.582.000đ", sosao: "", soluot_danhgia: "", khoangchuabui: "Hộp chứa - 0.3 lít", congsuat: "110 W", dauhutbui: "", tienich: "Đèn UV diệt khuẩn", noisanxuat: "Trung Quốc" });
        // obj_product.another_imgs_product.push({ img1: "../img/demgiuong_midea2.png" });
        // var convert_from_obj_to_string = JSON.stringify(obj_product);
        // localStorage.setItem("productsJSON", convert_from_obj_to_string);
    }
    var where_to_insert = document.getElementsByClassName("products")[0];
    for (var i = 0; i < obj_product.infor_products.length; i++) {
        where_to_insert.insertAdjacentHTML('beforeend', return_html(i));
    }
    ngoisao();
    $(".product").click(function() {
        var index_product = $(this).index();
        //console.log(index_product);
        var obj_info_product_clicked = obj_product.infor_products[index_product];
        var string_info_product_clicked = JSON.stringify(obj_info_product_clicked);

        var obj_img_product_clicked = obj_product.another_imgs_product[index_product];
        var string_img_product_clicked = JSON.stringify(obj_img_product_clicked);
        //console.log(typeof string_product_clicked);
        localStorage.setItem("info_product_clicked", string_info_product_clicked);
        localStorage.setItem("img_product_clicked", string_img_product_clicked);
    })
    $(".button_dropdown").click(function() {
        var die = document.getElementById("die");
        if (die !== null) {
            $("#die").remove();
        }
        var name_id = this.id;
        //console.log(removeAccents(obj_product.infor_products[0].hang).indexOf(name_id) > -1);
        var pd, tsp, i;
        pd = $(".product");
        tsp = $(".tensp");
        for (i = 0; i < pd.length; i++) {
            if (removeAccents(tsp[i].innerHTML).indexOf(name_id) > -1 || xacdinh_gia(obj_product.infor_products[i].gia_dagiam) == name_id || removeAccents(obj_product.infor_products[i].loaisp).indexOf(name_id) > -1 || removeAccents(obj_product.infor_products[i].khoangchuabui).indexOf(name_id) > -1 || xacdinh_congsuat(obj_product.infor_products[i].congsuat) == name_id || removeAccents(obj_product.infor_products[i].dauhutbui).indexOf(name_id) > -1 || removeAccents(obj_product.infor_products[i].dauhutbui).indexOf(removeAccents($("#" + name_id).text())) > -1 || removeAccents(obj_product.infor_products[i].noisanxuat) == name_id) {
                //console.log("aaa");
                //pd.attr("class", "border border-2 rounded-3 d-none product");
                pd[i].className = "border border-2 rounded-3 d-inline-block product";
            } else {
                pd[i].className = "border border-2 rounded-3 d-none product";
            }
        }
    });
    $(".tienich").click(function() {
        var die = document.getElementById("die");
        if (die !== null) {
            $("#die").remove();
        }
        var tien_ich = $(".tienich");
        var index_tien_ich = $(this).index();
        var text_tien_ich = tien_ich[index_tien_ich].innerHTML.replace("&amp;", "&");
        var pd = $(".product");
        for (i = 0; i < pd.length; i++) {
            if (obj_product.infor_products[i].tienich.indexOf(text_tien_ich) > -1) {
                pd[i].className = "border border-2 rounded-3 d-inline-block product";
            } else {
                pd[i].className = "border border-2 rounded-3 d-none product";
            }
        }
    });
    $(".hang").click(function() {
        var die = document.getElementById("die");
        if (die !== null) {
            $("#die").remove();
        }
        var name_id = this.id;
        var pd, i;
        pd = $(".product");
        for (i = 0; i < pd.length; i++) {
            if (removeAccents(obj_product.infor_products[i].hang) == name_id) {
                //console.log("aaa");
                //pd.attr("class", "border border-2 rounded-3 d-none product");
                pd[i].className = "border border-2 rounded-3 d-inline-block product";
            } else {
                pd[i].className = "border border-2 rounded-3 d-none product";
            }
        }
    });
    $("#input_timkiem").keydown(function(event) {
        var x = event.which || event.keyCode;
        if (x == 13) {
            event.preventDefault();
            var value_input_timkiem = $("#input_timkiem").val();
            if (value_input_timkiem.trim() != "") {
                var die = document.getElementById("die");
                if (die !== null) {
                    $("#die").remove();
                }
                var tontaisanpham = false;
                var pd, tsp, i;
                pd = $(".product");
                tsp = $(".tensp");
                for (i = 0; i < pd.length; i++) {
                    if (removeAccents(tsp[i].innerHTML).indexOf(removeAccents(value_input_timkiem)) > -1) {
                        //console.log("aaa");
                        tontaisanpham = true;
                        pd[i].className = "border border-2 rounded-3 d-inline-block product";
                    } else {
                        pd[i].className = "border border-2 rounded-3 d-none product";
                    }
                }
                if (tontaisanpham == false) {
                    //alert("Rất tiếc khi không tìm thấy kết quả nào phù hợp với từ khóa: '" + value_input_timkiem + "'");
                    where_to_insert.insertAdjacentHTML('beforeend', '<div id="die" style="margin-top:30px"><p style="margin-left:25px">Xin lỗi vì chúng tôi không tìm thấy kết quả phù hợp với từ khóa ' + value_input_timkiem + '</p><h3 style="margin-left:25px">Để tìm được kết quả chính xác hơn, bạn vui lòng:</h3><ul><li>Kiểm tra lỗi chính tả của từ khóa đã nhập</li><li>Thử lại bằng từ khóa khác</li><li>Thử lại bằng những từ khóa tổng quát hơn</li><li>Thử lại bằng những từ khóa ngắn gọn hơn</li></ul></div>');
                    var div_die = document.getElementById("die");
                    div_die.scrollIntoView();
                }
            }
        }
    });
    $("#button_timkiem").click(function() {
        var value_input_timkiem = $("#input_timkiem").val();
        if (value_input_timkiem.trim() != "") {
            var die = document.getElementById("die");
            if (die !== null) {
                $("#die").remove();
            }
            var tontaisanpham = false;
            var pd, tsp, i;
            pd = $(".product");
            tsp = $(".tensp");
            for (i = 0; i < pd.length; i++) {
                if (removeAccents(tsp[i].innerHTML).indexOf(removeAccents(value_input_timkiem)) > -1) {
                    //console.log("aaa");
                    tontaisanpham = true;
                    pd[i].className = "border border-2 rounded-3 d-inline-block product";
                } else {
                    pd[i].className = "border border-2 rounded-3 d-none product";
                }
            }
            if (tontaisanpham == false) {
                //alert("Rất tiếc khi không tìm thấy kết quả nào phù hợp với từ khóa: '" + value_input_timkiem + "'");
                where_to_insert.insertAdjacentHTML('beforeend', '<div id="die" style="margin-top:30px"><p style="margin-left:25px">Xin lỗi vì chúng tôi không tìm thấy kết quả phù hợp với từ khóa ' + value_input_timkiem + '</p><h3 style="margin-left:25px">Để tìm được kết quả chính xác hơn, bạn vui lòng:</h3><ul><li>Kiểm tra lỗi chính tả của từ khóa đã nhập</li><li>Thử lại bằng từ khóa khác</li><li>Thử lại bằng những từ khóa tổng quát hơn</li><li>Thử lại bằng những từ khóa ngắn gọn hơn</li></ul></div>');
                var div_die = document.getElementById("die");
                div_die.scrollIntoView();
            }
        }
    });
    //console.log(typeof Number(obj_product.infor_products[3].gia_dagiam.replace("đ", "").replace(/\./g, "")));
    $(".sapxepgia").click(function() {
        var sorted = false;
        var id_sapxepgia = this.id;
        //console.log(id_sapxepgia);
        var pd, i, j;
        pd = $(".product");
        $(".products").empty();
        for (i = 0; i < pd.length - 1; i++) {
            for (j = 0; j < pd.length - 1 - i; j++) {
                if (id_sapxepgia == "giathapdencao") {
                    if (Number(obj_product.infor_products[j].gia_dagiam.replace("đ", "").replace(/\./g, "")) > Number(obj_product.infor_products[j + 1].gia_dagiam.replace("đ", "").replace(/\./g, ""))) {
                        var temp = obj_product.infor_products[j];
                        obj_product.infor_products[j] = obj_product.infor_products[j + 1];
                        obj_product.infor_products[j + 1] = temp;

                        var temp2 = obj_product.another_imgs_product[j];
                        obj_product.another_imgs_product[j] = obj_product.another_imgs_product[j + 1];
                        obj_product.another_imgs_product[j + 1] = temp2;
                        sorted = true;
                    }
                } else {
                    if (Number(obj_product.infor_products[j].gia_dagiam.replace("đ", "").replace(/\./g, "")) < Number(obj_product.infor_products[j + 1].gia_dagiam.replace("đ", "").replace(/\./g, ""))) {
                        var temp = obj_product.infor_products[j];
                        obj_product.infor_products[j] = obj_product.infor_products[j + 1];
                        obj_product.infor_products[j + 1] = temp;

                        var temp2 = obj_product.another_imgs_product[j];
                        obj_product.another_imgs_product[j] = obj_product.another_imgs_product[j + 1];
                        obj_product.another_imgs_product[j + 1] = temp2;
                        sorted = true;
                    }
                }
            }
            if (sorted == false) {
                break;
            }
        }
        //console.log(obj_product.another_imgs_product[1]);
        for (var i = 0; i < obj_product.infor_products.length; i++) {
            where_to_insert.insertAdjacentHTML('beforeend', return_html(i));
        }
        ngoisao();
        $(".product").click(function() {
            var index_product = $(this).index();
            //console.log(typeof obj_product.infor_products[0]);
            var obj_info_product_clicked = obj_product.infor_products[index_product];
            var string_info_product_clicked = JSON.stringify(obj_info_product_clicked);

            var obj_img_product_clicked = obj_product.another_imgs_product[index_product];
            var string_img_product_clicked = JSON.stringify(obj_img_product_clicked);
            //console.log(typeof string_product_clicked);
            localStorage.setItem("info_product_clicked", string_info_product_clicked);
            localStorage.setItem("img_product_clicked", string_img_product_clicked);
        })
    });
});