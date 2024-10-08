/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ListPostsRequest = {
  apiKey: string;
  apiUsername: string;
  /**
   * Load posts with an id lower than this value. Useful for pagination.
   */
  before?: string | undefined;
};

export type ListPostsActionsSummary = {
  canAct?: boolean | undefined;
  id?: number | undefined;
};

export type LatestPosts = {
  actionsSummary?: Array<ListPostsActionsSummary> | undefined;
  admin?: boolean | undefined;
  avatarTemplate?: string | undefined;
  canDelete?: boolean | undefined;
  canEdit?: boolean | undefined;
  canRecover?: boolean | undefined;
  canSeeHiddenPost?: boolean | undefined;
  canViewEditHistory?: boolean | undefined;
  canWiki?: boolean | undefined;
  categoryId?: number | undefined;
  cooked?: string | undefined;
  createdAt?: string | undefined;
  deletedAt?: string | null | undefined;
  displayUsername?: string | undefined;
  editReason?: string | null | undefined;
  flairBgColor?: string | null | undefined;
  flairColor?: string | null | undefined;
  flairGroupId?: string | null | undefined;
  flairName?: string | null | undefined;
  flairUrl?: string | null | undefined;
  hidden?: boolean | undefined;
  id?: number | undefined;
  incomingLinkCount?: number | undefined;
  moderator?: boolean | undefined;
  name?: string | undefined;
  postNumber?: number | undefined;
  postType?: number | undefined;
  primaryGroupName?: string | null | undefined;
  quoteCount?: number | undefined;
  raw?: string | undefined;
  readersCount?: number | undefined;
  reads?: number | undefined;
  replyCount?: number | undefined;
  replyToPostNumber?: string | null | undefined;
  reviewableId?: string | null | undefined;
  reviewableScoreCount?: number | undefined;
  reviewableScorePendingCount?: number | undefined;
  score?: number | undefined;
  staff?: boolean | undefined;
  topicHtmlTitle?: string | undefined;
  topicId?: number | undefined;
  topicSlug?: string | undefined;
  topicTitle?: string | undefined;
  trustLevel?: number | undefined;
  updatedAt?: string | undefined;
  userDeleted?: boolean | undefined;
  userId?: number | undefined;
  userTitle?: string | null | undefined;
  username?: string | undefined;
  version?: number | undefined;
  wiki?: boolean | undefined;
  yours?: boolean | undefined;
};

/**
 * latest posts
 */
export type ListPostsResponseBody = {
  latestPosts?: Array<LatestPosts> | undefined;
};

/** @internal */
export const ListPostsRequest$inboundSchema: z.ZodType<
  ListPostsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "Api-Key": z.string(),
  "Api-Username": z.string(),
  before: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "Api-Key": "apiKey",
    "Api-Username": "apiUsername",
  });
});

/** @internal */
export type ListPostsRequest$Outbound = {
  "Api-Key": string;
  "Api-Username": string;
  before?: string | undefined;
};

/** @internal */
export const ListPostsRequest$outboundSchema: z.ZodType<
  ListPostsRequest$Outbound,
  z.ZodTypeDef,
  ListPostsRequest
> = z.object({
  apiKey: z.string(),
  apiUsername: z.string(),
  before: z.string().optional(),
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
export namespace ListPostsRequest$ {
  /** @deprecated use `ListPostsRequest$inboundSchema` instead. */
  export const inboundSchema = ListPostsRequest$inboundSchema;
  /** @deprecated use `ListPostsRequest$outboundSchema` instead. */
  export const outboundSchema = ListPostsRequest$outboundSchema;
  /** @deprecated use `ListPostsRequest$Outbound` instead. */
  export type Outbound = ListPostsRequest$Outbound;
}

/** @internal */
export const ListPostsActionsSummary$inboundSchema: z.ZodType<
  ListPostsActionsSummary,
  z.ZodTypeDef,
  unknown
> = z.object({
  can_act: z.boolean().optional(),
  id: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "can_act": "canAct",
  });
});

/** @internal */
export type ListPostsActionsSummary$Outbound = {
  can_act?: boolean | undefined;
  id?: number | undefined;
};

