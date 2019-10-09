require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/html");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/components/helpers");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/html/helpers");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/components/init-components-tag");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("marko/components");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_helpers = __webpack_require__(2),
    marko_classList = marko_helpers.cl,
    marko_componentType = "/marko-webpack$1.0.0/src/components/Wrap/index.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_logo = __webpack_require__(24),
    logo = module_logo.default || module_logo,
    module_favicon = __webpack_require__(25),
    favicon = module_favicon.default || module_favicon,
    marko_attr = marko_helpers.a,
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(__webpack_require__(26)),
    init_components_tag = marko_loadTag(__webpack_require__(3)),
    await_reorderer_tag = marko_loadTag(__webpack_require__(27)),
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width\"><link rel=\"icon\"" +
    marko_attr("href", favicon) +
    "><title>");

  marko_dynamicTag(out, input.title, null, null, null, null, __component, "6");

  out.w(" — Gavin McFarland</title>");

  marko_dynamicTag(out, input.styles, null, null, null, null, __component, "7");

  out.w("<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/default.min.css\"></head><body" +
    marko_classAttr(marko_classList([
    "px-10",
    input.class
  ])) +
    ">");

  component_globals_tag({}, out);

  out.w("<header class=\"p-10 w-viewport\"><a href=\"/\" class=\"w-shrink\"><img" +
    marko_attr("src", logo) +
    "></a><nav><a href=\"/about\" class=\"ml-8\">About</a></nav></header><main class=\"w-viewport\"><div class=\"wrapper mx-auto max-w-4xl\">");

  marko_dynamicTag(out, input.body, null, null, null, null, __component, "17");

  out.w("</div></main><footer class=\"p-10 remove-margin w-viewport f-1\"><p>Limitless Loop &copy; 2019</p><nav><a href=\"https://github.com/limitlessloop\" class=\"ml-8\">Github</a><a href=\"https://dribbble.com/limitlessloop\" class=\"ml-8\">Dribbble</a><a href=\"https://twitter.com/gavinmcfarland\" class=\"ml-8\">Twitter</a></nav>");

  marko_dynamicTag(out, input.footer, null, null, null, null, __component, "24");

  out.w("</footer>");

  marko_dynamicTag(out, input.scripts, null, null, null, null, __component, "25");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css",
      {
          type: "css",
          code: "@import \"../../styles\";\n\n\thtml {\n\t\theight: 100%;\n\t}\n\n\tbody {\n\t\theight: 100%;\n\t\tdisplay: flex;\n\n\t\tflex-direction: column;\n\t\t& > main {\n\t\t\t@extend .w-grow;\n\t\t\tpadding-left: inherit;\n\t\t\tpadding-right: inherit;\n\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\n\t\t\t& .wrapper {\n\t\t\t\tbox-sizing: content-box;\n\t\t\t\tpadding-left: inherit;\n\t\t\t\tpadding-right: inherit;\n\t\t\t\tflex-basis: 100%;\n\t\t\t\tflex-shrink: 0;\n\t\t\t}\n\t\t}\n\t\t& > header,\n\t\t& > footer {\n\t\t\t@extend .w-shrink, .flex;\n\t\t\tjustify-content: space-between;\n\n\t\t\talign-items: center;\n\n\t\t\t& > * {\n\t\t\t\tmargin-top: unset;\n\t\t\t\tmargin-bottom: unset;\n\t\t\t}\n\t\t}\n\t\t& > :matches(header, footer) > nav {\n\t\t\tdisplay: flex;\n\t\t\t@extend .w-shrink;\n\t\t}\n\t}",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/components/Wrap/index.marko",
    tags: [
      "marko/dist/core-tags/components/component-globals-tag",
      "marko/dist/core-tags/components/init-components-tag",
      "marko/dist/core-tags/core/await/reorderer-renderer"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  getBundleName: function(){return "Client"},
  entries: {"404_78An":{"Client":{"css":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.0491e585.css"],"js":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js","404_78An.c6247857.js"],"map":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js.map","404_78An.c6247857.js.map"]}},"about_kzxx":{"Client":{"css":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.0491e585.css"],"js":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js","about_kzxx.67245d8d.js"],"map":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js.map","about_kzxx.67245d8d.js.map"]}},"cv_tq48":{"Client":{"css":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.0491e585.css","cv_tq48.d2689723.css"],"js":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js","cv_tq48.2c989f98.js"],"map":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js.map","cv_tq48.2c989f98.js.map"]}},"post_ffL2":{"Client":{"css":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.0491e585.css"],"js":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js","post_ffL2.c93501e6.js"],"map":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js.map","post_ffL2.c93501e6.js.map"]}},"projects_3eZ0":{"Client":{"css":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.0491e585.css","projects_3eZ0.bf10103b.css"],"js":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js","projects_3eZ0.65e40997.js"],"map":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js.map","projects_3eZ0.65e40997.js.map"]}},"templates_IwU3":{"Client":{"css":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.0491e585.css","templates_IwU3.016e8b65.css"],"js":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js","templates_IwU3.9a7b26b8.js"],"map":["404_78An~about_kzxx~cv_tq48~post_ffL2~projects_3eZ0~templates_IwU3.2d92cbc4.js.map","templates_IwU3.9a7b26b8.js.map"]}}}
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const jdown = __webpack_require__(9);
const v = __webpack_require__(22);

