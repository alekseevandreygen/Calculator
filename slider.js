var dragAndDrop = function(e) {
    var element = document.getElementById('sliderCircle');

    //click section
    element.onmousedown = function(e) {
        var startPoint = window.getComputedStyle(element).getPropertyValue('left'),
            shiftX = e.pageX - Number.parseInt(startPoint),
            moveAt = function (e) {
                if (e.pageX < 50) {
                    element.style.left = '50' + 'px';
                } else if (e.pageX > 330) {
                    element.style.left = '330' + 'px';
                } else {
                    element.style.left = e.pageX - shiftX + 'px';
                }
            };
        moveAt(e);

        document.onmousemove = function(e) {
            moveAt(e);
            counting();
        };

        element.onmouseup = function() {
            document.onmousemove = null;
            element.onmouseup = null;
        };
    };

    element.ondragstart = function() {
        return false;
    };

    element.addEventListener('touchstart', function(e) {

        var startPoint = window.getComputedStyle(element).getPropertyValue('left'),
            shiftX = e.touches[0].pageX - Number.parseInt(startPoint),
            moveAt = function (e) {
                e.preventDefault();
                if (e.touches[0].pageX < 50) {
                    element.style.left = '50' + 'px';
                } else if (e.touches[0].pageX > 330) {
                    element.style.left = '330' + 'px';
                } else {
                    let accessubleDifX = e.touches[0].pageX - shiftX;
                    
                    if (accessubleDifX > 50 || accessubleDifX < 330) {
                        element.style.left = `${accessubleDifX}px`;
                    }
                }
            };
        moveAt(e);

        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
            moveAt(e);
            counting();
        });

        document.addEventListener('touchend', function () {
            document.removeEventListener('touchmove', null);
            element.removeEventListener('touchstart', null);
        });
    })

}

