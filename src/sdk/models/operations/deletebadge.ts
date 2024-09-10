/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteBadgeRequest = {
  id: number;
};

/** @internal */
export const DeleteBadgeRequest$inboundSchema: z.ZodType<
  DeleteBadgeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
});

/** @internal */
export type DeleteBadgeRequest$Outbound = {
  id: number;
};

/** @internal */
export const DeleteBadgeRequest$outboundSchema: z.ZodType<
  DeleteBadgeRequest$Outbound,
  z.ZodTypeDef,
  DeleteBadgeRequest
> = z.object({
  id: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteBadgeRequest$ {
  /** @deprecated use `DeleteBadgeRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteBadgeRequest$inboundSchema;
  /** @deprecated use `DeleteBadgeRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteBadgeRequest$outboundSchema;
  /** @deprecated use `DeleteBadgeRequest$Outbound` instead. */
  export type Outbound = DeleteBadgeRequest$Outbound;
}
