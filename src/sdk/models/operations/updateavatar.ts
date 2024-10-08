/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const UpdateAvatarType = {
  Uploaded: "uploaded",
  Custom: "custom",
  Gravatar: "gravatar",
  System: "system",
} as const;
export type UpdateAvatarType = ClosedEnum<typeof UpdateAvatarType>;

export type UpdateAvatarRequestBody = {
  type: UpdateAvatarType;
  uploadId: number;
};

export type UpdateAvatarRequest = {
  requestBody?: UpdateAvatarRequestBody | undefined;
  username: string;
};

/**
 * avatar updated
 */
export type UpdateAvatarResponseBody = {
  success: string;
};

/** @internal */
export const UpdateAvatarType$inboundSchema: z.ZodNativeEnum<
  typeof UpdateAvatarType
> = z.nativeEnum(UpdateAvatarType);

/** @internal */
export const UpdateAvatarType$outboundSchema: z.ZodNativeEnum<
  typeof UpdateAvatarType
> = UpdateAvatarType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAvatarType$ {
  /** @deprecated use `UpdateAvatarType$inboundSchema` instead. */
  export const inboundSchema = UpdateAvatarType$inboundSchema;
  /** @deprecated use `UpdateAvatarType$outboundSchema` instead. */
  export const outboundSchema = UpdateAvatarType$outboundSchema;
}

/** @internal */
export const UpdateAvatarRequestBody$inboundSchema: z.ZodType<
  UpdateAvatarRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: UpdateAvatarType$inboundSchema,
  upload_id: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "upload_id": "uploadId",
  });
});

/** @internal */
export type UpdateAvatarRequestBody$Outbound = {
  type: string;
  upload_id: number;
};

/** @internal */
export const UpdateAvatarRequestBody$outboundSchema: z.ZodType<
  UpdateAvatarRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateAvatarRequestBody
> = z.object({
  type: UpdateAvatarType$outboundSchema,
  uploadId: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    uploadId: "upload_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAvatarRequestBody$ {
  /** @deprecated use `UpdateAvatarRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateAvatarRequestBody$inboundSchema;
  /** @deprecated use `UpdateAvatarRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateAvatarRequestBody$outboundSchema;
  /** @deprecated use `UpdateAvatarRequestBody$Outbound` instead. */
  export type Outbound = UpdateAvatarRequestBody$Outbound;
}

/** @internal */
export const UpdateAvatarRequest$inboundSchema: z.ZodType<
  UpdateAvatarRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RequestBody: z.lazy(() => UpdateAvatarRequestBody$inboundSchema).optional(),
  username: z.string(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateAvatarRequest$Outbound = {
  RequestBody?: UpdateAvatarRequestBody$Outbound | undefined;
  username: string;
};

/** @internal */
export const UpdateAvatarRequest$outboundSchema: z.ZodType<
  UpdateAvatarRequest$Outbound,
  z.ZodTypeDef,
  UpdateAvatarRequest
> = z.object({
  requestBody: z.lazy(() => UpdateAvatarRequestBody$outboundSchema).optional(),
  username: z.string(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAvatarRequest$ {
  /** @deprecated use `UpdateAvatarRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateAvatarRequest$inboundSchema;
  /** @deprecated use `UpdateAvatarRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateAvatarRequest$outboundSchema;
  /** @deprecated use `UpdateAvatarRequest$Outbound` instead. */
  export type Outbound = UpdateAvatarRequest$Outbound;
}

/** @internal */
export const UpdateAvatarResponseBody$inboundSchema: z.ZodType<
  UpdateAvatarResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.string(),
});

/** @internal */
export type UpdateAvatarResponseBody$Outbound = {
  success: string;
};

/** @internal */
export const UpdateAvatarResponseBody$outboundSchema: z.ZodType<
  UpdateAvatarResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateAvatarResponseBody
> = z.object({
  success: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAvatarResponseBody$ {
  /** @deprecated use `UpdateAvatarResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateAvatarResponseBody$inboundSchema;
  /** @deprecated use `UpdateAvatarResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateAvatarResponseBody$outboundSchema;
  /** @deprecated use `UpdateAvatarResponseBody$Outbound` instead. */
  export type Outbound = UpdateAvatarResponseBody$Outbound;
}
