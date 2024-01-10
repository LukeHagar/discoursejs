/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class SuspendUserRequestBody extends SpeakeasyBase {
    /**
     * Will send an email with this message when present
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "post_action" })
    postAction?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason: string;

    @SpeakeasyMetadata()
    @Expose({ name: "suspend_until" })
    suspendUntil: string;
}

export class SuspendUserRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: SuspendUserRequestBody;
}

export class SuspendedBy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "avatar_template" })
    avatarTemplate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username: string;
}

export class Suspension extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "full_suspend_reason" })
    fullSuspendReason: string;

    @SpeakeasyMetadata()
    @Expose({ name: "suspend_reason" })
    suspendReason: string;

    @SpeakeasyMetadata()
    @Expose({ name: "suspended_at" })
    suspendedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "suspended_by" })
    @Type(() => SuspendedBy)
    suspendedBy: SuspendedBy;

    @SpeakeasyMetadata()
    @Expose({ name: "suspended_till" })
    suspendedTill: string;
}

/**
 * response
 */
export class SuspendUserResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "suspension" })
    @Type(() => Suspension)
    suspension: Suspension;
}

export class SuspendUserResponse extends SpeakeasyBase {
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
    object?: SuspendUserResponseBody;
}
