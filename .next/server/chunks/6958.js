"use strict";
exports.id = 6958;
exports.ids = [6958];
exports.modules = {

/***/ 6802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fadeWhenScroll = ()=>{
    window.addEventListener("scroll", ()=>{
        var scrolled = window.pageYOffset;
        if (document.querySelector(".fixed-slider .caption")) {
            document.querySelectorAll(".fixed-slider .caption").forEach((caption)=>{
                caption.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
                caption.style.opacity = 1 - scrolled / 600;
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeWhenScroll);


/***/ }),

/***/ 5850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    if (document.querySelector(".swiper-pagination")) {
        document.querySelector(".swiper-pagination").innerHTML = document.querySelector(".swiper-pagination").innerHTML.replace(" / ", "");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 2206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About_us1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
;// CONCATENATED MODULE: ./src/data/sections/about-us1.json
const about_us1_namespaceObject = JSON.parse('{"wp":"/img/intro/1.jpg","Lx":"/img/intro/3.jpg","_g":"/img/intro/2.jpg","bH":"Sobre a Bunker99","TN":{"P":"Uma equipe apaixonada e","E":"dedicada a levar a sua marca para voos mais altos. "},"kQ":"Trazemos toda nossa expertise e ajudamos empresas como a sua a alcançarem resultados extraordinários.","R2":[{"id":1,"icon":"diamond","name":{"first":"Brand","second":"and Design"},"wowDelay":".3s"},{"id":2,"icon":"map-2","name":{"first":"Inteligência de","second":"Marketing"},"wowDelay":".5s"},{"id":3,"icon":"cart","name":{"first":"Tráfego","second":"Pago"},"wowDelay":".8s"}]}');
;// CONCATENATED MODULE: ./src/components/About-us1/index.jsx
/* eslint-disable @next/next/no-img-element */ 



const AboutUs1 = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "about section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img-mons",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-5 cmd-padding valign",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img1 wow imago",
                                            "data-wow-delay": ".5s",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: about_us1_namespaceObject.wp,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-md-7 cmd-padding",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img2 wow imago",
                                                "data-wow-delay": ".3s",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: about_us1_namespaceObject.Lx,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img3 wow imago",
                                                "data-wow-delay": ".8s",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: about_us1_namespaceObject._g,
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 offset-lg-1 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: about_us1_namespaceObject.bH
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: "words chars splitting main-title wow",
                                        "data-splitting": true,
                                        children: [
                                            about_us1_namespaceObject.TN.P,
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            " ",
                                            about_us1_namespaceObject.TN.E
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "words chars splitting wow txt",
                                        "data-splitting": true,
                                        children: about_us1_namespaceObject.kQ
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "ftbox mt-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: about_us1_namespaceObject.R2.map((feature)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `wow fadeIn ${feature.id == 2 ? "space" : ""}`,
                                                "data-wow-delay": feature.wowDelay,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: `icon color-font pe-7s-${feature.icon}`
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                        className: "custom-font",
                                                        children: [
                                                            feature.name.first,
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            " ",
                                                            feature.name.second
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "dots",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                        ]
                                                    })
                                                ]
                                            }, feature.id))
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const About_us1 = (AboutUs1);


/***/ }),

