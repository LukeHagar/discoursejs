/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateCategoryRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allow_badges" })
    allowBadges?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "color" })
    color?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "form_template_ids" })
    formTemplateIds?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "parent_category_id" })
    parentCategoryId?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "permissions" })
    permissions?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "search_priority" })
    searchPriority?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "text_color" })
    textColor?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_featured_links_allowed" })
    topicFeaturedLinksAllowed?: boolean;
}

export class UpdateCategoryRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody?: UpdateCategoryRequestBody;
}

export class UpdateCategoryCustomFields extends SpeakeasyBase {}

export class UpdateCategoryGroupPermissions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "group_name" })
    groupName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "permission_type" })
    permissionType: number;
}

export class UpdateCategoryRequiredTagGroups extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "min_count" })
    minCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class UpdateCategoryCategory extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "all_topics_wiki" })
    allTopicsWiki: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "allow_badges" })
    allowBadges: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "allow_global_tags" })
    allowGlobalTags?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "allow_unlimited_owner_edits_on_first_post" })
    allowUnlimitedOwnerEditsOnFirstPost: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "allowed_tag_groups" })
    allowedTagGroups?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "allowed_tags" })
    allowedTags?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "auto_close_based_on_last_post" })
    autoCloseBasedOnLastPost: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "auto_close_hours" })
    autoCloseHours: string;

    @SpeakeasyMetadata()
    @Expose({ name: "available_groups" })
    availableGroups: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "can_delete" })
    canDelete: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "can_edit" })
    canEdit: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "category_setting" })
    categorySetting?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "color" })
    color: string;

    @SpeakeasyMetadata()
    @Expose({ name: "custom_fields" })
    @Type(() => UpdateCategoryCustomFields)
    customFields: UpdateCategoryCustomFields;

    @SpeakeasyMetadata()
    @Expose({ name: "default_list_filter" })
    defaultListFilter: string;

    @SpeakeasyMetadata()
    @Expose({ name: "default_slow_mode_seconds" })
    defaultSlowModeSeconds: string;

    @SpeakeasyMetadata()
    @Expose({ name: "default_top_period" })
    defaultTopPeriod: string;

    @SpeakeasyMetadata()
    @Expose({ name: "default_view" })
    defaultView: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description_excerpt" })
    descriptionExcerpt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "description_text" })
    descriptionText: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email_in" })
    emailIn: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email_in_allow_strangers" })
    emailInAllowStrangers: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "form_template_ids" })
    formTemplateIds: any[];

    @SpeakeasyMetadata({ elemType: UpdateCategoryGroupPermissions })
    @Expose({ name: "group_permissions" })
    @Type(() => UpdateCategoryGroupPermissions)
    groupPermissions: UpdateCategoryGroupPermissions[];

    @SpeakeasyMetadata()
    @Expose({ name: "has_children" })
    hasChildren: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "mailinglist_mirror" })
    mailinglistMirror: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "minimum_required_tags" })
    minimumRequiredTags: number;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "navigate_to_first_post_after_read" })
    navigateToFirstPostAfterRead: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "notification_level" })
    notificationLevel: number;

    @SpeakeasyMetadata()
    @Expose({ name: "num_featured_topics" })
    numFeaturedTopics: number;

    @SpeakeasyMetadata()
    @Expose({ name: "permission" })
    permission: number;

    @SpeakeasyMetadata()
    @Expose({ name: "position" })
    position: number;

    @SpeakeasyMetadata()
    @Expose({ name: "post_count" })
    postCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "read_only_banner" })
    readOnlyBanner: string;

    @SpeakeasyMetadata()
    @Expose({ name: "read_restricted" })
    readRestricted: boolean;

    @SpeakeasyMetadata({ elemType: UpdateCategoryRequiredTagGroups })
    @Expose({ name: "required_tag_groups" })
    @Type(() => UpdateCategoryRequiredTagGroups)
    requiredTagGroups: UpdateCategoryRequiredTagGroups[];

    @SpeakeasyMetadata()
    @Expose({ name: "search_priority" })
    searchPriority: number;

    @SpeakeasyMetadata()
    @Expose({ name: "show_subcategory_list" })
    showSubcategoryList: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "slug" })
    slug: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sort_ascending" })
    sortAscending: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sort_order" })
    sortOrder: string;

    @SpeakeasyMetadata()
    @Expose({ name: "subcategory_list_style" })
    subcategoryListStyle: string;

    @SpeakeasyMetadata()
    @Expose({ name: "text_color" })
    textColor: string;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_count" })
    topicCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_featured_link_allowed" })
    topicFeaturedLinkAllowed: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_template" })
    topicTemplate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "topic_url" })
    topicUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uploaded_background" })
    uploadedBackground: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uploaded_background_dark" })
    uploadedBackgroundDark: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uploaded_logo" })
    uploadedLogo: string;

    @SpeakeasyMetadata()
    @Expose({ name: "uploaded_logo_dark" })
    uploadedLogoDark: string;
}

/**
 * success response
 */
export class UpdateCategoryResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    @Type(() => UpdateCategoryCategory)
    category: UpdateCategoryCategory;

    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success: string;
}

export class UpdateCategoryResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * success response
     */
    @SpeakeasyMetadata()
    object?: UpdateCategoryResponseBody;
}
