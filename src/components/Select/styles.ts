import styled, { css } from 'styled-components';
import palette from '../../theme/palette';

export const StyledSelect = styled.div`
  position: relative;
  width: 100%;
  line-height: 1.5;
  border: ${palette.borderThickness} solid ${palette.gray0};
  border-radius: ${palette.borderRadius};
  cursor: pointer;

  ${(props) =>
    props['aria-disabled'] &&
    css`
      color: ${palette.gray3};
      border-color: ${palette.gray3};
      cursor: not-allowed;

      & > * {
        pointer-events: none;
      }
    `}
`;

export const Display = styled.button`
  display: flex;
  width: 100%;
  padding: 0.5rem;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled.svg.attrs(({ revealed }: { revealed: boolean }) => ({
  revealed,
}))`
  width: 1.2rem;
  height: 1.2rem;
  margin-left: auto;
  transform: ${({ revealed }) =>
    revealed ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.25s ease-in-out;
  flex-shrink: 0;
`;

export const OptionDropdown = styled.div.attrs(
  ({ revealed }: { revealed: boolean }) => ({
    revealed,
  }),
)`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  display: flex;
  width: 100%;
  max-height: 11rem;
  flex-direction: column;
  text-align: left;
  border: ${palette.borderThickness} solid ${palette.gray0};
  border-radius: ${palette.borderRadius};
  overflow-y: auto;
  opacity: ${({ revealed }) => (revealed ? '1' : '0')};
  transform: ${({ revealed }) =>
    `translate3d(0, ${revealed ? '0' : '-10px'}, 0)`};
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
  pointer-events: ${({ revealed }) => (revealed ? 'all' : 'none')};
`;

export const Option = styled.button.attrs(
  ({ selected }: { selected: boolean }) => ({
    selected,
  }),
)`
  padding: 0.5rem;
  text-align: left;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:not(:last-child) {
    border-bottom: ${palette.borderThickness} solid ${palette.gray5};
  }

  &:hover {
    background-color: ${({ selected }) =>
      selected ? palette.primary : palette.gray8};
  }

  background-color: ${({ selected }) => selected && palette.primary};
  color: ${({ selected, disabled }) =>
    (selected && palette.textInvert) || (disabled && palette.gray3)};
`;
