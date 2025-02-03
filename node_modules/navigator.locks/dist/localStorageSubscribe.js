"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onStorageChange = exports.removeStorageItem = exports.getStorageItem = exports.setStorageItem = exports.dispatchEvent = void 0;
function dispatchEvent(key, value) {
    var event = new Event(key);
    event.value = value;
    event.key = key;
    document.dispatchEvent(event);
}
exports.dispatchEvent = dispatchEvent;
function setStorageItem(key, value) {
    window.localStorage.setItem(key, value);
    dispatchEvent(key, value);
}
exports.setStorageItem = setStorageItem;
function getStorageItem(key) {
    return window.localStorage.getItem(key);
}
exports.getStorageItem = getStorageItem;
function removeStorageItem(key) {
    return window.localStorage.removeItem(key);
}
exports.removeStorageItem = removeStorageItem;
function onStorageChange(key, listener) {
    var documentListener = function () {
        return __awaiter(this, void 0, void 0, function () {
            var needRemoveListener;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, listener()];
                    case 1:
                        needRemoveListener = _a.sent();
                        if (needRemoveListener) {
                            document.removeEventListener(key, documentListener);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    document.addEventListener(key, documentListener, false);
    var windowListener = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var needRemoveListener;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.storageArea === localStorage && event.key === key)) return [3 /*break*/, 2];
                        return [4 /*yield*/, listener()];
                    case 1:
                        needRemoveListener = _a.sent();
                        if (needRemoveListener) {
                            window.removeEventListener("storage", windowListener);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    window.addEventListener("storage", windowListener, false);
}
exports.onStorageChange = onStorageChange;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlU3Vic2NyaWJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvY2FsU3RvcmFnZVN1YnNjcmliZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxTQUFnQixhQUFhLENBQUMsR0FBVyxFQUFFLEtBQWE7SUFDdEQsSUFBTSxLQUFLLEdBQWMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFeEMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDaEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBTkQsc0NBTUM7QUFFRCxTQUFnQixjQUFjLENBQUMsR0FBVyxFQUFFLEtBQWE7SUFDdkQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUhELHdDQUdDO0FBRUQsU0FBZ0IsY0FBYyxDQUFDLEdBQVc7SUFDeEMsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRkQsd0NBRUM7QUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxHQUFXO0lBQzNDLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUZELDhDQUVDO0FBRUQsU0FBZ0IsZUFBZSxDQUM3QixHQUFXLEVBQ1gsUUFBMEM7SUFFMUMsSUFBTSxnQkFBZ0IsR0FBRzs7Ozs7NEJBQ0kscUJBQU0sUUFBUSxFQUFFLEVBQUE7O3dCQUFyQyxrQkFBa0IsR0FBRyxTQUFnQjt3QkFDM0MsSUFBSSxrQkFBa0IsRUFBRTs0QkFDdEIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3lCQUNyRDs7Ozs7S0FDRixDQUFDO0lBRUYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV4RCxJQUFNLGNBQWMsR0FBRyxVQUFnQixLQUFtQjs7Ozs7OzZCQUNwRCxDQUFBLEtBQUssQ0FBQyxXQUFXLEtBQUssWUFBWSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFBLEVBQXZELHdCQUF1RDt3QkFDOUIscUJBQU0sUUFBUSxFQUFFLEVBQUE7O3dCQUFyQyxrQkFBa0IsR0FBRyxTQUFnQjt3QkFDM0MsSUFBSSxrQkFBa0IsRUFBRTs0QkFDdEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQzt5QkFDdkQ7Ozs7OztLQUVKLENBQUM7SUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBdkJELDBDQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIEV2ZW50VHlwZSA9IEV2ZW50ICYge1xuICB2YWx1ZT86IHN0cmluZztcbiAga2V5Pzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgY29uc3QgZXZlbnQ6IEV2ZW50VHlwZSA9IG5ldyBFdmVudChrZXkpO1xuXG4gIGV2ZW50LnZhbHVlID0gdmFsdWU7XG4gIGV2ZW50LmtleSA9IGtleTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdG9yYWdlSXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIGRpc3BhdGNoRXZlbnQoa2V5LCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlSXRlbShrZXk6IHN0cmluZykge1xuICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTdG9yYWdlSXRlbShrZXk6IHN0cmluZykge1xuICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblN0b3JhZ2VDaGFuZ2UoXG4gIGtleTogc3RyaW5nLFxuICBsaXN0ZW5lcjogKCkgPT4gUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW5cbikge1xuICBjb25zdCBkb2N1bWVudExpc3RlbmVyID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5lZWRSZW1vdmVMaXN0ZW5lciA9IGF3YWl0IGxpc3RlbmVyKCk7XG4gICAgaWYgKG5lZWRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIGRvY3VtZW50TGlzdGVuZXIpO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGtleSwgZG9jdW1lbnRMaXN0ZW5lciwgZmFsc2UpO1xuXG4gIGNvbnN0IHdpbmRvd0xpc3RlbmVyID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50OiBTdG9yYWdlRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuc3RvcmFnZUFyZWEgPT09IGxvY2FsU3RvcmFnZSAmJiBldmVudC5rZXkgPT09IGtleSkge1xuICAgICAgY29uc3QgbmVlZFJlbW92ZUxpc3RlbmVyID0gYXdhaXQgbGlzdGVuZXIoKTtcbiAgICAgIGlmIChuZWVkUmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHdpbmRvd0xpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHdpbmRvd0xpc3RlbmVyLCBmYWxzZSk7XG59XG4iXX0=