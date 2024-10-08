# CreateMultipartUploadRequestBody

## Example Usage

```typescript
import { CreateMultipartUploadRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: CreateMultipartUploadRequestBody = {
  fileName: "IMG_2021.jpeg",
  fileSize: 4096,
  uploadType: "card_background",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `fileName`                                                            | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | IMG_2021.jpeg                                                         |
| `fileSize`                                                            | *number*                                                              | :heavy_check_mark:                                                    | File size should be represented in bytes.                             | 4096                                                                  |
| `metadata`                                                            | [operations.Metadata](../../../sdk/models/operations/metadata.md)     | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |
| `uploadType`                                                          | [operations.UploadType](../../../sdk/models/operations/uploadtype.md) | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |