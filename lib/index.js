"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const theme_1 = require("./theme");
const cutlerTheme = (0, react_1.extendTheme)((0, react_1.withDefaultColorScheme)({ colorScheme: 'primary' }), {
    colors: {
        primary: theme_1.colorScheme
    },
    fonts: {
        body: 'Inconsolata'
    },
    styles: {
        global: {
            body: {
                fontSize: '20px'
            }
        }
    },
    components: {
        Accordion: {
            baseStyle: {
                button: {
                    _focus: theme_1.focus
                }
            }
        },
        Input: {
            defaultProps: {
                focusBorderColor: theme_1.colorScheme['500']
            }
        },
        Tabs: {
            baseStyle: {
                tab: {
                    _focus: theme_1.focus
                }
            }
        }
    }
});
exports.default = cutlerTheme;