/** @internal */
export const ListPostsActionsSummary$outboundSchema: z.ZodType<
  ListPostsActionsSummary$Outbound,
  z.ZodTypeDef,
  ListPostsActionsSummary
> = z.object({
  canAct: z.boolean().optional(),
  id: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    canAct: "can_act",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPostsActionsSummary$ {
  /** @deprecated use `ListPostsActionsSummary$inboundSchema` instead. */
  export const inboundSchema = ListPostsActionsSummary$inboundSchema;
  /** @deprecated use `ListPostsActionsSummary$outboundSchema` instead. */
  export const outboundSchema = ListPostsActionsSummary$outboundSchema;
  /** @deprecated use `ListPostsActionsSummary$Outbound` instead. */
  export type Outbound = ListPostsActionsSummary$Outbound;
}

/** @internal */
export const LatestPosts$inboundSchema: z.ZodType<
  LatestPosts,
  z.ZodTypeDef,
  unknown
> = z.object({
  actions_summary: z.array(z.lazy(() => ListPostsActionsSummary$inboundSchema))
    .optional(),
  admin: z.boolean().optional(),
  avatar_template: z.string().optional(),
  can_delete: z.boolean().optional(),
  can_edit: z.boolean().optional(),
  can_recover: z.boolean().optional(),
  can_see_hidden_post: z.boolean().optional(),
  can_view_edit_history: z.boolean().optional(),
  can_wiki: z.boolean().optional(),
  category_id: z.number().int().optional(),
  cooked: z.string().optional(),
  created_at: z.string().optional(),
  deleted_at: z.nullable(z.string()).optional(),
  display_username: z.string().optional(),
  edit_reason: z.nullable(z.string()).optional(),
  flair_bg_color: z.nullable(z.string()).optional(),
  flair_color: z.nullable(z.string()).optional(),
  flair_group_id: z.nullable(z.string()).optional(),
  flair_name: z.nullable(z.string()).optional(),
  flair_url: z.nullable(z.string()).optional(),
  hidden: z.boolean().optional(),
  id: z.number().int().optional(),
  incoming_link_count: z.number().int().optional(),
  moderator: z.boolean().optional(),
  name: z.string().optional(),
  post_number: z.number().int().optional(),
  post_type: z.number().int().optional(),
  primary_group_name: z.nullable(z.string()).optional(),
  quote_count: z.number().int().optional(),
  raw: z.string().optional(),
  readers_count: z.number().int().optional(),
  reads: z.number().int().optional(),
  reply_count: z.number().int().optional(),
  reply_to_post_number: z.nullable(z.string()).optional(),
  reviewable_id: z.nullable(z.string()).optional(),
  reviewable_score_count: z.number().int().optional(),
  reviewable_score_pending_count: z.number().int().optional(),
  score: z.number().optional(),
  staff: z.boolean().optional(),
  topic_html_title: z.string().optional(),
  topic_id: z.number().int().optional(),
  topic_slug: z.string().optional(),
  topic_title: z.string().optional(),
  trust_level: z.number().int().optional(),
  updated_at: z.string().optional(),
  user_deleted: z.boolean().optional(),
  user_id: z.number().int().optional(),
  user_title: z.nullable(z.string()).optional(),
  username: z.string().optional(),
  version: z.number().int().optional(),
  wiki: z.boolean().optional(),
  yours: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "actions_summary": "actionsSummary",
    "avatar_template": "avatarTemplate",
    "can_delete": "canDelete",
    "can_edit": "canEdit",
    "can_recover": "canRecover",
    "can_see_hidden_post": "canSeeHiddenPost",
    "can_view_edit_history": "canViewEditHistory",
    "can_wiki": "canWiki",
    "category_id": "categoryId",
    "created_at": "createdAt",
    "deleted_at": "deletedAt",
    "display_username": "displayUsername",
    "edit_reason": "editReason",
    "flair_bg_color": "flairBgColor",
    "flair_color": "flairColor",
    "flair_group_id": "flairGroupId",
    "flair_name": "flairName",
    "flair_url": "flairUrl",
    "incoming_link_count": "incomingLinkCount",
    "post_number": "postNumber",
    "post_type": "postType",
    "primary_group_name": "primaryGroupName",
    "quote_count": "quoteCount",
    "readers_count": "readersCount",
    "reply_count": "replyCount",
    "reply_to_post_number": "replyToPostNumber",
    "reviewable_id": "reviewableId",
    "reviewable_score_count": "reviewableScoreCount",
    "reviewable_score_pending_count": "reviewableScorePendingCount",
    "topic_html_title": "topicHtmlTitle",
    "topic_id": "topicId",
    "topic_slug": "topicSlug",
    "topic_title": "topicTitle",
    "trust_level": "trustLevel",
    "updated_at": "updatedAt",
    "user_deleted": "userDeleted",
    "user_id": "userId",
    "user_title": "userTitle",
  });
});

