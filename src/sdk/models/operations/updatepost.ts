/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type Post = {
  editReason?: string | undefined;
  raw: string;
};

export type UpdatePostRequestBody = {
  post?: Post | undefined;
};

export type UpdatePostRequest = {
  requestBody?: UpdatePostRequestBody | undefined;
  id: string;
};

export type UpdatePostActionsSummary = {
  canAct: boolean;
  id: number;
};

export type UpdatePostPost = {
  actionsSummary: Array<UpdatePostActionsSummary>;
  admin: boolean;
  avatarTemplate: string;
  bookmarked: boolean;
  canDelete: boolean;
  canEdit: boolean;
  canRecover: boolean;
  canSeeHiddenPost?: boolean | undefined;
  canViewEditHistory: boolean;
  canWiki: boolean;
  cooked: string;
  createdAt: string;
  deletedAt: string | null;
  displayUsername?: string | null | undefined;
  draftSequence: number;
  editReason: string | null;
  flairBgColor: string | null;
  flairColor: string | null;
  flairGroupId?: string | null | undefined;
  flairName: string | null;
  flairUrl: string | null;
  hidden: boolean;
  id: number;
  incomingLinkCount: number;
  mentionedUsers?: Array<any> | undefined;
  moderator: boolean;
  name?: string | null | undefined;
  postNumber: number;
  postType: number;
  primaryGroupName: string | null;
  quoteCount: number;
  raw: string;
  readersCount: number;
  reads: number;
  replyCount: number;
  replyToPostNumber: string | null;
  reviewableId: string | null;
  reviewableScoreCount: number;
  reviewableScorePendingCount: number;
  score: number;
  staff: boolean;
  topicId: number;
  topicSlug: string;
  trustLevel: number;
  updatedAt: string;
  userDeleted: boolean;
  userId: number;
  userTitle: string | null;
  username: string;
  version: number;
  wiki: boolean;
  yours: boolean;
};

/**
 * post updated
 */
export type UpdatePostResponseBody = {
  post: UpdatePostPost;
};

/** @internal */
export const Post$inboundSchema: z.ZodType<Post, z.ZodTypeDef, unknown> = z
  .object({
    edit_reason: z.string().optional(),
    raw: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "edit_reason": "editReason",
    });
  });

/** @internal */
export type Post$Outbound = {
  edit_reason?: string | undefined;
  raw: string;
};

