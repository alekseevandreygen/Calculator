var resolvePixelRatio = function(element, func) {
    function canvas_obj(element) {
        let returnable = {
            canvas: element,
            ctx: element.getContext("2d"),
            dpi: window.devicePixelRatio
        };
        returnable.get = {
            style: {
                height() {
                    return getComputedStyle(element).getPropertyValue("height").slice(0, -2);
                },
                width() {
                    return getComputedStyle(element).getPropertyValue("width").slice(0, -2);
                }
            },
            attr: {
                height() {
                    return returnable.element.getAttribute("height");
                },
                width() {
                    return returnable.element.getAttribute("height");
                }
            }
        };
        returnable.set = {
            style: {
                height(ht) {
                    element.style.height = ht + "px";
                },
                width(wth) {
                    element.style.width = wth + "px";
                }
            },
            attr: {
                height(ht) {
                    element.setAttribute("height", ht);
                },
                width(wth) {
                    element.setAttribute("width", wth);
                }
            }
        };
        return returnable;
    }
    let canvas = canvas_obj(document.getElementById(element));
    let { ctx, dpi, set, get } = canvas;

    requestAnimationFrame(animate);

    function dpi_adjust() {
        set.attr.height(get.style.height() * dpi);
        set.attr.width(get.style.width() * dpi);
    }
    function animate() {
        dpi_adjust();

        func(ctx);

        requestAnimationFrame(animate);
    }
}

var funcCircle = function(ctx) {
    //Draw the circle
    ctx.fillStyle = '#D8EEF3';
    ctx.beginPath();
    ctx.arc(100, 50, 15, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#B2DDE6';
    ctx.stroke();
}

var funcLine = function(ctx) {
    //Draw the line
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(800, 50);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#B2DDE6';
    ctx.stroke();
};

var dragAndDrop = function() {
    var element = document.getElementById('sliderCircle');

    //click section
    element.onmousedown = function(e) {
        var startPoint = window.getComputedStyle(element).getPropertyValue('left'),
            shiftX = e.pageX - Number.parseInt(startPoint),
            moveAt = function (e) {
                if (e.pageX < 146) {
                    element.style.left = '5' + 'px';
                } else if (e.pageX > 470) {
                    element.style.left = '342' + 'px';
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

}

var counting = function() {
    var area = document.getElementById('sliderCircle'),
        elArea = document.getElementById('total__area'),
        rtArea = Number.parseInt(window.getComputedStyle(area).getPropertyValue('left')),
        select = document.getElementById('selects'),
        elSelectAc = select && select.options[select.selectedIndex].value,
        elRooms = document.getElementById('total__rooms'),

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
        s22 = document.getElementById("s22") && document.getElementById("s12").checked,
        s23 = document.getElementById("s23") && document.getElementById("s23").checked,
        s24 = document.getElementById("s24") && document.getElementById("s24").checked,
        s15 = document.getElementById("s15") && document.getElementById("s15").checked,
        s16 = document.getElementById("s16") && document.getElementById("s16").checked,
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


        elTotalCount = document.getElementById('total__count'),
        rtTotalCount = function() {
            result = 0;
            result = rtArea * 1000 + elSelectAc * 4000;

            if (s1) {
                result = result + 250;
            }
            if (s2) {
                result = result + 60;
            }
            if (s3) {
                result = result + 300;
            }
            if (s4) {
                result = result + 150;
            }
            if (s5) {
                result = result + 450;
            }
            if (s6) {
                result = result + 200;
            }
            if (s7) {
                result = result + 200;
            }
            if (s8) {
                result = result + 900;
            }
            if (s9) {
                result = result + 900;
            }
            if (s10) {
                result = result + 300;
            }
            if (s11) {
                result = result + 800;
            }
            if (s12) {
                result = result + 300;
            }
            if (s13) {
                result = result + 1200;
            }
            if (s14) {
                result = result + 650;
            }
            if (s15) {
                result = result + 600;
            }
            if (s16) {
                result = result + 4000;
            }
            if (s17) {
                result = result + 800;
            }
            if (s18) {
                result = result + 400;
            }
            if (s19) {
                result = result + 800;
            }
            if (s20) {
                result = result + 2000;
            }
            if (s21) {
                result = result + 600;
            }
            if (s22) {
                result = result + 300;
            }
            if (s23) {
                result = result + 300;
            }
            if (s24) {
                result = result + 250;
            }
            if (s25) {
                result = result + 1300;
            }
            if (s26) {
                result = result + 90;
            }
            if (s27) {
                result = result + 90;
            }
            if (s28) {
                result = result + 350;
            }
            if (s29) {
                result = result + 90;
            }
            if (s30) {
                result = result + 150;
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

resolvePixelRatio('sliderCircle', funcCircle);
resolvePixelRatio('sliderLine', funcLine);

dragAndDrop();









