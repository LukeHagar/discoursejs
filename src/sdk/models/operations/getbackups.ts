/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ResponseBody = {
  filename: string;
  lastModified: string;
  size: number;
};

/** @internal */
export const ResponseBody$inboundSchema: z.ZodType<
  ResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  filename: z.string(),
  last_modified: z.string(),
  size: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "last_modified": "lastModified",
  });
});

/** @internal */
export type ResponseBody$Outbound = {
  filename: string;
  last_modified: string;
  size: number;
};

/** @internal */
export const ResponseBody$outboundSchema: z.ZodType<
  ResponseBody$Outbound,
  z.ZodTypeDef,
  ResponseBody
> = z.object({
  filename: z.string(),
  lastModified: z.string(),
  size: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    lastModified: "last_modified",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBody$ {
  /** @deprecated use `ResponseBody$inboundSchema` instead. */
  export const inboundSchema = ResponseBody$inboundSchema;
  /** @deprecated use `ResponseBody$outboundSchema` instead. */
  export const outboundSchema = ResponseBody$outboundSchema;
  /** @deprecated use `ResponseBody$Outbound` instead. */
  export type Outbound = ResponseBody$Outbound;
}
