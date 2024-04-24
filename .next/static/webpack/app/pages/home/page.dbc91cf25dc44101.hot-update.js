"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/home/page",{

/***/ "(app-pages-browser)/./src/app/redux/features/jobs/jobsSlice.ts":
/*!**************************************************!*\
  !*** ./src/app/redux/features/jobs/jobsSlice.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDashBoardData: function() { return /* binding */ getDashBoardData; },\n/* harmony export */   jobs: function() { return /* binding */ jobs; },\n/* harmony export */   refreshEmptyTabData: function() { return /* binding */ refreshEmptyTabData; },\n/* harmony export */   updateDashBoardData: function() { return /* binding */ updateDashBoardData; },\n/* harmony export */   uploadMatterFiles: function() { return /* binding */ uploadMatterFiles; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _configurations_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../configurations/api */ \"(app-pages-browser)/./src/app/configurations/api/index.ts\");\n/* harmony import */ var _configurations_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../configurations/api/config */ \"(app-pages-browser)/./src/app/configurations/api/config.ts\");\n\n\n\n/*Initial State of the Application/*/ const initialState = {\n    dashBoardData: null,\n    dashBoadLoading: false,\n    dashBoadUpdateLoading: false\n};\n/*Define an impletentation function for Components Interaction*/ /*GetClients*/ const getDashBoardData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"jobs/getDashBoardData\", async (data, thunkAPI)=>{\n    // data = {\"dateFrom\":\"2024-02-09T18:30:00.000Z\",\"jobType\":\"all\"}\n    let url = encodeURI(_configurations_api_config__WEBPACK_IMPORTED_MODULE_1__.App.services.dashboard);\n    return _configurations_api__WEBPACK_IMPORTED_MODULE_0__.API.post(url, {}, null, null);\n});\nconst updateDashBoardData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"jobs/updateDashBoardData\", async (data, thunkAPI)=>{\n    // data = {\"dateFrom\":\"2024-02-09T18:30:00.000Z\",\"jobType\":\"all\"}\n    let url = encodeURI(_configurations_api_config__WEBPACK_IMPORTED_MODULE_1__.App.services.updateDashboard);\n    return _configurations_api__WEBPACK_IMPORTED_MODULE_0__.API.post(url, data, null, null);\n});\nconst uploadMatterFiles = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"cmrecon/uploadMatterFiles\", async (data, thunkAPI)=>{\n    let url = encodeURI(_configurations_api_config__WEBPACK_IMPORTED_MODULE_1__.App.services.fileupload);\n    return _configurations_api__WEBPACK_IMPORTED_MODULE_0__.API.post(url, data, null, null);\n});\n/*Slice Of the Jobs*/ const jobs = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"jobs\",\n    initialState,\n    reducers: {\n        refreshEmptyTabData: (state, action)=>{\n            state.dashBoardData = {};\n        }\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(getDashBoardData.pending, (state)=>{\n            state.dashBoadLoading = true;\n        }).addCase(getDashBoardData.fulfilled, (state, action)=>{\n            state.dashBoadLoading = false;\n            state.dashBoardData = action.payload.data || null;\n        }).addCase(getDashBoardData.rejected, (state, action)=>{\n            state.dashBoadLoading = false;\n            throw new Error(action.error.message);\n        });\n    }\n});\nconst { refreshEmptyTabData } = jobs.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (jobs.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVkdXgvZmVhdHVyZXMvam9icy9qb2JzU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUU7QUFDZjtBQUNPO0FBQ3pELG1DQUFtQyxHQUNuQyxNQUFNSSxlQUFvQjtJQUV4QkMsZUFBZTtJQUVmQyxpQkFBaUI7SUFFakJDLHVCQUF1QjtBQUl6QjtBQUVBLDhEQUE4RCxHQUU5RCxZQUFZLEdBQ0wsTUFBTUMsbUJBQW1CUCxrRUFBZ0JBLENBQzlDLHlCQUNBLE9BQU9RLE1BQVdDO0lBQ2hCLGlFQUFpRTtJQUNqRSxJQUFJQyxNQUFNQyxVQUFVVCwyREFBR0EsQ0FBQ1UsUUFBUSxDQUFDQyxTQUFTO0lBQzFDLE9BQU9aLG9EQUFHQSxDQUFDYSxJQUFJLENBQUNKLEtBQUssQ0FBQyxHQUFHLE1BQU07QUFDakMsR0FDQTtBQUVLLE1BQU1LLHNCQUFzQmYsa0VBQWdCQSxDQUNqRCw0QkFDQSxPQUFPUSxNQUFXQztJQUNoQixpRUFBaUU7SUFDakUsSUFBSUMsTUFBTUMsVUFBVVQsMkRBQUdBLENBQUNVLFFBQVEsQ0FBQ0ksZUFBZTtJQUNoRCxPQUFPZixvREFBR0EsQ0FBQ2EsSUFBSSxDQUFDSixLQUFLRixNQUFNLE1BQU07QUFDbkMsR0FDQTtBQUVLLE1BQU1TLG9CQUFvQmpCLGtFQUFnQkEsQ0FBQyw2QkFBNkIsT0FBT1EsTUFBVUM7SUFFOUYsSUFBSUMsTUFBTUMsVUFBVVQsMkRBQUdBLENBQUNVLFFBQVEsQ0FBQ00sVUFBVTtJQUMzQyxPQUFPakIsb0RBQUdBLENBQUNhLElBQUksQ0FBQ0osS0FBS0YsTUFBTSxNQUFNO0FBRW5DLEdBQUU7QUFFRixtQkFBbUIsR0FDWixNQUFNVyxPQUFPcEIsNkRBQVdBLENBQUM7SUFDOUJxQixNQUFNO0lBQ05qQjtJQUNBa0IsVUFBVTtRQUdSQyxxQkFBcUIsQ0FBQ0MsT0FBT0M7WUFDM0JELE1BQU1uQixhQUFhLEdBQUcsQ0FBQztRQUN6QjtJQUNGO0lBQ0FxQixlQUFlLENBQUNDO1FBQ2RBLFFBRUdDLE9BQU8sQ0FBQ3BCLGlCQUFpQnFCLE9BQU8sRUFBRSxDQUFDTDtZQUNsQ0EsTUFBTWxCLGVBQWUsR0FBRztRQUMxQixHQUNDc0IsT0FBTyxDQUFDcEIsaUJBQWlCc0IsU0FBUyxFQUFFLENBQUNOLE9BQU9DO1lBQzNDRCxNQUFNbEIsZUFBZSxHQUFHO1lBQ3hCa0IsTUFBTW5CLGFBQWEsR0FBR29CLE9BQU9NLE9BQU8sQ0FBQ3RCLElBQUksSUFBSTtRQUMvQyxHQUNDbUIsT0FBTyxDQUFDcEIsaUJBQWlCd0IsUUFBUSxFQUFFLENBQUNSLE9BQU9DO1lBQzFDRCxNQUFNbEIsZUFBZSxHQUFHO1lBQ3hCLE1BQU0sSUFBSTJCLE1BQU1SLE9BQU9TLEtBQUssQ0FBQ0MsT0FBTztRQUN0QztJQUdKO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRVosbUJBQW1CLEVBQUUsR0FBR0gsS0FBS2dCLE9BQU8sQ0FBQztBQUNwRCwrREFBZWhCLEtBQUtpQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZWR1eC9mZWF0dXJlcy9qb2JzL2pvYnNTbGljZS50cz8yYjFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZ3VyYXRpb25zL2FwaVwiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlndXJhdGlvbnMvYXBpL2NvbmZpZ1wiO1xyXG4vKkluaXRpYWwgU3RhdGUgb2YgdGhlIEFwcGxpY2F0aW9uLyovXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogYW55ID0ge1xyXG4gXHJcbiAgZGFzaEJvYXJkRGF0YTogbnVsbCxcclxuXHJcbiAgZGFzaEJvYWRMb2FkaW5nOiBmYWxzZSxcclxuXHJcbiAgZGFzaEJvYWRVcGRhdGVMb2FkaW5nOiBmYWxzZVxyXG5cclxuICBcclxuIFxyXG59O1xyXG5cclxuLypEZWZpbmUgYW4gaW1wbGV0ZW50YXRpb24gZnVuY3Rpb24gZm9yIENvbXBvbmVudHMgSW50ZXJhY3Rpb24qL1xyXG5cclxuLypHZXRDbGllbnRzKi9cclxuZXhwb3J0IGNvbnN0IGdldERhc2hCb2FyZERhdGEgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiam9icy9nZXREYXNoQm9hcmREYXRhXCIsXHJcbiAgYXN5bmMgKGRhdGE6IGFueSwgdGh1bmtBUEkpID0+IHtcclxuICAgIC8vIGRhdGEgPSB7XCJkYXRlRnJvbVwiOlwiMjAyNC0wMi0wOVQxODozMDowMC4wMDBaXCIsXCJqb2JUeXBlXCI6XCJhbGxcIn1cclxuICAgIGxldCB1cmwgPSBlbmNvZGVVUkkoQXBwLnNlcnZpY2VzLmRhc2hib2FyZCk7XHJcbiAgICByZXR1cm4gQVBJLnBvc3QodXJsLCB7fSwgbnVsbCwgbnVsbCk7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZURhc2hCb2FyZERhdGEgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiam9icy91cGRhdGVEYXNoQm9hcmREYXRhXCIsXHJcbiAgYXN5bmMgKGRhdGE6IGFueSwgdGh1bmtBUEkpID0+IHtcclxuICAgIC8vIGRhdGEgPSB7XCJkYXRlRnJvbVwiOlwiMjAyNC0wMi0wOVQxODozMDowMC4wMDBaXCIsXCJqb2JUeXBlXCI6XCJhbGxcIn1cclxuICAgIGxldCB1cmwgPSBlbmNvZGVVUkkoQXBwLnNlcnZpY2VzLnVwZGF0ZURhc2hib2FyZCk7XHJcbiAgICByZXR1cm4gQVBJLnBvc3QodXJsLCBkYXRhLCBudWxsLCBudWxsKTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgdXBsb2FkTWF0dGVyRmlsZXMgPSBjcmVhdGVBc3luY1RodW5rKCdjbXJlY29uL3VwbG9hZE1hdHRlckZpbGVzJywgYXN5bmMgKGRhdGE6YW55LCB0aHVua0FQSSkgPT4ge1xyXG5cclxuICBsZXQgdXJsID0gZW5jb2RlVVJJKEFwcC5zZXJ2aWNlcy5maWxldXBsb2FkKTtcclxuICByZXR1cm4gQVBJLnBvc3QodXJsLCBkYXRhLCBudWxsLCBudWxsKTtcclxuXHJcbn0pXHJcblxyXG4vKlNsaWNlIE9mIHRoZSBKb2JzKi9cclxuZXhwb3J0IGNvbnN0IGpvYnMgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJqb2JzXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgIFxyXG4gIFxyXG4gICAgcmVmcmVzaEVtcHR5VGFiRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZGFzaEJvYXJkRGF0YSA9IHt9XHJcbiAgICB9XHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlclxyXG4gICAgIFxyXG4gICAgICAuYWRkQ2FzZShnZXREYXNoQm9hcmREYXRhLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmRhc2hCb2FkTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGdldERhc2hCb2FyZERhdGEuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgc3RhdGUuZGFzaEJvYWRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuZGFzaEJvYXJkRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGEgfHwgbnVsbDtcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoZ2V0RGFzaEJvYXJkRGF0YS5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzdGF0ZS5kYXNoQm9hZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYWN0aW9uLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9KVxyXG4gICAgIFxyXG4gICAgICBcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHJlZnJlc2hFbXB0eVRhYkRhdGEgfSA9IGpvYnMuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgam9icy5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiQVBJIiwiQXBwIiwiaW5pdGlhbFN0YXRlIiwiZGFzaEJvYXJkRGF0YSIsImRhc2hCb2FkTG9hZGluZyIsImRhc2hCb2FkVXBkYXRlTG9hZGluZyIsImdldERhc2hCb2FyZERhdGEiLCJkYXRhIiwidGh1bmtBUEkiLCJ1cmwiLCJlbmNvZGVVUkkiLCJzZXJ2aWNlcyIsImRhc2hib2FyZCIsInBvc3QiLCJ1cGRhdGVEYXNoQm9hcmREYXRhIiwidXBkYXRlRGFzaGJvYXJkIiwidXBsb2FkTWF0dGVyRmlsZXMiLCJmaWxldXBsb2FkIiwiam9icyIsIm5hbWUiLCJyZWR1Y2VycyIsInJlZnJlc2hFbXB0eVRhYkRhdGEiLCJzdGF0ZSIsImFjdGlvbiIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJFcnJvciIsImVycm9yIiwibWVzc2FnZSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/redux/features/jobs/jobsSlice.ts\n"));

/***/ })

});