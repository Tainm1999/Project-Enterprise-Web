"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/submissions/getIdeas/[id]";
exports.ids = ["pages/api/submissions/getIdeas/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/submissions/getIdeas/[id].js":
/*!************************************************!*\
  !*** ./pages/api/submissions/getIdeas/[id].js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ideasOfSubmission)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function ideasOfSubmission(req, res) {\n    try {\n        if (req.method === \"GET\") {\n            const foundedIdeasOfSubmission = await prisma.idea.findMany({\n                where: {\n                    submissionId: +req.query.id,\n                    deleted: false\n                },\n                include: {\n                    category: {\n                        select: {\n                            name: true\n                        }\n                    },\n                    submission: {\n                        select: {\n                            closureDate: true\n                        }\n                    }\n                }\n            });\n            if (foundedIdeasOfSubmission.length === 0) return res.status(200).send({\n                message: \"This submission has no idea!\"\n            });\n            let totalLike = 0;\n            let totalDislike = 0;\n            let totalView = 0;\n            for(let i = 0; i < foundedIdeasOfSubmission.length; i++){\n                const element = foundedIdeasOfSubmission[i];\n                const allLike = await prisma.reaction.count({\n                    where: {\n                        reaction: true,\n                        ideaId: element.id,\n                        deleted: false\n                    }\n                });\n                const allDislike = await prisma.reaction.count({\n                    where: {\n                        reaction: false,\n                        ideaId: element.id,\n                        deleted: false\n                    }\n                });\n                const allView = await prisma.view.count({\n                    where: {\n                        ideaId: element.id,\n                        deleted: false\n                    }\n                });\n                totalLike += allLike;\n                totalDislike += allDislike;\n                totalView += allView;\n                element.totalLike = totalLike;\n                element.totalDislike = totalDislike;\n                element.totalView = totalView;\n                totalLike = 0;\n                totalDislike = 0;\n                totalView = 0;\n            }\n            return res.status(200).send(foundedIdeasOfSubmission);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWlzc2lvbnMvZ2V0SWRlYXMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDN0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtBQUNoQixlQUFlRSxpQkFBaUIsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN6RCxHQUFHLENBQUMsQ0FBQztRQUNILEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7WUFDekIsS0FBSyxDQUFDQyx3QkFBd0IsR0FBRyxLQUFLLENBQUNMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztnQkFDM0RDLEtBQUssRUFBRSxDQUFDO29CQUNOQyxZQUFZLEdBQUdQLEdBQUcsQ0FBQ1EsS0FBSyxDQUFDQyxFQUFFO29CQUMzQkMsT0FBTyxFQUFFLEtBQUs7Z0JBQ2hCLENBQUM7Z0JBQ0RDLE9BQU8sRUFBRSxDQUFDO29CQUNSQyxRQUFRLEVBQUUsQ0FBQzt3QkFDVEMsTUFBTSxFQUFFLENBQUM7NEJBQ1BDLElBQUksRUFBRSxJQUFJO3dCQUNaLENBQUM7b0JBQ0gsQ0FBQztvQkFDREMsVUFBVSxFQUFFLENBQUM7d0JBQ1hGLE1BQU0sRUFBRSxDQUFDOzRCQUNQRyxXQUFXLEVBQUUsSUFBSTt3QkFDbkIsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQ0QsRUFBRSxFQUFFYix3QkFBd0IsQ0FBQ2MsTUFBTSxLQUFLLENBQUMsRUFDdkMsTUFBTSxDQUFDaEIsR0FBRyxDQUNQaUIsTUFBTSxDQUFDLEdBQUcsRUFDVkMsSUFBSSxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUE4QjtZQUFDLENBQUM7WUFDckQsR0FBRyxDQUFDQyxTQUFTLEdBQUcsQ0FBQztZQUNqQixHQUFHLENBQUNDLFlBQVksR0FBRyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLENBQUM7WUFDakIsR0FBRyxDQUFFLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHckIsd0JBQXdCLENBQUNjLE1BQU0sRUFBRU8sQ0FBQyxHQUFJLENBQUM7Z0JBQ3pELEtBQUssQ0FBQ0MsT0FBTyxHQUFHdEIsd0JBQXdCLENBQUNxQixDQUFDO2dCQUMxQyxLQUFLLENBQUNFLE9BQU8sR0FBRyxLQUFLLENBQUM1QixNQUFNLENBQUM2QixRQUFRLENBQUNDLEtBQUssQ0FBQyxDQUFDO29CQUMzQ3RCLEtBQUssRUFBRSxDQUFDO3dCQUNOcUIsUUFBUSxFQUFFLElBQUk7d0JBQ2RFLE1BQU0sRUFBRUosT0FBTyxDQUFDaEIsRUFBRTt3QkFDbEJDLE9BQU8sRUFBRSxLQUFLO29CQUNoQixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsS0FBSyxDQUFDb0IsVUFBVSxHQUFHLEtBQUssQ0FBQ2hDLE1BQU0sQ0FBQzZCLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7b0JBQzlDdEIsS0FBSyxFQUFFLENBQUM7d0JBQ05xQixRQUFRLEVBQUUsS0FBSzt3QkFDZkUsTUFBTSxFQUFFSixPQUFPLENBQUNoQixFQUFFO3dCQUNsQkMsT0FBTyxFQUFFLEtBQUs7b0JBQ2hCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxLQUFLLENBQUNxQixPQUFPLEdBQUcsS0FBSyxDQUFDakMsTUFBTSxDQUFDa0MsSUFBSSxDQUFDSixLQUFLLENBQUMsQ0FBQztvQkFDdkN0QixLQUFLLEVBQUMsQ0FBQzt3QkFDTHVCLE1BQU0sRUFBRUosT0FBTyxDQUFDaEIsRUFBRTt3QkFDbEJDLE9BQU8sRUFBRSxLQUFLO29CQUNoQixDQUFDO2dCQUNILENBQUM7Z0JBQ0RXLFNBQVMsSUFBSUssT0FBTztnQkFDcEJKLFlBQVksSUFBSVEsVUFBVTtnQkFDMUJQLFNBQVMsSUFBSVEsT0FBTztnQkFDcEJOLE9BQU8sQ0FBQ0osU0FBUyxHQUFHQSxTQUFTO2dCQUM3QkksT0FBTyxDQUFDSCxZQUFZLEdBQUdBLFlBQVk7Z0JBQ25DRyxPQUFPLENBQUNGLFNBQVMsR0FBR0EsU0FBUztnQkFDN0JGLFNBQVMsR0FBRyxDQUFDO2dCQUNiQyxZQUFZLEdBQUcsQ0FBQztnQkFDaEJDLFNBQVMsR0FBRyxDQUFDO1lBQ2YsQ0FBQztZQUNELE1BQU0sQ0FBQ3RCLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ2hCLHdCQUF3QjtRQUN0RCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRThCLEtBQUssRUFBRSxDQUFDO1FBQ2ZoQyxHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNjLEtBQUs7SUFDNUIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnRlcnByaXNlLy4vcGFnZXMvYXBpL3N1Ym1pc3Npb25zL2dldElkZWFzL1tpZF0uanM/MGJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpZGVhc09mU3VibWlzc2lvbihyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICBjb25zdCBmb3VuZGVkSWRlYXNPZlN1Ym1pc3Npb24gPSBhd2FpdCBwcmlzbWEuaWRlYS5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIHN1Ym1pc3Npb25JZDogK3JlcS5xdWVyeS5pZCxcclxuICAgICAgICAgIGRlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWJtaXNzaW9uOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICAgIGNsb3N1cmVEYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZvdW5kZWRJZGVhc09mU3VibWlzc2lvbi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgLnN0YXR1cygyMDApXHJcbiAgICAgICAgICAuc2VuZCh7IG1lc3NhZ2U6IFwiVGhpcyBzdWJtaXNzaW9uIGhhcyBubyBpZGVhIVwiIH0pO1xyXG4gICAgICBsZXQgdG90YWxMaWtlID0gMDtcclxuICAgICAgbGV0IHRvdGFsRGlzbGlrZSA9IDA7XHJcbiAgICAgIGxldCB0b3RhbFZpZXcgPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvdW5kZWRJZGVhc09mU3VibWlzc2lvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBmb3VuZGVkSWRlYXNPZlN1Ym1pc3Npb25baV07XHJcbiAgICAgICAgY29uc3QgYWxsTGlrZSA9IGF3YWl0IHByaXNtYS5yZWFjdGlvbi5jb3VudCh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICByZWFjdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgaWRlYUlkOiBlbGVtZW50LmlkLFxyXG4gICAgICAgICAgICBkZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgYWxsRGlzbGlrZSA9IGF3YWl0IHByaXNtYS5yZWFjdGlvbi5jb3VudCh7XHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICByZWFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGlkZWFJZDogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgZGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGFsbFZpZXcgPSBhd2FpdCBwcmlzbWEudmlldy5jb3VudCh7XHJcbiAgICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgIGlkZWFJZDogZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgZGVsZXRlZDogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRvdGFsTGlrZSArPSBhbGxMaWtlO1xyXG4gICAgICAgIHRvdGFsRGlzbGlrZSArPSBhbGxEaXNsaWtlO1xyXG4gICAgICAgIHRvdGFsVmlldyArPSBhbGxWaWV3XHJcbiAgICAgICAgZWxlbWVudC50b3RhbExpa2UgPSB0b3RhbExpa2U7XHJcbiAgICAgICAgZWxlbWVudC50b3RhbERpc2xpa2UgPSB0b3RhbERpc2xpa2U7XHJcbiAgICAgICAgZWxlbWVudC50b3RhbFZpZXcgPSB0b3RhbFZpZXdcclxuICAgICAgICB0b3RhbExpa2UgPSAwO1xyXG4gICAgICAgIHRvdGFsRGlzbGlrZSA9IDA7XHJcbiAgICAgICAgdG90YWxWaWV3ID0gMDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZm91bmRlZElkZWFzT2ZTdWJtaXNzaW9uKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaWRlYXNPZlN1Ym1pc3Npb24iLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJmb3VuZGVkSWRlYXNPZlN1Ym1pc3Npb24iLCJpZGVhIiwiZmluZE1hbnkiLCJ3aGVyZSIsInN1Ym1pc3Npb25JZCIsInF1ZXJ5IiwiaWQiLCJkZWxldGVkIiwiaW5jbHVkZSIsImNhdGVnb3J5Iiwic2VsZWN0IiwibmFtZSIsInN1Ym1pc3Npb24iLCJjbG9zdXJlRGF0ZSIsImxlbmd0aCIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwidG90YWxMaWtlIiwidG90YWxEaXNsaWtlIiwidG90YWxWaWV3IiwiaSIsImVsZW1lbnQiLCJhbGxMaWtlIiwicmVhY3Rpb24iLCJjb3VudCIsImlkZWFJZCIsImFsbERpc2xpa2UiLCJhbGxWaWV3IiwidmlldyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/submissions/getIdeas/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/submissions/getIdeas/[id].js"));
module.exports = __webpack_exports__;

})();