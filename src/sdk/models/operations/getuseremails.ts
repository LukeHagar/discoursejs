/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type GetUserEmailsRequest = {
  username: string;
};

/**
 * success response
 */
export type GetUserEmailsResponseBody = {
  associatedAccounts: Array<any>;
  email: string;
  secondaryEmails: Array<any>;
  unconfirmedEmails: Array<any>;
};

/** @internal */
export const GetUserEmailsRequest$inboundSchema: z.ZodType<
  GetUserEmailsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  username: z.string(),
});

/** @internal */
export type GetUserEmailsRequest$Outbound = {
  username: string;
};

/** @internal */
export const GetUserEmailsRequest$outboundSchema: z.ZodType<
  GetUserEmailsRequest$Outbound,
  z.ZodTypeDef,
  GetUserEmailsRequest
> = z.object({
  username: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUserEmailsRequest$ {
  /** @deprecated use `GetUserEmailsRequest$inboundSchema` instead. */
  export const inboundSchema = GetUserEmailsRequest$inboundSchema;
  /** @deprecated use `GetUserEmailsRequest$outboundSchema` instead. */
  export const outboundSchema = GetUserEmailsRequest$outboundSchema;
  /** @deprecated use `GetUserEmailsRequest$Outbound` instead. */
  export type Outbound = GetUserEmailsRequest$Outbound;
}

/** @internal */
export const GetUserEmailsResponseBody$inboundSchema: z.ZodType<
  GetUserEmailsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  associated_accounts: z.array(z.any()),
  email: z.string(),
  secondary_emails: z.array(z.any()),
  unconfirmed_emails: z.array(z.any()),
}).transform((v) => {
  return remap$(v, {
    "associated_accounts": "associatedAccounts",
    "secondary_emails": "secondaryEmails",
    "unconfirmed_emails": "unconfirmedEmails",
  });
});

/** @internal */
export type GetUserEmailsResponseBody$Outbound = {
  associated_accounts: Array<any>;
  email: string;
  secondary_emails: Array<any>;
  unconfirmed_emails: Array<any>;
};

/** @internal */
export const GetUserEmailsResponseBody$outboundSchema: z.ZodType<
  GetUserEmailsResponseBody$Outbound,
  z.ZodTypeDef,
  GetUserEmailsResponseBody
> = z.object({
  associatedAccounts: z.array(z.any()),
  email: z.string(),
  secondaryEmails: z.array(z.any()),
  unconfirmedEmails: z.array(z.any()),
}).transform((v) => {
  return remap$(v, {
    associatedAccounts: "associated_accounts",
    secondaryEmails: "secondary_emails",
    unconfirmedEmails: "unconfirmed_emails",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUserEmailsResponseBody$ {
  /** @deprecated use `GetUserEmailsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetUserEmailsResponseBody$inboundSchema;
  /** @deprecated use `GetUserEmailsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetUserEmailsResponseBody$outboundSchema;
  /** @deprecated use `GetUserEmailsResponseBody$Outbound` instead. */
  export type Outbound = GetUserEmailsResponseBody$Outbound;
}
