import { MouseEvent, useCallback } from 'react';
import {
  StyledButton,
  HorizontalLine,
  VerticalLine,
  AddIconWrapper,
} from './styles';
import { ButtonProps } from './types';

function Button({ size, variant, disabled, onAction, children }: ButtonProps) {
  const handleClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (disabled) {
      return;
    }
    onAction?.(e);
  }, []);

  return (
    <StyledButton
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={(e: MouseEvent) => handleClick(e)}
    >
      {children}
      <AddIconWrapper>
        <HorizontalLine />
        <VerticalLine />
      </AddIconWrapper>
    </StyledButton>
  );
}

Button.defaultProps = {
  size: 'small',
  disabled: false,
  variant: 'text',
};

export default Button;