/** @internal */
export type LatestPosts$Outbound = {
  actions_summary?: Array<ListPostsActionsSummary$Outbound> | undefined;
  admin?: boolean | undefined;
  avatar_template?: string | undefined;
  can_delete?: boolean | undefined;
  can_edit?: boolean | undefined;
  can_recover?: boolean | undefined;
  can_see_hidden_post?: boolean | undefined;
  can_view_edit_history?: boolean | undefined;
  can_wiki?: boolean | undefined;
  category_id?: number | undefined;
  cooked?: string | undefined;
  created_at?: string | undefined;
  deleted_at?: string | null | undefined;
  display_username?: string | undefined;
  edit_reason?: string | null | undefined;
  flair_bg_color?: string | null | undefined;
  flair_color?: string | null | undefined;
  flair_group_id?: string | null | undefined;
  flair_name?: string | null | undefined;
  flair_url?: string | null | undefined;
  hidden?: boolean | undefined;
  id?: number | undefined;
  incoming_link_count?: number | undefined;
  moderator?: boolean | undefined;
  name?: string | undefined;
  post_number?: number | undefined;
  post_type?: number | undefined;
  primary_group_name?: string | null | undefined;
  quote_count?: number | undefined;
  raw?: string | undefined;
  readers_count?: number | undefined;
  reads?: number | undefined;
  reply_count?: number | undefined;
  reply_to_post_number?: string | null | undefined;
  reviewable_id?: string | null | undefined;
  reviewable_score_count?: number | undefined;
  reviewable_score_pending_count?: number | undefined;
  score?: number | undefined;
  staff?: boolean | undefined;
  topic_html_title?: string | undefined;
  topic_id?: number | undefined;
  topic_slug?: string | undefined;
  topic_title?: string | undefined;
  trust_level?: number | undefined;
  updated_at?: string | undefined;
  user_deleted?: boolean | undefined;
  user_id?: number | undefined;
  user_title?: string | null | undefined;
  username?: string | undefined;
  version?: number | undefined;
  wiki?: boolean | undefined;
  yours?: boolean | undefined;
};

/** @internal */
export const LatestPosts$outboundSchema: z.ZodType<
  LatestPosts$Outbound,
  z.ZodTypeDef,
  LatestPosts
