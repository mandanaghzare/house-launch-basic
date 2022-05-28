"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactLeaflet = require("react-leaflet");

var _leafletGeosearch = require("leaflet-geosearch");

require("./react-leaflet-geosearch.css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchControl = function SearchControl(props) {
  var map = (0, _reactLeaflet.useMap)();
  (0, _react.useEffect)(function () {
    var searchControl = new _leafletGeosearch.GeoSearchControl(_objectSpread({
      provider: props.provider
    }, props));
    console.log(props);
    map.addControl(searchControl);
    return function () {
      return map.removeControl(searchControl);
    };
  }, [map, props]);
  return null;
};

var _default = SearchControl;
exports["default"] = _default;