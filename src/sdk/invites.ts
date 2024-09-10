/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { invitesCreateInvite } from "../funcs/invitesCreateInvite.js";
import { invitesInviteToTopic } from "../funcs/invitesInviteToTopic.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Invites extends ClientSDK {
  /**
   * Create an invite
   */
  async createInvite(
    apiKey: string,
    apiUsername: string,
    requestBody?: operations.CreateInviteRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateInviteResponseBody> {
    return unwrapAsync(invitesCreateInvite(
      this,
      apiKey,
      apiUsername,
      requestBody,
      options,
    ));
  }

  /**
   * Invite to topic
   */
  async inviteToTopic(
    apiKey: string,
    apiUsername: string,
    id: string,
    requestBody?: operations.InviteToTopicRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.InviteToTopicResponseBody> {
    return unwrapAsync(invitesInviteToTopic(
      this,
      apiKey,
      apiUsername,
      id,
      requestBody,
      options,
    ));
  }
}
