"use strict";
(() => {
var exports = {};
exports.id = 3658;
exports.ids = [3658];
exports.modules = {

/***/ 371:
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


const LightTheme = ({ children , bdOn  })=>{
    if (bdOn) {
        react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
            document.querySelector("body").classList.add("bd-dark");
            return ()=>{
                document.querySelector("body").classList.remove("bd-dark");
            };
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "stylesheet",
                    href: "/css/light.css"
                })
            }),
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightTheme);


/***/ }),

/***/ 6304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home5_light)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/common/heroSkillsProgress.js
const heroSkillsProgress = ()=>{
    if (document.querySelector(".hero-sec .skills-box")) {
        window.addEventListener("scroll", ()=>{
            document.querySelectorAll(".skill-progress .progres").forEach((item)=>{
                let myVal = item.getAttribute("data-value");
                if (document.querySelector(".hero-sec")) {
                    if (window.pageYOffset > document.querySelector(".hero-sec").offsetTop - 800) {
                        item.style.width = myVal;
                    }
                }
            });
        });
    }
};
/* harmony default export */ const common_heroSkillsProgress = (heroSkillsProgress);

// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/components/About-with-skills/index.jsx




const AboutWithSkills = ()=>{
    external_react_default().useEffect(()=>{
        common_heroSkillsProgress();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hero-sec section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cont",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "About Me"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "main-title wow",
                                        "data-splitting": true,
                                        children: "My mission is design develop the best Websites around."
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "wow fadeInUp",
                                    "data-wow-delay": ".5s",
                                    children: "Hello! I’m Alex Smith. Web designer from USA, California, San Francisco. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#0",
                                    className: "simple-btn mt-40",
                                    children: "Download C.V"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "skills-box full-width",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "UI / UX Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                "data-value": "90%"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Development"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                "data-value": "80%"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skill-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            className: "custom-font",
                                            children: "Graphic Design"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "skill-progress",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "progres custom-font",
                                                "data-value": "88%"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const About_with_skills = (AboutWithSkills);

// EXTERNAL MODULE: ./src/components/Footer/index.jsx
var Footer = __webpack_require__(1690);
;// CONCATENATED MODULE: ./src/components/Intro-txt/index.jsx


const IntroTxt = ({ subBG  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`,
        style: {
            backgroundImage: "url(/img/slid/freelancer.jpg)"
        },
        "data-overlay-dark": "4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "cont",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                children: "Hello, I'm"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Alex Smith"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "UI & UX Designer"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "social-icon",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-facebook-f"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-pinterest"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#0",
                                        className: "icon",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fab fa-behance"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Intro_txt = (IntroTxt);

// EXTERNAL MODULE: ./src/components/Navbar/index.jsx + 1 modules
var Navbar = __webpack_require__(4848);
;// CONCATENATED MODULE: external "react-countup"
const external_react_countup_namespaceObject = require("react-countup");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_namespaceObject);
;// CONCATENATED MODULE: ./src/data/sections/numbers1.json
const numbers1_namespaceObject = JSON.parse('[{"id":1,"icon":"pe-7s-smile","txt":"Cafezinhos","value":"2400"},{"id":2,"icon":"pe-7s-portfolio","txt":"Bunkers Construídos","value":"133"},{"id":3,"icon":"pe-7s-cloud-download","txt":"Files Downloaded","value":"254"},{"id":4,"icon":"pe-7s-medal","txt":"Award Win","value":"46"}]');
;// CONCATENATED MODULE: external "react-visibility-sensor"
const external_react_visibility_sensor_namespaceObject = require("react-visibility-sensor");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Numbers/index.jsx






const Numbers1 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "number-sec section-padding sub-bg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: numbers1_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `item ${item.id == 1 ? "no-bord" : ""}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: `icon ${item.icon}`
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    className: "custom-font",
                                    children: [
                                        "\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                            redraw: true,
                                            end: item.value,
                                            duration: "3",
                                            children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                                                    onChange: start,
                                                    delayedCall: true,
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "count",
                                                                ref: countUpRef
                                                            }),
                                                            " ",
                                                            item.id == 3 ? "K" : ""
                                                        ]
                                                    })
                                                })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "wow txt words chars splitting",
                                        "data-splitting": true,
                                        children: item.txt
                                    })
                                })
                            ]
                        })
                    }, item.id))
            })
        })
    });
};
/* harmony default export */ const Numbers = (Numbers1);

