/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GeneratePresignedPutMetadata extends SpeakeasyBase {
    /**
     * The SHA1 checksum of the upload binary blob. Optionally be provided and serves as an additional security check when later processing the file in complete-external-upload endpoint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sha1-checksum" })
    sha1Checksum?: string;
}

export enum GeneratePresignedPutType {
    Avatar = "avatar",
    ProfileBackground = "profile_background",
    CardBackground = "card_background",
    CustomEmoji = "custom_emoji",
    Composer = "composer",
}

export class GeneratePresignedPutRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "file_name" })
    fileName: string;

    /**
     * File size should be represented in bytes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "file_size" })
    fileSize: number;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => GeneratePresignedPutMetadata)
    metadata?: GeneratePresignedPutMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: GeneratePresignedPutType;
}

/**
 * A map of headers that must be sent with the PUT request.
 */
export class SignedHeaders extends SpeakeasyBase {}

/**
 * external upload initialized
 */
export class GeneratePresignedPutResponseBody extends SpeakeasyBase {
    /**
     * The path of the temporary file on the external storage service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key?: string;

    /**
     * A map of headers that must be sent with the PUT request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "signed_headers" })
    @Type(() => SignedHeaders)
    signedHeaders?: SignedHeaders;

    /**
     * A unique string that identifies the external upload. This must be stored and then sent in the /complete-external-upload endpoint to complete the direct upload.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unique_identifier" })
    uniqueIdentifier?: string;

    /**
     * A presigned PUT URL which must be used to upload the file binary blob to.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

export class GeneratePresignedPutResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * external upload initialized
     */
    @SpeakeasyMetadata()
    object?: GeneratePresignedPutResponseBody;
}
