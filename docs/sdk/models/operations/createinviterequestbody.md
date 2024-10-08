# CreateInviteRequestBody

## Example Usage

```typescript
import { CreateInviteRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateInviteRequestBody = {
  email: "not-a-user-yet@example.com",
  groupIds: "42,43",
  groupNames: "foo,bar",
  maxRedemptionsAllowed: 5,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `customMessage`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | optional, for email invites                                                    |                                                                                |
| `email`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | required for email invites only                                                | not-a-user-yet@example.com                                                     |
| `expiresAt`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | optional, if not supplied, the invite_expiry_days site setting is used         |                                                                                |
| `groupIds`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Optional, either this or `group_names`. Comma separated list for multiple ids. | 42,43                                                                          |
| `groupNames`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | Optional, either this or `group_ids`. Comma separated list for multiple names. | foo,bar                                                                        |
| `maxRedemptionsAllowed`                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | optional, for link invites                                                     | 5                                                                              |
| `skipEmail`                                                                    | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `topicId`                                                                      | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |