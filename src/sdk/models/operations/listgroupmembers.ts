/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ListGroupMembersRequest extends SpeakeasyBase {
    /**
     * Use group name instead of id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class Members extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "added_at" })
    addedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "avatar_template" })
    avatarTemplate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_posted_at" })
    lastPostedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_seen_at" })
    lastSeenAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "timezone" })
    timezone: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username: string;
}

export class Meta extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "limit" })
    limit: number;

    @SpeakeasyMetadata()
    @Expose({ name: "offset" })
    offset: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total: number;
}

export class Owners extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "added_at" })
    addedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "avatar_template" })
    avatarTemplate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "last_posted_at" })
    lastPostedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last_seen_at" })
    lastSeenAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "timezone" })
    timezone: string;

    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title: string;

    @SpeakeasyMetadata()
    @Expose({ name: "username" })
    username: string;
}

/**
 * success response
 */
export class ListGroupMembersResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Members })
    @Expose({ name: "members" })
    @Type(() => Members)
    members: Members[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => Meta)
    meta: Meta;

    @SpeakeasyMetadata({ elemType: Owners })
    @Expose({ name: "owners" })
    @Type(() => Owners)
    owners: Owners[];
}

export class ListGroupMembersResponse extends SpeakeasyBase {
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
    object?: ListGroupMembersResponseBody;
}
