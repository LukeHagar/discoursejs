# CompleteMultipartRequestBody

## Example Usage

```typescript
import { CompleteMultipartRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CompleteMultipartRequestBody = {
  parts: [
    {
      "part_number": 1,
      "etag": "0c376dcfcc2606f4335bbc732de93344",
    },
    {
      "part_number": 2,
      "etag": "09ert8cfcc2606f4335bbc732de91122",
    },
  ],
  uniqueIdentifier: "66e86218-80d9-4bda-b4d5-2b6def968705",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `parts`                                                                                                                                | *any*[]                                                                                                                                | :heavy_check_mark:                                                                                                                     | All of the part numbers and their corresponding ETags that have been uploaded must be provided.                                        | [<br/>{<br/>"part_number": 1,<br/>"etag": "0c376dcfcc2606f4335bbc732de93344"<br/>},<br/>{<br/>"part_number": 2,<br/>"etag": "09ert8cfcc2606f4335bbc732de91122"<br/>}<br/>] |
| `uniqueIdentifier`                                                                                                                     | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The unique identifier returned in the original /create-multipart request.                                                              | 66e86218-80d9-4bda-b4d5-2b6def968705                                                                                                   |