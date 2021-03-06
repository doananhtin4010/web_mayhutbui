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
            .replace(/??/g, 'd').replace(/??/g, 'D')
            .replace(/\s/g, '')
            .toLowerCase();
    }

    function xacdinh_gia(giasanpham) {
        var giasp = Number(giasanpham.replace("??", "").replace(/\./g, ""));
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
            infor_products: [{ img: "../img/demgiuong_deerma.png", tensp: "M??y h??t b???i ?????m gi?????ng di???t khu???n UV Deerma CM1300", loaisp: "?????m gi?????ng", hang: "Deerma", gia_chuagiam: "1.420.000??", phantramgiam: "-20%", gia_dagiam: "1.136.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 0.4 l??t", congsuat: "350 W", dauhutbui: "?????u h??t khe v?? ch???i, ?????u h??t ?????m, ?????u h??t b???i l???n", tienich: "????n UV di???t khu???n", noisanxuat: "Trung Qu???c" }],
            another_imgs_product: [
                { img1: "../img/demgiuong_deerma2.png" },
                { img1: "../img/xehoi_electrolux2.png" },
                { img1: "../img/danghop_samsung2.png" },
                { img1: "../img/congnghiep_panasonic2.png" },
                { img1: "../img/hoinuoc_hakawa2.png" },
                { img1: "../img/danghop_philips2.png" },
                { img1: "../img/danghop_bluestone2.png" },
                { img1: "../img/khongday_xiaomi2.png" },
                { img1: "../img/khongday_bosch2.png" },
                { img1: "../img/camtay_midea2.png" },
                { img1: "../img/mhb_toshiba2.png" },
                { img1: "../img/danghop_panasonic2.png" },
                { img1: "../img/danghop_bosch2.png" },
                { img1: "../img/choxehoi_electrolux2.png" },
                { img1: "../img/danghop_bluestone22.png" },
                { img1: "../img/danghop_samsung22.png" },
                { img1: "../img/danghop_electrolux2.png" },
                { img1: "../img/danghop_electrolux22.png" },
                { img1: "../img/demgiuong_midea2.png" },
                { img1: "../img/khongday_hafele2.png" }
            ]
        };

        obj_product.infor_products.push({ img: "../img/xehoi_electrolux.png", tensp: "M??y h??t b???i c???m tay Electrolux ZB6214IGM", loaisp: "cho xe h??i", hang: "Electrolux", gia_chuagiam: "2.190.000??", phantramgiam: "-15%", gia_dagiam: "1.861.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 0.5 l??t", congsuat: "54 W", dauhutbui: "?????u h??t ch???i", tienich: "B??nh xe Soft Steer", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/danghop_samsung.png", tensp: "M??y h??t b???i Samsung VC18M21M0VN/SV-N", loaisp: "d???ng h???p", hang: "Samsung", gia_chuagiam: "2.290.000??", phantramgiam: "-5%", gia_dagiam: "2.175.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 1.5 l??t", congsuat: "1800W", dauhutbui: "?????u h??t khe, ?????u h??t s??n", tienich: "D??y ??i???n t??? thu g???n", noisanxuat: "Vi???t Nam" });
        obj_product.infor_products.push({ img: "../img/congnghiep_panasonic.png", tensp: "M??y h??t b???i c??ng nghi???p Panasonic MC-YL637SN49", loaisp: "c??ng nghi???p", hang: "Panasonic", gia_chuagiam: "", phantramgiam: "", gia_dagiam: "5.020.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "21 l??t", congsuat: "2300W", dauhutbui: "", tienich: "C?? ch???c n??ng th???i b???i, D??y ??i???n t??? thu g???n", noisanxuat: "Malaysia" });
        obj_product.infor_products.push({ img: "../img/hoinuoc_hakawa.png", tensp: "M??y v??? sinh h??i n?????c ??a ch???c n??ng HAKAWA HK-N2", loaisp: "h??i n?????c", hang: "Hakawa", gia_chuagiam: "3.069.000??", phantramgiam: "-12%", gia_dagiam: "2.685.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "0.23 l??t", congsuat: "1600W", dauhutbui: "?????u c??? r??p, ?????u h??t ch???i, ?????u lau s??n, ?????u l?? qu???n ??o, r??m, ?????u v??? sinh k??nh", tienich: "L??m s???ch & di???t khu???n b???ng h??i n?????c nhi???t ????? cao", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/danghop_philips.png", tensp: "M??y h??t b???i Philips FC9350 1800 W", loaisp: "d???ng h???p", hang: "Philips", gia_chuagiam: "2.999.000??", phantramgiam: "-11%", gia_dagiam: "2.649.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 1.5 l??t", congsuat: "1800W", dauhutbui: "?????u h??t khe, ?????u h??t s??n", tienich: "D??y ??i???n t??? thu g???n, ??i???u ch???nh s???c h??t b???i", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/danghop_bluestone.png", tensp: "M??y h??t b???i Bluestone VCB-8037 1600W", loaisp: "d???ng h???p", hang: "Bluestone", gia_chuagiam: "1.999.000??", phantramgiam: "-6%", gia_dagiam: "1.860.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 1.5 l??t", congsuat: "1600W", dauhutbui: "?????u h??t khe, ?????u h??t b??n ch???i, ?????u h??t th???m, ?????u h??t s??n", tienich: "D??y ??i???n t??? thu g???n", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/khongday_xiaomi.png", tensp: "M??y h??t b???i c???m tay Xiaomi 1C", loaisp: "c???m tay", hang: "Xiaomi", gia_chuagiam: "", phantramgiam: "", gia_dagiam: "5.990.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 0.5 l??t", congsuat: "400 W", dauhutbui: "?????u h??t khe, ?????u h??t b??n ch???i, ?????u h??t th???m, ?????u h??t s??n", tienich: "Ch??? ????? ti???t ki???m pin", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/khongday_bosch.png", tensp: "M??y h??t b???i c???m tay kh??ng d??y Bosch HMH.BHN20110", loaisp: "cho xe h??i", hang: "Bosch", gia_chuagiam: "3.640.000??", phantramgiam: "-9%", gia_dagiam: "3.298.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 0.3 l??t", congsuat: "125W", dauhutbui: "?????u h??t khe", tienich: "????n ch??? b??o pin", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/camtay_midea.png", tensp: "M??y h??t b???i c???m tay Midea MVC-SC861B 600W", loaisp: "c???m tay", hang: "Midea", gia_chuagiam: "990.000??", phantramgiam: "-7%", gia_dagiam: "916.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 0.8 l??t", congsuat: "600W", dauhutbui: "?????u h??t khe, ?????u h??t s??n", tienich: "", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/mhb_toshiba.png", tensp: "M??y h??t b???i Toshiba VC-GC33CPV 950W", loaisp: "gia d???ng", hang: "Toshiba", gia_chuagiam: "", phantramgiam: "", gia_dagiam: "3.800.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 0.25 l??t", congsuat: "950W", dauhutbui: "?????u h??t ch???i, ?????u h??t khe, ?????u h??t s??n, ?????u h??t th???m", tienich: "D??y ??i???n t??? thu g???n, H??? th???ng l???c xo??y k??p Toshiba TORNEO, ??i???u khi???n tr??n tay c???m", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/danghop_panasonic.png", tensp: "M??y H??t b???i Panasonic MC-CG371AN46 1600 W", loaisp: "d???ng h???p", hang: "Panasonic", gia_chuagiam: "1.960.000??", phantramgiam: "-10%", gia_dagiam: "1.760.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "T??i ch???a - 1.4 l??t", congsuat: "1600W", dauhutbui: "?????u h??t khe, ?????u h??t th???m", tienich: "C?? ????n b??o ?????y b???i, D??y ??i???n t??? thu g???n", noisanxuat: "Malaysia" });
        obj_product.infor_products.push({ img: "../img/danghop_bosch.png", tensp: "M??y h??t b???i Bosch HMH.BGL72294 2200W", loaisp: "d???ng h???p", hang: "Bosch", gia_chuagiam: "12.480.000??", phantramgiam: "-9%", gia_dagiam: "11.310.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "T??i gi???y d??ng 1 l???n - 5 l??t", congsuat: "2200W", dauhutbui: "?????u h??t khe, ?????u h??t r??m, ?????u h??t s??n, ?????u h??t th???m", tienich: "", noisanxuat: "?????c" });
        obj_product.infor_products.push({ img: "../img/choxehoi_electrolux.png", tensp: "M??y h??t b???i c???m tay Electrolux PF91-5BTF 68W", loaisp: "cho xe h??i", hang: "Electrolux", gia_chuagiam: "13.990.000??", phantramgiam: "-11%", gia_dagiam: "12.416.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 0.7 l??t", congsuat: "68W", dauhutbui: "?????u h??t 3 trong 1, ?????u h??t b??n ch???i, ?????u h??t s??n, ?????u h??t UV, ?????u h??t u???n g??c", tienich: "T??? ?????ng, ??i???u ch???nh s???c h??t b???i, ????n ch??? b??o pin, ????n led chi???u s??ng, ????n UV di???t khu???n", noisanxuat: "Hungary" });
        obj_product.infor_products.push({ img: "../img/danghop_bluestone21.png", tensp: "M??y h??t b???i Bluestone VCB-8067 1800W", loaisp: "d???ng h???p", hang: "Bluestone", gia_chuagiam: "3.000.000??", phantramgiam: "-8%", gia_dagiam: "2.747.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 2.2 l??t", congsuat: "1800W", dauhutbui: "B??n ch???i qu??t b???i m???n, ?????u h??t khe, ?????u h??t th???m, ?????u h??t s??n", tienich: "D??y ??i???n t??? thu g???n", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/danghop_samsung21.png", tensp: "M??y h??t b???i Samsung VCC8835V37/XSV", loaisp: "d???ng h???p", hang: "Samsung", gia_chuagiam: "3.290.000??", phantramgiam: "-8%", gia_dagiam: "3.003.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 2 l??t", congsuat: "2200W", dauhutbui: "?????u h??t 3 trong 1, ?????u h??t s??n", tienich: "Ch???ng l??ng t??c r???i, D??y ??i???n t??? thu g???n", noisanxuat: "Vi???t Nam" });
        obj_product.infor_products.push({ img: "../img/danghop_electrolux.png", tensp: "M??y h??t b???i Electrolux Z1231 1600W", loaisp: "d???ng h???p", hang: "Electrolux", gia_chuagiam: "1.890.000??", phantramgiam: "-5%", gia_dagiam: "1.780.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 1 l??t", congsuat: "1600W", dauhutbui: "?????u h??t khe, ?????u h??t th???m, ?????u h??t s??n", tienich: "??i???u ch???nh s???c h??t b???i, D??y ??i???n t??? thu g???n", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/danghop_electrolux21.png", tensp: "M??y h??t b???i Electrolux EC31-2BB 1800W", loaisp: "d???ng h???p", hang: "Electrolux", gia_chuagiam: "2.690.000??", phantramgiam: "-11%", gia_dagiam: "2.390.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 1.8 l??t", congsuat: "1800W", dauhutbui: "?????u h??t r??m, ?????u h??t khe, ?????u h??t th???m", tienich: "??i???u ch???nh s???c h??t b???i, D??y ??i???n t??? thu g???n", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({ img: "../img/demgiuong_midea.png", tensp: "M??y h??t b???i ?????m gi?????ng di???t khu???n UV Midea MVC-BC5UV", loaisp: "?????m gi?????ng", hang: "Midea", gia_chuagiam: "2.770.000??", phantramgiam: "-6%", gia_dagiam: "2.582.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 0.3 l??t", congsuat: "110W", dauhutbui: "", tienich: "????n UV di???t khu???n", noisanxuat: "Trung Qu???c" });
        obj_product.infor_products.push({
            img: "../img/khongday_hafele.png",
            tensp: "M??y h??t b???i c???m tay Hafele HSV-21G",
            loaisp: "cho xe h??i",
            hang: "Hafele",
            gia_chuagiam: "5.360.000",
            phantramgiam: "-18%",
            gia_dagiam: "4.392.000??",
            sosao: "",
            soluot_danhgia: "",
            khoangchuabui: "H???p ch???a - 0.6 l??t",
            congsuat: "100W",
            dauhutbui: "?????u h??t khe, ?????u h??t khe c?? b??n ch???i, ?????u h??t sofa, ?????u h??t th???m ",
            tienich: "",
            noisanxuat: ""
        });
        var convert_from_obj_to_string = JSON.stringify(obj_product);
        localStorage.setItem("productsJSON", convert_from_obj_to_string);
    } else {
        var obj_product = JSON.parse(string_of_product);
        // obj_product.infor_products.push({ img: "../img/demgiuong_midea.png", tensp: "M??y h??t b???i ?????m gi?????ng di???t khu???n UV Midea MVC-BC5UV", loaisp: "?????m gi?????ng", hang: "Midea", gia_chuagiam: "2.770.000??", phantramgiam: "-6%", gia_dagiam: "2.582.000??", sosao: "", soluot_danhgia: "", khoangchuabui: "H???p ch???a - 0.3 l??t", congsuat: "110 W", dauhutbui: "", tienich: "????n UV di???t khu???n", noisanxuat: "Trung Qu???c" });
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
                    //alert("R???t ti???c khi kh??ng t??m th???y k???t qu??? n??o ph?? h???p v???i t??? kh??a: '" + value_input_timkiem + "'");
                    where_to_insert.insertAdjacentHTML('beforeend', '<div id="die" style="margin-top:30px"><p style="margin-left:25px">Xin l???i v?? ch??ng t??i kh??ng t??m th???y k???t qu??? ph?? h???p v???i t??? kh??a ' + value_input_timkiem + '</p><h3 style="margin-left:25px">????? t??m ???????c k???t qu??? ch??nh x??c h??n, b???n vui l??ng:</h3><ul><li>Ki???m tra l???i ch??nh t??? c???a t??? kh??a ???? nh???p</li><li>Th??? l???i b???ng t??? kh??a kh??c</li><li>Th??? l???i b???ng nh???ng t??? kh??a t???ng qu??t h??n</li><li>Th??? l???i b???ng nh???ng t??? kh??a ng???n g???n h??n</li></ul></div>');
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
                //alert("R???t ti???c khi kh??ng t??m th???y k???t qu??? n??o ph?? h???p v???i t??? kh??a: '" + value_input_timkiem + "'");
                where_to_insert.insertAdjacentHTML('beforeend', '<div id="die" style="margin-top:30px"><p style="margin-left:25px">Xin l???i v?? ch??ng t??i kh??ng t??m th???y k???t qu??? ph?? h???p v???i t??? kh??a ' + value_input_timkiem + '</p><h3 style="margin-left:25px">????? t??m ???????c k???t qu??? ch??nh x??c h??n, b???n vui l??ng:</h3><ul><li>Ki???m tra l???i ch??nh t??? c???a t??? kh??a ???? nh???p</li><li>Th??? l???i b???ng t??? kh??a kh??c</li><li>Th??? l???i b???ng nh???ng t??? kh??a t???ng qu??t h??n</li><li>Th??? l???i b???ng nh???ng t??? kh??a ng???n g???n h??n</li></ul></div>');
                var div_die = document.getElementById("die");
                div_die.scrollIntoView();
            }
        }
    });
    //console.log(typeof Number(obj_product.infor_products[3].gia_dagiam.replace("??", "").replace(/\./g, "")));
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
                    if (Number(obj_product.infor_products[j].gia_dagiam.replace("??", "").replace(/\./g, "")) > Number(obj_product.infor_products[j + 1].gia_dagiam.replace("??", "").replace(/\./g, ""))) {
                        var temp = obj_product.infor_products[j];
                        obj_product.infor_products[j] = obj_product.infor_products[j + 1];
                        obj_product.infor_products[j + 1] = temp;

                        var temp2 = obj_product.another_imgs_product[j];
                        obj_product.another_imgs_product[j] = obj_product.another_imgs_product[j + 1];
                        obj_product.another_imgs_product[j + 1] = temp2;
                        sorted = true;
                    }
                } else {
                    if (Number(obj_product.infor_products[j].gia_dagiam.replace("??", "").replace(/\./g, "")) < Number(obj_product.infor_products[j + 1].gia_dagiam.replace("??", "").replace(/\./g, ""))) {
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