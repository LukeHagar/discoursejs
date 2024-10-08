/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ListTopTopicsRequest = {
  apiKey: string;
  apiUsername: string;
  /**
   * Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily`
   */
  period?: string | undefined;
};

export type ListTopTopicsPosters = {
  description?: string | undefined;
  extras?: string | null | undefined;
  primaryGroupId?: string | null | undefined;
  userId?: number | undefined;
};

export type ListTopTopicsTopics = {
  archetype?: string | undefined;
  archived?: boolean | undefined;
  bookmarked?: boolean | undefined;
  bumped?: boolean | undefined;
  bumpedAt?: string | undefined;
  categoryId?: number | undefined;
  closed?: boolean | undefined;
  createdAt?: string | undefined;
  fancyTitle?: string | undefined;
  featuredLink?: string | null | undefined;
  hasSummary?: boolean | undefined;
  highestPostNumber?: number | undefined;
  id?: number | undefined;
  imageUrl?: string | null | undefined;
  lastPostedAt?: string | undefined;
  lastPosterUsername?: string | undefined;
  lastReadPostNumber?: number | undefined;
  likeCount?: number | undefined;
  liked?: boolean | undefined;
  notificationLevel?: number | undefined;
  opLikeCount?: number | undefined;
  pinned?: boolean | undefined;
  pinnedGlobally?: boolean | undefined;
  posters?: Array<ListTopTopicsPosters> | undefined;
  postsCount?: number | undefined;
  replyCount?: number | undefined;
  slug?: string | undefined;
  title?: string | undefined;
  unpinned?: boolean | undefined;
  unreadPosts?: number | undefined;
  unseen?: boolean | undefined;
  views?: number | undefined;
  visible?: boolean | undefined;
};

export type ListTopTopicsTopicList = {
  canCreateTopic?: boolean | undefined;
  draft?: string | null | undefined;
  draftKey?: string | undefined;
  draftSequence?: number | undefined;
  forPeriod?: string | undefined;
  perPage?: number | undefined;
  topics?: Array<ListTopTopicsTopics> | undefined;
};

export type ListTopTopicsUsers = {
  avatarTemplate?: string | undefined;
  id?: number | undefined;
  name?: string | undefined;
  username?: string | undefined;
};

/**
 * response
 */
export type ListTopTopicsResponseBody = {
  primaryGroups?: Array<any> | undefined;
  topicList?: ListTopTopicsTopicList | undefined;
  users?: Array<ListTopTopicsUsers> | undefined;
};

/** @internal */
export const ListTopTopicsRequest$inboundSchema: z.ZodType<
  ListTopTopicsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "Api-Key": z.string(),
  "Api-Username": z.string(),
  period: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "Api-Key": "apiKey",
    "Api-Username": "apiUsername",
  });
});

/** @internal */
export type ListTopTopicsRequest$Outbound = {
  "Api-Key": string;
  "Api-Username": string;
  period?: string | undefined;
};

/** @internal */
export const ListTopTopicsRequest$outboundSchema: z.ZodType<
  ListTopTopicsRequest$Outbound,
  z.ZodTypeDef,
  ListTopTopicsRequest
> = z.object({
  apiKey: z.string(),
  apiUsername: z.string(),
  period: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    apiKey: "Api-Key",
    apiUsername: "Api-Username",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTopTopicsRequest$ {
  /** @deprecated use `ListTopTopicsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTopTopicsRequest$inboundSchema;
  /** @deprecated use `ListTopTopicsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTopTopicsRequest$outboundSchema;
  /** @deprecated use `ListTopTopicsRequest$Outbound` instead. */
  export type Outbound = ListTopTopicsRequest$Outbound;
}

/** @internal */
export const ListTopTopicsPosters$inboundSchema: z.ZodType<
  ListTopTopicsPosters,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string().optional(),
  extras: z.nullable(z.string()).optional(),
  primary_group_id: z.nullable(z.string()).optional(),
  user_id: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "primary_group_id": "primaryGroupId",
    "user_id": "userId",
  });
});

/** @internal */
export type ListTopTopicsPosters$Outbound = {
  description?: string | undefined;
  extras?: string | null | undefined;
  primary_group_id?: string | null | undefined;
  user_id?: number | undefined;
};

