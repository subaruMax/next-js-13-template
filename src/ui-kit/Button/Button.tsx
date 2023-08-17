import cn from 'classnames';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { Icon, IconName } from '@app/ui-kit';

import s from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default';
  disabled?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  link?: { href: string; isExternal: boolean };
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  disabled,
  iconLeft,
  iconRight,
  link,
  className,
  ...buttonProps
}) => {
  const classNames = cn(
    s.root,
    s[variant],
    {
      [s.disabled]: disabled
    },
    className
  );

  const content = useMemo(() => {
    return (
      <>
        {iconLeft && <Icon className={s.icon} name={iconLeft} />}
        <div className={s.contentWrapper}>{children}</div>
        {iconRight && <Icon className={s.icon} name={iconRight} />}
      </>
    );
  }, [children, iconLeft, iconRight]);

  if (link?.href && link?.isExternal) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={classNames}
      >
        {content}
      </a>
    );
  }

  if (link?.href && !link?.isExternal) {
    return (
      <Link href={link.href}>
        <a href={link.href} className={classNames}>
          {content}
        </a>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classNames}
      {...buttonProps}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
