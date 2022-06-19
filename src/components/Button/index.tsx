import { MouseEvent } from 'react';
import { StyledButton } from './styles';
import { ButtonProps } from './types';

function Button({ size, variant, disabled, onAction, children }: ButtonProps) {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (disabled) {
      return;
    }
    onAction();
  };

  return (
    <StyledButton
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={(e: MouseEvent) => handleClick(e)}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  size: 'medium',
  disabled: false,
  variant: 'default',
};

export default Button;
