// SelectInput.stories.js
import React, { useState } from 'react';
import SelectInput from './SelectInput';

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  
  return (
    <SelectInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'select-input',
  label: 'Choose an option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  disabled: false,
  required: true,
  errorMessage: '',
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'select-input-error',
  label: 'Choose an option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  disabled: false,
  required: true,
  errorMessage: 'This field is required.',
};
