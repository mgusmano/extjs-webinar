(this["webpackJsonpreact-webinar"] = this["webpackJsonpreact-webinar"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n* {\n  box-sizing:border-box;\n  font-family:Arial, Helvetica, sans-serif;\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":";AACA;EACE,qBAAqB;EACrB,wCAAwC;AAC1C","sourcesContent":["\n* {\n  box-sizing:border-box;\n  font-family:Arial, Helvetica, sans-serif;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Forms */ "./src/Forms.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var _sencha_sencha_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sencha/sencha-grid */ "./node_modules/@sencha/sencha-grid/dist/SenchaGrid.js");
/* harmony import */ var _sencha_sencha_grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sencha_sencha_grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sencha_sencha_grid_dist_themes_material_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sencha/sencha-grid/dist/themes/material.css */ "./node_modules/@sencha/sencha-grid/dist/themes/material.css");
/* harmony import */ var _sencha_sencha_grid_dist_themes_material_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sencha_sencha_grid_dist_themes_material_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var material_design_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-design-icons/iconfont/material-icons.css */ "./node_modules/material-design-icons/iconfont/material-icons.css");
/* harmony import */ var material_design_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Volumes/BOOTCAMP/webinar/extjs-react/webinarApp/react-webinar/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();












const App = () => {
  _s();

  const gridRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [selected, setSelected] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const url = 'http://localhost:3055/users';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_10___default()({
      url: url + '?id_ne=1'
    }).then(response => {
      console.log('useEffect', response);
      setData(response.data);
    });
    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };
  }, []);

  const onMessage = event => {
    setMessage(event.detail.message);
  };

  const onFilter = () => {
    var filter = {
      property: 'firstname',
      value: 'Joe'
    };
    var filters = [filter];
    console.log('onFilter; before setFilters', gridRef.current.getFilters());
    gridRef.current.setFilters(filters);
    console.log('onFilter; after setFilters', gridRef.current.getFilters());
  };

  const onSelect = ({
    selected
  }) => {
    setSelected(selected[0]);
  }; // const onSetGridTitle = () => {
  //   gridRef.current.setTitle('hi')
  // }


  const onDelete = () => {
    axios__WEBPACK_IMPORTED_MODULE_10___default()({
      url: url + '/' + selected.id,
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      axios__WEBPACK_IMPORTED_MODULE_10___default()({
        url: url + '?id_ne=1'
      }).then(response => {
        console.log(response);
        setSelected(null);
        setData(response.data);
      });
    });
  };

  const initialValues = {
    firstname: '',
    lastname: '',
    email: ''
  };
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
    firstname: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Mininum 2 characters").max(15, "Maximum 15 characters").required("First Name is required!"),
    lastname: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(2, "Mininum 2 characters").max(15, "Maximum 15 characters").required("Last Name is required!"),
    email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email('Email is not valid!').required('Email is required!')
  }); // const onSubmit2 = async (values, { setSubmitting, resetForm }) => {
  //   try {
  //     let res = await axios.get("https://node-hnapi.herokuapp.com/news");
  //     let { data } = res;
  //     dispatch({ type: GET_NEWS, payload: data });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const onSubmit = (values, {
    setSubmitting,
    resetForm
  }) => {
    axios__WEBPACK_IMPORTED_MODULE_10___default()({
      url: url,
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: values
    }).then(response => {
      axios__WEBPACK_IMPORTED_MODULE_10___default()({
        url: url + '?id_ne=1',
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response => {
        resetForm({});
        setSubmitting(false);
        setData(response.data);
      });
    }, error => {
      console.log(error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Page"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Title"], {
      children: "React in Ext JS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: onSubmit,
      children: ({
        submitForm,
        isSubmitting
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: '4px'
          },
          children: isSubmitting && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["LinearProgress"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 32
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          style: {
            fontSize: '16px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Description"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          style: {
            fontSize: '11px'
          },
          children: ["message: ", message]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
            style: {
              height: '70px',
              width: '60%'
            },
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
            name: "firstname",
            type: "firstname",
            label: "First Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
            style: {
              height: '70px',
              width: '60%'
            },
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
            name: "lastname",
            type: "lastname",
            label: "Last Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
            style: {
              height: '70px',
              width: '60%'
            },
            component: formik_material_ui__WEBPACK_IMPORTED_MODULE_6__["TextField"],
            name: "email",
            type: "email",
            label: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          style: {
            fontSize: '24px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginTop: '30px',
              borderBottom: '0px solid red'
            },
            children: "Sencha Grid for React UI (GRUI) - coming soon!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sencha_sencha_grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
            onSelect: onSelect,
            plugins: {
              gridfilters: true
            },
            ref: gridRef,
            style: {
              width: '500px',
              height: '200px'
            },
            data: data,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sencha_sencha_grid__WEBPACK_IMPORTED_MODULE_7__["Column"], {
              dataIndex: "id",
              text: "ID",
              width: "50px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sencha_sencha_grid__WEBPACK_IMPORTED_MODULE_7__["Column"], {
              dataIndex: "firstname",
              text: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sencha_sencha_grid__WEBPACK_IMPORTED_MODULE_7__["Column"], {
              dataIndex: "lastname",
              text: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sencha_sencha_grid__WEBPACK_IMPORTED_MODULE_7__["Column"], {
              dataIndex: "email",
              text: "Email",
              width: "200px"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            onClick: onFilter,
            children: "Filter First Name of 'Joe' (call setFilters method)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: selected != null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            onClick: onDelete,
            children: ["Delete Selected Row - ID: ", selected.id]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Forms__WEBPACK_IMPORTED_MODULE_4__["Footer"], {
          style: {
            background: 'white',
            justifyContent: 'flex-end'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            variant: "contained",
            color: "primary",
            disabled: isSubmitting,
            onClick: submitForm,
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 5
  }, undefined);
};

_s(App, "Q1uf8BkK3YitvBXXE1874xoFut0=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App); //onSelect={onSelect}
// listeners= {{
//   select: function(sender, selected, eOpts) {
//     console.log('sender',sender)
//     console.log('selected',selected)
//     console.log('eOpts',eOpts)
//     //console.log(selected[0].data)
//     setSelected(selected[0].data)
//   }
// }}

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/AppOrig.js":
/*!************************!*\
  !*** ./src/AppOrig.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Volumes/BOOTCAMP/webinar/extjs-react/webinarApp/react-webinar/src/AppOrig.js";


function AppOrig() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      textAlign: 'center'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Edit ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
          children: "src/App.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 16
        }, this), " and save to reload."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://reactjs.org",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Learn React"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = AppOrig;
/* harmony default export */ __webpack_exports__["default"] = (AppOrig);

var _c;

__webpack_require__.$Refresh$.register(_c, "AppOrig");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/BasicLayout.js":
/*!****************************!*\
  !*** ./src/BasicLayout.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChildWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChildWindow */ "./src/ChildWindow.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Volumes/BOOTCAMP/webinar/extjs-react/webinarApp/react-webinar/src/BasicLayout.js";




class BasicLayout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(props) {
    super(props);

    this.doResize = entries => {
      for (let entry of entries) {
        if (this.mounted === true) {
          this.setState({
            width: entry.contentRect.width
          });
        }
      }
    };

    this._div = null;
    this.mounted = false;
    this.state = {
      layouts: this.props.layoutsConfig.layouts,
      widgets: this.props.layoutsConfig.widgets
    };
  }

  componentDidMount() {
    //https://web.dev/resize-observer/
    this.mounted = true;
    this.ro = new ResizeObserver(this.doResize);
    this.ro.observe(this._div);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.mounted = false;
    this.ro.unobserve(this._div);
  }

  generateDOM() {
    var me = this;
    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.range(this.props.items), function (i) {
      var text = 'Ext JS Child ' + i;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          border: '1px solid lightgray',
          boxShadow: '5px 5px 5px #888888'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ChildWindow__WEBPACK_IMPORTED_MODULE_4__["default"], {
          widget: me.state.widgets[i],
          id: i,
          text: text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this);
    });
  }

  onLayoutChange(layout) {
    console.log('onLayoutChange', layout);
    this.props.onLayoutChange(layout);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid-layout-root",
      ref: c => this._div = c,
      style: {
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
        border: '1px solid lightgray',
        overflow: 'scroll',
        boxShadow: '5px 10px 18px #888888'
      },
      children: this.state.width !== undefined && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
        layout: this.state.layouts,
        width: this.state.width,
        onResize: (layout, oldResizeItem, l, placeholder, e, node) => {
          console.log('onReszie');
          this.setState({
            layout: layout
          });
        },
        ...this.props,
        children: this.generateDOM()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this);
  }

}
BasicLayout.defaultProps = {
  className: "layout",
  compactType: null,
  items: 5,
  rowHeight: 50,
  resizeHandles: ['s', 'e', 'se'],
  margin: [30, 30],
  onLayoutChange: function () {},
  cols: 6
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/ChildWindow.js":
/*!****************************!*\
  !*** ./src/ChildWindow.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Volumes/BOOTCAMP/webinar/extjs-react/webinarApp/react-webinar/src/ChildWindow.js",
    _s = __webpack_require__.$Refresh$.signature();



const ChildWindow = props => {
  _s();

  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const extContainer = {
    current: null
  };

  const doResize = entries => {
    if (extContainer.current !== null) {
      if (extContainer.current.updateLayout !== undefined) {
        extContainer.current.updateLayout();
      }
    } else {
      console.log('newWidgetContainer is null');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const Ext = window['Ext'];
    const currentRef = contentRef.current;

    if (Ext === undefined) {
      const newDiv = document.createElement("div");
      newDiv.style.width = "200px";
      newDiv.style.height = "200px";
      newDiv.style.background = "red";
      newDiv.style.color = "white";
      const newContent = document.createTextNode("Child div of Grid Item");
      newDiv.appendChild(newContent);
      contentRef.current.appendChild(newDiv);
      return;
    }

    extContainer.current = Ext.create('Ext.Container', {
      width: '100%',
      height: '100%',
      layout: 'fit',
      renderTo: contentRef.current
    });
    extContainer.current.add(props.widget.renderable);
    var ro = new ResizeObserver(doResize);
    ro.observe(contentRef.current);
    return () => ro.unobserve(currentRef);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "rgl-rendered-ext-container",
    ref: contentRef,
    style: {
      fontSize: '11px',
      width: '100%',
      height: '100%',
      border: '0px solid blue',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

_s(ChildWindow, "4DWJwh4NdgM1uDLuR5KKKiIo21Q=");

_c = ChildWindow;
/* harmony default export */ __webpack_exports__["default"] = (ChildWindow);

var _c;

__webpack_require__.$Refresh$.register(_c, "ChildWindow");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Forms.js":
/*!**********************!*\
  !*** ./src/Forms.js ***!
  \**********************/
/*! exports provided: Description, Title, Footer, Horizontal, Vertical, Splitter, Child, FieldFormik, Field, FieldEnd, Page, FieldGroup, FieldGroupEnd, Row, SubmitButton, Label, Required, Input, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Horizontal", function() { return Horizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vertical", function() { return Vertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Splitter", function() { return Splitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Child", function() { return Child; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldFormik", function() { return FieldFormik; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldEnd", function() { return FieldEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldGroup", function() { return FieldGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldGroupEnd", function() { return FieldGroupEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButton", function() { return SubmitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Required", function() { return Required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Volumes/BOOTCAMP/webinar/extjs-react/webinarApp/react-webinar/src/Forms.js";

function Description(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["react features used:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 30
      }, this), "- function component", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 25
      }, this), "- useState", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 15
      }, this), "- useEffect", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 16
      }, this), "- useRef", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this), "- conditional JSX", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 22
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        marginLeft: '40px'
      },
      children: ["npm packages used:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 23
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 28
      }, this), "- @material-ui/core", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 24
      }, this), "- @sencha/sencha-grid", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 26
      }, this), "- axios", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }, this), "- formik", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), "- formik-material-ui", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }, this), "- styled-components", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 24
      }, this), "- yup", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = Description;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  color: white;
  font-size: 32px;
  background: var(--base-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  bottom: 0;
`;
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
background: lightgray;
position: absolute;
right: 0;
bottom: 0;
margin: 30px;
`;
const Horizontal = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100vh;
  border: 1px solid red;
`;
const Vertical = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`;
const Splitter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
cursor: col-resize;
background-color: #aaa;
background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='30'><path d='M2 0 v30 M5 0 v30 M8 0 v30' fill='none' stroke='black'/></svg>");
background-repeat: no-repeat;
background-position: center;
width: 10px;
height: 100%;

/* Prevent the browser's built-in drag from interfering */
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
`;
const Child = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  flex: 1;
  display: flex;
  border: 1px solid green;
`;
function FieldFormik(props) {
  // const errors = props.errors
  // //const refval = props.refval({ required: props.required })
  // const refval = props.refval
  const upperName = props.name;
  const lowerName = props.name.toLowerCase().replace(/\s/g, ''); // const placeholder = `Type ${upperName} here`

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
      htmlFor: lowerName,
      children: [upperName, ":", props.required && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Required, {
        children: "*"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 69
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: props.type,
      name: lowerName,
      onChange: props.handleChange,
      onBlur: props.handleBlur,
      value: props.values.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Message, {
      children: props.errors[lowerName] && props.touched[lowerName] && props.errors[lowerName]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}
_c2 = FieldFormik;
function Field(props) {
  const errors = props.errors; //const refval = props.refval({ required: props.required })

  const refval = props.refval;
  const upperName = props.name;
  const lowerName = props.name.toLowerCase().replace(/\s/g, '');
  const placeholder = `Type ${upperName} here`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FieldGroup, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
      htmlFor: lowerName,
      children: [upperName, ":", props.required && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Required, {
        children: "*"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 65
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
      ref: refval,
      placeholder: placeholder,
      name: lowerName,
      id: lowerName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Message, {
      children: errors[lowerName] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "This field is required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 38
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 5
  }, this);
}
_c3 = Field;
function FieldEnd(props) {
  const errors = props.errors;
  const refval = props.refval({
    required: props.required
  });
  const upperName = props.name;
  const lowerName = props.name.toLowerCase().replace(/\s/g, '');
  const placeholder = `Type ${upperName} here`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FieldGroupEnd, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
      htmlFor: lowerName,
      children: [upperName, ":", props.required && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Required, {
        children: "*"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 65
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
      ref: refval,
      placeholder: placeholder,
      name: lowerName,
      id: lowerName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Message, {
      children: errors[lowerName] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "This field is required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 38
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 5
  }, this);
} // export const Button = styled.button`
//   padding: 20px;
//   background-color: black;
//   font-size: 32px;
//   color: white;
// `;
// export const FormGroup = styled.div`
// 	color: palevioletred;
//   display: block;
// 	width: 300px;
// 	margin: 50px auto;
// `;

_c4 = FieldEnd;
const Page = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  height:100%;
  justify-content:space-evenly;
  border:1px solid lightgray;
`;
const FieldGroup = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
xflex:1;
xdisplay:flex;
xjustify-content:space-evenly;
xpadding:0 0 0 0;
`;
_c5 = FieldGroup;
const FieldGroupEnd = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
flex:1;
padding:0 20px 0 0;
`;
_c6 = FieldGroupEnd;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display:flex;
  flex-direction:row;
  xpadding: 0 0 0 10px;

  justify-content:space-evenly;
  padding:10px;
  border-bottom:0px solid lightgray;
`;
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  background: var(--base-color);
  font-size: 16px;
  color: white;
  width: 120px;
  height:50px;
  xborder-radius: 22px;
  xbackground-image: linear-gradient(to right, rgb(22 149 156), rgb(8 87 91));
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label`
	margin-bottom: 0.0em;
  color: black;
  font-family: Arial;
  font-size: 12px;
  display: block;
`;
_c7 = Label;
const Required = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span`
  font-size: 18px;
  color: red;
`;
_c8 = Required;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
	padding: 10px 10px 10px 10px;
	color: black;
	background: white;
	border: 1px solid lightgray;
	border-radius: 3px;
	width: 100%;
  xmargin: 10px 10px 10px 10px;
  xmargin: 0 10px 0 0;
`;
_c9 = Input;
const Message = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label`
  height: 14px;
	xmargin-bottom: 0.0em;
	color: palevioletred;
  display: block;
  font-family: Arial;
  font-size: 12px;
`;
_c10 = Message;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

__webpack_require__.$Refresh$.register(_c, "Description");
__webpack_require__.$Refresh$.register(_c2, "FieldFormik");
__webpack_require__.$Refresh$.register(_c3, "Field");
__webpack_require__.$Refresh$.register(_c4, "FieldEnd");
__webpack_require__.$Refresh$.register(_c5, "FieldGroup");
__webpack_require__.$Refresh$.register(_c6, "FieldGroupEnd");
__webpack_require__.$Refresh$.register(_c7, "Label");
__webpack_require__.$Refresh$.register(_c8, "Required");
__webpack_require__.$Refresh$.register(_c9, "Input");
__webpack_require__.$Refresh$.register(_c10, "Message");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppOrig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppOrig */ "./src/AppOrig.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _BasicLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BasicLayout */ "./src/BasicLayout.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Volumes/BOOTCAMP/webinar/extjs-react/webinarApp/react-webinar/src/index.js";





 // var layoutsConfig = {
//   layouts:  [
//     {"x":0,"y":0,"w":2,"h":5,"i":"0"},
//     {"x":2,"y":0,"w":2,"h":5,"i":"1"},
//     {"x":4,"y":0,"w":2,"h":5,"i":"2"},
//     {"x":0,"y":5,"w":3,"h":5,"i":"3"},
//     {"x":3,"y":5,"w":3,"h":5,"i":"4"}
//   ],
//   widgets: [
//     {renderable: null},
//     {renderable: null},
//     {renderable: null},
//     {renderable: null},
//     {renderable: null}
//   ]
// }
//<BasicLayout layoutsConfig={layoutsConfig}/>,
//console.log('in react module')
//console.log('Ext not found')

if (window['Ext'] === undefined) {
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AppOrig__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined), document.getElementById('root'));
} else {
  document.addEventListener('DOMContentLoaded', function () {
    window['Ext'].react = {
      AppOrig: _AppOrig__WEBPACK_IMPORTED_MODULE_3__["default"],
      App: _App__WEBPACK_IMPORTED_MODULE_4__["default"],
      BasicLayout: _BasicLayout__WEBPACK_IMPORTED_MODULE_5__["default"],
      React: react__WEBPACK_IMPORTED_MODULE_1___default.a,
      ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_2___default.a
    };
  }, false);
} //console.log(window['Ext'])
//var elementApp = React.createElement(App,{},null)

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Volumes/BOOTCAMP/webinar/extjs-react/webinarApp/react-webinar/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Volumes/BOOTCAMP/webinar/extjs-react/webinarApp/react-webinar/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL3dlYmluYXIvZXh0anMtcmVhY3Qvd2ViaW5hckFwcC9yZWFjdC13ZWJpbmFyL3NyYy9pbmRleC5jc3MiLCIvVm9sdW1lcy9CT09UQ0FNUC93ZWJpbmFyL2V4dGpzLXJlYWN0L3dlYmluYXJBcHAvcmVhY3Qtd2ViaW5hci9zcmMvQXBwLmpzIiwiL1ZvbHVtZXMvQk9PVENBTVAvd2ViaW5hci9leHRqcy1yZWFjdC93ZWJpbmFyQXBwL3JlYWN0LXdlYmluYXIvc3JjL0FwcE9yaWcuanMiLCIvVm9sdW1lcy9CT09UQ0FNUC93ZWJpbmFyL2V4dGpzLXJlYWN0L3dlYmluYXJBcHAvcmVhY3Qtd2ViaW5hci9zcmMvQmFzaWNMYXlvdXQuanMiLCIvVm9sdW1lcy9CT09UQ0FNUC93ZWJpbmFyL2V4dGpzLXJlYWN0L3dlYmluYXJBcHAvcmVhY3Qtd2ViaW5hci9zcmMvQ2hpbGRXaW5kb3cuanMiLCIvVm9sdW1lcy9CT09UQ0FNUC93ZWJpbmFyL2V4dGpzLXJlYWN0L3dlYmluYXJBcHAvcmVhY3Qtd2ViaW5hci9zcmMvRm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9iYjBhIiwiL1ZvbHVtZXMvQk9PVENBTVAvd2ViaW5hci9leHRqcy1yZWFjdC93ZWJpbmFyQXBwL3JlYWN0LXdlYmluYXIvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsImdyaWRSZWYiLCJ1c2VSZWYiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXJsIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTWVzc2FnZSIsImNsZWFudXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkZXRhaWwiLCJvbkZpbHRlciIsImZpbHRlciIsInByb3BlcnR5IiwidmFsdWUiLCJmaWx0ZXJzIiwiY3VycmVudCIsImdldEZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwib25TZWxlY3QiLCJvbkRlbGV0ZSIsImlkIiwibWV0aG9kIiwiaGVhZGVycyIsImluaXRpYWxWYWx1ZXMiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInNoYXBlIiwibWluIiwibWF4IiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJyZXNldEZvcm0iLCJlcnJvciIsInN1Ym1pdEZvcm0iLCJpc1N1Ym1pdHRpbmciLCJoZWlnaHQiLCJmb250U2l6ZSIsIndpZHRoIiwiVGV4dEZpZWxkIiwibWFyZ2luVG9wIiwiYm9yZGVyQm90dG9tIiwiZ3JpZGZpbHRlcnMiLCJiYWNrZ3JvdW5kIiwianVzdGlmeUNvbnRlbnQiLCJBcHBPcmlnIiwidGV4dEFsaWduIiwiQmFzaWNMYXlvdXQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZG9SZXNpemUiLCJlbnRyaWVzIiwiZW50cnkiLCJtb3VudGVkIiwic2V0U3RhdGUiLCJjb250ZW50UmVjdCIsIl9kaXYiLCJzdGF0ZSIsImxheW91dHMiLCJsYXlvdXRzQ29uZmlnIiwid2lkZ2V0cyIsImNvbXBvbmVudERpZE1vdW50Iiwicm8iLCJSZXNpemVPYnNlcnZlciIsIm9ic2VydmUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInVub2JzZXJ2ZSIsImdlbmVyYXRlRE9NIiwibWUiLCJfIiwibWFwIiwicmFuZ2UiLCJpdGVtcyIsImkiLCJ0ZXh0IiwiYm9yZGVyIiwiYm94U2hhZG93Iiwib25MYXlvdXRDaGFuZ2UiLCJsYXlvdXQiLCJyZW5kZXIiLCJjIiwiYm94U2l6aW5nIiwib3ZlcmZsb3ciLCJ1bmRlZmluZWQiLCJvbGRSZXNpemVJdGVtIiwibCIsInBsYWNlaG9sZGVyIiwiZSIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc05hbWUiLCJjb21wYWN0VHlwZSIsInJvd0hlaWdodCIsInJlc2l6ZUhhbmRsZXMiLCJtYXJnaW4iLCJjb2xzIiwiQ2hpbGRXaW5kb3ciLCJjb250ZW50UmVmIiwiZXh0Q29udGFpbmVyIiwidXBkYXRlTGF5b3V0IiwiRXh0IiwiY3VycmVudFJlZiIsIm5ld0RpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiY29sb3IiLCJuZXdDb250ZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZSIsInJlbmRlclRvIiwiYWRkIiwid2lkZ2V0IiwicmVuZGVyYWJsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiRGVzY3JpcHRpb24iLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luTGVmdCIsIlRpdGxlIiwic3R5bGVkIiwiZGl2IiwiRm9vdGVyIiwiSG9yaXpvbnRhbCIsIlZlcnRpY2FsIiwiU3BsaXR0ZXIiLCJDaGlsZCIsIkZpZWxkRm9ybWlrIiwidXBwZXJOYW1lIiwibmFtZSIsImxvd2VyTmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInR5cGUiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiZXJyb3JzIiwidG91Y2hlZCIsIkZpZWxkIiwicmVmdmFsIiwiRmllbGRFbmQiLCJQYWdlIiwiRmllbGRHcm91cCIsIkZpZWxkR3JvdXBFbmQiLCJSb3ciLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJMYWJlbCIsImxhYmVsIiwiUmVxdWlyZWQiLCJzcGFuIiwiSW5wdXQiLCJpbnB1dCIsIk1lc3NhZ2UiLCJSZWFjdERPTSIsImdldEVsZW1lbnRCeUlkIiwicmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUN6Riw4QkFBOEIsbUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsUUFBUSwwQkFBMEIsNkNBQTZDLEdBQUcsT0FBTywwRUFBMEUsS0FBSyxZQUFZLGFBQWEsK0JBQStCLDBCQUEw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QUFVO0FBQ3RERCxVQUFNLENBQUMsS0FBRCxDQUFOLENBQWNnSyxLQUFkLEdBQXNCO0FBQ3BCbEgsYUFBTyxFQUFFQSxnREFEVztBQUVwQi9ELFNBQUcsRUFBRUEsNENBRmU7QUFHcEJpRSxpQkFBVyxFQUFFQSxvREFITztBQUlwQkMsV0FBSyxFQUFFQSw0Q0FKYTtBQUtwQjZHLGNBQVEsRUFBRUEsZ0RBQVFBO0FBTEUsS0FBdEI7QUFPRCxHQVJELEVBUUcsS0FSSDtBQVNELEMsQ0FFRDtBQUNBLG1EIiwiZmlsZSI6InN0YXRpYy9qcy9tYWluLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuKiB7XFxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsd0NBQXdDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbioge1xcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgeyBQYWdlLCBUaXRsZSwgUm93LCBEZXNjcmlwdGlvbiwgRm9vdGVyfSBmcm9tIFwiLi9Gb3Jtc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBMaW5lYXJQcm9ncmVzcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ2Zvcm1pay1tYXRlcmlhbC11aSc7XG5pbXBvcnQgU2VuY2hhR3JpZCwgeyBDb2x1bW4gfSBmcm9tICdAc2VuY2hhL3NlbmNoYS1ncmlkJztcbmltcG9ydCAnQHNlbmNoYS9zZW5jaGEtZ3JpZC9kaXN0L3RoZW1lcy9tYXRlcmlhbC5jc3MnO1xuaW1wb3J0ICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgZ3JpZFJlZiA9IHVzZVJlZihudWxsKVxuICBjb25zdCBbIG1lc3NhZ2UsIHNldE1lc3NhZ2UgXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFsgZGF0YSwgc2V0RGF0YSBdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFsgc2VsZWN0ZWQsIHNldFNlbGVjdGVkIF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDU1L3VzZXJzJ1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiB1cmwgKyAnP2lkX25lPTEnXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndXNlRWZmZWN0JyxyZXNwb25zZSlcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21qZycsIG9uTWVzc2FnZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWpnJywgb25NZXNzYWdlKTtcbiAgICB9O1xuXG4gIH0sW10pO1xuXG4gIGNvbnN0IG9uTWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgIHNldE1lc3NhZ2UoZXZlbnQuZGV0YWlsLm1lc3NhZ2UpXG4gIH1cblxuICBjb25zdCBvbkZpbHRlciA9ICgpID0+IHtcbiAgICB2YXIgZmlsdGVyID0ge1xuICAgICAgcHJvcGVydHk6ICdmaXJzdG5hbWUnLFxuICAgICAgdmFsdWU6ICdKb2UnXG4gICAgfTtcbiAgICB2YXIgZmlsdGVycyA9IFtmaWx0ZXJdO1xuXG4gICAgY29uc29sZS5sb2coJ29uRmlsdGVyOyBiZWZvcmUgc2V0RmlsdGVycycsZ3JpZFJlZi5jdXJyZW50LmdldEZpbHRlcnMoKSlcbiAgICBncmlkUmVmLmN1cnJlbnQuc2V0RmlsdGVycyhmaWx0ZXJzKTtcbiAgICBjb25zb2xlLmxvZygnb25GaWx0ZXI7IGFmdGVyIHNldEZpbHRlcnMnLGdyaWRSZWYuY3VycmVudC5nZXRGaWx0ZXJzKCkpXG4gIH1cblxuICBjb25zdCBvblNlbGVjdCA9ICh7c2VsZWN0ZWR9KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWRbMF0pXG4gIH1cblxuICAvLyBjb25zdCBvblNldEdyaWRUaXRsZSA9ICgpID0+IHtcbiAgLy8gICBncmlkUmVmLmN1cnJlbnQuc2V0VGl0bGUoJ2hpJylcbiAgLy8gfVxuXG4gIGNvbnN0IG9uRGVsZXRlID0gKCkgPT4ge1xuICAgIGF4aW9zKHtcbiAgICAgIHVybDogdXJsICsgJy8nICsgc2VsZWN0ZWQuaWQsXG4gICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBheGlvcyh7XG4gICAgICAgIHVybDogdXJsICsgJz9pZF9uZT0xJ1xuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIHNldFNlbGVjdGVkKG51bGwpXG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gICAgZmlyc3RuYW1lOiAnJyxcbiAgICBsYXN0bmFtZTogJycsXG4gICAgZW1haWw6ICcnXG4gIH1cbiAgY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgZmlyc3RuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgIC5taW4oMiwgXCJNaW5pbnVtIDIgY2hhcmFjdGVyc1wiKVxuICAgICAgLm1heCgxNSwgXCJNYXhpbXVtIDE1IGNoYXJhY3RlcnNcIilcbiAgICAgIC5yZXF1aXJlZChcIkZpcnN0IE5hbWUgaXMgcmVxdWlyZWQhXCIpLFxuICAgIGxhc3RuYW1lOiBZdXAuc3RyaW5nKClcbiAgICAgIC5taW4oMiwgXCJNaW5pbnVtIDIgY2hhcmFjdGVyc1wiKVxuICAgICAgLm1heCgxNSwgXCJNYXhpbXVtIDE1IGNoYXJhY3RlcnNcIilcbiAgICAgIC5yZXF1aXJlZChcIkxhc3QgTmFtZSBpcyByZXF1aXJlZCFcIiksXG4gICAgZW1haWw6IFl1cC5zdHJpbmcoKVxuICAgICAgLmVtYWlsKCdFbWFpbCBpcyBub3QgdmFsaWQhJylcbiAgICAgIC5yZXF1aXJlZCgnRW1haWwgaXMgcmVxdWlyZWQhJylcbiAgfSlcblxuICAvLyBjb25zdCBvblN1Ym1pdDIgPSBhc3luYyAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHJlc2V0Rm9ybSB9KSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9uZXdzXCIpO1xuICAvLyAgICAgbGV0IHsgZGF0YSB9ID0gcmVzO1xuXG4gIC8vICAgICBkaXNwYXRjaCh7IHR5cGU6IEdFVF9ORVdTLCBwYXlsb2FkOiBkYXRhIH0pO1xuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcsIHJlc2V0Rm9ybSB9KSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHZhbHVlc1xuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgYXhpb3Moe1xuICAgICAgICB1cmw6IHVybCArICc/aWRfbmU9MScsXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHJlc2V0Rm9ybSh7fSlcbiAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICAgIH0pXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxUaXRsZT5SZWFjdCBpbiBFeHQgSlM8L1RpdGxlPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0aW9uU2NoZW1hfVxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICA+XG4gICAgICAgIHsoeyBzdWJtaXRGb3JtLCBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonNHB4J319PlxuICAgICAgICAgICAgICB7aXNTdWJtaXR0aW5nICYmIDxMaW5lYXJQcm9ncmVzcyAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFJvdyBzdHlsZT17e2ZvbnRTaXplOicxNnB4J319PlxuICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gLz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdyBzdHlsZT17e2ZvbnRTaXplOicxMXB4J319PlxuICAgICAgICAgICAgICBtZXNzYWdlOiB7bWVzc2FnZX1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEZpZWxkIHN0eWxlPXt7aGVpZ2h0Oic3MHB4Jyx3aWR0aDonNjAlJ319XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEZpZWxkIHN0eWxlPXt7aGVpZ2h0Oic3MHB4Jyx3aWR0aDonNjAlJ319XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEZpZWxkIHN0eWxlPXt7aGVpZ2h0Oic3MHB4Jyx3aWR0aDonNjAlJ319XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0RmllbGR9XG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Um93IHN0eWxlPXt7Zm9udFNpemU6JzI0cHgnfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzMwcHgnLGJvcmRlckJvdHRvbTonMHB4IHNvbGlkIHJlZCd9fT5cbiAgICAgICAgICAgICAgICBTZW5jaGEgR3JpZCBmb3IgUmVhY3QgVUkgKEdSVUkpIC0gY29taW5nIHNvb24hXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8U2VuY2hhR3JpZFxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgICAgICAgICBwbHVnaW5zPXt7XG4gICAgICAgICAgICAgICAgICBncmlkZmlsdGVyczogdHJ1ZVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcmVmPXtncmlkUmVmfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzUwMHB4JyxoZWlnaHQ6JzIwMHB4J319XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gZGF0YUluZGV4PVwiaWRcIiB0ZXh0PVwiSURcIiB3aWR0aD1cIjUwcHhcIiAvPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gZGF0YUluZGV4PVwiZmlyc3RuYW1lXCIgdGV4dD1cIkZpcnN0IE5hbWVcIiAvPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gZGF0YUluZGV4PVwibGFzdG5hbWVcIiB0ZXh0PVwiTGFzdCBOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIGRhdGFJbmRleD1cImVtYWlsXCIgdGV4dD1cIkVtYWlsXCIgd2lkdGg9XCIyMDBweFwiIC8+XG4gICAgICAgICAgICAgIDwvU2VuY2hhR3JpZD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uRmlsdGVyfT5GaWx0ZXIgRmlyc3QgTmFtZSBvZiAnSm9lJyAoY2FsbCBzZXRGaWx0ZXJzIG1ldGhvZCk8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25EZWxldGV9PkRlbGV0ZSBTZWxlY3RlZCBSb3cgLSBJRDoge3NlbGVjdGVkLmlkfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPEZvb3RlciBzdHlsZT17e2JhY2tncm91bmQ6J3doaXRlJyxqdXN0aWZ5Q29udGVudDonZmxleC1lbmQnfX0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0Rm9ybX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybWlrPlxuICAgIDwvUGFnZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbi8vb25TZWxlY3Q9e29uU2VsZWN0fVxuXG4vLyBsaXN0ZW5lcnM9IHt7XG4vLyAgIHNlbGVjdDogZnVuY3Rpb24oc2VuZGVyLCBzZWxlY3RlZCwgZU9wdHMpIHtcbi8vICAgICBjb25zb2xlLmxvZygnc2VuZGVyJyxzZW5kZXIpXG4vLyAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkJyxzZWxlY3RlZClcbi8vICAgICBjb25zb2xlLmxvZygnZU9wdHMnLGVPcHRzKVxuLy8gICAgIC8vY29uc29sZS5sb2coc2VsZWN0ZWRbMF0uZGF0YSlcbi8vICAgICBzZXRTZWxlY3RlZChzZWxlY3RlZFswXS5kYXRhKVxuLy8gICB9XG4vLyB9fSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEFwcE9yaWcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRWRpdCA8Y29kZT5zcmMvQXBwLmpzPC9jb2RlPiBhbmQgc2F2ZSB0byByZWxvYWQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgTGVhcm4gUmVhY3RcbiAgICAgICAgPC9hPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcE9yaWc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUmVhY3RHcmlkTGF5b3V0IGZyb20gXCJyZWFjdC1ncmlkLWxheW91dFwiO1xuaW1wb3J0IENoaWxkV2luZG93IGZyb20gJy4vQ2hpbGRXaW5kb3cnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljTGF5b3V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxheW91dFwiLFxuICAgIGNvbXBhY3RUeXBlOiBudWxsLFxuICAgIGl0ZW1zOiA1LFxuICAgIHJvd0hlaWdodDogNTAsXG4gICAgcmVzaXplSGFuZGxlczogWydzJywnZScsJ3NlJ10sXG4gICAgbWFyZ2luOiBbMzAsIDMwXSxcbiAgICBvbkxheW91dENoYW5nZTogZnVuY3Rpb24oKSB7fSxcbiAgICBjb2xzOiA2XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5fZGl2ID0gbnVsbDtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGF5b3V0czogdGhpcy5wcm9wcy5sYXlvdXRzQ29uZmlnLmxheW91dHMsXG4gICAgICB3aWRnZXRzOiB0aGlzLnByb3BzLmxheW91dHNDb25maWcud2lkZ2V0cyxcbiAgICB9O1xuICB9XG5cbiAgZG9SZXNpemUgPSAoZW50cmllcykgPT4ge1xuICAgIGZvciAobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICh0aGlzLm1vdW50ZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGg6IGVudHJ5LmNvbnRlbnRSZWN0LndpZHRofSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vaHR0cHM6Ly93ZWIuZGV2L3Jlc2l6ZS1vYnNlcnZlci9cbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMucm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIodGhpcy5kb1Jlc2l6ZSk7XG4gICAgdGhpcy5yby5vYnNlcnZlKHRoaXMuX2Rpdik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZygnY29tcG9uZW50V2lsbFVubW91bnQnKVxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMucm8udW5vYnNlcnZlKHRoaXMuX2RpdilcbiAgfVxuXG4gIGdlbmVyYXRlRE9NKCkge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgcmV0dXJuIF8ubWFwKF8ucmFuZ2UodGhpcy5wcm9wcy5pdGVtcyksIGZ1bmN0aW9uKGkpIHtcbiAgICAgIHZhciB0ZXh0ID0gJ0V4dCBKUyBDaGlsZCAnICsgaVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e2JvcmRlcjonMXB4IHNvbGlkIGxpZ2h0Z3JheScsYm94U2hhZG93Oic1cHggNXB4IDVweCAjODg4ODg4J319IGtleT17aX0+XG4gICAgICAgICAgPENoaWxkV2luZG93IHdpZGdldD17bWUuc3RhdGUud2lkZ2V0c1tpXX0gaWQ9e2l9IHRleHQ9e3RleHR9PjwvQ2hpbGRXaW5kb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTGF5b3V0Q2hhbmdlKGxheW91dCkge1xuICAgIGNvbnNvbGUubG9nKCdvbkxheW91dENoYW5nZScsbGF5b3V0KVxuICAgIHRoaXMucHJvcHMub25MYXlvdXRDaGFuZ2UobGF5b3V0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2dyaWQtbGF5b3V0LXJvb3QnXG4gICAgICAgIHJlZj17YyA9PiAodGhpcy5fZGl2ID0gYyl9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyxcbiAgICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gICAgICAgICAgYm94U2hhZG93Oic1cHggMTBweCAxOHB4ICM4ODg4ODgnXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnN0YXRlLndpZHRoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgPFJlYWN0R3JpZExheW91dFxuICAgICAgICAgIGxheW91dD17dGhpcy5zdGF0ZS5sYXlvdXRzfVxuICAgICAgICAgIHdpZHRoPXt0aGlzLnN0YXRlLndpZHRofVxuICAgICAgICAgIG9uUmVzaXplPXsobGF5b3V0LCBvbGRSZXNpemVJdGVtLCBsLCBwbGFjZWhvbGRlciwgZSwgbm9kZSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvblJlc3ppZScpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsYXlvdXQ6IGxheW91dH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLmdlbmVyYXRlRE9NKCl9XG4gICAgICAgIDwvUmVhY3RHcmlkTGF5b3V0PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDaGlsZFdpbmRvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGV4dENvbnRhaW5lciA9IHsgY3VycmVudDogbnVsbCB9XG5cbiAgY29uc3QgZG9SZXNpemUgPSAoZW50cmllcykgPT4ge1xuICAgIGlmIChleHRDb250YWluZXIuY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKGV4dENvbnRhaW5lci5jdXJyZW50LnVwZGF0ZUxheW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGV4dENvbnRhaW5lci5jdXJyZW50LnVwZGF0ZUxheW91dCgpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ25ld1dpZGdldENvbnRhaW5lciBpcyBudWxsJylcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IEV4dCA9IHdpbmRvd1snRXh0J11cbiAgICBjb25zdCBjdXJyZW50UmVmID0gY29udGVudFJlZi5jdXJyZW50XG4gICAgaWYgKEV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmV3RGl2LnN0eWxlLndpZHRoID0gXCIyMDBweFwiO1xuICAgICAgbmV3RGl2LnN0eWxlLmhlaWdodCA9IFwiMjAwcHhcIjtcbiAgICAgIG5ld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIjtcbiAgICAgIG5ld0Rpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNoaWxkIGRpdiBvZiBHcmlkIEl0ZW1cIik7XG4gICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3Q29udGVudCk7XG4gICAgICBjb250ZW50UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV4dENvbnRhaW5lci5jdXJyZW50ID0gRXh0LmNyZWF0ZSgnRXh0LkNvbnRhaW5lcicsIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGxheW91dDogJ2ZpdCcsXG4gICAgICByZW5kZXJUbzogY29udGVudFJlZi5jdXJyZW50XG4gICAgfSk7XG4gICAgZXh0Q29udGFpbmVyLmN1cnJlbnQuYWRkKHByb3BzLndpZGdldC5yZW5kZXJhYmxlKVxuXG4gICAgdmFyIHJvID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRvUmVzaXplKTtcbiAgICByby5vYnNlcnZlKGNvbnRlbnRSZWYuY3VycmVudClcbiAgICByZXR1cm4gKCkgPT4gcm8udW5vYnNlcnZlKGN1cnJlbnRSZWYpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZ2wtcmVuZGVyZWQtZXh0LWNvbnRhaW5lclwiXG4gICAgICByZWY9e2NvbnRlbnRSZWZ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250U2l6ZTogJzExcHgnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgYm9yZGVyOiAnMHB4IHNvbGlkIGJsdWUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgICB9fVxuICAgID5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoaWxkV2luZG93OyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBEZXNjcmlwdGlvbihwcm9wcykge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiAgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidyb3cnfX0+XG4gICAgICA8ZGl2PlxuICAgIHJlYWN0IGZlYXR1cmVzIHVzZWQ6PGJyLz48YnIvPlxuICAgIC0gZnVuY3Rpb24gY29tcG9uZW50PGJyLz5cbiAgICAtIHVzZVN0YXRlPGJyLz5cbiAgICAtIHVzZUVmZmVjdDxici8+XG4gICAgLSB1c2VSZWY8YnIvPlxuICAgIC0gY29uZGl0aW9uYWwgSlNYPGJyLz5cbiAgICA8YnIvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDonNDBweCd9fT5cbiAgICBucG0gcGFja2FnZXMgdXNlZDo8YnIvPjxici8+XG4gICAgLSBAbWF0ZXJpYWwtdWkvY29yZTxici8+XG4gICAgLSBAc2VuY2hhL3NlbmNoYS1ncmlkPGJyLz5cbiAgICAtIGF4aW9zPGJyLz5cbiAgICAtIGZvcm1pazxici8+XG4gICAgLSBmb3JtaWstbWF0ZXJpYWwtdWk8YnIvPlxuICAgIC0gc3R5bGVkLWNvbXBvbmVudHM8YnIvPlxuICAgIC0geXVwPGJyLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYXNlLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvdHRvbTogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxuYmFja2dyb3VuZDogbGlnaHRncmF5O1xucG9zaXRpb246IGFic29sdXRlO1xucmlnaHQ6IDA7XG5ib3R0b206IDA7XG5tYXJnaW46IDMwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBWZXJ0aWNhbCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG5gO1xuXG5leHBvcnQgY29uc3QgU3BsaXR0ZXIgPSBzdHlsZWQuZGl2YFxuY3Vyc29yOiBjb2wtcmVzaXplO1xuYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAnIGhlaWdodD0nMzAnPjxwYXRoIGQ9J00yIDAgdjMwIE01IDAgdjMwIE04IDAgdjMwJyBmaWxsPSdub25lJyBzdHJva2U9J2JsYWNrJy8+PC9zdmc+XCIpO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbndpZHRoOiAxMHB4O1xuaGVpZ2h0OiAxMDAlO1xuXG4vKiBQcmV2ZW50IHRoZSBicm93c2VyJ3MgYnVpbHQtaW4gZHJhZyBmcm9tIGludGVyZmVyaW5nICovXG4tbW96LXVzZXItc2VsZWN0OiBub25lO1xuLW1zLXVzZXItc2VsZWN0OiBub25lO1xudXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuXG5cblxuXG5leHBvcnQgY29uc3QgQ2hpbGQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbmA7XG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBGaWVsZEZvcm1payhwcm9wcykge1xuICAvLyBjb25zdCBlcnJvcnMgPSBwcm9wcy5lcnJvcnNcbiAgLy8gLy9jb25zdCByZWZ2YWwgPSBwcm9wcy5yZWZ2YWwoeyByZXF1aXJlZDogcHJvcHMucmVxdWlyZWQgfSlcbiAgLy8gY29uc3QgcmVmdmFsID0gcHJvcHMucmVmdmFsXG4gIGNvbnN0IHVwcGVyTmFtZSA9IHByb3BzLm5hbWVcbiAgY29uc3QgbG93ZXJOYW1lID0gcHJvcHMubmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgLy8gY29uc3QgcGxhY2Vob2xkZXIgPSBgVHlwZSAke3VwcGVyTmFtZX0gaGVyZWBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICAgIDxMYWJlbCBodG1sRm9yPXtsb3dlck5hbWV9Pnt1cHBlck5hbWV9Ontwcm9wcy5yZXF1aXJlZCAmJiA8UmVxdWlyZWQ+KjwvUmVxdWlyZWQ+fTwvTGFiZWw+XG5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XG4gICAgICBuYW1lPXtsb3dlck5hbWV9XG4gICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfVxuICAgICAgb25CbHVyPXtwcm9wcy5oYW5kbGVCbHVyfVxuICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlcy5lbWFpbH1cbiAgICAvPlxuICAgIDxNZXNzYWdlPntwcm9wcy5lcnJvcnNbbG93ZXJOYW1lXSAmJiBwcm9wcy50b3VjaGVkW2xvd2VyTmFtZV0gJiYgcHJvcHMuZXJyb3JzW2xvd2VyTmFtZV19PC9NZXNzYWdlPlxuICAgIDwvPlxuICApXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gRmllbGQocHJvcHMpIHtcbiAgY29uc3QgZXJyb3JzID0gcHJvcHMuZXJyb3JzXG4gIC8vY29uc3QgcmVmdmFsID0gcHJvcHMucmVmdmFsKHsgcmVxdWlyZWQ6IHByb3BzLnJlcXVpcmVkIH0pXG4gIGNvbnN0IHJlZnZhbCA9IHByb3BzLnJlZnZhbFxuICBjb25zdCB1cHBlck5hbWUgPSBwcm9wcy5uYW1lXG4gIGNvbnN0IGxvd2VyTmFtZSA9IHByb3BzLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJycpXG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gYFR5cGUgJHt1cHBlck5hbWV9IGhlcmVgXG4gIHJldHVybiAoXG4gICAgPEZpZWxkR3JvdXA+XG4gICAgICA8TGFiZWwgaHRtbEZvcj17bG93ZXJOYW1lfT57dXBwZXJOYW1lfTp7cHJvcHMucmVxdWlyZWQgJiYgPFJlcXVpcmVkPio8L1JlcXVpcmVkPn08L0xhYmVsPlxuICAgICAgPElucHV0IHJlZj17cmVmdmFsfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IG5hbWU9e2xvd2VyTmFtZX0gaWQ9e2xvd2VyTmFtZX0+PC9JbnB1dD5cbiAgICAgIDxNZXNzYWdlPntlcnJvcnNbbG93ZXJOYW1lXSAmJiA8c3Bhbj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9zcGFuPn08L01lc3NhZ2U+XG4gICAgPC9GaWVsZEdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGaWVsZEVuZChwcm9wcykge1xuICBjb25zdCBlcnJvcnMgPSBwcm9wcy5lcnJvcnNcbiAgY29uc3QgcmVmdmFsID0gcHJvcHMucmVmdmFsKHsgcmVxdWlyZWQ6IHByb3BzLnJlcXVpcmVkIH0pXG4gIGNvbnN0IHVwcGVyTmFtZSA9IHByb3BzLm5hbWVcbiAgY29uc3QgbG93ZXJOYW1lID0gcHJvcHMubmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJylcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBgVHlwZSAke3VwcGVyTmFtZX0gaGVyZWBcbiAgcmV0dXJuIChcbiAgICA8RmllbGRHcm91cEVuZD5cbiAgICAgIDxMYWJlbCBodG1sRm9yPXtsb3dlck5hbWV9Pnt1cHBlck5hbWV9Ontwcm9wcy5yZXF1aXJlZCAmJiA8UmVxdWlyZWQ+KjwvUmVxdWlyZWQ+fTwvTGFiZWw+XG4gICAgICA8SW5wdXQgcmVmPXtyZWZ2YWx9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gbmFtZT17bG93ZXJOYW1lfSBpZD17bG93ZXJOYW1lfT48L0lucHV0PlxuICAgICAgPE1lc3NhZ2U+e2Vycm9yc1tsb3dlck5hbWVdICYmIDxzcGFuPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L3NwYW4+fTwvTWVzc2FnZT5cbiAgICA8L0ZpZWxkR3JvdXBFbmQ+XG4gIClcbn1cblxuXG4vLyBleHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbi8vICAgcGFkZGluZzogMjBweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4vLyAgIGZvbnQtc2l6ZTogMzJweDtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gYDtcblxuLy8gZXhwb3J0IGNvbnN0IEZvcm1Hcm91cCA9IHN0eWxlZC5kaXZgXG4vLyBcdGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vIFx0d2lkdGg6IDMwMHB4O1xuLy8gXHRtYXJnaW46IDUwcHggYXV0bztcbi8vIGA7XG5cbmV4cG9ydCBjb25zdCBQYWdlID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OjEwMCU7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XG4gIGJvcmRlcjoxcHggc29saWQgbGlnaHRncmF5O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZpZWxkR3JvdXAgPSBzdHlsZWQuZGl2YFxueGZsZXg6MTtcbnhkaXNwbGF5OmZsZXg7XG54anVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcbnhwYWRkaW5nOjAgMCAwIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRmllbGRHcm91cEVuZCA9IHN0eWxlZC5kaXZgXG5mbGV4OjE7XG5wYWRkaW5nOjAgMjBweCAwIDA7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgeHBhZGRpbmc6IDAgMCAwIDEwcHg7XG5cbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcbiAgcGFkZGluZzoxMHB4O1xuICBib3JkZXItYm90dG9tOjBweCBzb2xpZCBsaWdodGdyYXk7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYXNlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OjUwcHg7XG4gIHhib3JkZXItcmFkaXVzOiAyMnB4O1xuICB4YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjIgMTQ5IDE1NiksIHJnYig4IDg3IDkxKSk7XG5gO1xuXG5cblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuXHRtYXJnaW4tYm90dG9tOiAwLjBlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgUmVxdWlyZWQgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogcmVkO1xuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuXHRwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuXHRjb2xvcjogYmxhY2s7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0d2lkdGg6IDEwMCU7XG4gIHhtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIHhtYXJnaW46IDAgMTBweCAwIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVzc2FnZSA9IHN0eWxlZC5sYWJlbGBcbiAgaGVpZ2h0OiAxNHB4O1xuXHR4bWFyZ2luLWJvdHRvbTogMC4wZW07XG5cdGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDEycHg7XG5gO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTQtMSEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9wb3N0Y3NzIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNC0xIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi9pbmRleC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNC0xIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcE9yaWcgZnJvbSAnLi9BcHBPcmlnJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0IEJhc2ljTGF5b3V0IGZyb20gJy4vQmFzaWNMYXlvdXQnO1xuaW1wb3J0ICcuL2luZGV4LmNzcydcblxuLy8gdmFyIGxheW91dHNDb25maWcgPSB7XG4vLyAgIGxheW91dHM6ICBbXG4vLyAgICAge1wieFwiOjAsXCJ5XCI6MCxcIndcIjoyLFwiaFwiOjUsXCJpXCI6XCIwXCJ9LFxuLy8gICAgIHtcInhcIjoyLFwieVwiOjAsXCJ3XCI6MixcImhcIjo1LFwiaVwiOlwiMVwifSxcbi8vICAgICB7XCJ4XCI6NCxcInlcIjowLFwid1wiOjIsXCJoXCI6NSxcImlcIjpcIjJcIn0sXG4vLyAgICAge1wieFwiOjAsXCJ5XCI6NSxcIndcIjozLFwiaFwiOjUsXCJpXCI6XCIzXCJ9LFxuLy8gICAgIHtcInhcIjozLFwieVwiOjUsXCJ3XCI6MyxcImhcIjo1LFwiaVwiOlwiNFwifVxuLy8gICBdLFxuLy8gICB3aWRnZXRzOiBbXG4vLyAgICAge3JlbmRlcmFibGU6IG51bGx9LFxuLy8gICAgIHtyZW5kZXJhYmxlOiBudWxsfSxcbi8vICAgICB7cmVuZGVyYWJsZTogbnVsbH0sXG4vLyAgICAge3JlbmRlcmFibGU6IG51bGx9LFxuLy8gICAgIHtyZW5kZXJhYmxlOiBudWxsfVxuLy8gICBdXG4vLyB9XG4vLzxCYXNpY0xheW91dCBsYXlvdXRzQ29uZmlnPXtsYXlvdXRzQ29uZmlnfS8+LFxuLy9jb25zb2xlLmxvZygnaW4gcmVhY3QgbW9kdWxlJylcbi8vY29uc29sZS5sb2coJ0V4dCBub3QgZm91bmQnKVxuXG5pZiAod2luZG93WydFeHQnXSA9PT0gdW5kZWZpbmVkKSB7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwT3JpZy8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbiAgKTtcbn1cbmVsc2Uge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcbiAgICB3aW5kb3dbJ0V4dCddLnJlYWN0ID0ge1xuICAgICAgQXBwT3JpZzogQXBwT3JpZyxcbiAgICAgIEFwcDogQXBwLFxuICAgICAgQmFzaWNMYXlvdXQ6IEJhc2ljTGF5b3V0LFxuICAgICAgUmVhY3Q6IFJlYWN0LFxuICAgICAgUmVhY3RET006IFJlYWN0RE9NXG4gICAgfVxuICB9LCBmYWxzZSk7XG59XG5cbi8vY29uc29sZS5sb2cod2luZG93WydFeHQnXSlcbi8vdmFyIGVsZW1lbnRBcHAgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCx7fSxudWxsKSJdLCJzb3VyY2VSb290IjoiIn0=