/***/ 1098:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5754);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8636);
/* harmony import */ var _common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6802);
/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_5__.Autoplay
]);
const IntroWithSlider1 = ({ sliderRef  })=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        (0,_common_fadeWhenScroll__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
        setTimeout(()=>{
            setLoad(false);
            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
        }, 2000);
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        ref: sliderRef,
        className: "slider slider-prlx fixed-slider text-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "swiper-container parallax-slider",
            children: [
                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    speed: 900,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: true
                    },
                    parallax: true,
                    navigation: {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
                    },
                    pagination: {
                        type: "fraction",
                        clickable: true,
                        el: paginationRef.current
                    },
                    onBeforeInit: (swiper)=>{
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.params.pagination.el = paginationRef.current;
                    },
                    onSwiper: (swiper)=>{
                        setTimeout(()=>{
                            for(var i = 0; i < swiper.slides.length; i++){
                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                            }
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.pagination.el = paginationRef.current;
                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                            swiper.pagination.destroy();
                            swiper.pagination.init();
                            swiper.pagination.update();
                        });
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1,
                    children: _data_sections_intro_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-img valign",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                },
                                "data-overlay-dark": "6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row justify-content-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-lg-7 col-md-9",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "caption center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "words chars splitting",
                                                            children: typeof slide.title === "object" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: [
                                                                    slide.title.first,
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    slide.title.second
                                                                ]
                                                            }) : slide.title
                                                        })
                                                    }),
                                                    slide?.content && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: slide.content
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        href: "/about/about-dark",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            className: "btn-curve btn-lit mt-30",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Saiba mais"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        }, slide.id))
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "setone setwo",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationNextRef,
                            className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-right"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: navigationPrevRef,
                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-chevron-left"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: paginationRef,
                    className: "swiper-pagination top botm custom-font"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "social-icon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://www.linkedin.com/company/obunker99",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-linkedin"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://www.instagram.com/obunker99/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-instagram"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://www.youtube.com/@obunker99/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fab fa-youtube"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroWithSlider1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Team_with_skills)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/common/tooltipEffect.js
var tooltipEffect = __webpack_require__(5217);
;// CONCATENATED MODULE: ./src/common/teamSkillsProgress.js
const teamSkillsProgress = ()=>{
    let teamSection = document.querySelector(".team-crv");
    if (teamSection) {
        window.addEventListener("scroll", ()=>{
            document.querySelectorAll(".skill-progress .progres").forEach((item)=>{
                let myVal = item.getAttribute("data-value");
                if (window.pageYOffset > teamSection.offsetTop - 200) {
                    item.style.width = myVal;
                }
            });
        });
    }
};
/* harmony default export */ const common_teamSkillsProgress = (teamSkillsProgress);

;// CONCATENATED MODULE: ./src/components/Team-with-skills/index.jsx
/* eslint-disable @next/next/no-img-element */ 



const TeamWithSkills = ()=>{
    external_react_default().useEffect(()=>{
        (0,tooltipEffect/* default */.Z)();
        common_teamSkillsProgress();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "team-crv section-padding",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 valign",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content wow fadeInUp",
                            "data-wow-delay": ".5s",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "sub-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                            children: "Our Staff"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "co-tit custom-font mb-15",
                                    children: "We help to create visual strategies."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "We are AVO. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "skills-box mt-40",
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
                                                    children: "Apps Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "skill-progress",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progres custom-font",
                                                        "data-value": "80%"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 offset-lg-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img-box",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6 toright",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "full-width",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img sizxl mb-30",
                                                    "data-tooltip-tit": "Stephanie Lawrence",
                                                    "data-tooltip-sub": "CEO, Colabrio Media",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/team/1.jpg",
                                                        alt: "",
                                                        className: "imago wow"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img sizmd",
                                                    "data-tooltip-tit": "Alex Regelman",
                                                    "data-tooltip-sub": "Co-Founder, Colabrio Media",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/team/2.jpg",
                                                        alt: "",
                                                        className: "imago wow"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6 toleft valign",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "full-width text-left",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img sizmd mb-30",
                                                    "data-tooltip-tit": "Stacey Stamper",
                                                    "data-tooltip-sub": "Network Partner, Colabrio Media",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/team/3.jpg",
                                                        alt: "",
                                                        className: "imago wow"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img sizsm",
                                                    "data-tooltip-tit": "Stephanie Lawrence",
                                                    "data-tooltip-sub": "CEO, Colabrio Media",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/team/4.jpg",
                                                        alt: "",
                                                        className: "imago wow"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Team_with_skills = (TeamWithSkills);


/***/ }),

/***/ 5754:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"Brand","second":"Marketing"},"content":"Imagine sua marca com padrões visuais usados por grandes player do mercado.","image":"../img/slid/1.jpg"},{"id":2,"title":{"first":"Tráfego","second":"Pago"},"content":"Mais que fazer seu tráfego, é necessário mapear e projetar o que vai funcionar!","image":"/img/slid/1.jpg"},{"id":3,"title":{"first":"Inteligência","second":"de Marketing"},"content":"Uma estratégia montada com perspectivas diferentes, olhares sem vícios e com foco no seu objetivo.","image":"/img/slid/1.jpg"}]');

/***/ })

};
;