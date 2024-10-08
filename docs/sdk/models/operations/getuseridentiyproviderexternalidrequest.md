# GetUserIdentiyProviderExternalIdRequest

## Example Usage

```typescript
import { GetUserIdentiyProviderExternalIdRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetUserIdentiyProviderExternalIdRequest = {
  apiKey: "<value>",
  apiUsername: "<value>",
  externalId: "<value>",
  provider: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `apiKey`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `apiUsername`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `externalId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `provider`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Authentication provider name. Can be found in the provider callback URL: `/auth/{provider}/callback` |