// EXTERNAL MODULE: ./src/components/Portfolio-custom-column/index.jsx + 1 modules
var Portfolio_custom_column = __webpack_require__(1240);
// EXTERNAL MODULE: ./src/components/Services4/index.jsx + 1 modules
var Services4 = __webpack_require__(569);
// EXTERNAL MODULE: ./src/components/Testimonials1/index.jsx + 2 modules
var Testimonials1 = __webpack_require__(1671);
// EXTERNAL MODULE: ./src/components/Blogs-three-column2/index.jsx
var Blogs_three_column2 = __webpack_require__(9276);
// EXTERNAL MODULE: ./src/layouts/Light.jsx
var Light = __webpack_require__(371);
// EXTERNAL MODULE: ./src/components/Contact-section/index.jsx
var Contact_section = __webpack_require__(2398);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/data/sections/clients-brands.json
const clients_brands_namespaceObject = JSON.parse('[{"id":1,"darkImage":"/img/clients/brands/dark/01.png","lightImage":"/img/clients/brands/light/1.png"},{"id":2,"darkImage":"/img/clients/brands/dark/02.png","lightImage":"/img/clients/brands/light/2.png"},{"id":3,"darkImage":"/img/clients/brands/dark/03.png","lightImage":"/img/clients/brands/light/3.png"},{"id":4,"darkImage":"/img/clients/brands/dark/04.png","lightImage":"/img/clients/brands/light/4.png"},{"id":5,"darkImage":"/img/clients/brands/dark/05.png","lightImage":"/img/clients/brands/light/5.png"},{"id":6,"darkImage":"/img/clients/brands/dark/06.png","lightImage":"/img/clients/brands/light/6.png"},{"id":7,"darkImage":"/img/clients/brands/dark/07.png","lightImage":"/img/clients/brands/light/7.png"},{"id":8,"darkImage":"/img/clients/brands/dark/08.png","lightImage":"/img/clients/brands/light/8.png"}]');
;// CONCATENATED MODULE: ./src/components/Clients-brands/index.jsx
/* eslint-disable @next/next/no-img-element */ 






const ClientsBrands = ({ subBG , theme  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `clients-brand section-padding ${subBG ? "sub-bg" : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                className: "",
                "data-wow-delay": ".5s",
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                slidesToScroll: 1,
                slidesToShow: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }, 
                ],
                children: clients_brands_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "brands",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                style: {
                                    display: "none"
                                },
                                children: " \xa0 "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item",
                                "data-wow-delay": index + 1 == "1" ? ".3s" : index + 1 == "2" ? ".6s" : index + 1 == "3" ? ".8s" : index + 1 == "4" ? ".3s" : index + 1 == "5" ? ".4s" : index + 1 == "6" ? ".7s" : index + 1 == "7" ? ".5s" : index + 1 == "8" ? ".3s" : "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: theme == "dark" ? item.darkImage : item.lightImage,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#0",
                                            className: "link words chars splitting",
                                            "data-splitting": true,
                                            children: "www.avo.com"
                                        })
                                    })
                                ]
                            })
                        ]
                    }, item.id))
            })
        })
    });
};
/* harmony default export */ const Clients_brands = (ClientsBrands);

// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/pages/home/home5-light.jsx















const Homepage2 = ()=>{
    const navbarRef = external_react_default().useRef(null);
    const logoRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        var navbar = navbarRef.current, logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
                logo.setAttribute("src", app/* darkLogo */.Q1);
            } else {
                navbar.classList.remove("nav-scroll");
                logo.setAttribute("src", app/* lightLogo */.E8);
            }
        });
    }, [
        navbarRef
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Light/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                nr: navbarRef,
                lr: logoRef
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Intro_txt, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(About_with_skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Services4/* default */.Z, {
                halfBG: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Numbers, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Portfolio_custom_column/* default */.Z, {
                column: 2,
                filterPosition: "left"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Testimonials1/* default */.Z, {
                parallaxie: true,
                withBG: true,
                overlay: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Blogs_three_column2/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Clients_brands, {
                subBG: true,
                theme: "light"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact_section/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const home5_light = (Homepage2);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

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

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,676,1664,4958,4848,1690,8063,1240,1671,569,3113], () => (__webpack_exec__(6304)));
module.exports = __webpack_exports__;

})();