/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

export type ExternalIds = {};

export type CreateUserRequestBody = {
  /**
   * This param requires an api key in the request header or it will be ignored
   */
  active?: boolean | undefined;
  approved?: boolean | undefined;
  email: string;
  externalIds?: ExternalIds | undefined;
  name: string;
  password: string;
  userFields1?: boolean | undefined;
  username: string;
};

export type CreateUserRequest = {
  apiKey: string;
  apiUsername: string;
  requestBody?: CreateUserRequestBody | undefined;
};

/**
 * user created
 */
export type CreateUserResponseBody = {
  active: boolean;
  message: string;
  success: boolean;
  userId?: number | undefined;
};

/** @internal */
export const ExternalIds$inboundSchema: z.ZodType<
  ExternalIds,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ExternalIds$Outbound = {};

/** @internal */
export const ExternalIds$outboundSchema: z.ZodType<
  ExternalIds$Outbound,
  z.ZodTypeDef,
  ExternalIds
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExternalIds$ {
  /** @deprecated use `ExternalIds$inboundSchema` instead. */
  export const inboundSchema = ExternalIds$inboundSchema;
  /** @deprecated use `ExternalIds$outboundSchema` instead. */
  export const outboundSchema = ExternalIds$outboundSchema;
  /** @deprecated use `ExternalIds$Outbound` instead. */
  export type Outbound = ExternalIds$Outbound;
}

/** @internal */
export const CreateUserRequestBody$inboundSchema: z.ZodType<
  CreateUserRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.boolean().optional(),
  approved: z.boolean().optional(),
  email: z.string(),
  external_ids: z.lazy(() => ExternalIds$inboundSchema).optional(),
  name: z.string(),
  password: z.string(),
  "user_fields[1]": z.boolean().optional(),
  username: z.string(),
}).transform((v) => {
  return remap$(v, {
    "external_ids": "externalIds",
    "user_fields[1]": "userFields1",
  });
});

/** @internal */
export type CreateUserRequestBody$Outbound = {
  active?: boolean | undefined;
  approved?: boolean | undefined;
  email: string;
  external_ids?: ExternalIds$Outbound | undefined;
  name: string;
  password: string;
  "user_fields[1]"?: boolean | undefined;
  username: string;
};

/** @internal */
export const CreateUserRequestBody$outboundSchema: z.ZodType<
  CreateUserRequestBody$Outbound,
  z.ZodTypeDef,
  CreateUserRequestBody
> = z.object({
  active: z.boolean().optional(),
  approved: z.boolean().optional(),
  email: z.string(),
  externalIds: z.lazy(() => ExternalIds$outboundSchema).optional(),
  name: z.string(),
  password: z.string(),
  userFields1: z.boolean().optional(),
  username: z.string(),
}).transform((v) => {
  return remap$(v, {
    externalIds: "external_ids",
    userFields1: "user_fields[1]",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUserRequestBody$ {
  /** @deprecated use `CreateUserRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateUserRequestBody$inboundSchema;
  /** @deprecated use `CreateUserRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateUserRequestBody$outboundSchema;
  /** @deprecated use `CreateUserRequestBody$Outbound` instead. */
  export type Outbound = CreateUserRequestBody$Outbound;
}

/** @internal */
export const CreateUserRequest$inboundSchema: z.ZodType<
  CreateUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "Api-Key": z.string(),
  "Api-Username": z.string(),
  RequestBody: z.lazy(() => CreateUserRequestBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "Api-Key": "apiKey",
    "Api-Username": "apiUsername",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateUserRequest$Outbound = {
  "Api-Key": string;
  "Api-Username": string;
  RequestBody?: CreateUserRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateUserRequest$outboundSchema: z.ZodType<
  CreateUserRequest$Outbound,
  z.ZodTypeDef,
  CreateUserRequest
> = z.object({
  apiKey: z.string(),
  apiUsername: z.string(),
  requestBody: z.lazy(() => CreateUserRequestBody$outboundSchema).optional(),
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
export namespace CreateUserRequest$ {
  /** @deprecated use `CreateUserRequest$inboundSchema` instead. */
  export const inboundSchema = CreateUserRequest$inboundSchema;
  /** @deprecated use `CreateUserRequest$outboundSchema` instead. */
  export const outboundSchema = CreateUserRequest$outboundSchema;
  /** @deprecated use `CreateUserRequest$Outbound` instead. */
  export type Outbound = CreateUserRequest$Outbound;
}

/** @internal */
export const CreateUserResponseBody$inboundSchema: z.ZodType<
  CreateUserResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.boolean(),
  message: z.string(),
  success: z.boolean(),
  user_id: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "user_id": "userId",
  });
});

/** @internal */
export type CreateUserResponseBody$Outbound = {
  active: boolean;
  message: string;
  success: boolean;
  user_id?: number | undefined;
};

/** @internal */
export const CreateUserResponseBody$outboundSchema: z.ZodType<
  CreateUserResponseBody$Outbound,
  z.ZodTypeDef,
  CreateUserResponseBody
> = z.object({
  active: z.boolean(),
  message: z.string(),
  success: z.boolean(),
  userId: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUserResponseBody$ {
  /** @deprecated use `CreateUserResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateUserResponseBody$inboundSchema;
  /** @deprecated use `CreateUserResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateUserResponseBody$outboundSchema;
  /** @deprecated use `CreateUserResponseBody$Outbound` instead. */
  export type Outbound = CreateUserResponseBody$Outbound;
}