> = z.object({
  actionsSummary: z.array(z.lazy(() => ListPostsActionsSummary$outboundSchema))
    .optional(),
  admin: z.boolean().optional(),
  avatarTemplate: z.string().optional(),
  canDelete: z.boolean().optional(),
  canEdit: z.boolean().optional(),
  canRecover: z.boolean().optional(),
  canSeeHiddenPost: z.boolean().optional(),
  canViewEditHistory: z.boolean().optional(),
  canWiki: z.boolean().optional(),
  categoryId: z.number().int().optional(),
  cooked: z.string().optional(),
  createdAt: z.string().optional(),
  deletedAt: z.nullable(z.string()).optional(),
  displayUsername: z.string().optional(),
  editReason: z.nullable(z.string()).optional(),
  flairBgColor: z.nullable(z.string()).optional(),
  flairColor: z.nullable(z.string()).optional(),
  flairGroupId: z.nullable(z.string()).optional(),
  flairName: z.nullable(z.string()).optional(),
  flairUrl: z.nullable(z.string()).optional(),
  hidden: z.boolean().optional(),
  id: z.number().int().optional(),
  incomingLinkCount: z.number().int().optional(),
  moderator: z.boolean().optional(),
  name: z.string().optional(),
  postNumber: z.number().int().optional(),
  postType: z.number().int().optional(),
  primaryGroupName: z.nullable(z.string()).optional(),
  quoteCount: z.number().int().optional(),
  raw: z.string().optional(),
  readersCount: z.number().int().optional(),
  reads: z.number().int().optional(),
  replyCount: z.number().int().optional(),
  replyToPostNumber: z.nullable(z.string()).optional(),
  reviewableId: z.nullable(z.string()).optional(),
  reviewableScoreCount: z.number().int().optional(),
  reviewableScorePendingCount: z.number().int().optional(),
  score: z.number().optional(),
  staff: z.boolean().optional(),
  topicHtmlTitle: z.string().optional(),
  topicId: z.number().int().optional(),
  topicSlug: z.string().optional(),
  topicTitle: z.string().optional(),
  trustLevel: z.number().int().optional(),
  updatedAt: z.string().optional(),
  userDeleted: z.boolean().optional(),
  userId: z.number().int().optional(),
  userTitle: z.nullable(z.string()).optional(),
  username: z.string().optional(),
  version: z.number().int().optional(),
  wiki: z.boolean().optional(),
  yours: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    actionsSummary: "actions_summary",
    avatarTemplate: "avatar_template",
    canDelete: "can_delete",
    canEdit: "can_edit",
    canRecover: "can_recover",
    canSeeHiddenPost: "can_see_hidden_post",
    canViewEditHistory: "can_view_edit_history",
    canWiki: "can_wiki",
    categoryId: "category_id",
    createdAt: "created_at",
    deletedAt: "deleted_at",
    displayUsername: "display_username",
    editReason: "edit_reason",
    flairBgColor: "flair_bg_color",
    flairColor: "flair_color",
    flairGroupId: "flair_group_id",
    flairName: "flair_name",
    flairUrl: "flair_url",
    incomingLinkCount: "incoming_link_count",
    postNumber: "post_number",
    postType: "post_type",
    primaryGroupName: "primary_group_name",
    quoteCount: "quote_count",
    readersCount: "readers_count",
    replyCount: "reply_count",
    replyToPostNumber: "reply_to_post_number",
    reviewableId: "reviewable_id",
    reviewableScoreCount: "reviewable_score_count",
    reviewableScorePendingCount: "reviewable_score_pending_count",
    topicHtmlTitle: "topic_html_title",
    topicId: "topic_id",
    topicSlug: "topic_slug",
    topicTitle: "topic_title",
    trustLevel: "trust_level",
    updatedAt: "updated_at",
    userDeleted: "user_deleted",
    userId: "user_id",
    userTitle: "user_title",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LatestPosts$ {
  /** @deprecated use `LatestPosts$inboundSchema` instead. */
  export const inboundSchema = LatestPosts$inboundSchema;
  /** @deprecated use `LatestPosts$outboundSchema` instead. */
  export const outboundSchema = LatestPosts$outboundSchema;
  /** @deprecated use `LatestPosts$Outbound` instead. */
  export type Outbound = LatestPosts$Outbound;
}

/** @internal */
export const ListPostsResponseBody$inboundSchema: z.ZodType<
  ListPostsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  latest_posts: z.array(z.lazy(() => LatestPosts$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "latest_posts": "latestPosts",
  });
});

/** @internal */
export type ListPostsResponseBody$Outbound = {
  latest_posts?: Array<LatestPosts$Outbound> | undefined;
};

/** @internal */
export const ListPostsResponseBody$outboundSchema: z.ZodType<
  ListPostsResponseBody$Outbound,
  z.ZodTypeDef,
  ListPostsResponseBody
> = z.object({
  latestPosts: z.array(z.lazy(() => LatestPosts$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    latestPosts: "latest_posts",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListPostsResponseBody$ {
  /** @deprecated use `ListPostsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListPostsResponseBody$inboundSchema;
  /** @deprecated use `ListPostsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListPostsResponseBody$outboundSchema;
  /** @deprecated use `ListPostsResponseBody$Outbound` instead. */
  export type Outbound = ListPostsResponseBody$Outbound;
}
