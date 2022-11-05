import React from 'react';
import cn from '../../node_modules/classnames/index';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({
  size = 'm',
  children,
  href,
  color = 'ghost',
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(className, styles.tag, styles[size], styles[color])}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
