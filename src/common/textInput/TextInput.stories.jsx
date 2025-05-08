import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['text', 'password', 'email', 'number'] },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    maxLength: { control: 'number' },
    errorMessage: { control: 'text' },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default',
  label: 'Name',
  type: 'text',
  value: '',
  placeholder: 'Enter your name',
  required: false,
  maxLength: 50,
  errorMessage: '',
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'with-error',
  label: 'Name',
  type: 'text',
  value: '',
  placeholder: 'Enter your name',
  required: true,
  errorMessage: 'This field is required.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled',
  label: 'Name',
  type: 'text',
  value: '',
  placeholder: 'Disabled input',
  disabled: true,
};
