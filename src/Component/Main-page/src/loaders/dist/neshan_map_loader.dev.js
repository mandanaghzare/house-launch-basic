"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var BASE_URL = "https://static.neshan.org";
var DEFAULT_URL = "".concat(BASE_URL, "/sdk/leaflet/1.4.0/leaflet.js");

var _default = function _default(props) {
  var createScript = function createScript() {
    var onError = props.onError,
        onLoad = props.onLoad;
    var script = document.createElement("script");
    script.src = DEFAULT_URL;

    script.onload = function () {
      if (onLoad) onLoad();
      return;
    };

    script.onerror = function () {
      if (onError) onError();
      return;
    };

    document.body.appendChild(script);
  };

  return createScript();
};

exports["default"] = _default;