/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { ClosedEnum } from "../../types/enums.js";

export type FileT = {
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  fileName: string;
};

export const Type = {
  Avatar: "avatar",
  ProfileBackground: "profile_background",
  CardBackground: "card_background",
  CustomEmoji: "custom_emoji",
  Composer: "composer",
} as const;
export type Type = ClosedEnum<typeof Type>;

export type CreateUploadRequestBody = {
  type: Type;
  file?: FileT | Blob | undefined;
  /**
   * Use this flag to return an id and url
   */
  synchronous?: boolean | undefined;
  /**
   * required if uploading an avatar
   */
  userId?: number | undefined;
};

/**
 * file uploaded
 */
export type CreateUploadResponseBody = {
  dominantColor?: string | null | undefined;
  extension: string;
  filesize: number;
  height: number;
  humanFilesize: string;
  id: number;
  originalFilename: string;
  retainHours: string | null;
  shortPath: string;
  shortUrl: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
  url: string;
  width: number;
};

/** @internal */
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z
  .object({
    content: z.union([
      z.instanceof(ReadableStream<Uint8Array>),
      z.instanceof(Blob),
      z.instanceof(ArrayBuffer),
      z.instanceof(Uint8Array),
    ]),
    fileName: z.string(),
  });

/** @internal */
export type FileT$Outbound = {
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  fileName: string;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<
  FileT$Outbound,
  z.ZodTypeDef,
  FileT
> = z.object({
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
  fileName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileT$ {
  /** @deprecated use `FileT$inboundSchema` instead. */
  export const inboundSchema = FileT$inboundSchema;
  /** @deprecated use `FileT$outboundSchema` instead. */
  export const outboundSchema = FileT$outboundSchema;
  /** @deprecated use `FileT$Outbound` instead. */
  export type Outbound = FileT$Outbound;
}

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const CreateUploadRequestBody$inboundSchema: z.ZodType<
  CreateUploadRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: Type$inboundSchema,
  file: z.lazy(() => FileT$inboundSchema).optional(),
  synchronous: z.boolean().optional(),
  user_id: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "user_id": "userId",
  });
});

/** @internal */
export type CreateUploadRequestBody$Outbound = {
  type: string;
  file?: FileT$Outbound | Blob | undefined;
  synchronous?: boolean | undefined;
  user_id?: number | undefined;
};

/** @internal */
export const CreateUploadRequestBody$outboundSchema: z.ZodType<
  CreateUploadRequestBody$Outbound,
  z.ZodTypeDef,
  CreateUploadRequestBody
> = z.object({
  type: Type$outboundSchema,
  file: z.lazy(() => FileT$outboundSchema).or(blobLikeSchema).optional(),
  synchronous: z.boolean().optional(),
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
export namespace CreateUploadRequestBody$ {
  /** @deprecated use `CreateUploadRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateUploadRequestBody$inboundSchema;
  /** @deprecated use `CreateUploadRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateUploadRequestBody$outboundSchema;
  /** @deprecated use `CreateUploadRequestBody$Outbound` instead. */
  export type Outbound = CreateUploadRequestBody$Outbound;
}

/** @internal */
export const CreateUploadResponseBody$inboundSchema: z.ZodType<
  CreateUploadResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  dominant_color: z.nullable(z.string()).optional(),
  extension: z.string(),
  filesize: z.number().int(),
  height: z.number().int(),
  human_filesize: z.string(),
  id: z.number().int(),
  original_filename: z.string(),
  retain_hours: z.nullable(z.string()),
  short_path: z.string(),
  short_url: z.string(),
  thumbnail_height: z.number().int(),
  thumbnail_width: z.number().int(),
  url: z.string(),
  width: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "dominant_color": "dominantColor",
    "human_filesize": "humanFilesize",
    "original_filename": "originalFilename",
    "retain_hours": "retainHours",
    "short_path": "shortPath",
    "short_url": "shortUrl",
    "thumbnail_height": "thumbnailHeight",
    "thumbnail_width": "thumbnailWidth",
  });
});

/** @internal */
export type CreateUploadResponseBody$Outbound = {
  dominant_color?: string | null | undefined;
  extension: string;
  filesize: number;
  height: number;
  human_filesize: string;
  id: number;
  original_filename: string;
  retain_hours: string | null;
  short_path: string;
  short_url: string;
  thumbnail_height: number;
  thumbnail_width: number;
  url: string;
  width: number;
};

/** @internal */
export const CreateUploadResponseBody$outboundSchema: z.ZodType<
  CreateUploadResponseBody$Outbound,
  z.ZodTypeDef,
  CreateUploadResponseBody
> = z.object({
  dominantColor: z.nullable(z.string()).optional(),
  extension: z.string(),
  filesize: z.number().int(),
  height: z.number().int(),
  humanFilesize: z.string(),
  id: z.number().int(),
  originalFilename: z.string(),
  retainHours: z.nullable(z.string()),
  shortPath: z.string(),
  shortUrl: z.string(),
  thumbnailHeight: z.number().int(),
  thumbnailWidth: z.number().int(),
  url: z.string(),
  width: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    dominantColor: "dominant_color",
    humanFilesize: "human_filesize",
    originalFilename: "original_filename",
    retainHours: "retain_hours",
    shortPath: "short_path",
    shortUrl: "short_url",
    thumbnailHeight: "thumbnail_height",
    thumbnailWidth: "thumbnail_width",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUploadResponseBody$ {
  /** @deprecated use `CreateUploadResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateUploadResponseBody$inboundSchema;
  /** @deprecated use `CreateUploadResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateUploadResponseBody$outboundSchema;
  /** @deprecated use `CreateUploadResponseBody$Outbound` instead. */
  export type Outbound = CreateUploadResponseBody$Outbound;
}
