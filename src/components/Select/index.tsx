import { useEffect, useRef, useState } from 'react';
import { Display, Icon, Option, OptionDropdown, StyledSelect } from './styles';
import { SelectProps } from './types';

export default function Select({ options, disabled, onChange }: SelectProps) {
  const [current, setCurrent] = useState(
    options.find((x) => x.selected) || options[0],
  );
  const [revealed, setRevealed] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onChange?.(current);
  }, [current]);

  useEffect(() => {
    const handleClick = ({ target }: MouseEvent) => {
      if (
        !selectRef.current ||
        !(target instanceof Node) ||
        selectRef.current.contains(target)
      ) {
        return;
      }

      setRevealed(false);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <StyledSelect
      aria-disabled={disabled}
      ref={selectRef}
      // TODO: Add KeyDown event handler
    >
      <Display
        onClick={() => {
          setRevealed((x) => !x);
        }}
      >
        {current.value}
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          revealed={revealed}
        >
          <path d="M24 30 14 20.05H34Z" />
        </Icon>
      </Display>
      <OptionDropdown revealed={revealed}>
        {options.map(({ value, key, disabled: optionDisabled, hidden }) => (
          <Option
            key={key}
            disabled={optionDisabled}
            hidden={hidden}
            selected={current.key === key}
            onClick={() => {
              setCurrent({ value, key });
            }}
          >
            {value}
          </Option>
        ))}
      </OptionDropdown>
    </StyledSelect>
  );
}
