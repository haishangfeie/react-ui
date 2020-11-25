import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button, { ButtonProps,ButtonSizes, ButtonTypes } from './button'

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const defaultProps:ButtonProps = {
      onClick: jest.fn(),
    }
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass(
      'react-ui-button',
      'react-ui-button--size-md',
      'react-ui-button--type-default'
    )
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
    expect(element.disabled).toBeFalsy()
  })

  it('should render the correct component based on different props', () => {
    const props:ButtonProps = {
      size: ButtonSizes.sm,
      btnType: ButtonTypes.danger,
      className: 'test-cls',
      disabled: false,
      onClick: jest.fn(),
    }
    const wrapper = render(<Button {...props}>TEST</Button>)
    const element = wrapper.getByText('TEST') as HTMLButtonElement
    expect(element.tagName).toBe('BUTTON')
    expect(element).toHaveClass(
      'react-ui-button',
      'react-ui-button--size-sm',
      'react-ui-button--type-danger',
      'test-cls'
    )
    fireEvent.click(element)
    expect(props.onClick).toHaveBeenCalled()
    expect(element.disabled).toBeFalsy()
  })

  it('should render a link when btnType equals link and href is provided', () => {
    const props:ButtonProps = {
      btnType: ButtonTypes.link,
      onClick: jest.fn(),
      href:'https://www.baidu.com'
    }
    const wrapper = render(<Button {...props}>TEST</Button>)
    const element = wrapper.getByText('TEST') as HTMLAnchorElement
    expect(element.tagName).toBe('A')
    expect(element.href).toContain(props.href)
    expect(element).toHaveClass(
      'react-ui-button',
      'react-ui-button--type-link',
    )
    fireEvent.click(element)
    expect(props.onClick).toHaveBeenCalled()
  })

  it('should render disabled button when disabled set to true', () => {
    const props:ButtonProps = {
      size: ButtonSizes.sm,
      btnType: ButtonTypes.danger,
      className: 'test-cls',
      disabled: true,
      onClick: jest.fn(),
    }
    const wrapper = render(<Button {...props}>TEST</Button>)
    const element = wrapper.getByText('TEST') as HTMLButtonElement
    expect(element.tagName).toBe('BUTTON')
    expect(element).toHaveClass(
      'react-ui-button',
      'react-ui-button--size-sm',
      'react-ui-button--type-danger',
      'react-ui-button--disabled',
      'test-cls'
    )
    fireEvent.click(element)
    expect(props.onClick).not.toHaveBeenCalled()
    expect(element.disabled).toBeTruthy()
  })
})
