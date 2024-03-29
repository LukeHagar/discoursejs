/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class Metadata extends SpeakeasyBase {
    /**
     * The SHA1 checksum of the upload binary blob. Optionally be provided and serves as an additional security check when later processing the file in complete-external-upload endpoint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sha1-checksum" })
    sha1Checksum?: string;
}

export enum UploadType {
    Avatar = "avatar",
    ProfileBackground = "profile_background",
    CardBackground = "card_background",
    CustomEmoji = "custom_emoji",
    Composer = "composer",
}

export class CreateMultipartUploadRequestBody extends SpeakeasyBase {
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
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "upload_type" })
    uploadType: UploadType;
}

/**
 * external upload initialized
 */
export class CreateMultipartUploadResponseBody extends SpeakeasyBase {
    /**
     * The identifier of the multipart upload in the external storage provider. This is the multipart upload_id in AWS S3.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "external_upload_identifier" })
    externalUploadIdentifier: string;

    /**
     * The path of the temporary file on the external storage service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key: string;

    /**
     * A unique string that identifies the external upload. This must be stored and then sent in the /complete-multipart and /batch-presign-multipart-parts endpoints.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unique_identifier" })
    uniqueIdentifier: string;
}

export class CreateMultipartUploadResponse extends SpeakeasyBase {
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
    object?: CreateMultipartUploadResponseBody;
}