/** @internal */
export const ListTopTopicsPosters$outboundSchema: z.ZodType<
  ListTopTopicsPosters$Outbound,
  z.ZodTypeDef,
  ListTopTopicsPosters
> = z.object({
  description: z.string().optional(),
  extras: z.nullable(z.string()).optional(),
  primaryGroupId: z.nullable(z.string()).optional(),
  userId: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    primaryGroupId: "primary_group_id",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTopTopicsPosters$ {
  /** @deprecated use `ListTopTopicsPosters$inboundSchema` instead. */
  export const inboundSchema = ListTopTopicsPosters$inboundSchema;
  /** @deprecated use `ListTopTopicsPosters$outboundSchema` instead. */
  export const outboundSchema = ListTopTopicsPosters$outboundSchema;
  /** @deprecated use `ListTopTopicsPosters$Outbound` instead. */
  export type Outbound = ListTopTopicsPosters$Outbound;
}

/** @internal */
export const ListTopTopicsTopics$inboundSchema: z.ZodType<
  ListTopTopicsTopics,
  z.ZodTypeDef,
  unknown
> = z.object({
  archetype: z.string().optional(),
  archived: z.boolean().optional(),
  bookmarked: z.boolean().optional(),
  bumped: z.boolean().optional(),
  bumped_at: z.string().optional(),
  category_id: z.number().int().optional(),
  closed: z.boolean().optional(),
  created_at: z.string().optional(),
  fancy_title: z.string().optional(),
  featured_link: z.nullable(z.string()).optional(),
  has_summary: z.boolean().optional(),
  highest_post_number: z.number().int().optional(),
  id: z.number().int().optional(),
  image_url: z.nullable(z.string()).optional(),
  last_posted_at: z.string().optional(),
  last_poster_username: z.string().optional(),
  last_read_post_number: z.number().int().optional(),
  like_count: z.number().int().optional(),
  liked: z.boolean().optional(),
  notification_level: z.number().int().optional(),
  op_like_count: z.number().int().optional(),
  pinned: z.boolean().optional(),
  pinned_globally: z.boolean().optional(),
  posters: z.array(z.lazy(() => ListTopTopicsPosters$inboundSchema)).optional(),
  posts_count: z.number().int().optional(),
  reply_count: z.number().int().optional(),
  slug: z.string().optional(),
  title: z.string().optional(),
  unpinned: z.boolean().optional(),
  unread_posts: z.number().int().optional(),
  unseen: z.boolean().optional(),
  views: z.number().int().optional(),
  visible: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "bumped_at": "bumpedAt",
    "category_id": "categoryId",
    "created_at": "createdAt",
    "fancy_title": "fancyTitle",
    "featured_link": "featuredLink",
    "has_summary": "hasSummary",
    "highest_post_number": "highestPostNumber",
    "image_url": "imageUrl",
    "last_posted_at": "lastPostedAt",
    "last_poster_username": "lastPosterUsername",
    "last_read_post_number": "lastReadPostNumber",
    "like_count": "likeCount",
    "notification_level": "notificationLevel",
    "op_like_count": "opLikeCount",
    "pinned_globally": "pinnedGlobally",
    "posts_count": "postsCount",
    "reply_count": "replyCount",
    "unread_posts": "unreadPosts",
  });
});

/** @internal */
export type ListTopTopicsTopics$Outbound = {
  archetype?: string | undefined;
  archived?: boolean | undefined;
  bookmarked?: boolean | undefined;
  bumped?: boolean | undefined;
  bumped_at?: string | undefined;
  category_id?: number | undefined;
  closed?: boolean | undefined;
  created_at?: string | undefined;
  fancy_title?: string | undefined;
  featured_link?: string | null | undefined;
  has_summary?: boolean | undefined;
  highest_post_number?: number | undefined;
  id?: number | undefined;
  image_url?: string | null | undefined;
  last_posted_at?: string | undefined;
  last_poster_username?: string | undefined;
  last_read_post_number?: number | undefined;
  like_count?: number | undefined;
  liked?: boolean | undefined;
  notification_level?: number | undefined;
  op_like_count?: number | undefined;
  pinned?: boolean | undefined;
  pinned_globally?: boolean | undefined;
  posters?: Array<ListTopTopicsPosters$Outbound> | undefined;
  posts_count?: number | undefined;
  reply_count?: number | undefined;
  slug?: string | undefined;
  title?: string | undefined;
  unpinned?: boolean | undefined;
  unread_posts?: number | undefined;
  unseen?: boolean | undefined;
  views?: number | undefined;
  visible?: boolean | undefined;
};

