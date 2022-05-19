import Container from "./Container";

//  Default Valies Of The Component
export default {
  title: "Stories/Container",
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({}); // To Bind Components

Default.args = {
  width: "90%",
  height: "10vh",
  bg: "",
  border: true,
  shadow: true,
  size: "md",
};
