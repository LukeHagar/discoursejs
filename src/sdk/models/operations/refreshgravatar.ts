/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class RefreshGravatarRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;
}

/**
 * response
 */
export class RefreshGravatarResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "gravatar_avatar_template" })
    gravatarAvatarTemplate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "gravatar_upload_id" })
    gravatarUploadId: number;
}

export class RefreshGravatarResponse extends SpeakeasyBase {
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
     * response
     */
    @SpeakeasyMetadata()
    object?: RefreshGravatarResponseBody;
}
