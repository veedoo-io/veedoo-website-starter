// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home Page documents */
interface HomePageDocumentData {
    /**
     * Slice Zone field in *Home Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomePageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Home Page → Slice Zone*
 *
 */
type HomePageDocumentDataSlicesSlice = PartnersLogoSliderSlice | TagsSlice | CallToActionWithImageSlice | TestimonialSlice;
/**
 * Home Page document from Prismic
 *
 * - **API ID**: `home_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomePageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomePageDocumentData>, "home_page", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = PartnersLogoSliderSlice | CallToActionWithImageSlice | TagsSlice | TestimonialSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for [do not use ] Tag item  documents */
type TagItemDocumentData = Record<string, never>;
/**
 * [do not use ] Tag item  document from Prismic
 *
 * - **API ID**: `tag_item`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TagItemDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<TagItemDocumentData>, "tag_item", Lang>;
/** Content for Website settings documents */
interface WebsiteSettingsDocumentData {
    /**
     * Google Analytics Code  field in *Website settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: website_settings.google_analytics_code
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    google_analytics_code: prismicT.KeyTextField;
    /**
     * Fibery Settings field in *Website settings*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: website_settings.fibery_settings[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    fibery_settings: prismicT.GroupField<Simplify<WebsiteSettingsDocumentDataFiberySettingsItem>>;
    /**
     * Default email Mailto field in *Website settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: website_settings.default_email_mailto
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    default_email_mailto: prismicT.KeyTextField;
    /**
     * Website Logo field in *Website settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: website_settings.website_logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    website_logo: prismicT.ImageField<never>;
    /**
     * Website fav icon  field in *Website settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: website_settings.website_fav_icon
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    website_fav_icon: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Website settings*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: website_settings.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<WebsiteSettingsDocumentDataSlicesSlice>;
}
/**
 * Item in Website settings → Fibery Settings
 *
 */
export interface WebsiteSettingsDocumentDataFiberySettingsItem {
    /**
     * fibery host url field in *Website settings → Fibery Settings*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: website_settings.fibery_settings[].fibery_host_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    fibery_host_url: prismicT.LinkField;
    /**
     * fibery token field in *Website settings → Fibery Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: website_settings.fibery_settings[].fibery_token
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    fibery_token: prismicT.KeyTextField;
}
/**
 * Slice for *Website settings → Slice Zone*
 *
 */
type WebsiteSettingsDocumentDataSlicesSlice = never;
/**
 * Website settings document from Prismic
 *
 * - **API ID**: `website_settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WebsiteSettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<WebsiteSettingsDocumentData>, "website_settings", Lang>;
export type AllDocumentTypes = HomePageDocument | PageDocument | TagItemDocument | WebsiteSettingsDocument;
/**
 * Primary content in CallToActionWithImage → Primary
 *
 */
interface CallToActionWithImageSliceDefaultPrimary {
    /**
     * Title field in *CallToActionWithImage → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Alternate like a star
     * - **API ID Path**: call_to_action_with_image.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *CallToActionWithImage → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A predesigned AlternateGrid component, that you can use to list your skills or features of a product.
     * - **API ID Path**: call_to_action_with_image.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * backgroundColor field in *CallToActionWithImage → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: Slice BackgroundColor
     * - **API ID Path**: call_to_action_with_image.primary.backgroundcolor
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    backgroundcolor: prismicT.ColorField;
    /**
     * image field in *CallToActionWithImage → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action_with_image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * button text field in *CallToActionWithImage → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action_with_image.primary.button_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    button_text: prismicT.KeyTextField;
    /**
     * button url field in *CallToActionWithImage → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action_with_image.primary.button_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button_url: prismicT.LinkField;
    /**
     * button background color field in *CallToActionWithImage → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action_with_image.primary.button_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    button_color: prismicT.ColorField;
    /**
     * button text color field in *CallToActionWithImage → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action_with_image.primary.button_text_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    button_text_color: prismicT.ColorField;
}
/**
 * Default variation for CallToActionWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CallToActionWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionWithImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CallToActionWithImageSliceDefaultPrimary>, never>;
/**
 * Slice variation for *CallToActionWithImage*
 *
 */
type CallToActionWithImageSliceVariation = CallToActionWithImageSliceDefault;
/**
 * CallToActionWithImage Shared Slice
 *
 * - **API ID**: `call_to_action_with_image`
 * - **Description**: `CallToActionWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionWithImageSlice = prismicT.SharedSlice<"call_to_action_with_image", CallToActionWithImageSliceVariation>;
/**
 * Item in PartnersLogoSlider → Items
 *
 */
export interface PartnersLogoSliderSliceDefaultItem {
    /**
     * Partner Logo field in *PartnersLogoSlider → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: partners_logo_slider.items[].partner_logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    partner_logo: prismicT.ImageField<never>;
    /**
     * on click url field in *PartnersLogoSlider → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: link to external url
     * - **API ID Path**: partners_logo_slider.items[].on_click_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    on_click_url: prismicT.LinkField;
}
/**
 * Default variation for PartnersLogoSlider Slice
 *
 * - **API ID**: `default`
 * - **Description**: `PartnersLogoSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PartnersLogoSliderSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<PartnersLogoSliderSliceDefaultItem>>;
/**
 * Item in PartnersLogoSlider → Items
 *
 */
export interface PartnersLogoSliderSlicePartnersLogoSlider2Item {
    /**
     * Partner Logo field in *PartnersLogoSlider → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: partners_logo_slider.items[].partner_logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    partner_logo: prismicT.ImageField<never>;
}
/**
 * PartnersLogoSlider 2 variation for PartnersLogoSlider Slice
 *
 * - **API ID**: `partnersLogoSlider2`
 * - **Description**: `PartnersLogoSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PartnersLogoSliderSlicePartnersLogoSlider2 = prismicT.SharedSliceVariation<"partnersLogoSlider2", Record<string, never>, Simplify<PartnersLogoSliderSlicePartnersLogoSlider2Item>>;
/**
 * Slice variation for *PartnersLogoSlider*
 *
 */
type PartnersLogoSliderSliceVariation = PartnersLogoSliderSliceDefault | PartnersLogoSliderSlicePartnersLogoSlider2;
/**
 * PartnersLogoSlider Shared Slice
 *
 * - **API ID**: `partners_logo_slider`
 * - **Description**: `PartnersLogoSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PartnersLogoSliderSlice = prismicT.SharedSlice<"partners_logo_slider", PartnersLogoSliderSliceVariation>;
/**
 * Primary content in Tags → Primary
 *
 */
interface TagsSliceDefaultPrimary {
    /**
     * Title field in *Tags → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: tags.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Item in Tags → Items
 *
 */
export interface TagsSliceDefaultItem {
    /**
     * tag label field in *Tags → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: tags.items[].tag_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    tag_label: prismicT.KeyTextField;
    /**
     * tag Image field in *Tags → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: tags.items[].tag_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    tag_image: prismicT.ImageField<never>;
}
/**
 * Default variation for Tags Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Tags`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TagsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TagsSliceDefaultPrimary>, Simplify<TagsSliceDefaultItem>>;
/**
 * Slice variation for *Tags*
 *
 */
type TagsSliceVariation = TagsSliceDefault;
/**
 * Tags Shared Slice
 *
 * - **API ID**: `tags`
 * - **Description**: `Tags`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TagsSlice = prismicT.SharedSlice<"tags", TagsSliceVariation>;
/**
 * Item in Testimonial → Items
 *
 */
export interface TestimonialSliceDefaultItem {
    /**
     * full name field in *Testimonial → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial.items[].full_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    full_name: prismicT.KeyTextField;
    /**
     * job position field in *Testimonial → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial.items[].job_position
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    job_position: prismicT.KeyTextField;
    /**
     * Testimonial field in *Testimonial → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial.items[].testimonial
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    testimonial: prismicT.RichTextField;
}
/**
 * Default variation for Testimonial Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Testimonial`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<TestimonialSliceDefaultItem>>;
/**
 * Slice variation for *Testimonial*
 *
 */
type TestimonialSliceVariation = TestimonialSliceDefault;
/**
 * Testimonial Shared Slice
 *
 * - **API ID**: `testimonial`
 * - **Description**: `Testimonial`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialSlice = prismicT.SharedSlice<"testimonial", TestimonialSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomePageDocumentData, HomePageDocumentDataSlicesSlice, HomePageDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, TagItemDocumentData, TagItemDocument, WebsiteSettingsDocumentData, WebsiteSettingsDocumentDataFiberySettingsItem, WebsiteSettingsDocumentDataSlicesSlice, WebsiteSettingsDocument, AllDocumentTypes, CallToActionWithImageSliceDefaultPrimary, CallToActionWithImageSliceDefault, CallToActionWithImageSliceVariation, CallToActionWithImageSlice, PartnersLogoSliderSliceDefaultItem, PartnersLogoSliderSliceDefault, PartnersLogoSliderSlicePartnersLogoSlider2Item, PartnersLogoSliderSlicePartnersLogoSlider2, PartnersLogoSliderSliceVariation, PartnersLogoSliderSlice, TagsSliceDefaultPrimary, TagsSliceDefaultItem, TagsSliceDefault, TagsSliceVariation, TagsSlice, TestimonialSliceDefaultItem, TestimonialSliceDefault, TestimonialSliceVariation, TestimonialSlice };
    }
}
