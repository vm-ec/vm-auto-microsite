import React, { useState } from 'react';
import CheckboxGroup from './CheckBox';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
};

export const Default = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const options = [
    { label: 'Checkbox 1', value: 'checkbox1' },
    { label: 'Checkbox 2', value: 'checkbox2' },
    { label: 'Checkbox 3', value: 'checkbox3' },
  ];

  return (
    <CheckboxGroup
      options={options}
      selectedValues={selectedValues}
      onChange={setSelectedValues}
      color="#007bff" // Blue
      name="storybook-checkbox"
    />
  );
};
