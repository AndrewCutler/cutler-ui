var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
export var ColorModeSwitcher = function (props) {
    var toggleColorMode = useColorMode().toggleColorMode;
    var text = useColorModeValue('dark', 'light');
    var SwitchIcon = useColorModeValue(FaMoon, FaSun);
    return (React.createElement(IconButton, __assign({ size: 'md', fontSize: 'lg', variant: 'ghost', color: 'current', marginLeft: '2', onClick: toggleColorMode, icon: React.createElement(SwitchIcon, null), "aria-label": "Switch to ".concat(text, " mode") }, props)));
};
//# sourceMappingURL=ColorModeSwitcher.js.map