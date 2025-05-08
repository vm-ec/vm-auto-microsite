import React from 'react';
import Alert from './Alert'; // Adjust the path if necessary

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'error', 'info'],
      },
    },
    message: {
      control: 'text',
    },
    onClose: {
      action: 'closed',
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'This is a success message!',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'This is a warning message!',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'This is an info message!',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'This is an error message!',
};
