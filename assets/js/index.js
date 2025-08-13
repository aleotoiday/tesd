! function(n) {
    function t(n, t, e) {
        let i = new Date(Date.now() + 864e5 * e).toUTCString();
        document.cookie = `${n}=${t}; expires=${i}; path=/`
    }

    function e(n) {
        let t = document.cookie.split("; ").reduce((n, t) => {
            let [e, i] = t.split("=");
            return n[e] = i, n
        }, {});
        return t[n]
    }

    function i(n) {
        let e = $(".ri-sun-line"),
            i = $(".ri-moon-clear-line");
        "light" === n ? ($("html").removeClass("dark").addClass("light"), i.slideUp(300, function() {
            e.slideDown(300)
        }), t("theme", "light", 365)) : ($("html").removeClass("light").addClass("dark"), e.slideUp(300, function() {
            i.slideDown(300)
        }), t("theme", "dark", 365))
    }
    let h = e("theme");

    function c() {
        let n = Math.floor(100 * Math.random()),
            t = Math.floor(100 * Math.random()),
            e = ["+", "-", "*", "/"],
            i = e[Math.floor(Math.random() * e.length)],
            h;
        switch (i) {
            case "+":
                h = n + t;
                break;
            case "-":
                h = n - t;
                break;
            case "*":
                h = n * t;
                break;
            case "/":
                h = 0 !== t ? (n / t).toFixed(2) : n
        }
        let c = h < 10 ? "0" + h : h;
        return `${n<10?"0"+n:n}.${t<10?"0"+t:t}.${c}`
    }
    "light" === h ? i("light") : i("dark"), $("body").on("click", ".change-theme", function() {
            let n = $("html").hasClass("dark");
            i(n ? "light" : "dark")
        }),
        let a = (n, t) => Math.floor(Math.random() * (t - n + 1)) + n,
            s = n => {
                n.style.setProperty("--star-left", `${a(-10,100)}%`), n.style.setProperty("--star-top", `${a(-40,80)}%`), n.style.animation = "none", n.offsetHeight, n.style.animation = ""
            };
    for (let r of document.getElementsByClassName("magic-star")) setTimeout(() => {
        s(r), setInterval(() => s(r), 1e3)
    }, o++ * (1e3 / 3));
    let l = document.getElementById("croll-to-top"),
        g = l.querySelector(".text"),
        m = l.querySelector("i");
    0 === window.scrollY && (l.style.display = "none"), window.addEventListener("scroll", function() {
        let n = window.scrollY,
            t = document.documentElement.scrollHeight,
            e = window.innerHeight,
            i = 0;
        t > e && (i = n / (t - e) * 100), g.textContent = Math.round(i), n > 0 ? l.style.display = "block" : l.style.display = "none"
    }), l.addEventListener("mouseenter", function() {
        g.style.display = "none", m.style.display = "inline-block"
    }), l.addEventListener("mouseleave", function() {
        g.style.display = "inline-block", m.style.display = "none"
    }), l.addEventListener("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, "fast")
    }), $(document).on({
        contextmenu: function(n) {
            console.log("ctx menu button:", n.which), n.preventDefault()
        }
    });
    var d = 0,
        u = ["#ff6651", "#42a5f5", "#66bb6a", "#ab47bc", "#ffa726", "#ec407a", "#26c6da", "#78909c", "#ffca28", "#5c6bc0", "#8d6e63", "#26a69a"];
    class p {
        constructor(n) {
            this.element = $(n), this.TimeNows(), setInterval(() => this.TimeNows(), 1e3)
        }
        TimeNows() {
            let n = new Date,
                t = n.getHours().toString().padStart(2, "0"),
                e = n.getMinutes().toString().padStart(2, "0"),
                i = n.getSeconds().toString().padStart(2, "0");
            this.element.text(`${t}:${e}:${i}`)
        }
    }
 new p(".date");
    let v = $("#loading-percentage"),
        w;
    w = setInterval(function() {
        var n = $(".pace-progress");
        if (n.length) {
            var t = n.attr("data-progress-text");
            if (t !== v.text()) {
                v.text(t);
                var e = parseInt(t);
                n.css("transform", "translate3d(" + e + "%, 0px, 0px)"), "100%" === t && ($(".pace-active").animate({
                    top: "-100px"
                }, "slow", function() {
                    $(this).hide()
                }), $("#loading-box").is(":visible") ? (x(), WsLoaded = !0, $(".td-loading-v2").fadeOut("slow"), $("#loading-box").fadeOut("slow")) : $(".td-loading-v2").fadeOut("slow"), clearInterval(w))
            }
        }
    }, 100);
    let k = {
        endLoading() {
            x(), $(".td-loading-v2").fadeOut("slow"), $("#loading-box").fadeOut("slow"), WsLoaded = !0
        },
        initLoading() {
            document.body.style.overflow = "", $("#loading-box").removeClass("loaded")
        }
    };

    function x() {
        $("body").removeClass("loading")
    }
    $(window).on("load", () => {
        k.endLoading()
    }), $(document).on("pjax:send", () => {
        k.initLoading()
    }), $(document).on("pjax:complete", () => {
        k.endLoading()
    }), console.log("%c My Github %c https://github.com/aleotoidayy", "color:#fff;background:linear-gradient(90deg,#448bff,#44e9ff);padding:5px 0;", "color:#000;background:linear-gradient(90deg,#44e9ff,#ffffff);padding:5px 10px 5px 0px;");
    var _, C, T = new Image;

    function E(n, t, e, i, h) {
        this.x = n, this.y = t, this.s = e, this.r = i, this.fn = h
    }

    function q(n) {
        var t, e;
        switch (n) {
            case "x":
                t = Math.random() * window.innerWidth;
                break;
            case "y":
                t = Math.random() * window.innerHeight;
                break;
            case "s":
                t = Math.random();
                break;
            case "r":
                t = 6 * Math.random();
                break;
            case "fnx":
                e = -.5 + 1 * Math.random(), t = function(n, t) {
                    return n + .5 * e - 1.7
                };
                break;
            case "fny":
                e = 1.5 + .7 * Math.random(), t = function(n, t) {
                    return t + e
                };
                break;
            case "fnr":
                e = .03 * Math.random(), t = function(n) {
                    return n + e
                }
        }
        return t
    }

    function S() {
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
        var n, t, e, i, h, c, o, a, s = document.createElement("canvas");
        C = !0, s.height = window.innerHeight, s.width = window.innerWidth, s.setAttribute("style", "position: fixed;left: 0;top: 0;pointer-events: none;z-index: 8888;"), s.setAttribute("id", "canvas_sakura"), document.getElementsByTagName("body")[0].appendChild(s), a = s.getContext("2d");
        for (var r = new SakuraList, l = 0; l < 10; l++) t = q("x"), e = q("y"), h = q("r"), i = q("s"), c = q("fnx"), o = q("fny"), randomFnR = q("fnr"), (n = new E(t, e, i, h, {
            x: c,
            y: o,
            r: randomFnR
        })).draw(a), r.push(n);
        _ = requestAnimationFrame(function() {
            a.clearRect(0, 0, s.width, s.height), r.update(), r.draw(a), _ = requestAnimationFrame(arguments.callee)
        })
    }

    function A() {
        if (C) {
            var n = document.getElementById("canvas_sakura");
            n.parentNode.removeChild(n), window.cancelAnimationFrame(_), C = !1
        } else S()
    }
    sakura = "//i.ibb.co/CpF2yzvf/thanhdieu.png", leaf = "//i.ibb.co/CpF2yzvf/thanhdieu.png", maple = "//i.ibb.co/CpF2yzvf/thanhdieu.png", user = "", T.src = maple, E.prototype.draw = function(n) {
        n.save(), this.s, n.translate(this.x, this.y), n.rotate(this.r), n.drawImage(T, 0, 0, 30 * this.s, 30 * this.s), n.restore()
    }, E.prototype.update = function() {
        this.x = this.fn.x(this.x, this.y), this.y = this.fn.y(this.y, this.y), this.r = this.fn.r(this.r), (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) && (this.r = q("fnr"), Math.random() > .4 ? (this.x = q("x"), this.y = 0, this.s = q("s"), this.r = q("r")) : (this.x = window.innerWidth, this.y = q("y"), this.s = q("s"), this.r = q("r")))
    }, (SakuraList = function() {
        this.list = []
    }).prototype.push = function(n) {
        this.list.push(n)
    }, SakuraList.prototype.update = function() {
        for (var n = 0, t = this.list.length; n < t; n++) this.list[n].update()
    }, SakuraList.prototype.draw = function(n) {
        for (var t = 0, e = this.list.length; t < e; t++) this.list[t].draw(n)
    }, SakuraList.prototype.get = function(n) {
        return this.list[n]
    }, SakuraList.prototype.size = function() {
        return this.list.length
    }, window.onresize = function() {
        document.getElementById("canvas_snow")
    }, T.onload = function() {
        S()
    }, $("body").on("click", "[data-ws-copy]", function(n) {
        n.preventDefault();
        var t = $(this).data("ws-copy");
        if (navigator.clipboard) navigator.clipboard.writeText(t).then(function() {
            FuiToast.success("Đ\xe3 sao ch\xe9p v\xe0o bộ nhớ tạm!")
        }, function(n) {
            FuiToast.error("Sao ch\xe9p thất bại: " + n)
        });
        else {
            var e = $("<textarea>").val(t).appendTo("body").select();
            try {
                document.execCommand("copy"), FuiToast.success("Đ\xe3 sao ch\xe9p v\xe0o bộ nhớ tạm!")
            } catch (i) {
                FuiToast.error("Sao ch\xe9p thất bại: " + i)
            }
            e.remove()
        }
    })
}();
