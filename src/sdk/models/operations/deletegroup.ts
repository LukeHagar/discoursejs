/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteGroupRequest = {
  id: number;
};

/**
 * response
 */
export type DeleteGroupResponseBody = {
  success: string;
};

/** @internal */
export const DeleteGroupRequest$inboundSchema: z.ZodType<
  DeleteGroupRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
});

/** @internal */
export type DeleteGroupRequest$Outbound = {
  id: number;
};

/** @internal */
export const DeleteGroupRequest$outboundSchema: z.ZodType<
  DeleteGroupRequest$Outbound,
  z.ZodTypeDef,
  DeleteGroupRequest
> = z.object({
  id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteGroupRequest$ {
  /** @deprecated use `DeleteGroupRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteGroupRequest$inboundSchema;
  /** @deprecated use `DeleteGroupRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteGroupRequest$outboundSchema;
  /** @deprecated use `DeleteGroupRequest$Outbound` instead. */
  export type Outbound = DeleteGroupRequest$Outbound;
}

/** @internal */
export const DeleteGroupResponseBody$inboundSchema: z.ZodType<
  DeleteGroupResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.string(),
});

/** @internal */
export type DeleteGroupResponseBody$Outbound = {
  success: string;
};

/** @internal */
export const DeleteGroupResponseBody$outboundSchema: z.ZodType<
  DeleteGroupResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteGroupResponseBody
> = z.object({
  success: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteGroupResponseBody$ {
  /** @deprecated use `DeleteGroupResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteGroupResponseBody$inboundSchema;
  /** @deprecated use `DeleteGroupResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteGroupResponseBody$outboundSchema;
  /** @deprecated use `DeleteGroupResponseBody$Outbound` instead. */
  export type Outbound = DeleteGroupResponseBody$Outbound;
}
