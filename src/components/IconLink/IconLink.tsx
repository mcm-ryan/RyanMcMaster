import React from 'react';
import { IconLinkProps } from './IconLink.types'

export const IconLink: React.FC<IconLinkProps> = ({ svg, href, altText = "Icon" }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={altText}>
      {svg}
    </a>
  );
};