"use strict";
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 1966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar_full_menu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Split/index.jsx
var Split = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/customFunctions.js
var customFunctions = __webpack_require__(2455);
;// CONCATENATED MODULE: ./src/common/handleFullScreenNavbar.js


const handleFullScreenNavbar = ()=>{
    function noScroll() {
        window.scrollTo(0, 0);
    }
    var open = false, navDark = document.querySelector(".topnav.dark"), logoChan = document.querySelector(".topnav.dark .logo img"), menuIcon = document.querySelector(".topnav .menu-icon"), menuText = document.querySelector(".topnav .menu-text");
    if (menuIcon) {
        menuIcon.addEventListener("click", function() {
            open = !open;
            document.querySelector(".hamenu").classList.toggle("open");
            if (open) {
                (0,customFunctions/* animateEl */.mM)(document.querySelector(".hamenu"), "0px");
                document.querySelector(".topnav .menu-icon ").classList.add("open");
                menuText.innerHTML = "Close";
                if (navDark) {
                    navDark.classList.add("navlit");
                }
                if (logoChan) {
                    logoChan.setAttribute("src", app/* lightLogo */.E8);
                }
                window.addEventListener("scroll", noScroll);
            } else {
                (0,customFunctions/* delay */.gw)(300, (0,customFunctions/* animateEl */.mM)(document.querySelector(".hamenu"), "-100%"));
                document.querySelector(".topnav .menu-icon").classList.remove("open");
                menuText.innerHTML = "Menu";
                if (navDark) {
                    navDark.classList.remove("navlit");
                }
                if (logoChan) {
                    logoChan.setAttribute("src", app/* darkLogo */.Q1);
                }
                window.removeEventListener("scroll", noScroll);
            }
            Splitting({
                target: menuText
            });
        });
        document.querySelectorAll(".main-menu a").forEach((item)=>{
            item.addEventListener("click", ()=>{
                (0,customFunctions/* delay */.gw)(300, (0,customFunctions/* animateEl */.mM)(document.querySelector(".hamenu"), "-100%"));
                document.querySelector(".topnav .menu-icon").classList.remove("open");
                if (navDark) {
                    navDark.classList.remove("navlit");
                }
                if (logoChan) {
                    logoChan.setAttribute("src", app/* darkLogo */.Q1);
                }
                window.removeEventListener("scroll", noScroll);
            });
        });
    }
    document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((item)=>{
        item.addEventListener("mouseenter", function() {
            this.style.opacity = "1";
            (0,customFunctions/* getSiblings */.m7)(this).forEach((item)=>{
                item.style.opacity = ".5";
            });
        });
        item.addEventListener("mouseleave", function() {
            document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((item2)=>{
                item2.style.opacity = "1";
            });
        });
    });
    if (document.querySelectorAll(".main-menu > li .dmenu").length) {
        document.querySelectorAll(".main-menu > li .dmenu").forEach((item)=>{
            item.addEventListener("click", function() {
                document.querySelector(".main-menu").classList.add("gosub");
                (0,customFunctions/* getSiblings */.m7)(this.parentNode.parentNode).forEach((item)=>{
                    item.childNodes[1] ? item.childNodes[1].classList.remove("sub-open") : "";
                });
                this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
            });
        });
    }
    if (document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length) {
        document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach((item)=>{
            item.addEventListener("click", function() {
                document.querySelector(".main-menu").classList.remove("gosub");
                document.querySelector(".main-menu").classList.remove("sub-open");
            });
        });
    }
};
/* harmony default export */ const common_handleFullScreenNavbar = (handleFullScreenNavbar);

;// CONCATENATED MODULE: ./src/components/Navbar-full-menu/navbar-full-menu/index.jsx
/* eslint-disable @next/next/no-img-element */ 





const NavbarFullMenu = ({ theme , lr  })=>{
    external_react_default().useEffect(()=>{
        common_handleFullScreenNavbar();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "navi",
                className: `topnav ${theme ? theme === "light" ? "light" : "" : ""}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container-fluid",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#0",
                                children: theme ? theme === "light" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `${app/* darkLogo */.Q1}`,
                                    alt: "logo"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `${app/* lightLogo */.E8}`,
                                    alt: "logo"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `${app/* lightLogo */.E8}`,
                                    alt: "logo"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "menu-icon",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "icon",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Split/* default */.Z, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text",
                                        "data-splitting": true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "menu-text",
                                            children: "Menu"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hamenu",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-9 col-md-8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "menu-links",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "main-menu",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "o-hidden",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "link dmenu",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "nm",
                                                                    children: "01."
                                                                }),
                                                                "Home",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-angle-right"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "sub-menu",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "sub-link back",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "pe-7s-angle-left"
                                                                                }),
                                                                                " Go Back"
                                                                            ]
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home1-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "01."
                                                                                    }),
                                                                                    "Main Home"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home2-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "02."
                                                                                    }),
                                                                                    "Creative Studio"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home3-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "03."
                                                                                    }),
                                                                                    " Business Startup"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home4-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "04."
                                                                                    }),
                                                                                    "One Page"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/home/home5-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "05."
                                                                                    }),
                                                                                    "Freelancer"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "o-hidden",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/about/about-dark",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "link",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "nm",
                                                                    children: "02."
                                                                }),
                                                                "About Us"
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "o-hidden",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "link dmenu",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "nm",
                                                                    children: "03."
                                                                }),
                                                                "Portfolio",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-angle-right"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "sub-menu",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "sub-link back",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "pe-7s-angle-left"
                                                                                }),
                                                                                " Go Back"
                                                                            ]
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works/works-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "01."
                                                                                    }),
                                                                                    "Mouse Info"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works2/works2-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "02."
                                                                                    }),
                                                                                    "Masonry 3 Columns"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works3/works3-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "03."
                                                                                    }),
                                                                                    "Masonry 2 Columns"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/works4/works4-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "04."
                                                                                    }),
                                                                                    "Pinterest List"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "o-hidden",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "link dmenu",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "nm",
                                                                    children: "04."
                                                                }),
                                                                "Showcases",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-angle-right"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "sub-menu",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "sub-link back",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "pe-7s-angle-left"
                                                                                }),
                                                                                " Go Back"
                                                                            ]
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase/showcase-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "01."
                                                                                    }),
                                                                                    "Full Screen"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase2/showcase2-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "02."
                                                                                    }),
                                                                                    "Creative Carousel"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase3/showcase3-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "03."
                                                                                    }),
                                                                                    "Radius Carousel"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "o-hidden",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "/showcase4/showcase4-dark",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                className: "sub-link",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "nm",
                                                                                        children: "04."
                                                                                    }),
                                                                                    "Columns Carousel"
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "o-hidden",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/contact/contact-dark",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "link",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "nm",
                                                                    children: "05."
                                                                }),
                                                                "Contact"
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-md-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cont-info",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: "Phone :"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "+03 762-2367-723"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: "Address :"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: "Email :"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#0",
                                                        children: "Avo_website@gmail.com"
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
            })
        ]
    });
};
/* harmony default export */ const navbar_full_menu = (NavbarFullMenu);


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

/***/ 265:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"Hoodie","second":"Jacket"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Eminem","second":"Style"},"image":"/img/portfolio/full/4.jpg","sub":"Design"},{"id":3,"title":{"first":"Black","second":"Panther"},"image":"/img/portfolio/full/5.jpg","sub":"Design"},{"id":4,"title":{"first":"Secret","second":"Office"},"image":"/img/portfolio/full/6.jpg","sub":"Design"}]');

/***/ })

};
;