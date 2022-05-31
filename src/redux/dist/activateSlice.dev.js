"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deActive = exports.active = exports.activateSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var activateSlice = (0, _toolkit.createSlice)({
  name: 'activate',
  initialState: {
    value: true
  },
  reducers: {
    active: function active(state) {
      state.value = true;
    },
    deActive: function deActive(state) {
      state.value = false;
    }
  }
});
exports.activateSlice = activateSlice;
var _activateSlice$action = activateSlice.actions,
    active = _activateSlice$action.active,
    deActive = _activateSlice$action.deActive;
exports.deActive = deActive;
exports.active = active;
var _default = activateSlice.reducer;
exports["default"] = _default;