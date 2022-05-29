"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactLeaflet = require("react-leaflet");

var _leafletGeosearch = require("leaflet-geosearch");

require("./react-leaflet-geosearch.css");

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SearchControl = function SearchControl(props) {
  var map = (0, _reactLeaflet.useMap)();

  var _useState = (0, _react.useState)('false'),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setActive = _useState2[1];

  (0, _react.useEffect)(function () {
    var mmm = document.getElementsByClassName("results");
    var length = mmm.innerHtml;
    console.log(length);
    mmm.addEventListener('click', function () {
      setActive(!isActive);
    });
  }, []);
  (0, _react.useEffect)(function () {
    var searchControl = new _leafletGeosearch.GeoSearchControl(_objectSpread({
      notFoundMessage: 'مکان مورد نظر یافت نشد',
      provider: props.provider
    }, props));
    map.addControl(searchControl);
    return function () {
      return map.removeControl(searchControl);
    };
  }, [map, props]);
  return null;
};

var _default = SearchControl;
exports["default"] = _default;