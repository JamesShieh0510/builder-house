"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 1873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Logo.330201da.svg","height":105,"width":180,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/city.9723b8e2.svg","height":260,"width":1296,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 3577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/city2.497d0533.svg","height":410,"width":1440,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Footer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/assets/LogoBlack.svg
/* harmony default export */ const LogoBlack = ({"src":"/_next/static/media/LogoBlack.4f3c8b59.svg","height":40,"width":180,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/SvgIcon/SvgIcon.tsx

function SvgIcon(props) {
    const { iconName, width, height } = props;
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        className: `svg-icon ${iconName} ${props.className ?? ""}`,
        width: width,
        height: height,
        fill: "white",
        children: /*#__PURE__*/ jsx_runtime.jsx("use", {
            xlinkHref: "#" + iconName,
            width: width,
            height: height
        })
    });
}

// EXTERNAL MODULE: ./src/assets/city.svg
var city = __webpack_require__(1246);
// EXTERNAL MODULE: ./src/assets/city2.svg
var city2 = __webpack_require__(3577);
// EXTERNAL MODULE: external "react-fast-marquee"
var external_react_fast_marquee_ = __webpack_require__(5700);
var external_react_fast_marquee_default = /*#__PURE__*/__webpack_require__.n(external_react_fast_marquee_);
;// CONCATENATED MODULE: ./src/components/Footer/Mobile.tsx









