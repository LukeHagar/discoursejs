/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListUserPrivateMessagesRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;
}

export class ListUserPrivateMessagesParticipants extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "extras" })
    extras?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "primary_group_id" })
    primaryGroupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId?: number;
}

export class ListUserPrivateMessagesPosters extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "extras" })
    extras?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "primary_group_id" })
    primaryGroupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId?: number;
}

export class ListUserPrivateMessagesTopics extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allowed_user_count" })
    allowedUserCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "archetype" })
    archetype?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "archived" })
    archived?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "bookmarked" })
    bookmarked?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "bumped" })
    bumped?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "bumped_at" })
    bumpedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "category_id" })
    categoryId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "closed" })
    closed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "fancy_title" })
    fancyTitle?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "featured_link" })
    featuredLink?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "has_summary" })
    hasSummary?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "highest_post_number" })
    highestPostNumber?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "image_url" })
    imageUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_posted_at" })
    lastPostedAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_poster_username" })
    lastPosterUsername?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_read_post_number" })
    lastReadPostNumber?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "like_count" })
    likeCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "liked" })
    liked?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_level" })
    notificationLevel?: number;

    @SpeakeasyMetadata({ elemType: ListUserPrivateMessagesParticipants })
    @Expose({ name: "participants" })
    @Type(() => ListUserPrivateMessagesParticipants)
    participants?: ListUserPrivateMessagesParticipants[];

    @SpeakeasyMetadata()
    @Expose({ name: "pinned" })
    pinned?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "pinned_globally" })
    pinnedGlobally?: boolean;

    @SpeakeasyMetadata({ elemType: ListUserPrivateMessagesPosters })
    @Expose({ name: "posters" })
    @Type(() => ListUserPrivateMessagesPosters)
    posters?: ListUserPrivateMessagesPosters[];

    @SpeakeasyMetadata()
    @Expose({ name: "posts_count" })
    postsCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "reply_count" })
    replyCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "unpinned" })
    unpinned?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "unread_posts" })
    unreadPosts?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "unseen" })
    unseen?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "views" })
    views?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "visible" })
    visible?: boolean;
}

export class ListUserPrivateMessagesTopicList extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "can_create_topic" })
    canCreateTopic?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "draft" })
    draft?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "draft_key" })
    draftKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "draft_sequence" })
    draftSequence?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "per_page" })
    perPage?: number;

    @SpeakeasyMetadata({ elemType: ListUserPrivateMessagesTopics })
    @Expose({ name: "topics" })
    @Type(() => ListUserPrivateMessagesTopics)
    topics?: ListUserPrivateMessagesTopics[];
}

export class ListUserPrivateMessagesUsers extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "avatar_template" })
    avatarTemplate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username?: string;
}

/**
 * private messages
 */
export class ListUserPrivateMessagesResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "primary_groups" })
    primaryGroups?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "topic_list" })
    @Type(() => ListUserPrivateMessagesTopicList)
    topicList?: ListUserPrivateMessagesTopicList;

    @SpeakeasyMetadata({ elemType: ListUserPrivateMessagesUsers })
    @Expose({ name: "users" })
    @Type(() => ListUserPrivateMessagesUsers)
    users?: ListUserPrivateMessagesUsers[];
}

export class ListUserPrivateMessagesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * private messages
     */
    @SpeakeasyMetadata()
    object?: ListUserPrivateMessagesResponseBody;
}
