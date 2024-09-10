/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { SDKCore } from "../core.js";
import {
  encodeJSON as encodeJSON$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
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
 * Update username
 */
export async function usersUpdateUsername(
  client$: SDKCore,
  username: string,
  requestBody?: operations.UpdateUsernameRequestBody | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    void,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: operations.UpdateUsernameRequest = {
    requestBody: requestBody,
    username: username,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => operations.UpdateUsernameRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

  const pathParams$ = {
    username: encodeSimple$("username", payload$.username, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/u/{username}/preferences/username.json")(
    pathParams$,
  );

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "*/*",
  });

  const context = {
    operationID: "updateUsername",
    oAuth2Scopes: [],
    securitySource: null,
  };

  const requestRes = client$.createRequest$(context, {
    method: "PUT",
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
    void,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.nil(200, z.void()),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
