"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focus = exports.outline = exports.colorScheme = void 0;
exports.colorScheme = {
    100: '#c4d8bb',
    200: '#9dbe8e',
    300: '#75a361',
    400: '#58903f',
    500: '#3a7c1d',
    600: '#34741a',
    700: '#2c6915',
    800: '#255f11',
    900: '#184c0a'
};
exports.outline = `2px solid ${exports.colorScheme['400']}`;
const boxShadow = 'none;';
exports.focus = {
    outline: exports.outline,
    boxShadow
};
