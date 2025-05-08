import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

export const Default = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const options = [
    { label: 'Checkbox 1', value: 'checkbox1' },
    { label: 'Checkbox 2', value: 'checkbox2' },
    { label: 'Checkbox 3', value: 'checkbox3' },
  ];

  return (
    <RadioButton
      options={options}
      selectedValues={selectedValues}
      onChange={setSelectedValues}
      name="storybook-checkbox"
    />
  );
};
