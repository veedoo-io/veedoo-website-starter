// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Footer documents */
interface FooterDocumentData {
    /**
     * Slice Zone field in *Footer*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: footer.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<FooterDocumentDataSlicesSlice>;
}
/**
 * Slice for *Footer → Slice Zone*
 *
 */
type FooterDocumentDataSlicesSlice = FooterVeedooSlice;
/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<FooterDocumentData>, "footer", Lang>;
/** Content for Header documents */
interface HeaderDocumentData {
    /**
     * Slice Zone field in *Header*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: header.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HeaderDocumentDataSlicesSlice>;
}
/**
 * Slice for *Header → Slice Zone*
 *
 */
type HeaderDocumentDataSlicesSlice = HeaderVeedooSlice;
/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HeaderDocumentData>, "header", Lang>;
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
    /**
     * meta_title field in *Home Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.meta_title
     * - **Tab**: Seo
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * meta_description field in *Home Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.meta_description
     * - **Tab**: Seo
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
    /**
     * meta_image field in *Home Page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home_page.meta_image
     * - **Tab**: Seo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    meta_image: prismicT.ImageField<never>;
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
    /**
     * meta_title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.meta_title
     * - **Tab**: Seo
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * meta_description field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.meta_description
     * - **Tab**: Seo
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
    /**
     * meta_image field in *Page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: page.meta_image
     * - **Tab**: Seo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    meta_image: prismicT.ImageField<never>;
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
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
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
     * default background Color field in *Website settings*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: website_settings.default_background_color
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    default_background_color: prismicT.ColorField;
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
export type AllDocumentTypes = FooterDocument | HeaderDocument | HomePageDocument | PageDocument | TagItemDocument | WebsiteSettingsDocument;
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
 * Primary content in FooterVeedoo → Primary
 *
 */
interface FooterVeedooSliceDefaultPrimary {
    /**
     * footer logo field in *FooterVeedoo → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: footer_veedoo.primary.footer_logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    footer_logo: prismicT.ImageField<never>;
    /**
     * footer text field in *FooterVeedoo → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: footer_veedoo.primary.footer_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    footer_text: prismicT.RichTextField;
}
/**
 * Item in FooterVeedoo → Items
 *
 */
export interface FooterVeedooSliceDefaultItem {
    /**
     * footer flag field in *FooterVeedoo → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: footer_veedoo.items[].footer_flag
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    footer_flag: prismicT.ImageField<never>;
}
/**
 * Default variation for FooterVeedoo Slice
 *
 * - **API ID**: `default`
 * - **Description**: `FooterVeedoo`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterVeedooSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FooterVeedooSliceDefaultPrimary>, Simplify<FooterVeedooSliceDefaultItem>>;
/**
 * Slice variation for *FooterVeedoo*
 *
 */
type FooterVeedooSliceVariation = FooterVeedooSliceDefault;
/**
 * FooterVeedoo Shared Slice
 *
 * - **API ID**: `footer_veedoo`
 * - **Description**: `FooterVeedoo`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterVeedooSlice = prismicT.SharedSlice<"footer_veedoo", FooterVeedooSliceVariation>;
/**
 * Primary content in HeaderVeedoo → Primary
 *
 */
interface HeaderVeedooSliceDefaultPrimary {
    /**
     * logo field in *HeaderVeedoo → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: header_veedoo.primary.logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * main link text field in *HeaderVeedoo → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header_veedoo.primary.main_link_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    main_link_text: prismicT.KeyTextField;
    /**
     * main link url field in *HeaderVeedoo → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: header_veedoo.primary.main_link_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    main_link_url: prismicT.LinkField;
    /**
     * background color field in *HeaderVeedoo → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: header_veedoo.primary.background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    background_color: prismicT.ColorField;
    /**
     * text color field in *HeaderVeedoo → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: header_veedoo.primary.text_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    text_color: prismicT.ColorField;
}
/**
 * Item in HeaderVeedoo → Items
 *
 */
export interface HeaderVeedooSliceDefaultItem {
    /**
     * menu item type field in *HeaderVeedoo → Items*
     *
     * - **Field Type**: Select
     * - **Placeholder**: Select Type
     * - **Default Value**: Menu
     * - **API ID Path**: header_veedoo.items[].menu_item_type
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    menu_item_type: prismicT.SelectField<"Menu" | "Contacts" | "Get in touch!", "filled">;
    /**
     * menu text field in *HeaderVeedoo → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header_veedoo.items[].menu_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    menu_text: prismicT.KeyTextField;
    /**
     * menu link field in *HeaderVeedoo → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: header_veedoo.items[].menu_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    menu_link: prismicT.LinkField;
}
/**
 * Default variation for HeaderVeedoo Slice
 *
 * - **API ID**: `default`
 * - **Description**: `HeaderVeedoo`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderVeedooSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeaderVeedooSliceDefaultPrimary>, Simplify<HeaderVeedooSliceDefaultItem>>;
/**
 * Slice variation for *HeaderVeedoo*
 *
 */
type HeaderVeedooSliceVariation = HeaderVeedooSliceDefault;
/**
 * HeaderVeedoo Shared Slice
 *
 * - **API ID**: `header_veedoo`
 * - **Description**: `HeaderVeedoo`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderVeedooSlice = prismicT.SharedSlice<"header_veedoo", HeaderVeedooSliceVariation>;
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
 * Primary content in Testimonial → Primary
 *
 */
interface TestimonialSliceDefaultPrimary {
    /**
     * title field in *Testimonial → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * title color field in *Testimonial → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial.primary.title_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    title_color: prismicT.ColorField;
    /**
     * slice background color field in *Testimonial → Primary*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: testimonial.primary.slice_background_color
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    slice_background_color: prismicT.ColorField;
}
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
export type TestimonialSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TestimonialSliceDefaultPrimary>, Simplify<TestimonialSliceDefaultItem>>;
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
        export type { FooterDocumentData, FooterDocumentDataSlicesSlice, FooterDocument, HeaderDocumentData, HeaderDocumentDataSlicesSlice, HeaderDocument, HomePageDocumentData, HomePageDocumentDataSlicesSlice, HomePageDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, TagItemDocumentData, TagItemDocument, WebsiteSettingsDocumentData, WebsiteSettingsDocumentDataFiberySettingsItem, WebsiteSettingsDocumentDataSlicesSlice, WebsiteSettingsDocument, AllDocumentTypes, CallToActionWithImageSliceDefaultPrimary, CallToActionWithImageSliceDefault, CallToActionWithImageSliceVariation, CallToActionWithImageSlice, FooterVeedooSliceDefaultPrimary, FooterVeedooSliceDefaultItem, FooterVeedooSliceDefault, FooterVeedooSliceVariation, FooterVeedooSlice, HeaderVeedooSliceDefaultPrimary, HeaderVeedooSliceDefaultItem, HeaderVeedooSliceDefault, HeaderVeedooSliceVariation, HeaderVeedooSlice, PartnersLogoSliderSliceDefaultItem, PartnersLogoSliderSliceDefault, PartnersLogoSliderSlicePartnersLogoSlider2Item, PartnersLogoSliderSlicePartnersLogoSlider2, PartnersLogoSliderSliceVariation, PartnersLogoSliderSlice, TagsSliceDefaultPrimary, TagsSliceDefaultItem, TagsSliceDefault, TagsSliceVariation, TagsSlice, TestimonialSliceDefaultPrimary, TestimonialSliceDefaultItem, TestimonialSliceDefault, TestimonialSliceVariation, TestimonialSlice };
    }
}
