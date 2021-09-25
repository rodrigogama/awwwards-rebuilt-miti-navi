import React, { AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';
import { TextTranslateEffect } from '../TextTranslateEffect';
import { LinkTranslateEffect } from './styles';

type FooterAnimatedLinkProps = {
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const AnimatedLink = React.forwardRef<
  HTMLAnchorElement,
  FooterAnimatedLinkProps
>((props, ref) => {
  const { children, href, ...otherProps } = props;
  return (
    <NextLink href={href} passHref>
      <LinkTranslateEffect ref={ref} {...otherProps}>
        <TextTranslateEffect
          textProps={{ className: 'animated-text-item top-5' }}
          textHoverProps={{ className: 'animated-text-item__hover' }}
        >
          {children}
        </TextTranslateEffect>
      </LinkTranslateEffect>
    </NextLink>
  );
});

AnimatedLink.displayName = 'AnimatedLink';
