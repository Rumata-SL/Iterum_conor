import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Avatar} from "shared/ui/Avatar/ui/Avatar";
import avatarImg from "../../../assets/test/storibook_avatar.jpg";

export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarSmall = Template.bind({});
AvatarSmall.args = {
    src: avatarImg,
    size: 30,
};

export const AvatarNormal = Template.bind({});
AvatarNormal.args = {
    src: avatarImg,
};

export const AvatarLarge = Template.bind({});
AvatarLarge.args = {
    src: avatarImg,
    size: 300,
};