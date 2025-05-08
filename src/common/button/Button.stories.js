import React from 'react';
import Button from './Button'; // Adjust the path as needed

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component with various states such as primary, secondary, disabled, and more.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    onClick: { 
      action: 'clicked',
      description: 'Callback when the button is clicked',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      description: 'Color variant of the button',
    },
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'outline', 'link'],
      },
      description: 'Style variant of the button',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Size of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the button will take the full width of its container',
    },
    shape: {
        control: {
            type: 'select',
            options: ['rounded-0', 'rounded-5', 'rounded-10', 'rounded-pill'],
          },
      description: 'Shape of the button, e.g., rounded',
    },
    as: {
      control: {
        type: 'select',
        options: ['a', 'button'],
      },
      description: 'The HTML element to render as',
    },
    href: {
      control: 'text',
      description: 'URL to navigate to when using an anchor',
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
      description: 'Type attribute of the button',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  color: 'primary',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Secondary Button',
//   color: 'secondary',
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   label: 'Disabled Button',
//   disabled: true,
// };

// export const FullWidth = Template.bind({});
// FullWidth.args = {
//   label: 'Full Width Button',
//   fullWidth: true,
// };

// export const LinkButton = Template.bind({});
// LinkButton.args = {
//   label: 'Link Button',
//   as: 'a',
//   href: 'https://example.com',
// };

// export const CustomShape = Template.bind({});
// CustomShape.args = {
//   label: 'Custom Shape Button',
//   shape: 'rounded-pill',
// };
