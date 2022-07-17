import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { ReactElement, useState } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export interface ICTitleProps {
	title: string;
	subtitle: string;
	height?: string | number;
}

const CTitle = ({ title, subtitle, height }: ICTitleProps): ReactElement => {
	return (
		<Flex justifyContent='space-between' mb={3} h={height ?? 'inherit'}>
			<Box minHeight='42px'>
				<Heading>{title}</Heading>
				<Text fontSize='sm' color='gray.400'>
					{subtitle}
				</Text>
			</Box>
			<ColorModeSwitcher />
		</Flex>
	);
};

export default CTitle;
