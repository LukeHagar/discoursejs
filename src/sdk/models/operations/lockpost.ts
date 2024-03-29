/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class LockPostRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "locked" })
    locked: string;
}

export class LockPostRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
    apiKey: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
    apiUsername: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: LockPostRequestBody;
}

/**
 * post updated
 */
export class LockPostResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "locked" })
    locked?: boolean;
}

export class LockPostResponse extends SpeakeasyBase {
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
     * post updated
     */
    @SpeakeasyMetadata()
    object?: LockPostResponseBody;
}
