/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type Topic = {
  categoryId?: number | undefined;
  title?: string | undefined;
};

export type UpdateTopicRequestBody = {
  topic?: Topic | undefined;
};

export type UpdateTopicRequest = {
  apiKey: string;
  apiUsername: string;
  requestBody?: UpdateTopicRequestBody | undefined;
  id: string;
};

export type BasicTopic = {
  fancyTitle?: string | undefined;
  id?: number | undefined;
  postsCount?: number | undefined;
  slug?: string | undefined;
  title?: string | undefined;
};

/**
 * topic updated
 */
export type UpdateTopicResponseBody = {
  basicTopic?: BasicTopic | undefined;
};

/** @internal */
export const Topic$inboundSchema: z.ZodType<Topic, z.ZodTypeDef, unknown> = z
  .object({
    category_id: z.number().int().optional(),
    title: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "category_id": "categoryId",
    });
  });

/** @internal */
export type Topic$Outbound = {
  category_id?: number | undefined;
  title?: string | undefined;
};

/** @internal */
export const Topic$outboundSchema: z.ZodType<
  Topic$Outbound,
  z.ZodTypeDef,
  Topic
> = z.object({
  categoryId: z.number().int().optional(),
  title: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    categoryId: "category_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Topic$ {
  /** @deprecated use `Topic$inboundSchema` instead. */
  export const inboundSchema = Topic$inboundSchema;
  /** @deprecated use `Topic$outboundSchema` instead. */
  export const outboundSchema = Topic$outboundSchema;
  /** @deprecated use `Topic$Outbound` instead. */
  export type Outbound = Topic$Outbound;
}

/** @internal */
export const UpdateTopicRequestBody$inboundSchema: z.ZodType<
  UpdateTopicRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  topic: z.lazy(() => Topic$inboundSchema).optional(),
});

/** @internal */
export type UpdateTopicRequestBody$Outbound = {
  topic?: Topic$Outbound | undefined;
};

/** @internal */
export const UpdateTopicRequestBody$outboundSchema: z.ZodType<
  UpdateTopicRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateTopicRequestBody
> = z.object({
  topic: z.lazy(() => Topic$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTopicRequestBody$ {
  /** @deprecated use `UpdateTopicRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateTopicRequestBody$inboundSchema;
  /** @deprecated use `UpdateTopicRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateTopicRequestBody$outboundSchema;
  /** @deprecated use `UpdateTopicRequestBody$Outbound` instead. */
  export type Outbound = UpdateTopicRequestBody$Outbound;
}

/** @internal */
export const UpdateTopicRequest$inboundSchema: z.ZodType<
  UpdateTopicRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "Api-Key": z.string(),
  "Api-Username": z.string(),
  RequestBody: z.lazy(() => UpdateTopicRequestBody$inboundSchema).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "Api-Key": "apiKey",
    "Api-Username": "apiUsername",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateTopicRequest$Outbound = {
  "Api-Key": string;
  "Api-Username": string;
  RequestBody?: UpdateTopicRequestBody$Outbound | undefined;
  id: string;
};

/** @internal */
export const UpdateTopicRequest$outboundSchema: z.ZodType<
  UpdateTopicRequest$Outbound,
  z.ZodTypeDef,
  UpdateTopicRequest
> = z.object({
  apiKey: z.string(),
  apiUsername: z.string(),
  requestBody: z.lazy(() => UpdateTopicRequestBody$outboundSchema).optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    apiKey: "Api-Key",
    apiUsername: "Api-Username",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTopicRequest$ {
  /** @deprecated use `UpdateTopicRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateTopicRequest$inboundSchema;
  /** @deprecated use `UpdateTopicRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateTopicRequest$outboundSchema;
  /** @deprecated use `UpdateTopicRequest$Outbound` instead. */
  export type Outbound = UpdateTopicRequest$Outbound;
}

/** @internal */
export const BasicTopic$inboundSchema: z.ZodType<
  BasicTopic,
  z.ZodTypeDef,
  unknown
> = z.object({
  fancy_title: z.string().optional(),
  id: z.number().int().optional(),
  posts_count: z.number().int().optional(),
  slug: z.string().optional(),
  title: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "fancy_title": "fancyTitle",
    "posts_count": "postsCount",
  });
});

/** @internal */
export type BasicTopic$Outbound = {
  fancy_title?: string | undefined;
  id?: number | undefined;
  posts_count?: number | undefined;
  slug?: string | undefined;
  title?: string | undefined;
};

/** @internal */
export const BasicTopic$outboundSchema: z.ZodType<
  BasicTopic$Outbound,
  z.ZodTypeDef,
  BasicTopic
> = z.object({
  fancyTitle: z.string().optional(),
  id: z.number().int().optional(),
  postsCount: z.number().int().optional(),
  slug: z.string().optional(),
  title: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    fancyTitle: "fancy_title",
    postsCount: "posts_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BasicTopic$ {
  /** @deprecated use `BasicTopic$inboundSchema` instead. */
  export const inboundSchema = BasicTopic$inboundSchema;
  /** @deprecated use `BasicTopic$outboundSchema` instead. */
  export const outboundSchema = BasicTopic$outboundSchema;
  /** @deprecated use `BasicTopic$Outbound` instead. */
  export type Outbound = BasicTopic$Outbound;
}

/** @internal */
export const UpdateTopicResponseBody$inboundSchema: z.ZodType<
  UpdateTopicResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  basic_topic: z.lazy(() => BasicTopic$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "basic_topic": "basicTopic",
  });
});

/** @internal */
export type UpdateTopicResponseBody$Outbound = {
  basic_topic?: BasicTopic$Outbound | undefined;
};

/** @internal */
export const UpdateTopicResponseBody$outboundSchema: z.ZodType<
  UpdateTopicResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateTopicResponseBody
> = z.object({
  basicTopic: z.lazy(() => BasicTopic$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    basicTopic: "basic_topic",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTopicResponseBody$ {
  /** @deprecated use `UpdateTopicResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateTopicResponseBody$inboundSchema;
  /** @deprecated use `UpdateTopicResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateTopicResponseBody$outboundSchema;
  /** @deprecated use `UpdateTopicResponseBody$Outbound` instead. */
  export type Outbound = UpdateTopicResponseBody$Outbound;
}
