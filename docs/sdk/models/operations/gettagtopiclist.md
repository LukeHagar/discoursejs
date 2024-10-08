# GetTagTopicList

## Example Usage

```typescript
import { GetTagTopicList } from "@lukehagar/discoursejs/sdk/models/operations";

let value: GetTagTopicList = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `canCreateTopic`                                                            | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `draft`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `draftKey`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `draftSequence`                                                             | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `perPage`                                                                   | *number*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `tags`                                                                      | [operations.GetTagTags](../../../sdk/models/operations/gettagtags.md)[]     | :heavy_minus_sign:                                                          | N/A                                                                         |
| `topics`                                                                    | [operations.GetTagTopics](../../../sdk/models/operations/gettagtopics.md)[] | :heavy_minus_sign:                                                          | N/A                                                                         |