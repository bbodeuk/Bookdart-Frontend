import { ErrorText, InputWrapper, StyledInput, StyledLabel } from './styles';
import { InputProps } from './types';

export default function Input({
  type = 'text',
  placeholder,
  required,
  pattern,
  minLength,
  maxLength,
  errorText,
  label,
  size,
  color = 'primary',
}: InputProps) {
  return (
    <InputWrapper>
      <StyledInput
        type={type}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        pattern={pattern}
        placeholder={placeholder || ' '}
        size={size}
        color={color}
      />
      <StyledLabel>{label}</StyledLabel>
      <ErrorText>{errorText}</ErrorText>
    </InputWrapper>
  );
}
