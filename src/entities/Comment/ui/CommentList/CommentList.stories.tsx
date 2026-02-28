import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {CommentList} from "./CommentList";
import avatarIcon from "shared/assets/test/storibook_avatar.jpg";

const data = [
    {
        id: "1",
        text: "comment",
        user: {
            id: "1",
            username: "admin",
            avatar: avatarIcon
        }
    },
    {
        id: "2",
        text: "comment 2",
        user: {
            id: "2",
            username: "user",
            avatar: avatarIcon
        }
    }
];

export default {
    title: "entities/Comment/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) =>
    <CommentList {...args} />;

export const PrimaryCommentList = Template.bind({});
PrimaryCommentList.args = {
    comments: data
};
export const LoadingCommentList = Template.bind({});
LoadingCommentList.args = {
    isLoading: true,
};
