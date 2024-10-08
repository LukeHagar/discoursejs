/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const Enabled = {
  True: "true",
  False: "false",
} as const;
export type Enabled = ClosedEnum<typeof Enabled>;

export const Status = {
  Closed: "closed",
  Pinned: "pinned",
  PinnedGlobally: "pinned_globally",
  Archived: "archived",
  Visible: "visible",
} as const;
export type Status = ClosedEnum<typeof Status>;

export type UpdateTopicStatusRequestBody = {
  enabled: Enabled;
  status: Status;
  /**
   * Only required for `pinned` and `pinned_globally`
   */
  until?: string | undefined;
};

export type UpdateTopicStatusRequest = {
  apiKey: string;
  apiUsername: string;
  requestBody?: UpdateTopicStatusRequestBody | undefined;
  id: string;
};

/**
 * topic updated
 */
export type UpdateTopicStatusResponseBody = {
  success?: string | undefined;
  topicStatusUpdate?: string | null | undefined;
};

/** @internal */
export const Enabled$inboundSchema: z.ZodNativeEnum<typeof Enabled> = z
  .nativeEnum(Enabled);

/** @internal */
export const Enabled$outboundSchema: z.ZodNativeEnum<typeof Enabled> =
  Enabled$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Enabled$ {
  /** @deprecated use `Enabled$inboundSchema` instead. */
  export const inboundSchema = Enabled$inboundSchema;
  /** @deprecated use `Enabled$outboundSchema` instead. */
  export const outboundSchema = Enabled$outboundSchema;
}

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const UpdateTopicStatusRequestBody$inboundSchema: z.ZodType<
  UpdateTopicStatusRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  enabled: Enabled$inboundSchema,
  status: Status$inboundSchema,
  until: z.string().optional(),
});

/** @internal */
export type UpdateTopicStatusRequestBody$Outbound = {
  enabled: string;
  status: string;
  until?: string | undefined;
};

/** @internal */
export const UpdateTopicStatusRequestBody$outboundSchema: z.ZodType<
  UpdateTopicStatusRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateTopicStatusRequestBody
> = z.object({
  enabled: Enabled$outboundSchema,
  status: Status$outboundSchema,
  until: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTopicStatusRequestBody$ {
  /** @deprecated use `UpdateTopicStatusRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateTopicStatusRequestBody$inboundSchema;
  /** @deprecated use `UpdateTopicStatusRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateTopicStatusRequestBody$outboundSchema;
  /** @deprecated use `UpdateTopicStatusRequestBody$Outbound` instead. */
  export type Outbound = UpdateTopicStatusRequestBody$Outbound;
}

/** @internal */
export const UpdateTopicStatusRequest$inboundSchema: z.ZodType<
  UpdateTopicStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "Api-Key": z.string(),
  "Api-Username": z.string(),
  RequestBody: z.lazy(() => UpdateTopicStatusRequestBody$inboundSchema)
    .optional(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "Api-Key": "apiKey",
    "Api-Username": "apiUsername",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateTopicStatusRequest$Outbound = {
  "Api-Key": string;
  "Api-Username": string;
  RequestBody?: UpdateTopicStatusRequestBody$Outbound | undefined;
  id: string;
};

/** @internal */
export const UpdateTopicStatusRequest$outboundSchema: z.ZodType<
  UpdateTopicStatusRequest$Outbound,
  z.ZodTypeDef,
  UpdateTopicStatusRequest
> = z.object({
  apiKey: z.string(),
  apiUsername: z.string(),
  requestBody: z.lazy(() => UpdateTopicStatusRequestBody$outboundSchema)
    .optional(),
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
export namespace UpdateTopicStatusRequest$ {
  /** @deprecated use `UpdateTopicStatusRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateTopicStatusRequest$inboundSchema;
  /** @deprecated use `UpdateTopicStatusRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateTopicStatusRequest$outboundSchema;
  /** @deprecated use `UpdateTopicStatusRequest$Outbound` instead. */
  export type Outbound = UpdateTopicStatusRequest$Outbound;
}

/** @internal */
export const UpdateTopicStatusResponseBody$inboundSchema: z.ZodType<
  UpdateTopicStatusResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.string().optional(),
  topic_status_update: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "topic_status_update": "topicStatusUpdate",
  });
});

/** @internal */
export type UpdateTopicStatusResponseBody$Outbound = {
  success?: string | undefined;
  topic_status_update?: string | null | undefined;
};

/** @internal */
export const UpdateTopicStatusResponseBody$outboundSchema: z.ZodType<
  UpdateTopicStatusResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateTopicStatusResponseBody
> = z.object({
  success: z.string().optional(),
  topicStatusUpdate: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    topicStatusUpdate: "topic_status_update",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateTopicStatusResponseBody$ {
  /** @deprecated use `UpdateTopicStatusResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateTopicStatusResponseBody$inboundSchema;
  /** @deprecated use `UpdateTopicStatusResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateTopicStatusResponseBody$outboundSchema;
  /** @deprecated use `UpdateTopicStatusResponseBody$Outbound` instead. */
  export type Outbound = UpdateTopicStatusResponseBody$Outbound;
}
