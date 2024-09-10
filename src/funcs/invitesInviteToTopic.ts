/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

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
 * Invite to topic
 */
export async function invitesInviteToTopic(
  client$: SDKCore,
  apiKey: string,
  apiUsername: string,
  id: string,
  requestBody?: operations.InviteToTopicRequestBody | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    operations.InviteToTopicResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: operations.InviteToTopicRequest = {
    apiKey: apiKey,
    apiUsername: apiUsername,
    requestBody: requestBody,
    id: id,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => operations.InviteToTopicRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

  const pathParams$ = {
    id: encodeSimple$("id", payload$.id, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/t/{id}/invite.json")(pathParams$);

  const headers$ = new Headers({
    "Content-Type": "application/json",
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
    operationID: "inviteToTopic",
    oAuth2Scopes: [],
    securitySource: null,
  };

  const requestRes = client$.createRequest$(context, {
    method: "POST",
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
    operations.InviteToTopicResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.InviteToTopicResponseBody$inboundSchema),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
