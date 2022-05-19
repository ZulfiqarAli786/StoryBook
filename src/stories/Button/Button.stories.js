// import Component from Component Folder

import Button from "./Button";

//  Default Valies Of The Component
export default {
  title: "Stories/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick clicks" } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({}); // To Bind Components

// default Values of red Button *** And Write Down the propertyName that we have pass as a props
Red.args = {
  background: "red",
  label: "Press me Default",
  size: "md",
  color: "#fff",
};

// to Create A Multiple Template Of Btn
export const Green = Template.bind({});
Green.args = {
  background: "green",
  label: "Press me green",
  size: "md",
  color: "#fff",
};

export const Purple = Template.bind({});
Purple.args = {
  background: "purple",
  label: "Press me purple",
  size: "md",
  color: "#fff",
};
