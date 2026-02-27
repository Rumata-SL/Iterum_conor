import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Skeleton} from "./Skeleton";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) =>
    <Skeleton {...args} />;

export const NormalSkeleton = Template.bind({});
NormalSkeleton.args = {
    width: "100%",
    height: 200,
};
export const NormalSkeletonDark = Template.bind({});
NormalSkeletonDark.args = {
    width: "100%",
    height: 200,
};
NormalSkeletonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalSkeletonOrange = Template.bind({});
NormalSkeletonOrange.args = {
    width: "100%",
    height: 200,
};
NormalSkeletonOrange.decorators = [ThemeDecorator(Theme.ORANGE)];


export const CircleSkeleton = Template.bind({});
CircleSkeleton.args = {
    border: "50%",
    width: 100,
    height: 100,
};

export const CircleSkeletonDark = Template.bind({});
CircleSkeletonDark.args = {
    border: "50%",
    width: 100,
    height: 100,
};
CircleSkeletonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleSkeletonOrange = Template.bind({});
CircleSkeletonOrange.args = {
    border: "50%",
    width: 100,
    height: 100,
};
CircleSkeletonOrange.decorators = [ThemeDecorator(Theme.ORANGE)];