/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
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
 * Initiates a direct external upload
 *
 * @remarks
 * Direct external uploads bypass the usual method of creating uploads
 * via the POST /uploads route, and upload directly to an external provider,
 * which by default is S3. This route begins the process, and will return
 * a unique identifier for the external upload as well as a presigned URL
 * which is where the file binary blob should be uploaded to.
 *
 * Once the upload is complete to the external service, you must call the
 * POST /complete-external-upload route using the unique identifier returned
 * by this route, which will create any required Upload record in the Discourse
 * database and also move file from its temporary location to the final
 * destination in the external storage service.
 *
 * You must have the correct permissions and CORS settings configured in your
 * external provider. We support AWS S3 as the default. See:
 *
 * https://meta.discourse.org/t/-/210469#s3-multipart-direct-uploads-4.
 *
 * An external file store must be set up and `enable_direct_s3_uploads` must
 * be set to true for this endpoint to function.
 */
export async function uploadsGeneratePresignedPut(
  client$: SDKCore,
  request?: operations.GeneratePresignedPutRequestBody | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GeneratePresignedPutResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.GeneratePresignedPutRequestBody$outboundSchema.optional()
        .parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = payload$ === undefined
    ? null
    : encodeJSON$("body", payload$, { explode: true });

  const path$ = pathToFunc("/uploads/generate-presigned-put.json")();

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const context = {
    operationID: "generatePresignedPut",
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
    operations.GeneratePresignedPutResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.GeneratePresignedPutResponseBody$inboundSchema),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
