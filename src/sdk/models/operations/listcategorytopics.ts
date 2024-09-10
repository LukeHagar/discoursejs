/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ListCategoryTopicsRequest = {
  id: number;
  slug: string;
};

export type ListCategoryTopicsPosters = {
  description: string;
  extras: string;
  primaryGroupId: string | null;
  userId: number;
};

export type Topics = {
  archetype: string;
  archived: boolean;
  bookmarked: string | null;
  bumped: boolean;
  bumpedAt: string;
  categoryId: number;
  closed: boolean;
  createdAt: string;
  excerpt: string;
  fancyTitle: string;
  featuredLink: string | null;
  hasSummary: boolean;
  highestPostNumber: number;
  id: number;
  imageUrl: string | null;
  lastPostedAt: string;
  lastPosterUsername: string;
  likeCount: number;
  liked: string | null;
  pinned: boolean;
  pinnedGlobally: boolean;
  posters: Array<ListCategoryTopicsPosters>;
  postsCount: number;
  replyCount: number;
  slug: string;
  title: string;
  unpinned: string | null;
  unseen: boolean;
  views: number;
  visible: boolean;
};

export type TopicList = {
  canCreateTopic: boolean;
  perPage: number;
  topTags?: Array<any> | undefined;
  topics: Array<Topics>;
};

export type Users = {
  avatarTemplate: string;
  id: number;
  name: string;
  username: string;
};

/**
 * success response
 */
export type ListCategoryTopicsResponseBody = {
  primaryGroups?: Array<any> | undefined;
  topicList: TopicList;
  users?: Array<Users> | undefined;
};

/** @internal */
export const ListCategoryTopicsRequest$inboundSchema: z.ZodType<
  ListCategoryTopicsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  slug: z.string(),
});

/** @internal */
export type ListCategoryTopicsRequest$Outbound = {
  id: number;
  slug: string;
};

/** @internal */
export const ListCategoryTopicsRequest$outboundSchema: z.ZodType<
  ListCategoryTopicsRequest$Outbound,
  z.ZodTypeDef,
  ListCategoryTopicsRequest
> = z.object({
  id: z.number().int(),
  slug: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCategoryTopicsRequest$ {
  /** @deprecated use `ListCategoryTopicsRequest$inboundSchema` instead. */
  export const inboundSchema = ListCategoryTopicsRequest$inboundSchema;
  /** @deprecated use `ListCategoryTopicsRequest$outboundSchema` instead. */
  export const outboundSchema = ListCategoryTopicsRequest$outboundSchema;
  /** @deprecated use `ListCategoryTopicsRequest$Outbound` instead. */
  export type Outbound = ListCategoryTopicsRequest$Outbound;
}

/** @internal */
export const ListCategoryTopicsPosters$inboundSchema: z.ZodType<
  ListCategoryTopicsPosters,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string(),
  extras: z.string(),
  primary_group_id: z.nullable(z.string()),
  user_id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "primary_group_id": "primaryGroupId",
    "user_id": "userId",
  });
});

/** @internal */
export type ListCategoryTopicsPosters$Outbound = {
  description: string;
  extras: string;
  primary_group_id: string | null;
  user_id: number;
};

/** @internal */
export const ListCategoryTopicsPosters$outboundSchema: z.ZodType<
  ListCategoryTopicsPosters$Outbound,
  z.ZodTypeDef,
  ListCategoryTopicsPosters
