const CHUNK_PUBLIC_PATH = "server/pages/index.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_03457d._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_react-icons_fa_index_mjs_275a22._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_react-icons_lib_6322da._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@swc_helpers_cjs_ac5ba3._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__26df43._.js");
runtime.loadChunk("server/chunks/ssr/src_styles_globals_070f83.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/src/pages/index.js [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/src/pages/_document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/src/pages/_app.js [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
