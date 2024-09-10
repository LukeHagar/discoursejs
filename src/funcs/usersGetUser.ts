/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

/**
 * Get a single user by username
 */
export async function usersGetUser(
  client$: SDKCore,
  apiKey: string,
  apiUsername: string,
  username: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GetUserResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: operations.GetUserRequest = {
    apiKey: apiKey,
    apiUsername: apiUsername,
    username: username,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => operations.GetUserRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    username: encodeSimple$("username", payload$.username, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/u/{username}.json")(pathParams$);

  const headers$ = new Headers({
    Accept: "application/json",
    "Api-Key": encodeSimple$("Api-Key", payload$["Api-Key"], {
      explode: false,
      charEncoding: "none",
    }),
    "Api-Username": encodeSimple$("Api-Username", payload$["Api-Username"], {
      explode: false,
      charEncoding: "none",
    }),
  });

  const context = {
    operationID: "getUser",
    oAuth2Scopes: [],
    securitySource: null,
  };

  const requestRes = client$.createRequest$(context, {
    method: "GET",
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: [],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result$] = await m$.match<
    operations.GetUserResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.GetUserResponseBody$inboundSchema),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