> = z.object({
  description: z.string(),
  extras: z.string(),
  primaryGroupId: z.nullable(z.string()),
  userId: z.number().int(),
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
export namespace ListCategoryTopicsPosters$ {
  /** @deprecated use `ListCategoryTopicsPosters$inboundSchema` instead. */
  export const inboundSchema = ListCategoryTopicsPosters$inboundSchema;
  /** @deprecated use `ListCategoryTopicsPosters$outboundSchema` instead. */
  export const outboundSchema = ListCategoryTopicsPosters$outboundSchema;
  /** @deprecated use `ListCategoryTopicsPosters$Outbound` instead. */
  export type Outbound = ListCategoryTopicsPosters$Outbound;
}

/** @internal */
export const Topics$inboundSchema: z.ZodType<Topics, z.ZodTypeDef, unknown> = z
  .object({
    archetype: z.string(),
    archived: z.boolean(),
    bookmarked: z.nullable(z.string()),
    bumped: z.boolean(),
    bumped_at: z.string(),
    category_id: z.number().int(),
    closed: z.boolean(),
    created_at: z.string(),
    excerpt: z.string(),
    fancy_title: z.string(),
    featured_link: z.nullable(z.string()),
    has_summary: z.boolean(),
    highest_post_number: z.number().int(),
    id: z.number().int(),
    image_url: z.nullable(z.string()),
    last_posted_at: z.string(),
    last_poster_username: z.string(),
    like_count: z.number().int(),
    liked: z.nullable(z.string()),
    pinned: z.boolean(),
    pinned_globally: z.boolean(),
    posters: z.array(z.lazy(() => ListCategoryTopicsPosters$inboundSchema)),
    posts_count: z.number().int(),
    reply_count: z.number().int(),
    slug: z.string(),
    title: z.string(),
    unpinned: z.nullable(z.string()),
    unseen: z.boolean(),
    views: z.number().int(),
    visible: z.boolean(),
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
      "like_count": "likeCount",
      "pinned_globally": "pinnedGlobally",
      "posts_count": "postsCount",
      "reply_count": "replyCount",
    });
  });

/** @internal */
export type Topics$Outbound = {
  archetype: string;
  archived: boolean;
  bookmarked: string | null;
  bumped: boolean;
  bumped_at: string;
  category_id: number;
  closed: boolean;
  created_at: string;
  excerpt: string;
  fancy_title: string;
  featured_link: string | null;
  has_summary: boolean;
  highest_post_number: number;
  id: number;
  image_url: string | null;
  last_posted_at: string;
  last_poster_username: string;
  like_count: number;
  liked: string | null;
  pinned: boolean;
  pinned_globally: boolean;
  posters: Array<ListCategoryTopicsPosters$Outbound>;
  posts_count: number;
  reply_count: number;
  slug: string;
  title: string;
  unpinned: string | null;
  unseen: boolean;
  views: number;
  visible: boolean;
};

/** @internal */
export const Topics$outboundSchema: z.ZodType<
  Topics$Outbound,
  z.ZodTypeDef,
  Topics
