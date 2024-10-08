/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { groupsAddGroupMembers } from "../funcs/groupsAddGroupMembers.js";
import { groupsCreateGroup } from "../funcs/groupsCreateGroup.js";
import { groupsDeleteGroup } from "../funcs/groupsDeleteGroup.js";
import { groupsGetGroup } from "../funcs/groupsGetGroup.js";
import { groupsListGroupMembers } from "../funcs/groupsListGroupMembers.js";
import { groupsListGroups } from "../funcs/groupsListGroups.js";
import { groupsRemoveGroupMembers } from "../funcs/groupsRemoveGroupMembers.js";
import { groupsUpdateGroup } from "../funcs/groupsUpdateGroup.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Groups extends ClientSDK {
  /**
   * Add group members
   */
  async addGroupMembers(
    id: number,
    requestBody?: operations.AddGroupMembersRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.AddGroupMembersResponseBody> {
    return unwrapAsync(groupsAddGroupMembers(
      this,
      id,
      requestBody,
      options,
    ));
  }

  /**
   * Create a group
   */
  async createGroup(
    request?: operations.CreateGroupRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateGroupResponseBody> {
    return unwrapAsync(groupsCreateGroup(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a group
   */
  async deleteGroup(
    id: number,
    options?: RequestOptions,
  ): Promise<operations.DeleteGroupResponseBody> {
    return unwrapAsync(groupsDeleteGroup(
      this,
      id,
      options,
    ));
  }

  /**
   * Get a group
   */
  async getGroup(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.GetGroupResponseBody> {
    return unwrapAsync(groupsGetGroup(
      this,
      id,
      options,
    ));
  }

  /**
   * List group members
   */
  async listGroupMembers(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.ListGroupMembersResponseBody> {
    return unwrapAsync(groupsListGroupMembers(
      this,
      id,
      options,
    ));
  }

  /**
   * List groups
   */
  async listGroups(
    options?: RequestOptions,
  ): Promise<operations.ListGroupsResponseBody> {
    return unwrapAsync(groupsListGroups(
      this,
      options,
    ));
  }

  /**
   * Remove group members
   */
  async removeGroupMembers(
    id: number,
    requestBody?: operations.RemoveGroupMembersRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.RemoveGroupMembersResponseBody> {
    return unwrapAsync(groupsRemoveGroupMembers(
      this,
      id,
      requestBody,
      options,
    ));
  }

  /**
   * Update a group
   */
  async updateGroup(
    id: number,
    requestBody?: operations.UpdateGroupRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.UpdateGroupResponseBody> {
    return unwrapAsync(groupsUpdateGroup(
      this,
      id,
      requestBody,
      options,
    ));
  }
}
