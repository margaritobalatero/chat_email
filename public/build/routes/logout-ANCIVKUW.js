import {
  require_session
} from "/build/_shared/chunk-DMZCSMEQ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  createHotContext
<<<<<<<< HEAD:public/build/routes/logout-ANCIVKUW.js
} from "/build/_shared/chunk-5CIESMCK.js";
========
} from "/build/_shared/chunk-EPOZTH2Z.js";
>>>>>>>> 6859e7f620ba277e3da9a6cee79bcf5dcc465b38:public/build/routes/logout-YOSY3U3K.js
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/logout.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/logout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/logout.tsx"
  );
  import.meta.hot.lastModified = "1760608824507.8008";
}
function Logout() {
  return null;
}
_c = Logout;
var _c;
$RefreshReg$(_c, "Logout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Logout as default
};
<<<<<<<< HEAD:public/build/routes/logout-ANCIVKUW.js
//# sourceMappingURL=/build/routes/logout-ANCIVKUW.js.map
========
//# sourceMappingURL=/build/routes/logout-YOSY3U3K.js.map
>>>>>>>> 6859e7f620ba277e3da9a6cee79bcf5dcc465b38:public/build/routes/logout-YOSY3U3K.js
