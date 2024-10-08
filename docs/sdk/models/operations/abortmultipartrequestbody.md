# AbortMultipartRequestBody

## Example Usage

```typescript
import { AbortMultipartRequestBody } from "@lukehagar/discoursejs/sdk/models/operations";

let value: AbortMultipartRequestBody = {
  externalUploadIdentifier:
    "84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `externalUploadIdentifier`                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The identifier of the multipart upload in the external storage provider. This is the multipart upload_id in AWS S3. | 84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ                   |