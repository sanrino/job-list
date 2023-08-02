import React from 'react';
import RemoveIcon from '../icons/RemoveIcon';

const Badge = ({
  variant = 'basic',
  colorScheme = 'light',
  children,

  onClear,
  onClick,
}) => (
  <button
    className={`
    badge badge--${variant}
    badge--${colorScheme}
    `}
    onClick={onClick}
  >
    <span>
      {children}
    </span>
    {variant === 'clearable' && (
      <div className='badge-remover' onClick={onClear}>
        <RemoveIcon />
      </div>
    )}
  </button>
);

export { Badge };