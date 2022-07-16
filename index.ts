import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { colorScheme } from './theme';

const cutlerTheme = extendTheme(withDefaultColorScheme({ colorScheme: 'primary' }), {
    colors: {
        primary: colorScheme
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
                    _focus: focus
                }
            }
        },
        Input: {
            defaultProps: {
                focusBorderColor: colorScheme['500']
            }
        },
        Tabs: {
            baseStyle: {
                tab: {
                    _focus: focus
                }
            }
        }
    }
});

export default cutlerTheme;
