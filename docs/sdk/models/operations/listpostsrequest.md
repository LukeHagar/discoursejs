# ListPostsRequest

## Example Usage

```typescript
import { ListPostsRequest } from "@lukehagar/discoursejs/sdk/models/operations";

let value: ListPostsRequest = {
  apiKey: "<value>",
  apiUsername: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `apiKey`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `apiUsername`                                                       | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `before`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | Load posts with an id lower than this value. Useful for pagination. |