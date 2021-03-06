/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

declare namespace OpenAPI2 {
  export interface ZipSegment {
    condition_type?: 'IPGeoZip';
    /**
     * Segmenting subscribers who are within a specific location.
     */
    field: 'ipgeo';
    /**
     * Segment members who are/are not within a specific US zip code.
     */
    op: 'ipgeoiszip' | 'ipgeonotzip';
    /**
     * The 5-digit zip code.
     */
    value: number;
  }
  export interface VIPSegment {
    condition_type?: 'VIP';
    /**
     * Segmenting based off of a subscriber's VIP status.
     */
    field: 'gmonkey';
    /**
     * Whether the member is or is not marked as VIP.
     */
    op: 'member' | 'notmember';
  }
  export interface TextMergeSegment {
    /**
     * The segment field, one of 'merge0' or 'EMAIL'.
     */
    field?: string;
    /**
     * Whether the email address is/not exactly, contains/doesn't contain, starts/ends with a string.
     */
    op?:
      | 'is'
      | 'not'
      | 'contains'
      | 'notcontain'
      | 'starts'
      | 'ends'
      | 'greater'
      | 'less'
      | 'blank'
      | 'blank_not';
    /**
     * The value to compare.
     */
    value?: string;
  }
  export interface SurveyMonkeySegment {
    condition_type?: 'SurveyMonkey';
    /**
     * Used for segmenting subscribers who have/have not interacted with a survey monkey survey.
     */
    field: 'survey_monkey';
    /**
     * The status of the member with regard to the survey.One of the following: has started the survey, has completed the survey, has not started the survey, or has not completed the survey.
     */
    op: 'started' | 'completed' | 'not_started' | 'not_completed';
    /**
     * The unique ID of the survey monkey survey.
     */
    value: string;
  }
  export interface StaticSegment {
    condition_type?: 'StaticSegment';
    /**
     * Used for segmenting by Mandrill activity.
     */
    field: 'static_segment';
    /**
     * Members who are/are not apart of a static segment.
     */
    op: 'static_is' | 'static_not';
    /**
     * The id for the static segment.
     */
    value: number;
  }
  export interface SocialNetworkSegment {
    condition_type?: 'SocialNetworkMember';
    /**
     * Used for segmenting members based on social network in Social Profiles data.
     */
    field: 'social_network';
    /**
     * Members who are/not on a given social network.
     */
    op: 'member' | 'notmember';
    /**
     * The social network to segment against.
     */
    value:
      | 'twitter'
      | 'facebook'
      | 'linkedin'
      | 'flickr'
      | 'foursquare'
      | 'lastfm'
      | 'myspace'
      | 'quora'
      | 'vimeo'
      | 'yelp'
      | 'youtube';
  }
  export interface SocialNetworkFollowSegment {
    condition_type?: 'SocialNetworkFollow';
    /**
     * Used for segmenting members based on social network in Social Profiles data.
     */
    field: 'social_network';
    /**
     * Members who are/not following a linked account on a given social network.
     */
    op: 'follow' | 'notfollow';
    /**
     * The social network to segment against.
     */
    value: 'twitter_follow';
  }
  export interface SocialInfluenceSegment {
    condition_type?: 'SocialInfluence';
    /**
     * Used for segmenting members based on influence rating in Social Profiles data.
     */
    field: 'social_influence';
    /**
     * Members who have a rating that is/not or greater/less than the rating provided.
     */
    op: 'is' | 'not' | 'greater' | 'less';
    /**
     * The Social Profiles influence rating to segment.
     */
    value: number;
  }
  export interface SocialGenderSegment {
    condition_type?: 'SocialGender';
    /**
     * Used for segmenting members based on listed gender in Social Profiles data.
     */
    field: 'social_gender';
    /**
     * Members who are/not the exact criteria listed.
     */
    op: 'is' | 'not';
    /**
     * The Social Profiles gender to segment.
     */
    value: 'male' | 'female';
  }
  export interface SocialAgeSegment {
    condition_type?: 'SocialAge';
    /**
     * Used for segmenting members based age ranges in Social Profiles data.
     */
    field: 'social_age';
    /**
     * Members who are/not the exact criteria listed.
     */
    op: 'is' | 'not';
    /**
     * The age range to segment.
     */
    value: '18-24' | '25-34' | '35-54' | '55+';
  }
  export interface SignupSourceSegment {
    condition_type: 'SignupSource';
    field: 'source';
    /**
     * Whether the member's signup source was/was not a particular value.
     */
    op: 'source_is' | 'source_not';
    /**
     * The signup source.
     */
    value?: string;
  }
  export interface RuntimeBetween {
    /**
     * When to send the Automation email.
     */
    type?: 'send_asap' | 'send_between' | 'send_at';
    /**
     * The start of the sending window.
     */
    start: string;
    /**
     * The end of the sending window.
     */
    end: string;
  }
  export interface RuntimeAt {
    /**
     * When to send the Automation email.
     */
    type?: 'send_asap' | 'send_between' | 'send_at';
    /**
     * The exact time to send the emails.
     */
    send_at: string;
  }
  export interface RuntimeASAP {
    /**
     * When to send the Automation email.
     */
    type?: 'send_asap' | 'send_between' | 'send_at';
    /**
     * Send the workflow emails as soon as a subscriber meets the appropriate criteria.
     */
    send_asap: boolean;
  }
  export interface Merge_SpecialEvent {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: MergeSpecialEventRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * The data used to trigger the Automation workflow. For 'specialEvent' type workflows, a date merge field is required. For 'recurringEvent', a birthday or date merge field are required.
     */
    merge_field_trigger: string;
  }
  export interface MergeSpecialEventRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: MergeSpecialEventRuntimeHours;
  }
  export interface MergeSpecialEventRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Merge_RecurringEvent {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: MergeRecurringEventRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * The data used to trigger the Automation workflow. For 'specialEvent' type workflows, a date merge field is required. For 'recurringEvent', a birthday or date merge field are required.
     */
    merge_field_trigger: string;
  }
  export interface MergeRecurringEventRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: MergeRecurringEventRuntimeHours;
  }
  export interface MergeRecurringEventRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface MemberRatingSegment {
    condition_type?: 'MemberRating';
    /**
     * Used for segmenting by member rating.
     */
    field: 'rating';
    /**
     * Members who have have a rating that is/not exactly a given number or members who have a rating greater/less than a given number.
     */
    op: 'is' | 'not' | 'greater' | 'less';
    /**
     * The star rating number to segment against.
     */
    value: number;
  }
  export interface LanguageSegment {
    condition_type?: 'Language';
    /**
     * Segmenting based off of a subscriber's language.
     */
    field: 'language';
    /**
     * Whether the member's language is or is not set to a specific language.
     */
    op: 'is' | 'not';
    /**
     * A two-letter language identifier.
     */
    value: string;
  }
  export interface IpGeoInZipSegment {
    condition_type?: 'IPGeoInZip';
    /**
     * Segmenting subscribers who are within a specific location.
     */
    field: 'ipgeo';
    /**
     * Segment members who are within a specific US zip code.
     */
    op: 'ipgeoinzip';
    /**
     * The radius of the target location.
     */
    value: number;
    /**
     * The zip code to segment against.
     */
    extra: number;
  }
  export interface GoalActivitySegment {
    condition_type?: 'GoalActivity';
    /**
     * Segmenting based off of a subscriber's Goal activity.
     */
    field: 'goal';
    /**
     * Whether the website URL is/not exactly, contains/doesn't contain, starts with/ends with a string.
     */
    op: 'is' | 'goal_not' | 'contains' | 'goal_notcontain' | 'starts' | 'ends';
    /**
     * The URL to check Goal activity against.
     */
    value: string;
  }
  export interface GeoInSegment {
    condition_type?: 'IPGeoIn';
    /**
     * Segmenting subscribers who are within a specific location.
     */
    field: 'ipgeo';
    /**
     * Segment members who are within a specific geographic region.
     */
    op: 'ipgeoin' | 'ipgeonotin';
    /**
     * The radius of the target location.
     */
    value: number;
    /**
     * The address of the target location.
     */
    addr: string;
    /**
     * The latitude of the target location.
     */
    lat: string;
    /**
     * The longitude of the target location.
     */
    lng: string;
  }
  export interface FuzzySegment {
    condition_type?: 'FuzzySegment';
    /**
     * Used for segmenting by Mandrill activity.
     */
    field: 'fuzzy_segment';
    /**
     * Members who are/are not apart of a 'similar subscribers' segment.
     */
    op: 'fuzzy_is' | 'fuzzy_not';
    /**
     * The id for the 'similar subscribers' segment.
     */
    value: number;
  }
  export interface Event_WelcomeSeries {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventWelcomeSeriesRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
    /**
     * Trigger workflow when subscribers are imported.
     */
    trigger_on_import: boolean;
  }
  export interface EventWelcomeSeriesRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventWelcomeSeriesRuntimeHours;
  }
  export interface EventWelcomeSeriesRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Event_VisitUrl {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventVisitUrlRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
    /**
     * The URL subscribers navigate to in order to trigger the workflow.
     */
    goal_url: string;
  }
  export interface EventVisitUrlRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventVisitUrlRuntimeHours;
  }
  export interface EventVisitUrlRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Event_PurchaseFollowup {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventPurchaseFollowupRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
  }
  export interface EventPurchaseFollowupRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventPurchaseFollowupRuntimeHours;
  }
  export interface EventPurchaseFollowupRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Event_ProductFollowup {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventProductFollowupRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
    /**
     * The name of the product a workflow is triggered on.
     */
    product_name: string;
  }
  export interface EventProductFollowupRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventProductFollowupRuntimeHours;
  }
  export interface EventProductFollowupRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Event_Mandrill {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventMandrillRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
    /**
     * The Mandrill tags that a workflow will be triggered on.
     */
    mandrill_tags: string[];
  }
  export interface EventMandrillRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventMandrillRuntimeHours;
  }
  export interface EventMandrillRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Event_GroupRemove {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventGroupRemoveRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
    /**
     * Group ID used by the workflow.
     */
    group_id: number;
  }
  export interface EventGroupRemoveRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventGroupRemoveRuntimeHours;
  }
  export interface EventGroupRemoveRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Event_GroupAdd {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventGroupAddRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
    /**
     * Group ID used by the workflow.
     */
    group_id: number;
  }
  export interface EventGroupAddRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventGroupAddRuntimeHours;
  }
  export interface EventGroupAddRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Event_EmailSeries {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventEmailSeriesRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
    /**
     * Trigger workflow when subscribers are imported.
     */
    trigger_on_import?: boolean;
  }
  export interface EventEmailSeriesRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventEmailSeriesRuntimeHours;
  }
  export interface EventEmailSeriesRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Event_EmailFollowup {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventEmailFollowupRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
    /**
     * Trigger workflow when subscribers are imported.
     */
    trigger_on_import: boolean;
  }
  export interface EventEmailFollowupRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventEmailFollowupRuntimeHours;
  }
  export interface EventEmailFollowupRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Event_CategoryFollowup {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventCategoryFollowupRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
    /**
     * The name of the product category a workflow is triggered on.
     */
    category_name: string;
  }
  export interface EventCategoryFollowupRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventCategoryFollowupRuntimeHours;
  }
  export interface EventCategoryFollowupRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface Event_BestCustomers {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime: EventBestCustomersRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
    /**
     * Send first email immediately to existing subscribers who meet conditions.
     */
    send_immediately: boolean;
    /**
     * The number of purchase orders needed to trigger a workflow. The workflow will trigger when purchases exceed this amount.
     */
    purchase_orders: number;
    /**
     * The lifetime total purchase value needed to trigger a workflow. The workflow will trigger when a lifetime purchase value exceeds this amount.
     */
    lifetime_purchase_value: number;
  }
  export interface EventBestCustomersRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: EventBestCustomersRuntimeHours;
  }
  export interface EventBestCustomersRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface EmailSegment {
    condition_type?: 'EmailAddress';
    /**
     * Segmenting based off of a subscriber's email address.
     */
    field: 'merge0' | 'EMAIL';
    /**
     * Whether the email address is/not exactly, contains/doesn't contain, starts/ends with a string.
     */
    op:
      | 'is'
      | 'not'
      | 'contains'
      | 'notcontain'
      | 'starts'
      | 'ends'
      | 'greater'
      | 'less';
    /**
     * The value to compare the email against.
     */
    value?: string;
  }
  export interface EmailClientSegment {
    condition_type?: 'EmailClient';
    /**
     * Used for segmenting subscribers who have/have not interacted with a specific campaign(s).
     */
    field: 'email_client';
    /**
     * The status of the member with regard to their campaign interaction. One of the following: opened, clicked, was sent, didn't open, didn't click, or was not sent.
     */
    op: 'client_is' | 'client_not';
    /**
     * The name of the email client.
     */
    value: string;
  }
  export interface EcommStoreSegment {
    condition_type?: 'EcommStore';
    /**
     * Used for segmenting members have purchased from a specific store.
     */
    field?: 'ecomm_store';
    /**
     * Members who have or have not purchased from a specific store.
     */
    op?: 'is' | 'not';
    /**
     * The store id to segment against.
     */
    value?: string;
  }
  export interface EcommSpentSegment {
    condition_type?: 'EcommSpent';
    /**
     * Used for segmenting members who have spent a specific amount on a single order or over their lifetime.
     */
    field?: 'ecomm_spent_one' | 'ecomm_spent_all';
    /**
     * Members who have spent 'more' or 'less' than then specified value.
     */
    op?: 'greater' | 'less';
    /**
     * The total amount a member spent.
     */
    value?: number;
  }
  export interface EcommPurchasedSegment {
    condition_type?: 'EcommPurchased';
    /**
     * Used for segmenting members who have/have not purchased anything.
     */
    field?: 'ecomm_purchased';
    /**
     * Members who have have ('member') or have not ('notmember') purchased.
     */
    op?: 'member' | 'notmember';
  }
  export interface EcommNumberSegment {
    condition_type?: 'EcommNumber';
    /**
     * Used for segmenting members have an average spent total, a total number of orders, total number of products purchased, or average number of products per order.
     */
    field:
      | 'ecomm_spent_avg'
      | 'ecomm_orders'
      | 'ecomm_prod_all'
      | 'ecomm_avg_ord';
    /**
     * Members who have spent exactly, have not spent exactly, spent more, or spent less than the segment value.
     */
    op: 'is' | 'not' | 'greater' | 'less';
    /**
     * Members who have spent exactly, have not spent exactly, spent more, or spent less than this amount.
     */
    value: number;
  }
  export interface EcommCategorySegment {
    condition_type?: 'EcommCategory';
    /**
     * Used for segmenting subscribers who have/have not purchased specific items or categories.
     */
    field?: 'ecomm_cat' | 'ecomm_prod';
    /**
     * A member who has purchased from a category/specific item that is/is not a specific name, where the category/item name contains/doesn't contain a specific phrase or string, or a category/item name that starts/ends with a string.
     */
    op?: 'is' | 'not' | 'contains' | 'notcontain' | 'starts' | 'ends';
    /**
     * The ecommerce category/item information.
     */
    value?: string;
  }
  export interface DateSegment {
    condition_type?: 'Date';
    /**
     * The type of date field to segment on: The opt-in time for a signup, the date the subscriber was last updated, or the date of their last ecomm purchase.
     */
    field: 'timestamp_opt' | 'info_changed' | 'ecomm_date';
    /**
     * When the event took place:  Before, after, is a specific date, is not a specific date, is blank, or is not blank.
     */
    op:
      | 'greater'
      | 'less'
      | 'is'
      | 'not'
      | 'blank'
      | 'blank_not'
      | 'within'
      | 'notwithin';
    /**
     * What type of data to segment on: a specific date, a specific campaign, or the last campaign sent.
     */
    value: string;
    /**
     * When segmenting on 'date' or 'campaign', the date for the segment formatted as YYYY-MM-DD or the web id for the campaign.
     */
    extra?: string;
  }
  export interface DateMergeSegment {
    condition_type?: 'DateMerge';
    /**
     * A date merge field to segment.
     */
    field: string;
    /**
     * Whether the member's merge information is/is not, is greater/less than a value or is/is not blank.
     */
    op: 'is' | 'not' | 'less' | 'blank' | 'blank_not' | 'greater';
    /**
     * A date to segment against.
     */
    value?: string;
  }
  export interface CountryStateSegment {
    condition_type?: 'IPGeoCountryState';
    /**
     * Segmenting subscribers who are within a specific location.
     */
    field: 'ipgeo';
    /**
     * Segment members who are within a specific country or US state.
     */
    op: 'ipgeocountry' | 'ipgeonotcountry' | 'ipgeostate' | 'ipgeonotstate';
    /**
     * The two-letter country code or US state abbreviation.
     */
    value: string;
  }
  export interface ConversationSegment {
    condition_type?: 'Conversation';
    /**
     * Used for segmenting subscribers who have/have not interacted with a campaign via 'Converstaions'.
     */
    field: 'conversation';
    /**
     * The status of a member's interaction with a conversation. One of the following: has replied or has not replied.
     */
    op: 'member' | 'notmember';
    /**
     * The web id value for a specific campaign or 'any' to account for subscribers who have/have not interacted with any campaigns.
     */
    value: string;
  }
  export interface CampaignPollSegment {
    condition_type?: 'CampaignPoll';
    /**
     * Used for segmenting by Mandrill activity.
     */
    field: 'poll';
    /**
     * Members have/have not interacted with a specific poll in a Mailchimp email.
     */
    op: 'member' | 'notmember';
    /**
     * The id for the poll.
     */
    value: number;
  }
  export interface BirthdayMergeSegment {
    condition_type?: 'BirthdayMerge';
    /**
     * A date merge field to segment.
     */
    field: string;
    /**
     * Whether the member's birthday merge information is/is not a certain date or is/is not blank.
     */
    op: 'is' | 'not' | 'blank' | 'blank_not';
    /**
     * A date to segment against (mm/dd).
     */
    value?: string;
  }
  export interface AutomationTrigger {
    /**
     * The type of Automation workflow.
     */
    workflow_type:
      | 'abandonedBrowse'
      | 'abandonedCart'
      | 'api'
      | 'bestCustomers'
      | 'categoryFollowup'
      | 'dateAdded'
      | 'emailFollowup'
      | 'emailSeries'
      | 'groupAdd'
      | 'groupRemove'
      | 'mandrill'
      | 'productFollowup'
      | 'purchaseFollowup'
      | 'recurringEvent'
      | 'specialEvent'
      | 'visitUrl'
      | 'welcomeSeries';
    /**
     * The title of the workflow type.
     */
    workflow_title?: string;
    /**
     * A workflow's runtime settings for an Automation.
     */
    runtime?: AutomationTriggerRuntime;
    /**
     * The number of emails in the Automation workflow.
     */
    workflow_emails_count?: number;
  }
  export interface AutomationTriggerRuntime {
    /**
     * The days an Automation workflow can send.
     */
    days?: string[];
    /**
     * The hours an Automation workflow can send.
     */
    hours?: AutomationTriggerRuntimeHours;
  }
  export interface AutomationTriggerRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface AutomationSegment {
    condition_type?: 'Automation';
    /**
     * Used for segmenting subscribers who have/have not interacted with an Automation workflow.
     */
    field: 'automation';
    /**
     * The status of the member with regard to the automation workflow. One of the following: has started the workflow, has completed the workflow, has not started the workflow, or has not completed the workflow.
     */
    op: 'started' | 'completed' | 'not_started' | 'not_completed';
    /**
     * The web id for the automation workflow to segment against.
     */
    value: string;
  }
  export interface AutomationRuntimeHours {
    /**
     * When to send the Automation email.
     */
    type: 'send_asap' | 'send_between' | 'send_at';
  }
  export interface AimSegment {
    condition_type?: 'Aim';
    /**
     * Used for segmenting subscribers who have/have not interacted with a specific campaign(s).
     */
    field?: 'aim';
    /**
     * The status of the member with regard to their campaign interaction. One of the following: opened, clicked, was sent, didn't open, didn't click, or was not sent.
     */
    op?: 'open' | 'click' | 'sent' | 'noopen' | 'noclick' | 'nosent';
    /**
     * Either the web id value for a specific campaign or 'any' to account for subscribers who have/have not interacted with any campaigns.
     */
    value?: string;
  }
  export interface AddressMergeSegment {
    condition_type?: 'AddressMerge';
    /**
     * An address-type merge field to segment.
     */
    field: string;
    /**
     * Whether the member's address merge field contains/does not contain a value or is/is not blank.
     */
    op: 'contains' | 'notcontain' | 'blank' | 'blank_not';
    /**
     * The value to segment a text merge field with.
     */
    value?: string;
  }
}