async function getContent() {
	return await jdown(process.cwd() + '/content/', { parseMd: false }).then(content => {
		for (let index in content.posts) {
			content.posts[index]
			// If the slug isn't specified in the file then create it using the title
			if (!content.posts[index].slug) {
				content.posts[index].slug = v.kebabCase(content.posts[index].title)
			}
		}

		content.posts.map(function(post) {
			post.url = '/posts/' + post.slug
		})

		console.log("production")
		if (true) {

			content.posts = content.posts.filter(post => post.status === 'publish')

		}
		// createDb('api/db.json', content)

		return content
	});

}

const api = getContent()

// module.exports = {
// 	api: function() {
// 		return api
// 	},
// 	getContent: function() {
// 		return getContent()
// 	}
// }

const myModule = module.exports = api;
myModule.getContent = function() {
	return getContent()
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/404.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_components_module = __webpack_require__(4),
    components_module = module_components_module.default || module_components_module,
    writeInitComponentsCode = module_components_module.writeInitComponentsCode,
    template = __webpack_require__(23),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_helpers = __webpack_require__(2),
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    init_components_tag = marko_loadTag(__webpack_require__(3));

function renderAssets(out) {
  const assets = entries["404_78An"][getBundleName(out.global)];
  const target = out.stream || out;
  
  
  if (assets) {
    target.write(`<script>window.__mwp__=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      target.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    target.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        target.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/404.marko",
    tags: [
      "./404.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("jdown");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var MarkdownIt = __webpack_require__(29)

var md = new MarkdownIt({ html: true })
md.use(__webpack_require__(30)).use(__webpack_require__(31))

function removeIndentation(str) {
	var indentMatches = /\s*\n(\s+)/.exec(str);
	if (indentMatches) {
		var indent = indentMatches[1];
		str = str.replace(new RegExp("^" + indent, "mg"), "");
	}
	return str;
}

module.exports = function(string) {
	var bodyText = removeIndentation(string);
	var html = md.render(bodyText);
	return html;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_helpers = __webpack_require__(2),
    marko_classList = marko_helpers.cl,
    marko_componentType = "/marko-webpack$1.0.0/src/components/Section/index.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_dynamicTag = marko_helpers.d,
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<section" +
    marko_classAttr(marko_classList([
    "bt pt-8 pb-10",
    input.class
  ])) +
    ">");

  marko_dynamicTag(out, input, null, null, null, null, __component, "1");

  out.w("</section>");
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/marko-webpack$1.0.0/src/components/Section/index.marko"
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-slash");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("serve-static");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/post.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_components_module = __webpack_require__(4),
    components_module = module_components_module.default || module_components_module,
    writeInitComponentsCode = module_components_module.writeInitComponentsCode,
    template = __webpack_require__(28),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_helpers = __webpack_require__(2),
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    init_components_tag = marko_loadTag(__webpack_require__(3));

function renderAssets(out) {
  const assets = entries["post_ffL2"][getBundleName(out.global)];
  const target = out.stream || out;
  
  
  if (assets) {
    target.write(`<script>window.__mwp__=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      target.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    target.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        target.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/post.marko",
    tags: [
      "./post.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/about.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_components_module = __webpack_require__(4),
    components_module = module_components_module.default || module_components_module,
    writeInitComponentsCode = module_components_module.writeInitComponentsCode,
    template = __webpack_require__(32),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_helpers = __webpack_require__(2),
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    init_components_tag = marko_loadTag(__webpack_require__(3));

function renderAssets(out) {
  const assets = entries["about_kzxx"][getBundleName(out.global)];
  const target = out.stream || out;
  
  
  if (assets) {
    target.write(`<script>window.__mwp__=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      target.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    target.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        target.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/about.marko",
    tags: [
      "./about.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/projects.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_components_module = __webpack_require__(4),
    components_module = module_components_module.default || module_components_module,
    writeInitComponentsCode = module_components_module.writeInitComponentsCode,
    template = __webpack_require__(33),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_helpers = __webpack_require__(2),
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    init_components_tag = marko_loadTag(__webpack_require__(3));

function renderAssets(out) {
  const assets = entries["projects_3eZ0"][getBundleName(out.global)];
  const target = out.stream || out;
  
  
  if (assets) {
    target.write(`<script>window.__mwp__=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      target.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    target.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        target.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/projects.marko",
    tags: [
      "./projects.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/cv.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_components_module = __webpack_require__(4),
    components_module = module_components_module.default || module_components_module,
    writeInitComponentsCode = module_components_module.writeInitComponentsCode,
    template = __webpack_require__(34),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_helpers = __webpack_require__(2),
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    init_components_tag = marko_loadTag(__webpack_require__(3));

function renderAssets(out) {
  const assets = entries["cv_tq48"][getBundleName(out.global)];
  const target = out.stream || out;
  
  
  if (assets) {
    target.write(`<script>window.__mwp__=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      target.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    target.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        target.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/cv.marko",
    tags: [
      "./cv.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/index.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_components_module = __webpack_require__(4),
    components_module = module_components_module.default || module_components_module,
    writeInitComponentsCode = module_components_module.writeInitComponentsCode,
    template = __webpack_require__(36),
    module_MARKOWEBPACKMANIFEST_module = __webpack_require__(6),
    MARKOWEBPACKMANIFEST_module = module_MARKOWEBPACKMANIFEST_module.default || module_MARKOWEBPACKMANIFEST_module,
    getBundleName = module_MARKOWEBPACKMANIFEST_module.getBundleName,
    entries = module_MARKOWEBPACKMANIFEST_module.entries,
    marko_helpers = __webpack_require__(2),
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    init_components_tag = marko_loadTag(__webpack_require__(3));

function renderAssets(out) {
  const assets = entries["templates_IwU3"][getBundleName(out.global)];
  const target = out.stream || out;
  
  
  if (assets) {
    target.write(`<script>window.__mwp__=${JSON.stringify(__webpack_require__.p)}`)

    if (assets.js) {
      target.write(
        `;(function(b,h){var e=[],c=0;h.forEach(function(d,f){var a=b.createElement("link");a.relList&&a.relList.supports&&a.relList.supports("preload")?(a.href=d,a.rel="preload",a.as="script",a.addEventListener("load",function(){e[f]=d;if(c===f)for(var a;a=e[c];c++){var g=b.createElement("script");g.src=a;b.head.appendChild(g)}}),b.head.appendChild(a)):(a=b.createElement("script"),a.src=d,a.defer=!0,b.head.appendChild(a))})})(document,${
          JSON.stringify(assets.js.map(js => __webpack_require__.p+js))
        })`
      );
    }

    target.write("</script>")

    if (assets.css) {
      assets.css.forEach(css => {
        target.write(
          `<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p+css)}>`
        );
      });
    }
  }
};

function outFlushOverride() {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.flush();
};

function outEndOverride(data, encoding, callback) {
  renderAssets(this);
  this.end = this.___end;
  this.flush = this.___flush;
  this.end(data, encoding, callback);
};

function render(input, out, __component, component, state) {
  var data = input;

  out.___flush = out.flush;

  out.___end = out.end;

  out.flush = outFlushOverride;

  out.end = outEndOverride;

  marko_dynamicTag(out, template, function() {
    return input;
  }, null, null, null, __component, "0");

  init_components_tag({}, out);
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/index.marko",
    tags: [
      "./index.marko",
      "marko/dist/core-tags/components/init-components-tag"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_slash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var express_slash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_slash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var jdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serve_static__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _templates_404_marko__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _templates_404_marko__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_templates_404_marko__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _templates_post_marko__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _templates_post_marko__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_templates_post_marko__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _templates_about_marko__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _templates_about_marko__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_templates_about_marko__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _templates_projects_marko__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var _templates_projects_marko__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_templates_projects_marko__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _templates_cv_marko__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var _templates_cv_marko__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_templates_cv_marko__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _templates_index_marko__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20);
/* harmony import */ var _templates_index_marko__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_templates_index_marko__WEBPACK_IMPORTED_MODULE_11__);




// Enable gzip compression for all HTTP responses

// Allow all of the generated files to be served up by Express









const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = process.env.PORT || 8080;

app.enable('strict routing');
app.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());
app.use(express_slash__WEBPACK_IMPORTED_MODULE_1___default()());
app.use("/static", serve_static__WEBPACK_IMPORTED_MODULE_5___default()("dist/client"));

_api__WEBPACK_IMPORTED_MODULE_3___default.a.then(content => {

	app.get("/", (req, res) => {
		_templates_index_marko__WEBPACK_IMPORTED_MODULE_11___default.a.render({ posts: content.posts }, res);
	});

	app.get("/cv", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		_api__WEBPACK_IMPORTED_MODULE_3___default.a.then(content => {
			_templates_cv_marko__WEBPACK_IMPORTED_MODULE_10___default.a.render({ ...content.cv }, res);
		})

	});

	app.get("/projects", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		_templates_projects_marko__WEBPACK_IMPORTED_MODULE_9___default.a.render({}, res);
	});

	app.get("/about", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		_templates_about_marko__WEBPACK_IMPORTED_MODULE_8___default.a.render({}, res);
	});

	app.get("/posts/:post", (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");

		let err = true;

		for (let post of content.posts) {

			// If page exists then render page
			if (req.params.post === post.slug) {
				_templates_post_marko__WEBPACK_IMPORTED_MODULE_7___default.a.render(post, res);
				err = false
			}
		}

		// If page doesn't exist then render 404
		if (err) {
			_templates_404_marko__WEBPACK_IMPORTED_MODULE_6___default.a.render({}, res.status(404));
		}

	});

	// Render 404 for any unkown routes
	app.use(function(req, res) {
		_templates_404_marko__WEBPACK_IMPORTED_MODULE_6___default.a.render({}, res.status(404));
	});

	// Start the server
	app.listen(port, err => {
		if (err) {
			throw err;
		}

		if (port !== "0") {
			console.log(`Listening on port ${port}`);
		}
	});
})


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("voca");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/404.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    Wrap_template = __webpack_require__(5),
    marko_helpers = __webpack_require__(2),
    marko_loadTag = marko_helpers.t,
    Wrap_tag = marko_loadTag(Wrap_template);

function render(input, out, __component, component, state) {
  var data = input;

  Wrap_tag({
      title: {
          renderBody: function(out) {
            out.w("404");
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<div><h1>404 Page not found</h1>\n</div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/404.marko",
    tags: [
      "../components/Wrap/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "/static/d476f1d8c363530f380097d540bd2e97.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "/static/02ff70d348df4dab178b8709da3151e6.png";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/components/component-globals-tag");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/core-tags/core/await/reorderer-renderer");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/post.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_markdown = __webpack_require__(10),
    markdown = module_markdown.default || module_markdown,
    marko_helpers = __webpack_require__(2),
    marko_escapeXml = marko_helpers.x,
    marko_str = marko_helpers.s,
    Wrap_template = __webpack_require__(5),
    marko_loadTag = marko_helpers.t,
    Wrap_tag = marko_loadTag(Wrap_template);

function render(input, out, __component, component, state) {
  var data = input;

  Wrap_tag({
      class: "page__cv",
      title: {
          renderBody: function(out) {
            out.w(marko_escapeXml(input.title));
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<h1>" +
              marko_escapeXml(input.title) +
              "</h1>" +
              marko_str(markdown(input.contents)));
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/post.marko",
    tags: [
      "../components/Wrap/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("markdown-it");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("markdown-it-attrs");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("markdown-it-prism");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/about.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    Wrap_template = __webpack_require__(5),
    marko_helpers = __webpack_require__(2),
    marko_loadTag = marko_helpers.t,
    Wrap_tag = marko_loadTag(Wrap_template);

function render(input, out, __component, component, state) {
  var data = input;

  Wrap_tag({
      title: {
          renderBody: function(out) {
            out.w("About me");
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<div><p>I work with companies to improve their digital products and services. I focus primarily on product design and user research. I devote a lot of my spare time to exploring how design decisions can be automated. When I’m not creating things, I like to cook, indulge in retro gaming and feed my lego obsession.</p>\n<p><a href=\"/cv\">View CV</a></p>\n</div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-webpack$1.0.0/src/templates/about.marko",
    tags: [
      "../components/Wrap/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/projects.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    Wrap_template = __webpack_require__(5),
    marko_helpers = __webpack_require__(2),
    marko_loadTag = marko_helpers.t,
    Wrap_tag = marko_loadTag(Wrap_template);

function render(input, out, __component, component, state) {
  var data = input;

  Wrap_tag({
      title: {
          renderBody: function(out) {
            out.w("Projects");
          }
        },
      body: {
          renderBody: function(out) {
            out.w("<div class=\"w-viewport hero\">Projects</div><div><p>## An example of a heading</p>\n<p>The designers job it's not seeing you be the Gatekeeper of your product full stop and the gate the designer becomes the Gatekeeper when all the decisions around the products are seen through the eyes of the designers visuals and cups and prototypes. I wonder if this is because many people see the relationship with the designer as a one dimensional relationship where the clients tells the designer what they want and expects the designer to be a person who was someone who can use the tools they cant.</p>\n<h2>What dreams may come</h2>\n<p>When your faced with deadlines and you Need to build the  right product.   when you build the product from decisions alone and you have several other decisions you could have made how do you know you've made the right decision? [ it's not enough to think you Are successful from some an uplift in engagement,   increase in conversion, increase in revenue because. This doesn't answer whether you are meeting the needs of users it also doesn't tell you ] If something is unsuccessful either from tracking the conversion or a b testing and finding significant decrease in Analytics where do you look to to understand how to better your product if the only thing you have to go bye is an absolute conclusion.  we can of course try to find the data behind these conversions through the weeds of documentation and by talking but this puts the needs of the user or the learning further away from ourselves to be able to insure the building  the right product.</p>\n<h2>Something else</h2>\n<p>Secondly the needs of the user often only change gradually where us the why don't you see those needs on map could change many times. if you don't capture the user's needs then how can you accurately assess whether your meeting them.</p>\n<p>Often people won't realise they're giving their design A specification rather than requirements or resources to do their job. I don't really know why this is however I have a French that it has something to do with the way that we imagine the solution to problems or the way we perceive how to achieve things.  perhaps when we solving a problem we don't always know what the problem is just that something isn't right therefore it's much easier to explain a problem in the shape of a solution there must be some reason why people do this so regularly. Perhaps it's a feature of our brains to save time. [ there must be some psychology to it]</p>\n</div>");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".hero {\n\t\theight: 30vw;\n\t}",
          virtualPath: "./projects.marko.css",
          path: "./projects.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/projects.marko",
    tags: [
      "../components/Wrap/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/cv.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_markdown = __webpack_require__(10),
    markdown = module_markdown.default || module_markdown,
    marko_forEachProp = __webpack_require__(35),
    marko_helpers = __webpack_require__(2),
    marko_escapeXml = marko_helpers.x,
    marko_str = marko_helpers.s,
    Section_template = __webpack_require__(11),
    marko_loadTag = marko_helpers.t,
    Section_tag = marko_loadTag(Section_template),
    Wrap_template = __webpack_require__(5),
    Wrap_tag = marko_loadTag(Wrap_template);

function render(input, out, __component, component, state) {
  var data = input;

  Wrap_tag({
      class: "page__cv",
      title: {
          renderBody: function(out) {
            out.w("CV");
          }
        },
      body: {
          renderBody: function(out) {
            var $for$0 = 0;

            marko_forEachProp(input.sections, function(heading, content) {
              var $keyScope$0 = "[" + (($for$0++) + "]");

              Section_tag({
                  renderBody: function(out) {
                    out.w("<h2>" +
                      marko_escapeXml(heading) +
                      "</h2><div>" +
                      marko_str(markdown(content)) +
                      "</div>");
                  }
                }, out, __component, "3" + $keyScope$0);
            });
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "@import \"../styles\";\n\n\t.page__cv {\n\t\t& h2 {\n\t\t\t@extend .f-caps, .f-0, .md\\:w-200;\n\t\t}\n\t\t& section {\n\t\t\t@extend .md\\:flex;\n\t\t}\n\t}",
          virtualPath: "./cv.marko.css",
          path: "./cv.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/cv.marko",
    tags: [
      "../components/Section/index.marko",
      "../components/Wrap/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("marko/dist/runtime/helper-forEachProperty");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {// Compiled using marko@4.18.10 - DO NOT EDIT


var marko_template = module.exports = __webpack_require__(0).t(__filename),
    marko_componentType = "/marko-webpack$1.0.0/src/templates/index.marko",
    components_helpers = __webpack_require__(1),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    Section_template = __webpack_require__(11),
    marko_helpers = __webpack_require__(2),
    marko_loadTag = marko_helpers.t,
    Section_tag = marko_loadTag(Section_template),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    Wrap_template = __webpack_require__(5),
    Wrap_tag = marko_loadTag(Wrap_template);

function render(input, out, __component, component, state) {
  var data = input;

  Wrap_tag({
      title: {
          renderBody: function(out) {
            out.w("Gavin McFarland - Portfolio of Product Designer, Interaction Designer and Software Engineer");
          }
        },
      body: {
          renderBody: function(out) {
            Section_tag({
                renderBody: function(out) {
                  out.w("<h1>Simply helping you <br>create a great service</h1><p class=\"f-4\">Hi I'm <em>Gavin</em>, and I work with people who want a great experience for their customers but need the help of someone who can describe how their product should behave and feel like. I work to tackle the hairy problems that are keeping you from reaching your best and laying the foundation for a better service that you can build on for years to come.</p>");
                }
              }, out, __component, "3");

            Section_tag({
                renderBody: function(out) {
                  out.w("<h2 class=\"f-5\">Articles</h2><ul class=\"f-4 links\">");

                  var $for$0 = 0;

                  marko_forEach(input.posts, function(post, index) {
                    var $keyScope$0 = "[" + (($for$0++) + "]");

                    out.w("<li><a" +
                      marko_attr("href", post.url) +
                      ">" +
                      marko_escapeXml(post.title) +
                      "</a></li>");
                  });

                  out.w("</ul>");
                }
              }, out, __component, "8");

            Section_tag({
                renderBody: function(out) {
                  out.w("<h2 class=\"f-3\">About Me</h2><p style=\"line-height: 1.6\">I'm a designer at heart, but I've always been a problem solver. I select the right tools and the right methodologies to improve a situation the best I can. I strive to make things better. My forte lies in product design and user research. I devote a lot of my spare time to exploring how design decisions can be automated.</p><p style=\"line-height: 1.6\">When I’m not creating things, I like to cook, indulge in retro gaming and feed my lego obsession.</p>");
                }
              }, out, __component, "13");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".links li {\n\t\tmargin-bottom: 8px;\n\t}",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/marko-webpack$1.0.0/src/templates/index.marko",
    tags: [
      "../components/Section/index.marko",
      "../components/Wrap/index.marko"
    ]
  };

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map