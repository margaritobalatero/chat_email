import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  createHotContext
<<<<<<<< HEAD:public/build/routes/_index-V7UZJ473.js
} from "/build/_shared/chunk-5CIESMCK.js";
========
} from "/build/_shared/chunk-EPOZTH2Z.js";
>>>>>>>> 6859e7f620ba277e3da9a6cee79bcf5dcc465b38:public/build/routes/_index-LRP5T3DG.js
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1760608824506.8008";
}
function Index() {
  return null;
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
<<<<<<<< HEAD:public/build/routes/_index-V7UZJ473.js
//# sourceMappingURL=/build/routes/_index-V7UZJ473.js.map
========
//# sourceMappingURL=/build/routes/_index-LRP5T3DG.js.map
>>>>>>>> 6859e7f620ba277e3da9a6cee79bcf5dcc465b38:public/build/routes/_index-LRP5T3DG.js
