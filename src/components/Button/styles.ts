import styled, { css } from 'styled-components';
import { ObjType } from './types';
import palette from '../../theme/palette';

const SIZES: ObjType = {
  small: css`
    font-size: 10px;
    width: 100px;
    height: 100px;
  `,
  medium: css`
    font-size: 15px;
    width: 250px;
    height: 250px;
  `,
  large: css`
    font-size: 25px;
    width: 500px;
    height: 500px;
  `,
};

const VARIANTS: ObjType = {
  default: css`
    --button-color: ${palette.text};
    --button-bg-color: ${palette.primary}
    --button-hover-bg-color: ${palette.gray0};
  `,
  filled: css`
    --button-color: ${palette.textInvert};
    --button-bg-color: ${palette.primaryDark};
    --button-hover-bg-color: ${palette.gray0};

    &:hover {
      background: #339af0;
    }
    &:active {
      background: #1c7ed6;
    }
  `,
};

export const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: ${palette.borderRadius};
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  max-width: 100%;
  height: 2.25rem;
  font-size: 1rem;

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: ${palette.gray1};
  }

  ${({ variant }) => VARIANTS[variant]}
  ${({ size }) => SIZES[size]}
`;

export const Wrapper = styled.div``;