/** @internal */
export const Post$outboundSchema: z.ZodType<Post$Outbound, z.ZodTypeDef, Post> =
  z.object({
    editReason: z.string().optional(),
    raw: z.string(),
  }).transform((v) => {
    return remap$(v, {
      editReason: "edit_reason",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Post$ {
  /** @deprecated use `Post$inboundSchema` instead. */
  export const inboundSchema = Post$inboundSchema;
  /** @deprecated use `Post$outboundSchema` instead. */
  export const outboundSchema = Post$outboundSchema;
  /** @deprecated use `Post$Outbound` instead. */
  export type Outbound = Post$Outbound;
}

/** @internal */
export const UpdatePostRequestBody$inboundSchema: z.ZodType<
  UpdatePostRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  post: z.lazy(() => Post$inboundSchema).optional(),
});

/** @internal */
export type UpdatePostRequestBody$Outbound = {
  post?: Post$Outbound | undefined;
};

/** @internal */
export const UpdatePostRequestBody$outboundSchema: z.ZodType<
  UpdatePostRequestBody$Outbound,
  z.ZodTypeDef,
  UpdatePostRequestBody
> = z.object({
  post: z.lazy(() => Post$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePostRequestBody$ {
  /** @deprecated use `UpdatePostRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdatePostRequestBody$inboundSchema;
  /** @deprecated use `UpdatePostRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdatePostRequestBody$outboundSchema;
  /** @deprecated use `UpdatePostRequestBody$Outbound` instead. */
  export type Outbound = UpdatePostRequestBody$Outbound;
}

/** @internal */
export const UpdatePostRequest$inboundSchema: z.ZodType<
  UpdatePostRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RequestBody: z.lazy(() => UpdatePostRequestBody$inboundSchema).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdatePostRequest$Outbound = {
  RequestBody?: UpdatePostRequestBody$Outbound | undefined;
  id: string;
};

/** @internal */
export const UpdatePostRequest$outboundSchema: z.ZodType<
  UpdatePostRequest$Outbound,
  z.ZodTypeDef,
  UpdatePostRequest
> = z.object({
  requestBody: z.lazy(() => UpdatePostRequestBody$outboundSchema).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePostRequest$ {
  /** @deprecated use `UpdatePostRequest$inboundSchema` instead. */
  export const inboundSchema = UpdatePostRequest$inboundSchema;
  /** @deprecated use `UpdatePostRequest$outboundSchema` instead. */
  export const outboundSchema = UpdatePostRequest$outboundSchema;
  /** @deprecated use `UpdatePostRequest$Outbound` instead. */
  export type Outbound = UpdatePostRequest$Outbound;
}

/** @internal */
export const UpdatePostActionsSummary$inboundSchema: z.ZodType<
  UpdatePostActionsSummary,
  z.ZodTypeDef,
  unknown
> = z.object({
  can_act: z.boolean(),
  id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "can_act": "canAct",
  });
});

/** @internal */
export type UpdatePostActionsSummary$Outbound = {
  can_act: boolean;
  id: number;
};

/** @internal */
export const UpdatePostActionsSummary$outboundSchema: z.ZodType<
  UpdatePostActionsSummary$Outbound,
  z.ZodTypeDef,
  UpdatePostActionsSummary
> = z.object({
  canAct: z.boolean(),
  id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    canAct: "can_act",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePostActionsSummary$ {
  /** @deprecated use `UpdatePostActionsSummary$inboundSchema` instead. */
  export const inboundSchema = UpdatePostActionsSummary$inboundSchema;
  /** @deprecated use `UpdatePostActionsSummary$outboundSchema` instead. */
  export const outboundSchema = UpdatePostActionsSummary$outboundSchema;
  /** @deprecated use `UpdatePostActionsSummary$Outbound` instead. */
  export type Outbound = UpdatePostActionsSummary$Outbound;
}

/** @internal */
export const UpdatePostPost$inboundSchema: z.ZodType<
  UpdatePostPost,
  z.ZodTypeDef,
  unknown
> = z.object({
  actions_summary: z.array(
    z.lazy(() => UpdatePostActionsSummary$inboundSchema),
  ),
  admin: z.boolean(),
  avatar_template: z.string(),
  bookmarked: z.boolean(),
  can_delete: z.boolean(),
  can_edit: z.boolean(),
  can_recover: z.boolean(),
  can_see_hidden_post: z.boolean().optional(),
  can_view_edit_history: z.boolean(),
  can_wiki: z.boolean(),
  cooked: z.string(),
  created_at: z.string(),
  deleted_at: z.nullable(z.string()),
  display_username: z.nullable(z.string()).optional(),
  draft_sequence: z.number().int(),
  edit_reason: z.nullable(z.string()),
  flair_bg_color: z.nullable(z.string()),
  flair_color: z.nullable(z.string()),
  flair_group_id: z.nullable(z.string()).optional(),
  flair_name: z.nullable(z.string()),
  flair_url: z.nullable(z.string()),
  hidden: z.boolean(),
  id: z.number().int(),
  incoming_link_count: z.number().int(),
  mentioned_users: z.array(z.any()).optional(),
  moderator: z.boolean(),
  name: z.nullable(z.string()).optional(),
  post_number: z.number().int(),
  post_type: z.number().int(),
  primary_group_name: z.nullable(z.string()),
  quote_count: z.number().int(),
  raw: z.string(),
  readers_count: z.number().int(),
  reads: z.number().int(),
  reply_count: z.number().int(),
  reply_to_post_number: z.nullable(z.string()),
  reviewable_id: z.nullable(z.string()),
  reviewable_score_count: z.number().int(),
  reviewable_score_pending_count: z.number().int(),
  score: z.number().int(),
  staff: z.boolean(),
  topic_id: z.number().int(),
  topic_slug: z.string(),
  trust_level: z.number().int(),
  updated_at: z.string(),
  user_deleted: z.boolean(),
  user_id: z.number().int(),
  user_title: z.nullable(z.string()),
  username: z.string(),
  version: z.number().int(),
  wiki: z.boolean(),
  yours: z.boolean(),
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
    "created_at": "createdAt",
    "deleted_at": "deletedAt",
    "display_username": "displayUsername",
    "draft_sequence": "draftSequence",
    "edit_reason": "editReason",
    "flair_bg_color": "flairBgColor",
    "flair_color": "flairColor",
    "flair_group_id": "flairGroupId",
    "flair_name": "flairName",
    "flair_url": "flairUrl",
    "incoming_link_count": "incomingLinkCount",
    "mentioned_users": "mentionedUsers",
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
    "topic_id": "topicId",
    "topic_slug": "topicSlug",
    "trust_level": "trustLevel",
    "updated_at": "updatedAt",
    "user_deleted": "userDeleted",
    "user_id": "userId",
    "user_title": "userTitle",
  });
});

/** @internal */
export type UpdatePostPost$Outbound = {
  actions_summary: Array<UpdatePostActionsSummary$Outbound>;
  admin: boolean;
  avatar_template: string;
  bookmarked: boolean;
  can_delete: boolean;
  can_edit: boolean;
  can_recover: boolean;
  can_see_hidden_post?: boolean | undefined;
  can_view_edit_history: boolean;
  can_wiki: boolean;
  cooked: string;
  created_at: string;
  deleted_at: string | null;
  display_username?: string | null | undefined;
  draft_sequence: number;
  edit_reason: string | null;
  flair_bg_color: string | null;
  flair_color: string | null;
  flair_group_id?: string | null | undefined;
  flair_name: string | null;
  flair_url: string | null;
  hidden: boolean;
  id: number;
  incoming_link_count: number;
  mentioned_users?: Array<any> | undefined;
  moderator: boolean;
  name?: string | null | undefined;
  post_number: number;
  post_type: number;
  primary_group_name: string | null;
  quote_count: number;
  raw: string;
  readers_count: number;
  reads: number;
  reply_count: number;
  reply_to_post_number: string | null;
  reviewable_id: string | null;
  reviewable_score_count: number;
  reviewable_score_pending_count: number;
  score: number;
  staff: boolean;
  topic_id: number;
  topic_slug: string;
  trust_level: number;
  updated_at: string;
  user_deleted: boolean;
  user_id: number;
  user_title: string | null;
  username: string;
  version: number;
  wiki: boolean;
  yours: boolean;
};

/** @internal */
export const UpdatePostPost$outboundSchema: z.ZodType<
  UpdatePostPost$Outbound,
  z.ZodTypeDef,
  UpdatePostPost
> = z.object({
  actionsSummary: z.array(
    z.lazy(() => UpdatePostActionsSummary$outboundSchema),
  ),
  admin: z.boolean(),
  avatarTemplate: z.string(),
  bookmarked: z.boolean(),
  canDelete: z.boolean(),
  canEdit: z.boolean(),
  canRecover: z.boolean(),
  canSeeHiddenPost: z.boolean().optional(),
  canViewEditHistory: z.boolean(),
  canWiki: z.boolean(),
  cooked: z.string(),
  createdAt: z.string(),
  deletedAt: z.nullable(z.string()),
  displayUsername: z.nullable(z.string()).optional(),
  draftSequence: z.number().int(),
  editReason: z.nullable(z.string()),
  flairBgColor: z.nullable(z.string()),
  flairColor: z.nullable(z.string()),
  flairGroupId: z.nullable(z.string()).optional(),
  flairName: z.nullable(z.string()),
  flairUrl: z.nullable(z.string()),
  hidden: z.boolean(),
  id: z.number().int(),
  incomingLinkCount: z.number().int(),
  mentionedUsers: z.array(z.any()).optional(),
  moderator: z.boolean(),
  name: z.nullable(z.string()).optional(),
  postNumber: z.number().int(),
  postType: z.number().int(),
  primaryGroupName: z.nullable(z.string()),
  quoteCount: z.number().int(),
  raw: z.string(),
  readersCount: z.number().int(),
  reads: z.number().int(),
  replyCount: z.number().int(),
  replyToPostNumber: z.nullable(z.string()),
  reviewableId: z.nullable(z.string()),
  reviewableScoreCount: z.number().int(),
  reviewableScorePendingCount: z.number().int(),
  score: z.number().int(),
  staff: z.boolean(),
  topicId: z.number().int(),
  topicSlug: z.string(),
  trustLevel: z.number().int(),
  updatedAt: z.string(),
  userDeleted: z.boolean(),
  userId: z.number().int(),
  userTitle: z.nullable(z.string()),
  username: z.string(),
  version: z.number().int(),
  wiki: z.boolean(),
  yours: z.boolean(),
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
    createdAt: "created_at",
    deletedAt: "deleted_at",
    displayUsername: "display_username",
    draftSequence: "draft_sequence",
    editReason: "edit_reason",
    flairBgColor: "flair_bg_color",
    flairColor: "flair_color",
    flairGroupId: "flair_group_id",
    flairName: "flair_name",
    flairUrl: "flair_url",
    incomingLinkCount: "incoming_link_count",
    mentionedUsers: "mentioned_users",
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
    topicId: "topic_id",
    topicSlug: "topic_slug",
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
export namespace UpdatePostPost$ {
  /** @deprecated use `UpdatePostPost$inboundSchema` instead. */
  export const inboundSchema = UpdatePostPost$inboundSchema;
  /** @deprecated use `UpdatePostPost$outboundSchema` instead. */
  export const outboundSchema = UpdatePostPost$outboundSchema;
  /** @deprecated use `UpdatePostPost$Outbound` instead. */
  export type Outbound = UpdatePostPost$Outbound;
}

/** @internal */
export const UpdatePostResponseBody$inboundSchema: z.ZodType<
  UpdatePostResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  post: z.lazy(() => UpdatePostPost$inboundSchema),
});

/** @internal */
export type UpdatePostResponseBody$Outbound = {
  post: UpdatePostPost$Outbound;
};

/** @internal */
export const UpdatePostResponseBody$outboundSchema: z.ZodType<
  UpdatePostResponseBody$Outbound,
  z.ZodTypeDef,
  UpdatePostResponseBody
> = z.object({
  post: z.lazy(() => UpdatePostPost$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdatePostResponseBody$ {
  /** @deprecated use `UpdatePostResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdatePostResponseBody$inboundSchema;
  /** @deprecated use `UpdatePostResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdatePostResponseBody$outboundSchema;
  /** @deprecated use `UpdatePostResponseBody$Outbound` instead. */
  export type Outbound = UpdatePostResponseBody$Outbound;
}
