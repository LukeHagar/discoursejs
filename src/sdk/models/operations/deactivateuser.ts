/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeactivateUserRequest = {
  id: number;
};

/**
 * response
 */
export type DeactivateUserResponseBody = {
  success: string;
};

/** @internal */
export const DeactivateUserRequest$inboundSchema: z.ZodType<
  DeactivateUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
});

/** @internal */
export type DeactivateUserRequest$Outbound = {
  id: number;
};

/** @internal */
export const DeactivateUserRequest$outboundSchema: z.ZodType<
  DeactivateUserRequest$Outbound,
  z.ZodTypeDef,
  DeactivateUserRequest
> = z.object({
  id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeactivateUserRequest$ {
  /** @deprecated use `DeactivateUserRequest$inboundSchema` instead. */
  export const inboundSchema = DeactivateUserRequest$inboundSchema;
  /** @deprecated use `DeactivateUserRequest$outboundSchema` instead. */
  export const outboundSchema = DeactivateUserRequest$outboundSchema;
  /** @deprecated use `DeactivateUserRequest$Outbound` instead. */
  export type Outbound = DeactivateUserRequest$Outbound;
}

/** @internal */
export const DeactivateUserResponseBody$inboundSchema: z.ZodType<
  DeactivateUserResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.string(),
});

/** @internal */
export type DeactivateUserResponseBody$Outbound = {
  success: string;
};

/** @internal */
export const DeactivateUserResponseBody$outboundSchema: z.ZodType<
  DeactivateUserResponseBody$Outbound,
  z.ZodTypeDef,
  DeactivateUserResponseBody
> = z.object({
  success: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeactivateUserResponseBody$ {
  /** @deprecated use `DeactivateUserResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeactivateUserResponseBody$inboundSchema;
  /** @deprecated use `DeactivateUserResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeactivateUserResponseBody$outboundSchema;
  /** @deprecated use `DeactivateUserResponseBody$Outbound` instead. */
  export type Outbound = DeactivateUserResponseBody$Outbound;
}
