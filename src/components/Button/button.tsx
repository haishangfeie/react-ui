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

const Button: React.FC<BaseButtonProps> = (props) => {
  const { children, btnType, size, href, disabled } = props
  const clsName = classnames('react-ui-button', {
    [`react-ui-button--${btnType}`]: true,
    [`react-ui-button--${size}`]: true,
    'react-ui-button--disabled': disabled,
  })
  if (btnType === ButtonTypes.link && href) {
    return (
      <a href={href} className={clsName}>
        {children}
      </a>
    )
  }

  return (
    <button disabled={disabled} className={clsName}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: ButtonSizes.lg,
  btnType: ButtonTypes.default,
  disabled: false,
  children: '',
  className: '',
}

export default Button
