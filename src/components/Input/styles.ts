import styled from 'styled-components';
import { Colors } from './types';
import palette from '../../theme/palette';

export const InputWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  margin: 8px;
`;

export const StyledInput = styled.input.attrs(
  ({ color }: { color: Colors }) => ({
    color,
  }),
)`
  margin-top: 16px;
  padding: 4px 0 5px;

  color: ${palette.textHighlight};

  border-bottom: 1.5px solid ${palette.gray2};

  background-color: ${palette.backgroundBase};
  outline: 0;

  &::placeholder {
    opacity: 0;
  }

  input:-ms-input-placeholder {
    opacity: 0;
  }

  &:focus {
    border-color: ${({ color }) => palette[color]};

    &::placeholder {
      opacity: 1;
    }

    input:-ms-input-placeholder {
      opacity: 1;
    }
  }

  &:invalid {
    border-color: ${palette.warningDark};
  }
`;

export const StyledLabel = styled.label`
  color: ${palette.gray2};
  position: absolute;
  top: 1rem;
  line-height: 1.5;
  display: block;
  transform: translate3d(0, 0, 0);
  transition: font-size 0.15s ease-in-out, transform 0.15s ease-in-out;

  ${StyledInput}:focus + &&,
  ${StyledInput}:not(:placeholder-shown) + && {
    font-size: 0.7rem;
    transform: translate3d(0, -0.8rem, 0);
  }
`;

export const ErrorText = styled.div`
  margin-top: 3px;
  opacity: 0;
  ${StyledInput}:invalid ~ && {
    color: ${palette.warningDark};
    opacity: 1;
  }
`;
