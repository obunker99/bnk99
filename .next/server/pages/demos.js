"use strict";
(() => {
var exports = {};
exports.id = 7528;
exports.ids = [7528];
exports.modules = {

/***/ 2115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addParlx = ()=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .capt .parlx")) {
            document.querySelector(".fixed-slider .capt .parlx").style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
            document.querySelector(".fixed-slider .capt .parlx").style.opacity = 1 - scrolled / 600;
        }
        if (document.querySelector(".fixed-slider .caption")) {
            document.querySelector(".fixed-slider .caption").style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
            document.querySelector(".fixed-slider .caption").style.opacity = 1 - scrolled / 600;
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addParlx);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-css-tags */ 


const DarkTheme = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: "/css/dark.css"
                })
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkTheme);


/***/ }),

/***/ 9811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ demos)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: ./src/layouts/Dark.jsx
var Dark = __webpack_require__(2532);
// EXTERNAL MODULE: ./src/common/addParlx.js
var addParlx = __webpack_require__(2115);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(8063);
;// CONCATENATED MODULE: ./src/pages/demos/index.jsx
/* eslint-disable @next/next/no-img-element */ 







const Demos = ()=>{
    const fixedHeader = external_react_default().useRef(null);
    const MainContent = external_react_default().useRef(null);
    const [pageLoaded, setPageLoaded] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setPageLoaded(true);
        if (pageLoaded) {
            window.addEventListener("load", ()=>{
                setTimeout(()=>{
                    (0,initIsotope/* default */.Z)();
                }, 1000);
            });
            setTimeout(()=>{
                (0,initIsotope/* default */.Z)();
            }, 1000);
        }
    }, [
        pageLoaded
    ]);
    external_react_default().useEffect(()=>{
        setInterval(()=>{
            if (fixedHeader.current) {
                var slidHeight = fixedHeader.current.offsetHeight;
            }
            if (MainContent.current) {
                MainContent.current.style.marginTop = slidHeight + "px";
            }
        }, 1000);
    }, [
        fixedHeader,
        MainContent
    ]);
    external_react_default().useEffect(()=>{
        (0,addParlx/* default */.Z)();
        document.querySelector("body").style.backgroundColor = "#181b21";
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dark/* default */.Z, {
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "6433e68bfac1cfec",
                children: '.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec{position:relative;overflow:hidden}.masonery.jsx-6433e68bfac1cfec .gallery.jsx-6433e68bfac1cfec .items.jsx-6433e68bfac1cfec{padding:0 40px;margin-top:80px;text-align:center}.masonery.jsx-6433e68bfac1cfec .gallery.jsx-6433e68bfac1cfec .items.jsx-6433e68bfac1cfec h6.jsx-6433e68bfac1cfec{margin-top:25px;font-size:17px;font-weight:400;font-family:"Barlow Condensed",sans-serif;text-align:center;text-transform:uppercase;letter-spacing:3px}.masonery.jsx-6433e68bfac1cfec .gallery.jsx-6433e68bfac1cfec .items.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec:hover img.jsx-6433e68bfac1cfec{}.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec:hover .tlinks.jsx-6433e68bfac1cfec{opacity:1}.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec .tlinks.jsx-6433e68bfac1cfec{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transition:all.4s;-moz-transition:all.4s;-o-transition:all.4s;transition:all.4s;background:rgba(0,0,0,.5);opacity:0;padding:0 40px}.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec .tag.jsx-6433e68bfac1cfec{position:absolute;top:15px;right:15px;padding:8px 20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background:#ff0036;color:#fff;font-size:13px}.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec .tlinks.jsx-6433e68bfac1cfec a.jsx-6433e68bfac1cfec{padding:14px 20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background:#32363e;color:#fff;font-size:14px;font-weight:500;margin:5px 0}.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec .tlinks.jsx-6433e68bfac1cfec a.jsx-6433e68bfac1cfec:last-of-type{background:#75dab4;color:#181b21;margin-left:5px}.masonery.jsx-6433e68bfac1cfec .item-img.jsx-6433e68bfac1cfec .new.jsx-6433e68bfac1cfec{padding:10px 30px;background:#75dab4;position:absolute;top:0;left:-60px;width:200px;-webkit-transform:rotate(-30deg);-moz-transform:rotate(-30deg);-ms-transform:rotate(-30deg);-o-transform:rotate(-30deg);transform:rotate(-30deg);font-size:13px}'
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                ref: fixedHeader,
                style: {
                    backgroundImage: "url(/img/demos/bg.png)"
                },
                "data-overlay-dark": "4",
                className: "jsx-6433e68bfac1cfec" + " " + "works-header fixed-slider hfixd valign bg-img",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-6433e68bfac1cfec" + " " + "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-6433e68bfac1cfec" + " " + "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-6433e68bfac1cfec" + " " + "col-lg-9 col-md-11 static",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-6433e68bfac1cfec" + " " + "capt mt-50",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-6433e68bfac1cfec" + " " + "parlx",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "custom-font",
                                                children: "PAGE DEMOS TESTE"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "jsx-6433e68bfac1cfec",
                                                children: "Creative way to showcase your works at their absolute best."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-6433e68bfac1cfec" + " " + "bactxt custom-font valign",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            style: {
                                                color: "transparent"
                                            },
                                            className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                            children: "avo"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: MainContent,
                className: "jsx-6433e68bfac1cfec" + " " + "main-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "jsx-6433e68bfac1cfec" + " " + "masonery section-padding sub-bg",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-6433e68bfac1cfec" + " " + "container-fluid",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-6433e68bfac1cfec" + " " + "sec-head custom-font text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                "data-splitting": true,
                                                className: "jsx-6433e68bfac1cfec" + " " + "wow words chars splitting",
                                                children: "Home Pages."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-6433e68bfac1cfec" + " " + "tbg",
                                            children: "Home Pages"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-6433e68bfac1cfec" + " " + "row",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-6433e68bfac1cfec" + " " + "gallery full-width",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items graphic",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home1-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home1-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/1.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Main Demo"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items graphic",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home6-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home6-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/n1.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tag",
                                                                children: "New"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Creative Agency"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items web",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home2-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home2-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/2.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Creative Studio"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home3-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home3-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/3.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Business Startup"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home4-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home4-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/4.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "One Page Demo"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home5-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home5-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/5.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Freelancer"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/about/about-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/about/about-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/6.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "About Us"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/contact/contact-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/contact/contact-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/7.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Contact Us"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/blog/blog-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/blog/blog-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/18.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Blogs"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/blog-details/blog-details-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/blog-details/blog-details-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/19.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Post Details"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    "data-wow-delay": ".4s",
                                                    className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/demos/more.png",
                                                        alt: "image",
                                                        className: "jsx-6433e68bfac1cfec"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        style: {
                            background: "#181b21"
                        },
                        className: "jsx-6433e68bfac1cfec" + " " + "masonery section-padding pb-70",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-6433e68bfac1cfec" + " " + "container-fluid",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "jsx-6433e68bfac1cfec" + " " + "sec-head custom-font text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                "data-splitting": true,
                                                className: "jsx-6433e68bfac1cfec" + " " + "wow words chars splitting",
                                                children: "Portfolio."
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-6433e68bfac1cfec" + " " + "tbg",
                                            children: "Portfolio Showcase"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-6433e68bfac1cfec" + " " + "row",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "jsx-6433e68bfac1cfec" + " " + "gallery full-width",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase/showcase-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase/showcase-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/12.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Full Screen"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase2/showcase2-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase2/showcase2-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/13.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Creative Carousel"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase5/showcase5-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase5/showcase5-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/17.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "new",
                                                                children: "New"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Creative Carousel 2"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase4/showcase4-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase4/showcase4-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/15.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Columns Slider"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase3/showcase3-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase3/showcase3-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/14.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Radius Carousel"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works/works-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works/works-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/8.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Portfolio"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works2/works2-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works2/works2-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/9.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Masonry 3 Columns"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works3/works3-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works3/works3-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/10.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Masonry 2 Columns"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works4/works4-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works4/works4-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/11.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Pinterest List"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "jsx-6433e68bfac1cfec" + " " + "col-lg-4 col-md-6 items brand",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        "data-wow-delay": ".4s",
                                                        className: "jsx-6433e68bfac1cfec" + " " + "item-img wow fadeInUp",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "jsx-6433e68bfac1cfec" + " " + "tlinks valign",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "jsx-6433e68bfac1cfec" + " " + "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/project-details2/project-details2-dark",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Dark Version"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/project-details2/project-details2-light",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                target: "_blank",
                                                                                className: "jsx-6433e68bfac1cfec",
                                                                                children: "Light Version"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/img/demos/16.png",
                                                                alt: "image",
                                                                className: "jsx-6433e68bfac1cfec"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "jsx-6433e68bfac1cfec" + " " + "cont",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            className: "jsx-6433e68bfac1cfec",
                                                            children: "Project Details"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                        className: "jsx-6433e68bfac1cfec" + " " + "footer-half sub-bg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-6433e68bfac1cfec" + " " + "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-6433e68bfac1cfec" + " " + "copyrights text-center mt-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "jsx-6433e68bfac1cfec",
                                    children: [
                                        "\xa9 2022, Avo Template. Made with passion by",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "jsx-6433e68bfac1cfec",
                                            children: "ThemesCamp"
                                        }),
                                        "."
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const demos = (Demos);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,676,1664,8063], () => (__webpack_exec__(9811)));
module.exports = __webpack_exports__;

})();