import styled, { css } from 'styled-components';
import palette from '../../theme/palette';
import { ObjType } from './types';

const SIZES: ObjType = {
  small: css`
    font-size: 18px;
    min-width: 100px;
  `,
  medium: css`
    font-size: 20px;
    min-width: 200px;
  `,
  large: css`
    font-size: 22px;
    min-width: 300px;
  `,
};

const AddButton = css`
  border-radius: 50%;
  min-width: unset !important;
  width: 50px !important;
  height: 50px !important;
  background-color: ${palette.gray6};
`;

export const AddIconWrapper = styled.div`
  position: relative;
`;

export const HorizontalLine = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  width: 20px;
  height: 2px;
`;

export const VerticalLine = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  width: 2px;
  height: 20px;
`;

const VARIANTS: ObjType = {
  text: css`
    color: ${palette.primaryDark};
    &:hover {
      background-color: ${palette.backgroundElevated};
    }
    &:active {
      background-color: ${palette.backgroundElevated};
    }
  `,
  filled: css`
    color: ${palette.textInvert};
    background-color: ${palette.primaryLight};
    box-shadow: ${palette.boxShadow0};
    &:hover {
      background-color: ${palette.primary};
      box-shadow: ${palette.boxShadow1};
    }
  `,
  outlined: css`
    color: ${palette.primaryDark};
    border: ${palette.borderThickness} solid ${palette.primaryLight};
    &:hover {
      color: ${palette.primaryDark};
      border: ${palette.borderThickness} solid ${palette.primaryDark};
    }
    &:active {
      border: ${palette.borderThickness} solid ${palette.primaryDark};
    }
  `,
  add: css`
    ${AddButton}

    ${HorizontalLine},
    ${VerticalLine} {
      display: inline;
    }
  `,
};

export const StyledButton = styled.button.attrs(
  ({
    size,
    variant,
    disabled,
  }: {
    size: string;
    variant: string;
    disabled: boolean;
  }) => ({ size, variant, disabled }),
)`
  outline: none;
  border: none;
  border-radius: ${palette.borderRadius};
  cursor: pointer;
  padding: 0.8rem;
  height: fit-content !important;
  font-weight: 400;
  word-break: break-word;

  ${({ variant }) => VARIANTS[variant]}
  ${({ size }) => SIZES[size]}

  ${(props) =>
    !props.disabled &&
    css`
      &:active {
        transform: scale(0.99);
      }
    `}

  &:disabled {
    cursor: no-drop;
    opacity: 0.5;
    background: ${palette.gray5};
    color: ${palette.gray1};
  }

  & + & {
    margin-left: 20px;
  }
`;

export const Wrapper = styled.div``;
