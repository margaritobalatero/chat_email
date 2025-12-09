import {
  createHotContext
<<<<<<<< HEAD:public/build/routes/ws-QB2IBPEN.js
} from "/build/_shared/chunk-5CIESMCK.js";
========
} from "/build/_shared/chunk-EPOZTH2Z.js";
>>>>>>>> 6859e7f620ba277e3da9a6cee79bcf5dcc465b38:public/build/routes/ws-RAZNCKPY.js
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-PNG5AS42.js";

// app/routes/ws.ts
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/ws.ts"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/ws.ts"
  );
  import.meta.hot.lastModified = "1760608824507.8008";
}
function WebSocketRoute() {
  return null;
}
_c = WebSocketRoute;
var _c;
$RefreshReg$(_c, "WebSocketRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WebSocketRoute as default
};
<<<<<<<< HEAD:public/build/routes/ws-QB2IBPEN.js
//# sourceMappingURL=/build/routes/ws-QB2IBPEN.js.map
========
//# sourceMappingURL=/build/routes/ws-RAZNCKPY.js.map
>>>>>>>> 6859e7f620ba277e3da9a6cee79bcf5dcc465b38:public/build/routes/ws-RAZNCKPY.js