> = z.object({
  archetype: z.string(),
  archived: z.boolean(),
  bookmarked: z.nullable(z.string()),
  bumped: z.boolean(),
  bumpedAt: z.string(),
  categoryId: z.number().int(),
  closed: z.boolean(),
  createdAt: z.string(),
  excerpt: z.string(),
  fancyTitle: z.string(),
  featuredLink: z.nullable(z.string()),
  hasSummary: z.boolean(),
  highestPostNumber: z.number().int(),
  id: z.number().int(),
  imageUrl: z.nullable(z.string()),
  lastPostedAt: z.string(),
  lastPosterUsername: z.string(),
  likeCount: z.number().int(),
  liked: z.nullable(z.string()),
  pinned: z.boolean(),
  pinnedGlobally: z.boolean(),
  posters: z.array(z.lazy(() => ListCategoryTopicsPosters$outboundSchema)),
  postsCount: z.number().int(),
  replyCount: z.number().int(),
  slug: z.string(),
  title: z.string(),
  unpinned: z.nullable(z.string()),
  unseen: z.boolean(),
  views: z.number().int(),
  visible: z.boolean(),
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
    likeCount: "like_count",
    pinnedGlobally: "pinned_globally",
    postsCount: "posts_count",
    replyCount: "reply_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Topics$ {
  /** @deprecated use `Topics$inboundSchema` instead. */
  export const inboundSchema = Topics$inboundSchema;
  /** @deprecated use `Topics$outboundSchema` instead. */
  export const outboundSchema = Topics$outboundSchema;
  /** @deprecated use `Topics$Outbound` instead. */
  export type Outbound = Topics$Outbound;
}

/** @internal */
export const TopicList$inboundSchema: z.ZodType<
  TopicList,
  z.ZodTypeDef,
  unknown
> = z.object({
  can_create_topic: z.boolean(),
  per_page: z.number().int(),
  top_tags: z.array(z.any()).optional(),
  topics: z.array(z.lazy(() => Topics$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "can_create_topic": "canCreateTopic",
    "per_page": "perPage",
    "top_tags": "topTags",
  });
});

/** @internal */
export type TopicList$Outbound = {
  can_create_topic: boolean;
  per_page: number;
  top_tags?: Array<any> | undefined;
  topics: Array<Topics$Outbound>;
};

/** @internal */
export const TopicList$outboundSchema: z.ZodType<
  TopicList$Outbound,
  z.ZodTypeDef,
  TopicList
> = z.object({
  canCreateTopic: z.boolean(),
  perPage: z.number().int(),
  topTags: z.array(z.any()).optional(),
  topics: z.array(z.lazy(() => Topics$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    canCreateTopic: "can_create_topic",
    perPage: "per_page",
    topTags: "top_tags",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TopicList$ {
  /** @deprecated use `TopicList$inboundSchema` instead. */
  export const inboundSchema = TopicList$inboundSchema;
  /** @deprecated use `TopicList$outboundSchema` instead. */
  export const outboundSchema = TopicList$outboundSchema;
  /** @deprecated use `TopicList$Outbound` instead. */
  export type Outbound = TopicList$Outbound;
}

/** @internal */
export const Users$inboundSchema: z.ZodType<Users, z.ZodTypeDef, unknown> = z
  .object({
    avatar_template: z.string(),
    id: z.number().int(),
    name: z.string(),
    username: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "avatar_template": "avatarTemplate",
    });
  });

/** @internal */
export type Users$Outbound = {
  avatar_template: string;
  id: number;
  name: string;
  username: string;
};

/** @internal */
export const Users$outboundSchema: z.ZodType<
  Users$Outbound,
  z.ZodTypeDef,
  Users
> = z.object({
  avatarTemplate: z.string(),
  id: z.number().int(),
  name: z.string(),
  username: z.string(),
}).transform((v) => {
  return remap$(v, {
    avatarTemplate: "avatar_template",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Users$ {
  /** @deprecated use `Users$inboundSchema` instead. */
  export const inboundSchema = Users$inboundSchema;
  /** @deprecated use `Users$outboundSchema` instead. */
  export const outboundSchema = Users$outboundSchema;
  /** @deprecated use `Users$Outbound` instead. */
  export type Outbound = Users$Outbound;
}

/** @internal */
export const ListCategoryTopicsResponseBody$inboundSchema: z.ZodType<
  ListCategoryTopicsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  primary_groups: z.array(z.any()).optional(),
  topic_list: z.lazy(() => TopicList$inboundSchema),
  users: z.array(z.lazy(() => Users$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "primary_groups": "primaryGroups",
    "topic_list": "topicList",
  });
});

/** @internal */
export type ListCategoryTopicsResponseBody$Outbound = {
  primary_groups?: Array<any> | undefined;
  topic_list: TopicList$Outbound;
  users?: Array<Users$Outbound> | undefined;
};

/** @internal */
export const ListCategoryTopicsResponseBody$outboundSchema: z.ZodType<
  ListCategoryTopicsResponseBody$Outbound,
  z.ZodTypeDef,
  ListCategoryTopicsResponseBody
> = z.object({
  primaryGroups: z.array(z.any()).optional(),
  topicList: z.lazy(() => TopicList$outboundSchema),
  users: z.array(z.lazy(() => Users$outboundSchema)).optional(),
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
export namespace ListCategoryTopicsResponseBody$ {
  /** @deprecated use `ListCategoryTopicsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListCategoryTopicsResponseBody$inboundSchema;
  /** @deprecated use `ListCategoryTopicsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListCategoryTopicsResponseBody$outboundSchema;
  /** @deprecated use `ListCategoryTopicsResponseBody$Outbound` instead. */
  export type Outbound = ListCategoryTopicsResponseBody$Outbound;
}
