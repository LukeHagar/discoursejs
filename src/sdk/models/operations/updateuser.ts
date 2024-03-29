/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateUserExternalIds extends SpeakeasyBase {}

export class UpdateUserRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "external_ids" })
    @Type(() => UpdateUserExternalIds)
    externalIds?: UpdateUserExternalIds;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class UpdateUserRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
    apiKey: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
    apiUsername: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: UpdateUserRequestBody;
}

export class UpdateUserUser extends SpeakeasyBase {}

/**
 * user updated
 */
export class UpdateUserResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success: string;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => UpdateUserUser)
    user: UpdateUserUser;
}

export class UpdateUserResponse extends SpeakeasyBase {
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
     * user updated
     */
    @SpeakeasyMetadata()
    object?: UpdateUserResponseBody;
}
