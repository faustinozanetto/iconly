import clsx from 'clsx';
import * as React from 'react';

type AvailableColorSchemes =
  | 'primary'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

type ColorSchemes = {
  [key in AvailableColorSchemes]: { outline: string; solid: string };
};

const PARSED_COLOR_SCHEMES: ColorSchemes = {
  primary: {
    outline:
      'hover:bg-primary-300 hover:text-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:text-primary-200 dark:focus:ring-primary-500',
    solid:
      'bg-primary-200 text-primary-800 hover:bg-primary-300 focus:ring-primary-300 dark:bg-primary-600 dark:text-primary-200',
  },
  red: {
    outline:
      'hover:bg-red-300 hover:text-red-800 focus:ring-red-300 dark:bg-red-600 dark:text-red-200 dark:focus:ring-red-500',
    solid: 'bg-red-200 text-red-800 hover:bg-red-300 focus:ring-red-300 dark:bg-red-600 dark:text-red-200',
  },
  pink: {
    outline:
      'hover:bg-pink-300 hover:text-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:text-pink-200 dark:focus:ring-pink-500',
    solid: 'bg-pink-200 text-pink-800 hover:bg-pink-300 focus:ring-pink-300 dark:bg-pink-600 dark:text-pink-200',
  },
  orange: {
    outline:
      'hover:bg-orange-300 hover:text-orange-800 focus:ring-orange-300 dark:bg-orange-600 dark:text-orange-200 dark:focus:ring-orange-500',
    solid:
      'bg-orange-200 text-orange-800 hover:bg-orange-300 focus:ring-orange-300 dark:bg-orange-600 dark:text-orange-200',
  },
  yellow: {
    outline:
      'hover:bg-yellow-300 hover:text-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-yellow-200 dark:focus:ring-yellow-500',
    solid:
      'bg-yellow-200 text-yellow-800 hover:bg-yellow-300 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-yellow-200',
  },
  green: {
    outline:
      'hover:bg-green-300 hover:text-green-800 focus:ring-green-300 dark:bg-green-600 dark:text-green-200 dark:focus:ring-green-500',
    solid: 'bg-green-200 text-green-800 hover:bg-green-300 focus:ring-green-300 dark:bg-green-600 dark:text-green-200',
  },
  blue: {
    outline:
      'hover:bg-blue-300 hover:text-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:text-blue-200 dark:focus:ring-blue-500',
    solid: 'bg-blue-200 text-blue-800 hover:bg-blue-300 focus:ring-blue-300 dark:bg-blue-600 dark:text-blue-200',
  },
  indigo: {
    outline:
      'hover:bg-indigo-300 hover:text-indigo-800 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-indigo-200 dark:focus:ring-indigo-500',
    solid:
      'bg-indigo-200 text-indigo-800 hover:bg-indigo-300 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-indigo-200',
  },
  purple: {
    outline:
      'hover:bg-purple-300 hover:text-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:text-purple-200 dark:focus:ring-purple-500',
    solid:
      'bg-purple-200 text-purple-800 hover:bg-purple-300 focus:ring-purple-300 dark:bg-purple-600 dark:text-purple-200',
  },
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  /** Optional: Left icon of the button. */
  leftIcon?: JSX.Element;
  /** Optional: Right icon of the button. */
  rightIcon?: JSX.Element;
  /** Optional: Size of the button, defaults to md. */
  size?: 'sm' | 'md' | 'lg';
  /** Optional: Variant of the button, defaults to solid. */
  variant?: 'outline' | 'solid';
  /** Optional: Color scheme of the button, defaults to primary. */
  colorScheme?: AvailableColorSchemes;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, leftIcon, rightIcon, colorScheme = 'primary', size = 'md', variant = 'solid', ...rest } = props;

  const getButtonSizes = (): string => {
    switch (size) {
      case 'sm':
        return 'py-2.5 px-3 text-base';
      case 'md':
        return 'px-5 py-2.5 text-md';
      case 'lg':
        return 'px-10 py-3.5 text-lg';
      default:
        return 'py-3 px-2.5 text-base';
    }
  };

  const getButtonVariants = (): string => {
    return variant === 'solid' ? PARSED_COLOR_SCHEMES[colorScheme].solid : PARSED_COLOR_SCHEMES[colorScheme].outline;
  };

  const { className, ...excludedRest } = rest;

  return (
    <button
      ref={ref}
      type="button"
      className={clsx(
        `inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus:outline-none focus:ring-4`,
        getButtonSizes(),
        getButtonVariants(),
        rest.className
      )}
      {...excludedRest}
    >
      {leftIcon && <div className="inline-flex shrink-0 self-center pr-1">{leftIcon}</div>}
      {children}
      {rightIcon && <div className="inline-flex shrink-0 self-center pl-1">{rightIcon}</div>}
    </button>
  );
});

Button.displayName = 'Button';
