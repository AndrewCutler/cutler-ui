import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
var CTitle = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, height = _a.height;
    return (React.createElement(Flex, { justifyContent: 'space-between', mb: 3, h: height !== null && height !== void 0 ? height : 'inherit' },
        React.createElement(Box, { minHeight: '42px' },
            React.createElement(Heading, null, title),
            React.createElement(Text, { fontSize: 'sm', color: 'gray.400' }, subtitle)),
        React.createElement(ColorModeSwitcher, null)));
};
export default CTitle;
//# sourceMappingURL=CTitle.js.map