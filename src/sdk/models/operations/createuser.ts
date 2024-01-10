/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ExternalIds extends SpeakeasyBase {}

export class CreateUserRequestBody extends SpeakeasyBase {
    /**
     * This param requires an api key in the request header or it will be ignored
     */
    @SpeakeasyMetadata()
    @Expose({ name: "active" })
    active?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "approved" })
    approved?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    @SpeakeasyMetadata()
    @Expose({ name: "external_ids" })
    @Type(() => ExternalIds)
    externalIds?: ExternalIds;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password: string;

    @SpeakeasyMetadata()
    @Expose({ name: "user_fields[1]" })
    userFields1?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username: string;
}

export class CreateUserRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
    apiKey: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
    apiUsername: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CreateUserRequestBody;
}

/**
 * user created
 */
export class CreateUserResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "active" })
    active: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "user_id" })
    userId?: number;
}

export class CreateUserResponse extends SpeakeasyBase {
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
     * user created
     */
    @SpeakeasyMetadata()
    object?: CreateUserResponseBody;
}
