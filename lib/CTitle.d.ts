import { ReactElement } from 'react';
export interface ICTitleProps {
    title: string;
    subtitle: string;
    height?: string | number;
}
declare const CTitle: ({ title, subtitle, height }: ICTitleProps) => ReactElement;
export default CTitle;
