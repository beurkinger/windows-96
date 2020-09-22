import { h, FunctionComponent, Fragment, ComponentChild } from 'preact';

import style from './Slider.css';

interface Props {
  min?: number;
  disabled?: boolean;
  hasBoxIndicator?: boolean;
  id: string;
  isVertical?: boolean;
  label: string;
  labelMax?: string;
  labelMin?: string;
  onChange: (e: Event) => void;
  max?: number;
  step?: number;
  value: string;
}

const Slider: FunctionComponent<Props> = ({
  min,
  disabled = false,
  hasBoxIndicator = false,
  id,
  isVertical = false,
  label,
  labelMax = '',
  labelMin = '',
  onChange,
  max,
  step,
  value,
}: Props) => {
  const setVerticality = (input: ComponentChild) => {
    return isVertical ? <div className={style.isVertical}>{input}</div> : input;
  };

  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      {labelMin && <label htmlFor={id}>{labelMin}</label>}
      {setVerticality(
        <input
          className={`${style.slider} ${hasBoxIndicator ? style.hasBoxIndicator : ''}`}
          disabled={disabled}
          id={id}
          max={max}
          min={min}
          onChange={onChange}
          step={step}
          type="range"
          value={value}
        />
      )}
      {labelMax && <label htmlFor={id}>{labelMax}</label>}
    </Fragment>
  );
};

export default Slider;
