/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type RefreshGravatarRequest = {
  username: string;
};

/**
 * response
 */
export type RefreshGravatarResponseBody = {
  gravatarAvatarTemplate: string | null;
  gravatarUploadId: number | null;
};

/** @internal */
export const RefreshGravatarRequest$inboundSchema: z.ZodType<
  RefreshGravatarRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  username: z.string(),
});

/** @internal */
export type RefreshGravatarRequest$Outbound = {
  username: string;
};

/** @internal */
export const RefreshGravatarRequest$outboundSchema: z.ZodType<
  RefreshGravatarRequest$Outbound,
  z.ZodTypeDef,
  RefreshGravatarRequest
> = z.object({
  username: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefreshGravatarRequest$ {
  /** @deprecated use `RefreshGravatarRequest$inboundSchema` instead. */
  export const inboundSchema = RefreshGravatarRequest$inboundSchema;
  /** @deprecated use `RefreshGravatarRequest$outboundSchema` instead. */
  export const outboundSchema = RefreshGravatarRequest$outboundSchema;
  /** @deprecated use `RefreshGravatarRequest$Outbound` instead. */
  export type Outbound = RefreshGravatarRequest$Outbound;
}

/** @internal */
export const RefreshGravatarResponseBody$inboundSchema: z.ZodType<
  RefreshGravatarResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  gravatar_avatar_template: z.nullable(z.string()),
  gravatar_upload_id: z.nullable(z.number().int()),
}).transform((v) => {
  return remap$(v, {
    "gravatar_avatar_template": "gravatarAvatarTemplate",
    "gravatar_upload_id": "gravatarUploadId",
  });
});

/** @internal */
export type RefreshGravatarResponseBody$Outbound = {
  gravatar_avatar_template: string | null;
  gravatar_upload_id: number | null;
};

/** @internal */
export const RefreshGravatarResponseBody$outboundSchema: z.ZodType<
  RefreshGravatarResponseBody$Outbound,
  z.ZodTypeDef,
  RefreshGravatarResponseBody
> = z.object({
  gravatarAvatarTemplate: z.nullable(z.string()),
  gravatarUploadId: z.nullable(z.number().int()),
}).transform((v) => {
  return remap$(v, {
    gravatarAvatarTemplate: "gravatar_avatar_template",
    gravatarUploadId: "gravatar_upload_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RefreshGravatarResponseBody$ {
  /** @deprecated use `RefreshGravatarResponseBody$inboundSchema` instead. */
  export const inboundSchema = RefreshGravatarResponseBody$inboundSchema;
  /** @deprecated use `RefreshGravatarResponseBody$outboundSchema` instead. */
  export const outboundSchema = RefreshGravatarResponseBody$outboundSchema;
  /** @deprecated use `RefreshGravatarResponseBody$Outbound` instead. */
  export type Outbound = RefreshGravatarResponseBody$Outbound;
}
