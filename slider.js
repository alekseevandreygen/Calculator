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
    ctx.arc(700, 100, 15, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#B2DDE6';
    ctx.stroke();
}

var funcLine = function (ctx) {
    //Draw the line
    ctx.beginPath();
    ctx.moveTo(700, 100);
    ctx.lineTo(1100, 100);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#B2DDE6';
    ctx.stroke();
};

var dragAndDrop = function () {
    var element = document.getElementById('sliderCircle');

    element.onmousedown = function (e) {
        var startPoint = window.getComputedStyle(element).getPropertyValue('left'),
            shiftX = e.pageX - Number.parseInt(startPoint),
            moveAt = function (e) {
                if (e.pageX < 352) {
                    element.style.left = Number.parseInt(startPoint) + 'px';
                } else if (e.pageX > 544) {
                    element.style.left = '192' + 'px';
                } else {
                    element.style.left = e.pageX - shiftX + 'px';
                }
            };
        moveAt(e);

        document.onmousemove = function (e) {
            moveAt(e);
        };

        element.onmouseup = function () {
            document.onmousemove = null;
            element.onmouseup = null;
        };
    };

    element.ondragstart = function () {
        return false;
    };
}

resolvePixelRatio('sliderCircle', funcCircle);
resolvePixelRatio('sliderLine', funcLine);
dragAndDrop();









