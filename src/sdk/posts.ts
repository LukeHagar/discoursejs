/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { postsCreateTopicPostPM } from "../funcs/postsCreateTopicPostPM.js";
import { postsDeletePost } from "../funcs/postsDeletePost.js";
import { postsGetPost } from "../funcs/postsGetPost.js";
import { postsListPosts } from "../funcs/postsListPosts.js";
import { postsLockPost } from "../funcs/postsLockPost.js";
import { postsPerformPostAction } from "../funcs/postsPerformPostAction.js";
import { postsPostReplies } from "../funcs/postsPostReplies.js";
import { postsUpdatePost } from "../funcs/postsUpdatePost.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Posts extends ClientSDK {
  /**
   * Creates a new topic, a new post, or a private message
   */
  async createTopicPostPM(
    request?: operations.CreateTopicPostPMRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateTopicPostPMResponseBody> {
    return unwrapAsync(postsCreateTopicPostPM(
      this,
      request,
      options,
    ));
  }

  /**
   * delete a single post
   */
  async deletePost(
    id: number,
    requestBody?: operations.DeletePostRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(postsDeletePost(
      this,
      id,
      requestBody,
      options,
    ));
  }

  /**
   * Retrieve a single post
   *
   * @remarks
   * This endpoint can be used to get the number of likes on a post using the
   * `actions_summary` property in the response. `actions_summary` responses
   * with the id of `2` signify a `like`. If there are no `actions_summary`
   * items with the id of `2`, that means there are 0 likes. Other ids likely
   * refer to various different flag types.
   */
  async getPost(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.GetPostResponseBody> {
    return unwrapAsync(postsGetPost(
      this,
      id,
      options,
    ));
  }

  /**
   * List latest posts across topics
   */
  async listPosts(
    apiKey: string,
    apiUsername: string,
    before?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.ListPostsResponseBody> {
    return unwrapAsync(postsListPosts(
      this,
      apiKey,
      apiUsername,
      before,
      options,
    ));
  }

  /**
   * Lock a post from being edited
   */
  async lockPost(
    apiKey: string,
    apiUsername: string,
    id: string,
    requestBody?: operations.LockPostRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.LockPostResponseBody> {
    return unwrapAsync(postsLockPost(
      this,
      apiKey,
      apiUsername,
      id,
      requestBody,
      options,
    ));
  }

  /**
   * Like a post and other actions
   */
  async performPostAction(
    apiKey: string,
    apiUsername: string,
    requestBody?: operations.PerformPostActionRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.PerformPostActionResponseBody> {
    return unwrapAsync(postsPerformPostAction(
      this,
      apiKey,
      apiUsername,
      requestBody,
      options,
    ));
  }

  /**
   * List replies to a post
   */
  async postReplies(
    id: string,
    options?: RequestOptions,
  ): Promise<Array<operations.PostRepliesResponseBody>> {
    return unwrapAsync(postsPostReplies(
      this,
      id,
      options,
    ));
  }

  /**
   * Update a single post
   */
  async updatePost(
    id: string,
    requestBody?: operations.UpdatePostRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.UpdatePostResponseBody> {
    return unwrapAsync(postsUpdatePost(
      this,
      id,
      requestBody,
      options,
    ));
  }
}