function FooterMobile(props) {
    const { goPage } = props;
    const buttonStyle = "hover:opacity-80 text-white font-medium p-2 uppercase";
    const openLink = (link)=>{
        window.open(link, "_blank");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "flex w-full flex-col items-start border-t-[1px] border-white bg-primary lg:hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative flex h-[200px] w-full flex-col items-center justify-end bg-gradient-to-b from-white from-20% via-[#F77968] via-70% to-[#FF3366] to-100%",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: city/* default */.Z.src,
                        alt: "",
                        className: "z-20 w-[1280px]"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: city2/* default */.Z.src,
                        alt: "",
                        className: "absolute z-20 w-[1280px]"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_fast_marquee_default()), {
                className: "mb-6 w-full border-b-2 border-t-2 bg-primary text-2xl",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mx-2",
                        children: "TAIWAN BUILDER HOUSE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-stroke mx-2 leading-6",
                        children: "THE BLOCK"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mx-2",
                        children: "TAIWAN BUILDER HOUSE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-stroke mx-2 leading-6",
                        children: "THE BLOCK"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mx-2",
                        children: "TAIWAN BUILDER HOUSE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-stroke mx-2 leading-6",
                        children: "THE BLOCK"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mx-2",
                        children: "TAIWAN BUILDER HOUSE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-stroke mx-2 leading-6",
                        children: "THE BLOCK"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mx-2",
                        children: "TAIWAN BUILDER HOUSE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-stroke mx-2 leading-6",
                        children: "THE BLOCK"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-8 px-8 py-10",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "cursor-pointer",
                        onClick: ()=>goPage("/"),
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: LogoBlack.src,
                            alt: "logo",
                            width: "250",
                            height: "100"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "-ml-3 flex justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "cursor-pointer rounded-full p-3 transition-all hover:bg-white/20",
                                onClick: ()=>openLink("https://bit.ly/TBH_twitter"),
                                children: /*#__PURE__*/ jsx_runtime.jsx(SvgIcon, {
                                    width: 30,
                                    height: 30,
                                    iconName: "icon-twitter"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "cursor-pointer rounded-full p-3 transition-all hover:bg-white/20",
                                onClick: ()=>openLink("https://bit.ly/3MRkvxF"),
                                children: /*#__PURE__*/ jsx_runtime.jsx(SvgIcon, {
                                    width: 30,
                                    height: 30,
                                    iconName: "icon-telegram"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "-ml-1 grid grid-cols-2 gap-x-10 gap-y-5 text-base font-medium",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/#OverView",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: buttonStyle,
                                    children: "OVERVIEW"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/#Prizes",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: buttonStyle,
                                    children: "PRIZES"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/#GemHunter",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: buttonStyle,
                                    children: "Hunter"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/#Activity",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: buttonStyle,
                                    children: "Activity"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/#Judges",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: buttonStyle,
                                    children: "JUDGES"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/#Events",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: buttonStyle,
                                    children: "EVENTS"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/#Partners",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: buttonStyle,
                                    children: "PARTNERS"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/#FAQ",
                                passHref: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: buttonStyle,
                                    children: "FAQ"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "font-medium text-white",
                        children: "\xa9 TAIWAN BUILDER HOUSE."
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/assets/LogoWhite.svg
/* harmony default export */ const LogoWhite = ({"src":"/_next/static/media/LogoWhite.14d8e508.svg","height":106,"width":180,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/components/Footer/Desktop.tsx









function DesktopFooter(props) {
    const { goPage } = props;
    const buttonStyle = "font-medium hover:opacity-80 text-white p-1 uppercase";
    const openLink = (link)=>{
        window.open(link, "_blank");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "hidden w-full flex-col items-center justify-center border-t-[1px] border-white bg-primary lg:flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative flex h-[500px] w-full flex-col items-center justify-end bg-gradient-to-b from-white from-20% via-[#F77968] via-70% to-[#FF3366] to-100%",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: city/* default */.Z.src,
                        alt: "",
                        className: "z-20 w-[1280px]"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: city2/* default */.Z.src,
                        alt: "",
                        className: "absolute z-20 w-[1280px]"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_fast_marquee_default()), {
                className: "mb-6 w-full border-b-2 border-t-2 bg-primary text-2xl",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mx-2",
                        children: "TAIWAN BUILDER HOUSE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-stroke mx-2 leading-6",
                        children: "THE BLOCK"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mx-2",
                        children: "TAIWAN BUILDER HOUSE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-stroke mx-2 leading-6",
                        children: "THE BLOCK"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mx-2",
                        children: "TAIWAN BUILDER HOUSE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-stroke mx-2 leading-6",
                        children: "THE BLOCK"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mx-2",
                        children: "TAIWAN BUILDER HOUSE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-stroke mx-2 leading-6",
                        children: "THE BLOCK"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mx-2",
                        children: "TAIWAN BUILDER HOUSE"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "text-stroke mx-2 leading-6",
                        children: "THE BLOCK"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-6 flex w-full justify-between px-24",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "cursor-pointer",
                        onClick: ()=>goPage("/"),
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: LogoWhite.src,
                            alt: "logo",
                            width: "180",
                            height: "100",
                            className: "text-white"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col items-end justify-start text-base",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex gap-6 pl-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/#OverView",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: buttonStyle,
                                            children: "OVERVIEW"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/#Prizes",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: buttonStyle,
                                            children: "PRIZES"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/#GemHunter",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: buttonStyle,
                                            children: "Hunter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/#Activity",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: buttonStyle,
                                            children: "Activity"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/#Judges",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: buttonStyle,
                                            children: "JUDGES"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/#Events",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: buttonStyle,
                                            children: "EVENTS"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/#Partners",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: buttonStyle,
                                            children: "PARTNERS"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/#FAQ",
                                        passHref: true,
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: buttonStyle,
                                            children: "FAQ"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "-ml-3 flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "cursor-pointer rounded-full p-3 transition-all hover:bg-white/20",
                                        onClick: ()=>openLink("https://bit.ly/TBH_twitter"),
                                        children: /*#__PURE__*/ jsx_runtime.jsx(SvgIcon, {
                                            width: 20,
                                            height: 20,
                                            iconName: "icon-twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "cursor-pointer rounded-full p-3 transition-all hover:bg-white/20",
                                        onClick: ()=>openLink("https://bit.ly/3MRkvxF"),
                                        children: /*#__PURE__*/ jsx_runtime.jsx(SvgIcon, {
                                            width: 20,
                                            height: 20,
                                            iconName: "icon-telegram"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mb-12 flex max-w-sm justify-end font-medium text-white",
                                children: "\xa9 TAIWAN BUILDER HOUSE."
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Footer/Footer.tsx





function Footer() {
    const router = (0,router_.useRouter)();
    const goPage = (page)=>{
        router.push(page);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(DesktopFooter, {
                goPage: goPage
            }),
            /*#__PURE__*/ jsx_runtime.jsx(FooterMobile, {
                goPage: goPage
            })
        ]
    });
}


/***/ }),

/***/ 1587:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HeaderDesktop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5304);
/* harmony import */ var _HeaderMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1528);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _HeaderDesktop__WEBPACK_IMPORTED_MODULE_4__, _HeaderMobile__WEBPACK_IMPORTED_MODULE_5__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _HeaderDesktop__WEBPACK_IMPORTED_MODULE_4__, _HeaderMobile__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import Image from 'next/dist/client/image';




function Header() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const locale = router.locale;
    const goPage = (page)=>{
        router.push(page);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            justify: "space-between",
            align: "center",
            px: {
                base: "2rem",
                xl: "4rem",
                "2xl": "8rem"
            },
            overflow: "hidden",
            className: "fixed z-[100] h-16 md:h-24 w-full text-text transition-all backdrop-blur",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderDesktop__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    goPage: goPage,
                    locale: locale
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeaderMobile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    goPage: goPage,
                    locale: locale
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Desktop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1873);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Desktop(props) {
    const { goPage, locale } = props;
    const changeToEn = locale === "en" ? "tw" : "en";
    const buttonStyle = "text-sm text-primary w-16 xl:w-20 xl:text-md flex items-center justify-center hover:opacity-80 uppercase";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            className: "main w-full",
            display: {
                base: "none",
                lg: "block"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "header flex items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[100px] cursor-pointer",
                        onClick: ()=>goPage("/"),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                            src: _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.src,
                            alt: "logo",
                            width: "250",
                            height: "60"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "nav flex h-16 items-center justify-center gap-2 rounded-full bg-white px-6 xl:gap-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-2 px-2 xl:gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/#OverView",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: buttonStyle,
                                            children: "OVERVIEW"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/#Prizes",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: buttonStyle,
                                            children: "PRIZES"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/#Activity",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: buttonStyle,
                                            children: "Activity"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/#Judges",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: buttonStyle,
                                            children: "JUDGES"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/#Events",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: buttonStyle,
                                            children: "EVENTS"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/#Partners",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: buttonStyle,
                                            children: "PARTNERS"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/#FAQ",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: buttonStyle,
                                            children: "FAQ"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex h-12 w-[120px] items-center justify-center rounded-3xl bg-primary text-white transition-all xl:w-[120px] 2xl:w-[120px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            color: "white",
                                            children: locale === "en" ? "SIgn Up" : "報名"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-full w-[85px] rounded-full bg-primary p-[2px] transition-all",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "/",
                                                locale: changeToEn,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "relative flex h-full w-full items-center justify-between rounded-full bg-white px-4 text-base font-medium leading-normal text-text",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${locale === "en" ? "text-primary" : "text-white"} z-20`,
                                                            children: "中"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `${locale !== "en" ? "text-primary" : "text-white"} z-20`,
                                                            children: "EN"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `absolute left-[6px] top-[4px] h-[36px] w-[36px] rounded-full bg-primary transition-all ${locale === "en" ? "translate-x-8" : ""}`
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Mobile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6134);
/* harmony import */ var _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1873);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Mobile(props) {
    const { isOpen, onOpen, onClose } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    const { goPage, locale } = props;
    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const changeToEn = locale === "en" ? "tw" : "en";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                display: {
                    base: "flex",
                    lg: "none"
                },
                className: "w-full flex-col items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex w-full items-center justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "cursor-pointer pl-3",
                            onClick: ()=>goPage("/"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                src: _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.src,
                                alt: "logo",
                                width: "72",
                                height: "40"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            className: "bg-primary hover:bg-primary",
                            onClick: ()=>{
                                setHover(true);
                                onOpen();
                            },
                            onMouseOver: ()=>setHover(true),
                            onMouseOut: ()=>setHover(false),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.HamburgerIcon, {
                                w: 6,
                                h: 6,
                                color: "white"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
                isOpen: isOpen,
                size: "xs",
                placement: "right",
                onClose: onClose,
                returnFocusOnClose: false,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerOverlay, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.DrawerContent, {
                        className: "flex items-center gap-4 bg-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                display: {
                                    base: "flex",
                                    lg: "none"
                                },
                                className: "divider w-full flex-col items-center px-2 pb-4 pt-5",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex w-full items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cursor-pointer pl-3",
                                            onClick: ()=>goPage("/"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                src: _assets_Logo_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.src,
                                                alt: "logo",
                                                width: "100",
                                                height: "40"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            className: "bg-transparent hover:bg-transparent",
                                            onClick: ()=>{
                                                setHover(true);
                                                onClose();
                                            },
                                            onMouseOver: ()=>setHover(true),
                                            onMouseOut: ()=>setHover(false),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SmallCloseIcon, {
                                                w: 6,
                                                h: 6,
                                                color: "#FF3366"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "/#OverView",
                                passHref: true,
                                className: "w-full",
                                onClick: ()=>onClose(),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex h-12 items-center pl-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-primary bg-clip-text text-xl font-bold text-transparent",
                                            children: "OVERVIEW"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `pl-3 text-base font-black ${locale === "en" ? "hidden" : "flex text-black"}`,
                                            children: "總覽"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "/#Prizes",
                                passHref: true,
                                className: "w-full",
                                onClick: ()=>onClose(),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex h-12 items-center pl-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-primary bg-clip-text text-xl font-bold text-transparent",
                                            children: "PRIZES"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `pl-3 text-base font-black ${locale === "en" ? "hidden" : "flex text-black"}`,
                                            children: "總獎金"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "/#GemHunter",
                                passHref: true,
                                className: "w-full",
                                onClick: ()=>onClose(),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex h-12 items-center pl-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-primary bg-clip-text text-xl font-bold uppercase text-transparent",
                                            children: "Hunter"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `pl-3 text-base font-black ${locale === "en" ? "hidden" : "flex text-black"}`,
                                            children: "賞金獵人"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "/#Activity",
                                passHref: true,
                                className: "w-full",
                                onClick: ()=>onClose(),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex h-12 items-center pl-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-primary bg-clip-text text-xl font-bold uppercase text-transparent",
                                            children: "Activity"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `pl-3 text-base font-black ${locale === "en" ? "hidden" : "flex text-black"}`,
                                            children: "活動"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "/#Judges",
                                passHref: true,
                                className: "w-full",
                                onClick: ()=>onClose(),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex h-12 items-center pl-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-primary bg-clip-text text-xl font-bold text-transparent",
                                            children: "JUDGES"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `pl-3 text-base font-black ${locale === "en" ? "hidden" : "flex text-black"}`,
                                            children: "裁判群"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "/#Events",
                                passHref: true,
                                className: "w-full",
                                onClick: ()=>onClose(),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex h-12 items-center pl-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-primary bg-clip-text text-xl font-bold uppercase text-transparent",
                                            children: "EVENTS"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `pl-3 text-base font-black ${locale === "en" ? "hidden" : "flex text-black"}`,
                                            children: "近期活動"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "/#Partners",
                                passHref: true,
                                className: "w-full",
                                onClick: ()=>onClose(),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex h-12 items-center pl-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-primary bg-clip-text text-xl font-bold text-transparent",
                                            children: "PARTNERS"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `pl-3 text-base font-black ${locale === "en" ? "hidden" : "fle text-black"}`,
                                            children: "合作夥伴"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "/#FAQ",
                                passHref: true,
                                className: "w-full",
                                onClick: ()=>onClose(),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex h-12 items-center pl-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-primary bg-clip-text text-xl font-bold text-transparent",
                                            children: "FAQ"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `pl-3 text-base font-black ${locale === "en" ? "hidden" : "flex text-black"}`,
                                            children: "相關問題"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full px-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-[1px] w-full bg-primary"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex w-full justify-start pl-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-[40px] w-[70px] rounded-full bg-primary p-[2px] transition-all",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        href: "/",
                                        locale: changeToEn,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: "relative flex h-full w-full items-center justify-between rounded-full bg-white px-[10px] text-base font-medium leading-normal text-text",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${locale === "en" ? "text-primary" : "text-white"} z-20`,
                                                    children: "中"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${locale !== "en" ? "text-primary" : "text-white"} z-20`,
                                                    children: "EN"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `absolute left-[4px] top-[3px] h-[30px] w-[30px] rounded-full bg-primary transition-all ${locale === "en" ? "translate-x-[27px]" : ""}`
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;