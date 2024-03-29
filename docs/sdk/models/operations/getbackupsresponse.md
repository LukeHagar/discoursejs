# GetBackupsResponse


## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [AxiosResponse](https://axios-http.com/docs/res_schema)                     | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
| `responseBodies`                                                            | [operations.ResponseBody](../../../sdk/models/operations/responsebody.md)[] | :heavy_minus_sign:                                                          | success response                                                            |