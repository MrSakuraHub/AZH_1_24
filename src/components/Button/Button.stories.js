import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["disabled", "pressed", "hover", "default"],
      control: { type: "select" },
    },
    priority: {
      options: ["primary", "secondary", "secodary", "tertiary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showLeftIcon: false,
    text: "BUTTON",
    showRightIcon: true,
    showIcon: true,
    property1: "disabled",
    priority: "primary",
    className: {},
    text1: "Send money",
  },
};
