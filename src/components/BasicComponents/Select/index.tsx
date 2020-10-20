import React from 'react';
import MFormControl from '@material-ui/core/FormControl';
import MSelect, { SelectProps } from '@material-ui/core/Select';
import styles from './styles.module.scss';

interface InputOptions {
  value: string | number;
  title: string;
}

interface ISelectProps {
  inputLabel?: string;
  inputOptions: InputOptions[];
  labelClassName?: string;
}

const Select: React.FC<ISelectProps & SelectProps> = (props) => {
  const { inputLabel, inputOptions, labelClassName, ...restProps } = props;
  const labelClasses = styles.inputLabel + (labelClassName ? ` ${labelClassName}` : '');
  const optionsArray = inputOptions.map((opt) => (
    <option value={opt.value} key={opt.value}>
      {opt.title}
    </option>
  ));

  return (
    <>
      <span className={labelClasses}>{inputLabel}</span>
      <MFormControl variant="outlined" className={styles.formControl}>
        <MSelect native label={inputLabel} {...restProps}>
          {optionsArray}
        </MSelect>
      </MFormControl>
    </>
  );
};

export default Select;
