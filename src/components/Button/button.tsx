import React, { ReactNode } from 'react'
import classnames from 'classnames'

export enum ButtonSizes {
  lg = 'lg',
  md = 'md',
  sm = 'sm',
}

export enum ButtonTypes {
  default = 'default',
  primary = 'primary',
  danger = 'danger',
  link = 'link',
}

interface BaseButtonProps {
  className?: string
  children?: ReactNode
  btnType?: ButtonTypes
  size?: ButtonSizes
  disabled?: boolean
  href?: string
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    btnType,
    size,
    href,
    disabled,
    className,
    ...restProps
  } = props
  const clsName = classnames(`react-ui-button ${className}`, {
    [`react-ui-button--type-${btnType}`]: true,
    [`react-ui-button--size-${size}`]: true,
    'react-ui-button--disabled': disabled,
  })
  if (btnType === ButtonTypes.link && href) {
    if(!restProps.type) {
      restProps.type = 'button'
    }
    return (
      <a href={href} className={clsName} {...(restProps as AnchorButtonProps)}>
        {children}
      </a>
    )
  }

  return (
    <button
      disabled={disabled}
      className={clsName}
      {...(restProps as NativeButtonProps)}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: ButtonSizes.md,
  btnType: ButtonTypes.default,
  disabled: false,
  children: '',
  className: '',
}

export default Button
