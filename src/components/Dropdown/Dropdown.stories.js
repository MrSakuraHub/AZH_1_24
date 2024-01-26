import { Dropdown } from ".";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
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
    visible: true,
    divClassName: {},
    text1: "Send money",
    chevronDownStyleOverrideClassName: {},
    chevronDownColor: "#3D7064",
  },
};
