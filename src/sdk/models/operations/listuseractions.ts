/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ListUserActionsRequest = {
  filter: string;
  offset: number;
  username: string;
};

export type UserActions = {
  actingAvatarTemplate: string;
  actingName: string | null;
  actingUserId: number;
  actingUsername: string;
  actionCode: string | null;
  actionType: number;
  archived: boolean;
  avatarTemplate: string;
  categoryId: number;
  closed: boolean;
  createdAt: string;
  deleted: boolean;
  excerpt: string;
  hidden: string | null;
  name: string | null;
  postId: string | null;
  postNumber: number;
  postType: string | null;
  slug: string;
  targetName: string | null;
  targetUserId: number;
  targetUsername: string;
  title: string;
  topicId: number;
  userId: number;
  username: string;
};

/**
 * response
 */
export type ListUserActionsResponseBody = {
  userActions: Array<UserActions>;
};

/** @internal */
export const ListUserActionsRequest$inboundSchema: z.ZodType<
  ListUserActionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  filter: z.string(),
  offset: z.number().int(),
  username: z.string(),
});

/** @internal */
export type ListUserActionsRequest$Outbound = {
  filter: string;
  offset: number;
  username: string;
};

/** @internal */
export const ListUserActionsRequest$outboundSchema: z.ZodType<
  ListUserActionsRequest$Outbound,
  z.ZodTypeDef,
  ListUserActionsRequest
> = z.object({
  filter: z.string(),
  offset: z.number().int(),
  username: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListUserActionsRequest$ {
  /** @deprecated use `ListUserActionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListUserActionsRequest$inboundSchema;
  /** @deprecated use `ListUserActionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListUserActionsRequest$outboundSchema;
  /** @deprecated use `ListUserActionsRequest$Outbound` instead. */
  export type Outbound = ListUserActionsRequest$Outbound;
}

/** @internal */
export const UserActions$inboundSchema: z.ZodType<
  UserActions,
  z.ZodTypeDef,
  unknown
> = z.object({
  acting_avatar_template: z.string(),
  acting_name: z.nullable(z.string()),
  acting_user_id: z.number().int(),
  acting_username: z.string(),
  action_code: z.nullable(z.string()),
  action_type: z.number().int(),
  archived: z.boolean(),
  avatar_template: z.string(),
  category_id: z.number().int(),
  closed: z.boolean(),
  created_at: z.string(),
  deleted: z.boolean(),
  excerpt: z.string(),
  hidden: z.nullable(z.string()),
  name: z.nullable(z.string()),
  post_id: z.nullable(z.string()),
  post_number: z.number().int(),
  post_type: z.nullable(z.string()),
  slug: z.string(),
  target_name: z.nullable(z.string()),
  target_user_id: z.number().int(),
  target_username: z.string(),
  title: z.string(),
  topic_id: z.number().int(),
  user_id: z.number().int(),
  username: z.string(),
}).transform((v) => {
  return remap$(v, {
    "acting_avatar_template": "actingAvatarTemplate",
    "acting_name": "actingName",
    "acting_user_id": "actingUserId",
    "acting_username": "actingUsername",
    "action_code": "actionCode",
    "action_type": "actionType",
    "avatar_template": "avatarTemplate",
    "category_id": "categoryId",
    "created_at": "createdAt",
    "post_id": "postId",
    "post_number": "postNumber",
    "post_type": "postType",
    "target_name": "targetName",
    "target_user_id": "targetUserId",
    "target_username": "targetUsername",
    "topic_id": "topicId",
    "user_id": "userId",
  });
});

/** @internal */
export type UserActions$Outbound = {
  acting_avatar_template: string;
  acting_name: string | null;
  acting_user_id: number;
  acting_username: string;
  action_code: string | null;
  action_type: number;
  archived: boolean;
  avatar_template: string;
  category_id: number;
  closed: boolean;
  created_at: string;
  deleted: boolean;
  excerpt: string;
  hidden: string | null;
  name: string | null;
  post_id: string | null;
  post_number: number;
  post_type: string | null;
  slug: string;
  target_name: string | null;
  target_user_id: number;
  target_username: string;
  title: string;
  topic_id: number;
  user_id: number;
  username: string;
};

/** @internal */
export const UserActions$outboundSchema: z.ZodType<
  UserActions$Outbound,
  z.ZodTypeDef,
  UserActions
> = z.object({
  actingAvatarTemplate: z.string(),
  actingName: z.nullable(z.string()),
  actingUserId: z.number().int(),
  actingUsername: z.string(),
  actionCode: z.nullable(z.string()),
  actionType: z.number().int(),
  archived: z.boolean(),
  avatarTemplate: z.string(),
  categoryId: z.number().int(),
  closed: z.boolean(),
  createdAt: z.string(),
  deleted: z.boolean(),
  excerpt: z.string(),
  hidden: z.nullable(z.string()),
  name: z.nullable(z.string()),
  postId: z.nullable(z.string()),
  postNumber: z.number().int(),
  postType: z.nullable(z.string()),
  slug: z.string(),
  targetName: z.nullable(z.string()),
  targetUserId: z.number().int(),
  targetUsername: z.string(),
  title: z.string(),
  topicId: z.number().int(),
  userId: z.number().int(),
  username: z.string(),
}).transform((v) => {
  return remap$(v, {
    actingAvatarTemplate: "acting_avatar_template",
    actingName: "acting_name",
    actingUserId: "acting_user_id",
    actingUsername: "acting_username",
    actionCode: "action_code",
    actionType: "action_type",
    avatarTemplate: "avatar_template",
    categoryId: "category_id",
    createdAt: "created_at",
    postId: "post_id",
    postNumber: "post_number",
    postType: "post_type",
    targetName: "target_name",
    targetUserId: "target_user_id",
    targetUsername: "target_username",
    topicId: "topic_id",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserActions$ {
  /** @deprecated use `UserActions$inboundSchema` instead. */
  export const inboundSchema = UserActions$inboundSchema;
  /** @deprecated use `UserActions$outboundSchema` instead. */
  export const outboundSchema = UserActions$outboundSchema;
  /** @deprecated use `UserActions$Outbound` instead. */
  export type Outbound = UserActions$Outbound;
}

/** @internal */
export const ListUserActionsResponseBody$inboundSchema: z.ZodType<
  ListUserActionsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  user_actions: z.array(z.lazy(() => UserActions$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "user_actions": "userActions",
  });
});

/** @internal */
export type ListUserActionsResponseBody$Outbound = {
  user_actions: Array<UserActions$Outbound>;
};

/** @internal */
export const ListUserActionsResponseBody$outboundSchema: z.ZodType<
  ListUserActionsResponseBody$Outbound,
  z.ZodTypeDef,
  ListUserActionsResponseBody
> = z.object({
  userActions: z.array(z.lazy(() => UserActions$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    userActions: "user_actions",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListUserActionsResponseBody$ {
  /** @deprecated use `ListUserActionsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListUserActionsResponseBody$inboundSchema;
  /** @deprecated use `ListUserActionsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListUserActionsResponseBody$outboundSchema;
  /** @deprecated use `ListUserActionsResponseBody$Outbound` instead. */
  export type Outbound = ListUserActionsResponseBody$Outbound;
}
