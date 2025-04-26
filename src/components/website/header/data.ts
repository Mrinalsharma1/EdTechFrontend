import type { TopLevelCategoryWithSubcategories } from './types';

// Better navigation data structure
export const navigationData: TopLevelCategoryWithSubcategories[] = [
  {
    id: 'cat_design',
    metadata: {
      type: 'category',
      categoryId: 1,
      name: 'Design',
      url: '/design/',
      iconClass: 'icon-design',
    },
    sublist: {
      id: 'sublist_design',
      listType: 'generic',
      subcategories: [
        {
          id: 'subcat_webdesign',
          metadata: {
            type: 'subcategory',
            subcategoryId: 101,
            name: 'Web Design',
            url: '/web-design/',
          },
          sublist: {
            id: 'labels_webdesign_101',
            listType: 'generic',
            items: [],
          },
        },
        {
          id: 'subcat_graphicdesign',
          metadata: {
            type: 'subcategory',
            subcategoryId: 102,
            name: 'Graphic Design',
            url: '/graphic-design/',
          },
          sublist: {
            id: 'labels_graphicdesign_102',
            listType: 'generic',
            items: [],
          },
        },
        {
          id: 'subcat_uiux',
          metadata: {
            type: 'subcategory',
            subcategoryId: 103,
            name: 'UI/UX Design',
            url: '/ui-ux-design/',
          },
          sublist: {
            id: 'labels_uiux_103',
            listType: 'generic',
            items: [],
          },
        },
      ],
    },
  },
  {
    id: 'cat_development',
    metadata: {
      type: 'category',
      categoryId: 2,
      name: 'Development',
      url: '/development/',
      iconClass: 'icon-development',
    },
    sublist: {
      id: 'sublist_development',
      listType: 'generic',
      subcategories: [
        {
          id: 'subcat_webdevelopment',
          metadata: {
            type: 'subcategory',
            subcategoryId: 201,
            name: 'Web Development',
            url: '/web-development/',
          },
          sublist: {
            id: 'labels_webdev_201',
            listType: 'generic',
            items: [],
          },
        },
        {
          id: 'subcat_datascience',
          metadata: {
            type: 'subcategory',
            subcategoryId: 202,
            name: 'Data Science',
            url: '/data-science/',
          },
          sublist: {
            id: 'labels_datascience_202',
            listType: 'generic',
            items: [],
          },
        },
        {
          id: 'subcat_mobiledev',
          metadata: {
            type: 'subcategory',
            subcategoryId: 203,
            name: 'Mobile Development',
            url: '/mobile-development/',
          },
          sublist: {
            id: 'labels_mobiledev_203',
            listType: 'generic',
            items: [],
          },
        },
      ],
    },
  },
  {
    id: 'cat_marketing',
    metadata: {
      type: 'category',
      categoryId: 3,
      name: 'Marketing',
      url: '/marketing/',
      iconClass: 'icon-marketing',
    },
    sublist: {
      id: 'sublist_marketing',
      listType: 'generic',
      subcategories: [
        {
          id: 'subcat_digitalmarketing',
          metadata: {
            type: 'subcategory',
            subcategoryId: 301,
            name: 'Digital Marketing',
            url: '/digital-marketing/',
          },
          sublist: {
            id: 'labels_digitalmarketing_301',
            listType: 'generic',
            items: [],
          },
        },
        {
          id: 'subcat_seo',
          metadata: {
            type: 'subcategory',
            subcategoryId: 302,
            name: 'SEO',
            url: '/seo/',
          },
          sublist: {
            id: 'labels_seo_302',
            listType: 'generic',
            items: [],
          },
        },
        {
          id: 'subcat_socialmediamarketing',
          metadata: {
            type: 'subcategory',
            subcategoryId: 303,
            name: 'Social Media Marketing',
            url: '/social-media-marketing/',
          },
          sublist: {
            id: 'labels_socialmedia_303',
            listType: 'generic',
            items: [],
          },
        },
      ],
    },
  },
  {
    id: 'cat_itsoftware',
    metadata: {
      type: 'category',
      categoryId: 4,
      name: 'IT & Software',
      url: '/it-and-software/',
      iconClass: 'icon-itsoftware',
    },
    sublist: {
      id: 'sublist_itsoftware',
      listType: 'generic',
      subcategories: [
        {
          id: 'subcat_itcertification',
          metadata: {
            type: 'subcategory',
            subcategoryId: 401,
            name: 'IT Certification',
            url: '/it-certification/',
          },
          sublist: {
            id: 'labels_itcert_401',
            listType: 'generic',
            items: [],
          },
        },
        {
          id: 'subcat_networks',
          metadata: {
            type: 'subcategory',
            subcategoryId: 402,
            name: 'Network & Security',
            url: '/networks-and-security/',
          },
          sublist: {
            id: 'labels_networks_402',
            listType: 'generic',
            items: [],
          },
        },
        {
          id: 'subcat_os',
          metadata: {
            type: 'subcategory',
            subcategoryId: 403,
            name: 'Operating Systems',
            url: '/operating-systems/',
          },
          sublist: {
            id: 'labels_os_403',
            listType: 'generic',
            items: [],
          },
        },
      ],
    },
  },
  {
    id: 'cat_business',
    metadata: {
      type: 'category',
      categoryId: 5,
      name: 'Business',
      url: '/business/',
      iconClass: 'icon-business',
    },
    sublist: {
      id: 'sublist_business',
      listType: 'generic',
      subcategories: [
        {
          id: 'subcat_entrepreneurship',
          metadata: {
            type: 'subcategory',
            subcategoryId: 501,
            name: 'Entrepreneurship',
            url: '/entrepreneurship/',
          },
          sublist: {
            id: 'labels_entrepreneurship_501',
            listType: 'generic',
            items: [],
          },
        },
        {
          id: 'subcat_communication',
          metadata: {
            type: 'subcategory',
            subcategoryId: 502,
            name: 'Communication',
            url: '/communication/',
          },
          sublist: {
            id: 'labels_communication_502',
            listType: 'generic',
            items: [],
          },
        },
        {
          id: 'subcat_management',
          metadata: {
            type: 'subcategory',
            subcategoryId: 503,
            name: 'Management',
            url: '/management/',
          },
          sublist: {
            id: 'labels_management_503',
            listType: 'generic',
            items: [],
          },
        },
      ],
    },
  },
];

export const labelData = [
  {
    class: 'course_label',
    id: 1001,
    displayName: 'React',
    topicChannelUrl: '/topic/react/',
    name: 'react',
    url: '/topic/react/',
  },
  {
    class: 'course_label',
    id: 1002,
    displayName: 'Angular',
    topicChannelUrl: '/topic/angular/',
    name: 'angular',
    url: '/topic/angular/',
  },
  {
    class: 'course_label',
    id: 1003,
    displayName: 'Node.js',
    topicChannelUrl: '/topic/nodejs/',
    name: 'nodejs',
    url: '/topic/nodejs/',
  },
  {
    class: 'course_label',
    id: 1004,
    displayName: 'JavaScript',
    topicChannelUrl: '/topic/javascript/',
    name: 'javascript',
    url: '/topic/javascript/',
  },
];
