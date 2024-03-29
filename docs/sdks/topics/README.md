# Topics
(*topics*)

### Available Operations

* [bookmarkTopic](#bookmarktopic) - Bookmark topic
* [createTopicPostPM](#createtopicpostpm) - Creates a new topic, a new post, or a private message
* [createTopicTimer](#createtopictimer) - Create topic timer
* [getTopic](#gettopic) - Get a single topic
* [getTopicByExternalId](#gettopicbyexternalid) - Get topic by external_id
* [inviteToTopic](#invitetotopic) - Invite to topic
* [listLatestTopics](#listlatesttopics) - Get the latest topics
* [listTopTopics](#listtoptopics) - Get the top topics filtered by period
* [removeTopic](#removetopic) - Remove a topic
* [setNotificationLevel](#setnotificationlevel) - Set notification level
* [updateTopic](#updatetopic) - Update a topic
* [updateTopicStatus](#updatetopicstatus) - Update the status of a topic
* [updateTopicTimestamp](#updatetopictimestamp) - Update topic timestamp

## bookmarkTopic

Bookmark topic

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { BookmarkTopicRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const id: string = "<value>";

  const res = await sdk.topics.bookmarkTopic(apiKey, apiUsername, id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `apiKey`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `apiUsername`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.BookmarkTopicResponse](../../sdk/models/operations/bookmarktopicresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createTopicPostPM

Creates a new topic, a new post, or a private message

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";

async function run() {
  const sdk = new SDK();

  const res = await sdk.topics.createTopicPostPM({
    archetype: "private_message",
    raw: "<value>",
    targetRecipients: "blake,sam",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateTopicPostPMRequestBody](../../sdk/models/operations/createtopicpostpmrequestbody.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateTopicPostPMResponse](../../sdk/models/operations/createtopicpostpmresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createTopicTimer

Create topic timer

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { CreateTopicTimerRequest, CreateTopicTimerRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const id: string = "<value>";
const requestBody: CreateTopicTimerRequestBody = {
  time: "",
};

  const res = await sdk.topics.createTopicTimer(apiKey, apiUsername, id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `apiUsername`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `requestBody`                                                                                        | [operations.CreateTopicTimerRequestBody](../../sdk/models/operations/createtopictimerrequestbody.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateTopicTimerResponse](../../sdk/models/operations/createtopictimerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getTopic

Get a single topic

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { GetTopicRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const id: string = "<value>";

  const res = await sdk.topics.getTopic(apiKey, apiUsername, id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `apiKey`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `apiUsername`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTopicResponse](../../sdk/models/operations/gettopicresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getTopicByExternalId

Get topic by external_id

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { GetTopicByExternalIdRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const externalId: string = "<value>";

  const res = await sdk.topics.getTopicByExternalId(externalId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `externalId`                                                 | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTopicByExternalIdResponse](../../sdk/models/operations/gettopicbyexternalidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## inviteToTopic

Invite to topic

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { InviteToTopicRequest, InviteToTopicRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const id: string = "<value>";
const requestBody: InviteToTopicRequestBody = {};

  const res = await sdk.topics.inviteToTopic(apiKey, apiUsername, id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `apiUsername`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `requestBody`                                                                                  | [operations.InviteToTopicRequestBody](../../sdk/models/operations/invitetotopicrequestbody.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.InviteToTopicResponse](../../sdk/models/operations/invitetotopicresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listLatestTopics

Get the latest topics

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { ListLatestTopicsRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const ascending: string = "<value>";
const order: string = "<value>";

  const res = await sdk.topics.listLatestTopics(apiKey, apiUsername, ascending, order);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `apiUsername`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ascending`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Defaults to `desc`, add `ascending=true` to sort asc                                                 |
| `order`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Enum: `default`, `created`, `activity`, `views`, `posts`, `category`, `likes`, `op_likes`, `posters` |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListLatestTopicsResponse](../../sdk/models/operations/listlatesttopicsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listTopTopics

Get the top topics filtered by period

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { ListTopTopicsRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const period: string = "<value>";

  const res = await sdk.topics.listTopTopics(apiKey, apiUsername, period);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `apiKey`                                                         | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `apiUsername`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `period`                                                         | *string*                                                         | :heavy_minus_sign:                                               | Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily` |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.ListTopTopicsResponse](../../sdk/models/operations/listtoptopicsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeTopic

Remove a topic

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { RemoveTopicRequest } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const id: string = "<value>";

  const res = await sdk.topics.removeTopic(apiKey, apiUsername, id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `apiKey`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `apiUsername`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RemoveTopicResponse](../../sdk/models/operations/removetopicresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## setNotificationLevel

Set notification level

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { NotificationLevel, SetNotificationLevelRequest, SetNotificationLevelRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const id: string = "<value>";
const requestBody: SetNotificationLevelRequestBody = {
  notificationLevel: NotificationLevel.Two,
};

  const res = await sdk.topics.setNotificationLevel(apiKey, apiUsername, id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `apiKey`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `apiUsername`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requestBody`                                                                                                | [operations.SetNotificationLevelRequestBody](../../sdk/models/operations/setnotificationlevelrequestbody.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.SetNotificationLevelResponse](../../sdk/models/operations/setnotificationlevelresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateTopic

Update a topic

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { Topic, UpdateTopicRequest, UpdateTopicRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const id: string = "<value>";
const requestBody: UpdateTopicRequestBody = {
  topic: {},
};

  const res = await sdk.topics.updateTopic(apiKey, apiUsername, id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `apiKey`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `apiUsername`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `requestBody`                                                                              | [operations.UpdateTopicRequestBody](../../sdk/models/operations/updatetopicrequestbody.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateTopicResponse](../../sdk/models/operations/updatetopicresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateTopicStatus

Update the status of a topic

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { Enabled, Status, UpdateTopicStatusRequest, UpdateTopicStatusRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const id: string = "<value>";
const requestBody: UpdateTopicStatusRequestBody = {
  enabled: Enabled.False,
  status: Status.PinnedGlobally,
  until: "2030-12-31",
};

  const res = await sdk.topics.updateTopicStatus(apiKey, apiUsername, id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `apiKey`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `apiUsername`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `requestBody`                                                                                          | [operations.UpdateTopicStatusRequestBody](../../sdk/models/operations/updatetopicstatusrequestbody.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateTopicStatusResponse](../../sdk/models/operations/updatetopicstatusresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateTopicTimestamp

Update topic timestamp

### Example Usage

```typescript
import { SDK } from "@lukehagar/discoursejs";
import { UpdateTopicTimestampRequest, UpdateTopicTimestampRequestBody } from "@lukehagar/discoursejs/dist/sdk/models/operations";

async function run() {
  const sdk = new SDK();
const apiKey: string = "<value>";
const apiUsername: string = "<value>";
const id: string = "<value>";
const requestBody: UpdateTopicTimestampRequestBody = {
  timestamp: "1594291380",
};

  const res = await sdk.topics.updateTopicTimestamp(apiKey, apiUsername, id, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `apiKey`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `apiUsername`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requestBody`                                                                                                | [operations.UpdateTopicTimestampRequestBody](../../sdk/models/operations/updatetopictimestamprequestbody.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateTopicTimestampResponse](../../sdk/models/operations/updatetopictimestampresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
