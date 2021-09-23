import { HTMLAttributes } from 'react';
import { TextWrapper, Text, TextHover } from './styles';

export const TextTranslateEffect: React.FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  ...props
}) => (
  <TextWrapper {...props}>
    <Text>{children}</Text>
    <TextHover>{children}</TextHover>
  </TextWrapper>
);