var counting = function() {
    var area = document.getElementById('sliderCircle'),
        elArea = document.getElementById('total__area'),
        rtArea = Number.parseInt(window.getComputedStyle(area).getPropertyValue('left')),
        select = document.getElementById('selects'),
        elSelectAc = select && select.options[select.selectedIndex].value,
        elRooms = document.getElementById('total__rooms'),

        e1 = document.getElementById("e1") && document.getElementById("e1").checked,
        e2 = document.getElementById("e2") && document.getElementById("e2").checked,
        e3 = document.getElementById("e3") && document.getElementById("e3").checked,
        e4 = document.getElementById("e4") && document.getElementById("e4").checked,
        e5 = document.getElementById("e5") && document.getElementById("e5").checked,
        e6 = document.getElementById("e6") && document.getElementById("e6").checked,
        e7 = document.getElementById("e7") && document.getElementById("e7").checked,
        e8 = document.getElementById("e8") && document.getElementById("e8").checked,
        e9 = document.getElementById("e9") && document.getElementById("e9").checked,
        e10 = document.getElementById("e10") && document.getElementById("e10").checked,

        e11 = document.getElementById("e11") && document.getElementById("e11").checked,
        e12 = document.getElementById("e12") && document.getElementById("e12").checked,
        e13 = document.getElementById("e13") && document.getElementById("e13").checked,
        e14 = document.getElementById("e14") && document.getElementById("e14").checked,
        e15 = document.getElementById("e15") && document.getElementById("e15").checked,
        e16 = document.getElementById("e16") && document.getElementById("e16").checked,
        e17 = document.getElementById("e17") && document.getElementById("e17").checked,
        e18 = document.getElementById("e18") && document.getElementById("e18").checked,
        e19 = document.getElementById("e19") && document.getElementById("e19").checked,
        e20 = document.getElementById("e20") && document.getElementById("e20").checked,

        e21 = document.getElementById("e21") && document.getElementById("e21").checked,
        e22 = document.getElementById("e22") && document.getElementById("e22").checked,
        e23 = document.getElementById("e23") && document.getElementById("e23").checked,
        e24 = document.getElementById("e24") && document.getElementById("e24").checked,
        e25 = document.getElementById("e25") && document.getElementById("e25").checked,
        e26 = document.getElementById("e26") && document.getElementById("e26").checked,
        e27 = document.getElementById("e27") && document.getElementById("e27").checked,
        e28 = document.getElementById("e28") && document.getElementById("e28").checked,
        e29 = document.getElementById("e29") && document.getElementById("e29").checked,
        e30 = document.getElementById("e30") && document.getElementById("e30").checked,

        s1 = document.getElementById("s1") && document.getElementById("s1").checked,
        s2 = document.getElementById("s2") && document.getElementById("s2").checked,
        s3 = document.getElementById("s3") && document.getElementById("s3").checked,
        s4 = document.getElementById("s4") && document.getElementById("s4").checked,
        s5 = document.getElementById("s5") && document.getElementById("s5").checked,
        s6 = document.getElementById("s6") && document.getElementById("s6").checked,
        s7 = document.getElementById("s7") && document.getElementById("s7").checked,
        s8 = document.getElementById("s8") && document.getElementById("s8").checked,
        s9 = document.getElementById("s9") && document.getElementById("s9").checked,
        s10 = document.getElementById("s10") && document.getElementById("s10").checked,

        s11 = document.getElementById("s11") && document.getElementById("s11").checked,
        s12 = document.getElementById("s12") && document.getElementById("s12").checked,
        s13 = document.getElementById("s13") && document.getElementById("s13").checked,
        s14 = document.getElementById("s14") && document.getElementById("s14").checked,
        s15 = document.getElementById("s15") && document.getElementById("s15").checked,
        s16 = document.getElementById("s16") && document.getElementById("s16").checked,
        s17 = document.getElementById("s17") && document.getElementById("s17").checked,
        s18 = document.getElementById("s18") && document.getElementById("s18").checked,
        s19 = document.getElementById("s19") && document.getElementById("s19").checked,
        s20 = document.getElementById("s20") && document.getElementById("s20").checked,

        s21 = document.getElementById("s21") && document.getElementById("s21").checked,
        s22 = document.getElementById("s22") && document.getElementById("s22").checked,
        s23 = document.getElementById("s23") && document.getElementById("s23").checked,
        s24 = document.getElementById("s24") && document.getElementById("s24").checked,
        s25 = document.getElementById("s25") && document.getElementById("s25").checked,
        s26 = document.getElementById("s26") && document.getElementById("s26").checked,
        s27 = document.getElementById("s27") && document.getElementById("s27").checked,
        s28 = document.getElementById("s28") && document.getElementById("s28").checked,
        s29 = document.getElementById("s29") && document.getElementById("s29").checked,
        s30 = document.getElementById("s30") && document.getElementById("s30").checked,

        s31 = document.getElementById("s31") && document.getElementById("s31").checked,
        s32 = document.getElementById("s32") && document.getElementById("s32").checked,
        s33 = document.getElementById("s33") && document.getElementById("s33").checked,
        s34 = document.getElementById("s34") && document.getElementById("s34").checked,
        s35 = document.getElementById("s35") && document.getElementById("s35").checked,
        s36 = document.getElementById("s36") && document.getElementById("s36").checked,
        s37 = document.getElementById("s37") && document.getElementById("s37").checked,
        s38 = document.getElementById("s38") && document.getElementById("s38").checked,
        s39 = document.getElementById("s39") && document.getElementById("s39").checked,
        s40 = document.getElementById("s40") && document.getElementById("s40").checked,

        s51 = document.getElementById("s51") && document.getElementById("s51").checked,
        s52 = document.getElementById("s52") && document.getElementById("s52").checked,
        s53 = document.getElementById("s53") && document.getElementById("s53").checked,
        s54 = document.getElementById("s54") && document.getElementById("s54").checked,
        s55 = document.getElementById("s55") && document.getElementById("s55").checked,
        s56 = document.getElementById("s56") && document.getElementById("s56").checked,
        s57 = document.getElementById("s57") && document.getElementById("s57").checked,
        s58 = document.getElementById("s58") && document.getElementById("s58").checked,
        s59 = document.getElementById("s59") && document.getElementById("s59").checked,

        elTotalCount = document.getElementById('total__count'),
        rtTotalCount = function() {
            result = 0;
            result = rtArea * 1000 + elSelectAc * 4000;

            if (e1) {
                result = result + 250;
            }
            if (e2) {
                result = result + 60;
            }
            if (e3) {
                result = result + 300;
            }
            if (e4) {
                result = result + 150;
            }
            if (e5) {
                result = result + 450;
            }
            if (e6) {
                result = result + 200;
            }
            if (e7) {
                result = result + 200;
            }
            if (e8) {
                result = result + 900;
            }
            if (e9) {
                result = result + 900;
            }
            if (e10) {
                result = result + 300;
            }
            if (e11) {
                result = result + 800;
            }
            if (e12) {
                result = result + 300;
            }
            if (e13) {
                result = result + 1200;
            }
            if (e14) {
                result = result + 650;
            }
            if (e15) {
                result = result + 600;
            }
            if (e16) {
                result = result + 4000;
            }
            if (e17) {
                result = result + 800;
            }
            if (e18) {
                result = result + 400;
            }
            if (e19) {
                result = result + 800;
            }
            if (e20) {
                result = result + 2000;
            }
            if (e21) {
                result = result + 600;
            }
            if (e22) {
                result = result + 300;
            }
            if (e23) {
                result = result + 300;
            }
            if (e24) {
                result = result + 250;
            }
            if (e25) {
                result = result + 1300;
            }
            if (e26) {
                result = result + 90;
            }
            if (e27) {
                result = result + 90;
            }
            if (e28) {
                result = result + 350;
            }
            if (e29) {
                result = result + 90;
            }
            if (e30) {
                result = result + 150;
            }
            
            if (s1) {
                result = result + 2000;
            }
            if (s2) {
                result = result + 3000;
            }
            if (s3) {
                result = result + 3000;
            }
            if (s4) {
                result = result + 1500;
            }
            if (s5) {
                result = result + 1000;
            }
            if (s6) {
                result = result + 500;
            }
            if (s7) {
                result = result + 500;
            }
            if (s8) {
                result = result + 500;
            }
            if (s9) {
                result = result + 300;
            }
            if (s10) {
                result = result + 500;
            }

            if (s11) {
                result = result + 2500;
            }
            if (s12) {
                result = result + 2500;
            }
            if (s13) {
                result = result + 6000;
            }
            if (s14) {
                result = result + 450;
            }
            if (s15) {
                result = result + 1600;
            }
            if (s16) {
                result = result + 25000;
            }
            if (s17) {
                result = result + 2500;
            }
            if (s18) {
                result = result + 2200;
            }
            if (s19) {
                result = result + 3000;
            }

            if (s20) {
                result = result + 7000;
            }
            if (s21) {
                result = result + 2500;
            }
            if (s22) {
                result = result + 4500;
            }
            if (s23) {
                result = result + 3500;
            }
            if (s24) {
                result = result + 3000;
            }
            if (s25) {
                result = result + 5000;
            }
            if (s26) {
                result = result + 4000;
            }
            if (s27) {
                result = result + 1500;
            }
            if (s28) {
                result = result + 4000;
            }

            if (s29) {
                result = result + 3000;
            }
            if (s30) {
                result = result + 2000;
            }
            if (s31) {
                result = result + 1500;
            }
            if (s32) {
                result = result + 2000;
            }
            if (s33) {
                result = result + 1500;
            }
            if (s34) {
                result = result + 2000;
            }
            if (s35) {
                result = result + 4000;
            }
            if (s36) {
                result = result + 1400;
            }
            if (s37) {
                result = result + 2500;
            }

            if (s38) {
                result = result + 550;
            }
            if (s39) {
                result = result + 800;
            }
            if (s40) {
                result = result + 400;
            }
            if (s41) {
                result = result + 1000;
            }
            if (s42) {
                result = result + 2500;
            }
            if (s43) {
                result = result + 500;
            }
            if (s44) {
                result = result + 3500;
            }
            if (s45) {
                result = result + 600;
            }
            if (s46) {
                result = result + 2000;
            }

            if (s47) {
                result = result + 500;
            }
            if (s48) {
                result = result + 500;
            }
            if (s49) {
                result = result + 500;
            }
            if (s50) {
                result = result + 200;
            }
            if (s51) {
                result = result + 600;
            }
            if (s52) {
                result = result + 500;
            }
            if (s53) {
                result = result + 2000;
            }
            if (s54) {
                result = result + 3000;
            }
            if (s55) {
                result = result + 800;
            }

            if (s56) {
                result = result + 90;
            }
            if (s57) {
                result = result + 150;
            }
            if (s58) {
                result = result + 600;
            }
            if (s59) {
                result = result + 200;
            }

            return result
        };

     
    rtArea = Math.floor(rtArea/2);
    if (elArea) {
        elArea.textContent = rtArea;
    }
    if (elRooms) {
        elRooms.textContent = elSelectAc;
    }
    if (elTotalCount) {
        elTotalCount.textContent = rtTotalCount();
    }
    
}

dragAndDrop();









