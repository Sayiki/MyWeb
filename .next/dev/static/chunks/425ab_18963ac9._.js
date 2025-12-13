(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/MyWeb/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react/cjs/react.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
            }
        });
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
    }
    function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function noop() {}
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, oldElement.props, oldElement._owner, oldElement._debugStack, oldElement._debugTask);
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var ioInfo = payload._ioInfo;
            null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
            ioInfo = payload._result;
            var thenable = ioInfo();
            thenable.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) {
                    payload._status = 1;
                    payload._result = moduleObject;
                    var _ioInfo = payload._ioInfo;
                    null != _ioInfo && (_ioInfo.end = performance.now());
                    void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
                }
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) {
                    payload._status = 2;
                    payload._result = error;
                    var _ioInfo2 = payload._ioInfo;
                    null != _ioInfo2 && (_ioInfo2.end = performance.now());
                    void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
            });
            ioInfo = payload._ioInfo;
            if (null != ioInfo) {
                ioInfo.value = thenable;
                var displayName = thenable.displayName;
                "string" === typeof displayName && (ioInfo.name = displayName);
            }
            -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status) return ioInfo = payload._result, void 0 === ioInfo && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ioInfo), "default" in ioInfo || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ioInfo), ioInfo.default;
        throw payload._result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
    }
    function enqueueTask(task) {
        if (null === enqueueTaskImpl) try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
            enqueueTaskImpl = function(callback) {
                !1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
            };
        }
        return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue) if (0 !== queue.length) try {
            flushActQueue(queue);
            enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
            return;
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
        if (!isFlushing) {
            isFlushing = !0;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do {
                        ReactSharedInternals.didUsePromise = !1;
                        var continuation = callback(!1);
                        if (null !== continuation) {
                            if (ReactSharedInternals.didUsePromise) {
                                queue[i] = callback;
                                queue.splice(0, i);
                                return;
                            }
                            callback = continuation;
                        } else break;
                    }while (1)
                }
                queue.length = 0;
            } catch (error) {
                queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally{
                isFlushing = !1;
            }
        }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
        }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    for(fnName in deprecatedAPIs)deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                error: error
            });
            if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] && "function" === typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].emit) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].emit("uncaughtException", error);
            return;
        }
        console.error(error);
    }, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
            return queueMicrotask(callback);
        });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
            return resolveDispatcher().useMemoCache(size);
        }
    });
    var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = fnName;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
        try {
            var result = callback();
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
                didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            });
            return {
                then: function(resolve, reject) {
                    didAwaitActCall = !0;
                    thenable.then(function(returnValue) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        if (0 === prevActScopeDepth) {
                            try {
                                flushActQueue(queue), enqueueTask(function() {
                                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                });
                            } catch (error$0) {
                                ReactSharedInternals.thrownErrors.push(error$0);
                            }
                            if (0 < ReactSharedInternals.thrownErrors.length) {
                                var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                                ReactSharedInternals.thrownErrors.length = 0;
                                reject(_thrownError);
                            }
                        } else resolve(returnValue);
                    }, function(error) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                    });
                }
            };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
            then: function(resolve, reject) {
                didAwaitActCall = !0;
                0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
                })) : resolve(returnValue$jscomp$0);
            }
        };
    };
    exports.cache = function(fn) {
        return function() {
            return fn.apply(null, arguments);
        };
    };
    exports.cacheSignal = function() {
        return null;
    };
    exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
            var JSCompiler_inline_result;
            a: {
                if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                    JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, props, owner, element._debugStack, element._debugTask);
        for(key = 2; key < arguments.length; key++)validateChildKeys(arguments[key]);
        return props;
    };
    exports.createContext = function(defaultValue) {
        defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
    };
    exports.createElement = function(type, config, children) {
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(type, key, i, getOwner(), propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        ctor = {
            _status: -1,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: ctor,
            _init: lazyInitializer
        }, ioInfo = {
            name: "lazy",
            start: -1,
            end: -1,
            value: null,
            owner: null,
            debugStack: Error("react-stack-top-frame"),
            debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [
            {
                awaited: ioInfo
            }
        ];
        return lazyType;
    };
    exports.memo = function(type, compare) {
        null == type && console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = new Set();
        ReactSharedInternals.T = currentTransition;
        try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
            reportGlobalError(error);
        } finally{
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
    };
    exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
        return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
        null == create && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useEffect(create, deps);
    };
    exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
        return resolveDispatcher().useTransition();
    };
    exports.version = "19.2.1";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/cjs/react.development.js [client] (ecmascript)");
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, !1, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, !0, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react/jsx-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/cjs/react-jsx-runtime.development.js [client] (ecmascript)");
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react/cjs/react-jsx-dev-runtime.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/cjs/react-jsx-dev-runtime.development.js [client] (ecmascript)");
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        needsPaint = !1;
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return needsPaint ? !0 : exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, needsPaint = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_requestPaint = function() {
        needsPaint = !0;
    };
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline())));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Documents/GitHub/MyWeb/node_modules/scheduler/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/scheduler/cjs/scheduler.development.js [client] (ecmascript)");
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/lodash.throttle/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */ function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
    });
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = throttle;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/passive-event-listeners.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */ var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
    var listenerName = listener.name;
    if (!listenerName) {
        listenerName = eventName;
        console.warn('Listener must be a named function.');
    }
    if (!attachedListeners.has(eventName)) attachedListeners.set(eventName, new Set());
    var listeners = attachedListeners.get(eventName);
    if (listeners.has(listenerName)) return;
    var supportsPassiveOption = function() {
        var supportsPassiveOption = false;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function get() {
                    supportsPassiveOption = true;
                }
            });
            window.addEventListener('test', null, opts);
        } catch (e) {}
        return supportsPassiveOption;
    }();
    target.addEventListener(eventName, listener, supportsPassiveOption ? {
        passive: true
    } : false);
    listeners.add(listenerName);
};
var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
    target.removeEventListener(eventName, listener);
    attachedListeners.get(eventName).delete(listener.name || eventName);
};
var attachedListeners = new Map();
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-spy.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _lodash = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/lodash.throttle/index.js [client] (ecmascript)");
var _lodash2 = _interopRequireDefault(_lodash);
var _passiveEventListeners = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/passive-event-listeners.js [client] (ecmascript)");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// The eventHandler will execute at a rate of 15fps by default
var eventThrottler = function eventThrottler(eventHandler) {
    var throttleAmount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 66;
    return (0, _lodash2.default)(eventHandler, throttleAmount);
};
var scrollSpy = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function mount(scrollSpyContainer, throttle) {
        if (scrollSpyContainer) {
            var eventHandler = eventThrottler(function(event) {
                scrollSpy.scrollHandler(scrollSpyContainer);
            }, throttle);
            scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
            (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
            return function() {
                (0, _passiveEventListeners.removePassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
                scrollSpy.scrollSpyContainers.splice(scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer), 1);
            };
        }
        return function() {};
    },
    isMounted: function isMounted(scrollSpyContainer) {
        return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
    },
    currentPositionX: function currentPositionX(scrollSpyContainer) {
        if (scrollSpyContainer === document) {
            var supportPageOffset = window.scrollY !== undefined;
            var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
            return supportPageOffset ? window.scrollX : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
        } else {
            return scrollSpyContainer.scrollLeft;
        }
    },
    currentPositionY: function currentPositionY(scrollSpyContainer) {
        if (scrollSpyContainer === document) {
            var supportPageOffset = window.scrollX !== undefined;
            var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
            return supportPageOffset ? window.scrollY : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        } else {
            return scrollSpyContainer.scrollTop;
        }
    },
    scrollHandler: function scrollHandler(scrollSpyContainer) {
        var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
        callbacks.forEach(function(c) {
            return c(scrollSpy.currentPositionX(scrollSpyContainer), scrollSpy.currentPositionY(scrollSpyContainer));
        });
    },
    addStateHandler: function addStateHandler(handler) {
        scrollSpy.spySetState.push(handler);
    },
    addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
        var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];
        if (!container.spyCallbacks) {
            container.spyCallbacks = [];
        }
        container.spyCallbacks.push(handler);
    },
    updateStates: function updateStates() {
        scrollSpy.spySetState.forEach(function(s) {
            return s();
        });
    },
    unmount: function unmount(stateHandler, spyHandler) {
        scrollSpy.scrollSpyContainers.forEach(function(c) {
            return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.indexOf(spyHandler) > -1 && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
        });
        if (scrollSpy.spySetState && scrollSpy.spySetState.length && scrollSpy.spySetState.indexOf(stateHandler) > -1) {
            scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
        }
        document.removeEventListener('scroll', scrollSpy.scrollHandler);
    },
    update: function update() {
        return scrollSpy.scrollSpyContainers.forEach(function(c) {
            return scrollSpy.scrollHandler(c);
        });
    }
};
exports.default = scrollSpy;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/utils.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var updateHash = function updateHash(hash, historyUpdate) {
    var hashVal = hash.indexOf("#") === 0 ? hash.substring(1) : hash;
    var hashToUpdate = hashVal ? "#" + hashVal : "";
    var curLoc = window && window.location;
    var urlToPush = hashToUpdate ? curLoc.pathname + curLoc.search + hashToUpdate : curLoc.pathname + curLoc.search;
    historyUpdate ? history.pushState(history.state, "", urlToPush) : history.replaceState(history.state, "", urlToPush);
};
var getHash = function getHash() {
    return window.location.hash.replace(/^#/, "");
};
var filterElementInContainer = function filterElementInContainer(container) {
    return function(element) {
        return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
    };
};
var isPositioned = function isPositioned(element) {
    return getComputedStyle(element).position !== "static";
};
var getElementOffsetInfoUntil = function getElementOffsetInfoUntil(element, predicate) {
    var offsetTop = element.offsetTop;
    var currentOffsetParent = element.offsetParent;
    while(currentOffsetParent && !predicate(currentOffsetParent)){
        offsetTop += currentOffsetParent.offsetTop;
        currentOffsetParent = currentOffsetParent.offsetParent;
    }
    return {
        offsetTop: offsetTop,
        offsetParent: currentOffsetParent
    };
};
var scrollOffset = function scrollOffset(c, t, horizontal) {
    if (horizontal) {
        return c === document ? t.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(c).position !== "static" ? t.offsetLeft : t.offsetLeft - c.offsetLeft;
    } else {
        if (c === document) {
            return t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        }
        // The offsetParent of an element, according to MDN, is its nearest positioned
        // (an element whose position is anything other than static) ancestor. The offsetTop
        // of an element is taken with respect to its offsetParent which may not neccessarily
        // be its parentElement except the parent itself is positioned.
        // So if containerElement is positioned, then it must be an offsetParent somewhere
        // If it happens that targetElement is a descendant of the containerElement, and there
        // is not intermediate positioned element between the two of them, i.e.
        // targetElement"s offsetParent is the same as the containerElement, then the
        // distance between the two will be the offsetTop of the targetElement.
        // If, on the other hand, there are intermediate positioned elements between the
        // two entities, the distance between the targetElement and the containerElement
        // will be the accumulation of the offsetTop of the element and that of its
        // subsequent offsetParent until the containerElement is reached, since it
        // will also be an offsetParent at some point due to the fact that it is positioned.
        // If the containerElement is not positioned, then it can"t be an offsetParent,
        // which means that the offsetTop of the targetElement would not be with respect to it.
        // However, if the two of them happen to have the same offsetParent, then
        // the distance between them will be the difference between their offsetTop
        // since they are both taken with respect to the same entity.
        // The last resort would be to accumulate their offsetTop until a common
        // offsetParent is reached (usually the document) and taking the difference
        // between the accumulated offsetTops
        if (isPositioned(c)) {
            if (t.offsetParent !== c) {
                var isContainerElementOrDocument = function isContainerElementOrDocument(e) {
                    return e === c || e === document;
                };
                var _getElementOffsetInfo = getElementOffsetInfoUntil(t, isContainerElementOrDocument), offsetTop = _getElementOffsetInfo.offsetTop, offsetParent = _getElementOffsetInfo.offsetParent;
                if (offsetParent !== c) {
                    throw new Error("Seems containerElement is not an ancestor of the Element");
                }
                return offsetTop;
            }
            return t.offsetTop;
        }
        if (t.offsetParent === c.offsetParent) {
            return t.offsetTop - c.offsetTop;
        }
        var isDocument = function isDocument(e) {
            return e === document;
        };
        return getElementOffsetInfoUntil(t, isDocument).offsetTop - getElementOffsetInfoUntil(c, isDocument).offsetTop;
    }
};
exports.default = {
    updateHash: updateHash,
    getHash: getHash,
    filterElementInContainer: filterElementInContainer,
    scrollOffset: scrollOffset
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/smooth.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */ defaultEasing: function defaultEasing(x) {
        if (x < 0.5) {
            return Math.pow(x * 2, 2) / 2;
        }
        return 1 - Math.pow((1 - x) * 2, 2) / 2;
    },
    /*
   * https://gist.github.com/gre/1650294
   */ // no easing, no acceleration
    linear: function linear(x) {
        return x;
    },
    // accelerating from zero velocity
    easeInQuad: function easeInQuad(x) {
        return x * x;
    },
    // decelerating to zero velocity
    easeOutQuad: function easeOutQuad(x) {
        return x * (2 - x);
    },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function easeInOutQuad(x) {
        return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
    },
    // accelerating from zero velocity 
    easeInCubic: function easeInCubic(x) {
        return x * x * x;
    },
    // decelerating to zero velocity π
    easeOutCubic: function easeOutCubic(x) {
        return --x * x * x + 1;
    },
    // acceleration until halfway, then deceleration 
    easeInOutCubic: function easeInOutCubic(x) {
        return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
    },
    // accelerating from zero velocity 
    easeInQuart: function easeInQuart(x) {
        return x * x * x * x;
    },
    // decelerating to zero velocity 
    easeOutQuart: function easeOutQuart(x) {
        return 1 - --x * x * x * x;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function easeInOutQuart(x) {
        return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
    },
    // accelerating from zero velocity
    easeInQuint: function easeInQuint(x) {
        return x * x * x * x * x;
    },
    // decelerating to zero velocity
    easeOutQuint: function easeOutQuint(x) {
        return 1 + --x * x * x * x * x;
    },
    // acceleration until halfway, then deceleration 
    easeInOutQuint: function easeInOutQuint(x) {
        return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
    }
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/cancel-events.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _passiveEventListeners = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/passive-event-listeners.js [client] (ecmascript)");
var events = [
    'mousedown',
    'wheel',
    'touchmove',
    'keydown'
];
exports.default = {
    subscribe: function subscribe(cancelEvent) {
        return typeof document !== 'undefined' && events.forEach(function(event) {
            return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
        });
    }
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-events.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Events = {
    registered: {},
    scrollEvent: {
        register: function register(evtName, callback) {
            Events.registered[evtName] = callback;
        },
        remove: function remove(evtName) {
            Events.registered[evtName] = null;
        }
    }
};
exports.default = Events;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/animate-scroll.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _utils = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/utils.js [client] (ecmascript)");
var _utils2 = _interopRequireDefault(_utils);
var _smooth = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/smooth.js [client] (ecmascript)");
var _smooth2 = _interopRequireDefault(_smooth);
var _cancelEvents = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/cancel-events.js [client] (ecmascript)");
var _cancelEvents2 = _interopRequireDefault(_cancelEvents);
var _scrollEvents = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-events.js [client] (ecmascript)");
var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
 * Gets the easing type from the smooth prop within options.
 */ var getAnimationType = function getAnimationType(options) {
    return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */ var functionWrapper = function functionWrapper(value) {
    return typeof value === 'function' ? value : function() {
        return value;
    };
};
/*
 * Wraps window properties to allow server side rendering
 */ var currentWindowProperties = function currentWindowProperties() {
    if (typeof window !== 'undefined') {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
    }
};
/*
 * Helper function to never extend 60fps on the webpage.
 */ var requestAnimationFrameHelper = function() {
    return currentWindowProperties() || function(callback, element, delay) {
        window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
    };
}();
var makeData = function makeData() {
    return {
        currentPosition: 0,
        startPosition: 0,
        targetPosition: 0,
        progress: 0,
        duration: 0,
        cancel: false,
        target: null,
        containerElement: null,
        to: null,
        start: null,
        delta: null,
        percent: null,
        delayTimeout: null
    };
};
var currentPositionX = function currentPositionX(options) {
    var containerElement = options.data.containerElement;
    if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollLeft;
    } else {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
    }
};
var currentPositionY = function currentPositionY(options) {
    var containerElement = options.data.containerElement;
    if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollTop;
    } else {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }
};
var scrollContainerWidth = function scrollContainerWidth(options) {
    var containerElement = options.data.containerElement;
    if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollWidth - containerElement.offsetWidth;
    } else {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
    }
};
var scrollContainerHeight = function scrollContainerHeight(options) {
    var containerElement = options.data.containerElement;
    if (containerElement && containerElement !== document && containerElement !== document.body) {
        return containerElement.scrollHeight - containerElement.offsetHeight;
    } else {
        var body = document.body;
        var html = document.documentElement;
        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    }
};
var animateScroll = function animateScroll(easing, options, timestamp) {
    var data = options.data;
    // Cancel on specific events
    if (!options.ignoreCancelEvents && data.cancel) {
        if (_scrollEvents2.default.registered['end']) {
            _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
        }
        return;
    }
    ;
    data.delta = Math.round(data.targetPosition - data.startPosition);
    if (data.start === null) {
        data.start = timestamp;
    }
    data.progress = timestamp - data.start;
    data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);
    data.currentPosition = data.startPosition + Math.ceil(data.delta * data.percent);
    if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
        if (options.horizontal) {
            data.containerElement.scrollLeft = data.currentPosition;
        } else {
            data.containerElement.scrollTop = data.currentPosition;
        }
    } else {
        if (options.horizontal) {
            window.scrollTo(data.currentPosition, 0);
        } else {
            window.scrollTo(0, data.currentPosition);
        }
    }
    if (data.percent < 1) {
        var easedAnimate = animateScroll.bind(null, easing, options);
        requestAnimationFrameHelper.call(window, easedAnimate);
        return;
    }
    if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPosition);
    }
};
var setContainer = function setContainer(options) {
    options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};
var animateTopScroll = function animateTopScroll(scrollOffset, options, to, target) {
    options.data = options.data || makeData();
    window.clearTimeout(options.data.delayTimeout);
    var setCancel = function setCancel() {
        options.data.cancel = true;
    };
    _cancelEvents2.default.subscribe(setCancel);
    setContainer(options);
    options.data.start = null;
    options.data.cancel = false;
    options.data.startPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
    options.data.targetPosition = options.absolute ? scrollOffset : scrollOffset + options.data.startPosition;
    if (options.data.startPosition === options.data.targetPosition) {
        if (_scrollEvents2.default.registered['end']) {
            _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPosition);
        }
        return;
    }
    options.data.delta = Math.round(options.data.targetPosition - options.data.startPosition);
    options.data.duration = functionWrapper(options.duration)(options.data.delta);
    options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
    options.data.to = to;
    options.data.target = target;
    var easing = getAnimationType(options);
    var easedAnimate = animateScroll.bind(null, easing, options);
    if (options && options.delay > 0) {
        options.data.delayTimeout = window.setTimeout(function() {
            if (_scrollEvents2.default.registered['begin']) {
                _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
            }
            requestAnimationFrameHelper.call(window, easedAnimate);
        }, options.delay);
        return;
    }
    if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
    }
    requestAnimationFrameHelper.call(window, easedAnimate);
};
var proceedOptions = function proceedOptions(options) {
    options = _extends({}, options);
    options.data = options.data || makeData();
    options.absolute = true;
    return options;
};
var scrollToTop = function scrollToTop(options) {
    animateTopScroll(0, proceedOptions(options));
};
var scrollTo = function scrollTo(toPosition, options) {
    animateTopScroll(toPosition, proceedOptions(options));
};
var scrollToBottom = function scrollToBottom(options) {
    options = proceedOptions(options);
    setContainer(options);
    animateTopScroll(options.horizontal ? scrollContainerWidth(options) : scrollContainerHeight(options), options);
};
var scrollMore = function scrollMore(toPosition, options) {
    options = proceedOptions(options);
    setContainer(options);
    var currentPosition = options.horizontal ? currentPositionX(options) : currentPositionY(options);
    animateTopScroll(toPosition + currentPosition, options);
};
exports.default = {
    animateTopScroll: animateTopScroll,
    getAnimationType: getAnimationType,
    scrollToTop: scrollToTop,
    scrollToBottom: scrollToBottom,
    scrollTo: scrollTo,
    scrollMore: scrollMore
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroller.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _utils = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/utils.js [client] (ecmascript)");
var _utils2 = _interopRequireDefault(_utils);
var _animateScroll = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/animate-scroll.js [client] (ecmascript)");
var _animateScroll2 = _interopRequireDefault(_animateScroll);
var _scrollEvents = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-events.js [client] (ecmascript)");
var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var __mapped = {};
var __activeLink = void 0;
exports.default = {
    unmount: function unmount() {
        __mapped = {};
    },
    register: function register(name, element) {
        __mapped[name] = element;
    },
    unregister: function unregister(name) {
        delete __mapped[name];
    },
    get: function get(name) {
        return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
    },
    setActiveLink: function setActiveLink(link) {
        return __activeLink = link;
    },
    getActiveLink: function getActiveLink() {
        return __activeLink;
    },
    scrollTo: function scrollTo(to, props) {
        var target = this.get(to);
        if (!target) {
            console.warn("target Element not found");
            return;
        }
        props = _extends({}, props, {
            absolute: false
        });
        var containerId = props.containerId;
        var container = props.container;
        var containerElement = void 0;
        if (containerId) {
            containerElement = document.getElementById(containerId);
        } else if (container && container.nodeType) {
            containerElement = container;
        } else {
            containerElement = document;
        }
        props.absolute = true;
        var horizontal = props.horizontal;
        var scrollOffset = _utils2.default.scrollOffset(containerElement, target, horizontal) + (props.offset || 0);
        /*
     * if animate is not provided just scroll into the view
     */ if (!props.smooth) {
            if (_scrollEvents2.default.registered['begin']) {
                _scrollEvents2.default.registered['begin'](to, target);
            }
            if (containerElement === document) {
                if (props.horizontal) {
                    window.scrollTo(scrollOffset, 0);
                } else {
                    window.scrollTo(0, scrollOffset);
                }
            } else {
                containerElement.scrollTop = scrollOffset;
            }
            if (_scrollEvents2.default.registered['end']) {
                _scrollEvents2.default.registered['end'](to, target);
            }
            return;
        }
        /*
     * Animate scrolling
     */ _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
    }
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-hash.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _passiveEventListeners = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/passive-event-listeners.js [client] (ecmascript)");
var _utils = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/utils.js [client] (ecmascript)");
var _utils2 = _interopRequireDefault(_utils);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var scrollHash = {
    mountFlag: false,
    initialized: false,
    scroller: null,
    containers: {},
    mount: function mount(scroller) {
        this.scroller = scroller;
        this.handleHashChange = this.handleHashChange.bind(this);
        window.addEventListener('hashchange', this.handleHashChange);
        this.initStateFromHash();
        this.mountFlag = true;
    },
    mapContainer: function mapContainer(to, container) {
        this.containers[to] = container;
    },
    isMounted: function isMounted() {
        return this.mountFlag;
    },
    isInitialized: function isInitialized() {
        return this.initialized;
    },
    initStateFromHash: function initStateFromHash() {
        var _this = this;
        var hash = this.getHash();
        if (hash) {
            window.setTimeout(function() {
                _this.scrollTo(hash, true);
                _this.initialized = true;
            }, 10);
        } else {
            this.initialized = true;
        }
    },
    scrollTo: function scrollTo(to, isInit) {
        var scroller = this.scroller;
        var element = scroller.get(to);
        if (element && (isInit || to !== scroller.getActiveLink())) {
            var container = this.containers[to] || document;
            scroller.scrollTo(to, {
                container: container
            });
        }
    },
    getHash: function getHash() {
        return _utils2.default.getHash();
    },
    changeHash: function changeHash(to, saveHashHistory) {
        if (this.isInitialized() && _utils2.default.getHash() !== to) {
            _utils2.default.updateHash(to, saveHashHistory);
        }
    },
    handleHashChange: function handleHashChange() {
        this.scrollTo(this.getHash());
    },
    unmount: function unmount() {
        this.scroller = null;
        this.containers = null;
        window.removeEventListener('hashchange', this.handleHashChange);
    }
};
exports.default = scrollHash;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-link.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _scrollSpy = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-spy.js [client] (ecmascript)");
var _scrollSpy2 = _interopRequireDefault(_scrollSpy);
var _scroller = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroller.js [client] (ecmascript)");
var _scroller2 = _interopRequireDefault(_scroller);
var _propTypes = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _scrollHash = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-hash.js [client] (ecmascript)");
var _scrollHash2 = _interopRequireDefault(_scrollHash);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var protoTypes = {
    to: _propTypes2.default.string.isRequired,
    containerId: _propTypes2.default.string,
    container: _propTypes2.default.object,
    activeClass: _propTypes2.default.string,
    activeStyle: _propTypes2.default.object,
    spy: _propTypes2.default.bool,
    horizontal: _propTypes2.default.bool,
    smooth: _propTypes2.default.oneOfType([
        _propTypes2.default.bool,
        _propTypes2.default.string
    ]),
    offset: _propTypes2.default.number,
    delay: _propTypes2.default.number,
    isDynamic: _propTypes2.default.bool,
    onClick: _propTypes2.default.func,
    duration: _propTypes2.default.oneOfType([
        _propTypes2.default.number,
        _propTypes2.default.func
    ]),
    absolute: _propTypes2.default.bool,
    onSetActive: _propTypes2.default.func,
    onSetInactive: _propTypes2.default.func,
    ignoreCancelEvents: _propTypes2.default.bool,
    hashSpy: _propTypes2.default.bool,
    saveHashHistory: _propTypes2.default.bool,
    spyThrottle: _propTypes2.default.number
};
exports.default = function(Component, customScroller) {
    var scroller = customScroller || _scroller2.default;
    var Link = function(_React$PureComponent) {
        _inherits(Link, _React$PureComponent);
        function Link(props) {
            _classCallCheck(this, Link);
            var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));
            _initialiseProps.call(_this);
            _this.state = {
                active: false
            };
            _this.beforeUnmountCallbacks = [];
            return _this;
        }
        _createClass(Link, [
            {
                key: "getScrollSpyContainer",
                value: function getScrollSpyContainer() {
                    var containerId = this.props.containerId;
                    var container = this.props.container;
                    if (containerId && !container) {
                        return document.getElementById(containerId);
                    }
                    if (container && container.nodeType) {
                        return container;
                    }
                    return document;
                }
            },
            {
                key: "componentDidMount",
                value: function componentDidMount() {
                    if (this.props.spy || this.props.hashSpy) {
                        var scrollSpyContainer = this.getScrollSpyContainer();
                        if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
                            var fn = _scrollSpy2.default.mount(scrollSpyContainer, this.props.spyThrottle);
                            this.beforeUnmountCallbacks.push(fn);
                        }
                        if (this.props.hashSpy) {
                            if (!_scrollHash2.default.isMounted()) {
                                _scrollHash2.default.mount(scroller);
                            }
                            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
                        }
                        _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);
                        this.setState({
                            container: scrollSpyContainer
                        });
                    }
                }
            },
            {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
                    this.beforeUnmountCallbacks.forEach(function(fn) {
                        return fn();
                    });
                }
            },
            {
                key: "render",
                value: function render() {
                    var className = "";
                    if (this.state && this.state.active) {
                        className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
                    } else {
                        className = this.props.className;
                    }
                    var style = {};
                    if (this.state && this.state.active) {
                        style = _extends({}, this.props.style, this.props.activeStyle);
                    } else {
                        style = _extends({}, this.props.style);
                    }
                    var props = _extends({}, this.props);
                    for(var prop in protoTypes){
                        if (props.hasOwnProperty(prop)) {
                            delete props[prop];
                        }
                    }
                    props.className = className;
                    props.style = style;
                    props.onClick = this.handleClick;
                    return _react2.default.createElement(Component, props);
                }
            }
        ]);
        return Link;
    }(_react2.default.PureComponent);
    var _initialiseProps = function _initialiseProps() {
        var _this2 = this;
        this.scrollTo = function(to, props) {
            scroller.scrollTo(to, _extends({}, _this2.state, props));
        };
        this.handleClick = function(event) {
            /*
       * give the posibility to override onClick
       */ if (_this2.props.onClick) {
                _this2.props.onClick(event);
            }
            /*
       * dont bubble the navigation
       */ if (event.stopPropagation) event.stopPropagation();
            if (event.preventDefault) event.preventDefault();
            /*
       * do the magic!
       */ _this2.scrollTo(_this2.props.to, _this2.props);
        };
        this.spyHandler = function(x, y) {
            var scrollSpyContainer = _this2.getScrollSpyContainer();
            if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
                return;
            }
            var horizontal = _this2.props.horizontal;
            var to = _this2.props.to;
            var element = null;
            var isInside = void 0;
            var isOutside = void 0;
            if (horizontal) {
                var elemLeftBound = 0;
                var elemRightBound = 0;
                var containerLeft = 0;
                if (scrollSpyContainer.getBoundingClientRect) {
                    var containerCords = scrollSpyContainer.getBoundingClientRect();
                    containerLeft = containerCords.left;
                }
                if (!element || _this2.props.isDynamic) {
                    element = scroller.get(to);
                    if (!element) {
                        return;
                    }
                    var cords = element.getBoundingClientRect();
                    elemLeftBound = cords.left - containerLeft + x;
                    elemRightBound = elemLeftBound + cords.width;
                }
                var offsetX = x - _this2.props.offset;
                isInside = offsetX >= Math.floor(elemLeftBound) && offsetX < Math.floor(elemRightBound);
                isOutside = offsetX < Math.floor(elemLeftBound) || offsetX >= Math.floor(elemRightBound);
            } else {
                var elemTopBound = 0;
                var elemBottomBound = 0;
                var containerTop = 0;
                if (scrollSpyContainer.getBoundingClientRect) {
                    var _containerCords = scrollSpyContainer.getBoundingClientRect();
                    containerTop = _containerCords.top;
                }
                if (!element || _this2.props.isDynamic) {
                    element = scroller.get(to);
                    if (!element) {
                        return;
                    }
                    var _cords = element.getBoundingClientRect();
                    elemTopBound = _cords.top - containerTop + y;
                    elemBottomBound = elemTopBound + _cords.height;
                }
                var offsetY = y - _this2.props.offset;
                isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
                isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
            }
            var activeLink = scroller.getActiveLink();
            if (isOutside) {
                if (to === activeLink) {
                    scroller.setActiveLink(void 0);
                }
                if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
                    var _props$saveHashHistor = _this2.props.saveHashHistory, saveHashHistory = _props$saveHashHistor === undefined ? false : _props$saveHashHistor;
                    _scrollHash2.default.changeHash("", saveHashHistory);
                }
                if (_this2.props.spy && _this2.state.active) {
                    _this2.setState({
                        active: false
                    });
                    _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
                }
            }
            if (isInside && (activeLink !== to || _this2.state.active === false)) {
                scroller.setActiveLink(to);
                var _props$saveHashHistor2 = _this2.props.saveHashHistory, _saveHashHistory = _props$saveHashHistor2 === undefined ? false : _props$saveHashHistor2;
                _this2.props.hashSpy && _scrollHash2.default.changeHash(to, _saveHashHistory);
                if (_this2.props.spy) {
                    _this2.setState({
                        active: true
                    });
                    _this2.props.onSetActive && _this2.props.onSetActive(to, element);
                }
            }
        };
    };
    Link.propTypes = protoTypes;
    Link.defaultProps = {
        offset: 0
    };
    return Link;
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/components/Link.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _react = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _scrollLink = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-link.js [client] (ecmascript)");
var _scrollLink2 = _interopRequireDefault(_scrollLink);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var LinkElement = function(_React$Component) {
    _inherits(LinkElement, _React$Component);
    function LinkElement() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, LinkElement);
        for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [
            this
        ].concat(args))), _this), _this.render = function() {
            return _react2.default.createElement('a', _this.props, _this.props.children);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    return LinkElement;
}(_react2.default.Component);
;
exports.default = (0, _scrollLink2.default)(LinkElement);
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/components/Button.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _scrollLink = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-link.js [client] (ecmascript)");
var _scrollLink2 = _interopRequireDefault(_scrollLink);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ButtonElement = function(_React$Component) {
    _inherits(ButtonElement, _React$Component);
    function ButtonElement() {
        _classCallCheck(this, ButtonElement);
        return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
    }
    _createClass(ButtonElement, [
        {
            key: 'render',
            value: function render() {
                return _react2.default.createElement('button', this.props, this.props.children);
            }
        }
    ]);
    return ButtonElement;
}(_react2.default.Component);
;
exports.default = (0, _scrollLink2.default)(ButtonElement);
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-element.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _reactDom = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-dom/index.js [client] (ecmascript)");
var _reactDom2 = _interopRequireDefault(_reactDom);
var _scroller = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroller.js [client] (ecmascript)");
var _scroller2 = _interopRequireDefault(_scroller);
var _propTypes = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
exports.default = function(Component) {
    var Element = function(_React$Component) {
        _inherits(Element, _React$Component);
        function Element(props) {
            _classCallCheck(this, Element);
            var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));
            _this.childBindings = {
                domNode: null
            };
            return _this;
        }
        _createClass(Element, [
            {
                key: 'componentDidMount',
                value: function componentDidMount() {
                    if (typeof window === 'undefined') {
                        return false;
                    }
                    this.registerElems(this.props.name);
                }
            },
            {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(prevProps) {
                    if (this.props.name !== prevProps.name) {
                        this.registerElems(this.props.name);
                    }
                }
            },
            {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    if (typeof window === 'undefined') {
                        return false;
                    }
                    _scroller2.default.unregister(this.props.name);
                }
            },
            {
                key: 'registerElems',
                value: function registerElems(name) {
                    _scroller2.default.register(name, this.childBindings.domNode);
                }
            },
            {
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(Component, _extends({}, this.props, {
                        parentBindings: this.childBindings
                    }));
                }
            }
        ]);
        return Element;
    }(_react2.default.Component);
    ;
    Element.propTypes = {
        name: _propTypes2.default.string,
        id: _propTypes2.default.string
    };
    return Element;
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/components/Element.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _scrollElement = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-element.js [client] (ecmascript)");
var _scrollElement2 = _interopRequireDefault(_scrollElement);
var _propTypes = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ElementWrapper = function(_React$Component) {
    _inherits(ElementWrapper, _React$Component);
    function ElementWrapper() {
        _classCallCheck(this, ElementWrapper);
        return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
    }
    _createClass(ElementWrapper, [
        {
            key: 'render',
            value: function render() {
                var _this2 = this;
                // Remove `parentBindings` and `name` from props
                var newProps = _extends({}, this.props);
                delete newProps.name;
                if (newProps.parentBindings) {
                    delete newProps.parentBindings;
                }
                return _react2.default.createElement('div', _extends({}, newProps, {
                    ref: function ref(el) {
                        _this2.props.parentBindings.domNode = el;
                    }
                }), this.props.children);
            }
        }
    ]);
    return ElementWrapper;
}(_react2.default.Component);
;
ElementWrapper.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
};
exports.default = (0, _scrollElement2.default)(ElementWrapper);
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/Helpers.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* DEPRECATED */ var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var React = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var ReactDOM = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-dom/index.js [client] (ecmascript)");
var utils = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/utils.js [client] (ecmascript)");
var scrollSpy = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-spy.js [client] (ecmascript)");
var defaultScroller = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroller.js [client] (ecmascript)");
var PropTypes = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var scrollHash = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-hash.js [client] (ecmascript)");
var protoTypes = {
    to: PropTypes.string.isRequired,
    containerId: PropTypes.string,
    container: PropTypes.object,
    activeClass: PropTypes.string,
    spy: PropTypes.bool,
    smooth: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
    offset: PropTypes.number,
    delay: PropTypes.number,
    isDynamic: PropTypes.bool,
    onClick: PropTypes.func,
    duration: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.func
    ]),
    absolute: PropTypes.bool,
    onSetActive: PropTypes.func,
    onSetInactive: PropTypes.func,
    ignoreCancelEvents: PropTypes.bool,
    hashSpy: PropTypes.bool,
    spyThrottle: PropTypes.number
};
var Helpers = {
    Scroll: function Scroll(Component, customScroller) {
        console.warn("Helpers.Scroll is deprecated since v1.7.0");
        var scroller = customScroller || defaultScroller;
        var Scroll = function(_React$Component) {
            _inherits(Scroll, _React$Component);
            function Scroll(props) {
                _classCallCheck(this, Scroll);
                var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));
                _initialiseProps.call(_this);
                _this.state = {
                    active: false
                };
                return _this;
            }
            _createClass(Scroll, [
                {
                    key: 'getScrollSpyContainer',
                    value: function getScrollSpyContainer() {
                        var containerId = this.props.containerId;
                        var container = this.props.container;
                        if (containerId) {
                            return document.getElementById(containerId);
                        }
                        if (container && container.nodeType) {
                            return container;
                        }
                        return document;
                    }
                },
                {
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        if (this.props.spy || this.props.hashSpy) {
                            var scrollSpyContainer = this.getScrollSpyContainer();
                            if (!scrollSpy.isMounted(scrollSpyContainer)) {
                                scrollSpy.mount(scrollSpyContainer, this.props.spyThrottle);
                            }
                            if (this.props.hashSpy) {
                                if (!scrollHash.isMounted()) {
                                    scrollHash.mount(scroller);
                                }
                                scrollHash.mapContainer(this.props.to, scrollSpyContainer);
                            }
                            if (this.props.spy) {
                                scrollSpy.addStateHandler(this.stateHandler);
                            }
                            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);
                            this.setState({
                                container: scrollSpyContainer
                            });
                        }
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        scrollSpy.unmount(this.stateHandler, this.spyHandler);
                    }
                },
                {
                    key: 'render',
                    value: function render() {
                        var className = "";
                        if (this.state && this.state.active) {
                            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
                        } else {
                            className = this.props.className;
                        }
                        var props = _extends({}, this.props);
                        for(var prop in protoTypes){
                            if (props.hasOwnProperty(prop)) {
                                delete props[prop];
                            }
                        }
                        props.className = className;
                        props.onClick = this.handleClick;
                        return React.createElement(Component, props);
                    }
                }
            ]);
            return Scroll;
        }(React.Component);
        var _initialiseProps = function _initialiseProps() {
            var _this2 = this;
            this.scrollTo = function(to, props) {
                scroller.scrollTo(to, _extends({}, _this2.state, props));
            };
            this.handleClick = function(event) {
                /*
         * give the posibility to override onClick
         */ if (_this2.props.onClick) {
                    _this2.props.onClick(event);
                }
                /*
         * dont bubble the navigation
         */ if (event.stopPropagation) event.stopPropagation();
                if (event.preventDefault) event.preventDefault();
                /*
         * do the magic!
         */ _this2.scrollTo(_this2.props.to, _this2.props);
            };
            this.stateHandler = function() {
                if (scroller.getActiveLink() !== _this2.props.to) {
                    if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
                        _this2.props.onSetInactive();
                    }
                    _this2.setState({
                        active: false
                    });
                }
            };
            this.spyHandler = function(y) {
                var scrollSpyContainer = _this2.getScrollSpyContainer();
                if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
                    return;
                }
                var to = _this2.props.to;
                var element = null;
                var elemTopBound = 0;
                var elemBottomBound = 0;
                var containerTop = 0;
                if (scrollSpyContainer.getBoundingClientRect) {
                    var containerCords = scrollSpyContainer.getBoundingClientRect();
                    containerTop = containerCords.top;
                }
                if (!element || _this2.props.isDynamic) {
                    element = scroller.get(to);
                    if (!element) {
                        return;
                    }
                    var cords = element.getBoundingClientRect();
                    elemTopBound = cords.top - containerTop + y;
                    elemBottomBound = elemTopBound + cords.height;
                }
                var offsetY = y - _this2.props.offset;
                var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
                var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
                var activeLink = scroller.getActiveLink();
                if (isOutside) {
                    if (to === activeLink) {
                        scroller.setActiveLink(void 0);
                    }
                    if (_this2.props.hashSpy && scrollHash.getHash() === to) {
                        scrollHash.changeHash();
                    }
                    if (_this2.props.spy && _this2.state.active) {
                        _this2.setState({
                            active: false
                        });
                        _this2.props.onSetInactive && _this2.props.onSetInactive();
                    }
                    return scrollSpy.updateStates();
                }
                if (isInside && activeLink !== to) {
                    scroller.setActiveLink(to);
                    _this2.props.hashSpy && scrollHash.changeHash(to);
                    if (_this2.props.spy) {
                        _this2.setState({
                            active: true
                        });
                        _this2.props.onSetActive && _this2.props.onSetActive(to);
                    }
                    return scrollSpy.updateStates();
                }
            };
        };
        ;
        Scroll.propTypes = protoTypes;
        Scroll.defaultProps = {
            offset: 0
        };
        return Scroll;
    },
    Element: function Element(Component) {
        console.warn("Helpers.Element is deprecated since v1.7.0");
        var Element = function(_React$Component2) {
            _inherits(Element, _React$Component2);
            function Element(props) {
                _classCallCheck(this, Element);
                var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));
                _this3.childBindings = {
                    domNode: null
                };
                return _this3;
            }
            _createClass(Element, [
                {
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        if (typeof window === 'undefined') {
                            return false;
                        }
                        this.registerElems(this.props.name);
                    }
                },
                {
                    key: 'componentDidUpdate',
                    value: function componentDidUpdate(prevProps) {
                        if (this.props.name !== prevProps.name) {
                            this.registerElems(this.props.name);
                        }
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        if (typeof window === 'undefined') {
                            return false;
                        }
                        defaultScroller.unregister(this.props.name);
                    }
                },
                {
                    key: 'registerElems',
                    value: function registerElems(name) {
                        defaultScroller.register(name, this.childBindings.domNode);
                    }
                },
                {
                    key: 'render',
                    value: function render() {
                        return React.createElement(Component, _extends({}, this.props, {
                            parentBindings: this.childBindings
                        }));
                    }
                }
            ]);
            return Element;
        }(React.Component);
        ;
        Element.propTypes = {
            name: PropTypes.string,
            id: PropTypes.string
        };
        return Element;
    }
};
module.exports = Helpers;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;
var _Link = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/components/Link.js [client] (ecmascript)");
var _Link2 = _interopRequireDefault(_Link);
var _Button = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/components/Button.js [client] (ecmascript)");
var _Button2 = _interopRequireDefault(_Button);
var _Element = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/components/Element.js [client] (ecmascript)");
var _Element2 = _interopRequireDefault(_Element);
var _scroller = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroller.js [client] (ecmascript)");
var _scroller2 = _interopRequireDefault(_scroller);
var _scrollEvents = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-events.js [client] (ecmascript)");
var _scrollEvents2 = _interopRequireDefault(_scrollEvents);
var _scrollSpy = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-spy.js [client] (ecmascript)");
var _scrollSpy2 = _interopRequireDefault(_scrollSpy);
var _animateScroll = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/animate-scroll.js [client] (ecmascript)");
var _animateScroll2 = _interopRequireDefault(_animateScroll);
var _scrollLink = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-link.js [client] (ecmascript)");
var _scrollLink2 = _interopRequireDefault(_scrollLink);
var _scrollElement = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/scroll-element.js [client] (ecmascript)");
var _scrollElement2 = _interopRequireDefault(_scrollElement);
var _Helpers = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-scroll/modules/mixins/Helpers.js [client] (ecmascript)");
var _Helpers2 = _interopRequireDefault(_Helpers);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = {
    Link: _Link2.default,
    Button: _Button2.default,
    Element: _Element2.default,
    scroller: _scroller2.default,
    Events: _scrollEvents2.default,
    scrollSpy: _scrollSpy2.default,
    animateScroll: _animateScroll2.default,
    ScrollLink: _scrollLink2.default,
    ScrollElement: _scrollElement2.default,
    Helpers: _Helpers2.default
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-is/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-is/cjs/react-is.development.js [client] (ecmascript)");
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/prop-types/lib/has.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/Documents/GitHub/MyWeb/node_modules/prop-types/checkPropTypes.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/lib/has.js [client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/prop-types/factoryWithTypeCheckers.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
var ReactIs = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-is/index.js [client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/object-assign.js [client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/lib/ReactPropTypesSecret.js [client] (ecmascript)");
var has = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/lib/has.js [client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/checkPropTypes.js [client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/react-is/index.js [client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/factoryWithTypeCheckers.js [client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/exifr/dist/full.esm.mjs [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Exifr",
    ()=>te,
    "Options",
    ()=>q,
    "allFormatters",
    ()=>X,
    "chunkedProps",
    ()=>G,
    "createDictionary",
    ()=>U,
    "default",
    ()=>__TURBOPACK__default__export__,
    "extendDictionary",
    ()=>F,
    "fetchUrlAsArrayBuffer",
    ()=>M,
    "fileParsers",
    ()=>w,
    "fileReaders",
    ()=>A,
    "gps",
    ()=>Se,
    "gpsOnlyOptions",
    ()=>me,
    "inheritables",
    ()=>K,
    "orientation",
    ()=>Pe,
    "orientationOnlyOptions",
    ()=>Ie,
    "otherSegments",
    ()=>V,
    "parse",
    ()=>ie,
    "readBlobAsArrayBuffer",
    ()=>R,
    "rotateCanvas",
    ()=>we,
    "rotateCss",
    ()=>Te,
    "rotation",
    ()=>Ae,
    "rotations",
    ()=>ke,
    "segmentParsers",
    ()=>T,
    "segments",
    ()=>z,
    "segmentsAndBlocks",
    ()=>j,
    "sidecar",
    ()=>st,
    "tagKeys",
    ()=>E,
    "tagRevivers",
    ()=>N,
    "tagValues",
    ()=>B,
    "thumbnail",
    ()=>ye,
    "thumbnailOnlyOptions",
    ()=>Ce,
    "thumbnailUrl",
    ()=>be,
    "tiffBlocks",
    ()=>H,
    "tiffExtractables",
    ()=>W
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/compiled/buffer/index.js [client] (ecmascript)");
var e = "undefined" != typeof self ? self : /*TURBOPACK member replacement*/ __turbopack_context__.g;
const t = "undefined" != typeof navigator, i = t && "undefined" == typeof HTMLImageElement, n = !("undefined" == ("TURBOPACK compile-time value", "object") || "undefined" == typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] || !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].versions || !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].versions.node), s = e.Buffer, r = e.BigInt, a = !!s, o = (e)=>e;
function l(e, t = o) {
    if (n) try {
        return ("TURBOPACK compile-time truthy", 1) ? Promise.resolve(t((()=>{
            const e = new Error("Cannot find module as expression is too dynamic");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })())) : "TURBOPACK unreachable";
    } catch (t) {
        console.warn(`Couldn't load ${e}`);
    }
}
let h = e.fetch;
const u = (e)=>h = e;
if (!e.fetch) {
    const e = l("http", (e)=>e), t = l("https", (e)=>e), i = (n, { headers: s } = {})=>new Promise(async (r, a)=>{
            let { port: o, hostname: l, pathname: h, protocol: u, search: c } = new URL(n);
            const f = {
                method: "GET",
                hostname: l,
                path: encodeURI(h) + c,
                headers: s
            };
            "" !== o && (f.port = Number(o));
            const d = ("https:" === u ? await t : await e).request(f, (e)=>{
                if (301 === e.statusCode || 302 === e.statusCode) {
                    let t = new URL(e.headers.location, n).toString();
                    return i(t, {
                        headers: s
                    }).then(r).catch(a);
                }
                r({
                    status: e.statusCode,
                    arrayBuffer: ()=>new Promise((t)=>{
                            let i = [];
                            e.on("data", (e)=>i.push(e)), e.on("end", ()=>t(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Buffer"].concat(i)));
                        })
                });
            });
            d.on("error", a), d.end();
        });
    u(i);
}
function c(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e;
}
const f = (e)=>p(e) ? void 0 : e, d = (e)=>void 0 !== e;
function p(e) {
    return void 0 === e || (e instanceof Map ? 0 === e.size : 0 === Object.values(e).filter(d).length);
}
function g(e) {
    let t = new Error(e);
    throw delete t.stack, t;
}
function m(e) {
    return "" === (e = (function(e) {
        for(; e.endsWith("\0");)e = e.slice(0, -1);
        return e;
    })(e).trim()) ? void 0 : e;
}
function S(e) {
    let t = function(e) {
        let t = 0;
        return e.ifd0.enabled && (t += 1024), e.exif.enabled && (t += 2048), e.makerNote && (t += 2048), e.userComment && (t += 1024), e.gps.enabled && (t += 512), e.interop.enabled && (t += 100), e.ifd1.enabled && (t += 1024), t + 2048;
    }(e);
    return e.jfif.enabled && (t += 50), e.xmp.enabled && (t += 2e4), e.iptc.enabled && (t += 14e3), e.icc.enabled && (t += 6e3), t;
}
const C = (e)=>String.fromCharCode.apply(null, e), y = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
function b(e) {
    return y ? y.decode(e) : a ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Buffer"].from(e).toString("utf8") : decodeURIComponent(escape(C(e)));
}
class I {
    static from(e, t) {
        return e instanceof this && e.le === t ? e : new I(e, void 0, void 0, t);
    }
    constructor(e, t = 0, i, n){
        if ("boolean" == typeof n && (this.le = n), Array.isArray(e) && (e = new Uint8Array(e)), 0 === e) this.byteOffset = 0, this.byteLength = 0;
        else if (e instanceof ArrayBuffer) {
            void 0 === i && (i = e.byteLength - t);
            let n = new DataView(e, t, i);
            this._swapDataView(n);
        } else if (e instanceof Uint8Array || e instanceof DataView || e instanceof I) {
            void 0 === i && (i = e.byteLength - t), (t += e.byteOffset) + i > e.byteOffset + e.byteLength && g("Creating view outside of available memory in ArrayBuffer");
            let n = new DataView(e.buffer, t, i);
            this._swapDataView(n);
        } else if ("number" == typeof e) {
            let t = new DataView(new ArrayBuffer(e));
            this._swapDataView(t);
        } else g("Invalid input argument for BufferView: " + e);
    }
    _swapArrayBuffer(e) {
        this._swapDataView(new DataView(e));
    }
    _swapBuffer(e) {
        this._swapDataView(new DataView(e.buffer, e.byteOffset, e.byteLength));
    }
    _swapDataView(e) {
        this.dataView = e, this.buffer = e.buffer, this.byteOffset = e.byteOffset, this.byteLength = e.byteLength;
    }
    _lengthToEnd(e) {
        return this.byteLength - e;
    }
    set(e, t, i = I) {
        return e instanceof DataView || e instanceof I ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer && (e = new Uint8Array(e)), e instanceof Uint8Array || g("BufferView.set(): Invalid data argument."), this.toUint8().set(e, t), new i(this, t, e.byteLength);
    }
    subarray(e, t) {
        return t = t || this._lengthToEnd(e), new I(this, e, t);
    }
    toUint8() {
        return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
    }
    getUint8Array(e, t) {
        return new Uint8Array(this.buffer, this.byteOffset + e, t);
    }
    getString(e = 0, t = this.byteLength) {
        return b(this.getUint8Array(e, t));
    }
    getLatin1String(e = 0, t = this.byteLength) {
        let i = this.getUint8Array(e, t);
        return C(i);
    }
    getUnicodeString(e = 0, t = this.byteLength) {
        const i = [];
        for(let n = 0; n < t && e + n < this.byteLength; n += 2)i.push(this.getUint16(e + n));
        return C(i);
    }
    getInt8(e) {
        return this.dataView.getInt8(e);
    }
    getUint8(e) {
        return this.dataView.getUint8(e);
    }
    getInt16(e, t = this.le) {
        return this.dataView.getInt16(e, t);
    }
    getInt32(e, t = this.le) {
        return this.dataView.getInt32(e, t);
    }
    getUint16(e, t = this.le) {
        return this.dataView.getUint16(e, t);
    }
    getUint32(e, t = this.le) {
        return this.dataView.getUint32(e, t);
    }
    getFloat32(e, t = this.le) {
        return this.dataView.getFloat32(e, t);
    }
    getFloat64(e, t = this.le) {
        return this.dataView.getFloat64(e, t);
    }
    getFloat(e, t = this.le) {
        return this.dataView.getFloat32(e, t);
    }
    getDouble(e, t = this.le) {
        return this.dataView.getFloat64(e, t);
    }
    getUintBytes(e, t, i) {
        switch(t){
            case 1:
                return this.getUint8(e, i);
            case 2:
                return this.getUint16(e, i);
            case 4:
                return this.getUint32(e, i);
            case 8:
                return this.getUint64 && this.getUint64(e, i);
        }
    }
    getUint(e, t, i) {
        switch(t){
            case 8:
                return this.getUint8(e, i);
            case 16:
                return this.getUint16(e, i);
            case 32:
                return this.getUint32(e, i);
            case 64:
                return this.getUint64 && this.getUint64(e, i);
        }
    }
    toString(e) {
        return this.dataView.toString(e, this.constructor.name);
    }
    ensureChunk() {}
}
function P(e, t) {
    g(`${e} '${t}' was not loaded, try using full build of exifr.`);
}
class k extends Map {
    constructor(e){
        super(), this.kind = e;
    }
    get(e, t) {
        return this.has(e) || P(this.kind, e), t && (e in t || function(e, t) {
            g(`Unknown ${e} '${t}'.`);
        }(this.kind, e), t[e].enabled || P(this.kind, e)), super.get(e);
    }
    keyList() {
        return Array.from(this.keys());
    }
}
var w = new k("file parser"), T = new k("segment parser"), A = new k("file reader");
function D(e, n) {
    return "string" == typeof e ? O(e, n) : t && !i && e instanceof HTMLImageElement ? O(e.src, n) : e instanceof Uint8Array || e instanceof ArrayBuffer || e instanceof DataView ? new I(e) : t && e instanceof Blob ? x(e, n, "blob", R) : void g("Invalid input argument");
}
function O(e, i) {
    return (s = e).startsWith("data:") || s.length > 1e4 ? v(e, i, "base64") : n && e.includes("://") ? x(e, i, "url", M) : n ? v(e, i, "fs") : t ? x(e, i, "url", M) : void g("Invalid input argument");
    //TURBOPACK unreachable
    ;
    var s;
}
async function x(e, t, i, n) {
    return A.has(i) ? v(e, t, i) : n ? async function(e, t) {
        let i = await t(e);
        return new I(i);
    }(e, n) : void g(`Parser ${i} is not loaded`);
}
async function v(e, t, i) {
    let n = new (A.get(i))(e, t);
    return await n.read(), n;
}
const M = (e)=>h(e).then((e)=>e.arrayBuffer()), R = (e)=>new Promise((t, i)=>{
        let n = new FileReader;
        n.onloadend = ()=>t(n.result || new ArrayBuffer), n.onerror = i, n.readAsArrayBuffer(e);
    });
class L extends Map {
    get tagKeys() {
        return this.allKeys || (this.allKeys = Array.from(this.keys())), this.allKeys;
    }
    get tagValues() {
        return this.allValues || (this.allValues = Array.from(this.values())), this.allValues;
    }
}
function U(e, t, i) {
    let n = new L;
    for (let [e, t] of i)n.set(e, t);
    if (Array.isArray(t)) for (let i of t)e.set(i, n);
    else e.set(t, n);
    return n;
}
function F(e, t, i) {
    let n, s = e.get(t);
    for (n of i)s.set(n[0], n[1]);
}
const E = new Map, B = new Map, N = new Map, G = [
    "chunked",
    "firstChunkSize",
    "firstChunkSizeNode",
    "firstChunkSizeBrowser",
    "chunkSize",
    "chunkLimit"
], V = [
    "jfif",
    "xmp",
    "icc",
    "iptc",
    "ihdr"
], z = [
    "tiff",
    ...V
], H = [
    "ifd0",
    "ifd1",
    "exif",
    "gps",
    "interop"
], j = [
    ...z,
    ...H
], W = [
    "makerNote",
    "userComment"
], K = [
    "translateKeys",
    "translateValues",
    "reviveValues",
    "multiSegment"
], X = [
    ...K,
    "sanitize",
    "mergeOutput",
    "silentErrors"
];
class _ {
    get translate() {
        return this.translateKeys || this.translateValues || this.reviveValues;
    }
}
class Y extends _ {
    get needed() {
        return this.enabled || this.deps.size > 0;
    }
    constructor(e, t, i, n){
        if (super(), c(this, "enabled", !1), c(this, "skip", new Set), c(this, "pick", new Set), c(this, "deps", new Set), c(this, "translateKeys", !1), c(this, "translateValues", !1), c(this, "reviveValues", !1), this.key = e, this.enabled = t, this.parse = this.enabled, this.applyInheritables(n), this.canBeFiltered = H.includes(e), this.canBeFiltered && (this.dict = E.get(e)), void 0 !== i) if (Array.isArray(i)) this.parse = this.enabled = !0, this.canBeFiltered && i.length > 0 && this.translateTagSet(i, this.pick);
        else if ("object" == typeof i) {
            if (this.enabled = !0, this.parse = !1 !== i.parse, this.canBeFiltered) {
                let { pick: e, skip: t } = i;
                e && e.length > 0 && this.translateTagSet(e, this.pick), t && t.length > 0 && this.translateTagSet(t, this.skip);
            }
            this.applyInheritables(i);
        } else !0 === i || !1 === i ? this.parse = this.enabled = i : g(`Invalid options argument: ${i}`);
    }
    applyInheritables(e) {
        let t, i;
        for (t of K)i = e[t], void 0 !== i && (this[t] = i);
    }
    translateTagSet(e, t) {
        if (this.dict) {
            let i, n, { tagKeys: s, tagValues: r } = this.dict;
            for (i of e)"string" == typeof i ? (n = r.indexOf(i), -1 === n && (n = s.indexOf(Number(i))), -1 !== n && t.add(Number(s[n]))) : t.add(i);
        } else for (let i of e)t.add(i);
    }
    finalizeFilters() {
        !this.enabled && this.deps.size > 0 ? (this.enabled = !0, ee(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && ee(this.pick, this.deps);
    }
}
var $ = {
    jfif: !1,
    tiff: !0,
    xmp: !1,
    icc: !1,
    iptc: !1,
    ifd0: !0,
    ifd1: !1,
    exif: !0,
    gps: !0,
    interop: !1,
    ihdr: void 0,
    makerNote: !1,
    userComment: !1,
    multiSegment: !1,
    skip: [],
    pick: [],
    translateKeys: !0,
    translateValues: !0,
    reviveValues: !0,
    sanitize: !0,
    mergeOutput: !0,
    silentErrors: !0,
    chunked: !0,
    firstChunkSize: void 0,
    firstChunkSizeNode: 512,
    firstChunkSizeBrowser: 65536,
    chunkSize: 65536,
    chunkLimit: 5
}, J = new Map;
class q extends _ {
    static useCached(e) {
        let t = J.get(e);
        return void 0 !== t || (t = new this(e), J.set(e, t)), t;
    }
    constructor(e){
        super(), !0 === e ? this.setupFromTrue() : void 0 === e ? this.setupFromUndefined() : Array.isArray(e) ? this.setupFromArray(e) : "object" == typeof e ? this.setupFromObject(e) : g(`Invalid options argument ${e}`), void 0 === this.firstChunkSize && (this.firstChunkSize = t ? this.firstChunkSizeBrowser : this.firstChunkSizeNode), this.mergeOutput && (this.ifd1.enabled = !1), this.filterNestedSegmentTags(), this.traverseTiffDependencyTree(), this.checkLoadedPlugins();
    }
    setupFromUndefined() {
        let e;
        for (e of G)this[e] = $[e];
        for (e of X)this[e] = $[e];
        for (e of W)this[e] = $[e];
        for (e of j)this[e] = new Y(e, $[e], void 0, this);
    }
    setupFromTrue() {
        let e;
        for (e of G)this[e] = $[e];
        for (e of X)this[e] = $[e];
        for (e of W)this[e] = !0;
        for (e of j)this[e] = new Y(e, !0, void 0, this);
    }
    setupFromArray(e) {
        let t;
        for (t of G)this[t] = $[t];
        for (t of X)this[t] = $[t];
        for (t of W)this[t] = $[t];
        for (t of j)this[t] = new Y(t, !1, void 0, this);
        this.setupGlobalFilters(e, void 0, H);
    }
    setupFromObject(e) {
        let t;
        for (t of (H.ifd0 = H.ifd0 || H.image, H.ifd1 = H.ifd1 || H.thumbnail, Object.assign(this, e), G))this[t] = Z(e[t], $[t]);
        for (t of X)this[t] = Z(e[t], $[t]);
        for (t of W)this[t] = Z(e[t], $[t]);
        for (t of z)this[t] = new Y(t, $[t], e[t], this);
        for (t of H)this[t] = new Y(t, $[t], e[t], this.tiff);
        this.setupGlobalFilters(e.pick, e.skip, H, j), !0 === e.tiff ? this.batchEnableWithBool(H, !0) : !1 === e.tiff ? this.batchEnableWithUserValue(H, e) : Array.isArray(e.tiff) ? this.setupGlobalFilters(e.tiff, void 0, H) : "object" == typeof e.tiff && this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, H);
    }
    batchEnableWithBool(e, t) {
        for (let i of e)this[i].enabled = t;
    }
    batchEnableWithUserValue(e, t) {
        for (let i of e){
            let e = t[i];
            this[i].enabled = !1 !== e && void 0 !== e;
        }
    }
    setupGlobalFilters(e, t, i, n = i) {
        if (e && e.length) {
            for (let e of n)this[e].enabled = !1;
            let t = Q(e, i);
            for (let [e, i] of t)ee(this[e].pick, i), this[e].enabled = !0;
        } else if (t && t.length) {
            let e = Q(t, i);
            for (let [t, i] of e)ee(this[t].skip, i);
        }
    }
    filterNestedSegmentTags() {
        let { ifd0: e, exif: t, xmp: i, iptc: n, icc: s } = this;
        this.makerNote ? t.deps.add(37500) : t.skip.add(37500), this.userComment ? t.deps.add(37510) : t.skip.add(37510), i.enabled || e.skip.add(700), n.enabled || e.skip.add(33723), s.enabled || e.skip.add(34675);
    }
    traverseTiffDependencyTree() {
        let { ifd0: e, exif: t, gps: i, interop: n } = this;
        n.needed && (t.deps.add(40965), e.deps.add(40965)), t.needed && e.deps.add(34665), i.needed && e.deps.add(34853), this.tiff.enabled = H.some((e)=>!0 === this[e].enabled) || this.makerNote || this.userComment;
        for (let e of H)this[e].finalizeFilters();
    }
    get onlyTiff() {
        return !V.map((e)=>this[e].enabled).some((e)=>!0 === e) && this.tiff.enabled;
    }
    checkLoadedPlugins() {
        for (let e of z)this[e].enabled && !T.has(e) && P("segment parser", e);
    }
}
function Q(e, t) {
    let i, n, s, r, a = [];
    for (s of t){
        for (r of (i = E.get(s), n = [], i))(e.includes(r[0]) || e.includes(r[1])) && n.push(r[0]);
        n.length && a.push([
            s,
            n
        ]);
    }
    return a;
}
function Z(e, t) {
    return void 0 !== e ? e : void 0 !== t ? t : void 0;
}
function ee(e, t) {
    for (let i of t)e.add(i);
}
c(q, "default", $);
class te {
    constructor(e){
        c(this, "parsers", {}), c(this, "output", {}), c(this, "errors", []), c(this, "pushToErrors", (e)=>this.errors.push(e)), this.options = q.useCached(e);
    }
    async read(e) {
        this.file = await D(e, this.options);
    }
    setup() {
        if (this.fileParser) return;
        let { file: e } = this, t = e.getUint16(0);
        for (let [i, n] of w)if (n.canHandle(e, t)) return this.fileParser = new n(this.options, this.file, this.parsers), e[i] = !0;
        this.file.close && this.file.close(), g("Unknown file format");
    }
    async parse() {
        let { output: e, errors: t } = this;
        return this.setup(), this.options.silentErrors ? (await this.executeParsers().catch(this.pushToErrors), t.push(...this.fileParser.errors)) : await this.executeParsers(), this.file.close && this.file.close(), this.options.silentErrors && t.length > 0 && (e.errors = t), f(e);
    }
    async executeParsers() {
        let { output: e } = this;
        await this.fileParser.parse();
        let t = Object.values(this.parsers).map(async (t)=>{
            let i = await t.parse();
            t.assignToOutput(e, i);
        });
        this.options.silentErrors && (t = t.map((e)=>e.catch(this.pushToErrors))), await Promise.all(t);
    }
    async extractThumbnail() {
        this.setup();
        let { options: e, file: t } = this, i = T.get("tiff", e);
        var n;
        if (t.tiff ? n = {
            start: 0,
            type: "tiff"
        } : t.jpeg && (n = await this.fileParser.getOrFindSegment("tiff")), void 0 === n) return;
        let s = await this.fileParser.ensureSegmentChunk(n), r = this.parsers.tiff = new i(s, e, t), a = await r.extractThumbnail();
        return t.close && t.close(), a;
    }
}
async function ie(e, t) {
    let i = new te(t);
    return await i.read(e), i.parse();
}
var ne = Object.freeze({
    __proto__: null,
    parse: ie,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q
});
class se {
    constructor(e, t, i){
        c(this, "errors", []), c(this, "ensureSegmentChunk", async (e)=>{
            let t = e.start, i = e.size || 65536;
            if (this.file.chunked) if (this.file.available(t, i)) e.chunk = this.file.subarray(t, i);
            else try {
                e.chunk = await this.file.readChunk(t, i);
            } catch (t) {
                g(`Couldn't read segment: ${JSON.stringify(e)}. ${t.message}`);
            }
            else this.file.byteLength > t + i ? e.chunk = this.file.subarray(t, i) : void 0 === e.size ? e.chunk = this.file.subarray(t) : g("Segment unreachable: " + JSON.stringify(e));
            return e.chunk;
        }), this.extendOptions && this.extendOptions(e), this.options = e, this.file = t, this.parsers = i;
    }
    injectSegment(e, t) {
        this.options[e].enabled && this.createParser(e, t);
    }
    createParser(e, t) {
        let i = new (T.get(e))(t, this.options, this.file);
        return this.parsers[e] = i;
    }
    createParsers(e) {
        for (let t of e){
            let { type: e, chunk: i } = t, n = this.options[e];
            if (n && n.enabled) {
                let t = this.parsers[e];
                t && t.append || t || this.createParser(e, i);
            }
        }
    }
    async readSegments(e) {
        let t = e.map(this.ensureSegmentChunk);
        await Promise.all(t);
    }
}
class re {
    static findPosition(e, t) {
        let i = e.getUint16(t + 2) + 2, n = "function" == typeof this.headerLength ? this.headerLength(e, t, i) : this.headerLength, s = t + n, r = i - n;
        return {
            offset: t,
            length: i,
            headerLength: n,
            start: s,
            size: r,
            end: s + r
        };
    }
    static parse(e, t = {}) {
        return new this(e, new q({
            [this.type]: t
        }), e).parse();
    }
    normalizeInput(e) {
        return e instanceof I ? e : new I(e);
    }
    constructor(e, t = {}, i){
        c(this, "errors", []), c(this, "raw", new Map), c(this, "handleError", (e)=>{
            if (!this.options.silentErrors) throw e;
            this.errors.push(e.message);
        }), this.chunk = this.normalizeInput(e), this.file = i, this.type = this.constructor.type, this.globalOptions = this.options = t, this.localOptions = t[this.type], this.canTranslate = this.localOptions && this.localOptions.translate;
    }
    translate() {
        this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
    }
    get output() {
        return this.translated ? this.translated : this.raw ? Object.fromEntries(this.raw) : void 0;
    }
    translateBlock(e, t) {
        let i = N.get(t), n = B.get(t), s = E.get(t), r = this.options[t], a = r.reviveValues && !!i, o = r.translateValues && !!n, l = r.translateKeys && !!s, h = {};
        for (let [t, r] of e)a && i.has(t) ? r = i.get(t)(r) : o && n.has(t) && (r = this.translateValue(r, n.get(t))), l && s.has(t) && (t = s.get(t) || t), h[t] = r;
        return h;
    }
    translateValue(e, t) {
        return t[e] || t.DEFAULT || e;
    }
    assignToOutput(e, t) {
        this.assignObjectToOutput(e, this.constructor.type, t);
    }
    assignObjectToOutput(e, t, i) {
        if (this.globalOptions.mergeOutput) return Object.assign(e, i);
        e[t] ? Object.assign(e[t], i) : e[t] = i;
    }
}
c(re, "headerLength", 4), c(re, "type", void 0), c(re, "multiSegment", !1), c(re, "canHandle", ()=>!1);
function ae(e) {
    return 192 === e || 194 === e || 196 === e || 219 === e || 221 === e || 218 === e || 254 === e;
}
function oe(e) {
    return e >= 224 && e <= 239;
}
function le(e, t, i) {
    for (let [n, s] of T)if (s.canHandle(e, t, i)) return n;
}
class he extends se {
    constructor(...e){
        super(...e), c(this, "appSegments", []), c(this, "jpegSegments", []), c(this, "unknownSegments", []);
    }
    static canHandle(e, t) {
        return 65496 === t;
    }
    async parse() {
        await this.findAppSegments(), await this.readSegments(this.appSegments), this.mergeMultiSegments(), this.createParsers(this.mergedAppSegments || this.appSegments);
    }
    setupSegmentFinderArgs(e) {
        !0 === e ? (this.findAll = !0, this.wanted = new Set(T.keyList())) : (e = void 0 === e ? T.keyList().filter((e)=>this.options[e].enabled) : e.filter((e)=>this.options[e].enabled && T.has(e)), this.findAll = !1, this.remaining = new Set(e), this.wanted = new Set(e)), this.unfinishedMultiSegment = !1;
    }
    async findAppSegments(e = 0, t) {
        this.setupSegmentFinderArgs(t);
        let { file: i, findAll: n, wanted: s, remaining: r } = this;
        if (!n && this.file.chunked && (n = Array.from(s).some((e)=>{
            let t = T.get(e), i = this.options[e];
            return t.multiSegment && i.multiSegment;
        }), n && await this.file.readWhole()), e = this.findAppSegmentsInRange(e, i.byteLength), !this.options.onlyTiff && i.chunked) {
            let t = !1;
            for(; r.size > 0 && !t && (i.canReadNextChunk || this.unfinishedMultiSegment);){
                let { nextChunkOffset: n } = i, s = this.appSegments.some((e)=>!this.file.available(e.offset || e.start, e.length || e.size));
                if (t = e > n && !s ? !await i.readNextChunk(e) : !await i.readNextChunk(n), void 0 === (e = this.findAppSegmentsInRange(e, i.byteLength))) return;
            }
        }
    }
    findAppSegmentsInRange(e, t) {
        t -= 2;
        let i, n, s, r, a, o, { file: l, findAll: h, wanted: u, remaining: c, options: f } = this;
        for(; e < t; e++)if (255 === l.getUint8(e)) {
            if (i = l.getUint8(e + 1), oe(i)) {
                if (n = l.getUint16(e + 2), s = le(l, e, n), s && u.has(s) && (r = T.get(s), a = r.findPosition(l, e), o = f[s], a.type = s, this.appSegments.push(a), !h && (r.multiSegment && o.multiSegment ? (this.unfinishedMultiSegment = a.chunkNumber < a.chunkCount, this.unfinishedMultiSegment || c.delete(s)) : c.delete(s), 0 === c.size))) break;
                f.recordUnknownSegments && (a = re.findPosition(l, e), a.marker = i, this.unknownSegments.push(a)), e += n + 1;
            } else if (ae(i)) {
                if (n = l.getUint16(e + 2), 218 === i && !1 !== f.stopAfterSos) return;
                f.recordJpegSegments && this.jpegSegments.push({
                    offset: e,
                    length: n,
                    marker: i
                }), e += n + 1;
            }
        }
        return e;
    }
    mergeMultiSegments() {
        if (!this.appSegments.some((e)=>e.multiSegment)) return;
        let e = function(e, t) {
            let i, n, s, r = new Map;
            for(let a = 0; a < e.length; a++)i = e[a], n = i[t], r.has(n) ? s = r.get(n) : r.set(n, s = []), s.push(i);
            return Array.from(r);
        }(this.appSegments, "type");
        this.mergedAppSegments = e.map(([e, t])=>{
            let i = T.get(e, this.options);
            if (i.handleMultiSegments) {
                return {
                    type: e,
                    chunk: i.handleMultiSegments(t)
                };
            }
            return t[0];
        });
    }
    getSegment(e) {
        return this.appSegments.find((t)=>t.type === e);
    }
    async getOrFindSegment(e) {
        let t = this.getSegment(e);
        return void 0 === t && (await this.findAppSegments(0, [
            e
        ]), t = this.getSegment(e)), t;
    }
}
c(he, "type", "jpeg"), w.set("jpeg", he);
const ue = [
    void 0,
    1,
    1,
    2,
    4,
    8,
    1,
    1,
    2,
    4,
    8,
    4,
    8,
    4
];
class ce extends re {
    parseHeader() {
        var e = this.chunk.getUint16();
        18761 === e ? this.le = !0 : 19789 === e && (this.le = !1), this.chunk.le = this.le, this.headerParsed = !0;
    }
    parseTags(e, t, i = new Map) {
        let { pick: n, skip: s } = this.options[t];
        n = new Set(n);
        let r = n.size > 0, a = 0 === s.size, o = this.chunk.getUint16(e);
        e += 2;
        for(let l = 0; l < o; l++){
            let o = this.chunk.getUint16(e);
            if (r) {
                if (n.has(o) && (i.set(o, this.parseTag(e, o, t)), n.delete(o), 0 === n.size)) break;
            } else !a && s.has(o) || i.set(o, this.parseTag(e, o, t));
            e += 12;
        }
        return i;
    }
    parseTag(e, t, i) {
        let { chunk: n } = this, s = n.getUint16(e + 2), r = n.getUint32(e + 4), a = ue[s];
        if (a * r <= 4 ? e += 8 : e = n.getUint32(e + 8), (s < 1 || s > 13) && g(`Invalid TIFF value type. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${s}, offset ${e}`), e > n.byteLength && g(`Invalid TIFF value offset. block: ${i.toUpperCase()}, tag: ${t.toString(16)}, type: ${s}, offset ${e} is outside of chunk size ${n.byteLength}`), 1 === s) return n.getUint8Array(e, r);
        if (2 === s) return m(n.getString(e, r));
        if (7 === s) return n.getUint8Array(e, r);
        if (1 === r) return this.parseTagValue(s, e);
        {
            let t = new (function(e) {
                switch(e){
                    case 1:
                        return Uint8Array;
                    case 3:
                        return Uint16Array;
                    case 4:
                        return Uint32Array;
                    case 5:
                        return Array;
                    case 6:
                        return Int8Array;
                    case 8:
                        return Int16Array;
                    case 9:
                        return Int32Array;
                    case 10:
                        return Array;
                    case 11:
                        return Float32Array;
                    case 12:
                        return Float64Array;
                    default:
                        return Array;
                }
            }(s))(r), i = a;
            for(let n = 0; n < r; n++)t[n] = this.parseTagValue(s, e), e += i;
            return t;
        }
    }
    parseTagValue(e, t) {
        let { chunk: i } = this;
        switch(e){
            case 1:
                return i.getUint8(t);
            case 3:
                return i.getUint16(t);
            case 4:
                return i.getUint32(t);
            case 5:
                return i.getUint32(t) / i.getUint32(t + 4);
            case 6:
                return i.getInt8(t);
            case 8:
                return i.getInt16(t);
            case 9:
                return i.getInt32(t);
            case 10:
                return i.getInt32(t) / i.getInt32(t + 4);
            case 11:
                return i.getFloat(t);
            case 12:
                return i.getDouble(t);
            case 13:
                return i.getUint32(t);
            default:
                g(`Invalid tiff type ${e}`);
        }
    }
}
class fe extends ce {
    static canHandle(e, t) {
        return 225 === e.getUint8(t + 1) && 1165519206 === e.getUint32(t + 4) && 0 === e.getUint16(t + 8);
    }
    async parse() {
        this.parseHeader();
        let { options: e } = this;
        return e.ifd0.enabled && await this.parseIfd0Block(), e.exif.enabled && await this.safeParse("parseExifBlock"), e.gps.enabled && await this.safeParse("parseGpsBlock"), e.interop.enabled && await this.safeParse("parseInteropBlock"), e.ifd1.enabled && await this.safeParse("parseThumbnailBlock"), this.createOutput();
    }
    safeParse(e) {
        let t = this[e]();
        return void 0 !== t.catch && (t = t.catch(this.handleError)), t;
    }
    findIfd0Offset() {
        void 0 === this.ifd0Offset && (this.ifd0Offset = this.chunk.getUint32(4));
    }
    findIfd1Offset() {
        if (void 0 === this.ifd1Offset) {
            this.findIfd0Offset();
            let e = this.chunk.getUint16(this.ifd0Offset), t = this.ifd0Offset + 2 + 12 * e;
            this.ifd1Offset = this.chunk.getUint32(t);
        }
    }
    parseBlock(e, t) {
        let i = new Map;
        return this[t] = i, this.parseTags(e, t, i), i;
    }
    async parseIfd0Block() {
        if (this.ifd0) return;
        let { file: e } = this;
        this.findIfd0Offset(), this.ifd0Offset < 8 && g("Malformed EXIF data"), !e.chunked && this.ifd0Offset > e.byteLength && g(`IFD0 offset points to outside of file.\nthis.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`), e.tiff && await e.ensureChunk(this.ifd0Offset, S(this.options));
        let t = this.parseBlock(this.ifd0Offset, "ifd0");
        return 0 !== t.size ? (this.exifOffset = t.get(34665), this.interopOffset = t.get(40965), this.gpsOffset = t.get(34853), this.xmp = t.get(700), this.iptc = t.get(33723), this.icc = t.get(34675), this.options.sanitize && (t.delete(34665), t.delete(40965), t.delete(34853), t.delete(700), t.delete(33723), t.delete(34675)), t) : void 0;
    }
    async parseExifBlock() {
        if (this.exif) return;
        if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.exifOffset) return;
        this.file.tiff && await this.file.ensureChunk(this.exifOffset, S(this.options));
        let e = this.parseBlock(this.exifOffset, "exif");
        return this.interopOffset || (this.interopOffset = e.get(40965)), this.makerNote = e.get(37500), this.userComment = e.get(37510), this.options.sanitize && (e.delete(40965), e.delete(37500), e.delete(37510)), this.unpack(e, 41728), this.unpack(e, 41729), e;
    }
    unpack(e, t) {
        let i = e.get(t);
        i && 1 === i.length && e.set(t, i[0]);
    }
    async parseGpsBlock() {
        if (this.gps) return;
        if (this.ifd0 || await this.parseIfd0Block(), void 0 === this.gpsOffset) return;
        let e = this.parseBlock(this.gpsOffset, "gps");
        return e && e.has(2) && e.has(4) && (e.set("latitude", de(...e.get(2), e.get(1))), e.set("longitude", de(...e.get(4), e.get(3)))), e;
    }
    async parseInteropBlock() {
        if (!this.interop && (this.ifd0 || await this.parseIfd0Block(), void 0 !== this.interopOffset || this.exif || await this.parseExifBlock(), void 0 !== this.interopOffset)) return this.parseBlock(this.interopOffset, "interop");
    }
    async parseThumbnailBlock(e = !1) {
        if (!this.ifd1 && !this.ifd1Parsed && (!this.options.mergeOutput || e)) return this.findIfd1Offset(), this.ifd1Offset > 0 && (this.parseBlock(this.ifd1Offset, "ifd1"), this.ifd1Parsed = !0), this.ifd1;
    }
    async extractThumbnail() {
        if (this.headerParsed || this.parseHeader(), this.ifd1Parsed || await this.parseThumbnailBlock(!0), void 0 === this.ifd1) return;
        let e = this.ifd1.get(513), t = this.ifd1.get(514);
        return this.chunk.getUint8Array(e, t);
    }
    get image() {
        return this.ifd0;
    }
    get thumbnail() {
        return this.ifd1;
    }
    createOutput() {
        let e, t, i, n = {};
        for (t of H)if (e = this[t], !p(e)) if (i = this.canTranslate ? this.translateBlock(e, t) : Object.fromEntries(e), this.options.mergeOutput) {
            if ("ifd1" === t) continue;
            Object.assign(n, i);
        } else n[t] = i;
        return this.makerNote && (n.makerNote = this.makerNote), this.userComment && (n.userComment = this.userComment), n;
    }
    assignToOutput(e, t) {
        if (this.globalOptions.mergeOutput) Object.assign(e, t);
        else for (let [i, n] of Object.entries(t))this.assignObjectToOutput(e, i, n);
    }
}
function de(e, t, i, n) {
    var s = e + t / 60 + i / 3600;
    return "S" !== n && "W" !== n || (s *= -1), s;
}
c(fe, "type", "tiff"), c(fe, "headerLength", 10), T.set("tiff", fe);
var pe = Object.freeze({
    __proto__: null,
    default: ne,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q,
    parse: ie
});
const ge = {
    ifd0: !1,
    ifd1: !1,
    exif: !1,
    gps: !1,
    interop: !1,
    sanitize: !1,
    reviveValues: !0,
    translateKeys: !1,
    translateValues: !1,
    mergeOutput: !1
}, me = Object.assign({}, ge, {
    firstChunkSize: 4e4,
    gps: [
        1,
        2,
        3,
        4
    ]
});
async function Se(e) {
    let t = new te(me);
    await t.read(e);
    let i = await t.parse();
    if (i && i.gps) {
        let { latitude: e, longitude: t } = i.gps;
        return {
            latitude: e,
            longitude: t
        };
    }
}
const Ce = Object.assign({}, ge, {
    tiff: !1,
    ifd1: !0,
    mergeOutput: !1
});
async function ye(e) {
    let t = new te(Ce);
    await t.read(e);
    let i = await t.extractThumbnail();
    return i && a ? s.from(i) : i;
}
async function be(e) {
    let t = await this.thumbnail(e);
    if (void 0 !== t) {
        let e = new Blob([
            t
        ]);
        return URL.createObjectURL(e);
    }
}
const Ie = Object.assign({}, ge, {
    firstChunkSize: 4e4,
    ifd0: [
        274
    ]
});
async function Pe(e) {
    let t = new te(Ie);
    await t.read(e);
    let i = await t.parse();
    if (i && i.ifd0) return i.ifd0[274];
}
const ke = Object.freeze({
    1: {
        dimensionSwapped: !1,
        scaleX: 1,
        scaleY: 1,
        deg: 0,
        rad: 0
    },
    2: {
        dimensionSwapped: !1,
        scaleX: -1,
        scaleY: 1,
        deg: 0,
        rad: 0
    },
    3: {
        dimensionSwapped: !1,
        scaleX: 1,
        scaleY: 1,
        deg: 180,
        rad: 180 * Math.PI / 180
    },
    4: {
        dimensionSwapped: !1,
        scaleX: -1,
        scaleY: 1,
        deg: 180,
        rad: 180 * Math.PI / 180
    },
    5: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: -1,
        deg: 90,
        rad: 90 * Math.PI / 180
    },
    6: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: 1,
        deg: 90,
        rad: 90 * Math.PI / 180
    },
    7: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: -1,
        deg: 270,
        rad: 270 * Math.PI / 180
    },
    8: {
        dimensionSwapped: !0,
        scaleX: 1,
        scaleY: 1,
        deg: 270,
        rad: 270 * Math.PI / 180
    }
});
let we = !0, Te = !0;
if ("object" == typeof navigator) {
    let e = navigator.userAgent;
    if (e.includes("iPad") || e.includes("iPhone")) {
        let t = e.match(/OS (\d+)_(\d+)/);
        if (t) {
            let [, e, i] = t, n = Number(e) + .1 * Number(i);
            we = n < 13.4, Te = !1;
        }
    } else if (e.includes("OS X 10")) {
        let [, t] = e.match(/OS X 10[_.](\d+)/);
        we = Te = Number(t) < 15;
    }
    if (e.includes("Chrome/")) {
        let [, t] = e.match(/Chrome\/(\d+)/);
        we = Te = Number(t) < 81;
    } else if (e.includes("Firefox/")) {
        let [, t] = e.match(/Firefox\/(\d+)/);
        we = Te = Number(t) < 77;
    }
}
async function Ae(e) {
    let t = await Pe(e);
    return Object.assign({
        canvas: we,
        css: Te
    }, ke[t]);
}
class De extends I {
    constructor(...e){
        super(...e), c(this, "ranges", new Oe), 0 !== this.byteLength && this.ranges.add(0, this.byteLength);
    }
    _tryExtend(e, t, i) {
        if (0 === e && 0 === this.byteLength && i) {
            let e = new DataView(i.buffer || i, i.byteOffset, i.byteLength);
            this._swapDataView(e);
        } else {
            let i = e + t;
            if (i > this.byteLength) {
                let { dataView: e } = this._extend(i);
                this._swapDataView(e);
            }
        }
    }
    _extend(e) {
        let t;
        t = a ? s.allocUnsafe(e) : new Uint8Array(e);
        let i = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return t.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), {
            uintView: t,
            dataView: i
        };
    }
    subarray(e, t, i = !1) {
        return t = t || this._lengthToEnd(e), i && this._tryExtend(e, t), this.ranges.add(e, t), super.subarray(e, t);
    }
    set(e, t, i = !1) {
        i && this._tryExtend(t, e.byteLength, e);
        let n = super.set(e, t);
        return this.ranges.add(t, n.byteLength), n;
    }
    async ensureChunk(e, t) {
        this.chunked && (this.ranges.available(e, t) || await this.readChunk(e, t));
    }
    available(e, t) {
        return this.ranges.available(e, t);
    }
}
class Oe {
    constructor(){
        c(this, "list", []);
    }
    get length() {
        return this.list.length;
    }
    add(e, t, i = 0) {
        let n = e + t, s = this.list.filter((t)=>xe(e, t.offset, n) || xe(e, t.end, n));
        if (s.length > 0) {
            e = Math.min(e, ...s.map((e)=>e.offset)), n = Math.max(n, ...s.map((e)=>e.end)), t = n - e;
            let i = s.shift();
            i.offset = e, i.length = t, i.end = n, this.list = this.list.filter((e)=>!s.includes(e));
        } else this.list.push({
            offset: e,
            length: t,
            end: n
        });
    }
    available(e, t) {
        let i = e + t;
        return this.list.some((t)=>t.offset <= e && i <= t.end);
    }
}
function xe(e, t, i) {
    return e <= t && t <= i;
}
class ve extends De {
    constructor(e, t){
        super(0), c(this, "chunksRead", 0), this.input = e, this.options = t;
    }
    async readWhole() {
        this.chunked = !1, await this.readChunk(this.nextChunkOffset);
    }
    async readChunked() {
        this.chunked = !0, await this.readChunk(0, this.options.firstChunkSize);
    }
    async readNextChunk(e = this.nextChunkOffset) {
        if (this.fullyRead) return this.chunksRead++, !1;
        let t = this.options.chunkSize, i = await this.readChunk(e, t);
        return !!i && i.byteLength === t;
    }
    async readChunk(e, t) {
        if (this.chunksRead++, 0 !== (t = this.safeWrapAddress(e, t))) return this._readChunk(e, t);
    }
    safeWrapAddress(e, t) {
        return void 0 !== this.size && e + t > this.size ? Math.max(0, this.size - e) : t;
    }
    get nextChunkOffset() {
        if (0 !== this.ranges.list.length) return this.ranges.list[0].length;
    }
    get canReadNextChunk() {
        return this.chunksRead < this.options.chunkLimit;
    }
    get fullyRead() {
        return void 0 !== this.size && this.nextChunkOffset === this.size;
    }
    read() {
        return this.options.chunked ? this.readChunked() : this.readWhole();
    }
    close() {}
}
A.set("blob", class extends ve {
    async readWhole() {
        this.chunked = !1;
        let e = await R(this.input);
        this._swapArrayBuffer(e);
    }
    readChunked() {
        return this.chunked = !0, this.size = this.input.size, super.readChunked();
    }
    async _readChunk(e, t) {
        let i = t ? e + t : void 0, n = this.input.slice(e, i), s = await R(n);
        return this.set(s, e, !0);
    }
});
var Me = Object.freeze({
    __proto__: null,
    default: pe,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q,
    parse: ie,
    gpsOnlyOptions: me,
    gps: Se,
    thumbnailOnlyOptions: Ce,
    thumbnail: ye,
    thumbnailUrl: be,
    orientationOnlyOptions: Ie,
    orientation: Pe,
    rotations: ke,
    get rotateCanvas () {
        return we;
    },
    get rotateCss () {
        return Te;
    },
    rotation: Ae
});
A.set("url", class extends ve {
    async readWhole() {
        this.chunked = !1;
        let e = await M(this.input);
        e instanceof ArrayBuffer ? this._swapArrayBuffer(e) : e instanceof Uint8Array && this._swapBuffer(e);
    }
    async _readChunk(e, t) {
        let i = t ? e + t - 1 : void 0, n = this.options.httpHeaders || {};
        (e || i) && (n.range = `bytes=${[
            e,
            i
        ].join("-")}`);
        let s = await h(this.input, {
            headers: n
        }), r = await s.arrayBuffer(), a = r.byteLength;
        if (416 !== s.status) return a !== t && (this.size = e + a), this.set(r, e, !0);
    }
});
I.prototype.getUint64 = function(e) {
    let t = this.getUint32(e), i = this.getUint32(e + 4);
    return t < 1048575 ? t << 32 | i : void 0 !== typeof r ? (console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."), r(t) << r(32) | r(i)) : void g("Trying to read 64b value but JS can only handle 53b numbers.");
};
class Re extends se {
    parseBoxes(e = 0) {
        let t = [];
        for(; e < this.file.byteLength - 4;){
            let i = this.parseBoxHead(e);
            if (t.push(i), 0 === i.length) break;
            e += i.length;
        }
        return t;
    }
    parseSubBoxes(e) {
        e.boxes = this.parseBoxes(e.start);
    }
    findBox(e, t) {
        return void 0 === e.boxes && this.parseSubBoxes(e), e.boxes.find((e)=>e.kind === t);
    }
    parseBoxHead(e) {
        let t = this.file.getUint32(e), i = this.file.getString(e + 4, 4), n = e + 8;
        return 1 === t && (t = this.file.getUint64(e + 8), n += 8), {
            offset: e,
            length: t,
            kind: i,
            start: n
        };
    }
    parseBoxFullHead(e) {
        if (void 0 !== e.version) return;
        let t = this.file.getUint32(e.start);
        e.version = t >> 24, e.start += 4;
    }
}
class Le extends Re {
    static canHandle(e, t) {
        if (0 !== t) return !1;
        let i = e.getUint16(2);
        if (i > 50) return !1;
        let n = 16, s = [];
        for(; n < i;)s.push(e.getString(n, 4)), n += 4;
        return s.includes(this.type);
    }
    async parse() {
        let e = this.file.getUint32(0), t = this.parseBoxHead(e);
        for(; "meta" !== t.kind;)e += t.length, await this.file.ensureChunk(e, 16), t = this.parseBoxHead(e);
        await this.file.ensureChunk(t.offset, t.length), this.parseBoxFullHead(t), this.parseSubBoxes(t), this.options.icc.enabled && await this.findIcc(t), this.options.tiff.enabled && await this.findExif(t);
    }
    async registerSegment(e, t, i) {
        await this.file.ensureChunk(t, i);
        let n = this.file.subarray(t, i);
        this.createParser(e, n);
    }
    async findIcc(e) {
        let t = this.findBox(e, "iprp");
        if (void 0 === t) return;
        let i = this.findBox(t, "ipco");
        if (void 0 === i) return;
        let n = this.findBox(i, "colr");
        void 0 !== n && await this.registerSegment("icc", n.offset + 12, n.length);
    }
    async findExif(e) {
        let t = this.findBox(e, "iinf");
        if (void 0 === t) return;
        let i = this.findBox(e, "iloc");
        if (void 0 === i) return;
        let n = this.findExifLocIdInIinf(t), s = this.findExtentInIloc(i, n);
        if (void 0 === s) return;
        let [r, a] = s;
        await this.file.ensureChunk(r, a);
        let o = 4 + this.file.getUint32(r);
        r += o, a -= o, await this.registerSegment("tiff", r, a);
    }
    findExifLocIdInIinf(e) {
        this.parseBoxFullHead(e);
        let t, i, n, s, r = e.start, a = this.file.getUint16(r);
        for(r += 2; a--;){
            if (t = this.parseBoxHead(r), this.parseBoxFullHead(t), i = t.start, t.version >= 2 && (n = 3 === t.version ? 4 : 2, s = this.file.getString(i + n + 2, 4), "Exif" === s)) return this.file.getUintBytes(i, n);
            r += t.length;
        }
    }
    get8bits(e) {
        let t = this.file.getUint8(e);
        return [
            t >> 4,
            15 & t
        ];
    }
    findExtentInIloc(e, t) {
        this.parseBoxFullHead(e);
        let i = e.start, [n, s] = this.get8bits(i++), [r, a] = this.get8bits(i++), o = 2 === e.version ? 4 : 2, l = 1 === e.version || 2 === e.version ? 2 : 0, h = a + n + s, u = 2 === e.version ? 4 : 2, c = this.file.getUintBytes(i, u);
        for(i += u; c--;){
            let e = this.file.getUintBytes(i, o);
            i += o + l + 2 + r;
            let u = this.file.getUint16(i);
            if (i += 2, e === t) return u > 1 && console.warn("ILOC box has more than one extent but we're only processing one\nPlease create an issue at https://github.com/MikeKovarik/exifr with this file"), [
                this.file.getUintBytes(i + a, n),
                this.file.getUintBytes(i + a + n, s)
            ];
            i += u * h;
        }
    }
}
class Ue extends Le {
}
c(Ue, "type", "heic");
class Fe extends Le {
}
c(Fe, "type", "avif"), w.set("heic", Ue), w.set("avif", Fe), U(E, [
    "ifd0",
    "ifd1"
], [
    [
        256,
        "ImageWidth"
    ],
    [
        257,
        "ImageHeight"
    ],
    [
        258,
        "BitsPerSample"
    ],
    [
        259,
        "Compression"
    ],
    [
        262,
        "PhotometricInterpretation"
    ],
    [
        270,
        "ImageDescription"
    ],
    [
        271,
        "Make"
    ],
    [
        272,
        "Model"
    ],
    [
        273,
        "StripOffsets"
    ],
    [
        274,
        "Orientation"
    ],
    [
        277,
        "SamplesPerPixel"
    ],
    [
        278,
        "RowsPerStrip"
    ],
    [
        279,
        "StripByteCounts"
    ],
    [
        282,
        "XResolution"
    ],
    [
        283,
        "YResolution"
    ],
    [
        284,
        "PlanarConfiguration"
    ],
    [
        296,
        "ResolutionUnit"
    ],
    [
        301,
        "TransferFunction"
    ],
    [
        305,
        "Software"
    ],
    [
        306,
        "ModifyDate"
    ],
    [
        315,
        "Artist"
    ],
    [
        316,
        "HostComputer"
    ],
    [
        317,
        "Predictor"
    ],
    [
        318,
        "WhitePoint"
    ],
    [
        319,
        "PrimaryChromaticities"
    ],
    [
        513,
        "ThumbnailOffset"
    ],
    [
        514,
        "ThumbnailLength"
    ],
    [
        529,
        "YCbCrCoefficients"
    ],
    [
        530,
        "YCbCrSubSampling"
    ],
    [
        531,
        "YCbCrPositioning"
    ],
    [
        532,
        "ReferenceBlackWhite"
    ],
    [
        700,
        "ApplicationNotes"
    ],
    [
        33432,
        "Copyright"
    ],
    [
        33723,
        "IPTC"
    ],
    [
        34665,
        "ExifIFD"
    ],
    [
        34675,
        "ICC"
    ],
    [
        34853,
        "GpsIFD"
    ],
    [
        330,
        "SubIFD"
    ],
    [
        40965,
        "InteropIFD"
    ],
    [
        40091,
        "XPTitle"
    ],
    [
        40092,
        "XPComment"
    ],
    [
        40093,
        "XPAuthor"
    ],
    [
        40094,
        "XPKeywords"
    ],
    [
        40095,
        "XPSubject"
    ]
]), U(E, "exif", [
    [
        33434,
        "ExposureTime"
    ],
    [
        33437,
        "FNumber"
    ],
    [
        34850,
        "ExposureProgram"
    ],
    [
        34852,
        "SpectralSensitivity"
    ],
    [
        34855,
        "ISO"
    ],
    [
        34858,
        "TimeZoneOffset"
    ],
    [
        34859,
        "SelfTimerMode"
    ],
    [
        34864,
        "SensitivityType"
    ],
    [
        34865,
        "StandardOutputSensitivity"
    ],
    [
        34866,
        "RecommendedExposureIndex"
    ],
    [
        34867,
        "ISOSpeed"
    ],
    [
        34868,
        "ISOSpeedLatitudeyyy"
    ],
    [
        34869,
        "ISOSpeedLatitudezzz"
    ],
    [
        36864,
        "ExifVersion"
    ],
    [
        36867,
        "DateTimeOriginal"
    ],
    [
        36868,
        "CreateDate"
    ],
    [
        36873,
        "GooglePlusUploadCode"
    ],
    [
        36880,
        "OffsetTime"
    ],
    [
        36881,
        "OffsetTimeOriginal"
    ],
    [
        36882,
        "OffsetTimeDigitized"
    ],
    [
        37121,
        "ComponentsConfiguration"
    ],
    [
        37122,
        "CompressedBitsPerPixel"
    ],
    [
        37377,
        "ShutterSpeedValue"
    ],
    [
        37378,
        "ApertureValue"
    ],
    [
        37379,
        "BrightnessValue"
    ],
    [
        37380,
        "ExposureCompensation"
    ],
    [
        37381,
        "MaxApertureValue"
    ],
    [
        37382,
        "SubjectDistance"
    ],
    [
        37383,
        "MeteringMode"
    ],
    [
        37384,
        "LightSource"
    ],
    [
        37385,
        "Flash"
    ],
    [
        37386,
        "FocalLength"
    ],
    [
        37393,
        "ImageNumber"
    ],
    [
        37394,
        "SecurityClassification"
    ],
    [
        37395,
        "ImageHistory"
    ],
    [
        37396,
        "SubjectArea"
    ],
    [
        37500,
        "MakerNote"
    ],
    [
        37510,
        "UserComment"
    ],
    [
        37520,
        "SubSecTime"
    ],
    [
        37521,
        "SubSecTimeOriginal"
    ],
    [
        37522,
        "SubSecTimeDigitized"
    ],
    [
        37888,
        "AmbientTemperature"
    ],
    [
        37889,
        "Humidity"
    ],
    [
        37890,
        "Pressure"
    ],
    [
        37891,
        "WaterDepth"
    ],
    [
        37892,
        "Acceleration"
    ],
    [
        37893,
        "CameraElevationAngle"
    ],
    [
        40960,
        "FlashpixVersion"
    ],
    [
        40961,
        "ColorSpace"
    ],
    [
        40962,
        "ExifImageWidth"
    ],
    [
        40963,
        "ExifImageHeight"
    ],
    [
        40964,
        "RelatedSoundFile"
    ],
    [
        41483,
        "FlashEnergy"
    ],
    [
        41486,
        "FocalPlaneXResolution"
    ],
    [
        41487,
        "FocalPlaneYResolution"
    ],
    [
        41488,
        "FocalPlaneResolutionUnit"
    ],
    [
        41492,
        "SubjectLocation"
    ],
    [
        41493,
        "ExposureIndex"
    ],
    [
        41495,
        "SensingMethod"
    ],
    [
        41728,
        "FileSource"
    ],
    [
        41729,
        "SceneType"
    ],
    [
        41730,
        "CFAPattern"
    ],
    [
        41985,
        "CustomRendered"
    ],
    [
        41986,
        "ExposureMode"
    ],
    [
        41987,
        "WhiteBalance"
    ],
    [
        41988,
        "DigitalZoomRatio"
    ],
    [
        41989,
        "FocalLengthIn35mmFormat"
    ],
    [
        41990,
        "SceneCaptureType"
    ],
    [
        41991,
        "GainControl"
    ],
    [
        41992,
        "Contrast"
    ],
    [
        41993,
        "Saturation"
    ],
    [
        41994,
        "Sharpness"
    ],
    [
        41996,
        "SubjectDistanceRange"
    ],
    [
        42016,
        "ImageUniqueID"
    ],
    [
        42032,
        "OwnerName"
    ],
    [
        42033,
        "SerialNumber"
    ],
    [
        42034,
        "LensInfo"
    ],
    [
        42035,
        "LensMake"
    ],
    [
        42036,
        "LensModel"
    ],
    [
        42037,
        "LensSerialNumber"
    ],
    [
        42080,
        "CompositeImage"
    ],
    [
        42081,
        "CompositeImageCount"
    ],
    [
        42082,
        "CompositeImageExposureTimes"
    ],
    [
        42240,
        "Gamma"
    ],
    [
        59932,
        "Padding"
    ],
    [
        59933,
        "OffsetSchema"
    ],
    [
        65e3,
        "OwnerName"
    ],
    [
        65001,
        "SerialNumber"
    ],
    [
        65002,
        "Lens"
    ],
    [
        65100,
        "RawFile"
    ],
    [
        65101,
        "Converter"
    ],
    [
        65102,
        "WhiteBalance"
    ],
    [
        65105,
        "Exposure"
    ],
    [
        65106,
        "Shadows"
    ],
    [
        65107,
        "Brightness"
    ],
    [
        65108,
        "Contrast"
    ],
    [
        65109,
        "Saturation"
    ],
    [
        65110,
        "Sharpness"
    ],
    [
        65111,
        "Smoothness"
    ],
    [
        65112,
        "MoireFilter"
    ],
    [
        40965,
        "InteropIFD"
    ]
]), U(E, "gps", [
    [
        0,
        "GPSVersionID"
    ],
    [
        1,
        "GPSLatitudeRef"
    ],
    [
        2,
        "GPSLatitude"
    ],
    [
        3,
        "GPSLongitudeRef"
    ],
    [
        4,
        "GPSLongitude"
    ],
    [
        5,
        "GPSAltitudeRef"
    ],
    [
        6,
        "GPSAltitude"
    ],
    [
        7,
        "GPSTimeStamp"
    ],
    [
        8,
        "GPSSatellites"
    ],
    [
        9,
        "GPSStatus"
    ],
    [
        10,
        "GPSMeasureMode"
    ],
    [
        11,
        "GPSDOP"
    ],
    [
        12,
        "GPSSpeedRef"
    ],
    [
        13,
        "GPSSpeed"
    ],
    [
        14,
        "GPSTrackRef"
    ],
    [
        15,
        "GPSTrack"
    ],
    [
        16,
        "GPSImgDirectionRef"
    ],
    [
        17,
        "GPSImgDirection"
    ],
    [
        18,
        "GPSMapDatum"
    ],
    [
        19,
        "GPSDestLatitudeRef"
    ],
    [
        20,
        "GPSDestLatitude"
    ],
    [
        21,
        "GPSDestLongitudeRef"
    ],
    [
        22,
        "GPSDestLongitude"
    ],
    [
        23,
        "GPSDestBearingRef"
    ],
    [
        24,
        "GPSDestBearing"
    ],
    [
        25,
        "GPSDestDistanceRef"
    ],
    [
        26,
        "GPSDestDistance"
    ],
    [
        27,
        "GPSProcessingMethod"
    ],
    [
        28,
        "GPSAreaInformation"
    ],
    [
        29,
        "GPSDateStamp"
    ],
    [
        30,
        "GPSDifferential"
    ],
    [
        31,
        "GPSHPositioningError"
    ]
]), U(B, [
    "ifd0",
    "ifd1"
], [
    [
        274,
        {
            1: "Horizontal (normal)",
            2: "Mirror horizontal",
            3: "Rotate 180",
            4: "Mirror vertical",
            5: "Mirror horizontal and rotate 270 CW",
            6: "Rotate 90 CW",
            7: "Mirror horizontal and rotate 90 CW",
            8: "Rotate 270 CW"
        }
    ],
    [
        296,
        {
            1: "None",
            2: "inches",
            3: "cm"
        }
    ]
]);
let Ee = U(B, "exif", [
    [
        34850,
        {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        }
    ],
    [
        37121,
        {
            0: "-",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        }
    ],
    [
        37383,
        {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        }
    ],
    [
        37384,
        {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        }
    ],
    [
        37385,
        {
            0: "Flash did not fire",
            1: "Flash fired",
            5: "Strobe return light not detected",
            7: "Strobe return light detected",
            9: "Flash fired, compulsory flash mode",
            13: "Flash fired, compulsory flash mode, return light not detected",
            15: "Flash fired, compulsory flash mode, return light detected",
            16: "Flash did not fire, compulsory flash mode",
            24: "Flash did not fire, auto mode",
            25: "Flash fired, auto mode",
            29: "Flash fired, auto mode, return light not detected",
            31: "Flash fired, auto mode, return light detected",
            32: "No flash function",
            65: "Flash fired, red-eye reduction mode",
            69: "Flash fired, red-eye reduction mode, return light not detected",
            71: "Flash fired, red-eye reduction mode, return light detected",
            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            89: "Flash fired, auto mode, red-eye reduction mode",
            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        }
    ],
    [
        41495,
        {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        }
    ],
    [
        41728,
        {
            1: "Film Scanner",
            2: "Reflection Print Scanner",
            3: "Digital Camera"
        }
    ],
    [
        41729,
        {
            1: "Directly photographed"
        }
    ],
    [
        41985,
        {
            0: "Normal",
            1: "Custom",
            2: "HDR (no original saved)",
            3: "HDR (original saved)",
            4: "Original (for HDR)",
            6: "Panorama",
            7: "Portrait HDR",
            8: "Portrait"
        }
    ],
    [
        41986,
        {
            0: "Auto",
            1: "Manual",
            2: "Auto bracket"
        }
    ],
    [
        41987,
        {
            0: "Auto",
            1: "Manual"
        }
    ],
    [
        41990,
        {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night",
            4: "Other"
        }
    ],
    [
        41991,
        {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        }
    ],
    [
        41996,
        {
            0: "Unknown",
            1: "Macro",
            2: "Close",
            3: "Distant"
        }
    ],
    [
        42080,
        {
            0: "Unknown",
            1: "Not a Composite Image",
            2: "General Composite Image",
            3: "Composite Image Captured While Shooting"
        }
    ]
]);
const Be = {
    1: "No absolute unit of measurement",
    2: "Inch",
    3: "Centimeter"
};
Ee.set(37392, Be), Ee.set(41488, Be);
const Ne = {
    0: "Normal",
    1: "Low",
    2: "High"
};
function Ge(e) {
    return "object" == typeof e && void 0 !== e.length ? e[0] : e;
}
function Ve(e) {
    let t = Array.from(e).slice(1);
    return t[1] > 15 && (t = t.map((e)=>String.fromCharCode(e))), "0" !== t[2] && 0 !== t[2] || t.pop(), t.join(".");
}
function ze(e) {
    if ("string" == typeof e) {
        var [t, i, n, s, r, a] = e.trim().split(/[-: ]/g).map(Number), o = new Date(t, i - 1, n);
        return Number.isNaN(s) || Number.isNaN(r) || Number.isNaN(a) || (o.setHours(s), o.setMinutes(r), o.setSeconds(a)), Number.isNaN(+o) ? e : o;
    }
}
function He(e) {
    if ("string" == typeof e) return e;
    let t = [];
    if (0 === e[1] && 0 === e[e.length - 1]) for(let i = 0; i < e.length; i += 2)t.push(je(e[i + 1], e[i]));
    else for(let i = 0; i < e.length; i += 2)t.push(je(e[i], e[i + 1]));
    return m(String.fromCodePoint(...t));
}
function je(e, t) {
    return e << 8 | t;
}
Ee.set(41992, Ne), Ee.set(41993, Ne), Ee.set(41994, Ne), U(N, [
    "ifd0",
    "ifd1"
], [
    [
        50827,
        function(e) {
            return "string" != typeof e ? b(e) : e;
        }
    ],
    [
        306,
        ze
    ],
    [
        40091,
        He
    ],
    [
        40092,
        He
    ],
    [
        40093,
        He
    ],
    [
        40094,
        He
    ],
    [
        40095,
        He
    ]
]), U(N, "exif", [
    [
        40960,
        Ve
    ],
    [
        36864,
        Ve
    ],
    [
        36867,
        ze
    ],
    [
        36868,
        ze
    ],
    [
        40962,
        Ge
    ],
    [
        40963,
        Ge
    ]
]), U(N, "gps", [
    [
        0,
        (e)=>Array.from(e).join(".")
    ],
    [
        7,
        (e)=>Array.from(e).join(":")
    ]
]);
class We extends re {
    static canHandle(e, t) {
        return 225 === e.getUint8(t + 1) && 1752462448 === e.getUint32(t + 4) && "http://ns.adobe.com/" === e.getString(t + 4, "http://ns.adobe.com/".length);
    }
    static headerLength(e, t) {
        return "http://ns.adobe.com/xmp/extension/" === e.getString(t + 4, "http://ns.adobe.com/xmp/extension/".length) ? 79 : 4 + "http://ns.adobe.com/xap/1.0/".length + 1;
    }
    static findPosition(e, t) {
        let i = super.findPosition(e, t);
        return i.multiSegment = i.extended = 79 === i.headerLength, i.multiSegment ? (i.chunkCount = e.getUint8(t + 72), i.chunkNumber = e.getUint8(t + 76), 0 !== e.getUint8(t + 77) && i.chunkNumber++) : (i.chunkCount = 1 / 0, i.chunkNumber = -1), i;
    }
    static handleMultiSegments(e) {
        return e.map((e)=>e.chunk.getString()).join("");
    }
    normalizeInput(e) {
        return "string" == typeof e ? e : I.from(e).getString();
    }
    parse(e = this.chunk) {
        if (!this.localOptions.parse) return e;
        e = function(e) {
            let t = {}, i = {};
            for (let e of Ze)t[e] = [], i[e] = 0;
            return e.replace(et, (e, n, s)=>{
                if ("<" === n) {
                    let n = ++i[s];
                    return t[s].push(n), `${e}#${n}`;
                }
                return `${e}#${t[s].pop()}`;
            });
        }(e);
        let t = Xe.findAll(e, "rdf", "Description");
        0 === t.length && t.push(new Xe("rdf", "Description", void 0, e));
        let i, n = {};
        for (let e of t)for (let t of e.properties)i = Je(t.ns, n), _e(t, i);
        return function(e) {
            let t;
            for(let i in e)t = e[i] = f(e[i]), void 0 === t && delete e[i];
            return f(e);
        }(n);
    }
    assignToOutput(e, t) {
        if (this.localOptions.parse) for (let [i, n] of Object.entries(t))switch(i){
            case "tiff":
                this.assignObjectToOutput(e, "ifd0", n);
                break;
            case "exif":
                this.assignObjectToOutput(e, "exif", n);
                break;
            case "xmlns":
                break;
            default:
                this.assignObjectToOutput(e, i, n);
        }
        else e.xmp = t;
    }
}
c(We, "type", "xmp"), c(We, "multiSegment", !0), T.set("xmp", We);
class Ke {
    static findAll(e) {
        return qe(e, /([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)=("[^"]*"|'[^']*')/gm).map(Ke.unpackMatch);
    }
    static unpackMatch(e) {
        let t = e[1], i = e[2], n = e[3].slice(1, -1);
        return n = Qe(n), new Ke(t, i, n);
    }
    constructor(e, t, i){
        this.ns = e, this.name = t, this.value = i;
    }
    serialize() {
        return this.value;
    }
}
class Xe {
    static findAll(e, t, i) {
        if (void 0 !== t || void 0 !== i) {
            t = t || "[\\w\\d-]+", i = i || "[\\w\\d-]+";
            var n = new RegExp(`<(${t}):(${i})(#\\d+)?((\\s+?[\\w\\d-:]+=("[^"]*"|'[^']*'))*\\s*)(\\/>|>([\\s\\S]*?)<\\/\\1:\\2\\3>)`, "gm");
        } else n = /<([\w\d-]+):([\w\d-]+)(#\d+)?((\s+?[\w\d-:]+=("[^"]*"|'[^']*'))*\s*)(\/>|>([\s\S]*?)<\/\1:\2\3>)/gm;
        return qe(e, n).map(Xe.unpackMatch);
    }
    static unpackMatch(e) {
        let t = e[1], i = e[2], n = e[4], s = e[8];
        return new Xe(t, i, n, s);
    }
    constructor(e, t, i, n){
        this.ns = e, this.name = t, this.attrString = i, this.innerXml = n, this.attrs = Ke.findAll(i), this.children = Xe.findAll(n), this.value = 0 === this.children.length ? Qe(n) : void 0, this.properties = [
            ...this.attrs,
            ...this.children
        ];
    }
    get isPrimitive() {
        return void 0 !== this.value && 0 === this.attrs.length && 0 === this.children.length;
    }
    get isListContainer() {
        return 1 === this.children.length && this.children[0].isList;
    }
    get isList() {
        let { ns: e, name: t } = this;
        return "rdf" === e && ("Seq" === t || "Bag" === t || "Alt" === t);
    }
    get isListItem() {
        return "rdf" === this.ns && "li" === this.name;
    }
    serialize() {
        if (0 === this.properties.length && void 0 === this.value) return;
        if (this.isPrimitive) return this.value;
        if (this.isListContainer) return this.children[0].serialize();
        if (this.isList) return $e(this.children.map(Ye));
        if (this.isListItem && 1 === this.children.length && 0 === this.attrs.length) return this.children[0].serialize();
        let e = {};
        for (let t of this.properties)_e(t, e);
        return void 0 !== this.value && (e.value = this.value), f(e);
    }
}
function _e(e, t) {
    let i = e.serialize();
    void 0 !== i && (t[e.name] = i);
}
var Ye = (e)=>e.serialize(), $e = (e)=>1 === e.length ? e[0] : e, Je = (e, t)=>t[e] ? t[e] : t[e] = {};
function qe(e, t) {
    let i, n = [];
    if (!e) return n;
    for(; null !== (i = t.exec(e));)n.push(i);
    return n;
}
function Qe(e) {
    if (function(e) {
        return null == e || "null" === e || "undefined" === e || "" === e || "" === e.trim();
    }(e)) return;
    let t = Number(e);
    if (!Number.isNaN(t)) return t;
    let i = e.toLowerCase();
    return "true" === i || "false" !== i && e.trim();
}
const Ze = [
    "rdf:li",
    "rdf:Seq",
    "rdf:Bag",
    "rdf:Alt",
    "rdf:Description"
], et = new RegExp(`(<|\\/)(${Ze.join("|")})`, "g");
var tt = Object.freeze({
    __proto__: null,
    default: Me,
    Exifr: te,
    fileParsers: w,
    segmentParsers: T,
    fileReaders: A,
    tagKeys: E,
    tagValues: B,
    tagRevivers: N,
    createDictionary: U,
    extendDictionary: F,
    fetchUrlAsArrayBuffer: M,
    readBlobAsArrayBuffer: R,
    chunkedProps: G,
    otherSegments: V,
    segments: z,
    tiffBlocks: H,
    segmentsAndBlocks: j,
    tiffExtractables: W,
    inheritables: K,
    allFormatters: X,
    Options: q,
    parse: ie,
    gpsOnlyOptions: me,
    gps: Se,
    thumbnailOnlyOptions: Ce,
    thumbnail: ye,
    thumbnailUrl: be,
    orientationOnlyOptions: Ie,
    orientation: Pe,
    rotations: ke,
    get rotateCanvas () {
        return we;
    },
    get rotateCss () {
        return Te;
    },
    rotation: Ae
});
const it = [
    "xmp",
    "icc",
    "iptc",
    "tiff"
], nt = ()=>{};
async function st(e, t, i) {
    let n = new q(t);
    n.chunked = !1, void 0 === i && "string" == typeof e && (i = function(e) {
        let t = e.toLowerCase().split(".").pop();
        if (function(e) {
            return "exif" === e || "tiff" === e || "tif" === e;
        }(t)) return "tiff";
        if (it.includes(t)) return t;
    }(e));
    let s = await D(e, n);
    if (i) {
        if (it.includes(i)) return rt(i, s, n);
        g("Invalid segment type");
    } else {
        if (function(e) {
            let t = e.getString(0, 50).trim();
            return t.includes("<?xpacket") || t.includes("<x:");
        }(s)) return rt("xmp", s, n);
        for (let [e] of T){
            if (!it.includes(e)) continue;
            let t = await rt(e, s, n).catch(nt);
            if (t) return t;
        }
        g("Unknown file format");
    }
}
async function rt(e, t, i) {
    let n = i[e];
    return n.enabled = !0, n.parse = !0, T.get(e).parse(t, n);
}
let at = l("fs", (e)=>e.promises);
A.set("fs", class extends ve {
    async readWhole() {
        this.chunked = !1, this.fs = await at;
        let e = await this.fs.readFile(this.input);
        this._swapBuffer(e);
    }
    async readChunked() {
        this.chunked = !0, this.fs = await at, await this.open(), await this.readChunk(0, this.options.firstChunkSize);
    }
    async open() {
        void 0 === this.fh && (this.fh = await this.fs.open(this.input, "r"), this.size = (await this.fh.stat(this.input)).size);
    }
    async _readChunk(e, t) {
        void 0 === this.fh && await this.open(), e + t > this.size && (t = this.size - e);
        var i = this.subarray(e, t, !0);
        return await this.fh.read(i.dataView, 0, t, e), i;
    }
    async close() {
        if (this.fh) {
            let e = this.fh;
            this.fh = void 0, await e.close();
        }
    }
});
A.set("base64", class extends ve {
    constructor(...e){
        super(...e), this.input = this.input.replace(/^data:([^;]+);base64,/gim, ""), this.size = this.input.length / 4 * 3, this.input.endsWith("==") ? this.size -= 2 : this.input.endsWith("=") && (this.size -= 1);
    }
    async _readChunk(e, t) {
        let i, n, r = this.input;
        void 0 === e ? (e = 0, i = 0, n = 0) : (i = 4 * Math.floor(e / 3), n = e - i / 4 * 3), void 0 === t && (t = this.size);
        let o = e + t, l = i + 4 * Math.ceil(o / 3);
        r = r.slice(i, l);
        let h = Math.min(t, this.size - e);
        if (a) {
            let t = s.from(r, "base64").slice(n, n + h);
            return this.set(t, e, !0);
        }
        {
            let t = this.subarray(e, h, !0), i = atob(r), s = t.toUint8();
            for(let e = 0; e < h; e++)s[e] = i.charCodeAt(n + e);
            return t;
        }
    }
});
class ot extends se {
    static canHandle(e, t) {
        return 18761 === t || 19789 === t;
    }
    extendOptions(e) {
        let { ifd0: t, xmp: i, iptc: n, icc: s } = e;
        i.enabled && t.deps.add(700), n.enabled && t.deps.add(33723), s.enabled && t.deps.add(34675), t.finalizeFilters();
    }
    async parse() {
        let { tiff: e, xmp: t, iptc: i, icc: n } = this.options;
        if (e.enabled || t.enabled || i.enabled || n.enabled) {
            let e = Math.max(S(this.options), this.options.chunkSize);
            await this.file.ensureChunk(0, e), this.createParser("tiff", this.file), this.parsers.tiff.parseHeader(), await this.parsers.tiff.parseIfd0Block(), this.adaptTiffPropAsSegment("xmp"), this.adaptTiffPropAsSegment("iptc"), this.adaptTiffPropAsSegment("icc");
        }
    }
    adaptTiffPropAsSegment(e) {
        if (this.parsers.tiff[e]) {
            let t = this.parsers.tiff[e];
            this.injectSegment(e, t);
        }
    }
}
c(ot, "type", "tiff"), w.set("tiff", ot);
let lt = l("zlib");
const ht = [
    "ihdr",
    "iccp",
    "text",
    "itxt",
    "exif"
];
class ut extends se {
    constructor(...e){
        super(...e), c(this, "catchError", (e)=>this.errors.push(e)), c(this, "metaChunks", []), c(this, "unknownChunks", []);
    }
    static canHandle(e, t) {
        return 35152 === t && 2303741511 === e.getUint32(0) && 218765834 === e.getUint32(4);
    }
    async parse() {
        let { file: e } = this;
        await this.findPngChunksInRange("PNG\r\n\n".length, e.byteLength), await this.readSegments(this.metaChunks), this.findIhdr(), this.parseTextChunks(), await this.findExif().catch(this.catchError), await this.findXmp().catch(this.catchError), await this.findIcc().catch(this.catchError);
    }
    async findPngChunksInRange(e, t) {
        let { file: i } = this;
        for(; e < t;){
            let t = i.getUint32(e), n = i.getUint32(e + 4), s = i.getString(e + 4, 4).toLowerCase(), r = t + 4 + 4 + 4, a = {
                type: s,
                offset: e,
                length: r,
                start: e + 4 + 4,
                size: t,
                marker: n
            };
            ht.includes(s) ? this.metaChunks.push(a) : this.unknownChunks.push(a), e += r;
        }
    }
    parseTextChunks() {
        let e = this.metaChunks.filter((e)=>"text" === e.type);
        for (let t of e){
            let [e, i] = this.file.getString(t.start, t.size).split("\0");
            this.injectKeyValToIhdr(e, i);
        }
    }
    injectKeyValToIhdr(e, t) {
        let i = this.parsers.ihdr;
        i && i.raw.set(e, t);
    }
    findIhdr() {
        let e = this.metaChunks.find((e)=>"ihdr" === e.type);
        e && !1 !== this.options.ihdr.enabled && this.createParser("ihdr", e.chunk);
    }
    async findExif() {
        let e = this.metaChunks.find((e)=>"exif" === e.type);
        e && this.injectSegment("tiff", e.chunk);
    }
    async findXmp() {
        let e = this.metaChunks.filter((e)=>"itxt" === e.type);
        for (let t of e){
            "XML:com.adobe.xmp" === t.chunk.getString(0, "XML:com.adobe.xmp".length) && this.injectSegment("xmp", t.chunk);
        }
    }
    async findIcc() {
        let e = this.metaChunks.find((e)=>"iccp" === e.type);
        if (!e) return;
        let { chunk: t } = e, i = t.getUint8Array(0, 81), s = 0;
        for(; s < 80 && 0 !== i[s];)s++;
        let r = s + 2, a = t.getString(0, s);
        if (this.injectKeyValToIhdr("ProfileName", a), n) {
            let e = await lt, i = t.getUint8Array(r);
            i = e.inflateSync(i), this.injectSegment("icc", i);
        }
    }
}
c(ut, "type", "png"), w.set("png", ut), U(E, "interop", [
    [
        1,
        "InteropIndex"
    ],
    [
        2,
        "InteropVersion"
    ],
    [
        4096,
        "RelatedImageFileFormat"
    ],
    [
        4097,
        "RelatedImageWidth"
    ],
    [
        4098,
        "RelatedImageHeight"
    ]
]), F(E, "ifd0", [
    [
        11,
        "ProcessingSoftware"
    ],
    [
        254,
        "SubfileType"
    ],
    [
        255,
        "OldSubfileType"
    ],
    [
        263,
        "Thresholding"
    ],
    [
        264,
        "CellWidth"
    ],
    [
        265,
        "CellLength"
    ],
    [
        266,
        "FillOrder"
    ],
    [
        269,
        "DocumentName"
    ],
    [
        280,
        "MinSampleValue"
    ],
    [
        281,
        "MaxSampleValue"
    ],
    [
        285,
        "PageName"
    ],
    [
        286,
        "XPosition"
    ],
    [
        287,
        "YPosition"
    ],
    [
        290,
        "GrayResponseUnit"
    ],
    [
        297,
        "PageNumber"
    ],
    [
        321,
        "HalftoneHints"
    ],
    [
        322,
        "TileWidth"
    ],
    [
        323,
        "TileLength"
    ],
    [
        332,
        "InkSet"
    ],
    [
        337,
        "TargetPrinter"
    ],
    [
        18246,
        "Rating"
    ],
    [
        18249,
        "RatingPercent"
    ],
    [
        33550,
        "PixelScale"
    ],
    [
        34264,
        "ModelTransform"
    ],
    [
        34377,
        "PhotoshopSettings"
    ],
    [
        50706,
        "DNGVersion"
    ],
    [
        50707,
        "DNGBackwardVersion"
    ],
    [
        50708,
        "UniqueCameraModel"
    ],
    [
        50709,
        "LocalizedCameraModel"
    ],
    [
        50736,
        "DNGLensInfo"
    ],
    [
        50739,
        "ShadowScale"
    ],
    [
        50740,
        "DNGPrivateData"
    ],
    [
        33920,
        "IntergraphMatrix"
    ],
    [
        33922,
        "ModelTiePoint"
    ],
    [
        34118,
        "SEMInfo"
    ],
    [
        34735,
        "GeoTiffDirectory"
    ],
    [
        34736,
        "GeoTiffDoubleParams"
    ],
    [
        34737,
        "GeoTiffAsciiParams"
    ],
    [
        50341,
        "PrintIM"
    ],
    [
        50721,
        "ColorMatrix1"
    ],
    [
        50722,
        "ColorMatrix2"
    ],
    [
        50723,
        "CameraCalibration1"
    ],
    [
        50724,
        "CameraCalibration2"
    ],
    [
        50725,
        "ReductionMatrix1"
    ],
    [
        50726,
        "ReductionMatrix2"
    ],
    [
        50727,
        "AnalogBalance"
    ],
    [
        50728,
        "AsShotNeutral"
    ],
    [
        50729,
        "AsShotWhiteXY"
    ],
    [
        50730,
        "BaselineExposure"
    ],
    [
        50731,
        "BaselineNoise"
    ],
    [
        50732,
        "BaselineSharpness"
    ],
    [
        50734,
        "LinearResponseLimit"
    ],
    [
        50735,
        "CameraSerialNumber"
    ],
    [
        50741,
        "MakerNoteSafety"
    ],
    [
        50778,
        "CalibrationIlluminant1"
    ],
    [
        50779,
        "CalibrationIlluminant2"
    ],
    [
        50781,
        "RawDataUniqueID"
    ],
    [
        50827,
        "OriginalRawFileName"
    ],
    [
        50828,
        "OriginalRawFileData"
    ],
    [
        50831,
        "AsShotICCProfile"
    ],
    [
        50832,
        "AsShotPreProfileMatrix"
    ],
    [
        50833,
        "CurrentICCProfile"
    ],
    [
        50834,
        "CurrentPreProfileMatrix"
    ],
    [
        50879,
        "ColorimetricReference"
    ],
    [
        50885,
        "SRawType"
    ],
    [
        50898,
        "PanasonicTitle"
    ],
    [
        50899,
        "PanasonicTitle2"
    ],
    [
        50931,
        "CameraCalibrationSig"
    ],
    [
        50932,
        "ProfileCalibrationSig"
    ],
    [
        50933,
        "ProfileIFD"
    ],
    [
        50934,
        "AsShotProfileName"
    ],
    [
        50936,
        "ProfileName"
    ],
    [
        50937,
        "ProfileHueSatMapDims"
    ],
    [
        50938,
        "ProfileHueSatMapData1"
    ],
    [
        50939,
        "ProfileHueSatMapData2"
    ],
    [
        50940,
        "ProfileToneCurve"
    ],
    [
        50941,
        "ProfileEmbedPolicy"
    ],
    [
        50942,
        "ProfileCopyright"
    ],
    [
        50964,
        "ForwardMatrix1"
    ],
    [
        50965,
        "ForwardMatrix2"
    ],
    [
        50966,
        "PreviewApplicationName"
    ],
    [
        50967,
        "PreviewApplicationVersion"
    ],
    [
        50968,
        "PreviewSettingsName"
    ],
    [
        50969,
        "PreviewSettingsDigest"
    ],
    [
        50970,
        "PreviewColorSpace"
    ],
    [
        50971,
        "PreviewDateTime"
    ],
    [
        50972,
        "RawImageDigest"
    ],
    [
        50973,
        "OriginalRawFileDigest"
    ],
    [
        50981,
        "ProfileLookTableDims"
    ],
    [
        50982,
        "ProfileLookTableData"
    ],
    [
        51043,
        "TimeCodes"
    ],
    [
        51044,
        "FrameRate"
    ],
    [
        51058,
        "TStop"
    ],
    [
        51081,
        "ReelName"
    ],
    [
        51089,
        "OriginalDefaultFinalSize"
    ],
    [
        51090,
        "OriginalBestQualitySize"
    ],
    [
        51091,
        "OriginalDefaultCropSize"
    ],
    [
        51105,
        "CameraLabel"
    ],
    [
        51107,
        "ProfileHueSatMapEncoding"
    ],
    [
        51108,
        "ProfileLookTableEncoding"
    ],
    [
        51109,
        "BaselineExposureOffset"
    ],
    [
        51110,
        "DefaultBlackRender"
    ],
    [
        51111,
        "NewRawImageDigest"
    ],
    [
        51112,
        "RawToPreviewGain"
    ]
]);
let ct = [
    [
        273,
        "StripOffsets"
    ],
    [
        279,
        "StripByteCounts"
    ],
    [
        288,
        "FreeOffsets"
    ],
    [
        289,
        "FreeByteCounts"
    ],
    [
        291,
        "GrayResponseCurve"
    ],
    [
        292,
        "T4Options"
    ],
    [
        293,
        "T6Options"
    ],
    [
        300,
        "ColorResponseUnit"
    ],
    [
        320,
        "ColorMap"
    ],
    [
        324,
        "TileOffsets"
    ],
    [
        325,
        "TileByteCounts"
    ],
    [
        326,
        "BadFaxLines"
    ],
    [
        327,
        "CleanFaxData"
    ],
    [
        328,
        "ConsecutiveBadFaxLines"
    ],
    [
        330,
        "SubIFD"
    ],
    [
        333,
        "InkNames"
    ],
    [
        334,
        "NumberofInks"
    ],
    [
        336,
        "DotRange"
    ],
    [
        338,
        "ExtraSamples"
    ],
    [
        339,
        "SampleFormat"
    ],
    [
        340,
        "SMinSampleValue"
    ],
    [
        341,
        "SMaxSampleValue"
    ],
    [
        342,
        "TransferRange"
    ],
    [
        343,
        "ClipPath"
    ],
    [
        344,
        "XClipPathUnits"
    ],
    [
        345,
        "YClipPathUnits"
    ],
    [
        346,
        "Indexed"
    ],
    [
        347,
        "JPEGTables"
    ],
    [
        351,
        "OPIProxy"
    ],
    [
        400,
        "GlobalParametersIFD"
    ],
    [
        401,
        "ProfileType"
    ],
    [
        402,
        "FaxProfile"
    ],
    [
        403,
        "CodingMethods"
    ],
    [
        404,
        "VersionYear"
    ],
    [
        405,
        "ModeNumber"
    ],
    [
        433,
        "Decode"
    ],
    [
        434,
        "DefaultImageColor"
    ],
    [
        435,
        "T82Options"
    ],
    [
        437,
        "JPEGTables"
    ],
    [
        512,
        "JPEGProc"
    ],
    [
        515,
        "JPEGRestartInterval"
    ],
    [
        517,
        "JPEGLosslessPredictors"
    ],
    [
        518,
        "JPEGPointTransforms"
    ],
    [
        519,
        "JPEGQTables"
    ],
    [
        520,
        "JPEGDCTables"
    ],
    [
        521,
        "JPEGACTables"
    ],
    [
        559,
        "StripRowCounts"
    ],
    [
        999,
        "USPTOMiscellaneous"
    ],
    [
        18247,
        "XP_DIP_XML"
    ],
    [
        18248,
        "StitchInfo"
    ],
    [
        28672,
        "SonyRawFileType"
    ],
    [
        28688,
        "SonyToneCurve"
    ],
    [
        28721,
        "VignettingCorrection"
    ],
    [
        28722,
        "VignettingCorrParams"
    ],
    [
        28724,
        "ChromaticAberrationCorrection"
    ],
    [
        28725,
        "ChromaticAberrationCorrParams"
    ],
    [
        28726,
        "DistortionCorrection"
    ],
    [
        28727,
        "DistortionCorrParams"
    ],
    [
        29895,
        "SonyCropTopLeft"
    ],
    [
        29896,
        "SonyCropSize"
    ],
    [
        32781,
        "ImageID"
    ],
    [
        32931,
        "WangTag1"
    ],
    [
        32932,
        "WangAnnotation"
    ],
    [
        32933,
        "WangTag3"
    ],
    [
        32934,
        "WangTag4"
    ],
    [
        32953,
        "ImageReferencePoints"
    ],
    [
        32954,
        "RegionXformTackPoint"
    ],
    [
        32955,
        "WarpQuadrilateral"
    ],
    [
        32956,
        "AffineTransformMat"
    ],
    [
        32995,
        "Matteing"
    ],
    [
        32996,
        "DataType"
    ],
    [
        32997,
        "ImageDepth"
    ],
    [
        32998,
        "TileDepth"
    ],
    [
        33300,
        "ImageFullWidth"
    ],
    [
        33301,
        "ImageFullHeight"
    ],
    [
        33302,
        "TextureFormat"
    ],
    [
        33303,
        "WrapModes"
    ],
    [
        33304,
        "FovCot"
    ],
    [
        33305,
        "MatrixWorldToScreen"
    ],
    [
        33306,
        "MatrixWorldToCamera"
    ],
    [
        33405,
        "Model2"
    ],
    [
        33421,
        "CFARepeatPatternDim"
    ],
    [
        33422,
        "CFAPattern2"
    ],
    [
        33423,
        "BatteryLevel"
    ],
    [
        33424,
        "KodakIFD"
    ],
    [
        33445,
        "MDFileTag"
    ],
    [
        33446,
        "MDScalePixel"
    ],
    [
        33447,
        "MDColorTable"
    ],
    [
        33448,
        "MDLabName"
    ],
    [
        33449,
        "MDSampleInfo"
    ],
    [
        33450,
        "MDPrepDate"
    ],
    [
        33451,
        "MDPrepTime"
    ],
    [
        33452,
        "MDFileUnits"
    ],
    [
        33589,
        "AdventScale"
    ],
    [
        33590,
        "AdventRevision"
    ],
    [
        33628,
        "UIC1Tag"
    ],
    [
        33629,
        "UIC2Tag"
    ],
    [
        33630,
        "UIC3Tag"
    ],
    [
        33631,
        "UIC4Tag"
    ],
    [
        33918,
        "IntergraphPacketData"
    ],
    [
        33919,
        "IntergraphFlagRegisters"
    ],
    [
        33921,
        "INGRReserved"
    ],
    [
        34016,
        "Site"
    ],
    [
        34017,
        "ColorSequence"
    ],
    [
        34018,
        "IT8Header"
    ],
    [
        34019,
        "RasterPadding"
    ],
    [
        34020,
        "BitsPerRunLength"
    ],
    [
        34021,
        "BitsPerExtendedRunLength"
    ],
    [
        34022,
        "ColorTable"
    ],
    [
        34023,
        "ImageColorIndicator"
    ],
    [
        34024,
        "BackgroundColorIndicator"
    ],
    [
        34025,
        "ImageColorValue"
    ],
    [
        34026,
        "BackgroundColorValue"
    ],
    [
        34027,
        "PixelIntensityRange"
    ],
    [
        34028,
        "TransparencyIndicator"
    ],
    [
        34029,
        "ColorCharacterization"
    ],
    [
        34030,
        "HCUsage"
    ],
    [
        34031,
        "TrapIndicator"
    ],
    [
        34032,
        "CMYKEquivalent"
    ],
    [
        34152,
        "AFCP_IPTC"
    ],
    [
        34232,
        "PixelMagicJBIGOptions"
    ],
    [
        34263,
        "JPLCartoIFD"
    ],
    [
        34306,
        "WB_GRGBLevels"
    ],
    [
        34310,
        "LeafData"
    ],
    [
        34687,
        "TIFF_FXExtensions"
    ],
    [
        34688,
        "MultiProfiles"
    ],
    [
        34689,
        "SharedData"
    ],
    [
        34690,
        "T88Options"
    ],
    [
        34732,
        "ImageLayer"
    ],
    [
        34750,
        "JBIGOptions"
    ],
    [
        34856,
        "Opto-ElectricConvFactor"
    ],
    [
        34857,
        "Interlace"
    ],
    [
        34908,
        "FaxRecvParams"
    ],
    [
        34909,
        "FaxSubAddress"
    ],
    [
        34910,
        "FaxRecvTime"
    ],
    [
        34929,
        "FedexEDR"
    ],
    [
        34954,
        "LeafSubIFD"
    ],
    [
        37387,
        "FlashEnergy"
    ],
    [
        37388,
        "SpatialFrequencyResponse"
    ],
    [
        37389,
        "Noise"
    ],
    [
        37390,
        "FocalPlaneXResolution"
    ],
    [
        37391,
        "FocalPlaneYResolution"
    ],
    [
        37392,
        "FocalPlaneResolutionUnit"
    ],
    [
        37397,
        "ExposureIndex"
    ],
    [
        37398,
        "TIFF-EPStandardID"
    ],
    [
        37399,
        "SensingMethod"
    ],
    [
        37434,
        "CIP3DataFile"
    ],
    [
        37435,
        "CIP3Sheet"
    ],
    [
        37436,
        "CIP3Side"
    ],
    [
        37439,
        "StoNits"
    ],
    [
        37679,
        "MSDocumentText"
    ],
    [
        37680,
        "MSPropertySetStorage"
    ],
    [
        37681,
        "MSDocumentTextPosition"
    ],
    [
        37724,
        "ImageSourceData"
    ],
    [
        40965,
        "InteropIFD"
    ],
    [
        40976,
        "SamsungRawPointersOffset"
    ],
    [
        40977,
        "SamsungRawPointersLength"
    ],
    [
        41217,
        "SamsungRawByteOrder"
    ],
    [
        41218,
        "SamsungRawUnknown"
    ],
    [
        41484,
        "SpatialFrequencyResponse"
    ],
    [
        41485,
        "Noise"
    ],
    [
        41489,
        "ImageNumber"
    ],
    [
        41490,
        "SecurityClassification"
    ],
    [
        41491,
        "ImageHistory"
    ],
    [
        41494,
        "TIFF-EPStandardID"
    ],
    [
        41995,
        "DeviceSettingDescription"
    ],
    [
        42112,
        "GDALMetadata"
    ],
    [
        42113,
        "GDALNoData"
    ],
    [
        44992,
        "ExpandSoftware"
    ],
    [
        44993,
        "ExpandLens"
    ],
    [
        44994,
        "ExpandFilm"
    ],
    [
        44995,
        "ExpandFilterLens"
    ],
    [
        44996,
        "ExpandScanner"
    ],
    [
        44997,
        "ExpandFlashLamp"
    ],
    [
        46275,
        "HasselbladRawImage"
    ],
    [
        48129,
        "PixelFormat"
    ],
    [
        48130,
        "Transformation"
    ],
    [
        48131,
        "Uncompressed"
    ],
    [
        48132,
        "ImageType"
    ],
    [
        48256,
        "ImageWidth"
    ],
    [
        48257,
        "ImageHeight"
    ],
    [
        48258,
        "WidthResolution"
    ],
    [
        48259,
        "HeightResolution"
    ],
    [
        48320,
        "ImageOffset"
    ],
    [
        48321,
        "ImageByteCount"
    ],
    [
        48322,
        "AlphaOffset"
    ],
    [
        48323,
        "AlphaByteCount"
    ],
    [
        48324,
        "ImageDataDiscard"
    ],
    [
        48325,
        "AlphaDataDiscard"
    ],
    [
        50215,
        "OceScanjobDesc"
    ],
    [
        50216,
        "OceApplicationSelector"
    ],
    [
        50217,
        "OceIDNumber"
    ],
    [
        50218,
        "OceImageLogic"
    ],
    [
        50255,
        "Annotations"
    ],
    [
        50459,
        "HasselbladExif"
    ],
    [
        50547,
        "OriginalFileName"
    ],
    [
        50560,
        "USPTOOriginalContentType"
    ],
    [
        50656,
        "CR2CFAPattern"
    ],
    [
        50710,
        "CFAPlaneColor"
    ],
    [
        50711,
        "CFALayout"
    ],
    [
        50712,
        "LinearizationTable"
    ],
    [
        50713,
        "BlackLevelRepeatDim"
    ],
    [
        50714,
        "BlackLevel"
    ],
    [
        50715,
        "BlackLevelDeltaH"
    ],
    [
        50716,
        "BlackLevelDeltaV"
    ],
    [
        50717,
        "WhiteLevel"
    ],
    [
        50718,
        "DefaultScale"
    ],
    [
        50719,
        "DefaultCropOrigin"
    ],
    [
        50720,
        "DefaultCropSize"
    ],
    [
        50733,
        "BayerGreenSplit"
    ],
    [
        50737,
        "ChromaBlurRadius"
    ],
    [
        50738,
        "AntiAliasStrength"
    ],
    [
        50752,
        "RawImageSegmentation"
    ],
    [
        50780,
        "BestQualityScale"
    ],
    [
        50784,
        "AliasLayerMetadata"
    ],
    [
        50829,
        "ActiveArea"
    ],
    [
        50830,
        "MaskedAreas"
    ],
    [
        50935,
        "NoiseReductionApplied"
    ],
    [
        50974,
        "SubTileBlockSize"
    ],
    [
        50975,
        "RowInterleaveFactor"
    ],
    [
        51008,
        "OpcodeList1"
    ],
    [
        51009,
        "OpcodeList2"
    ],
    [
        51022,
        "OpcodeList3"
    ],
    [
        51041,
        "NoiseProfile"
    ],
    [
        51114,
        "CacheVersion"
    ],
    [
        51125,
        "DefaultUserCrop"
    ],
    [
        51157,
        "NikonNEFInfo"
    ],
    [
        65024,
        "KdcIFD"
    ]
];
F(E, "ifd0", ct), F(E, "exif", ct), U(B, "gps", [
    [
        23,
        {
            M: "Magnetic North",
            T: "True North"
        }
    ],
    [
        25,
        {
            K: "Kilometers",
            M: "Miles",
            N: "Nautical Miles"
        }
    ]
]);
class ft extends re {
    static canHandle(e, t) {
        return 224 === e.getUint8(t + 1) && 1246120262 === e.getUint32(t + 4) && 0 === e.getUint8(t + 8);
    }
    parse() {
        return this.parseTags(), this.translate(), this.output;
    }
    parseTags() {
        this.raw = new Map([
            [
                0,
                this.chunk.getUint16(0)
            ],
            [
                2,
                this.chunk.getUint8(2)
            ],
            [
                3,
                this.chunk.getUint16(3)
            ],
            [
                5,
                this.chunk.getUint16(5)
            ],
            [
                7,
                this.chunk.getUint8(7)
            ],
            [
                8,
                this.chunk.getUint8(8)
            ]
        ]);
    }
}
c(ft, "type", "jfif"), c(ft, "headerLength", 9), T.set("jfif", ft), U(E, "jfif", [
    [
        0,
        "JFIFVersion"
    ],
    [
        2,
        "ResolutionUnit"
    ],
    [
        3,
        "XResolution"
    ],
    [
        5,
        "YResolution"
    ],
    [
        7,
        "ThumbnailWidth"
    ],
    [
        8,
        "ThumbnailHeight"
    ]
]);
class dt extends re {
    parse() {
        return this.parseTags(), this.translate(), this.output;
    }
    parseTags() {
        this.raw = new Map([
            [
                0,
                this.chunk.getUint32(0)
            ],
            [
                4,
                this.chunk.getUint32(4)
            ],
            [
                8,
                this.chunk.getUint8(8)
            ],
            [
                9,
                this.chunk.getUint8(9)
            ],
            [
                10,
                this.chunk.getUint8(10)
            ],
            [
                11,
                this.chunk.getUint8(11)
            ],
            [
                12,
                this.chunk.getUint8(12)
            ],
            ...Array.from(this.raw)
        ]);
    }
}
c(dt, "type", "ihdr"), T.set("ihdr", dt), U(E, "ihdr", [
    [
        0,
        "ImageWidth"
    ],
    [
        4,
        "ImageHeight"
    ],
    [
        8,
        "BitDepth"
    ],
    [
        9,
        "ColorType"
    ],
    [
        10,
        "Compression"
    ],
    [
        11,
        "Filter"
    ],
    [
        12,
        "Interlace"
    ]
]), U(B, "ihdr", [
    [
        9,
        {
            0: "Grayscale",
            2: "RGB",
            3: "Palette",
            4: "Grayscale with Alpha",
            6: "RGB with Alpha",
            DEFAULT: "Unknown"
        }
    ],
    [
        10,
        {
            0: "Deflate/Inflate",
            DEFAULT: "Unknown"
        }
    ],
    [
        11,
        {
            0: "Adaptive",
            DEFAULT: "Unknown"
        }
    ],
    [
        12,
        {
            0: "Noninterlaced",
            1: "Adam7 Interlace",
            DEFAULT: "Unknown"
        }
    ]
]);
class pt extends re {
    static canHandle(e, t) {
        return 226 === e.getUint8(t + 1) && 1229144927 === e.getUint32(t + 4);
    }
    static findPosition(e, t) {
        let i = super.findPosition(e, t);
        return i.chunkNumber = e.getUint8(t + 16), i.chunkCount = e.getUint8(t + 17), i.multiSegment = i.chunkCount > 1, i;
    }
    static handleMultiSegments(e) {
        return function(e) {
            let t = function(e) {
                let t = e[0].constructor, i = 0;
                for (let t of e)i += t.length;
                let n = new t(i), s = 0;
                for (let t of e)n.set(t, s), s += t.length;
                return n;
            }(e.map((e)=>e.chunk.toUint8()));
            return new I(t);
        }(e);
    }
    parse() {
        return this.raw = new Map, this.parseHeader(), this.parseTags(), this.translate(), this.output;
    }
    parseHeader() {
        let { raw: e } = this;
        this.chunk.byteLength < 84 && g("ICC header is too short");
        for (let [t, i] of Object.entries(gt)){
            t = parseInt(t, 10);
            let n = i(this.chunk, t);
            "\0\0\0\0" !== n && e.set(t, n);
        }
    }
    parseTags() {
        let e, t, i, n, s, { raw: r } = this, a = this.chunk.getUint32(128), o = 132, l = this.chunk.byteLength;
        for(; a--;){
            if (e = this.chunk.getString(o, 4), t = this.chunk.getUint32(o + 4), i = this.chunk.getUint32(o + 8), n = this.chunk.getString(t, 4), t + i > l) return void console.warn("reached the end of the first ICC chunk. Enable options.tiff.multiSegment to read all ICC segments.");
            s = this.parseTag(n, t, i), void 0 !== s && "\0\0\0\0" !== s && r.set(e, s), o += 12;
        }
    }
    parseTag(e, t, i) {
        switch(e){
            case "desc":
                return this.parseDesc(t);
            case "mluc":
                return this.parseMluc(t);
            case "text":
                return this.parseText(t, i);
            case "sig ":
                return this.parseSig(t);
        }
        if (!(t + i > this.chunk.byteLength)) return this.chunk.getUint8Array(t, i);
    }
    parseDesc(e) {
        let t = this.chunk.getUint32(e + 8) - 1;
        return m(this.chunk.getString(e + 12, t));
    }
    parseText(e, t) {
        return m(this.chunk.getString(e + 8, t - 8));
    }
    parseSig(e) {
        return m(this.chunk.getString(e + 8, 4));
    }
    parseMluc(e) {
        let { chunk: t } = this, i = t.getUint32(e + 8), n = t.getUint32(e + 12), s = e + 16, r = [];
        for(let a = 0; a < i; a++){
            let i = t.getString(s + 0, 2), a = t.getString(s + 2, 2), o = t.getUint32(s + 4), l = t.getUint32(s + 8) + e, h = m(t.getUnicodeString(l, o));
            r.push({
                lang: i,
                country: a,
                text: h
            }), s += n;
        }
        return 1 === i ? r[0].text : r;
    }
    translateValue(e, t) {
        return "string" == typeof e ? t[e] || t[e.toLowerCase()] || e : t[e] || e;
    }
}
c(pt, "type", "icc"), c(pt, "multiSegment", !0), c(pt, "headerLength", 18);
const gt = {
    4: mt,
    8: function(e, t) {
        return [
            e.getUint8(t),
            e.getUint8(t + 1) >> 4,
            e.getUint8(t + 1) % 16
        ].map((e)=>e.toString(10)).join(".");
    },
    12: mt,
    16: mt,
    20: mt,
    24: function(e, t) {
        const i = e.getUint16(t), n = e.getUint16(t + 2) - 1, s = e.getUint16(t + 4), r = e.getUint16(t + 6), a = e.getUint16(t + 8), o = e.getUint16(t + 10);
        return new Date(Date.UTC(i, n, s, r, a, o));
    },
    36: mt,
    40: mt,
    48: mt,
    52: mt,
    64: (e, t)=>e.getUint32(t),
    80: mt
};
function mt(e, t) {
    return m(e.getString(t, 4));
}
T.set("icc", pt), U(E, "icc", [
    [
        4,
        "ProfileCMMType"
    ],
    [
        8,
        "ProfileVersion"
    ],
    [
        12,
        "ProfileClass"
    ],
    [
        16,
        "ColorSpaceData"
    ],
    [
        20,
        "ProfileConnectionSpace"
    ],
    [
        24,
        "ProfileDateTime"
    ],
    [
        36,
        "ProfileFileSignature"
    ],
    [
        40,
        "PrimaryPlatform"
    ],
    [
        44,
        "CMMFlags"
    ],
    [
        48,
        "DeviceManufacturer"
    ],
    [
        52,
        "DeviceModel"
    ],
    [
        56,
        "DeviceAttributes"
    ],
    [
        64,
        "RenderingIntent"
    ],
    [
        68,
        "ConnectionSpaceIlluminant"
    ],
    [
        80,
        "ProfileCreator"
    ],
    [
        84,
        "ProfileID"
    ],
    [
        "Header",
        "ProfileHeader"
    ],
    [
        "MS00",
        "WCSProfiles"
    ],
    [
        "bTRC",
        "BlueTRC"
    ],
    [
        "bXYZ",
        "BlueMatrixColumn"
    ],
    [
        "bfd",
        "UCRBG"
    ],
    [
        "bkpt",
        "MediaBlackPoint"
    ],
    [
        "calt",
        "CalibrationDateTime"
    ],
    [
        "chad",
        "ChromaticAdaptation"
    ],
    [
        "chrm",
        "Chromaticity"
    ],
    [
        "ciis",
        "ColorimetricIntentImageState"
    ],
    [
        "clot",
        "ColorantTableOut"
    ],
    [
        "clro",
        "ColorantOrder"
    ],
    [
        "clrt",
        "ColorantTable"
    ],
    [
        "cprt",
        "ProfileCopyright"
    ],
    [
        "crdi",
        "CRDInfo"
    ],
    [
        "desc",
        "ProfileDescription"
    ],
    [
        "devs",
        "DeviceSettings"
    ],
    [
        "dmdd",
        "DeviceModelDesc"
    ],
    [
        "dmnd",
        "DeviceMfgDesc"
    ],
    [
        "dscm",
        "ProfileDescriptionML"
    ],
    [
        "fpce",
        "FocalPlaneColorimetryEstimates"
    ],
    [
        "gTRC",
        "GreenTRC"
    ],
    [
        "gXYZ",
        "GreenMatrixColumn"
    ],
    [
        "gamt",
        "Gamut"
    ],
    [
        "kTRC",
        "GrayTRC"
    ],
    [
        "lumi",
        "Luminance"
    ],
    [
        "meas",
        "Measurement"
    ],
    [
        "meta",
        "Metadata"
    ],
    [
        "mmod",
        "MakeAndModel"
    ],
    [
        "ncl2",
        "NamedColor2"
    ],
    [
        "ncol",
        "NamedColor"
    ],
    [
        "ndin",
        "NativeDisplayInfo"
    ],
    [
        "pre0",
        "Preview0"
    ],
    [
        "pre1",
        "Preview1"
    ],
    [
        "pre2",
        "Preview2"
    ],
    [
        "ps2i",
        "PS2RenderingIntent"
    ],
    [
        "ps2s",
        "PostScript2CSA"
    ],
    [
        "psd0",
        "PostScript2CRD0"
    ],
    [
        "psd1",
        "PostScript2CRD1"
    ],
    [
        "psd2",
        "PostScript2CRD2"
    ],
    [
        "psd3",
        "PostScript2CRD3"
    ],
    [
        "pseq",
        "ProfileSequenceDesc"
    ],
    [
        "psid",
        "ProfileSequenceIdentifier"
    ],
    [
        "psvm",
        "PS2CRDVMSize"
    ],
    [
        "rTRC",
        "RedTRC"
    ],
    [
        "rXYZ",
        "RedMatrixColumn"
    ],
    [
        "resp",
        "OutputResponse"
    ],
    [
        "rhoc",
        "ReflectionHardcopyOrigColorimetry"
    ],
    [
        "rig0",
        "PerceptualRenderingIntentGamut"
    ],
    [
        "rig2",
        "SaturationRenderingIntentGamut"
    ],
    [
        "rpoc",
        "ReflectionPrintOutputColorimetry"
    ],
    [
        "sape",
        "SceneAppearanceEstimates"
    ],
    [
        "scoe",
        "SceneColorimetryEstimates"
    ],
    [
        "scrd",
        "ScreeningDesc"
    ],
    [
        "scrn",
        "Screening"
    ],
    [
        "targ",
        "CharTarget"
    ],
    [
        "tech",
        "Technology"
    ],
    [
        "vcgt",
        "VideoCardGamma"
    ],
    [
        "view",
        "ViewingConditions"
    ],
    [
        "vued",
        "ViewingCondDesc"
    ],
    [
        "wtpt",
        "MediaWhitePoint"
    ]
]);
const St = {
    "4d2p": "Erdt Systems",
    AAMA: "Aamazing Technologies",
    ACER: "Acer",
    ACLT: "Acolyte Color Research",
    ACTI: "Actix Sytems",
    ADAR: "Adara Technology",
    ADBE: "Adobe",
    ADI: "ADI Systems",
    AGFA: "Agfa Graphics",
    ALMD: "Alps Electric",
    ALPS: "Alps Electric",
    ALWN: "Alwan Color Expertise",
    AMTI: "Amiable Technologies",
    AOC: "AOC International",
    APAG: "Apago",
    APPL: "Apple Computer",
    AST: "AST",
    "AT&T": "AT&T",
    BAEL: "BARBIERI electronic",
    BRCO: "Barco NV",
    BRKP: "Breakpoint",
    BROT: "Brother",
    BULL: "Bull",
    BUS: "Bus Computer Systems",
    "C-IT": "C-Itoh",
    CAMR: "Intel",
    CANO: "Canon",
    CARR: "Carroll Touch",
    CASI: "Casio",
    CBUS: "Colorbus PL",
    CEL: "Crossfield",
    CELx: "Crossfield",
    CGS: "CGS Publishing Technologies International",
    CHM: "Rochester Robotics",
    CIGL: "Colour Imaging Group, London",
    CITI: "Citizen",
    CL00: "Candela",
    CLIQ: "Color IQ",
    CMCO: "Chromaco",
    CMiX: "CHROMiX",
    COLO: "Colorgraphic Communications",
    COMP: "Compaq",
    COMp: "Compeq/Focus Technology",
    CONR: "Conrac Display Products",
    CORD: "Cordata Technologies",
    CPQ: "Compaq",
    CPRO: "ColorPro",
    CRN: "Cornerstone",
    CTX: "CTX International",
    CVIS: "ColorVision",
    CWC: "Fujitsu Laboratories",
    DARI: "Darius Technology",
    DATA: "Dataproducts",
    DCP: "Dry Creek Photo",
    DCRC: "Digital Contents Resource Center, Chung-Ang University",
    DELL: "Dell Computer",
    DIC: "Dainippon Ink and Chemicals",
    DICO: "Diconix",
    DIGI: "Digital",
    "DL&C": "Digital Light & Color",
    DPLG: "Doppelganger",
    DS: "Dainippon Screen",
    DSOL: "DOOSOL",
    DUPN: "DuPont",
    EPSO: "Epson",
    ESKO: "Esko-Graphics",
    ETRI: "Electronics and Telecommunications Research Institute",
    EVER: "Everex Systems",
    EXAC: "ExactCODE",
    Eizo: "Eizo",
    FALC: "Falco Data Products",
    FF: "Fuji Photo Film",
    FFEI: "FujiFilm Electronic Imaging",
    FNRD: "Fnord Software",
    FORA: "Fora",
    FORE: "Forefront Technology",
    FP: "Fujitsu",
    FPA: "WayTech Development",
    FUJI: "Fujitsu",
    FX: "Fuji Xerox",
    GCC: "GCC Technologies",
    GGSL: "Global Graphics Software",
    GMB: "Gretagmacbeth",
    GMG: "GMG",
    GOLD: "GoldStar Technology",
    GOOG: "Google",
    GPRT: "Giantprint",
    GTMB: "Gretagmacbeth",
    GVC: "WayTech Development",
    GW2K: "Sony",
    HCI: "HCI",
    HDM: "Heidelberger Druckmaschinen",
    HERM: "Hermes",
    HITA: "Hitachi America",
    HP: "Hewlett-Packard",
    HTC: "Hitachi",
    HiTi: "HiTi Digital",
    IBM: "IBM",
    IDNT: "Scitex",
    IEC: "Hewlett-Packard",
    IIYA: "Iiyama North America",
    IKEG: "Ikegami Electronics",
    IMAG: "Image Systems",
    IMI: "Ingram Micro",
    INTC: "Intel",
    INTL: "N/A (INTL)",
    INTR: "Intra Electronics",
    IOCO: "Iocomm International Technology",
    IPS: "InfoPrint Solutions Company",
    IRIS: "Scitex",
    ISL: "Ichikawa Soft Laboratory",
    ITNL: "N/A (ITNL)",
    IVM: "IVM",
    IWAT: "Iwatsu Electric",
    Idnt: "Scitex",
    Inca: "Inca Digital Printers",
    Iris: "Scitex",
    JPEG: "Joint Photographic Experts Group",
    JSFT: "Jetsoft Development",
    JVC: "JVC Information Products",
    KART: "Scitex",
    KFC: "KFC Computek Components",
    KLH: "KLH Computers",
    KMHD: "Konica Minolta",
    KNCA: "Konica",
    KODA: "Kodak",
    KYOC: "Kyocera",
    Kart: "Scitex",
    LCAG: "Leica",
    LCCD: "Leeds Colour",
    LDAK: "Left Dakota",
    LEAD: "Leading Technology",
    LEXM: "Lexmark International",
    LINK: "Link Computer",
    LINO: "Linotronic",
    LITE: "Lite-On",
    Leaf: "Leaf",
    Lino: "Linotronic",
    MAGC: "Mag Computronic",
    MAGI: "MAG Innovision",
    MANN: "Mannesmann",
    MICN: "Micron Technology",
    MICR: "Microtek",
    MICV: "Microvitec",
    MINO: "Minolta",
    MITS: "Mitsubishi Electronics America",
    MITs: "Mitsuba",
    MNLT: "Minolta",
    MODG: "Modgraph",
    MONI: "Monitronix",
    MONS: "Monaco Systems",
    MORS: "Morse Technology",
    MOTI: "Motive Systems",
    MSFT: "Microsoft",
    MUTO: "MUTOH INDUSTRIES",
    Mits: "Mitsubishi Electric",
    NANA: "NANAO",
    NEC: "NEC",
    NEXP: "NexPress Solutions",
    NISS: "Nissei Sangyo America",
    NKON: "Nikon",
    NONE: "none",
    OCE: "Oce Technologies",
    OCEC: "OceColor",
    OKI: "Oki",
    OKID: "Okidata",
    OKIP: "Okidata",
    OLIV: "Olivetti",
    OLYM: "Olympus",
    ONYX: "Onyx Graphics",
    OPTI: "Optiquest",
    PACK: "Packard Bell",
    PANA: "Matsushita Electric Industrial",
    PANT: "Pantone",
    PBN: "Packard Bell",
    PFU: "PFU",
    PHIL: "Philips Consumer Electronics",
    PNTX: "HOYA",
    POne: "Phase One A/S",
    PREM: "Premier Computer Innovations",
    PRIN: "Princeton Graphic Systems",
    PRIP: "Princeton Publishing Labs",
    QLUX: "Hong Kong",
    QMS: "QMS",
    QPCD: "QPcard AB",
    QUAD: "QuadLaser",
    QUME: "Qume",
    RADI: "Radius",
    RDDx: "Integrated Color Solutions",
    RDG: "Roland DG",
    REDM: "REDMS Group",
    RELI: "Relisys",
    RGMS: "Rolf Gierling Multitools",
    RICO: "Ricoh",
    RNLD: "Edmund Ronald",
    ROYA: "Royal",
    RPC: "Ricoh Printing Systems",
    RTL: "Royal Information Electronics",
    SAMP: "Sampo",
    SAMS: "Samsung",
    SANT: "Jaime Santana Pomares",
    SCIT: "Scitex",
    SCRN: "Dainippon Screen",
    SDP: "Scitex",
    SEC: "Samsung",
    SEIK: "Seiko Instruments",
    SEIk: "Seikosha",
    SGUY: "ScanGuy.com",
    SHAR: "Sharp Laboratories",
    SICC: "International Color Consortium",
    SONY: "Sony",
    SPCL: "SpectraCal",
    STAR: "Star",
    STC: "Sampo Technology",
    Scit: "Scitex",
    Sdp: "Scitex",
    Sony: "Sony",
    TALO: "Talon Technology",
    TAND: "Tandy",
    TATU: "Tatung",
    TAXA: "TAXAN America",
    TDS: "Tokyo Denshi Sekei",
    TECO: "TECO Information Systems",
    TEGR: "Tegra",
    TEKT: "Tektronix",
    TI: "Texas Instruments",
    TMKR: "TypeMaker",
    TOSB: "Toshiba",
    TOSH: "Toshiba",
    TOTK: "TOTOKU ELECTRIC",
    TRIU: "Triumph",
    TSBT: "Toshiba",
    TTX: "TTX Computer Products",
    TVM: "TVM Professional Monitor",
    TW: "TW Casper",
    ULSX: "Ulead Systems",
    UNIS: "Unisys",
    UTZF: "Utz Fehlau & Sohn",
    VARI: "Varityper",
    VIEW: "Viewsonic",
    VISL: "Visual communication",
    VIVO: "Vivo Mobile Communication",
    WANG: "Wang",
    WLBR: "Wilbur Imaging",
    WTG2: "Ware To Go",
    WYSE: "WYSE Technology",
    XERX: "Xerox",
    XRIT: "X-Rite",
    ZRAN: "Zoran",
    Zebr: "Zebra Technologies",
    appl: "Apple Computer",
    bICC: "basICColor",
    berg: "bergdesign",
    ceyd: "Integrated Color Solutions",
    clsp: "MacDermid ColorSpan",
    ds: "Dainippon Screen",
    dupn: "DuPont",
    ffei: "FujiFilm Electronic Imaging",
    flux: "FluxData",
    iris: "Scitex",
    kart: "Scitex",
    lcms: "Little CMS",
    lino: "Linotronic",
    none: "none",
    ob4d: "Erdt Systems",
    obic: "Medigraph",
    quby: "Qubyx Sarl",
    scit: "Scitex",
    scrn: "Dainippon Screen",
    sdp: "Scitex",
    siwi: "SIWI GRAFIKA",
    yxym: "YxyMaster"
}, Ct = {
    scnr: "Scanner",
    mntr: "Monitor",
    prtr: "Printer",
    link: "Device Link",
    abst: "Abstract",
    spac: "Color Space Conversion Profile",
    nmcl: "Named Color",
    cenc: "ColorEncodingSpace profile",
    mid: "MultiplexIdentification profile",
    mlnk: "MultiplexLink profile",
    mvis: "MultiplexVisualization profile",
    nkpf: "Nikon Input Device Profile (NON-STANDARD!)"
};
U(B, "icc", [
    [
        4,
        St
    ],
    [
        12,
        Ct
    ],
    [
        40,
        Object.assign({}, St, Ct)
    ],
    [
        48,
        St
    ],
    [
        80,
        St
    ],
    [
        64,
        {
            0: "Perceptual",
            1: "Relative Colorimetric",
            2: "Saturation",
            3: "Absolute Colorimetric"
        }
    ],
    [
        "tech",
        {
            amd: "Active Matrix Display",
            crt: "Cathode Ray Tube Display",
            kpcd: "Photo CD",
            pmd: "Passive Matrix Display",
            dcam: "Digital Camera",
            dcpj: "Digital Cinema Projector",
            dmpc: "Digital Motion Picture Camera",
            dsub: "Dye Sublimation Printer",
            epho: "Electrophotographic Printer",
            esta: "Electrostatic Printer",
            flex: "Flexography",
            fprn: "Film Writer",
            fscn: "Film Scanner",
            grav: "Gravure",
            ijet: "Ink Jet Printer",
            imgs: "Photo Image Setter",
            mpfr: "Motion Picture Film Recorder",
            mpfs: "Motion Picture Film Scanner",
            offs: "Offset Lithography",
            pjtv: "Projection Television",
            rpho: "Photographic Paper Printer",
            rscn: "Reflective Scanner",
            silk: "Silkscreen",
            twax: "Thermal Wax Printer",
            vidc: "Video Camera",
            vidm: "Video Monitor"
        }
    ]
]);
class yt extends re {
    static canHandle(e, t, i) {
        return 237 === e.getUint8(t + 1) && "Photoshop" === e.getString(t + 4, 9) && void 0 !== this.containsIptc8bim(e, t, i);
    }
    static headerLength(e, t, i) {
        let n, s = this.containsIptc8bim(e, t, i);
        if (void 0 !== s) return n = e.getUint8(t + s + 7), n % 2 != 0 && (n += 1), 0 === n && (n = 4), s + 8 + n;
    }
    static containsIptc8bim(e, t, i) {
        for(let n = 0; n < i; n++)if (this.isIptcSegmentHead(e, t + n)) return n;
    }
    static isIptcSegmentHead(e, t) {
        return 56 === e.getUint8(t) && 943868237 === e.getUint32(t) && 1028 === e.getUint16(t + 4);
    }
    parse() {
        let { raw: e } = this, t = this.chunk.byteLength - 1, i = !1;
        for(let n = 0; n < t; n++)if (28 === this.chunk.getUint8(n) && 2 === this.chunk.getUint8(n + 1)) {
            i = !0;
            let t = this.chunk.getUint16(n + 3), s = this.chunk.getUint8(n + 2), r = this.chunk.getLatin1String(n + 5, t);
            e.set(s, this.pluralizeValue(e.get(s), r)), n += 4 + t;
        } else if (i) break;
        return this.translate(), this.output;
    }
    pluralizeValue(e, t) {
        return void 0 !== e ? e instanceof Array ? (e.push(t), e) : [
            e,
            t
        ] : t;
    }
}
c(yt, "type", "iptc"), c(yt, "translateValues", !1), c(yt, "reviveValues", !1), T.set("iptc", yt), U(E, "iptc", [
    [
        0,
        "ApplicationRecordVersion"
    ],
    [
        3,
        "ObjectTypeReference"
    ],
    [
        4,
        "ObjectAttributeReference"
    ],
    [
        5,
        "ObjectName"
    ],
    [
        7,
        "EditStatus"
    ],
    [
        8,
        "EditorialUpdate"
    ],
    [
        10,
        "Urgency"
    ],
    [
        12,
        "SubjectReference"
    ],
    [
        15,
        "Category"
    ],
    [
        20,
        "SupplementalCategories"
    ],
    [
        22,
        "FixtureIdentifier"
    ],
    [
        25,
        "Keywords"
    ],
    [
        26,
        "ContentLocationCode"
    ],
    [
        27,
        "ContentLocationName"
    ],
    [
        30,
        "ReleaseDate"
    ],
    [
        35,
        "ReleaseTime"
    ],
    [
        37,
        "ExpirationDate"
    ],
    [
        38,
        "ExpirationTime"
    ],
    [
        40,
        "SpecialInstructions"
    ],
    [
        42,
        "ActionAdvised"
    ],
    [
        45,
        "ReferenceService"
    ],
    [
        47,
        "ReferenceDate"
    ],
    [
        50,
        "ReferenceNumber"
    ],
    [
        55,
        "DateCreated"
    ],
    [
        60,
        "TimeCreated"
    ],
    [
        62,
        "DigitalCreationDate"
    ],
    [
        63,
        "DigitalCreationTime"
    ],
    [
        65,
        "OriginatingProgram"
    ],
    [
        70,
        "ProgramVersion"
    ],
    [
        75,
        "ObjectCycle"
    ],
    [
        80,
        "Byline"
    ],
    [
        85,
        "BylineTitle"
    ],
    [
        90,
        "City"
    ],
    [
        92,
        "Sublocation"
    ],
    [
        95,
        "State"
    ],
    [
        100,
        "CountryCode"
    ],
    [
        101,
        "Country"
    ],
    [
        103,
        "OriginalTransmissionReference"
    ],
    [
        105,
        "Headline"
    ],
    [
        110,
        "Credit"
    ],
    [
        115,
        "Source"
    ],
    [
        116,
        "CopyrightNotice"
    ],
    [
        118,
        "Contact"
    ],
    [
        120,
        "Caption"
    ],
    [
        121,
        "LocalCaption"
    ],
    [
        122,
        "Writer"
    ],
    [
        125,
        "RasterizedCaption"
    ],
    [
        130,
        "ImageType"
    ],
    [
        131,
        "ImageOrientation"
    ],
    [
        135,
        "LanguageIdentifier"
    ],
    [
        150,
        "AudioType"
    ],
    [
        151,
        "AudioSamplingRate"
    ],
    [
        152,
        "AudioSamplingResolution"
    ],
    [
        153,
        "AudioDuration"
    ],
    [
        154,
        "AudioOutcue"
    ],
    [
        184,
        "JobID"
    ],
    [
        185,
        "MasterDocumentID"
    ],
    [
        186,
        "ShortDocumentID"
    ],
    [
        187,
        "UniqueDocumentID"
    ],
    [
        188,
        "OwnerID"
    ],
    [
        200,
        "ObjectPreviewFileFormat"
    ],
    [
        201,
        "ObjectPreviewFileVersion"
    ],
    [
        202,
        "ObjectPreviewData"
    ],
    [
        221,
        "Prefs"
    ],
    [
        225,
        "ClassifyState"
    ],
    [
        228,
        "SimilarityIndex"
    ],
    [
        230,
        "DocumentNotes"
    ],
    [
        231,
        "DocumentHistory"
    ],
    [
        232,
        "ExifCameraInfo"
    ],
    [
        255,
        "CatalogSets"
    ]
]), U(B, "iptc", [
    [
        10,
        {
            0: "0 (reserved)",
            1: "1 (most urgent)",
            2: "2",
            3: "3",
            4: "4",
            5: "5 (normal urgency)",
            6: "6",
            7: "7",
            8: "8 (least urgent)",
            9: "9 (user-defined priority)"
        }
    ],
    [
        75,
        {
            a: "Morning",
            b: "Both Morning and Evening",
            p: "Evening"
        }
    ],
    [
        131,
        {
            L: "Landscape",
            P: "Portrait",
            S: "Square"
        }
    ]
]);
const __TURBOPACK__default__export__ = tt;
;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/arrow-clockwise.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var ArrowClockwise = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-arrow-clockwise',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"
    }));
});
ArrowClockwise.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = ArrowClockwise;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/arrow-clockwise.js [client] (ecmascript) <export default as ArrowClockwise>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowClockwise",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$arrow$2d$clockwise$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$arrow$2d$clockwise$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/arrow-clockwise.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/download.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var Download = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-download',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
    }));
});
Download.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = Download;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/download.js [client] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$download$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$download$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/download.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/fullscreen.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var Fullscreen = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-fullscreen',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5"
    }));
});
Fullscreen.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = Fullscreen;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/fullscreen.js [client] (ecmascript) <export default as Fullscreen>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fullscreen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$fullscreen$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$fullscreen$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/fullscreen.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/fullscreen-exit.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var FullscreenExit = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-fullscreen-exit',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"
    }));
});
FullscreenExit.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = FullscreenExit;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/fullscreen-exit.js [client] (ecmascript) <export default as FullscreenExit>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FullscreenExit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$fullscreen$2d$exit$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$fullscreen$2d$exit$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/fullscreen-exit.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/grid-fill.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var GridFill = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-grid-fill',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"
    }));
});
GridFill.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = GridFill;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/grid-fill.js [client] (ecmascript) <export default as GridFill>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridFill",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$grid$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$grid$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/grid-fill.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/info-circle.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var InfoCircle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-info-circle',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    }));
});
InfoCircle.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = InfoCircle;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/info-circle.js [client] (ecmascript) <export default as InfoCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$info$2d$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$info$2d$circle$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/info-circle.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/pause-circle-fill.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var PauseCircleFill = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-pause-circle-fill',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"
    }));
});
PauseCircleFill.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = PauseCircleFill;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/pause-circle-fill.js [client] (ecmascript) <export default as PauseCircleFill>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PauseCircleFill",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$pause$2d$circle$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$pause$2d$circle$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/pause-circle-fill.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/play-circle-fill.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var PlayCircleFill = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-play-circle-fill',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"
    }));
});
PlayCircleFill.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = PlayCircleFill;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/play-circle-fill.js [client] (ecmascript) <export default as PlayCircleFill>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayCircleFill",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$play$2d$circle$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$play$2d$circle$2d$fill$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/play-circle-fill.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/search.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var Search = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-search',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
    }));
});
Search.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = Search;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/search.js [client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$search$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/search.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/x-lg.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var XLg = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-x-lg',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
    }));
});
XLg.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = XLg;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/x-lg.js [client] (ecmascript) <export default as XLg>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XLg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$x$2d$lg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$x$2d$lg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/x-lg.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/zoom-in.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var ZoomIn = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-zoom-in',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
    }));
});
ZoomIn.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = ZoomIn;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/zoom-in.js [client] (ecmascript) <export default as ZoomIn>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZoomIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$zoom$2d$in$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$zoom$2d$in$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/zoom-in.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/zoom-out.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _excluded = [
    "color",
    "size",
    "title",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
var ZoomOut = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var _ref$color = _ref.color, color = _ref$color === void 0 ? 'currentColor' : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? '1em' : _ref$size, _ref$title = _ref.title, title = _ref$title === void 0 ? null : _ref$title, _ref$className = _ref.className, className = _ref$className === void 0 ? '' : _ref$className, rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", _extends({
        ref: ref,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        fill: color,
        className: [
            'bi',
            'bi-zoom-out',
            className
        ].filter(Boolean).join(' ')
    }, rest), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("title", null, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"
    }));
});
ZoomOut.propTypes = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
    ]),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = ZoomOut;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/zoom-out.js [client] (ecmascript) <export default as ZoomOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZoomOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$zoom$2d$out$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$bootstrap$2d$icons$2f$dist$2f$icons$2f$zoom$2d$out$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-bootstrap-icons/dist/icons/zoom-out.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-portal/es/utils.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseDOM",
    ()=>canUseDOM
]);
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-portal/es/Portal.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-dom/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$portal$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-portal/es/utils.js [client] (ecmascript)");
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
;
;
;
;
var Portal = function(_React$Component) {
    _inherits(Portal, _React$Component);
    function Portal() {
        _classCallCheck(this, Portal);
        return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
    }
    _createClass(Portal, [
        {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (this.defaultNode) {
                    document.body.removeChild(this.defaultNode);
                }
                this.defaultNode = null;
            }
        },
        {
            key: 'render',
            value: function render() {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$portal$2f$es$2f$utils$2e$js__$5b$client$5d$__$28$ecmascript$29$__["canUseDOM"]) {
                    return null;
                }
                if (!this.props.node && !this.defaultNode) {
                    this.defaultNode = document.createElement('div');
                    document.body.appendChild(this.defaultNode);
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createPortal(this.props.children, this.props.node || this.defaultNode);
            }
        }
    ]);
    return Portal;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Component);
Portal.propTypes = {
    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].node.isRequired,
    node: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].any
};
const __TURBOPACK__default__export__ = Portal;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-portal/es/LegacyPortal.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-dom/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
;
;
;
var Portal = function(_React$Component) {
    _inherits(Portal, _React$Component);
    function Portal() {
        _classCallCheck(this, Portal);
        return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
    }
    _createClass(Portal, [
        {
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.renderPortal();
            }
        },
        {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(props) {
                this.renderPortal();
            }
        },
        {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unmountComponentAtNode(this.defaultNode || this.props.node);
                if (this.defaultNode) {
                    document.body.removeChild(this.defaultNode);
                }
                this.defaultNode = null;
                this.portal = null;
            }
        },
        {
            key: 'renderPortal',
            value: function renderPortal(props) {
                if (!this.props.node && !this.defaultNode) {
                    this.defaultNode = document.createElement('div');
                    document.body.appendChild(this.defaultNode);
                }
                var children = this.props.children;
                // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
                if (typeof this.props.children.type === 'function') {
                    children = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].cloneElement(this.props.children);
                }
                this.portal = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
            }
        },
        {
            key: 'render',
            value: function render() {
                return null;
            }
        }
    ]);
    return Portal;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Component);
const __TURBOPACK__default__export__ = Portal;
Portal.propTypes = {
    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].node.isRequired,
    node: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].any
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-portal/es/PortalCompat.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-dom/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$portal$2f$es$2f$Portal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-portal/es/Portal.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$portal$2f$es$2f$LegacyPortal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-portal/es/LegacyPortal.js [client] (ecmascript)");
;
;
;
var Portal = void 0;
if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$dom$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createPortal) {
    Portal = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$portal$2f$es$2f$Portal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
} else {
    Portal = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$portal$2f$es$2f$LegacyPortal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"];
}
const __TURBOPACK__default__export__ = Portal;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-portal/es/PortalCompat.js [client] (ecmascript) <export default as Portal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$portal$2f$es$2f$PortalCompat$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2d$portal$2f$es$2f$PortalCompat$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react-portal/es/PortalCompat.js [client] (ecmascript)");
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-zoom-pan-pinch/dist/index.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeepScale",
    ()=>KeepScale,
    "TransformComponent",
    ()=>TransformComponent,
    "TransformWrapper",
    ()=>TransformWrapper,
    "getCenterPosition",
    ()=>getCenterPosition,
    "getMatrixTransformStyles",
    ()=>getMatrixTransformStyles,
    "getTransformStyles",
    ()=>getTransformStyles,
    "useTransformContext",
    ()=>useTransformContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
;
/**
 * Rounds number to given decimal
 * eg. roundNumber(2.34343, 1) => 2.3
 */ var roundNumber = function(num, decimal) {
    return Number(num.toFixed(decimal));
};
/**
 * Checks if value is number, if not it returns default value
 * 1# eg. checkIsNumber(2, 30) => 2
 * 2# eg. checkIsNumber(null, 30) => 30
 */ var checkIsNumber = function(num, defaultValue) {
    return typeof num === "number" ? num : defaultValue;
};
var handleCallback = function(context, event, callback) {
    if (callback && typeof callback === "function") {
        callback(context, event);
    }
};
/* eslint-disable no-plusplus */ /* eslint-disable no-param-reassign */ /**
 * Functions should return denominator of the target value, which is the next animation step.
 * t is a value from 0 to 1, reflecting the percentage of animation status.
 */ var easeOut = function(t) {
    return -Math.cos(t * Math.PI) / 2 + 0.5;
};
// linear
var linear = function(t) {
    return t;
};
// accelerating from zero velocity
var easeInQuad = function(t) {
    return t * t;
};
// decelerating to zero velocity
var easeOutQuad = function(t) {
    return t * (2 - t);
};
// acceleration until halfway, then deceleration
var easeInOutQuad = function(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
// accelerating from zero velocity
var easeInCubic = function(t) {
    return t * t * t;
};
// decelerating to zero velocity
var easeOutCubic = function(t) {
    return --t * t * t + 1;
};
// acceleration until halfway, then deceleration
var easeInOutCubic = function(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
// accelerating from zero velocity
var easeInQuart = function(t) {
    return t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuart = function(t) {
    return 1 - --t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuart = function(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};
// accelerating from zero velocity
var easeInQuint = function(t) {
    return t * t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuint = function(t) {
    return 1 + --t * t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuint = function(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};
var animations = {
    easeOut: easeOut,
    linear: linear,
    easeInQuad: easeInQuad,
    easeOutQuad: easeOutQuad,
    easeInOutQuad: easeInOutQuad,
    easeInCubic: easeInCubic,
    easeOutCubic: easeOutCubic,
    easeInOutCubic: easeInOutCubic,
    easeInQuart: easeInQuart,
    easeOutQuart: easeOutQuart,
    easeInOutQuart: easeInOutQuart,
    easeInQuint: easeInQuint,
    easeOutQuint: easeOutQuint,
    easeInOutQuint: easeInOutQuint
};
/* eslint-disable no-param-reassign */ var handleCancelAnimationFrame = function(animation) {
    if (typeof animation === "number") {
        cancelAnimationFrame(animation);
    }
};
var handleCancelAnimation = function(contextInstance) {
    if (!contextInstance.mounted) return;
    handleCancelAnimationFrame(contextInstance.animation);
    // Clear animation state
    contextInstance.animate = false;
    contextInstance.animation = null;
    contextInstance.velocity = null;
};
function handleSetupAnimation(contextInstance, animationName, animationTime, callback) {
    if (!contextInstance.mounted) return;
    var startTime = new Date().getTime();
    var lastStep = 1;
    // if another animation is active
    handleCancelAnimation(contextInstance);
    // new animation
    contextInstance.animation = function() {
        if (!contextInstance.mounted) {
            return handleCancelAnimationFrame(contextInstance.animation);
        }
        var frameTime = new Date().getTime() - startTime;
        var animationProgress = frameTime / animationTime;
        var animationType = animations[animationName];
        var step = animationType(animationProgress);
        if (frameTime >= animationTime) {
            callback(lastStep);
            contextInstance.animation = null;
        } else if (contextInstance.animation) {
            callback(step);
            requestAnimationFrame(contextInstance.animation);
        }
    };
    requestAnimationFrame(contextInstance.animation);
}
function isValidTargetState(targetState) {
    var scale = targetState.scale, positionX = targetState.positionX, positionY = targetState.positionY;
    if (Number.isNaN(scale) || Number.isNaN(positionX) || Number.isNaN(positionY)) {
        return false;
    }
    return true;
}
function animate(contextInstance, targetState, animationTime, animationName) {
    var isValid = isValidTargetState(targetState);
    if (!contextInstance.mounted || !isValid) return;
    var setTransformState = contextInstance.setTransformState;
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    var scaleDiff = targetState.scale - scale;
    var positionXDiff = targetState.positionX - positionX;
    var positionYDiff = targetState.positionY - positionY;
    if (animationTime === 0) {
        setTransformState(targetState.scale, targetState.positionX, targetState.positionY);
    } else {
        // animation start timestamp
        handleSetupAnimation(contextInstance, animationName, animationTime, function(step) {
            var newScale = scale + scaleDiff * step;
            var newPositionX = positionX + positionXDiff * step;
            var newPositionY = positionY + positionYDiff * step;
            setTransformState(newScale, newPositionX, newPositionY);
        });
    }
}
/* eslint-disable no-param-reassign */ function getComponentsSizes(wrapperComponent, contentComponent, newScale) {
    var wrapperWidth = wrapperComponent.offsetWidth;
    var wrapperHeight = wrapperComponent.offsetHeight;
    var contentWidth = contentComponent.offsetWidth;
    var contentHeight = contentComponent.offsetHeight;
    var newContentWidth = contentWidth * newScale;
    var newContentHeight = contentHeight * newScale;
    var newDiffWidth = wrapperWidth - newContentWidth;
    var newDiffHeight = wrapperHeight - newContentHeight;
    return {
        wrapperWidth: wrapperWidth,
        wrapperHeight: wrapperHeight,
        newContentWidth: newContentWidth,
        newDiffWidth: newDiffWidth,
        newContentHeight: newContentHeight,
        newDiffHeight: newDiffHeight
    };
}
var getBounds = function(wrapperWidth, newContentWidth, diffWidth, wrapperHeight, newContentHeight, diffHeight, centerZoomedOut) {
    var scaleWidthFactor = wrapperWidth > newContentWidth ? diffWidth * (centerZoomedOut ? 1 : 0.5) : 0;
    var scaleHeightFactor = wrapperHeight > newContentHeight ? diffHeight * (centerZoomedOut ? 1 : 0.5) : 0;
    var minPositionX = wrapperWidth - newContentWidth - scaleWidthFactor;
    var maxPositionX = scaleWidthFactor;
    var minPositionY = wrapperHeight - newContentHeight - scaleHeightFactor;
    var maxPositionY = scaleHeightFactor;
    return {
        minPositionX: minPositionX,
        maxPositionX: maxPositionX,
        minPositionY: minPositionY,
        maxPositionY: maxPositionY
    };
};
var calculateBounds = function(contextInstance, newScale) {
    var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
    var centerZoomedOut = contextInstance.setup.centerZoomedOut;
    if (!wrapperComponent || !contentComponent) {
        throw new Error("Components are not mounted");
    }
    var _a = getComponentsSizes(wrapperComponent, contentComponent, newScale), wrapperWidth = _a.wrapperWidth, wrapperHeight = _a.wrapperHeight, newContentWidth = _a.newContentWidth, newDiffWidth = _a.newDiffWidth, newContentHeight = _a.newContentHeight, newDiffHeight = _a.newDiffHeight;
    var bounds = getBounds(wrapperWidth, newContentWidth, newDiffWidth, wrapperHeight, newContentHeight, newDiffHeight, Boolean(centerZoomedOut));
    return bounds;
};
/**
 * Keeps value between given bounds, used for limiting view to given boundaries
 * 1# eg. boundLimiter(2, 0, 3, true) => 2
 * 2# eg. boundLimiter(4, 0, 3, true) => 3
 * 3# eg. boundLimiter(-2, 0, 3, true) => 0
 * 4# eg. boundLimiter(10, 0, 3, false) => 10
 */ var boundLimiter = function(value, minBound, maxBound, isActive) {
    if (!isActive) return roundNumber(value, 2);
    if (value < minBound) return roundNumber(minBound, 2);
    if (value > maxBound) return roundNumber(maxBound, 2);
    return roundNumber(value, 2);
};
var handleCalculateBounds = function(contextInstance, newScale) {
    var bounds = calculateBounds(contextInstance, newScale);
    // Save bounds
    contextInstance.bounds = bounds;
    return bounds;
};
function getMouseBoundedPosition(positionX, positionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent) {
    var minPositionX = bounds.minPositionX, minPositionY = bounds.minPositionY, maxPositionX = bounds.maxPositionX, maxPositionY = bounds.maxPositionY;
    var paddingX = 0;
    var paddingY = 0;
    if (wrapperComponent) {
        paddingX = paddingValueX;
        paddingY = paddingValueY;
    }
    var x = boundLimiter(positionX, minPositionX - paddingX, maxPositionX + paddingX, limitToBounds);
    var y = boundLimiter(positionY, minPositionY - paddingY, maxPositionY + paddingY, limitToBounds);
    return {
        x: x,
        y: y
    };
}
function handleCalculateZoomPositions(contextInstance, mouseX, mouseY, newScale, bounds, limitToBounds) {
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    var scaleDifference = newScale - scale;
    if (typeof mouseX !== "number" || typeof mouseY !== "number") {
        console.error("Mouse X and Y position were not provided!");
        return {
            x: positionX,
            y: positionY
        };
    }
    var calculatedPositionX = positionX - mouseX * scaleDifference;
    var calculatedPositionY = positionY - mouseY * scaleDifference;
    // do not limit to bounds when there is padding animation,
    // it causes animation strange behaviour
    var newPositions = getMouseBoundedPosition(calculatedPositionX, calculatedPositionY, bounds, limitToBounds, 0, 0, null);
    return newPositions;
}
function checkZoomBounds(zoom, minScale, maxScale, zoomPadding, enablePadding) {
    var scalePadding = enablePadding ? zoomPadding : 0;
    var minScaleWithPadding = minScale - scalePadding;
    if (!Number.isNaN(maxScale) && zoom >= maxScale) return maxScale;
    if (!Number.isNaN(minScale) && zoom <= minScaleWithPadding) return minScaleWithPadding;
    return zoom;
}
var isPanningStartAllowed = function(contextInstance, event) {
    var excluded = contextInstance.setup.panning.excluded;
    var isInitialized = contextInstance.isInitialized, wrapperComponent = contextInstance.wrapperComponent;
    var target = event.target;
    var isWrapperChild = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(target);
    var isAllowed = isInitialized && target && isWrapperChild;
    if (!isAllowed) return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded) return false;
    return true;
};
var isPanningAllowed = function(contextInstance) {
    var isInitialized = contextInstance.isInitialized, isPanning = contextInstance.isPanning, setup = contextInstance.setup;
    var disabled = setup.panning.disabled;
    var isAllowed = isInitialized && isPanning && !disabled;
    if (!isAllowed) return false;
    return true;
};
var handlePanningSetup = function(contextInstance, event) {
    var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY;
    contextInstance.isPanning = true;
    // Panning with mouse
    var x = event.clientX;
    var y = event.clientY;
    contextInstance.startCoords = {
        x: x - positionX,
        y: y - positionY
    };
};
var handleTouchPanningSetup = function(contextInstance, event) {
    var touches = event.touches;
    var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY;
    contextInstance.isPanning = true;
    // Panning with touch
    var oneFingerTouch = touches.length === 1;
    if (oneFingerTouch) {
        var x = touches[0].clientX;
        var y = touches[0].clientY;
        contextInstance.startCoords = {
            x: x - positionX,
            y: y - positionY
        };
    }
};
function handlePanToBounds(contextInstance) {
    var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale;
    var _b = contextInstance.setup, disabled = _b.disabled, limitToBounds = _b.limitToBounds, centerZoomedOut = _b.centerZoomedOut;
    var wrapperComponent = contextInstance.wrapperComponent;
    if (disabled || !wrapperComponent || !contextInstance.bounds) return;
    var _c = contextInstance.bounds, maxPositionX = _c.maxPositionX, minPositionX = _c.minPositionX, maxPositionY = _c.maxPositionY, minPositionY = _c.minPositionY;
    var xChanged = positionX > maxPositionX || positionX < minPositionX;
    var yChanged = positionY > maxPositionY || positionY < minPositionY;
    var mousePosX = positionX > maxPositionX ? wrapperComponent.offsetWidth : contextInstance.setup.minPositionX || 0;
    var mousePosY = positionY > maxPositionY ? wrapperComponent.offsetHeight : contextInstance.setup.minPositionY || 0;
    var _d = handleCalculateZoomPositions(contextInstance, mousePosX, mousePosY, scale, contextInstance.bounds, limitToBounds || centerZoomedOut), x = _d.x, y = _d.y;
    return {
        scale: scale,
        positionX: xChanged ? x : positionX,
        positionY: yChanged ? y : positionY
    };
}
function handleNewPosition(contextInstance, newPositionX, newPositionY, paddingValueX, paddingValueY) {
    var limitToBounds = contextInstance.setup.limitToBounds;
    var wrapperComponent = contextInstance.wrapperComponent, bounds = contextInstance.bounds;
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    if (wrapperComponent === null || bounds === null || newPositionX === positionX && newPositionY === positionY) {
        return;
    }
    var _b = getMouseBoundedPosition(newPositionX, newPositionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent), x = _b.x, y = _b.y;
    contextInstance.setTransformState(scale, x, y);
}
var getPanningClientPosition = function(contextInstance, clientX, clientY) {
    var startCoords = contextInstance.startCoords, transformState = contextInstance.transformState;
    var panning = contextInstance.setup.panning;
    var lockAxisX = panning.lockAxisX, lockAxisY = panning.lockAxisY;
    var positionX = transformState.positionX, positionY = transformState.positionY;
    if (!startCoords) {
        return {
            x: positionX,
            y: positionY
        };
    }
    var mouseX = clientX - startCoords.x;
    var mouseY = clientY - startCoords.y;
    var newPositionX = lockAxisX ? positionX : mouseX;
    var newPositionY = lockAxisY ? positionY : mouseY;
    return {
        x: newPositionX,
        y: newPositionY
    };
};
var getPaddingValue = function(contextInstance, size) {
    var setup = contextInstance.setup, transformState = contextInstance.transformState;
    var scale = transformState.scale;
    var minScale = setup.minScale, disablePadding = setup.disablePadding;
    if (size > 0 && scale >= minScale && !disablePadding) {
        return size;
    }
    return 0;
};
var isVelocityCalculationAllowed = function(contextInstance) {
    var mounted = contextInstance.mounted;
    var _a = contextInstance.setup, disabled = _a.disabled, velocityAnimation = _a.velocityAnimation;
    var scale = contextInstance.transformState.scale;
    var disabledVelocity = velocityAnimation.disabled;
    var isAllowed = !disabledVelocity || scale > 1 || !disabled || mounted;
    if (!isAllowed) return false;
    return true;
};
var isVelocityAllowed = function(contextInstance) {
    var mounted = contextInstance.mounted, velocity = contextInstance.velocity, bounds = contextInstance.bounds;
    var _a = contextInstance.setup, disabled = _a.disabled, velocityAnimation = _a.velocityAnimation;
    var scale = contextInstance.transformState.scale;
    var disabledVelocity = velocityAnimation.disabled;
    var isAllowed = !disabledVelocity || scale > 1 || !disabled || mounted;
    if (!isAllowed) return false;
    if (!velocity || !bounds) return false;
    return true;
};
function getVelocityMoveTime(contextInstance, velocity) {
    var velocityAnimation = contextInstance.setup.velocityAnimation;
    var equalToMove = velocityAnimation.equalToMove, animationTime = velocityAnimation.animationTime, sensitivity = velocityAnimation.sensitivity;
    if (equalToMove) {
        return animationTime * velocity * sensitivity;
    }
    return animationTime;
}
function getVelocityPosition(newPosition, startPosition, currentPosition, isLocked, limitToBounds, minPosition, maxPosition, minTarget, maxTarget, step) {
    if (limitToBounds) {
        if (startPosition > maxPosition && currentPosition > maxPosition) {
            var calculatedPosition = maxPosition + (newPosition - maxPosition) * step;
            if (calculatedPosition > maxTarget) return maxTarget;
            if (calculatedPosition < maxPosition) return maxPosition;
            return calculatedPosition;
        }
        if (startPosition < minPosition && currentPosition < minPosition) {
            var calculatedPosition = minPosition + (newPosition - minPosition) * step;
            if (calculatedPosition < minTarget) return minTarget;
            if (calculatedPosition > minPosition) return minPosition;
            return calculatedPosition;
        }
    }
    if (isLocked) return startPosition;
    return boundLimiter(newPosition, minPosition, maxPosition, limitToBounds);
}
function getSizeMultiplier(wrapperComponent, equalToMove) {
    var defaultMultiplier = 1;
    if (equalToMove) {
        return Math.min(defaultMultiplier, wrapperComponent.offsetWidth / window.innerWidth);
    }
    return defaultMultiplier;
}
function handleCalculateVelocity(contextInstance, position) {
    var isAllowed = isVelocityCalculationAllowed(contextInstance);
    if (!isAllowed) {
        return;
    }
    var lastMousePosition = contextInstance.lastMousePosition, velocityTime = contextInstance.velocityTime, setup = contextInstance.setup;
    var wrapperComponent = contextInstance.wrapperComponent;
    var equalToMove = setup.velocityAnimation.equalToMove;
    var now = Date.now();
    if (lastMousePosition && velocityTime && wrapperComponent) {
        var sizeMultiplier = getSizeMultiplier(wrapperComponent, equalToMove);
        var distanceX = position.x - lastMousePosition.x;
        var distanceY = position.y - lastMousePosition.y;
        var velocityX = distanceX / sizeMultiplier;
        var velocityY = distanceY / sizeMultiplier;
        var interval = now - velocityTime;
        var speed = distanceX * distanceX + distanceY * distanceY;
        var velocity = Math.sqrt(speed) / interval;
        contextInstance.velocity = {
            velocityX: velocityX,
            velocityY: velocityY,
            total: velocity
        };
    }
    contextInstance.lastMousePosition = position;
    contextInstance.velocityTime = now;
}
function handleVelocityPanning(contextInstance) {
    var velocity = contextInstance.velocity, bounds = contextInstance.bounds, setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
    var isAllowed = isVelocityAllowed(contextInstance);
    if (!isAllowed || !velocity || !bounds || !wrapperComponent) {
        return;
    }
    var velocityX = velocity.velocityX, velocityY = velocity.velocityY, total = velocity.total;
    var maxPositionX = bounds.maxPositionX, minPositionX = bounds.minPositionX, maxPositionY = bounds.maxPositionY, minPositionY = bounds.minPositionY;
    var limitToBounds = setup.limitToBounds, alignmentAnimation = setup.alignmentAnimation;
    var zoomAnimation = setup.zoomAnimation, panning = setup.panning;
    var lockAxisY = panning.lockAxisY, lockAxisX = panning.lockAxisX;
    var animationType = zoomAnimation.animationType;
    var sizeX = alignmentAnimation.sizeX, sizeY = alignmentAnimation.sizeY, velocityAlignmentTime = alignmentAnimation.velocityAlignmentTime;
    var alignAnimationTime = velocityAlignmentTime;
    var moveAnimationTime = getVelocityMoveTime(contextInstance, total);
    var finalAnimationTime = Math.max(moveAnimationTime, alignAnimationTime);
    var paddingValueX = getPaddingValue(contextInstance, sizeX);
    var paddingValueY = getPaddingValue(contextInstance, sizeY);
    var paddingX = paddingValueX * wrapperComponent.offsetWidth / 100;
    var paddingY = paddingValueY * wrapperComponent.offsetHeight / 100;
    var maxTargetX = maxPositionX + paddingX;
    var minTargetX = minPositionX - paddingX;
    var maxTargetY = maxPositionY + paddingY;
    var minTargetY = minPositionY - paddingY;
    var startState = contextInstance.transformState;
    var startTime = new Date().getTime();
    handleSetupAnimation(contextInstance, animationType, finalAnimationTime, function(step) {
        var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
        var frameTime = new Date().getTime() - startTime;
        var animationProgress = frameTime / alignAnimationTime;
        var alignAnimation = animations[alignmentAnimation.animationType];
        var alignStep = 1 - alignAnimation(Math.min(1, animationProgress));
        var customStep = 1 - step;
        var newPositionX = positionX + velocityX * customStep;
        var newPositionY = positionY + velocityY * customStep;
        var currentPositionX = getVelocityPosition(newPositionX, startState.positionX, positionX, lockAxisX, limitToBounds, minPositionX, maxPositionX, minTargetX, maxTargetX, alignStep);
        var currentPositionY = getVelocityPosition(newPositionY, startState.positionY, positionY, lockAxisY, limitToBounds, minPositionY, maxPositionY, minTargetY, maxTargetY, alignStep);
        if (positionX !== newPositionX || positionY !== newPositionY) {
            contextInstance.setTransformState(scale, currentPositionX, currentPositionY);
        }
    });
}
function handlePanningStart(contextInstance, event) {
    var scale = contextInstance.transformState.scale;
    handleCancelAnimation(contextInstance);
    handleCalculateBounds(contextInstance, scale);
    if (window.TouchEvent !== undefined && event instanceof TouchEvent) {
        handleTouchPanningSetup(contextInstance, event);
    } else {
        handlePanningSetup(contextInstance, event);
    }
}
function handleAlignToBounds(contextInstance) {
    var scale = contextInstance.transformState.scale;
    var _a = contextInstance.setup, minScale = _a.minScale, alignmentAnimation = _a.alignmentAnimation;
    var disabled = alignmentAnimation.disabled, sizeX = alignmentAnimation.sizeX, sizeY = alignmentAnimation.sizeY, animationTime = alignmentAnimation.animationTime, animationType = alignmentAnimation.animationType;
    var isDisabled = disabled || scale < minScale || !sizeX && !sizeY;
    if (isDisabled) return;
    var targetState = handlePanToBounds(contextInstance);
    if (targetState) {
        animate(contextInstance, targetState, animationTime, animationType);
    }
}
function handlePanning(contextInstance, clientX, clientY) {
    var startCoords = contextInstance.startCoords, setup = contextInstance.setup;
    var _a = setup.alignmentAnimation, sizeX = _a.sizeX, sizeY = _a.sizeY;
    if (!startCoords) return;
    var _b = getPanningClientPosition(contextInstance, clientX, clientY), x = _b.x, y = _b.y;
    var paddingValueX = getPaddingValue(contextInstance, sizeX);
    var paddingValueY = getPaddingValue(contextInstance, sizeY);
    handleCalculateVelocity(contextInstance, {
        x: x,
        y: y
    });
    handleNewPosition(contextInstance, x, y, paddingValueX, paddingValueY);
}
function handlePanningEnd(contextInstance) {
    if (contextInstance.isPanning) {
        var velocityDisabled = contextInstance.setup.panning.velocityDisabled;
        var velocity = contextInstance.velocity, wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
        contextInstance.isPanning = false;
        contextInstance.animate = false;
        contextInstance.animation = null;
        var wrapperRect = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.getBoundingClientRect();
        var contentRect = contentComponent === null || contentComponent === void 0 ? void 0 : contentComponent.getBoundingClientRect();
        var wrapperWidth = (wrapperRect === null || wrapperRect === void 0 ? void 0 : wrapperRect.width) || 0;
        var wrapperHeight = (wrapperRect === null || wrapperRect === void 0 ? void 0 : wrapperRect.height) || 0;
        var contentWidth = (contentRect === null || contentRect === void 0 ? void 0 : contentRect.width) || 0;
        var contentHeight = (contentRect === null || contentRect === void 0 ? void 0 : contentRect.height) || 0;
        var isZoomed = wrapperWidth < contentWidth || wrapperHeight < contentHeight;
        var shouldAnimate = !velocityDisabled && velocity && (velocity === null || velocity === void 0 ? void 0 : velocity.total) > 0.1 && isZoomed;
        if (shouldAnimate) {
            handleVelocityPanning(contextInstance);
        } else {
            handleAlignToBounds(contextInstance);
        }
    }
}
function handleZoomToPoint(contextInstance, scale, mouseX, mouseY) {
    var _a = contextInstance.setup, minScale = _a.minScale, maxScale = _a.maxScale, limitToBounds = _a.limitToBounds;
    var newScale = checkZoomBounds(roundNumber(scale, 2), minScale, maxScale, 0, false);
    var bounds = handleCalculateBounds(contextInstance, newScale);
    var _b = handleCalculateZoomPositions(contextInstance, mouseX, mouseY, newScale, bounds, limitToBounds), x = _b.x, y = _b.y;
    return {
        scale: newScale,
        positionX: x,
        positionY: y
    };
}
function handleAlignToScaleBounds(contextInstance, mousePositionX, mousePositionY) {
    var scale = contextInstance.transformState.scale;
    var wrapperComponent = contextInstance.wrapperComponent;
    var _a = contextInstance.setup, minScale = _a.minScale, limitToBounds = _a.limitToBounds, zoomAnimation = _a.zoomAnimation;
    var disabled = zoomAnimation.disabled, animationTime = zoomAnimation.animationTime, animationType = zoomAnimation.animationType;
    var isDisabled = disabled || scale >= minScale;
    if (scale >= 1 || limitToBounds) {
        // fire fit to bounds animation
        handleAlignToBounds(contextInstance);
    }
    if (isDisabled || !wrapperComponent || !contextInstance.mounted) return;
    var mouseX = mousePositionX || wrapperComponent.offsetWidth / 2;
    var mouseY = mousePositionY || wrapperComponent.offsetHeight / 2;
    var targetState = handleZoomToPoint(contextInstance, minScale, mouseX, mouseY);
    if (targetState) {
        animate(contextInstance, targetState, animationTime, animationType);
    }
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
var initialState = {
    previousScale: 1,
    scale: 1,
    positionX: 0,
    positionY: 0
};
var initialSetup = {
    disabled: false,
    minPositionX: null,
    maxPositionX: null,
    minPositionY: null,
    maxPositionY: null,
    minScale: 1,
    maxScale: 8,
    limitToBounds: true,
    centerZoomedOut: false,
    centerOnInit: false,
    disablePadding: false,
    wheel: {
        step: 0.2,
        disabled: false,
        wheelDisabled: false,
        touchPadDisabled: false,
        activationKeys: [],
        excluded: []
    },
    panning: {
        disabled: false,
        velocityDisabled: false,
        lockAxisX: false,
        lockAxisY: false,
        activationKeys: [],
        excluded: []
    },
    pinch: {
        step: 5,
        disabled: false,
        excluded: []
    },
    doubleClick: {
        disabled: false,
        step: 0.7,
        mode: "zoomIn",
        animationType: "easeOut",
        animationTime: 200,
        excluded: []
    },
    zoomAnimation: {
        disabled: false,
        size: 0.4,
        animationTime: 200,
        animationType: "easeOut"
    },
    alignmentAnimation: {
        disabled: false,
        sizeX: 100,
        sizeY: 100,
        animationTime: 200,
        velocityAlignmentTime: 400,
        animationType: "easeOut"
    },
    velocityAnimation: {
        disabled: false,
        sensitivity: 1,
        animationTime: 400,
        animationType: "easeOut",
        equalToMove: true
    }
};
var createState = function(props) {
    var _a, _b, _c, _d;
    return {
        previousScale: (_a = props.initialScale) !== null && _a !== void 0 ? _a : initialState.scale,
        scale: (_b = props.initialScale) !== null && _b !== void 0 ? _b : initialState.scale,
        positionX: (_c = props.initialPositionX) !== null && _c !== void 0 ? _c : initialState.positionX,
        positionY: (_d = props.initialPositionY) !== null && _d !== void 0 ? _d : initialState.positionY
    };
};
var createSetup = function(props) {
    var newSetup = __assign({}, initialSetup);
    Object.keys(props).forEach(function(key) {
        var validValue = typeof props[key] !== "undefined";
        var validParameter = typeof initialSetup[key] !== "undefined";
        if (validParameter && validValue) {
            var dataType = Object.prototype.toString.call(initialSetup[key]);
            var isObject = dataType === "[object Object]";
            var isArray = dataType === "[object Array]";
            if (isObject) {
                newSetup[key] = __assign(__assign({}, initialSetup[key]), props[key]);
            } else if (isArray) {
                newSetup[key] = __spreadArray(__spreadArray([], initialSetup[key], true), props[key], true);
            } else {
                newSetup[key] = props[key];
            }
        }
    });
    return newSetup;
};
var handleCalculateButtonZoom = function(contextInstance, delta, step) {
    var scale = contextInstance.transformState.scale;
    var wrapperComponent = contextInstance.wrapperComponent, setup = contextInstance.setup;
    var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation;
    var size = zoomAnimation.size;
    if (!wrapperComponent) {
        throw new Error("Wrapper is not mounted");
    }
    var targetScale = scale * Math.exp(delta * step);
    var newScale = checkZoomBounds(roundNumber(targetScale, 3), minScale, maxScale, size, false);
    return newScale;
};
function handleZoomToViewCenter(contextInstance, delta, step, animationTime, animationType) {
    var wrapperComponent = contextInstance.wrapperComponent;
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    if (!wrapperComponent) return console.error("No WrapperComponent found");
    var wrapperWidth = wrapperComponent.offsetWidth;
    var wrapperHeight = wrapperComponent.offsetHeight;
    var mouseX = (wrapperWidth / 2 - positionX) / scale;
    var mouseY = (wrapperHeight / 2 - positionY) / scale;
    var newScale = handleCalculateButtonZoom(contextInstance, delta, step);
    var targetState = handleZoomToPoint(contextInstance, newScale, mouseX, mouseY);
    if (!targetState) {
        return console.error("Error during zoom event. New transformation state was not calculated.");
    }
    animate(contextInstance, targetState, animationTime, animationType);
}
function resetTransformations(contextInstance, animationTime, animationType, onResetTransformation) {
    var setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
    var limitToBounds = setup.limitToBounds;
    var initialTransformation = createState(contextInstance.props);
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    if (!wrapperComponent) return;
    var newBounds = calculateBounds(contextInstance, initialTransformation.scale);
    var boundedPositions = getMouseBoundedPosition(initialTransformation.positionX, initialTransformation.positionY, newBounds, limitToBounds, 0, 0, wrapperComponent);
    var newState = {
        scale: initialTransformation.scale,
        positionX: boundedPositions.x,
        positionY: boundedPositions.y
    };
    if (scale === initialTransformation.scale && positionX === initialTransformation.positionX && positionY === initialTransformation.positionY) {
        return;
    }
    onResetTransformation === null || onResetTransformation === void 0 ? void 0 : onResetTransformation();
    animate(contextInstance, newState, animationTime, animationType);
}
function getOffset(element, wrapper, content, state) {
    var offset = element.getBoundingClientRect();
    var wrapperOffset = wrapper.getBoundingClientRect();
    var contentOffset = content.getBoundingClientRect();
    var xOff = wrapperOffset.x * state.scale;
    var yOff = wrapperOffset.y * state.scale;
    return {
        x: (offset.x - contentOffset.x + xOff) / state.scale,
        y: (offset.y - contentOffset.y + yOff) / state.scale
    };
}
function calculateZoomToNode(contextInstance, node, customZoom) {
    var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent, transformState = contextInstance.transformState;
    var _a = contextInstance.setup, limitToBounds = _a.limitToBounds, minScale = _a.minScale, maxScale = _a.maxScale;
    if (!wrapperComponent || !contentComponent) return transformState;
    var wrapperRect = wrapperComponent.getBoundingClientRect();
    var nodeRect = node.getBoundingClientRect();
    var nodeOffset = getOffset(node, wrapperComponent, contentComponent, transformState);
    var nodeLeft = nodeOffset.x;
    var nodeTop = nodeOffset.y;
    var nodeWidth = nodeRect.width / transformState.scale;
    var nodeHeight = nodeRect.height / transformState.scale;
    var scaleX = wrapperComponent.offsetWidth / nodeWidth;
    var scaleY = wrapperComponent.offsetHeight / nodeHeight;
    var newScale = checkZoomBounds(customZoom || Math.min(scaleX, scaleY), minScale, maxScale, 0, false);
    var offsetX = (wrapperRect.width - nodeWidth * newScale) / 2;
    var offsetY = (wrapperRect.height - nodeHeight * newScale) / 2;
    var newPositionX = (wrapperRect.left - nodeLeft) * newScale + offsetX;
    var newPositionY = (wrapperRect.top - nodeTop) * newScale + offsetY;
    var bounds = calculateBounds(contextInstance, newScale);
    var _b = getMouseBoundedPosition(newPositionX, newPositionY, bounds, limitToBounds, 0, 0, wrapperComponent), x = _b.x, y = _b.y;
    return {
        positionX: x,
        positionY: y,
        scale: newScale
    };
}
var zoomIn = function(contextInstance) {
    return function(step, animationTime, animationType) {
        if (step === void 0) {
            step = 0.5;
        }
        if (animationTime === void 0) {
            animationTime = 300;
        }
        if (animationType === void 0) {
            animationType = "easeOut";
        }
        handleZoomToViewCenter(contextInstance, 1, step, animationTime, animationType);
    };
};
var zoomOut = function(contextInstance) {
    return function(step, animationTime, animationType) {
        if (step === void 0) {
            step = 0.5;
        }
        if (animationTime === void 0) {
            animationTime = 300;
        }
        if (animationType === void 0) {
            animationType = "easeOut";
        }
        handleZoomToViewCenter(contextInstance, -1, step, animationTime, animationType);
    };
};
var setTransform = function(contextInstance) {
    return function(newPositionX, newPositionY, newScale, animationTime, animationType) {
        if (animationTime === void 0) {
            animationTime = 300;
        }
        if (animationType === void 0) {
            animationType = "easeOut";
        }
        var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale;
        var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
        var disabled = contextInstance.setup.disabled;
        if (disabled || !wrapperComponent || !contentComponent) return;
        var targetState = {
            positionX: Number.isNaN(newPositionX) ? positionX : newPositionX,
            positionY: Number.isNaN(newPositionY) ? positionY : newPositionY,
            scale: Number.isNaN(newScale) ? scale : newScale
        };
        animate(contextInstance, targetState, animationTime, animationType);
    };
};
var resetTransform = function(contextInstance) {
    return function(animationTime, animationType) {
        if (animationTime === void 0) {
            animationTime = 200;
        }
        if (animationType === void 0) {
            animationType = "easeOut";
        }
        resetTransformations(contextInstance, animationTime, animationType);
    };
};
var centerView = function(contextInstance) {
    return function(scale, animationTime, animationType) {
        if (animationTime === void 0) {
            animationTime = 200;
        }
        if (animationType === void 0) {
            animationType = "easeOut";
        }
        var transformState = contextInstance.transformState, wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
        if (wrapperComponent && contentComponent) {
            var targetState = getCenterPosition(scale || transformState.scale, wrapperComponent, contentComponent);
            animate(contextInstance, targetState, animationTime, animationType);
        }
    };
};
var zoomToElement = function(contextInstance) {
    return function(node, scale, animationTime, animationType) {
        if (animationTime === void 0) {
            animationTime = 600;
        }
        if (animationType === void 0) {
            animationType = "easeOut";
        }
        handleCancelAnimation(contextInstance);
        var wrapperComponent = contextInstance.wrapperComponent;
        var target = typeof node === "string" ? document.getElementById(node) : node;
        if (wrapperComponent && target && wrapperComponent.contains(target)) {
            var targetState = calculateZoomToNode(contextInstance, target, scale);
            animate(contextInstance, targetState, animationTime, animationType);
        }
    };
};
var getContext = function(contextInstance) {
    return {
        instance: contextInstance,
        state: contextInstance.transformState,
        zoomIn: zoomIn(contextInstance),
        zoomOut: zoomOut(contextInstance),
        setTransform: setTransform(contextInstance),
        resetTransform: resetTransform(contextInstance),
        centerView: centerView(contextInstance),
        zoomToElement: zoomToElement(contextInstance)
    };
};
// We want to make event listeners non-passive, and to do so have to check
// that browsers support EventListenerOptions in the first place.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
var passiveSupported = false;
function makePassiveEventOption() {
    try {
        var options = {
            get passive () {
                // This function will be called when the browser
                //   attempts to access the passive property.
                passiveSupported = true;
                return false;
            }
        };
        return options;
    } catch (err) {
        passiveSupported = false;
        return passiveSupported;
    }
}
var isExcludedNode = function(node, excluded) {
    var targetTagName = node.tagName.toUpperCase();
    var isExcludedTag = excluded.find(function(tag) {
        return tag.toUpperCase() === targetTagName;
    });
    if (isExcludedTag) return true;
    var isExcludedClassName = excluded.find(function(className) {
        return node.classList.contains(className);
    });
    if (isExcludedClassName) return true;
    return false;
};
var cancelTimeout = function(timeout) {
    if (timeout) {
        clearTimeout(timeout);
    }
};
var getTransformStyles = function(x, y, scale) {
    // Standard translate prevents blurry svg on the safari
    return "translate(".concat(x, "px, ").concat(y, "px) scale(").concat(scale, ")");
};
var getMatrixTransformStyles = function(x, y, scale) {
    // The shorthand for matrix does not work for Safari hence the need to explicitly use matrix3d
    // Refer to https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
    var a = scale;
    var b = 0;
    var c = 0;
    var d = scale;
    var tx = x;
    var ty = y;
    return "matrix3d(".concat(a, ", ").concat(b, ", 0, 0, ").concat(c, ", ").concat(d, ", 0, 0, 0, 0, 1, 0, ").concat(tx, ", ").concat(ty, ", 0, 1)");
};
var getCenterPosition = function(scale, wrapperComponent, contentComponent) {
    var contentWidth = contentComponent.offsetWidth * scale;
    var contentHeight = contentComponent.offsetHeight * scale;
    var centerPositionX = (wrapperComponent.offsetWidth - contentWidth) / 2;
    var centerPositionY = (wrapperComponent.offsetHeight - contentHeight) / 2;
    return {
        scale: scale,
        positionX: centerPositionX,
        positionY: centerPositionY
    };
};
function mergeRefs(refs) {
    return function(value) {
        refs.forEach(function(ref) {
            if (typeof ref === "function") {
                ref(value);
            } else if (ref != null) {
                ref.current = value;
            }
        });
    };
}
var isWheelAllowed = function(contextInstance, event) {
    var _a = contextInstance.setup.wheel, disabled = _a.disabled, wheelDisabled = _a.wheelDisabled, touchPadDisabled = _a.touchPadDisabled, excluded = _a.excluded;
    var isInitialized = contextInstance.isInitialized, isPanning = contextInstance.isPanning;
    var target = event.target;
    var isAllowed = isInitialized && !isPanning && !disabled && target;
    if (!isAllowed) return false;
    // Event ctrlKey detects if touchpad action is executing wheel or pinch gesture
    if (wheelDisabled && !event.ctrlKey) return false;
    if (touchPadDisabled && event.ctrlKey) return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded) return false;
    return true;
};
var getDeltaY = function(event) {
    if (event) {
        return event.deltaY < 0 ? 1 : -1;
    }
    return 0;
};
function getDelta(event, customDelta) {
    var deltaY = getDeltaY(event);
    var delta = checkIsNumber(customDelta, deltaY);
    return delta;
}
function getMousePosition(event, contentComponent, scale) {
    var contentRect = contentComponent.getBoundingClientRect();
    var mouseX = 0;
    var mouseY = 0;
    if ("clientX" in event) {
        // mouse position x, y over wrapper component
        mouseX = (event.clientX - contentRect.left) / scale;
        mouseY = (event.clientY - contentRect.top) / scale;
    } else {
        var touch = event.touches[0];
        mouseX = (touch.clientX - contentRect.left) / scale;
        mouseY = (touch.clientY - contentRect.top) / scale;
    }
    if (Number.isNaN(mouseX) || Number.isNaN(mouseY)) console.error("No mouse or touch offset found");
    return {
        x: mouseX,
        y: mouseY
    };
}
var handleCalculateWheelZoom = function(contextInstance, delta, step, disable, getTarget) {
    var scale = contextInstance.transformState.scale;
    var wrapperComponent = contextInstance.wrapperComponent, setup = contextInstance.setup;
    var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation, disablePadding = setup.disablePadding;
    var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
    if (!wrapperComponent) {
        throw new Error("Wrapper is not mounted");
    }
    var targetScale = scale + delta * (scale - scale * step) * step;
    if (getTarget) return targetScale;
    var paddingEnabled = disable ? false : !disabled;
    var newScale = checkZoomBounds(roundNumber(targetScale, 3), minScale, maxScale, size, paddingEnabled && !disablePadding);
    return newScale;
};
var handleWheelZoomStop = function(contextInstance, event) {
    var previousWheelEvent = contextInstance.previousWheelEvent;
    var scale = contextInstance.transformState.scale;
    var _a = contextInstance.setup, maxScale = _a.maxScale, minScale = _a.minScale;
    if (!previousWheelEvent) return false;
    if (scale < maxScale || scale > minScale) return true;
    if (Math.sign(previousWheelEvent.deltaY) !== Math.sign(event.deltaY)) return true;
    if (previousWheelEvent.deltaY > 0 && previousWheelEvent.deltaY < event.deltaY) return true;
    if (previousWheelEvent.deltaY < 0 && previousWheelEvent.deltaY > event.deltaY) return true;
    if (Math.sign(previousWheelEvent.deltaY) !== Math.sign(event.deltaY)) return true;
    return false;
};
var isPinchStartAllowed = function(contextInstance, event) {
    var _a = contextInstance.setup.pinch, disabled = _a.disabled, excluded = _a.excluded;
    var isInitialized = contextInstance.isInitialized;
    var target = event.target;
    var isAllowed = isInitialized && !disabled && target;
    if (!isAllowed) return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded) return false;
    return true;
};
var isPinchAllowed = function(contextInstance) {
    var disabled = contextInstance.setup.pinch.disabled;
    var isInitialized = contextInstance.isInitialized, pinchStartDistance = contextInstance.pinchStartDistance;
    var isAllowed = isInitialized && !disabled && pinchStartDistance;
    if (!isAllowed) return false;
    return true;
};
var calculateTouchMidPoint = function(event, scale, contentComponent) {
    var contentRect = contentComponent.getBoundingClientRect();
    var touches = event.touches;
    var firstPointX = roundNumber(touches[0].clientX - contentRect.left, 5);
    var firstPointY = roundNumber(touches[0].clientY - contentRect.top, 5);
    var secondPointX = roundNumber(touches[1].clientX - contentRect.left, 5);
    var secondPointY = roundNumber(touches[1].clientY - contentRect.top, 5);
    return {
        x: (firstPointX + secondPointX) / 2 / scale,
        y: (firstPointY + secondPointY) / 2 / scale
    };
};
var getTouchDistance = function(event) {
    return Math.sqrt(Math.pow(event.touches[0].pageX - event.touches[1].pageX, 2) + Math.pow(event.touches[0].pageY - event.touches[1].pageY, 2));
};
var calculatePinchZoom = function(contextInstance, currentDistance) {
    var pinchStartScale = contextInstance.pinchStartScale, pinchStartDistance = contextInstance.pinchStartDistance, setup = contextInstance.setup;
    var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation, disablePadding = setup.disablePadding;
    var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
    if (!pinchStartScale || pinchStartDistance === null || !currentDistance) {
        throw new Error("Pinch touches distance was not provided");
    }
    if (currentDistance < 0) {
        return contextInstance.transformState.scale;
    }
    var touchProportion = currentDistance / pinchStartDistance;
    var scaleDifference = touchProportion * pinchStartScale;
    return checkZoomBounds(roundNumber(scaleDifference, 2), minScale, maxScale, size, !disabled && !disablePadding);
};
var wheelStopEventTime = 160;
var wheelAnimationTime = 100;
var handleWheelStart = function(contextInstance, event) {
    var _a = contextInstance.props, onWheelStart = _a.onWheelStart, onZoomStart = _a.onZoomStart;
    if (!contextInstance.wheelStopEventTimer) {
        handleCancelAnimation(contextInstance);
        handleCallback(getContext(contextInstance), event, onWheelStart);
        handleCallback(getContext(contextInstance), event, onZoomStart);
    }
};
var handleWheelZoom = function(contextInstance, event) {
    var _a = contextInstance.props, onWheel = _a.onWheel, onZoom = _a.onZoom;
    var contentComponent = contextInstance.contentComponent, setup = contextInstance.setup, transformState = contextInstance.transformState;
    var scale = transformState.scale;
    var limitToBounds = setup.limitToBounds, centerZoomedOut = setup.centerZoomedOut, zoomAnimation = setup.zoomAnimation, wheel = setup.wheel, disablePadding = setup.disablePadding;
    var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
    var step = wheel.step;
    if (!contentComponent) {
        throw new Error("Component not mounted");
    }
    event.preventDefault();
    event.stopPropagation();
    var delta = getDelta(event, null);
    var newScale = handleCalculateWheelZoom(contextInstance, delta, step, !event.ctrlKey);
    // if scale not change
    if (scale === newScale) return;
    var bounds = handleCalculateBounds(contextInstance, newScale);
    var mousePosition = getMousePosition(event, contentComponent, scale);
    var isPaddingDisabled = disabled || size === 0 || centerZoomedOut || disablePadding;
    var isLimitedToBounds = limitToBounds && isPaddingDisabled;
    var _b = handleCalculateZoomPositions(contextInstance, mousePosition.x, mousePosition.y, newScale, bounds, isLimitedToBounds), x = _b.x, y = _b.y;
    contextInstance.previousWheelEvent = event;
    contextInstance.setTransformState(newScale, x, y);
    handleCallback(getContext(contextInstance), event, onWheel);
    handleCallback(getContext(contextInstance), event, onZoom);
};
var handleWheelStop = function(contextInstance, event) {
    var _a = contextInstance.props, onWheelStop = _a.onWheelStop, onZoomStop = _a.onZoomStop;
    // fire animation
    cancelTimeout(contextInstance.wheelAnimationTimer);
    contextInstance.wheelAnimationTimer = setTimeout(function() {
        if (!contextInstance.mounted) return;
        handleAlignToScaleBounds(contextInstance, event.x, event.y);
        contextInstance.wheelAnimationTimer = null;
    }, wheelAnimationTime);
    // Wheel stop event
    var hasStoppedZooming = handleWheelZoomStop(contextInstance, event);
    if (hasStoppedZooming) {
        cancelTimeout(contextInstance.wheelStopEventTimer);
        contextInstance.wheelStopEventTimer = setTimeout(function() {
            if (!contextInstance.mounted) return;
            contextInstance.wheelStopEventTimer = null;
            handleCallback(getContext(contextInstance), event, onWheelStop);
            handleCallback(getContext(contextInstance), event, onZoomStop);
        }, wheelStopEventTime);
    }
};
var handlePinchStart = function(contextInstance, event) {
    var distance = getTouchDistance(event);
    contextInstance.pinchStartDistance = distance;
    contextInstance.lastDistance = distance;
    contextInstance.pinchStartScale = contextInstance.transformState.scale;
    contextInstance.isPanning = false;
    handleCancelAnimation(contextInstance);
};
var handlePinchZoom = function(contextInstance, event) {
    var contentComponent = contextInstance.contentComponent, pinchStartDistance = contextInstance.pinchStartDistance;
    var scale = contextInstance.transformState.scale;
    var _a = contextInstance.setup, limitToBounds = _a.limitToBounds, centerZoomedOut = _a.centerZoomedOut, zoomAnimation = _a.zoomAnimation;
    var disabled = zoomAnimation.disabled, size = zoomAnimation.size;
    // if one finger starts from outside of wrapper
    if (pinchStartDistance === null || !contentComponent) return;
    var midPoint = calculateTouchMidPoint(event, scale, contentComponent);
    // if touches goes off of the wrapper element
    if (!Number.isFinite(midPoint.x) || !Number.isFinite(midPoint.y)) return;
    var currentDistance = getTouchDistance(event);
    var newScale = calculatePinchZoom(contextInstance, currentDistance);
    if (newScale === scale) return;
    var bounds = handleCalculateBounds(contextInstance, newScale);
    var isPaddingDisabled = disabled || size === 0 || centerZoomedOut;
    var isLimitedToBounds = limitToBounds && isPaddingDisabled;
    var _b = handleCalculateZoomPositions(contextInstance, midPoint.x, midPoint.y, newScale, bounds, isLimitedToBounds), x = _b.x, y = _b.y;
    contextInstance.pinchMidpoint = midPoint;
    contextInstance.lastDistance = currentDistance;
    contextInstance.setTransformState(newScale, x, y);
};
var handlePinchStop = function(contextInstance) {
    var pinchMidpoint = contextInstance.pinchMidpoint;
    contextInstance.velocity = null;
    contextInstance.lastDistance = null;
    contextInstance.pinchMidpoint = null;
    contextInstance.pinchStartScale = null;
    contextInstance.pinchStartDistance = null;
    handleAlignToScaleBounds(contextInstance, pinchMidpoint === null || pinchMidpoint === void 0 ? void 0 : pinchMidpoint.x, pinchMidpoint === null || pinchMidpoint === void 0 ? void 0 : pinchMidpoint.y);
};
var handleDoubleClickStop = function(contextInstance, event) {
    var onZoomStop = contextInstance.props.onZoomStop;
    var animationTime = contextInstance.setup.doubleClick.animationTime;
    cancelTimeout(contextInstance.doubleClickStopEventTimer);
    contextInstance.doubleClickStopEventTimer = setTimeout(function() {
        contextInstance.doubleClickStopEventTimer = null;
        handleCallback(getContext(contextInstance), event, onZoomStop);
    }, animationTime);
};
var handleDoubleClickResetMode = function(contextInstance, event) {
    var _a = contextInstance.props, onZoomStart = _a.onZoomStart, onZoom = _a.onZoom;
    var _b = contextInstance.setup.doubleClick, animationTime = _b.animationTime, animationType = _b.animationType;
    handleCallback(getContext(contextInstance), event, onZoomStart);
    resetTransformations(contextInstance, animationTime, animationType, function() {
        return handleCallback(getContext(contextInstance), event, onZoom);
    });
    handleDoubleClickStop(contextInstance, event);
};
function handleDoubleClick(contextInstance, event) {
    var setup = contextInstance.setup, doubleClickStopEventTimer = contextInstance.doubleClickStopEventTimer, transformState = contextInstance.transformState, contentComponent = contextInstance.contentComponent;
    var scale = transformState.scale;
    var _a = contextInstance.props, onZoomStart = _a.onZoomStart, onZoom = _a.onZoom;
    var _b = setup.doubleClick, disabled = _b.disabled, mode = _b.mode, step = _b.step, animationTime = _b.animationTime, animationType = _b.animationType;
    if (disabled) return;
    if (doubleClickStopEventTimer) return;
    if (mode === "reset") {
        return handleDoubleClickResetMode(contextInstance, event);
    }
    if (!contentComponent) return console.error("No ContentComponent found");
    var delta = mode === "zoomOut" ? -1 : 1;
    var newScale = handleCalculateButtonZoom(contextInstance, delta, step);
    // stop execution when scale didn't change
    if (scale === newScale) return;
    handleCallback(getContext(contextInstance), event, onZoomStart);
    var mousePosition = getMousePosition(event, contentComponent, scale);
    var targetState = handleZoomToPoint(contextInstance, newScale, mousePosition.x, mousePosition.y);
    if (!targetState) {
        return console.error("Error during zoom event. New transformation state was not calculated.");
    }
    handleCallback(getContext(contextInstance), event, onZoom);
    animate(contextInstance, targetState, animationTime, animationType);
    handleDoubleClickStop(contextInstance, event);
}
var isDoubleClickAllowed = function(contextInstance, event) {
    var isInitialized = contextInstance.isInitialized, setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
    var _a = setup.doubleClick, disabled = _a.disabled, excluded = _a.excluded;
    var target = event.target;
    var isWrapperChild = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(target);
    var isAllowed = isInitialized && target && isWrapperChild && !disabled;
    if (!isAllowed) return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded) return false;
    return true;
};
var ZoomPanPinch = function() {
    function ZoomPanPinch(props) {
        var _this = this;
        this.mounted = true;
        this.onChangeCallbacks = new Set();
        // Components
        this.wrapperComponent = null;
        this.contentComponent = null;
        // Initialization
        this.isInitialized = false;
        this.bounds = null;
        // wheel helpers
        this.previousWheelEvent = null;
        this.wheelStopEventTimer = null;
        this.wheelAnimationTimer = null;
        // panning helpers
        this.isPanning = false;
        this.startCoords = null;
        this.lastTouch = null;
        // pinch helpers
        this.distance = null;
        this.lastDistance = null;
        this.pinchStartDistance = null;
        this.pinchStartScale = null;
        this.pinchMidpoint = null;
        // double click helpers
        this.doubleClickStopEventTimer = null;
        // velocity helpers
        this.velocity = null;
        this.velocityTime = null;
        this.lastMousePosition = null;
        // animations helpers
        this.animate = false;
        this.animation = null;
        this.maxBounds = null;
        // key press
        this.pressedKeys = {};
        this.mount = function() {
            _this.initializeWindowEvents();
        };
        this.unmount = function() {
            _this.cleanupWindowEvents();
        };
        this.update = function(newProps) {
            handleCalculateBounds(_this, _this.transformState.scale);
            _this.setup = createSetup(newProps);
        };
        this.initializeWindowEvents = function() {
            var _a;
            var passive = makePassiveEventOption();
            var currentDocument = (_a = _this.wrapperComponent) === null || _a === void 0 ? void 0 : _a.ownerDocument;
            var currentWindow = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.defaultView;
            // Panning on window to allow panning when mouse is out of component wrapper
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("mousedown", _this.onPanningStart, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("mousemove", _this.onPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("mouseup", _this.onPanningStop, passive);
            currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.addEventListener("mouseleave", _this.clearPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("keyup", _this.setKeyUnPressed, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("keydown", _this.setKeyPressed, passive);
        };
        this.cleanupWindowEvents = function() {
            var _a, _b;
            var passive = makePassiveEventOption();
            var currentDocument = (_a = _this.wrapperComponent) === null || _a === void 0 ? void 0 : _a.ownerDocument;
            var currentWindow = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.defaultView;
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("mousedown", _this.onPanningStart, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("mousemove", _this.onPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("mouseup", _this.onPanningStop, passive);
            currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.removeEventListener("mouseleave", _this.clearPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("keyup", _this.setKeyUnPressed, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("keydown", _this.setKeyPressed, passive);
            document.removeEventListener("mouseleave", _this.clearPanning, passive);
            handleCancelAnimation(_this);
            (_b = _this.observer) === null || _b === void 0 ? void 0 : _b.disconnect();
        };
        this.handleInitializeWrapperEvents = function(wrapper) {
            // Zooming events on wrapper
            var passive = makePassiveEventOption();
            wrapper.addEventListener("wheel", _this.onWheelZoom, passive);
            wrapper.addEventListener("dblclick", _this.onDoubleClick, passive);
            wrapper.addEventListener("touchstart", _this.onTouchPanningStart, passive);
            wrapper.addEventListener("touchmove", _this.onTouchPanning, passive);
            wrapper.addEventListener("touchend", _this.onTouchPanningStop, passive);
        };
        this.handleInitialize = function(contentComponent) {
            var centerOnInit = _this.setup.centerOnInit;
            _this.applyTransformation();
            if (centerOnInit) {
                _this.setCenter();
                _this.observer = new ResizeObserver(function() {
                    var _a;
                    _this.setCenter();
                    (_a = _this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
                });
                // Start observing the target node for configured mutations
                _this.observer.observe(contentComponent);
            }
        };
        /// ///////
        // Zoom
        /// ///////
        this.onWheelZoom = function(event) {
            var disabled = _this.setup.disabled;
            if (disabled) return;
            var isAllowed = isWheelAllowed(_this, event);
            if (!isAllowed) return;
            var keysPressed = _this.isPressingKeys(_this.setup.wheel.activationKeys);
            if (!keysPressed) return;
            handleWheelStart(_this, event);
            handleWheelZoom(_this, event);
            handleWheelStop(_this, event);
        };
        /// ///////
        // Pan
        /// ///////
        this.onPanningStart = function(event) {
            var disabled = _this.setup.disabled;
            var onPanningStart = _this.props.onPanningStart;
            if (disabled) return;
            var isAllowed = isPanningStartAllowed(_this, event);
            if (!isAllowed) return;
            var keysPressed = _this.isPressingKeys(_this.setup.panning.activationKeys);
            if (!keysPressed) return;
            event.preventDefault();
            event.stopPropagation();
            handleCancelAnimation(_this);
            handlePanningStart(_this, event);
            handleCallback(getContext(_this), event, onPanningStart);
        };
        this.onPanning = function(event) {
            var disabled = _this.setup.disabled;
            var onPanning = _this.props.onPanning;
            if (disabled) return;
            var isAllowed = isPanningAllowed(_this);
            if (!isAllowed) return;
            var keysPressed = _this.isPressingKeys(_this.setup.panning.activationKeys);
            if (!keysPressed) return;
            event.preventDefault();
            event.stopPropagation();
            handlePanning(_this, event.clientX, event.clientY);
            handleCallback(getContext(_this), event, onPanning);
        };
        this.onPanningStop = function(event) {
            var onPanningStop = _this.props.onPanningStop;
            if (_this.isPanning) {
                handlePanningEnd(_this);
                handleCallback(getContext(_this), event, onPanningStop);
            }
        };
        /// ///////
        // Pinch
        /// ///////
        this.onPinchStart = function(event) {
            var disabled = _this.setup.disabled;
            var _a = _this.props, onPinchingStart = _a.onPinchingStart, onZoomStart = _a.onZoomStart;
            if (disabled) return;
            var isAllowed = isPinchStartAllowed(_this, event);
            if (!isAllowed) return;
            handlePinchStart(_this, event);
            handleCancelAnimation(_this);
            handleCallback(getContext(_this), event, onPinchingStart);
            handleCallback(getContext(_this), event, onZoomStart);
        };
        this.onPinch = function(event) {
            var disabled = _this.setup.disabled;
            var _a = _this.props, onPinching = _a.onPinching, onZoom = _a.onZoom;
            if (disabled) return;
            var isAllowed = isPinchAllowed(_this);
            if (!isAllowed) return;
            event.preventDefault();
            event.stopPropagation();
            handlePinchZoom(_this, event);
            handleCallback(getContext(_this), event, onPinching);
            handleCallback(getContext(_this), event, onZoom);
        };
        this.onPinchStop = function(event) {
            var _a = _this.props, onPinchingStop = _a.onPinchingStop, onZoomStop = _a.onZoomStop;
            if (_this.pinchStartScale) {
                handlePinchStop(_this);
                handleCallback(getContext(_this), event, onPinchingStop);
                handleCallback(getContext(_this), event, onZoomStop);
            }
        };
        /// ///////
        // Touch
        /// ///////
        this.onTouchPanningStart = function(event) {
            var disabled = _this.setup.disabled;
            var onPanningStart = _this.props.onPanningStart;
            if (disabled) return;
            var isAllowed = isPanningStartAllowed(_this, event);
            if (!isAllowed) return;
            var isDoubleTap = _this.lastTouch && +new Date() - _this.lastTouch < 200;
            if (isDoubleTap && event.touches.length === 1) {
                _this.onDoubleClick(event);
            } else {
                _this.lastTouch = +new Date();
                handleCancelAnimation(_this);
                var touches = event.touches;
                var isPanningAction = touches.length === 1;
                var isPinchAction = touches.length === 2;
                if (isPanningAction) {
                    handleCancelAnimation(_this);
                    handlePanningStart(_this, event);
                    handleCallback(getContext(_this), event, onPanningStart);
                }
                if (isPinchAction) {
                    _this.onPinchStart(event);
                }
            }
        };
        this.onTouchPanning = function(event) {
            var disabled = _this.setup.disabled;
            var onPanning = _this.props.onPanning;
            if (_this.isPanning && event.touches.length === 1) {
                if (disabled) return;
                var isAllowed = isPanningAllowed(_this);
                if (!isAllowed) return;
                event.preventDefault();
                event.stopPropagation();
                var touch = event.touches[0];
                handlePanning(_this, touch.clientX, touch.clientY);
                handleCallback(getContext(_this), event, onPanning);
            } else if (event.touches.length > 1) {
                _this.onPinch(event);
            }
        };
        this.onTouchPanningStop = function(event) {
            _this.onPanningStop(event);
            _this.onPinchStop(event);
        };
        /// ///////
        // Double Click
        /// ///////
        this.onDoubleClick = function(event) {
            var disabled = _this.setup.disabled;
            if (disabled) return;
            var isAllowed = isDoubleClickAllowed(_this, event);
            if (!isAllowed) return;
            handleDoubleClick(_this, event);
        };
        /// ///////
        // Helpers
        /// ///////
        this.clearPanning = function(event) {
            if (_this.isPanning) {
                _this.onPanningStop(event);
            }
        };
        this.setKeyPressed = function(e) {
            _this.pressedKeys[e.key] = true;
        };
        this.setKeyUnPressed = function(e) {
            _this.pressedKeys[e.key] = false;
        };
        this.isPressingKeys = function(keys) {
            if (!keys.length) {
                return true;
            }
            return Boolean(keys.find(function(key) {
                return _this.pressedKeys[key];
            }));
        };
        this.setTransformState = function(scale, positionX, positionY) {
            var onTransformed = _this.props.onTransformed;
            if (!Number.isNaN(scale) && !Number.isNaN(positionX) && !Number.isNaN(positionY)) {
                if (scale !== _this.transformState.scale) {
                    _this.transformState.previousScale = _this.transformState.scale;
                    _this.transformState.scale = scale;
                }
                _this.transformState.positionX = positionX;
                _this.transformState.positionY = positionY;
                var ctx_1 = getContext(_this);
                _this.onChangeCallbacks.forEach(function(callback) {
                    return callback(ctx_1);
                });
                handleCallback(ctx_1, {
                    scale: scale,
                    positionX: positionX,
                    positionY: positionY
                }, onTransformed);
                _this.applyTransformation();
            } else {
                console.error("Detected NaN set state values");
            }
        };
        this.setCenter = function() {
            if (_this.wrapperComponent && _this.contentComponent) {
                var targetState = getCenterPosition(_this.transformState.scale, _this.wrapperComponent, _this.contentComponent);
                _this.setTransformState(targetState.scale, targetState.positionX, targetState.positionY);
            }
        };
        this.handleTransformStyles = function(x, y, scale) {
            if (_this.props.customTransform) {
                return _this.props.customTransform(x, y, scale);
            }
            return getTransformStyles(x, y, scale);
        };
        this.applyTransformation = function() {
            if (!_this.mounted || !_this.contentComponent) return;
            var _a = _this.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
            var transform = _this.handleTransformStyles(positionX, positionY, scale);
            _this.contentComponent.style.transform = transform;
        };
        this.getContext = function() {
            return getContext(_this);
        };
        this.onChange = function(callback) {
            if (!_this.onChangeCallbacks.has(callback)) {
                _this.onChangeCallbacks.add(callback);
            }
            return function() {
                _this.onChangeCallbacks.delete(callback);
            };
        };
        /**
         * Initialization
         */ this.init = function(wrapperComponent, contentComponent) {
            _this.cleanupWindowEvents();
            _this.wrapperComponent = wrapperComponent;
            _this.contentComponent = contentComponent;
            handleCalculateBounds(_this, _this.transformState.scale);
            _this.handleInitializeWrapperEvents(wrapperComponent);
            _this.handleInitialize(contentComponent);
            _this.initializeWindowEvents();
            _this.isInitialized = true;
            handleCallback(getContext(_this), undefined, _this.props.onInit);
        };
        this.props = props;
        this.setup = createSetup(this.props);
        this.transformState = createState(this.props);
    }
    return ZoomPanPinch;
}();
var Context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
var getContent = function(children, ctx) {
    if (typeof children === "function") {
        return children(ctx);
    }
    return children;
};
var TransformWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, ref) {
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0), forceUpdate = _a[1];
    var children = props.children;
    var instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(new ZoomPanPinch(props)).current;
    var content = getContent(props.children, getContext(instance));
    var handleOnChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TransformWrapper.useCallback[handleOnChange]": function() {
            if (typeof children === "function") {
                forceUpdate({
                    "TransformWrapper.useCallback[handleOnChange]": function(prev) {
                        return prev + 1;
                    }
                }["TransformWrapper.useCallback[handleOnChange]"]);
            }
        }
    }["TransformWrapper.useCallback[handleOnChange]"], [
        children
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "TransformWrapper.useImperativeHandle": function() {
            return getContext(instance);
        }
    }["TransformWrapper.useImperativeHandle"], [
        instance
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransformWrapper.useEffect": function() {
            instance.update(props);
        }
    }["TransformWrapper.useEffect"], [
        instance,
        props
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransformWrapper.useEffect": function() {
            return instance.onChange(handleOnChange);
        }
    }["TransformWrapper.useEffect"], [
        instance,
        props,
        handleOnChange
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(Context.Provider, {
        value: instance
    }, content);
});
function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') {
        return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
        if (head.firstChild) {
            head.insertBefore(style, head.firstChild);
        } else {
            head.appendChild(style);
        }
    } else {
        head.appendChild(style);
    }
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}
var css_248z = ".transform-component-module_wrapper__7HFJe {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__uCDPE {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__uCDPE img {\n  pointer-events: none;\n}\n";
var styles = {
    "wrapper": "transform-component-module_wrapper__7HFJe",
    "content": "transform-component-module_content__uCDPE"
};
styleInject(css_248z);
var TransformComponent = function(_a) {
    var children = _a.children, _b = _a.wrapperClass, wrapperClass = _b === void 0 ? "" : _b, _c = _a.contentClass, contentClass = _c === void 0 ? "" : _c, wrapperStyle = _a.wrapperStyle, contentStyle = _a.contentStyle, _d = _a.wrapperProps, wrapperProps = _d === void 0 ? {} : _d, _e = _a.contentProps, contentProps = _e === void 0 ? {} : _e;
    var init = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(Context).init;
    var wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransformComponent.useEffect": function() {
            var wrapper = wrapperRef.current;
            var content = contentRef.current;
            if (wrapper !== null && content !== null && init) {
                init(wrapper, content);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["TransformComponent.useEffect"], []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", __assign({}, wrapperProps, {
        ref: wrapperRef,
        className: "react-transform-wrapper ".concat(styles.wrapper, " ").concat(wrapperClass),
        style: wrapperStyle
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", __assign({}, contentProps, {
        ref: contentRef,
        className: "react-transform-component ".concat(styles.content, " ").concat(contentClass),
        style: contentStyle
    }), children));
};
var useTransformContext = function() {
    var libraryContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(getContext(libraryContext || {})), values = _a[0], setValues = _a[1];
    if (!libraryContext) {
        throw new Error("Transform context mus be placed inside TransformWrapper");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTransformContext.useEffect": function() {
            libraryContext.onChange({
                "useTransformContext.useEffect": function(ref) {
                    setValues(ref);
                }
            }["useTransformContext.useEffect"]);
        }
    }["useTransformContext.useEffect"], [
        libraryContext
    ]);
    return values;
};
var KeepScale = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(props, ref) {
    var localRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KeepScale.useEffect": function() {
            return instance.onChange({
                "KeepScale.useEffect": function(ctx) {
                    if (localRef.current) {
                        var positionX = 0;
                        var positionY = 0;
                        localRef.current.style.transform = instance.handleTransformStyles(positionX, positionY, 1 / ctx.state.scale);
                    }
                }
            }["KeepScale.useEffect"]);
        }
    }["KeepScale.useEffect"], [
        instance
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", __assign({}, props, {
        ref: mergeRefs([
            localRef,
            ref
        ])
    }));
});
;
 //# sourceMappingURL=index.esm.js.map
}),
"[project]/Documents/GitHub/MyWeb/node_modules/exenv/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/ /* global define */ (function() {
    'use strict';
    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    var ExecutionEnvironment = {
        canUseDOM: canUseDOM,
        canUseWorkers: typeof Worker !== 'undefined',
        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
        canUseViewport: canUseDOM && !!window.screen
    };
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return ExecutionEnvironment;
        }(__turbopack_context__.r, exports, module));
    } else if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        module.exports = ExecutionEnvironment;
    } else {
        window.ExecutionEnvironment = ExecutionEnvironment;
    }
})();
}),
"[project]/Documents/GitHub/MyWeb/node_modules/lightbox.js-react/node_modules/@banzai-inc/react-key-handler/dist/esm/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KEYDOWN",
    ()=>KEYDOWN,
    "KEYPRESS",
    ()=>KEYPRESS,
    "KEYUP",
    ()=>KEYUP,
    "default",
    ()=>__TURBOPACK__default__export__,
    "keyHandleDecorator",
    ()=>keyHandleDecorator,
    "keyHandler",
    ()=>keyHandler,
    "keyToggleHandler",
    ()=>keyToggleHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$exenv$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/exenv/index.js [client] (ecmascript)");
;
;
;
/**
 * Key event names.
 */ var KEYDOWN = 'keydown';
var KEYPRESS = 'keypress';
var KEYUP = 'keyup';
var NORMALIZED_KEYS = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
};
var KEY_CODE_KEYS = {
    '8': 'Backspace',
    '9': 'Tab',
    '12': 'Clear',
    '13': 'Enter',
    '16': 'Shift',
    '17': 'Control',
    '18': 'Alt',
    '19': 'Pause',
    '20': 'CapsLock',
    '27': 'Escape',
    '32': ' ',
    '33': 'PageUp',
    '34': 'PageDown',
    '35': 'End',
    '36': 'Home',
    '37': 'ArrowLeft',
    '38': 'ArrowUp',
    '39': 'ArrowRight',
    '40': 'ArrowDown',
    '45': 'Insert',
    '46': 'Delete',
    '112': 'F1',
    '113': 'F2',
    '114': 'F3',
    '115': 'F4',
    '116': 'F5',
    '117': 'F6',
    '118': 'F7',
    '119': 'F8',
    '120': 'F9',
    '121': 'F10',
    '122': 'F11',
    '123': 'F12',
    '144': 'NumLock',
    '145': 'ScrollLock',
    '224': 'Meta'
};
/**
 * Check if `given` element is an input / textarea form element or acts as one.
 */ function isInput(element) {
    if (!element) {
        return false;
    }
    var tagName = element.tagName;
    var editable = isContentEditable(element);
    return tagName === 'INPUT' || tagName === 'TEXTAREA' || editable;
}
function isContentEditable(element) {
    if (typeof element.getAttribute !== 'function') {
        return false;
    }
    return !!element.getAttribute('contenteditable');
}
/**
 * Matches an event against a given keyboard key.
 */ function matchesElementOrArray(a, b) {
    if (Array.isArray(a)) {
        return a.includes(b);
    }
    return a === b;
}
function matchesKeyboardEvent(event, _ref) {
    var keyCode = _ref.keyCode, keyValue = _ref.keyValue, code = _ref.code;
    if (!isNullOrUndefined(keyValue)) {
        var value = eventKey(event);
        if (matchesElementOrArray(keyValue, value)) {
            return true;
        }
    }
    if (!isNullOrUndefined(code)) {
        if (matchesElementOrArray(code, event.code)) {
            return true;
        }
    }
    if (!isNullOrUndefined(keyCode)) {
        // Firefox handles keyCode through which
        var keyCodeTarget = event.keyCode || event.which;
        if (matchesElementOrArray(keyCode, keyCodeTarget)) {
            return true;
        }
    }
    return false;
}
function isNullOrUndefined(value) {
    return value === undefined || value === null;
}
function eventKey(event) {
    var key = event.key, keyCode = event.keyCode, type = event.type;
    if (key) {
        var normalizedKey = NORMALIZED_KEYS[key] || key;
        if (normalizedKey !== 'Unidentified') {
            return normalizedKey;
        }
    }
    if (type === KEYPRESS) {
        var charCode = eventCharCode(event);
        return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }
    if (type === KEYDOWN || type === KEYUP) {
        return KEY_CODE_KEYS[String(keyCode)] || 'Unidentified';
    }
    return '';
}
function eventCharCode(event) {
    var charCode = event.charCode, keyCode = event.keyCode;
    if ('charCode' in event) {
        if (charCode === 0 && keyCode === 13) {
            return 13;
        }
    } else {
        charCode = keyCode;
    }
    if (charCode >= 32 || charCode === 13) {
        return charCode;
    }
    return 0;
}
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
var createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var possibleConstructorReturn = function(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
var KeyHandler = function(_React$Component) {
    inherits(KeyHandler, _React$Component);
    createClass(KeyHandler, [
        {
            key: 'shouldComponentUpdate',
            value: function shouldComponentUpdate() {
                return false;
            }
        }
    ]);
    function KeyHandler(props) {
        classCallCheck(this, KeyHandler);
        /* eslint-disable no-console */ var _this = possibleConstructorReturn(this, (KeyHandler.__proto__ || Object.getPrototypeOf(KeyHandler)).call(this, props));
        _this.handleKey = function(event) {
            var _this$props = _this.props, keyValue = _this$props.keyValue, keyCode = _this$props.keyCode, code = _this$props.code, onKeyHandle = _this$props.onKeyHandle;
            if (!onKeyHandle) {
                return;
            }
            var target = event.target;
            if (target instanceof window.HTMLElement && isInput(target)) {
                return;
            }
            if (!matchesKeyboardEvent(event, {
                keyValue: keyValue,
                keyCode: keyCode,
                code: code
            })) {
                return;
            }
            onKeyHandle(event);
        };
        if (props.keyCode) {
            console.warn('Warning: Deprecated propType: `keyCode` is deprecated in favour of `code` for `KeyHandler`.');
        }
        if (!props.keyValue && !props.keyCode && !props.code) {
            console.error('Warning: Failed propType: Missing prop `code`, `keyValue` or `keyCode` for `KeyHandler`.');
        }
        /* eslint-enable */ return _this;
    }
    createClass(KeyHandler, [
        {
            key: 'componentDidMount',
            value: function componentDidMount() {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$exenv$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["canUseDOM"]) return;
                window.document.addEventListener(this.props.keyEventName, this.handleKey);
            }
        },
        {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$exenv$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["canUseDOM"]) return;
                window.document.removeEventListener(this.props.keyEventName, this.handleKey);
            }
        },
        {
            key: 'render',
            value: function render() {
                return null;
            }
        }
    ]);
    return KeyHandler;
}(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Component);
KeyHandler.propTypes = {
    keyValue: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string)
    ]),
    keyCode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number)
    ]),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string)
    ]),
    keyEventName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        KEYDOWN,
        KEYPRESS,
        KEYUP
    ]),
    onKeyHandle: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func
};
KeyHandler.defaultProps = {
    keyEventName: KEYUP
};
function keyHandleDecorator(matcher) {
    return function(props) {
        var _ref = props || {}, keyValue = _ref.keyValue, keyCode = _ref.keyCode, code = _ref.code, keyEventName = _ref.keyEventName;
        return function(Component) {
            return function(_React$Component) {
                inherits(KeyHandleDecorator, _React$Component);
                function KeyHandleDecorator() {
                    var _ref2;
                    var _temp, _this, _ret;
                    classCallCheck(this, KeyHandleDecorator);
                    for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref2 = KeyHandleDecorator.__proto__ || Object.getPrototypeOf(KeyHandleDecorator)).call.apply(_ref2, [
                        this
                    ].concat(args))), _this), _this.state = {
                        keyCode: null,
                        keyValue: null,
                        code: null
                    }, _this.handleKey = function(event) {
                        if (matcher && matcher(event, _this.state)) {
                            _this.setState({
                                keyValue: null,
                                keyCode: null
                            });
                            return;
                        }
                        _this.setState({
                            keyValue: eventKey(event),
                            keyCode: event.keyCode
                        });
                    }, _temp), possibleConstructorReturn(_this, _ret);
                }
                createClass(KeyHandleDecorator, [
                    {
                        key: 'render',
                        value: function render() {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(KeyHandler, {
                                keyValue: keyValue,
                                keyCode: keyCode,
                                code: code,
                                keyEventName: keyEventName,
                                onKeyHandle: this.handleKey
                            }), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, _extends({}, this.props, this.state)));
                        }
                    }
                ]);
                return KeyHandleDecorator;
            }(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Component);
        };
    };
}
var keyHandler = keyHandleDecorator();
var keyToggleHandler = keyHandleDecorator(matchesKeyboardEvent);
const __TURBOPACK__default__export__ = KeyHandler;
;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/@react-hook/passive-layout-effect/dist/module/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
;
const usePassiveLayoutEffect = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"][typeof document !== 'undefined' && document.createElement !== void 0 ? 'useLayoutEffect' : 'useEffect'];
const __TURBOPACK__default__export__ = usePassiveLayoutEffect;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/@react-hook/latest/dist/module/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
;
const useLatest = (current)=>{
    const storedValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"](current);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLatest.useEffect": ()=>{
            storedValue.current = current;
        }
    }["useLatest.useEffect"]);
    return storedValue;
};
const __TURBOPACK__default__export__ = useLatest;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/@react-hook/resize-observer/dist/module/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-return-assign */ /* eslint-disable no-underscore-dangle */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f40$react$2d$hook$2f$passive$2d$layout$2d$effect$2f$dist$2f$module$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/@react-hook/passive-layout-effect/dist/module/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f40$react$2d$hook$2f$latest$2f$dist$2f$module$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/@react-hook/latest/dist/module/index.js [client] (ecmascript)");
;
;
/**
 * A React hook that fires a callback whenever ResizeObserver detects a change to its size
 *
 * @param target A React ref created by `useRef()` or an HTML element
 * @param callback Invoked with a single `ResizeObserverEntry` any time
 *   the `target` resizes
 */ function _ref() {}
function useResizeObserver(target, callback, options = {}) {
    const resizeObserver = getResizeObserver(options.polyfill);
    const storedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f40$react$2d$hook$2f$latest$2f$dist$2f$module$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(callback);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f40$react$2d$hook$2f$passive$2d$layout$2d$effect$2f$dist$2f$module$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "useResizeObserver.useLayoutEffect": ()=>{
            let didUnsubscribe = false;
            const targetEl = target && 'current' in target ? target.current : target;
            if (!targetEl) return _ref;
            function cb(entry, observer) {
                if (didUnsubscribe) return;
                storedCallback.current(entry, observer);
            }
            resizeObserver.subscribe(targetEl, cb);
            return ({
                "useResizeObserver.useLayoutEffect": ()=>{
                    didUnsubscribe = true;
                    resizeObserver.unsubscribe(targetEl, cb);
                }
            })["useResizeObserver.useLayoutEffect"];
        }
    }["useResizeObserver.useLayoutEffect"], [
        target,
        resizeObserver,
        storedCallback
    ]);
    return resizeObserver.observer;
}
function createResizeObserver(polyfill) {
    let ticking = false;
    let allEntries = [];
    const callbacks = new Map();
    const observer = new (polyfill || window.ResizeObserver)((entries, obs)=>{
        allEntries = allEntries.concat(entries);
        function _ref2() {
            const triggered = new Set();
            for(let i = 0; i < allEntries.length; i++){
                if (triggered.has(allEntries[i].target)) continue;
                triggered.add(allEntries[i].target);
                const cbs = callbacks.get(allEntries[i].target);
                cbs === null || cbs === void 0 ? void 0 : cbs.forEach((cb)=>cb(allEntries[i], obs));
            }
            allEntries = [];
            ticking = false;
        }
        if (!ticking) {
            window.requestAnimationFrame(_ref2);
        }
        ticking = true;
    });
    return {
        observer,
        subscribe (target, callback) {
            var _callbacks$get;
            observer.observe(target);
            const cbs = (_callbacks$get = callbacks.get(target)) !== null && _callbacks$get !== void 0 ? _callbacks$get : [];
            cbs.push(callback);
            callbacks.set(target, cbs);
        },
        unsubscribe (target, callback) {
            var _callbacks$get2;
            const cbs = (_callbacks$get2 = callbacks.get(target)) !== null && _callbacks$get2 !== void 0 ? _callbacks$get2 : [];
            if (cbs.length === 1) {
                observer.unobserve(target);
                callbacks.delete(target);
                return;
            }
            const cbIndex = cbs.indexOf(callback);
            if (cbIndex !== -1) cbs.splice(cbIndex, 1);
            callbacks.set(target, cbs);
        }
    };
}
let _resizeObserver;
const getResizeObserver = (polyfill)=>!_resizeObserver ? _resizeObserver = createResizeObserver(polyfill) : _resizeObserver;
const __TURBOPACK__default__export__ = useResizeObserver;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areOptionsEqual",
    ()=>areOptionsEqual,
    "arePluginsEqual",
    ()=>arePluginsEqual,
    "canUseDOM",
    ()=>canUseDOM,
    "sortAndMapPluginToOptions",
    ()=>sortAndMapPluginToOptions
]);
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function isRecord(subject) {
    return isObject(subject) || Array.isArray(subject);
}
function canUseDOM() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
    const optionsAKeys = Object.keys(optionsA);
    const optionsBKeys = Object.keys(optionsB);
    if (optionsAKeys.length !== optionsBKeys.length) return false;
    const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
    const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
    if (breakpointsA !== breakpointsB) return false;
    return optionsAKeys.every((key)=>{
        const valueA = optionsA[key];
        const valueB = optionsB[key];
        if (typeof valueA === 'function') return `${valueA}` === `${valueB}`;
        if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
        return areOptionsEqual(valueA, valueB);
    });
}
function sortAndMapPluginToOptions(plugins) {
    return plugins.concat().sort((a, b)=>a.name > b.name ? 1 : -1).map((plugin)=>plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
    if (pluginsA.length !== pluginsB.length) return false;
    const optionsA = sortAndMapPluginToOptions(pluginsA);
    const optionsB = sortAndMapPluginToOptions(pluginsB);
    return optionsA.every((optionA, index)=>{
        const optionB = optionsB[index];
        return areOptionsEqual(optionA, optionB);
    });
}
;
 //# sourceMappingURL=embla-carousel-reactive-utils.esm.js.map
}),
"[project]/Documents/GitHub/MyWeb/node_modules/embla-carousel/esm/embla-carousel.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmblaCarousel
]);
function isNumber(subject) {
    return typeof subject === 'number';
}
function isString(subject) {
    return typeof subject === 'string';
}
function isBoolean(subject) {
    return typeof subject === 'boolean';
}
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function mathAbs(n) {
    return Math.abs(n);
}
function mathSign(n) {
    return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
    return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
    if (valueB === 0 || valueA === 0) return 0;
    if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
    const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
    return mathAbs(diff / valueB);
}
function roundToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
    return objectKeys(array).map(Number);
}
function arrayLast(array) {
    return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
    return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
    return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
    return Array.from(Array(n), (_, i)=>startAt + i);
}
function objectKeys(object) {
    return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
    return [
        objectA,
        objectB
    ].reduce((mergedObjects, currentObject)=>{
        objectKeys(currentObject).forEach((key)=>{
            const valueA = mergedObjects[key];
            const valueB = currentObject[key];
            const areObjects = isObject(valueA) && isObject(valueB);
            mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
        });
        return mergedObjects;
    }, {});
}
function isMouseEvent(evt, ownerWindow) {
    return typeof ownerWindow.MouseEvent !== 'undefined' && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
    const predefined = {
        start,
        center,
        end
    };
    function start() {
        return 0;
    }
    function center(n) {
        return end(n) / 2;
    }
    function end(n) {
        return viewSize - n;
    }
    function measure(n, index) {
        if (isString(align)) return predefined[align](n);
        return align(viewSize, n, index);
    }
    const self = {
        measure
    };
    return self;
}
function EventStore() {
    let listeners = [];
    function add(node, type, handler, options = {
        passive: true
    }) {
        let removeListener;
        if ('addEventListener' in node) {
            node.addEventListener(type, handler, options);
            removeListener = ()=>node.removeEventListener(type, handler, options);
        } else {
            const legacyMediaQueryList = node;
            legacyMediaQueryList.addListener(handler);
            removeListener = ()=>legacyMediaQueryList.removeListener(handler);
        }
        listeners.push(removeListener);
        return self;
    }
    function clear() {
        listeners = listeners.filter((remove)=>remove());
    }
    const self = {
        add,
        clear
    };
    return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
    const documentVisibleHandler = EventStore();
    const fixedTimeStep = 1000 / 60;
    let lastTimeStamp = null;
    let accumulatedTime = 0;
    let animationId = 0;
    function init() {
        documentVisibleHandler.add(ownerDocument, 'visibilitychange', ()=>{
            if (ownerDocument.hidden) reset();
        });
    }
    function destroy() {
        stop();
        documentVisibleHandler.clear();
    }
    function animate(timeStamp) {
        if (!animationId) return;
        if (!lastTimeStamp) {
            lastTimeStamp = timeStamp;
            update();
            update();
        }
        const timeElapsed = timeStamp - lastTimeStamp;
        lastTimeStamp = timeStamp;
        accumulatedTime += timeElapsed;
        while(accumulatedTime >= fixedTimeStep){
            update();
            accumulatedTime -= fixedTimeStep;
        }
        const alpha = accumulatedTime / fixedTimeStep;
        render(alpha);
        if (animationId) {
            animationId = ownerWindow.requestAnimationFrame(animate);
        }
    }
    function start() {
        if (animationId) return;
        animationId = ownerWindow.requestAnimationFrame(animate);
    }
    function stop() {
        ownerWindow.cancelAnimationFrame(animationId);
        lastTimeStamp = null;
        accumulatedTime = 0;
        animationId = 0;
    }
    function reset() {
        lastTimeStamp = null;
        accumulatedTime = 0;
    }
    const self = {
        init,
        destroy,
        start,
        stop,
        update,
        render
    };
    return self;
}
function Axis(axis, contentDirection) {
    const isRightToLeft = contentDirection === 'rtl';
    const isVertical = axis === 'y';
    const scroll = isVertical ? 'y' : 'x';
    const cross = isVertical ? 'x' : 'y';
    const sign = !isVertical && isRightToLeft ? -1 : 1;
    const startEdge = getStartEdge();
    const endEdge = getEndEdge();
    function measureSize(nodeRect) {
        const { height, width } = nodeRect;
        return isVertical ? height : width;
    }
    function getStartEdge() {
        if (isVertical) return 'top';
        return isRightToLeft ? 'right' : 'left';
    }
    function getEndEdge() {
        if (isVertical) return 'bottom';
        return isRightToLeft ? 'left' : 'right';
    }
    function direction(n) {
        return n * sign;
    }
    const self = {
        scroll,
        cross,
        startEdge,
        endEdge,
        measureSize,
        direction
    };
    return self;
}
function Limit(min = 0, max = 0) {
    const length = mathAbs(min - max);
    function reachedMin(n) {
        return n < min;
    }
    function reachedMax(n) {
        return n > max;
    }
    function reachedAny(n) {
        return reachedMin(n) || reachedMax(n);
    }
    function constrain(n) {
        if (!reachedAny(n)) return n;
        return reachedMin(n) ? min : max;
    }
    function removeOffset(n) {
        if (!length) return n;
        return n - length * Math.ceil((n - max) / length);
    }
    const self = {
        length,
        max,
        min,
        constrain,
        reachedAny,
        reachedMax,
        reachedMin,
        removeOffset
    };
    return self;
}
function Counter(max, start, loop) {
    const { constrain } = Limit(0, max);
    const loopEnd = max + 1;
    let counter = withinLimit(start);
    function withinLimit(n) {
        return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
    }
    function get() {
        return counter;
    }
    function set(n) {
        counter = withinLimit(n);
        return self;
    }
    function add(n) {
        return clone().set(get() + n);
    }
    function clone() {
        return Counter(max, get(), loop);
    }
    const self = {
        get,
        set,
        add,
        clone
    };
    return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
    const { cross: crossAxis, direction } = axis;
    const focusNodes = [
        'INPUT',
        'SELECT',
        'TEXTAREA'
    ];
    const nonPassiveEvent = {
        passive: false
    };
    const initEvents = EventStore();
    const dragEvents = EventStore();
    const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
    const snapForceBoost = {
        mouse: 300,
        touch: 400
    };
    const freeForceBoost = {
        mouse: 500,
        touch: 600
    };
    const baseSpeed = dragFree ? 43 : 25;
    let isMoving = false;
    let startScroll = 0;
    let startCross = 0;
    let pointerIsDown = false;
    let preventScroll = false;
    let preventClick = false;
    let isMouse = false;
    function init(emblaApi) {
        if (!watchDrag) return;
        function downIfAllowed(evt) {
            if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
        }
        const node = rootNode;
        initEvents.add(node, 'dragstart', (evt)=>evt.preventDefault(), nonPassiveEvent).add(node, 'touchmove', ()=>undefined, nonPassiveEvent).add(node, 'touchend', ()=>undefined).add(node, 'touchstart', downIfAllowed).add(node, 'mousedown', downIfAllowed).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click, true);
    }
    function destroy() {
        initEvents.clear();
        dragEvents.clear();
    }
    function addDragEvents() {
        const node = isMouse ? ownerDocument : rootNode;
        dragEvents.add(node, 'touchmove', move, nonPassiveEvent).add(node, 'touchend', up).add(node, 'mousemove', move, nonPassiveEvent).add(node, 'mouseup', up);
    }
    function isFocusNode(node) {
        const nodeName = node.nodeName || '';
        return focusNodes.includes(nodeName);
    }
    function forceBoost() {
        const boost = dragFree ? freeForceBoost : snapForceBoost;
        const type = isMouse ? 'mouse' : 'touch';
        return boost[type];
    }
    function allowedForce(force, targetChanged) {
        const next = index.add(mathSign(force) * -1);
        const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
        if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
        if (skipSnaps && targetChanged) return baseForce * 0.5;
        return scrollTarget.byIndex(next.get(), 0).distance;
    }
    function down(evt) {
        const isMouseEvt = isMouseEvent(evt, ownerWindow);
        isMouse = isMouseEvt;
        preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
        isMoving = deltaAbs(target.get(), location.get()) >= 2;
        if (isMouseEvt && evt.button !== 0) return;
        if (isFocusNode(evt.target)) return;
        pointerIsDown = true;
        dragTracker.pointerDown(evt);
        scrollBody.useFriction(0).useDuration(0);
        target.set(location);
        addDragEvents();
        startScroll = dragTracker.readPoint(evt);
        startCross = dragTracker.readPoint(evt, crossAxis);
        eventHandler.emit('pointerDown');
    }
    function move(evt) {
        const isTouchEvt = !isMouseEvent(evt, ownerWindow);
        if (isTouchEvt && evt.touches.length >= 2) return up(evt);
        const lastScroll = dragTracker.readPoint(evt);
        const lastCross = dragTracker.readPoint(evt, crossAxis);
        const diffScroll = deltaAbs(lastScroll, startScroll);
        const diffCross = deltaAbs(lastCross, startCross);
        if (!preventScroll && !isMouse) {
            if (!evt.cancelable) return up(evt);
            preventScroll = diffScroll > diffCross;
            if (!preventScroll) return up(evt);
        }
        const diff = dragTracker.pointerMove(evt);
        if (diffScroll > dragThreshold) preventClick = true;
        scrollBody.useFriction(0.3).useDuration(0.75);
        animation.start();
        target.add(direction(diff));
        evt.preventDefault();
    }
    function up(evt) {
        const currentLocation = scrollTarget.byDistance(0, false);
        const targetChanged = currentLocation.index !== index.get();
        const rawForce = dragTracker.pointerUp(evt) * forceBoost();
        const force = allowedForce(direction(rawForce), targetChanged);
        const forceFactor = factorAbs(rawForce, force);
        const speed = baseSpeed - 10 * forceFactor;
        const friction = baseFriction + forceFactor / 50;
        preventScroll = false;
        pointerIsDown = false;
        dragEvents.clear();
        scrollBody.useDuration(speed).useFriction(friction);
        scrollTo.distance(force, !dragFree);
        isMouse = false;
        eventHandler.emit('pointerUp');
    }
    function click(evt) {
        if (preventClick) {
            evt.stopPropagation();
            evt.preventDefault();
            preventClick = false;
        }
    }
    function pointerDown() {
        return pointerIsDown;
    }
    const self = {
        init,
        destroy,
        pointerDown
    };
    return self;
}
function DragTracker(axis, ownerWindow) {
    const logInterval = 170;
    let startEvent;
    let lastEvent;
    function readTime(evt) {
        return evt.timeStamp;
    }
    function readPoint(evt, evtAxis) {
        const property = evtAxis || axis.scroll;
        const coord = `client${property === 'x' ? 'X' : 'Y'}`;
        return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
    }
    function pointerDown(evt) {
        startEvent = evt;
        lastEvent = evt;
        return readPoint(evt);
    }
    function pointerMove(evt) {
        const diff = readPoint(evt) - readPoint(lastEvent);
        const expired = readTime(evt) - readTime(startEvent) > logInterval;
        lastEvent = evt;
        if (expired) startEvent = evt;
        return diff;
    }
    function pointerUp(evt) {
        if (!startEvent || !lastEvent) return 0;
        const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
        const diffTime = readTime(evt) - readTime(startEvent);
        const expired = readTime(evt) - readTime(lastEvent) > logInterval;
        const force = diffDrag / diffTime;
        const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
        return isFlick ? force : 0;
    }
    const self = {
        pointerDown,
        pointerMove,
        pointerUp,
        readPoint
    };
    return self;
}
function NodeRects() {
    function measure(node) {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
        const offset = {
            top: offsetTop,
            right: offsetLeft + offsetWidth,
            bottom: offsetTop + offsetHeight,
            left: offsetLeft,
            width: offsetWidth,
            height: offsetHeight
        };
        return offset;
    }
    const self = {
        measure
    };
    return self;
}
function PercentOfView(viewSize) {
    function measure(n) {
        return viewSize * (n / 100);
    }
    const self = {
        measure
    };
    return self;
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
    const observeNodes = [
        container
    ].concat(slides);
    let resizeObserver;
    let containerSize;
    let slideSizes = [];
    let destroyed = false;
    function readSize(node) {
        return axis.measureSize(nodeRects.measure(node));
    }
    function init(emblaApi) {
        if (!watchResize) return;
        containerSize = readSize(container);
        slideSizes = slides.map(readSize);
        function defaultCallback(entries) {
            for (const entry of entries){
                if (destroyed) return;
                const isContainer = entry.target === container;
                const slideIndex = slides.indexOf(entry.target);
                const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
                const newSize = readSize(isContainer ? container : slides[slideIndex]);
                const diffSize = mathAbs(newSize - lastSize);
                if (diffSize >= 0.5) {
                    emblaApi.reInit();
                    eventHandler.emit('resize');
                    break;
                }
            }
        }
        resizeObserver = new ResizeObserver((entries)=>{
            if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
                defaultCallback(entries);
            }
        });
        ownerWindow.requestAnimationFrame(()=>{
            observeNodes.forEach((node)=>resizeObserver.observe(node));
        });
    }
    function destroy() {
        destroyed = true;
        if (resizeObserver) resizeObserver.disconnect();
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
    let scrollVelocity = 0;
    let scrollDirection = 0;
    let scrollDuration = baseDuration;
    let scrollFriction = baseFriction;
    let rawLocation = location.get();
    let rawLocationPrevious = 0;
    function seek() {
        const displacement = target.get() - location.get();
        const isInstant = !scrollDuration;
        let scrollDistance = 0;
        if (isInstant) {
            scrollVelocity = 0;
            previousLocation.set(target);
            location.set(target);
            scrollDistance = displacement;
        } else {
            previousLocation.set(location);
            scrollVelocity += displacement / scrollDuration;
            scrollVelocity *= scrollFriction;
            rawLocation += scrollVelocity;
            location.add(scrollVelocity);
            scrollDistance = rawLocation - rawLocationPrevious;
        }
        scrollDirection = mathSign(scrollDistance);
        rawLocationPrevious = rawLocation;
        return self;
    }
    function settled() {
        const diff = target.get() - offsetLocation.get();
        return mathAbs(diff) < 0.001;
    }
    function duration() {
        return scrollDuration;
    }
    function direction() {
        return scrollDirection;
    }
    function velocity() {
        return scrollVelocity;
    }
    function useBaseDuration() {
        return useDuration(baseDuration);
    }
    function useBaseFriction() {
        return useFriction(baseFriction);
    }
    function useDuration(n) {
        scrollDuration = n;
        return self;
    }
    function useFriction(n) {
        scrollFriction = n;
        return self;
    }
    const self = {
        direction,
        duration,
        velocity,
        seek,
        settled,
        useBaseFriction,
        useBaseDuration,
        useFriction,
        useDuration
    };
    return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
    const pullBackThreshold = percentOfView.measure(10);
    const edgeOffsetTolerance = percentOfView.measure(50);
    const frictionLimit = Limit(0.1, 0.99);
    let disabled = false;
    function shouldConstrain() {
        if (disabled) return false;
        if (!limit.reachedAny(target.get())) return false;
        if (!limit.reachedAny(location.get())) return false;
        return true;
    }
    function constrain(pointerDown) {
        if (!shouldConstrain()) return;
        const edge = limit.reachedMin(location.get()) ? 'min' : 'max';
        const diffToEdge = mathAbs(limit[edge] - location.get());
        const diffToTarget = target.get() - location.get();
        const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
        target.subtract(diffToTarget * friction);
        if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
            target.set(limit.constrain(target.get()));
            scrollBody.useDuration(25).useBaseFriction();
        }
    }
    function toggleActive(active) {
        disabled = !active;
    }
    const self = {
        shouldConstrain,
        constrain,
        toggleActive
    };
    return self;
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
    const scrollBounds = Limit(-contentSize + viewSize, 0);
    const snapsBounded = measureBounded();
    const scrollContainLimit = findScrollContainLimit();
    const snapsContained = measureContained();
    function usePixelTolerance(bound, snap) {
        return deltaAbs(bound, snap) <= 1;
    }
    function findScrollContainLimit() {
        const startSnap = snapsBounded[0];
        const endSnap = arrayLast(snapsBounded);
        const min = snapsBounded.lastIndexOf(startSnap);
        const max = snapsBounded.indexOf(endSnap) + 1;
        return Limit(min, max);
    }
    function measureBounded() {
        return snapsAligned.map((snapAligned, index)=>{
            const { min, max } = scrollBounds;
            const snap = scrollBounds.constrain(snapAligned);
            const isFirst = !index;
            const isLast = arrayIsLastIndex(snapsAligned, index);
            if (isFirst) return max;
            if (isLast) return min;
            if (usePixelTolerance(min, snap)) return min;
            if (usePixelTolerance(max, snap)) return max;
            return snap;
        }).map((scrollBound)=>parseFloat(scrollBound.toFixed(3)));
    }
    function measureContained() {
        if (contentSize <= viewSize + pixelTolerance) return [
            scrollBounds.max
        ];
        if (containScroll === 'keepSnaps') return snapsBounded;
        const { min, max } = scrollContainLimit;
        return snapsBounded.slice(min, max);
    }
    const self = {
        snapsContained,
        scrollContainLimit
    };
    return self;
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
    const max = scrollSnaps[0];
    const min = loop ? max - contentSize : arrayLast(scrollSnaps);
    const limit = Limit(min, max);
    const self = {
        limit
    };
    return self;
}
function ScrollLooper(contentSize, limit, location, vectors) {
    const jointSafety = 0.1;
    const min = limit.min + jointSafety;
    const max = limit.max + jointSafety;
    const { reachedMin, reachedMax } = Limit(min, max);
    function shouldLoop(direction) {
        if (direction === 1) return reachedMax(location.get());
        if (direction === -1) return reachedMin(location.get());
        return false;
    }
    function loop(direction) {
        if (!shouldLoop(direction)) return;
        const loopDistance = contentSize * (direction * -1);
        vectors.forEach((v)=>v.add(loopDistance));
    }
    const self = {
        loop
    };
    return self;
}
function ScrollProgress(limit) {
    const { max, length } = limit;
    function get(n) {
        const currentLocation = n - max;
        return length ? currentLocation / -length : 0;
    }
    const self = {
        get
    };
    return self;
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
    const { startEdge, endEdge } = axis;
    const { groupSlides } = slidesToScroll;
    const alignments = measureSizes().map(alignment.measure);
    const snaps = measureUnaligned();
    const snapsAligned = measureAligned();
    function measureSizes() {
        return groupSlides(slideRects).map((rects)=>arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
    }
    function measureUnaligned() {
        return slideRects.map((rect)=>containerRect[startEdge] - rect[startEdge]).map((snap)=>-mathAbs(snap));
    }
    function measureAligned() {
        return groupSlides(snaps).map((g)=>g[0]).map((snap, index)=>snap + alignments[index]);
    }
    const self = {
        snaps,
        snapsAligned
    };
    return self;
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
    const { groupSlides } = slidesToScroll;
    const { min, max } = scrollContainLimit;
    const slideRegistry = createSlideRegistry();
    function createSlideRegistry() {
        const groupedSlideIndexes = groupSlides(slideIndexes);
        const doNotContain = !containSnaps || containScroll === 'keepSnaps';
        if (scrollSnaps.length === 1) return [
            slideIndexes
        ];
        if (doNotContain) return groupedSlideIndexes;
        return groupedSlideIndexes.slice(min, max).map((group, index, groups)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(groups, index);
            if (isFirst) {
                const range = arrayLast(groups[0]) + 1;
                return arrayFromNumber(range);
            }
            if (isLast) {
                const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
                return arrayFromNumber(range, arrayLast(groups)[0]);
            }
            return group;
        });
    }
    const self = {
        slideRegistry
    };
    return self;
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
    const { reachedAny, removeOffset, constrain } = limit;
    function minDistance(distances) {
        return distances.concat().sort((a, b)=>mathAbs(a) - mathAbs(b))[0];
    }
    function findTargetSnap(target) {
        const distance = loop ? removeOffset(target) : constrain(target);
        const ascDiffsToSnaps = scrollSnaps.map((snap, index)=>({
                diff: shortcut(snap - distance, 0),
                index
            })).sort((d1, d2)=>mathAbs(d1.diff) - mathAbs(d2.diff));
        const { index } = ascDiffsToSnaps[0];
        return {
            index,
            distance
        };
    }
    function shortcut(target, direction) {
        const targets = [
            target,
            target + contentSize,
            target - contentSize
        ];
        if (!loop) return target;
        if (!direction) return minDistance(targets);
        const matchingTargets = targets.filter((t)=>mathSign(t) === direction);
        if (matchingTargets.length) return minDistance(matchingTargets);
        return arrayLast(targets) - contentSize;
    }
    function byIndex(index, direction) {
        const diffToSnap = scrollSnaps[index] - targetVector.get();
        const distance = shortcut(diffToSnap, direction);
        return {
            index,
            distance
        };
    }
    function byDistance(distance, snap) {
        const target = targetVector.get() + distance;
        const { index, distance: targetSnapDistance } = findTargetSnap(target);
        const reachedBound = !loop && reachedAny(target);
        if (!snap || reachedBound) return {
            index,
            distance
        };
        const diffToSnap = scrollSnaps[index] - targetSnapDistance;
        const snapDistance = distance + shortcut(diffToSnap, 0);
        return {
            index,
            distance: snapDistance
        };
    }
    const self = {
        byDistance,
        byIndex,
        shortcut
    };
    return self;
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
    function scrollTo(target) {
        const distanceDiff = target.distance;
        const indexDiff = target.index !== indexCurrent.get();
        targetVector.add(distanceDiff);
        if (distanceDiff) {
            if (scrollBody.duration()) {
                animation.start();
            } else {
                animation.update();
                animation.render(1);
                animation.update();
            }
        }
        if (indexDiff) {
            indexPrevious.set(indexCurrent.get());
            indexCurrent.set(target.index);
            eventHandler.emit('select');
        }
    }
    function distance(n, snap) {
        const target = scrollTarget.byDistance(n, snap);
        scrollTo(target);
    }
    function index(n, direction) {
        const targetIndex = indexCurrent.clone().set(n);
        const target = scrollTarget.byIndex(targetIndex.get(), direction);
        scrollTo(target);
    }
    const self = {
        distance,
        index
    };
    return self;
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
    const focusListenerOptions = {
        passive: true,
        capture: true
    };
    let lastTabPressTime = 0;
    function init(emblaApi) {
        if (!watchFocus) return;
        function defaultCallback(index) {
            const nowTime = new Date().getTime();
            const diffTime = nowTime - lastTabPressTime;
            if (diffTime > 10) return;
            eventHandler.emit('slideFocusStart');
            root.scrollLeft = 0;
            const group = slideRegistry.findIndex((group)=>group.includes(index));
            if (!isNumber(group)) return;
            scrollBody.useDuration(0);
            scrollTo.index(group, 0);
            eventHandler.emit('slideFocus');
        }
        eventStore.add(document, 'keydown', registerTabPress, false);
        slides.forEach((slide, slideIndex)=>{
            eventStore.add(slide, 'focus', (evt)=>{
                if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) {
                    defaultCallback(slideIndex);
                }
            }, focusListenerOptions);
        });
    }
    function registerTabPress(event) {
        if (event.code === 'Tab') lastTabPressTime = new Date().getTime();
    }
    const self = {
        init
    };
    return self;
}
function Vector1D(initialValue) {
    let value = initialValue;
    function get() {
        return value;
    }
    function set(n) {
        value = normalizeInput(n);
    }
    function add(n) {
        value += normalizeInput(n);
    }
    function subtract(n) {
        value -= normalizeInput(n);
    }
    function normalizeInput(n) {
        return isNumber(n) ? n : n.get();
    }
    const self = {
        get,
        set,
        add,
        subtract
    };
    return self;
}
function Translate(axis, container) {
    const translate = axis.scroll === 'x' ? x : y;
    const containerStyle = container.style;
    let previousTarget = null;
    let disabled = false;
    function x(n) {
        return `translate3d(${n}px,0px,0px)`;
    }
    function y(n) {
        return `translate3d(0px,${n}px,0px)`;
    }
    function to(target) {
        if (disabled) return;
        const newTarget = roundToTwoDecimals(axis.direction(target));
        if (newTarget === previousTarget) return;
        containerStyle.transform = translate(newTarget);
        previousTarget = newTarget;
    }
    function toggleActive(active) {
        disabled = !active;
    }
    function clear() {
        if (disabled) return;
        containerStyle.transform = '';
        if (!container.getAttribute('style')) container.removeAttribute('style');
    }
    const self = {
        clear,
        to,
        toggleActive
    };
    return self;
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
    const roundingSafety = 0.5;
    const ascItems = arrayKeys(slideSizesWithGaps);
    const descItems = arrayKeys(slideSizesWithGaps).reverse();
    const loopPoints = startPoints().concat(endPoints());
    function removeSlideSizes(indexes, from) {
        return indexes.reduce((a, i)=>{
            return a - slideSizesWithGaps[i];
        }, from);
    }
    function slidesInGap(indexes, gap) {
        return indexes.reduce((a, i)=>{
            const remainingGap = removeSlideSizes(a, gap);
            return remainingGap > 0 ? a.concat([
                i
            ]) : a;
        }, []);
    }
    function findSlideBounds(offset) {
        return snaps.map((snap, index)=>({
                start: snap - slideSizes[index] + roundingSafety + offset,
                end: snap + viewSize - roundingSafety + offset
            }));
    }
    function findLoopPoints(indexes, offset, isEndEdge) {
        const slideBounds = findSlideBounds(offset);
        return indexes.map((index)=>{
            const initial = isEndEdge ? 0 : -contentSize;
            const altered = isEndEdge ? contentSize : 0;
            const boundEdge = isEndEdge ? 'end' : 'start';
            const loopPoint = slideBounds[index][boundEdge];
            return {
                index,
                loopPoint,
                slideLocation: Vector1D(-1),
                translate: Translate(axis, slides[index]),
                target: ()=>location.get() > loopPoint ? initial : altered
            };
        });
    }
    function startPoints() {
        const gap = scrollSnaps[0];
        const indexes = slidesInGap(descItems, gap);
        return findLoopPoints(indexes, contentSize, false);
    }
    function endPoints() {
        const gap = viewSize - scrollSnaps[0] - 1;
        const indexes = slidesInGap(ascItems, gap);
        return findLoopPoints(indexes, -contentSize, true);
    }
    function canLoop() {
        return loopPoints.every(({ index })=>{
            const otherIndexes = ascItems.filter((i)=>i !== index);
            return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
        });
    }
    function loop() {
        loopPoints.forEach((loopPoint)=>{
            const { target, translate, slideLocation } = loopPoint;
            const shiftLocation = target();
            if (shiftLocation === slideLocation.get()) return;
            translate.to(shiftLocation);
            slideLocation.set(shiftLocation);
        });
    }
    function clear() {
        loopPoints.forEach((loopPoint)=>loopPoint.translate.clear());
    }
    const self = {
        canLoop,
        clear,
        loop,
        loopPoints
    };
    return self;
}
function SlidesHandler(container, eventHandler, watchSlides) {
    let mutationObserver;
    let destroyed = false;
    function init(emblaApi) {
        if (!watchSlides) return;
        function defaultCallback(mutations) {
            for (const mutation of mutations){
                if (mutation.type === 'childList') {
                    emblaApi.reInit();
                    eventHandler.emit('slidesChanged');
                    break;
                }
            }
        }
        mutationObserver = new MutationObserver((mutations)=>{
            if (destroyed) return;
            if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
                defaultCallback(mutations);
            }
        });
        mutationObserver.observe(container, {
            childList: true
        });
    }
    function destroy() {
        if (mutationObserver) mutationObserver.disconnect();
        destroyed = true;
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function SlidesInView(container, slides, eventHandler, threshold) {
    const intersectionEntryMap = {};
    let inViewCache = null;
    let notInViewCache = null;
    let intersectionObserver;
    let destroyed = false;
    function init() {
        intersectionObserver = new IntersectionObserver((entries)=>{
            if (destroyed) return;
            entries.forEach((entry)=>{
                const index = slides.indexOf(entry.target);
                intersectionEntryMap[index] = entry;
            });
            inViewCache = null;
            notInViewCache = null;
            eventHandler.emit('slidesInView');
        }, {
            root: container.parentElement,
            threshold
        });
        slides.forEach((slide)=>intersectionObserver.observe(slide));
    }
    function destroy() {
        if (intersectionObserver) intersectionObserver.disconnect();
        destroyed = true;
    }
    function createInViewList(inView) {
        return objectKeys(intersectionEntryMap).reduce((list, slideIndex)=>{
            const index = parseInt(slideIndex);
            const { isIntersecting } = intersectionEntryMap[index];
            const inViewMatch = inView && isIntersecting;
            const notInViewMatch = !inView && !isIntersecting;
            if (inViewMatch || notInViewMatch) list.push(index);
            return list;
        }, []);
    }
    function get(inView = true) {
        if (inView && inViewCache) return inViewCache;
        if (!inView && notInViewCache) return notInViewCache;
        const slideIndexes = createInViewList(inView);
        if (inView) inViewCache = slideIndexes;
        if (!inView) notInViewCache = slideIndexes;
        return slideIndexes;
    }
    const self = {
        init,
        destroy,
        get
    };
    return self;
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
    const { measureSize, startEdge, endEdge } = axis;
    const withEdgeGap = slideRects[0] && readEdgeGap;
    const startGap = measureStartGap();
    const endGap = measureEndGap();
    const slideSizes = slideRects.map(measureSize);
    const slideSizesWithGaps = measureWithGaps();
    function measureStartGap() {
        if (!withEdgeGap) return 0;
        const slideRect = slideRects[0];
        return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
    }
    function measureEndGap() {
        if (!withEdgeGap) return 0;
        const style = ownerWindow.getComputedStyle(arrayLast(slides));
        return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
    }
    function measureWithGaps() {
        return slideRects.map((rect, index, rects)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(rects, index);
            if (isFirst) return slideSizes[index] + startGap;
            if (isLast) return slideSizes[index] + endGap;
            return rects[index + 1][startEdge] - rect[startEdge];
        }).map(mathAbs);
    }
    const self = {
        slideSizes,
        slideSizesWithGaps,
        startGap,
        endGap
    };
    return self;
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
    const { startEdge, endEdge, direction } = axis;
    const groupByNumber = isNumber(slidesToScroll);
    function byNumber(array, groupSize) {
        return arrayKeys(array).filter((i)=>i % groupSize === 0).map((i)=>array.slice(i, i + groupSize));
    }
    function bySize(array) {
        if (!array.length) return [];
        return arrayKeys(array).reduce((groups, rectB, index)=>{
            const rectA = arrayLast(groups) || 0;
            const isFirst = rectA === 0;
            const isLast = rectB === arrayLastIndex(array);
            const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
            const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
            const gapA = !loop && isFirst ? direction(startGap) : 0;
            const gapB = !loop && isLast ? direction(endGap) : 0;
            const chunkSize = mathAbs(edgeB - gapB - (edgeA + gapA));
            if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
            if (isLast) groups.push(array.length);
            return groups;
        }, []).map((currentSize, index, groups)=>{
            const previousSize = Math.max(groups[index - 1] || 0);
            return array.slice(previousSize, currentSize);
        });
    }
    function groupSlides(array) {
        return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
    }
    const self = {
        groupSlides
    };
    return self;
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
    // Options
    const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
    // Measurements
    const pixelTolerance = 2;
    const nodeRects = NodeRects();
    const containerRect = nodeRects.measure(container);
    const slideRects = slides.map(nodeRects.measure);
    const axis = Axis(scrollAxis, direction);
    const viewSize = axis.measureSize(containerRect);
    const percentOfView = PercentOfView(viewSize);
    const alignment = Alignment(align, viewSize);
    const containSnaps = !loop && !!containScroll;
    const readEdgeGap = loop || !!containScroll;
    const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
    const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
    const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
    const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
    const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
    const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
    const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
    // Indexes
    const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
    const indexPrevious = index.clone();
    const slideIndexes = arrayKeys(slides);
    // Animation
    const update = ({ dragHandler, scrollBody, scrollBounds, options: { loop } })=>{
        if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
        scrollBody.seek();
    };
    const render = ({ scrollBody, translate, location, offsetLocation, previousLocation, scrollLooper, slideLooper, dragHandler, animation, eventHandler, scrollBounds, options: { loop } }, alpha)=>{
        const shouldSettle = scrollBody.settled();
        const withinBounds = !scrollBounds.shouldConstrain();
        const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
        const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
        if (hasSettledAndIdle) animation.stop();
        const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
        offsetLocation.set(interpolatedLocation);
        if (loop) {
            scrollLooper.loop(scrollBody.direction());
            slideLooper.loop();
        }
        translate.to(offsetLocation.get());
        if (hasSettledAndIdle) eventHandler.emit('settle');
        if (!hasSettled) eventHandler.emit('scroll');
    };
    const animation = Animations(ownerDocument, ownerWindow, ()=>update(engine), (alpha)=>render(engine, alpha));
    // Shared
    const friction = 0.68;
    const startLocation = scrollSnaps[index.get()];
    const location = Vector1D(startLocation);
    const previousLocation = Vector1D(startLocation);
    const offsetLocation = Vector1D(startLocation);
    const target = Vector1D(startLocation);
    const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
    const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
    const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
    const scrollProgress = ScrollProgress(limit);
    const eventStore = EventStore();
    const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
    const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
    const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
    // Engine
    const engine = {
        ownerDocument,
        ownerWindow,
        eventHandler,
        containerRect,
        slideRects,
        animation,
        axis,
        dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
        eventStore,
        percentOfView,
        index,
        indexPrevious,
        limit,
        location,
        offsetLocation,
        previousLocation,
        options,
        resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
        scrollBody,
        scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
        scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
            location,
            offsetLocation,
            previousLocation,
            target
        ]),
        scrollProgress,
        scrollSnapList: scrollSnaps.map(scrollProgress.get),
        scrollSnaps,
        scrollTarget,
        scrollTo,
        slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
        slideFocus,
        slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
        slidesInView,
        slideIndexes,
        slideRegistry,
        slidesToScroll,
        target,
        translate: Translate(axis, container)
    };
    return engine;
}
function EventHandler() {
    let listeners = {};
    let api;
    function init(emblaApi) {
        api = emblaApi;
    }
    function getListeners(evt) {
        return listeners[evt] || [];
    }
    function emit(evt) {
        getListeners(evt).forEach((e)=>e(api, evt));
        return self;
    }
    function on(evt, cb) {
        listeners[evt] = getListeners(evt).concat([
            cb
        ]);
        return self;
    }
    function off(evt, cb) {
        listeners[evt] = getListeners(evt).filter((e)=>e !== cb);
        return self;
    }
    function clear() {
        listeners = {};
    }
    const self = {
        init,
        emit,
        off,
        on,
        clear
    };
    return self;
}
const defaultOptions = {
    align: 'center',
    axis: 'x',
    container: null,
    slides: null,
    containScroll: 'trimSnaps',
    direction: 'ltr',
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: false,
    dragThreshold: 10,
    loop: false,
    skipSnaps: false,
    duration: 25,
    startIndex: 0,
    active: true,
    watchDrag: true,
    watchResize: true,
    watchSlides: true,
    watchFocus: true
};
function OptionsHandler(ownerWindow) {
    function mergeOptions(optionsA, optionsB) {
        return objectsMergeDeep(optionsA, optionsB || {});
    }
    function optionsAtMedia(options) {
        const optionsAtMedia = options.breakpoints || {};
        const matchedMediaOptions = objectKeys(optionsAtMedia).filter((media)=>ownerWindow.matchMedia(media).matches).map((media)=>optionsAtMedia[media]).reduce((a, mediaOption)=>mergeOptions(a, mediaOption), {});
        return mergeOptions(options, matchedMediaOptions);
    }
    function optionsMediaQueries(optionsList) {
        return optionsList.map((options)=>objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries)=>acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
    }
    const self = {
        mergeOptions,
        optionsAtMedia,
        optionsMediaQueries
    };
    return self;
}
function PluginsHandler(optionsHandler) {
    let activePlugins = [];
    function init(emblaApi, plugins) {
        activePlugins = plugins.filter(({ options })=>optionsHandler.optionsAtMedia(options).active !== false);
        activePlugins.forEach((plugin)=>plugin.init(emblaApi, optionsHandler));
        return plugins.reduce((map, plugin)=>Object.assign(map, {
                [plugin.name]: plugin
            }), {});
    }
    function destroy() {
        activePlugins = activePlugins.filter((plugin)=>plugin.destroy());
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function EmblaCarousel(root, userOptions, userPlugins) {
    const ownerDocument = root.ownerDocument;
    const ownerWindow = ownerDocument.defaultView;
    const optionsHandler = OptionsHandler(ownerWindow);
    const pluginsHandler = PluginsHandler(optionsHandler);
    const mediaHandlers = EventStore();
    const eventHandler = EventHandler();
    const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
    const { on, off, emit } = eventHandler;
    const reInit = reActivate;
    let destroyed = false;
    let engine;
    let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
    let options = mergeOptions(optionsBase);
    let pluginList = [];
    let pluginApis;
    let container;
    let slides;
    function storeElements() {
        const { container: userContainer, slides: userSlides } = options;
        const customContainer = isString(userContainer) ? root.querySelector(userContainer) : userContainer;
        container = customContainer || root.children[0];
        const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
        slides = [].slice.call(customSlides || container.children);
    }
    function createEngine(options) {
        const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
        if (options.loop && !engine.slideLooper.canLoop()) {
            const optionsWithoutLoop = Object.assign({}, options, {
                loop: false
            });
            return createEngine(optionsWithoutLoop);
        }
        return engine;
    }
    function activate(withOptions, withPlugins) {
        if (destroyed) return;
        optionsBase = mergeOptions(optionsBase, withOptions);
        options = optionsAtMedia(optionsBase);
        pluginList = withPlugins || pluginList;
        storeElements();
        engine = createEngine(options);
        optionsMediaQueries([
            optionsBase,
            ...pluginList.map(({ options })=>options)
        ]).forEach((query)=>mediaHandlers.add(query, 'change', reActivate));
        if (!options.active) return;
        engine.translate.to(engine.location.get());
        engine.animation.init();
        engine.slidesInView.init();
        engine.slideFocus.init(self);
        engine.eventHandler.init(self);
        engine.resizeHandler.init(self);
        engine.slidesHandler.init(self);
        if (engine.options.loop) engine.slideLooper.loop();
        if (container.offsetParent && slides.length) engine.dragHandler.init(self);
        pluginApis = pluginsHandler.init(self, pluginList);
    }
    function reActivate(withOptions, withPlugins) {
        const startIndex = selectedScrollSnap();
        deActivate();
        activate(mergeOptions({
            startIndex
        }, withOptions), withPlugins);
        eventHandler.emit('reInit');
    }
    function deActivate() {
        engine.dragHandler.destroy();
        engine.eventStore.clear();
        engine.translate.clear();
        engine.slideLooper.clear();
        engine.resizeHandler.destroy();
        engine.slidesHandler.destroy();
        engine.slidesInView.destroy();
        engine.animation.destroy();
        pluginsHandler.destroy();
        mediaHandlers.clear();
    }
    function destroy() {
        if (destroyed) return;
        destroyed = true;
        mediaHandlers.clear();
        deActivate();
        eventHandler.emit('destroy');
        eventHandler.clear();
    }
    function scrollTo(index, jump, direction) {
        if (!options.active || destroyed) return;
        engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
        engine.scrollTo.index(index, direction || 0);
    }
    function scrollNext(jump) {
        const next = engine.index.add(1).get();
        scrollTo(next, jump, -1);
    }
    function scrollPrev(jump) {
        const prev = engine.index.add(-1).get();
        scrollTo(prev, jump, 1);
    }
    function canScrollNext() {
        const next = engine.index.add(1).get();
        return next !== selectedScrollSnap();
    }
    function canScrollPrev() {
        const prev = engine.index.add(-1).get();
        return prev !== selectedScrollSnap();
    }
    function scrollSnapList() {
        return engine.scrollSnapList;
    }
    function scrollProgress() {
        return engine.scrollProgress.get(engine.offsetLocation.get());
    }
    function selectedScrollSnap() {
        return engine.index.get();
    }
    function previousScrollSnap() {
        return engine.indexPrevious.get();
    }
    function slidesInView() {
        return engine.slidesInView.get();
    }
    function slidesNotInView() {
        return engine.slidesInView.get(false);
    }
    function plugins() {
        return pluginApis;
    }
    function internalEngine() {
        return engine;
    }
    function rootNode() {
        return root;
    }
    function containerNode() {
        return container;
    }
    function slideNodes() {
        return slides;
    }
    const self = {
        canScrollNext,
        canScrollPrev,
        containerNode,
        internalEngine,
        destroy,
        off,
        on,
        emit,
        plugins,
        previousScrollSnap,
        reInit,
        rootNode,
        scrollNext,
        scrollPrev,
        scrollProgress,
        scrollSnapList,
        scrollTo,
        selectedScrollSnap,
        slideNodes,
        slidesInView,
        slidesNotInView
    };
    activate(userOptions, userPlugins);
    setTimeout(()=>eventHandler.emit('init'), 0);
    return self;
}
EmblaCarousel.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel.esm.js.map
}),
"[project]/Documents/GitHub/MyWeb/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEmblaCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/embla-carousel/esm/embla-carousel.esm.js [client] (ecmascript)");
;
;
;
function useEmblaCarousel(options = {}, plugins = []) {
    const storedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(options);
    const storedPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(plugins);
    const [emblaApi, setEmblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])();
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])();
    const reInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEmblaCarousel.useCallback[reInit]": ()=>{
            if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
        }
    }["useEmblaCarousel.useCallback[reInit]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["areOptionsEqual"])(storedOptions.current, options)) return;
            storedOptions.current = options;
            reInit();
        }
    }["useEmblaCarousel.useEffect"], [
        options,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["arePluginsEqual"])(storedPlugins.current, plugins)) return;
            storedPlugins.current = plugins;
            reInit();
        }
    }["useEmblaCarousel.useEffect"], [
        plugins,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["canUseDOM"])() && viewport) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].globalOptions = useEmblaCarousel.globalOptions;
                const newEmblaApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(viewport, storedOptions.current, storedPlugins.current);
                setEmblaApi(newEmblaApi);
                return ({
                    "useEmblaCarousel.useEffect": ()=>newEmblaApi.destroy()
                })["useEmblaCarousel.useEffect"];
            } else {
                setEmblaApi(undefined);
            }
        }
    }["useEmblaCarousel.useEffect"], [
        viewport,
        setEmblaApi
    ]);
    return [
        setViewport,
        emblaApi
    ];
}
useEmblaCarousel.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel-react.esm.js.map
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-div-100vh/dist/esm/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "measureHeight",
    ()=>measureHeight,
    "use100vh",
    ()=>use100vh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __assign = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
var warned = false;
var Div100vh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_a, ref) {
    var style = _a.style, other = __rest(_a, [
        "style"
    ]);
    var height = use100vh();
    // TODO: warn only in development
    if (!warned && (style === null || style === void 0 ? void 0 : style.height)) {
        warned = true;
        console.warn('<Div100vh /> overrides the height property of the style prop');
    }
    var styleWithRealHeight = __assign(__assign({}, style), {
        height: height ? height + "px" : '100vh'
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", __assign({
        ref: ref,
        style: styleWithRealHeight
    }, other));
});
Div100vh.displayName = 'Div100vh';
const __TURBOPACK__default__export__ = Div100vh;
function use100vh() {
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(measureHeight), height = _a[0], setHeight = _a[1];
    var wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "use100vh.useEffect": function() {
            if (!wasRenderedOnClientAtLeastOnce) return;
            function setMeasuredHeight() {
                var measuredHeight = measureHeight();
                setHeight(measuredHeight);
            }
            window.addEventListener('resize', setMeasuredHeight);
            return ({
                "use100vh.useEffect": function() {
                    return window.removeEventListener('resize', setMeasuredHeight);
                }
            })["use100vh.useEffect"];
        }
    }["use100vh.useEffect"], [
        wasRenderedOnClientAtLeastOnce
    ]);
    return wasRenderedOnClientAtLeastOnce ? height : null;
}
function measureHeight() {
    if (!isClient()) return null;
    return window.innerHeight;
}
// Once we ended up on the client, the first render must look the same as on
// the server so hydration happens without problems. _Then_ we immediately
// schedule a subsequent update and return the height measured on the client.
// It's not needed for CSR-only apps, but is critical for SSR.
function useWasRenderedOnClientAtLeastOnce() {
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false), wasRenderedOnClientAtLeastOnce = _a[0], setWasRenderedOnClientAtLeastOnce = _a[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWasRenderedOnClientAtLeastOnce.useEffect": function() {
            if (isClient()) {
                setWasRenderedOnClientAtLeastOnce(true);
            }
        }
    }["useWasRenderedOnClientAtLeastOnce.useEffect"], []);
    return wasRenderedOnClientAtLeastOnce;
}
function isClient() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/fast-deep-equal/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};
}),
"[project]/Documents/GitHub/MyWeb/node_modules/sister/src/sister.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var Sister;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/ Sister = function() {
    var sister = {}, events = {};
    /**
     * @name handler
     * @function
     * @param {Object} data Event data.
     */ /**
     * @param {String} name Event name.
     * @param {handler} handler
     * @return {listener}
     */ sister.on = function(name, handler) {
        var listener = {
            name: name,
            handler: handler
        };
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
    };
    /**
     * @param {listener}
     */ sister.off = function(listener) {
        var index = events[listener.name].indexOf(listener);
        if (index !== -1) {
            events[listener.name].splice(index, 1);
        }
    };
    /**
     * @param {String} name Event name.
     * @param {Object} data Event data.
     */ sister.trigger = function(name, data) {
        var listeners = events[name], i;
        if (listeners) {
            i = listeners.length;
            while(i--){
                listeners[i].handler(data);
            }
        }
    };
    return sister;
};
module.exports = Sister;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/load-script/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function load(src, opts, cb) {
    var head = document.head || document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    if (typeof opts === 'function') {
        cb = opts;
        opts = {};
    }
    opts = opts || {};
    cb = cb || function() {};
    script.type = opts.type || 'text/javascript';
    script.charset = opts.charset || 'utf8';
    script.async = 'async' in opts ? !!opts.async : true;
    script.src = src;
    if (opts.attrs) {
        setAttributes(script, opts.attrs);
    }
    if (opts.text) {
        script.text = '' + opts.text;
    }
    var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
    onend(script, cb);
    // some good legacy browsers (firefox) fail the 'in' detection above
    // so as a fallback we always set onload
    // old IE will ignore this and new IE will set onload
    if (!script.onload) {
        stdOnEnd(script, cb);
    }
    head.appendChild(script);
};
function setAttributes(script, attrs) {
    for(var attr in attrs){
        script.setAttribute(attr, attrs[attr]);
    }
}
function stdOnEnd(script, cb) {
    script.onload = function() {
        this.onerror = this.onload = null;
        cb(null, script);
    };
    script.onerror = function() {
        // this.onload = null here is necessary
        // because even IE9 works not like others
        this.onerror = this.onload = null;
        cb(new Error('Failed to load ' + this.src), script);
    };
}
function ieOnEnd(script, cb) {
    script.onreadystatechange = function() {
        if (this.readyState != 'complete' && this.readyState != 'loaded') return;
        this.onreadystatechange = null;
        cb(null, script); // there is no way to catch loading errors in IE8
    };
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/loadYouTubeIframeApi.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _loadScript = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/load-script/index.js [client] (ecmascript)");
var _loadScript2 = _interopRequireDefault(_loadScript);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = function(emitter) {
    /**
   * A promise that is resolved when window.onYouTubeIframeAPIReady is called.
   * The promise is resolved with a reference to window.YT object.
   */ var iframeAPIReady = new Promise(function(resolve) {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
            resolve(window.YT);
            return;
        } else {
            var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';
            (0, _loadScript2.default)(protocol + '//www.youtube.com/iframe_api', function(error) {
                if (error) {
                    emitter.trigger('error', error);
                }
            });
        }
        var previous = window.onYouTubeIframeAPIReady;
        // The API will call this function when page has finished downloading
        // the JavaScript for the player API.
        window.onYouTubeIframeAPIReady = function() {
            if (previous) {
                previous();
            }
            resolve(window.YT);
        };
    });
    return iframeAPIReady;
};
module.exports = exports['default'];
}),
"[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/functionNames.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Functions
 */ exports.default = [
    'cueVideoById',
    'loadVideoById',
    'cueVideoByUrl',
    'loadVideoByUrl',
    'playVideo',
    'pauseVideo',
    'stopVideo',
    'getVideoLoadedFraction',
    'cuePlaylist',
    'loadPlaylist',
    'nextVideo',
    'previousVideo',
    'playVideoAt',
    'setShuffle',
    'setLoop',
    'getPlaylist',
    'getPlaylistIndex',
    'setOption',
    'mute',
    'unMute',
    'isMuted',
    'setVolume',
    'getVolume',
    'seekTo',
    'getPlayerState',
    'getPlaybackRate',
    'setPlaybackRate',
    'getAvailablePlaybackRates',
    'getPlaybackQuality',
    'setPlaybackQuality',
    'getAvailableQualityLevels',
    'getCurrentTime',
    'getDuration',
    'removeEventListener',
    'getVideoUrl',
    'getVideoEmbedCode',
    'getOptions',
    'getOption',
    'addEventListener',
    'destroy',
    'setSize',
    'getIframe'
];
module.exports = exports['default'];
}),
"[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/eventNames.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 * `volumeChange` is not officially supported but seems to work
 * it emits an object: `{volume: 82.6923076923077, muted: false}`
 */ exports.default = [
    'ready',
    'stateChange',
    'playbackQualityChange',
    'playbackRateChange',
    'error',
    'apiChange',
    'volumeChange'
];
module.exports = exports['default'];
}),
"[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/constants/PlayerStates.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    BUFFERING: 3,
    ENDED: 0,
    PAUSED: 2,
    PLAYING: 1,
    UNSTARTED: -1,
    VIDEO_CUED: 5
};
module.exports = exports["default"];
}),
"[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/FunctionStateMap.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _PlayerStates = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/constants/PlayerStates.js [client] (ecmascript)");
var _PlayerStates2 = _interopRequireDefault(_PlayerStates);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = {
    pauseVideo: {
        acceptableStates: [
            _PlayerStates2.default.ENDED,
            _PlayerStates2.default.PAUSED
        ],
        stateChangeRequired: false
    },
    playVideo: {
        acceptableStates: [
            _PlayerStates2.default.ENDED,
            _PlayerStates2.default.PLAYING
        ],
        stateChangeRequired: false
    },
    seekTo: {
        acceptableStates: [
            _PlayerStates2.default.ENDED,
            _PlayerStates2.default.PLAYING,
            _PlayerStates2.default.PAUSED
        ],
        stateChangeRequired: true,
        // TRICKY: `seekTo` may not cause a state change if no buffering is
        // required.
        timeout: 3000
    }
};
module.exports = exports['default'];
}),
"[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/YouTubePlayer.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _debug = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/node_modules/debug/src/browser.js [client] (ecmascript)");
var _debug2 = _interopRequireDefault(_debug);
var _functionNames = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/functionNames.js [client] (ecmascript)");
var _functionNames2 = _interopRequireDefault(_functionNames);
var _eventNames = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/eventNames.js [client] (ecmascript)");
var _eventNames2 = _interopRequireDefault(_eventNames);
var _FunctionStateMap = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/FunctionStateMap.js [client] (ecmascript)");
var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable promise/prefer-await-to-then */ var debug = (0, _debug2.default)('youtube-player');
var YouTubePlayer = {};
/**
 * Construct an object that defines an event handler for all of the YouTube
 * player events. Proxy captured events through an event emitter.
 *
 * @todo Capture event parameters.
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 */ YouTubePlayer.proxyEvents = function(emitter) {
    var events = {};
    var _loop = function _loop(eventName) {
        var onEventName = 'on' + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);
        events[onEventName] = function(event) {
            debug('event "%s"', onEventName, event);
            emitter.trigger(eventName, event);
        };
    };
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        for(var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var eventName = _step.value;
            _loop(eventName);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return events;
};
/**
 * Delays player API method execution until player state is ready.
 *
 * @todo Proxy all of the methods using Object.keys.
 * @todo See TRICKY below.
 * @param playerAPIReady Promise that resolves when player is ready.
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions.
 * @returns {Object}
 */ YouTubePlayer.promisifyPlayer = function(playerAPIReady) {
    var strictState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var functions = {};
    var _loop2 = function _loop2(functionName) {
        if (strictState && _FunctionStateMap2.default[functionName]) {
            functions[functionName] = function() {
                for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                return playerAPIReady.then(function(player) {
                    var stateInfo = _FunctionStateMap2.default[functionName];
                    var playerState = player.getPlayerState();
                    // eslint-disable-next-line no-warning-comments
                    // TODO: Just spread the args into the function once Babel is fixed:
                    // https://github.com/babel/babel/issues/4270
                    //
                    // eslint-disable-next-line prefer-spread
                    var value = player[functionName].apply(player, args);
                    // TRICKY: For functions like `seekTo`, a change in state must be
                    // triggered given that the resulting state could match the initial
                    // state.
                    if (stateInfo.stateChangeRequired || // eslint-disable-next-line no-extra-parens
                    Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
                        return new Promise(function(resolve) {
                            var onPlayerStateChange = function onPlayerStateChange() {
                                var playerStateAfterChange = player.getPlayerState();
                                var timeout = void 0;
                                if (typeof stateInfo.timeout === 'number') {
                                    timeout = setTimeout(function() {
                                        player.removeEventListener('onStateChange', onPlayerStateChange);
                                        resolve();
                                    }, stateInfo.timeout);
                                }
                                if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                                    player.removeEventListener('onStateChange', onPlayerStateChange);
                                    clearTimeout(timeout);
                                    resolve();
                                }
                            };
                            player.addEventListener('onStateChange', onPlayerStateChange);
                        }).then(function() {
                            return value;
                        });
                    }
                    return value;
                });
            };
        } else {
            functions[functionName] = function() {
                for(var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
                    args[_key2] = arguments[_key2];
                }
                return playerAPIReady.then(function(player) {
                    // eslint-disable-next-line no-warning-comments
                    // TODO: Just spread the args into the function once Babel is fixed:
                    // https://github.com/babel/babel/issues/4270
                    //
                    // eslint-disable-next-line prefer-spread
                    return player[functionName].apply(player, args);
                });
            };
        }
    };
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
    try {
        for(var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var functionName = _step2.value;
            _loop2(functionName);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    return functions;
};
exports.default = YouTubePlayer;
module.exports = exports['default'];
}),
"[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _sister = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/sister/src/sister.js [client] (ecmascript)");
var _sister2 = _interopRequireDefault(_sister);
var _loadYouTubeIframeApi = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/loadYouTubeIframeApi.js [client] (ecmascript)");
var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);
var _YouTubePlayer = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/YouTubePlayer.js [client] (ecmascript)");
var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */ /**
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 */ var youtubeIframeAPI = void 0;
/**
 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
 *
 * @param maybeElementId Either An existing YT.Player instance,
 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
 * @param options See `options` (Ignored when using an existing YT.Player instance).
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions. Default: `false`.
 * See `FunctionStateMap.js` for supported functions and acceptable states.
 */ exports.default = function(maybeElementId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var strictState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var emitter = (0, _sister2.default)();
    if (!youtubeIframeAPI) {
        youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
    }
    if (options.events) {
        throw new Error('Event handlers cannot be overwritten.');
    }
    if (typeof maybeElementId === 'string' && !document.getElementById(maybeElementId)) {
        throw new Error('Element "' + maybeElementId + '" does not exist.');
    }
    options.events = _YouTubePlayer2.default.proxyEvents(emitter);
    var playerAPIReady = new Promise(function(resolve) {
        if ((typeof maybeElementId === 'undefined' ? 'undefined' : _typeof(maybeElementId)) === 'object' && maybeElementId.playVideo instanceof Function) {
            var player = maybeElementId;
            resolve(player);
        } else {
            // asume maybeElementId can be rendered inside
            // eslint-disable-next-line promise/catch-or-return
            youtubeIframeAPI.then(function(YT) {
                // eslint-disable-line promise/prefer-await-to-then
                var player = new YT.Player(maybeElementId, options);
                emitter.on('ready', function() {
                    resolve(player);
                });
                return null;
            });
        }
    });
    var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);
    playerApi.on = emitter.on;
    playerApi.off = emitter.off;
    return playerApi;
};
module.exports = exports['default'];
}),
"[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/node_modules/ms/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    if (ms >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (ms >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (ms >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (ms >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, n, name) {
    if (ms < n) {
        return;
    }
    if (ms < n * 1.5) {
        return Math.floor(ms / n) + ' ' + name;
    }
    return Math.ceil(ms / n) + ' ' + name + 's';
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/node_modules/debug/src/debug.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */ exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/node_modules/ms/index.js [client] (ecmascript)");
/**
 * The currently active debug mode names, and names to skip.
 */ exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */ exports.formatters = {};
/**
 * Previous log timestamp.
 */ var prevTime;
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */ function selectColor(namespace) {
    var hash = 0, i;
    for(i in namespace){
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */ function createDebug(namespace) {
    function debug() {
        // disabled?
        if (!debug.enabled) return;
        var self = debug;
        // set `diff` timestamp
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        // turn the `arguments` into a proper Array
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++){
            args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ('string' !== typeof args[0]) {
            // anything else let's inspect with %O
            args.unshift('%O');
        }
        // apply any `formatters` transformations
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
            // if we encounter an escaped % then don't increase the array index
            if (match === '%%') return match;
            index++;
            var formatter = exports.formatters[format];
            if ('function' === typeof formatter) {
                var val = args[index];
                match = formatter.call(self, val);
                // now we need to remove `args[index]` since it's inlined in the `format`
                args.splice(index, 1);
                index--;
            }
            return match;
        });
        // apply env-specific formatting (colors, etc.)
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
    }
    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);
    // env-specific initialization logic for debug instances
    if ('function' === typeof exports.init) {
        exports.init(debug);
    }
    return debug;
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */ function enable(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;
    for(var i = 0; i < len; i++){
        if (!split[i]) continue; // ignore empty strings
        namespaces = split[i].replace(/\*/g, '.*?');
        if (namespaces[0] === '-') {
            exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
        } else {
            exports.names.push(new RegExp('^' + namespaces + '$'));
        }
    }
}
/**
 * Disable debug output.
 *
 * @api public
 */ function disable() {
    exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */ function enabled(name) {
    var i, len;
    for(i = 0, len = exports.skips.length; i < len; i++){
        if (exports.skips[i].test(name)) {
            return false;
        }
    }
    for(i = 0, len = exports.names.length; i < len; i++){
        if (exports.names[i].test(name)) {
            return true;
        }
    }
    return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */ function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/node_modules/debug/src/browser.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
exports = module.exports = __turbopack_context__.r("[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/node_modules/debug/src/debug.js [client] (ecmascript)");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */ exports.colors = [
    'lightseagreen',
    'forestgreen',
    'goldenrod',
    'dodgerblue',
    'darkorchid',
    'crimson'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
        return true;
    }
    // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ exports.formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (err) {
        return '[UnexpectedJSONParseError]: ' + err.message;
    }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    var useColors = this.useColors;
    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
    if (!useColors) return;
    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ('%%' === match) return;
        index++;
        if ('%c' === match) {
            // we only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */ function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (null == namespaces) {
            exports.storage.removeItem('debug');
        } else {
            exports.storage.debug = namespaces;
        }
    } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    var r;
    try {
        r = exports.storage.debug;
    } catch (e) {}
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && 'env' in __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]) {
        r = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.DEBUG;
    }
    return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */ exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        return window.localStorage;
    } catch (e) {}
}
}),
"[project]/Documents/GitHub/MyWeb/node_modules/react-youtube/dist/YouTube.esm.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>YouTube_default
]);
// src/YouTube.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$fast$2d$deep$2d$equal$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/fast-deep-equal/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$youtube$2d$player$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/youtube-player/dist/index.js [client] (ecmascript)");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
;
;
;
;
function shouldUpdateVideo(prevProps, props) {
    var _a, _b;
    if (prevProps.videoId !== props.videoId) {
        return true;
    }
    const prevVars = ((_a = prevProps.opts) == null ? void 0 : _a.playerVars) || {};
    const vars = ((_b = props.opts) == null ? void 0 : _b.playerVars) || {};
    return prevVars.start !== vars.start || prevVars.end !== vars.end;
}
function filterResetOptions(opts = {}) {
    return __spreadProps(__spreadValues({}, opts), {
        height: 0,
        width: 0,
        playerVars: __spreadProps(__spreadValues({}, opts.playerVars), {
            autoplay: 0,
            start: 0,
            end: 0
        })
    });
}
function shouldResetPlayer(prevProps, props) {
    return prevProps.videoId !== props.videoId || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$fast$2d$deep$2d$equal$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}
function shouldUpdatePlayer(prevProps, props) {
    var _a, _b, _c, _d;
    return prevProps.id !== props.id || prevProps.className !== props.className || ((_a = prevProps.opts) == null ? void 0 : _a.width) !== ((_b = props.opts) == null ? void 0 : _b.width) || ((_c = prevProps.opts) == null ? void 0 : _c.height) !== ((_d = props.opts) == null ? void 0 : _d.height) || prevProps.iframeClassName !== props.iframeClassName || prevProps.title !== props.title;
}
var defaultProps = {
    videoId: "",
    id: "",
    className: "",
    iframeClassName: "",
    style: {},
    title: "",
    loading: void 0,
    opts: {},
    onReady: ()=>{},
    onError: ()=>{},
    onPlay: ()=>{},
    onPause: ()=>{},
    onEnd: ()=>{},
    onStateChange: ()=>{},
    onPlaybackRateChange: ()=>{},
    onPlaybackQualityChange: ()=>{}
};
var propTypes = {
    videoId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    iframeClassName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    style: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    title: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    loading: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].oneOf([
        "lazy",
        "eager"
    ]),
    opts: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].objectOf(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].any),
    onReady: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    onError: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    onPlay: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    onPause: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    onEnd: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    onStateChange: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    onPlaybackRateChange: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    onPlaybackQualityChange: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func
};
var _YouTube = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        super(props);
        this.destroyPlayerPromise = void 0;
        this.onPlayerReady = (event)=>{
            var _a, _b;
            return (_b = (_a = this.props).onReady) == null ? void 0 : _b.call(_a, event);
        };
        this.onPlayerError = (event)=>{
            var _a, _b;
            return (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, event);
        };
        this.onPlayerStateChange = (event)=>{
            var _a, _b, _c, _d, _e, _f, _g, _h;
            (_b = (_a = this.props).onStateChange) == null ? void 0 : _b.call(_a, event);
            switch(event.data){
                case _YouTube.PlayerState.ENDED:
                    (_d = (_c = this.props).onEnd) == null ? void 0 : _d.call(_c, event);
                    break;
                case _YouTube.PlayerState.PLAYING:
                    (_f = (_e = this.props).onPlay) == null ? void 0 : _f.call(_e, event);
                    break;
                case _YouTube.PlayerState.PAUSED:
                    (_h = (_g = this.props).onPause) == null ? void 0 : _h.call(_g, event);
                    break;
                default:
            }
        };
        this.onPlayerPlaybackRateChange = (event)=>{
            var _a, _b;
            return (_b = (_a = this.props).onPlaybackRateChange) == null ? void 0 : _b.call(_a, event);
        };
        this.onPlayerPlaybackQualityChange = (event)=>{
            var _a, _b;
            return (_b = (_a = this.props).onPlaybackQualityChange) == null ? void 0 : _b.call(_a, event);
        };
        this.destroyPlayer = ()=>{
            if (this.internalPlayer) {
                this.destroyPlayerPromise = this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise = void 0);
                return this.destroyPlayerPromise;
            }
            return Promise.resolve();
        };
        this.createPlayer = ()=>{
            if (typeof document === "undefined") return;
            if (this.destroyPlayerPromise) {
                this.destroyPlayerPromise.then(this.createPlayer);
                return;
            }
            const playerOpts = __spreadProps(__spreadValues({}, this.props.opts), {
                videoId: this.props.videoId
            });
            this.internalPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$youtube$2d$player$2f$dist$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(this.container, playerOpts);
            this.internalPlayer.on("ready", this.onPlayerReady);
            this.internalPlayer.on("error", this.onPlayerError);
            this.internalPlayer.on("stateChange", this.onPlayerStateChange);
            this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange);
            this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange);
            if (this.props.title || this.props.loading) {
                this.internalPlayer.getIframe().then((iframe)=>{
                    if (this.props.title) iframe.setAttribute("title", this.props.title);
                    if (this.props.loading) iframe.setAttribute("loading", this.props.loading);
                });
            }
        };
        this.resetPlayer = ()=>this.destroyPlayer().then(this.createPlayer);
        this.updatePlayer = ()=>{
            var _a;
            (_a = this.internalPlayer) == null ? void 0 : _a.getIframe().then((iframe)=>{
                if (this.props.id) iframe.setAttribute("id", this.props.id);
                else iframe.removeAttribute("id");
                if (this.props.iframeClassName) iframe.setAttribute("class", this.props.iframeClassName);
                else iframe.removeAttribute("class");
                if (this.props.opts && this.props.opts.width) iframe.setAttribute("width", this.props.opts.width.toString());
                else iframe.removeAttribute("width");
                if (this.props.opts && this.props.opts.height) iframe.setAttribute("height", this.props.opts.height.toString());
                else iframe.removeAttribute("height");
                if (this.props.title) iframe.setAttribute("title", this.props.title);
                else iframe.setAttribute("title", "YouTube video player");
                if (this.props.loading) iframe.setAttribute("loading", this.props.loading);
                else iframe.removeAttribute("loading");
            });
        };
        this.getInternalPlayer = ()=>{
            return this.internalPlayer;
        };
        this.updateVideo = ()=>{
            var _a, _b, _c, _d;
            if (typeof this.props.videoId === "undefined" || this.props.videoId === null) {
                (_a = this.internalPlayer) == null ? void 0 : _a.stopVideo();
                return;
            }
            let autoplay = false;
            const opts = {
                videoId: this.props.videoId
            };
            if ((_b = this.props.opts) == null ? void 0 : _b.playerVars) {
                autoplay = this.props.opts.playerVars.autoplay === 1;
                if ("start" in this.props.opts.playerVars) {
                    opts.startSeconds = this.props.opts.playerVars.start;
                }
                if ("end" in this.props.opts.playerVars) {
                    opts.endSeconds = this.props.opts.playerVars.end;
                }
            }
            if (autoplay) {
                (_c = this.internalPlayer) == null ? void 0 : _c.loadVideoById(opts);
                return;
            }
            (_d = this.internalPlayer) == null ? void 0 : _d.cueVideoById(opts);
        };
        this.refContainer = (container)=>{
            this.container = container;
        };
        this.container = null;
        this.internalPlayer = null;
    }
    componentDidMount() {
        this.createPlayer();
    }
    componentDidUpdate(prevProps) {
        return __async(this, null, function*() {
            if (shouldUpdatePlayer(prevProps, this.props)) {
                this.updatePlayer();
            }
            if (shouldResetPlayer(prevProps, this.props)) {
                yield this.resetPlayer();
            }
            if (shouldUpdateVideo(prevProps, this.props)) {
                this.updateVideo();
            }
        });
    }
    componentWillUnmount() {
        this.destroyPlayer();
    }
    render() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: this.props.className,
            style: this.props.style
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            id: this.props.id,
            className: this.props.iframeClassName,
            ref: this.refContainer
        }));
    }
};
var YouTube = _YouTube;
YouTube.propTypes = propTypes;
YouTube.defaultProps = defaultProps;
YouTube.PlayerState = {
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5
};
var YouTube_default = YouTube;
;
 //# sourceMappingURL=YouTube.esm.js.map
}),
"[project]/Documents/GitHub/MyWeb/node_modules/lodash.debounce/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/usehooks-ts/dist/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBoolean",
    ()=>useBoolean,
    "useClickAnyWhere",
    ()=>useClickAnyWhere,
    "useCopyToClipboard",
    ()=>useCopyToClipboard,
    "useCountdown",
    ()=>useCountdown,
    "useCounter",
    ()=>useCounter,
    "useDarkMode",
    ()=>useDarkMode,
    "useDebounceCallback",
    ()=>useDebounceCallback,
    "useDebounceValue",
    ()=>useDebounceValue,
    "useDocumentTitle",
    ()=>useDocumentTitle,
    "useEventCallback",
    ()=>useEventCallback,
    "useEventListener",
    ()=>useEventListener,
    "useHover",
    ()=>useHover,
    "useIntersectionObserver",
    ()=>useIntersectionObserver,
    "useInterval",
    ()=>useInterval,
    "useIsClient",
    ()=>useIsClient,
    "useIsMounted",
    ()=>useIsMounted,
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect,
    "useLocalStorage",
    ()=>useLocalStorage,
    "useMap",
    ()=>useMap,
    "useMediaQuery",
    ()=>useMediaQuery,
    "useOnClickOutside",
    ()=>useOnClickOutside,
    "useReadLocalStorage",
    ()=>useReadLocalStorage,
    "useResizeObserver",
    ()=>useResizeObserver,
    "useScreen",
    ()=>useScreen,
    "useScript",
    ()=>useScript,
    "useScrollLock",
    ()=>useScrollLock,
    "useSessionStorage",
    ()=>useSessionStorage,
    "useStep",
    ()=>useStep,
    "useTernaryDarkMode",
    ()=>useTernaryDarkMode,
    "useTimeout",
    ()=>useTimeout,
    "useToggle",
    ()=>useToggle,
    "useUnmount",
    ()=>useUnmount,
    "useWindowSize",
    ()=>useWindowSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/MyWeb/node_modules/lodash.debounce/index.js [client] (ecmascript)");
;
;
// src/useBoolean/useBoolean.ts
function useBoolean(defaultValue = false) {
    if (typeof defaultValue !== "boolean") {
        throw new Error("defaultValue must be `true` or `false`");
    }
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    const setTrue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBoolean.useCallback[setTrue]": ()=>{
            setValue(true);
        }
    }["useBoolean.useCallback[setTrue]"], []);
    const setFalse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBoolean.useCallback[setFalse]": ()=>{
            setValue(false);
        }
    }["useBoolean.useCallback[setFalse]"], []);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBoolean.useCallback[toggle]": ()=>{
            setValue({
                "useBoolean.useCallback[toggle]": (x)=>!x
            }["useBoolean.useCallback[toggle]"]);
        }
    }["useBoolean.useCallback[toggle]"], []);
    return {
        value,
        setValue,
        setTrue,
        setFalse,
        toggle
    };
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"];
// src/useEventListener/useEventListener.ts
function useEventListener(eventName, handler, element, options) {
    const savedHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(handler);
    useIsomorphicLayoutEffect({
        "useEventListener.useIsomorphicLayoutEffect": ()=>{
            savedHandler.current = handler;
        }
    }["useEventListener.useIsomorphicLayoutEffect"], [
        handler
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEventListener.useEffect": ()=>{
            const targetElement = (element == null ? void 0 : element.current) ?? window;
            if (!(targetElement && targetElement.addEventListener)) return;
            const listener = {
                "useEventListener.useEffect.listener": (event)=>{
                    savedHandler.current(event);
                }
            }["useEventListener.useEffect.listener"];
            targetElement.addEventListener(eventName, listener, options);
            return ({
                "useEventListener.useEffect": ()=>{
                    targetElement.removeEventListener(eventName, listener, options);
                }
            })["useEventListener.useEffect"];
        }
    }["useEventListener.useEffect"], [
        eventName,
        element,
        options
    ]);
}
// src/useClickAnyWhere/useClickAnyWhere.ts
function useClickAnyWhere(handler) {
    useEventListener("click", {
        "useClickAnyWhere.useEventListener": (event)=>{
            handler(event);
        }
    }["useClickAnyWhere.useEventListener"]);
}
function useCopyToClipboard() {
    const [copiedText, setCopiedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCopyToClipboard.useCallback[copy]": async (text)=>{
            if (!(navigator == null ? void 0 : navigator.clipboard)) {
                console.warn("Clipboard not supported");
                return false;
            }
            try {
                await navigator.clipboard.writeText(text);
                setCopiedText(text);
                return true;
            } catch (error) {
                console.warn("Copy failed", error);
                setCopiedText(null);
                return false;
            }
        }
    }["useCopyToClipboard.useCallback[copy]"], []);
    return [
        copiedText,
        copy
    ];
}
function useCounter(initialValue) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(initialValue ?? 0);
    const increment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCounter.useCallback[increment]": ()=>{
            setCount({
                "useCounter.useCallback[increment]": (x)=>x + 1
            }["useCounter.useCallback[increment]"]);
        }
    }["useCounter.useCallback[increment]"], []);
    const decrement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCounter.useCallback[decrement]": ()=>{
            setCount({
                "useCounter.useCallback[decrement]": (x)=>x - 1
            }["useCounter.useCallback[decrement]"]);
        }
    }["useCounter.useCallback[decrement]"], []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCounter.useCallback[reset]": ()=>{
            setCount(initialValue ?? 0);
        }
    }["useCounter.useCallback[reset]"], [
        initialValue
    ]);
    return {
        count,
        increment,
        decrement,
        reset,
        setCount
    };
}
function useInterval(callback, delay) {
    const savedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    useIsomorphicLayoutEffect({
        "useInterval.useIsomorphicLayoutEffect": ()=>{
            savedCallback.current = callback;
        }
    }["useInterval.useIsomorphicLayoutEffect"], [
        callback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInterval.useEffect": ()=>{
            if (delay === null) {
                return;
            }
            const id = setInterval({
                "useInterval.useEffect.id": ()=>{
                    savedCallback.current();
                }
            }["useInterval.useEffect.id"], delay);
            return ({
                "useInterval.useEffect": ()=>{
                    clearInterval(id);
                }
            })["useInterval.useEffect"];
        }
    }["useInterval.useEffect"], [
        delay
    ]);
}
// src/useCountdown/useCountdown.ts
function useCountdown({ countStart, countStop = 0, intervalMs = 1e3, isIncrement = false }) {
    const { count, increment, decrement, reset: resetCounter } = useCounter(countStart);
    const { value: isCountdownRunning, setTrue: startCountdown, setFalse: stopCountdown } = useBoolean(false);
    const resetCountdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCountdown.useCallback[resetCountdown]": ()=>{
            stopCountdown();
            resetCounter();
        }
    }["useCountdown.useCallback[resetCountdown]"], [
        stopCountdown,
        resetCounter
    ]);
    const countdownCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCountdown.useCallback[countdownCallback]": ()=>{
            if (count === countStop) {
                stopCountdown();
                return;
            }
            if (isIncrement) {
                increment();
            } else {
                decrement();
            }
        }
    }["useCountdown.useCallback[countdownCallback]"], [
        count,
        countStop,
        decrement,
        increment,
        isIncrement,
        stopCountdown
    ]);
    useInterval(countdownCallback, isCountdownRunning ? intervalMs : null);
    return [
        count,
        {
            startCountdown,
            stopCountdown,
            resetCountdown
        }
    ];
}
function useEventCallback(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useEventCallback.useRef[ref]": ()=>{
            throw new Error("Cannot call an event handler while rendering.");
        }
    }["useEventCallback.useRef[ref]"]);
    useIsomorphicLayoutEffect({
        "useEventCallback.useIsomorphicLayoutEffect": ()=>{
            ref.current = fn;
        }
    }["useEventCallback.useIsomorphicLayoutEffect"], [
        fn
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEventCallback.useCallback": (...args)=>{
            var _a;
            return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args);
        }
    }["useEventCallback.useCallback"], [
        ref
    ]);
}
// src/useLocalStorage/useLocalStorage.ts
var IS_SERVER = typeof window === "undefined";
function useLocalStorage(key, initialValue, options = {}) {
    const { initializeWithValue = true } = options;
    const serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[serializer]": (value)=>{
            if (options.serializer) {
                return options.serializer(value);
            }
            return JSON.stringify(value);
        }
    }["useLocalStorage.useCallback[serializer]"], [
        options
    ]);
    const deserializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[deserializer]": (value)=>{
            if (options.deserializer) {
                return options.deserializer(value);
            }
            if (value === "undefined") {
                return void 0;
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            let parsed;
            try {
                parsed = JSON.parse(value);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return defaultValue;
            }
            return parsed;
        }
    }["useLocalStorage.useCallback[deserializer]"], [
        options,
        initialValue
    ]);
    const readValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[readValue]": ()=>{
            const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;
            if (IS_SERVER) {
                return initialValueToUse;
            }
            try {
                const raw = window.localStorage.getItem(key);
                return raw ? deserializer(raw) : initialValueToUse;
            } catch (error) {
                console.warn(`Error reading localStorage key \u201C${key}\u201D:`, error);
                return initialValueToUse;
            }
        }
    }["useLocalStorage.useCallback[readValue]"], [
        initialValue,
        key,
        deserializer
    ]);
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "useLocalStorage.useState": ()=>{
            if (initializeWithValue) {
                return readValue();
            }
            return initialValue instanceof Function ? initialValue() : initialValue;
        }
    }["useLocalStorage.useState"]);
    const setValue = useEventCallback({
        "useLocalStorage.useEventCallback[setValue]": (value)=>{
            if (IS_SERVER) {
                console.warn(`Tried setting localStorage key \u201C${key}\u201D even though environment is not a client`);
            }
            try {
                const newValue = value instanceof Function ? value(readValue()) : value;
                window.localStorage.setItem(key, serializer(newValue));
                setStoredValue(newValue);
                window.dispatchEvent(new StorageEvent("local-storage", {
                    key
                }));
            } catch (error) {
                console.warn(`Error setting localStorage key \u201C${key}\u201D:`, error);
            }
        }
    }["useLocalStorage.useEventCallback[setValue]"]);
    const removeValue = useEventCallback({
        "useLocalStorage.useEventCallback[removeValue]": ()=>{
            if (IS_SERVER) {
                console.warn(`Tried removing localStorage key \u201C${key}\u201D even though environment is not a client`);
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            window.localStorage.removeItem(key);
            setStoredValue(defaultValue);
            window.dispatchEvent(new StorageEvent("local-storage", {
                key
            }));
        }
    }["useLocalStorage.useEventCallback[removeValue]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocalStorage.useEffect": ()=>{
            setStoredValue(readValue());
        }
    }["useLocalStorage.useEffect"], [
        key
    ]);
    const handleStorageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLocalStorage.useCallback[handleStorageChange]": (event)=>{
            if (event.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        }
    }["useLocalStorage.useCallback[handleStorageChange]"], [
        key,
        readValue
    ]);
    useEventListener("storage", handleStorageChange);
    useEventListener("local-storage", handleStorageChange);
    return [
        storedValue,
        setValue,
        removeValue
    ];
}
var IS_SERVER2 = typeof window === "undefined";
function useMediaQuery(query, { defaultValue = false, initializeWithValue = true } = {}) {
    const getMatches = (query2)=>{
        if (IS_SERVER2) {
            return defaultValue;
        }
        return window.matchMedia(query2).matches;
    };
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "useMediaQuery.useState": ()=>{
            if (initializeWithValue) {
                return getMatches(query);
            }
            return defaultValue;
        }
    }["useMediaQuery.useState"]);
    function handleChange() {
        setMatches(getMatches(query));
    }
    useIsomorphicLayoutEffect({
        "useMediaQuery.useIsomorphicLayoutEffect": ()=>{
            const matchMedia = window.matchMedia(query);
            handleChange();
            if (matchMedia.addListener) {
                matchMedia.addListener(handleChange);
            } else {
                matchMedia.addEventListener("change", handleChange);
            }
            return ({
                "useMediaQuery.useIsomorphicLayoutEffect": ()=>{
                    if (matchMedia.removeListener) {
                        matchMedia.removeListener(handleChange);
                    } else {
                        matchMedia.removeEventListener("change", handleChange);
                    }
                }
            })["useMediaQuery.useIsomorphicLayoutEffect"];
        }
    }["useMediaQuery.useIsomorphicLayoutEffect"], [
        query
    ]);
    return matches;
}
// src/useDarkMode/useDarkMode.ts
var COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
var LOCAL_STORAGE_KEY = "usehooks-ts-dark-mode";
function useDarkMode(options = {}) {
    const { defaultValue, localStorageKey = LOCAL_STORAGE_KEY, initializeWithValue = true } = options;
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, {
        initializeWithValue,
        defaultValue
    });
    const [isDarkMode, setDarkMode] = useLocalStorage(localStorageKey, defaultValue ?? isDarkOS ?? false, {
        initializeWithValue
    });
    useIsomorphicLayoutEffect({
        "useDarkMode.useIsomorphicLayoutEffect": ()=>{
            if (isDarkOS !== isDarkMode) {
                setDarkMode(isDarkOS);
            }
        }
    }["useDarkMode.useIsomorphicLayoutEffect"], [
        isDarkOS
    ]);
    return {
        isDarkMode,
        toggle: ()=>{
            setDarkMode((prev)=>!prev);
        },
        enable: ()=>{
            setDarkMode(true);
        },
        disable: ()=>{
            setDarkMode(false);
        },
        set: (value)=>{
            setDarkMode(value);
        }
    };
}
function useUnmount(func) {
    const funcRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(func);
    funcRef.current = func;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUnmount.useEffect": ()=>({
                "useUnmount.useEffect": ()=>{
                    funcRef.current();
                }
            })["useUnmount.useEffect"]
    }["useUnmount.useEffect"], []);
}
// src/useDebounceCallback/useDebounceCallback.ts
function useDebounceCallback(func, delay = 500, options) {
    const debouncedFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    useUnmount({
        "useDebounceCallback.useUnmount": ()=>{
            if (debouncedFunc.current) {
                debouncedFunc.current.cancel();
            }
        }
    }["useDebounceCallback.useUnmount"]);
    const debounced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDebounceCallback.useMemo[debounced]": ()=>{
            const debouncedFuncInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(func, delay, options);
            const wrappedFunc = {
                "useDebounceCallback.useMemo[debounced].wrappedFunc": (...args)=>{
                    return debouncedFuncInstance(...args);
                }
            }["useDebounceCallback.useMemo[debounced].wrappedFunc"];
            wrappedFunc.cancel = ({
                "useDebounceCallback.useMemo[debounced]": ()=>{
                    debouncedFuncInstance.cancel();
                }
            })["useDebounceCallback.useMemo[debounced]"];
            wrappedFunc.isPending = ({
                "useDebounceCallback.useMemo[debounced]": ()=>{
                    return !!debouncedFunc.current;
                }
            })["useDebounceCallback.useMemo[debounced]"];
            wrappedFunc.flush = ({
                "useDebounceCallback.useMemo[debounced]": ()=>{
                    return debouncedFuncInstance.flush();
                }
            })["useDebounceCallback.useMemo[debounced]"];
            return wrappedFunc;
        }
    }["useDebounceCallback.useMemo[debounced]"], [
        func,
        delay,
        options
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounceCallback.useEffect": ()=>{
            debouncedFunc.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(func, delay, options);
        }
    }["useDebounceCallback.useEffect"], [
        func,
        delay,
        options
    ]);
    return debounced;
}
function useDebounceValue(initialValue, delay, options) {
    const eq = (options == null ? void 0 : options.equalityFn) ?? ((left, right)=>left === right);
    const unwrappedInitialValue = initialValue instanceof Function ? initialValue() : initialValue;
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(unwrappedInitialValue);
    const previousValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(unwrappedInitialValue);
    const updateDebouncedValue = useDebounceCallback(setDebouncedValue, delay, options);
    if (!eq(previousValueRef.current, unwrappedInitialValue)) {
        updateDebouncedValue(unwrappedInitialValue);
        previousValueRef.current = unwrappedInitialValue;
    }
    return [
        debouncedValue,
        updateDebouncedValue
    ];
}
function useDocumentTitle(title, options = {}) {
    const { preserveTitleOnUnmount = true } = options;
    const defaultTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    useIsomorphicLayoutEffect({
        "useDocumentTitle.useIsomorphicLayoutEffect": ()=>{
            defaultTitle.current = window.document.title;
        }
    }["useDocumentTitle.useIsomorphicLayoutEffect"], []);
    useIsomorphicLayoutEffect({
        "useDocumentTitle.useIsomorphicLayoutEffect": ()=>{
            window.document.title = title;
        }
    }["useDocumentTitle.useIsomorphicLayoutEffect"], [
        title
    ]);
    useUnmount({
        "useDocumentTitle.useUnmount": ()=>{
            if (!preserveTitleOnUnmount && defaultTitle.current) {
                window.document.title = defaultTitle.current;
            }
        }
    }["useDocumentTitle.useUnmount"]);
}
function useHover(elementRef) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseEnter = ()=>{
        setValue(true);
    };
    const handleMouseLeave = ()=>{
        setValue(false);
    };
    useEventListener("mouseenter", handleMouseEnter, elementRef);
    useEventListener("mouseleave", handleMouseLeave, elementRef);
    return value;
}
function useIntersectionObserver({ threshold = 0, root = null, rootMargin = "0%", freezeOnceVisible = false, initialIsIntersecting = false, onChange } = {}) {
    var _a;
    const [ref, setRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "useIntersectionObserver.useState": ()=>({
                isIntersecting: initialIsIntersecting,
                entry: void 0
            })
    }["useIntersectionObserver.useState"]);
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    callbackRef.current = onChange;
    const frozen = ((_a = state.entry) == null ? void 0 : _a.isIntersecting) && freezeOnceVisible;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            if (!ref) return;
            if (!("IntersectionObserver" in window)) return;
            if (frozen) return;
            let unobserve;
            const observer = new IntersectionObserver({
                "useIntersectionObserver.useEffect": (entries)=>{
                    const thresholds = Array.isArray(observer.thresholds) ? observer.thresholds : [
                        observer.thresholds
                    ];
                    entries.forEach({
                        "useIntersectionObserver.useEffect": (entry)=>{
                            const isIntersecting = entry.isIntersecting && thresholds.some({
                                "useIntersectionObserver.useEffect": (threshold2)=>entry.intersectionRatio >= threshold2
                            }["useIntersectionObserver.useEffect"]);
                            setState({
                                isIntersecting,
                                entry
                            });
                            if (callbackRef.current) {
                                callbackRef.current(isIntersecting, entry);
                            }
                            if (isIntersecting && freezeOnceVisible && unobserve) {
                                unobserve();
                                unobserve = void 0;
                            }
                        }
                    }["useIntersectionObserver.useEffect"]);
                }
            }["useIntersectionObserver.useEffect"], {
                threshold,
                root,
                rootMargin
            });
            observer.observe(ref);
            return ({
                "useIntersectionObserver.useEffect": ()=>{
                    observer.disconnect();
                }
            })["useIntersectionObserver.useEffect"];
        }
    }["useIntersectionObserver.useEffect"], [
        ref,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        JSON.stringify(threshold),
        root,
        rootMargin,
        frozen,
        freezeOnceVisible
    ]);
    const prevRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            var _a2;
            if (!ref && ((_a2 = state.entry) == null ? void 0 : _a2.target) && !freezeOnceVisible && !frozen && prevRef.current !== state.entry.target) {
                prevRef.current = state.entry.target;
                setState({
                    isIntersecting: initialIsIntersecting,
                    entry: void 0
                });
            }
        }
    }["useIntersectionObserver.useEffect"], [
        ref,
        state.entry,
        freezeOnceVisible,
        frozen,
        initialIsIntersecting
    ]);
    const result = [
        setRef,
        !!state.isIntersecting,
        state.entry
    ];
    result.ref = result[0];
    result.isIntersecting = result[1];
    result.entry = result[2];
    return result;
}
function useIsClient() {
    const [isClient, setClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsClient.useEffect": ()=>{
            setClient(true);
        }
    }["useIsClient.useEffect"], []);
    return isClient;
}
function useIsMounted() {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMounted.useEffect": ()=>{
            isMounted.current = true;
            return ({
                "useIsMounted.useEffect": ()=>{
                    isMounted.current = false;
                }
            })["useIsMounted.useEffect"];
        }
    }["useIsMounted.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useIsMounted.useCallback": ()=>isMounted.current
    }["useIsMounted.useCallback"], []);
}
function useMap(initialState = /* @__PURE__ */ new Map()) {
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(new Map(initialState));
    const actions = {
        set: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": (key, value)=>{
                setMap({
                    "useMap.useCallback": (prev)=>{
                        const copy = new Map(prev);
                        copy.set(key, value);
                        return copy;
                    }
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], []),
        setAll: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": (entries)=>{
                setMap({
                    "useMap.useCallback": ()=>new Map(entries)
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], []),
        remove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": (key)=>{
                setMap({
                    "useMap.useCallback": (prev)=>{
                        const copy = new Map(prev);
                        copy.delete(key);
                        return copy;
                    }
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], []),
        reset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useMap.useCallback": ()=>{
                setMap({
                    "useMap.useCallback": ()=>/* @__PURE__ */ new Map()
                }["useMap.useCallback"]);
            }
        }["useMap.useCallback"], [])
    };
    return [
        map,
        actions
    ];
}
// src/useOnClickOutside/useOnClickOutside.ts
function useOnClickOutside(ref, handler, eventType = "mousedown", eventListenerOptions = {}) {
    useEventListener(eventType, {
        "useOnClickOutside.useEventListener": (event)=>{
            const target = event.target;
            if (!target || !target.isConnected) {
                return;
            }
            const isOutside = Array.isArray(ref) ? ref.filter({
                "useOnClickOutside.useEventListener": (r)=>Boolean(r.current)
            }["useOnClickOutside.useEventListener"]).every({
                "useOnClickOutside.useEventListener": (r)=>r.current && !r.current.contains(target)
            }["useOnClickOutside.useEventListener"]) : ref.current && !ref.current.contains(target);
            if (isOutside) {
                handler(event);
            }
        }
    }["useOnClickOutside.useEventListener"], void 0, eventListenerOptions);
}
var IS_SERVER3 = typeof window === "undefined";
function useReadLocalStorage(key, options = {}) {
    let { initializeWithValue = true } = options;
    if (IS_SERVER3) {
        initializeWithValue = false;
    }
    const deserializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReadLocalStorage.useCallback[deserializer]": (value)=>{
            if (options.deserializer) {
                return options.deserializer(value);
            }
            if (value === "undefined") {
                return void 0;
            }
            let parsed;
            try {
                parsed = JSON.parse(value);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return null;
            }
            return parsed;
        }
    }["useReadLocalStorage.useCallback[deserializer]"], [
        options
    ]);
    const readValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReadLocalStorage.useCallback[readValue]": ()=>{
            if (IS_SERVER3) {
                return null;
            }
            try {
                const raw = window.localStorage.getItem(key);
                return raw ? deserializer(raw) : null;
            } catch (error) {
                console.warn(`Error reading localStorage key \u201C${key}\u201D:`, error);
                return null;
            }
        }
    }["useReadLocalStorage.useCallback[readValue]"], [
        key,
        deserializer
    ]);
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "useReadLocalStorage.useState": ()=>{
            if (initializeWithValue) {
                return readValue();
            }
            return void 0;
        }
    }["useReadLocalStorage.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReadLocalStorage.useEffect": ()=>{
            setStoredValue(readValue());
        }
    }["useReadLocalStorage.useEffect"], [
        key
    ]);
    const handleStorageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useReadLocalStorage.useCallback[handleStorageChange]": (event)=>{
            if (event.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        }
    }["useReadLocalStorage.useCallback[handleStorageChange]"], [
        key,
        readValue
    ]);
    useEventListener("storage", handleStorageChange);
    useEventListener("local-storage", handleStorageChange);
    return storedValue;
}
var initialSize = {
    width: void 0,
    height: void 0
};
function useResizeObserver(options) {
    const { ref, box = "content-box" } = options;
    const [{ width, height }, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(initialSize);
    const isMounted = useIsMounted();
    const previousSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])({
        ...initialSize
    });
    const onResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    onResize.current = options.onResize;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResizeObserver.useEffect": ()=>{
            if (!ref.current) return;
            if (typeof window === "undefined" || !("ResizeObserver" in window)) return;
            const observer = new ResizeObserver({
                "useResizeObserver.useEffect": ([entry])=>{
                    const boxProp = box === "border-box" ? "borderBoxSize" : box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
                    const newWidth = extractSize(entry, boxProp, "inlineSize");
                    const newHeight = extractSize(entry, boxProp, "blockSize");
                    const hasChanged = previousSize.current.width !== newWidth || previousSize.current.height !== newHeight;
                    if (hasChanged) {
                        const newSize = {
                            width: newWidth,
                            height: newHeight
                        };
                        previousSize.current.width = newWidth;
                        previousSize.current.height = newHeight;
                        if (onResize.current) {
                            onResize.current(newSize);
                        } else {
                            if (isMounted()) {
                                setSize(newSize);
                            }
                        }
                    }
                }
            }["useResizeObserver.useEffect"]);
            observer.observe(ref.current, {
                box
            });
            return ({
                "useResizeObserver.useEffect": ()=>{
                    observer.disconnect();
                }
            })["useResizeObserver.useEffect"];
        }
    }["useResizeObserver.useEffect"], [
        box,
        ref,
        isMounted
    ]);
    return {
        width,
        height
    };
}
function extractSize(entry, box, sizeType) {
    if (!entry[box]) {
        if (box === "contentBoxSize") {
            return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
        }
        return void 0;
    }
    return Array.isArray(entry[box]) ? entry[box][0][sizeType] : // @ts-ignore Support Firefox's non-standard behavior
    entry[box][sizeType];
}
var IS_SERVER4 = typeof window === "undefined";
function useScreen(options = {}) {
    let { initializeWithValue = true } = options;
    if (IS_SERVER4) {
        initializeWithValue = false;
    }
    const readScreen = ()=>{
        if (IS_SERVER4) {
            return void 0;
        }
        return window.screen;
    };
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "useScreen.useState": ()=>{
            if (initializeWithValue) {
                return readScreen();
            }
            return void 0;
        }
    }["useScreen.useState"]);
    const debouncedSetScreen = useDebounceCallback(setScreen, options.debounceDelay);
    function handleSize() {
        const newScreen = readScreen();
        const setSize = options.debounceDelay ? debouncedSetScreen : setScreen;
        if (newScreen) {
            const { width, height, availHeight, availWidth, colorDepth, orientation, pixelDepth } = newScreen;
            setSize({
                width,
                height,
                availHeight,
                availWidth,
                colorDepth,
                orientation,
                pixelDepth
            });
        }
    }
    useEventListener("resize", handleSize);
    useIsomorphicLayoutEffect({
        "useScreen.useIsomorphicLayoutEffect": ()=>{
            handleSize();
        }
    }["useScreen.useIsomorphicLayoutEffect"], []);
    return screen;
}
var cachedScriptStatuses = /* @__PURE__ */ new Map();
function getScriptNode(src) {
    const node = document.querySelector(`script[src="${src}"]`);
    const status = node == null ? void 0 : node.getAttribute("data-status");
    return {
        node,
        status
    };
}
function useScript(src, options) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "useScript.useState": ()=>{
            if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
                return "idle";
            }
            if (typeof window === "undefined") {
                return "loading";
            }
            return cachedScriptStatuses.get(src) ?? "loading";
        }
    }["useScript.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScript.useEffect": ()=>{
            if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
                return;
            }
            const cachedScriptStatus = cachedScriptStatuses.get(src);
            if (cachedScriptStatus === "ready" || cachedScriptStatus === "error") {
                setStatus(cachedScriptStatus);
                return;
            }
            const script = getScriptNode(src);
            let scriptNode = script.node;
            if (!scriptNode) {
                scriptNode = document.createElement("script");
                scriptNode.src = src;
                scriptNode.async = true;
                if (options == null ? void 0 : options.id) {
                    scriptNode.id = options.id;
                }
                scriptNode.setAttribute("data-status", "loading");
                document.body.appendChild(scriptNode);
                const setAttributeFromEvent = {
                    "useScript.useEffect.setAttributeFromEvent": (event)=>{
                        const scriptStatus = event.type === "load" ? "ready" : "error";
                        scriptNode == null ? void 0 : scriptNode.setAttribute("data-status", scriptStatus);
                    }
                }["useScript.useEffect.setAttributeFromEvent"];
                scriptNode.addEventListener("load", setAttributeFromEvent);
                scriptNode.addEventListener("error", setAttributeFromEvent);
            } else {
                setStatus(script.status ?? cachedScriptStatus ?? "loading");
            }
            const setStateFromEvent = {
                "useScript.useEffect.setStateFromEvent": (event)=>{
                    const newStatus = event.type === "load" ? "ready" : "error";
                    setStatus(newStatus);
                    cachedScriptStatuses.set(src, newStatus);
                }
            }["useScript.useEffect.setStateFromEvent"];
            scriptNode.addEventListener("load", setStateFromEvent);
            scriptNode.addEventListener("error", setStateFromEvent);
            return ({
                "useScript.useEffect": ()=>{
                    if (scriptNode) {
                        scriptNode.removeEventListener("load", setStateFromEvent);
                        scriptNode.removeEventListener("error", setStateFromEvent);
                    }
                    if (scriptNode && (options == null ? void 0 : options.removeOnUnmount)) {
                        scriptNode.remove();
                        cachedScriptStatuses.delete(src);
                    }
                }
            })["useScript.useEffect"];
        }
    }["useScript.useEffect"], [
        src,
        options == null ? void 0 : options.shouldPreventLoad,
        options == null ? void 0 : options.removeOnUnmount,
        options == null ? void 0 : options.id
    ]);
    return status;
}
var IS_SERVER5 = typeof window === "undefined";
function useScrollLock(options = {}) {
    const { autoLock = true, lockTarget, widthReflow = true } = options;
    const [isLocked, setIsLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const originalStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lock = ()=>{
        if (target.current) {
            const { overflow, paddingRight } = target.current.style;
            originalStyle.current = {
                overflow,
                paddingRight
            };
            if (widthReflow) {
                const offsetWidth = target.current === document.body ? window.innerWidth : target.current.offsetWidth;
                const currentPaddingRight = parseInt(window.getComputedStyle(target.current).paddingRight, 10) || 0;
                const scrollbarWidth = offsetWidth - target.current.scrollWidth;
                target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`;
            }
            target.current.style.overflow = "hidden";
            setIsLocked(true);
        }
    };
    const unlock = ()=>{
        if (target.current && originalStyle.current) {
            target.current.style.overflow = originalStyle.current.overflow;
            if (widthReflow) {
                target.current.style.paddingRight = originalStyle.current.paddingRight;
            }
        }
        setIsLocked(false);
    };
    useIsomorphicLayoutEffect({
        "useScrollLock.useIsomorphicLayoutEffect": ()=>{
            if (IS_SERVER5) return;
            if (lockTarget) {
                target.current = typeof lockTarget === "string" ? document.querySelector(lockTarget) : lockTarget;
            }
            if (!target.current) {
                target.current = document.body;
            }
            if (autoLock) {
                lock();
            }
            return ({
                "useScrollLock.useIsomorphicLayoutEffect": ()=>{
                    unlock();
                }
            })["useScrollLock.useIsomorphicLayoutEffect"];
        }
    }["useScrollLock.useIsomorphicLayoutEffect"], [
        autoLock,
        lockTarget,
        widthReflow
    ]);
    return {
        isLocked,
        lock,
        unlock
    };
}
var IS_SERVER6 = typeof window === "undefined";
function useSessionStorage(key, initialValue, options = {}) {
    const { initializeWithValue = true } = options;
    const serializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[serializer]": (value)=>{
            if (options.serializer) {
                return options.serializer(value);
            }
            return JSON.stringify(value);
        }
    }["useSessionStorage.useCallback[serializer]"], [
        options
    ]);
    const deserializer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[deserializer]": (value)=>{
            if (options.deserializer) {
                return options.deserializer(value);
            }
            if (value === "undefined") {
                return void 0;
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            let parsed;
            try {
                parsed = JSON.parse(value);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                return defaultValue;
            }
            return parsed;
        }
    }["useSessionStorage.useCallback[deserializer]"], [
        options,
        initialValue
    ]);
    const readValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[readValue]": ()=>{
            const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;
            if (IS_SERVER6) {
                return initialValueToUse;
            }
            try {
                const raw = window.sessionStorage.getItem(key);
                return raw ? deserializer(raw) : initialValueToUse;
            } catch (error) {
                console.warn(`Error reading sessionStorage key \u201C${key}\u201D:`, error);
                return initialValueToUse;
            }
        }
    }["useSessionStorage.useCallback[readValue]"], [
        initialValue,
        key,
        deserializer
    ]);
    const [storedValue, setStoredValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "useSessionStorage.useState": ()=>{
            if (initializeWithValue) {
                return readValue();
            }
            return initialValue instanceof Function ? initialValue() : initialValue;
        }
    }["useSessionStorage.useState"]);
    const setValue = useEventCallback({
        "useSessionStorage.useEventCallback[setValue]": (value)=>{
            if (IS_SERVER6) {
                console.warn(`Tried setting sessionStorage key \u201C${key}\u201D even though environment is not a client`);
            }
            try {
                const newValue = value instanceof Function ? value(readValue()) : value;
                window.sessionStorage.setItem(key, serializer(newValue));
                setStoredValue(newValue);
                window.dispatchEvent(new StorageEvent("session-storage", {
                    key
                }));
            } catch (error) {
                console.warn(`Error setting sessionStorage key \u201C${key}\u201D:`, error);
            }
        }
    }["useSessionStorage.useEventCallback[setValue]"]);
    const removeValue = useEventCallback({
        "useSessionStorage.useEventCallback[removeValue]": ()=>{
            if (IS_SERVER6) {
                console.warn(`Tried removing sessionStorage key \u201C${key}\u201D even though environment is not a client`);
            }
            const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
            window.sessionStorage.removeItem(key);
            setStoredValue(defaultValue);
            window.dispatchEvent(new StorageEvent("session-storage", {
                key
            }));
        }
    }["useSessionStorage.useEventCallback[removeValue]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSessionStorage.useEffect": ()=>{
            setStoredValue(readValue());
        }
    }["useSessionStorage.useEffect"], [
        key
    ]);
    const handleStorageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionStorage.useCallback[handleStorageChange]": (event)=>{
            if (event.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        }
    }["useSessionStorage.useCallback[handleStorageChange]"], [
        key,
        readValue
    ]);
    useEventListener("storage", handleStorageChange);
    useEventListener("session-storage", handleStorageChange);
    return [
        storedValue,
        setValue,
        removeValue
    ];
}
function useStep(maxStep) {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const canGoToNextStep = currentStep + 1 <= maxStep;
    const canGoToPrevStep = currentStep - 1 > 0;
    const setStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[setStep]": (step)=>{
            const newStep = step instanceof Function ? step(currentStep) : step;
            if (newStep >= 1 && newStep <= maxStep) {
                setCurrentStep(newStep);
                return;
            }
            throw new Error("Step not valid");
        }
    }["useStep.useCallback[setStep]"], [
        maxStep,
        currentStep
    ]);
    const goToNextStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[goToNextStep]": ()=>{
            if (canGoToNextStep) {
                setCurrentStep({
                    "useStep.useCallback[goToNextStep]": (step)=>step + 1
                }["useStep.useCallback[goToNextStep]"]);
            }
        }
    }["useStep.useCallback[goToNextStep]"], [
        canGoToNextStep
    ]);
    const goToPrevStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[goToPrevStep]": ()=>{
            if (canGoToPrevStep) {
                setCurrentStep({
                    "useStep.useCallback[goToPrevStep]": (step)=>step - 1
                }["useStep.useCallback[goToPrevStep]"]);
            }
        }
    }["useStep.useCallback[goToPrevStep]"], [
        canGoToPrevStep
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStep.useCallback[reset]": ()=>{
            setCurrentStep(1);
        }
    }["useStep.useCallback[reset]"], []);
    return [
        currentStep,
        {
            goToNextStep,
            goToPrevStep,
            canGoToNextStep,
            canGoToPrevStep,
            setStep,
            reset
        }
    ];
}
// src/useTernaryDarkMode/useTernaryDarkMode.ts
var COLOR_SCHEME_QUERY2 = "(prefers-color-scheme: dark)";
var LOCAL_STORAGE_KEY2 = "usehooks-ts-ternary-dark-mode";
function useTernaryDarkMode({ defaultValue = "system", localStorageKey = LOCAL_STORAGE_KEY2, initializeWithValue = true } = {}) {
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY2, {
        initializeWithValue
    });
    const [mode, setMode] = useLocalStorage(localStorageKey, defaultValue, {
        initializeWithValue
    });
    const isDarkMode = mode === "dark" || mode === "system" && isDarkOS;
    const toggleTernaryDarkMode = ()=>{
        const modes = [
            "light",
            "system",
            "dark"
        ];
        setMode((prevMode)=>{
            const nextIndex = (modes.indexOf(prevMode) + 1) % modes.length;
            return modes[nextIndex];
        });
    };
    return {
        isDarkMode,
        ternaryDarkMode: mode,
        setTernaryDarkMode: setMode,
        toggleTernaryDarkMode
    };
}
function useTimeout(callback, delay) {
    const savedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    useIsomorphicLayoutEffect({
        "useTimeout.useIsomorphicLayoutEffect": ()=>{
            savedCallback.current = callback;
        }
    }["useTimeout.useIsomorphicLayoutEffect"], [
        callback
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimeout.useEffect": ()=>{
            if (!delay && delay !== 0) {
                return;
            }
            const id = setTimeout({
                "useTimeout.useEffect.id": ()=>{
                    savedCallback.current();
                }
            }["useTimeout.useEffect.id"], delay);
            return ({
                "useTimeout.useEffect": ()=>{
                    clearTimeout(id);
                }
            })["useTimeout.useEffect"];
        }
    }["useTimeout.useEffect"], [
        delay
    ]);
}
function useToggle(defaultValue) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(!!defaultValue);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useToggle.useCallback[toggle]": ()=>{
            setValue({
                "useToggle.useCallback[toggle]": (x)=>!x
            }["useToggle.useCallback[toggle]"]);
        }
    }["useToggle.useCallback[toggle]"], []);
    return [
        value,
        toggle,
        setValue
    ];
}
var IS_SERVER7 = typeof window === "undefined";
function useWindowSize(options = {}) {
    let { initializeWithValue = true } = options;
    if (IS_SERVER7) {
        initializeWithValue = false;
    }
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$MyWeb$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "useWindowSize.useState": ()=>{
            if (initializeWithValue) {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            }
            return {
                width: void 0,
                height: void 0
            };
        }
    }["useWindowSize.useState"]);
    const debouncedSetWindowSize = useDebounceCallback(setWindowSize, options.debounceDelay);
    function handleSize() {
        const setSize = options.debounceDelay ? debouncedSetWindowSize : setWindowSize;
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    useEventListener("resize", handleSize);
    useIsomorphicLayoutEffect({
        "useWindowSize.useIsomorphicLayoutEffect": ()=>{
            handleSize();
        }
    }["useWindowSize.useIsomorphicLayoutEffect"], []);
    return windowSize;
}
;
}),
"[project]/Documents/GitHub/MyWeb/node_modules/js-file-downloader/dist/js-file-downloader.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function webpackUniversalModuleDefinition(root, factory) {
    if ("TURBOPACK compile-time truthy", 1) module.exports = factory();
    else //TURBOPACK unreachable
    ;
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) {
                /******/ return installedModules[moduleId].exports;
            /******/ }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) {
                /******/ Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            /******/ }
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            /******/ }
            /******/ Object.defineProperty(exports, '__esModule', {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != 'string') for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1['default'];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, 'a', getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = "./src/index.js");
    /******/ }({
        /***/ "./src/exception.js": function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadException", function() {
                return DownloadException;
            });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadException", function() {
                return downloadException;
            });
            function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                }, _typeof(obj);
            }
            function _defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                Object.defineProperty(Constructor, "prototype", {
                    writable: false
                });
                return Constructor;
            }
            function _toPropertyKey(arg) {
                var key = _toPrimitive(arg, "string");
                return _typeof(key) === "symbol" ? key : String(key);
            }
            function _toPrimitive(input, hint) {
                if (_typeof(input) !== "object" || input === null) return input;
                var prim = input[Symbol.toPrimitive];
                if (prim !== undefined) {
                    var res = prim.call(input, hint || "default");
                    if (_typeof(res) !== "object") return res;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (hint === "string" ? String : Number)(input);
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                Object.defineProperty(subClass, "prototype", {
                    writable: false
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _createSuper(Derived) {
                var hasNativeReflectConstruct = _isNativeReflectConstruct();
                return function _createSuperInternal() {
                    var Super = _getPrototypeOf(Derived), result;
                    if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                    } else {
                        result = Super.apply(this, arguments);
                    }
                    return _possibleConstructorReturn(this, result);
                };
            }
            function _possibleConstructorReturn(self, call) {
                if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                } else if (call !== void 0) {
                    throw new TypeError("Derived constructors may only return object or undefined");
                }
                return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
                if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return self;
            }
            function _wrapNativeSuper(Class) {
                var _cache = typeof Map === "function" ? new Map() : undefined;
                _wrapNativeSuper = function _wrapNativeSuper(Class) {
                    if (Class === null || !_isNativeFunction(Class)) return Class;
                    if (typeof Class !== "function") {
                        throw new TypeError("Super expression must either be null or a function");
                    }
                    if (typeof _cache !== "undefined") {
                        if (_cache.has(Class)) return _cache.get(Class);
                        _cache.set(Class, Wrapper);
                    }
                    function Wrapper() {
                        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                    }
                    Wrapper.prototype = Object.create(Class.prototype, {
                        constructor: {
                            value: Wrapper,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        }
                    });
                    return _setPrototypeOf(Wrapper, Class);
                };
                return _wrapNativeSuper(Class);
            }
            function _construct(Parent, args, Class) {
                if (_isNativeReflectConstruct()) {
                    _construct = Reflect.construct.bind();
                } else {
                    _construct = function _construct(Parent, args, Class) {
                        var a = [
                            null
                        ];
                        a.push.apply(a, args);
                        var Constructor = Function.bind.apply(Parent, a);
                        var instance = new Constructor();
                        if (Class) _setPrototypeOf(instance, Class.prototype);
                        return instance;
                    };
                }
                return _construct.apply(null, arguments);
            }
            function _isNativeReflectConstruct() {
                if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if (typeof Proxy === "function") return true;
                try {
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            function _isNativeFunction(fn) {
                return Function.toString.call(fn).indexOf("[native code]") !== -1;
            }
            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }
            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            var DownloadException = /*#__PURE__*/ function(_Error) {
                _inherits(DownloadException, _Error);
                var _super = _createSuper(DownloadException);
                function DownloadException(message, request) {
                    var _this;
                    _classCallCheck(this, DownloadException);
                    _this = _super.call(this, "Downloader error: ".concat(message));
                    _this.request = request;
                    _this.name = 'DownloadException';
                    return _this;
                }
                return _createClass(DownloadException);
            }(/*#__PURE__*/ _wrapNativeSuper(Error));
            ;
            /**
 * @deprecated use DownloadException instead, it will be removed in next releases!
 */ var downloadException = DownloadException;
        /***/ },
        /***/ "./src/index.js": function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exception */ "./src/exception.js");
            /* harmony import */ var _signatures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signatures */ "./src/signatures.js");
            /*!
 * JS File Downloader v 1.1.25
 * https://github.com/AleeeKoi/js-file-downloader
 *
 * Copyright Alessandro Pellizzari
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */ function _typeof(obj) {
                "@babel/helpers - typeof";
                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                }, _typeof(obj);
            }
            function _regeneratorRuntime() {
                "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
                _regeneratorRuntime = function _regeneratorRuntime() {
                    return exports;
                };
                var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
                    obj[key] = desc.value;
                }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
                function define(obj, key, value) {
                    return Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), obj[key];
                }
                try {
                    define({}, "");
                } catch (err) {
                    define = function define(obj, key, value) {
                        return obj[key] = value;
                    };
                }
                function wrap(innerFn, outerFn, self, tryLocsList) {
                    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
                    return defineProperty(generator, "_invoke", {
                        value: makeInvokeMethod(innerFn, self, context)
                    }), generator;
                }
                function tryCatch(fn, obj, arg) {
                    try {
                        return {
                            type: "normal",
                            arg: fn.call(obj, arg)
                        };
                    } catch (err) {
                        return {
                            type: "throw",
                            arg: err
                        };
                    }
                }
                exports.wrap = wrap;
                var ContinueSentinel = {};
                function Generator() {}
                function GeneratorFunction() {}
                function GeneratorFunctionPrototype() {}
                var IteratorPrototype = {};
                define(IteratorPrototype, iteratorSymbol, function() {
                    return this;
                });
                var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
                NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
                var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
                function defineIteratorMethods(prototype) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(method) {
                        define(prototype, method, function(arg) {
                            return this._invoke(method, arg);
                        });
                    });
                }
                function AsyncIterator(generator, PromiseImpl) {
                    function invoke(method, arg, resolve, reject) {
                        var record = tryCatch(generator[method], generator, arg);
                        if ("throw" !== record.type) {
                            var result = record.arg, value = result.value;
                            return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value) {
                                invoke("next", value, resolve, reject);
                            }, function(err) {
                                invoke("throw", err, resolve, reject);
                            }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                                result.value = unwrapped, resolve(result);
                            }, function(error) {
                                return invoke("throw", error, resolve, reject);
                            });
                        }
                        reject(record.arg);
                    }
                    var previousPromise;
                    defineProperty(this, "_invoke", {
                        value: function value(method, arg) {
                            function callInvokeWithMethodAndArg() {
                                return new PromiseImpl(function(resolve, reject) {
                                    invoke(method, arg, resolve, reject);
                                });
                            }
                            return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
                        }
                    });
                }
                function makeInvokeMethod(innerFn, self, context) {
                    var state = "suspendedStart";
                    return function(method, arg) {
                        if ("executing" === state) throw new Error("Generator is already running");
                        if ("completed" === state) {
                            if ("throw" === method) throw arg;
                            return doneResult();
                        }
                        for(context.method = method, context.arg = arg;;){
                            var delegate = context.delegate;
                            if (delegate) {
                                var delegateResult = maybeInvokeDelegate(delegate, context);
                                if (delegateResult) {
                                    if (delegateResult === ContinueSentinel) continue;
                                    return delegateResult;
                                }
                            }
                            if ("next" === context.method) context.sent = context._sent = context.arg;
                            else if ("throw" === context.method) {
                                if ("suspendedStart" === state) throw state = "completed", context.arg;
                                context.dispatchException(context.arg);
                            } else "return" === context.method && context.abrupt("return", context.arg);
                            state = "executing";
                            var record = tryCatch(innerFn, self, context);
                            if ("normal" === record.type) {
                                if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                                return {
                                    value: record.arg,
                                    done: context.done
                                };
                            }
                            "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
                        }
                    };
                }
                function maybeInvokeDelegate(delegate, context) {
                    var methodName = context.method, method = delegate.iterator[methodName];
                    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
                    var record = tryCatch(method, delegate.iterator, context.arg);
                    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
                    var info = record.arg;
                    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
                }
                function pushTryEntry(locs) {
                    var entry = {
                        tryLoc: locs[0]
                    };
                    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
                }
                function resetTryEntry(entry) {
                    var record = entry.completion || {};
                    record.type = "normal", delete record.arg, entry.completion = record;
                }
                function Context(tryLocsList) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
                }
                function values(iterable) {
                    if (iterable) {
                        var iteratorMethod = iterable[iteratorSymbol];
                        if (iteratorMethod) return iteratorMethod.call(iterable);
                        if ("function" == typeof iterable.next) return iterable;
                        if (!isNaN(iterable.length)) {
                            var i = -1, next = function next() {
                                for(; ++i < iterable.length;)if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                                return next.value = undefined, next.done = !0, next;
                            };
                            return next.next = next;
                        }
                    }
                    return {
                        next: doneResult
                    };
                }
                function doneResult() {
                    return {
                        value: undefined,
                        done: !0
                    };
                }
                return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
                    value: GeneratorFunctionPrototype,
                    configurable: !0
                }), defineProperty(GeneratorFunctionPrototype, "constructor", {
                    value: GeneratorFunction,
                    configurable: !0
                }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
                    var ctor = "function" == typeof genFun && genFun.constructor;
                    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
                }, exports.mark = function(genFun) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
                }, exports.awrap = function(arg) {
                    return {
                        __await: arg
                    };
                }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
                    return this;
                }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
                    void 0 === PromiseImpl && (PromiseImpl = Promise);
                    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
                    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
                        return result.done ? result.value : iter.next();
                    });
                }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
                    return this;
                }), define(Gp, "toString", function() {
                    return "[object Generator]";
                }), exports.keys = function(val) {
                    var object = Object(val), keys = [];
                    for(var key in object)keys.push(key);
                    return keys.reverse(), function next() {
                        for(; keys.length;){
                            var key = keys.pop();
                            if (key in object) return next.value = key, next.done = !1, next;
                        }
                        return next.done = !0, next;
                    };
                }, exports.values = values, Context.prototype = {
                    constructor: Context,
                    reset: function reset(skipTempReset) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for(var name in this)"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
                    },
                    stop: function stop() {
                        this.done = !0;
                        var rootRecord = this.tryEntries[0].completion;
                        if ("throw" === rootRecord.type) throw rootRecord.arg;
                        return this.rval;
                    },
                    dispatchException: function dispatchException(exception) {
                        if (this.done) throw exception;
                        var context = this;
                        function handle(loc, caught) {
                            return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
                        }
                        for(var i = this.tryEntries.length - 1; i >= 0; --i){
                            var entry = this.tryEntries[i], record = entry.completion;
                            if ("root" === entry.tryLoc) return handle("end");
                            if (entry.tryLoc <= this.prev) {
                                var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                                if (hasCatch && hasFinally) {
                                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                                } else if (hasCatch) {
                                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                                } else {
                                    if (!hasFinally) throw new Error("try statement without catch or finally");
                                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function abrupt(type, arg) {
                        for(var i = this.tryEntries.length - 1; i >= 0; --i){
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                                var finallyEntry = entry;
                                break;
                            }
                        }
                        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
                        var record = finallyEntry ? finallyEntry.completion : {};
                        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
                    },
                    complete: function complete(record, afterLoc) {
                        if ("throw" === record.type) throw record.arg;
                        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
                    },
                    finish: function finish(finallyLoc) {
                        for(var i = this.tryEntries.length - 1; i >= 0; --i){
                            var entry = this.tryEntries[i];
                            if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
                        }
                    },
                    catch: function _catch(tryLoc) {
                        for(var i = this.tryEntries.length - 1; i >= 0; --i){
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc === tryLoc) {
                                var record = entry.completion;
                                if ("throw" === record.type) {
                                    var thrown = record.arg;
                                    resetTryEntry(entry);
                                }
                                return thrown;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
                        return this.delegate = {
                            iterator: values(iterable),
                            resultName: resultName,
                            nextLoc: nextLoc
                        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
                    }
                }, exports;
            }
            function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    Promise.resolve(value).then(_next, _throw);
                }
            }
            function _asyncToGenerator(fn) {
                return function() {
                    var self = this, args = arguments;
                    return new Promise(function(resolve, reject) {
                        var gen = fn.apply(self, args);
                        function _next(value) {
                            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                        }
                        function _throw(err) {
                            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                        }
                        _next(undefined);
                    });
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                Object.defineProperty(Constructor, "prototype", {
                    writable: false
                });
                return Constructor;
            }
            function _toPropertyKey(arg) {
                var key = _toPrimitive(arg, "string");
                return _typeof(key) === "symbol" ? key : String(key);
            }
            function _toPrimitive(input, hint) {
                if (_typeof(input) !== "object" || input === null) return input;
                var prim = input[Symbol.toPrimitive];
                if (prim !== undefined) {
                    var res = prim.call(input, hint || "default");
                    if (_typeof(res) !== "object") return res;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return (hint === "string" ? String : Number)(input);
            }
            var DEFAULT_PARAMS = {
                timeout: 40000,
                headers: [],
                forceDesktopMode: false,
                autoStart: true,
                withCredentials: false,
                method: 'GET',
                nameCallback: function nameCallback(name) {
                    return name;
                },
                contentType: 'application/x-www-form-urlencoded',
                body: null,
                nativeFallbackOnError: false,
                contentTypeDetermination: false
            };
            var JsFileDownloader = /*#__PURE__*/ function() {
                /**
   * Create a new JsFileDownloader instance
   * You need to define a {String} "url" params and other
   * @param {Object} customParams
   */ function JsFileDownloader() {
                    var customParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    _classCallCheck(this, JsFileDownloader);
                    this.params = Object.assign({}, DEFAULT_PARAMS, customParams);
                    this.link = this.createLink();
                    this.request = null;
                    this.downloadedFile = null;
                    this.abortController = undefined;
                    if (this.params.autoStart) return this.downloadFile();
                    return this;
                }
                _createClass(JsFileDownloader, [
                    {
                        key: "start",
                        value: function start() {
                            return this.downloadFile();
                        }
                    },
                    {
                        key: "abort",
                        value: function abort(reason) {
                            if (!this.abortController) {
                                return;
                            }
                            this.abortController.abort(reason || 'Download cancelled');
                        }
                    },
                    {
                        key: "downloadFile",
                        value: function downloadFile() {
                            var _this = this;
                            return new Promise(function(resolve, reject) {
                                _this.initDownload(resolve, reject);
                            });
                        }
                    },
                    {
                        key: "setAbortListner",
                        value: function setAbortListner(abortListener) {
                            if (!this.abortController) {
                                return;
                            }
                            this.abortController.signal.addEventListener('abort', abortListener);
                        }
                    },
                    {
                        key: "unsetAbortListner",
                        value: function unsetAbortListner(abortListener) {
                            if (!this.abortController) {
                                return;
                            }
                            this.abortController.signal.removeEventListener('abort', abortListener);
                        }
                    },
                    {
                        key: "initDownload",
                        value: function initDownload(resolve, reject) {
                            var _this2 = this;
                            var fallback = function fallback() {
                                _this2.link.target = '_blank';
                                _this2.link.href = _this2.params.url;
                                _this2.clickLink();
                            };
                            // fallback for old browsers
                            if (!('download' in this.link) || this.isMobile()) {
                                fallback();
                                return resolve();
                            }
                            this.request = this.createRequest();
                            this.abortController = 'AbortController' in window ? new AbortController() : null;
                            var abortListener = function abortListener(_ref) {
                                var target = _ref.target;
                                _this2.unsetAbortListner(abortListener);
                                !!_this2.request && _this2.request.abort();
                                reject(target.reason);
                            };
                            this.setAbortListner(abortListener);
                            if (!this.params.url) {
                                return reject(new _exception__WEBPACK_IMPORTED_MODULE_0__["DownloadException"]('url param not defined!', this.request));
                            }
                            this.request.onload = /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
                                return _regeneratorRuntime().wrap(function _callee$(_context) {
                                    while(1)switch(_context.prev = _context.next){
                                        case 0:
                                            _this2.unsetAbortListner(abortListener);
                                            if (!(parseInt(_this2.request.status, 10) !== 200)) {
                                                _context.next = 3;
                                                break;
                                            }
                                            return _context.abrupt("return", reject(new _exception__WEBPACK_IMPORTED_MODULE_0__["DownloadException"]("status code [".concat(_this2.request.status, "]"), _this2.request)));
                                        case 3:
                                            _context.next = 5;
                                            return _this2.startDownload();
                                        case 5:
                                            return _context.abrupt("return", resolve(_this2));
                                        case 6:
                                        case "end":
                                            return _context.stop();
                                    }
                                }, _callee);
                            }));
                            this.request.ontimeout = function() {
                                _this2.unsetAbortListner(abortListener);
                                reject(new _exception__WEBPACK_IMPORTED_MODULE_0__["DownloadException"]('request timeout', _this2.request));
                            };
                            this.request.onerror = function() {
                                _this2.unsetAbortListner(abortListener);
                                if (_this2.params.nativeFallbackOnError) {
                                    fallback();
                                    resolve(_this2);
                                } else {
                                    reject(new _exception__WEBPACK_IMPORTED_MODULE_0__["DownloadException"]('network error', _this2.request));
                                }
                            };
                            this.request.send(this.params.body);
                            return this;
                        }
                    },
                    {
                        key: "isMobile",
                        value: function isMobile() {
                            return !this.params.forceDesktopMode && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                        }
                    },
                    {
                        key: "createRequest",
                        value: function createRequest() {
                            var request = new XMLHttpRequest();
                            request.open(this.params.method, this.params.url, true);
                            if (this.params.contentType !== false) {
                                request.setRequestHeader('Content-type', this.params.contentType);
                            }
                            this.params.headers.forEach(function(header) {
                                request.setRequestHeader(header.name, header.value);
                            });
                            request.responseType = 'arraybuffer';
                            if (this.params.process && typeof this.params.process === 'function') {
                                request.addEventListener('progress', this.params.process);
                            }
                            if (this.params.onloadstart && typeof this.params.onloadstart === 'function') {
                                request.onloadstart = this.params.onloadstart;
                            }
                            request.timeout = this.params.timeout;
                            request.withCredentials = !!this.params.withCredentials || !!this.params.includeCredentials;
                            return request;
                        }
                    },
                    {
                        key: "getFileName",
                        value: function getFileName() {
                            // Forcing file name
                            if (typeof this.params.filename === 'string') {
                                return this.params.filename;
                            }
                            // Trying to get file name from response header
                            var content = this.request.getResponseHeader('Content-Disposition');
                            var contentParts = [];
                            if (content) {
                                contentParts = content.replace(/["']/g, '').match(/filename\*?=([^;]+)/);
                            }
                            var extractedName = contentParts && contentParts.length >= 1 ? contentParts[1] : this.params.url.split('/').pop().split('?')[0];
                            return this.params.nameCallback(extractedName);
                        }
                    },
                    {
                        key: "getContentTypeFromFileSignature",
                        value: function getContentTypeFromFileSignature(file) {
                            var signatures = Object.assign({}, _signatures__WEBPACK_IMPORTED_MODULE_1__["fileSignatures"], this.params.customFileSignatures);
                            return new Promise(function(resolve, reject) {
                                var reader = new FileReader();
                                var first4BytesOfFile = file.slice(0, 4);
                                reader.onloadend = function(evt) {
                                    if (evt.target.readyState !== FileReader.DONE) {
                                        reject();
                                        return;
                                    }
                                    // Since an array buffer is just a generic way to represent a binary buffer
                                    // we need to create a TypedArray, in this case an Uint8Array
                                    var uint = new Uint8Array(evt.target.result);
                                    var bytes = [];
                                    uint.forEach(function(byte) {
                                        // transform every byte to hexadecimal
                                        bytes.push(byte.toString(16));
                                    });
                                    var hex = bytes.join('').toUpperCase();
                                    resolve(signatures[hex]);
                                };
                                reader.onerror = reject;
                                // read first 4 bytes of sliced file as an array buffer
                                reader.readAsArrayBuffer(first4BytesOfFile);
                            });
                        }
                    },
                    {
                        key: "getContentTypeFromResponseHeader",
                        value: function getContentTypeFromResponseHeader() {
                            return this.request.getResponseHeader('content-type');
                        }
                    },
                    {
                        key: "getContentType",
                        value: function getContentType(response) {
                            var _this3 = this;
                            return new Promise(/*#__PURE__*/ function() {
                                var _ref3 = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(resolve) {
                                    var contentTypeDetermination, defaultContentType, headerContentType, signatureContentType, _headerContentType, _signatureContentType, _ref4, _signatureContentType2;
                                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                        while(1)switch(_context2.prev = _context2.next){
                                            case 0:
                                                contentTypeDetermination = _this3.params.contentTypeDetermination;
                                                defaultContentType = 'application/octet-stream';
                                                if (contentTypeDetermination === 'header' || contentTypeDetermination === 'full') {
                                                    headerContentType = _this3.getContentTypeFromResponseHeader();
                                                }
                                                if (!(contentTypeDetermination === 'signature' || contentTypeDetermination === 'full')) {
                                                    _context2.next = 7;
                                                    break;
                                                }
                                                _context2.next = 6;
                                                return _this3.getContentTypeFromFileSignature(new Blob([
                                                    response
                                                ]));
                                            case 6:
                                                signatureContentType = _context2.sent;
                                            case 7:
                                                if (contentTypeDetermination === 'header') {
                                                    resolve((_headerContentType = headerContentType) !== null && _headerContentType !== void 0 ? _headerContentType : defaultContentType);
                                                } else if (contentTypeDetermination === 'signature') {
                                                    resolve((_signatureContentType = signatureContentType) !== null && _signatureContentType !== void 0 ? _signatureContentType : defaultContentType);
                                                } else if (contentTypeDetermination === 'full') {
                                                    resolve((_ref4 = (_signatureContentType2 = signatureContentType) !== null && _signatureContentType2 !== void 0 ? _signatureContentType2 : headerContentType) !== null && _ref4 !== void 0 ? _ref4 : defaultContentType);
                                                } else {
                                                    resolve(defaultContentType);
                                                }
                                            case 8:
                                            case "end":
                                                return _context2.stop();
                                        }
                                    }, _callee2);
                                }));
                                return function(_x) {
                                    return _ref3.apply(this, arguments);
                                };
                            }());
                        }
                    },
                    {
                        key: "createLink",
                        value: function createLink() {
                            var link = document.createElement('a');
                            link.style.display = 'none';
                            return link;
                        }
                    },
                    {
                        key: "clickLink",
                        value: function clickLink() {
                            var event;
                            try {
                                event = new MouseEvent('click');
                            } catch (e) {
                                event = document.createEvent('MouseEvent');
                                event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                            }
                            this.link.dispatchEvent(event);
                        }
                    },
                    {
                        key: "getFile",
                        value: function() {
                            var _getFile = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(response, fileName) {
                                var type, file, options;
                                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                    while(1)switch(_context3.prev = _context3.next){
                                        case 0:
                                            _context3.next = 2;
                                            return this.getContentType(response);
                                        case 2:
                                            type = _context3.sent;
                                            options = {
                                                type: type
                                            };
                                            try {
                                                file = new File([
                                                    response
                                                ], fileName, options);
                                            } catch (e) {
                                                file = new Blob([
                                                    response
                                                ], options);
                                                file.name = fileName;
                                                file.lastModifiedDate = new Date();
                                            }
                                            return _context3.abrupt("return", file);
                                        case 6:
                                        case "end":
                                            return _context3.stop();
                                    }
                                }, _callee3, this);
                            }));
                            function getFile(_x2, _x3) {
                                return _getFile.apply(this, arguments);
                            }
                            return getFile;
                        }()
                    },
                    {
                        key: "startDownload",
                        value: function() {
                            var _startDownload = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee4() {
                                var fileName, objectUrl;
                                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                                    while(1)switch(_context4.prev = _context4.next){
                                        case 0:
                                            fileName = this.getFileName();
                                            _context4.next = 3;
                                            return this.getFile(this.request.response, fileName);
                                        case 3:
                                            this.downloadedFile = _context4.sent;
                                            if (!('msSaveOrOpenBlob' in window.navigator)) {
                                                _context4.next = 6;
                                                break;
                                            }
                                            return _context4.abrupt("return", window.navigator.msSaveOrOpenBlob(this.downloadedFile, fileName));
                                        case 6:
                                            objectUrl = window.URL.createObjectURL(this.downloadedFile);
                                            this.link.href = objectUrl;
                                            this.link.download = fileName;
                                            this.clickLink();
                                            setTimeout(function() {
                                                (window.URL || window.webkitURL || window).revokeObjectURL(objectUrl);
                                            }, 1000 * 40);
                                            return _context4.abrupt("return", this.downloadedFile);
                                        case 12:
                                        case "end":
                                            return _context4.stop();
                                    }
                                }, _callee4, this);
                            }));
                            function startDownload() {
                                return _startDownload.apply(this, arguments);
                            }
                            return startDownload;
                        }()
                    }
                ]);
                return JsFileDownloader;
            }();
            /* harmony default export */ __webpack_exports__["default"] = JsFileDownloader;
        /***/ },
        /***/ "./src/signatures.js": function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSignatures", function() {
                return fileSignatures;
            });
            var fileSignatures = {
                '89504E47': 'image/png',
                '25504446': 'application/pdf'
            };
        /***/ }
    })["default"];
}); //# sourceMappingURL=js-file-downloader.js.map
}),
]);

//# sourceMappingURL=425ab_18963ac9._.js.map