/** @internal */
export const ListTopTopicsTopics$outboundSchema: z.ZodType<
  ListTopTopicsTopics$Outbound,
  z.ZodTypeDef,
  ListTopTopicsTopics
> = z.object({
  archetype: z.string().optional(),
  archived: z.boolean().optional(),
  bookmarked: z.boolean().optional(),
  bumped: z.boolean().optional(),
  bumpedAt: z.string().optional(),
  categoryId: z.number().int().optional(),
  closed: z.boolean().optional(),
  createdAt: z.string().optional(),
  fancyTitle: z.string().optional(),
  featuredLink: z.nullable(z.string()).optional(),
  hasSummary: z.boolean().optional(),
  highestPostNumber: z.number().int().optional(),
  id: z.number().int().optional(),
  imageUrl: z.nullable(z.string()).optional(),
  lastPostedAt: z.string().optional(),
  lastPosterUsername: z.string().optional(),
  lastReadPostNumber: z.number().int().optional(),
  likeCount: z.number().int().optional(),
  liked: z.boolean().optional(),
  notificationLevel: z.number().int().optional(),
  opLikeCount: z.number().int().optional(),
  pinned: z.boolean().optional(),
  pinnedGlobally: z.boolean().optional(),
  posters: z.array(z.lazy(() => ListTopTopicsPosters$outboundSchema))
    .optional(),
  postsCount: z.number().int().optional(),
  replyCount: z.number().int().optional(),
  slug: z.string().optional(),
  title: z.string().optional(),
  unpinned: z.boolean().optional(),
  unreadPosts: z.number().int().optional(),
  unseen: z.boolean().optional(),
  views: z.number().int().optional(),
  visible: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    bumpedAt: "bumped_at",
    categoryId: "category_id",
    createdAt: "created_at",
    fancyTitle: "fancy_title",
    featuredLink: "featured_link",
    hasSummary: "has_summary",
    highestPostNumber: "highest_post_number",
    imageUrl: "image_url",
    lastPostedAt: "last_posted_at",
    lastPosterUsername: "last_poster_username",
    lastReadPostNumber: "last_read_post_number",
    likeCount: "like_count",
    notificationLevel: "notification_level",
    opLikeCount: "op_like_count",
    pinnedGlobally: "pinned_globally",
    postsCount: "posts_count",
    replyCount: "reply_count",
    unreadPosts: "unread_posts",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTopTopicsTopics$ {
  /** @deprecated use `ListTopTopicsTopics$inboundSchema` instead. */
  export const inboundSchema = ListTopTopicsTopics$inboundSchema;
  /** @deprecated use `ListTopTopicsTopics$outboundSchema` instead. */
  export const outboundSchema = ListTopTopicsTopics$outboundSchema;
  /** @deprecated use `ListTopTopicsTopics$Outbound` instead. */
  export type Outbound = ListTopTopicsTopics$Outbound;
}

/** @internal */
export const ListTopTopicsTopicList$inboundSchema: z.ZodType<
  ListTopTopicsTopicList,
  z.ZodTypeDef,
  unknown
> = z.object({
  can_create_topic: z.boolean().optional(),
  draft: z.nullable(z.string()).optional(),
  draft_key: z.string().optional(),
  draft_sequence: z.number().int().optional(),
  for_period: z.string().optional(),
  per_page: z.number().int().optional(),
  topics: z.array(z.lazy(() => ListTopTopicsTopics$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "can_create_topic": "canCreateTopic",
    "draft_key": "draftKey",
    "draft_sequence": "draftSequence",
    "for_period": "forPeriod",
    "per_page": "perPage",
  });
});

/** @internal */
export type ListTopTopicsTopicList$Outbound = {
  can_create_topic?: boolean | undefined;
  draft?: string | null | undefined;
  draft_key?: string | undefined;
  draft_sequence?: number | undefined;
  for_period?: string | undefined;
  per_page?: number | undefined;
  topics?: Array<ListTopTopicsTopics$Outbound> | undefined;
};

/** @internal */
export const ListTopTopicsTopicList$outboundSchema: z.ZodType<
  ListTopTopicsTopicList$Outbound,
  z.ZodTypeDef,
  ListTopTopicsTopicList
> = z.object({
  canCreateTopic: z.boolean().optional(),
  draft: z.nullable(z.string()).optional(),
  draftKey: z.string().optional(),
  draftSequence: z.number().int().optional(),
  forPeriod: z.string().optional(),
  perPage: z.number().int().optional(),
  topics: z.array(z.lazy(() => ListTopTopicsTopics$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    canCreateTopic: "can_create_topic",
    draftKey: "draft_key",
    draftSequence: "draft_sequence",
    forPeriod: "for_period",
    perPage: "per_page",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTopTopicsTopicList$ {
  /** @deprecated use `ListTopTopicsTopicList$inboundSchema` instead. */
  export const inboundSchema = ListTopTopicsTopicList$inboundSchema;
  /** @deprecated use `ListTopTopicsTopicList$outboundSchema` instead. */
  export const outboundSchema = ListTopTopicsTopicList$outboundSchema;
  /** @deprecated use `ListTopTopicsTopicList$Outbound` instead. */
  export type Outbound = ListTopTopicsTopicList$Outbound;
}

/** @internal */
export const ListTopTopicsUsers$inboundSchema: z.ZodType<
  ListTopTopicsUsers,
  z.ZodTypeDef,
  unknown
> = z.object({
  avatar_template: z.string().optional(),
  id: z.number().int().optional(),
  name: z.string().optional(),
  username: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "avatar_template": "avatarTemplate",
  });
});

/** @internal */
export type ListTopTopicsUsers$Outbound = {
  avatar_template?: string | undefined;
  id?: number | undefined;
  name?: string | undefined;
  username?: string | undefined;
};

/** @internal */
export const ListTopTopicsUsers$outboundSchema: z.ZodType<
  ListTopTopicsUsers$Outbound,
  z.ZodTypeDef,
  ListTopTopicsUsers
> = z.object({
  avatarTemplate: z.string().optional(),
  id: z.number().int().optional(),
  name: z.string().optional(),
  username: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    avatarTemplate: "avatar_template",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTopTopicsUsers$ {
  /** @deprecated use `ListTopTopicsUsers$inboundSchema` instead. */
  export const inboundSchema = ListTopTopicsUsers$inboundSchema;
  /** @deprecated use `ListTopTopicsUsers$outboundSchema` instead. */
  export const outboundSchema = ListTopTopicsUsers$outboundSchema;
  /** @deprecated use `ListTopTopicsUsers$Outbound` instead. */
  export type Outbound = ListTopTopicsUsers$Outbound;
}

/** @internal */
export const ListTopTopicsResponseBody$inboundSchema: z.ZodType<
  ListTopTopicsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  primary_groups: z.array(z.any()).optional(),
  topic_list: z.lazy(() => ListTopTopicsTopicList$inboundSchema).optional(),
  users: z.array(z.lazy(() => ListTopTopicsUsers$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "primary_groups": "primaryGroups",
    "topic_list": "topicList",
  });
});

/** @internal */
export type ListTopTopicsResponseBody$Outbound = {
  primary_groups?: Array<any> | undefined;
  topic_list?: ListTopTopicsTopicList$Outbound | undefined;
  users?: Array<ListTopTopicsUsers$Outbound> | undefined;
};

/** @internal */
export const ListTopTopicsResponseBody$outboundSchema: z.ZodType<
  ListTopTopicsResponseBody$Outbound,
  z.ZodTypeDef,
  ListTopTopicsResponseBody
> = z.object({
  primaryGroups: z.array(z.any()).optional(),
  topicList: z.lazy(() => ListTopTopicsTopicList$outboundSchema).optional(),
  users: z.array(z.lazy(() => ListTopTopicsUsers$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    primaryGroups: "primary_groups",
    topicList: "topic_list",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTopTopicsResponseBody$ {
  /** @deprecated use `ListTopTopicsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListTopTopicsResponseBody$inboundSchema;
  /** @deprecated use `ListTopTopicsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListTopTopicsResponseBody$outboundSchema;
  /** @deprecated use `ListTopTopicsResponseBody$Outbound` instead. */
  export type Outbound = ListTopTopicsResponseBody$Outbound;
}
