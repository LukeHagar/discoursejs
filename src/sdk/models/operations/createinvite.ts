/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class CreateInviteRequestBody extends SpeakeasyBase {
    /**
     * optional, for email invites
     */
    @SpeakeasyMetadata()
    @Expose({ name: "custom_message" })
    customMessage?: string;

    /**
     * required for email invites only
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * optional, if not supplied, the invite_expiry_days site setting is used
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expires_at" })
    expiresAt?: string;

    /**
     * Optional, either this or `group_names`. Comma separated list for multiple ids.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "group_ids" })
    groupIds?: string;

    /**
     * Optional, either this or `group_ids`. Comma separated list for multiple names.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "group_names" })
    groupNames?: string;

    /**
     * optional, for link invites
     */
    @SpeakeasyMetadata()
    @Expose({ name: "max_redemptions_allowed" })
    maxRedemptionsAllowed?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "skip_email" })
    skipEmail?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_id" })
    topicId?: number;
}

export class CreateInviteRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Key" })
    apiKey: string;

    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Username" })
    apiUsername: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: CreateInviteRequestBody;
}

/**
 * success response
 */
export class CreateInviteResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    createdAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "custom_message" })
    customMessage?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "emailed" })
    emailed?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "expired" })
    expired?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "expires_at" })
    expiresAt?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "groups" })
    groups?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "link" })
    link?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "topics" })
    topics?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    updatedAt?: string;
}

export class CreateInviteResponse extends SpeakeasyBase {
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
     * success response
     */
    @SpeakeasyMetadata()
    object?: CreateInviteResponseBody;
}
