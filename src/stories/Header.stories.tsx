import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import Header from "../components/Header";

export default {
  title: "Example/Header",
  component: Header,
};

const Template: Story<ComponentProps<typeof Header>> = () => <Header />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
