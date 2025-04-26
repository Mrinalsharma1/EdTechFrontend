export interface TopLevelCategoryWithSubcategories {
  id: string;
  metadata: {
    type: 'category';
    categoryId: number;
    name: string;
    url: string;
    iconClass?: string;
  };
  sublist: {
    id: string;
    subcategories: SubcategoryItem[];
    listType: 'generic';
  };
}

export interface Label {
  class: 'course_label';
  id: number;
  displayName: string;
  topicChannelUrl: string;
  name: string;
  url: string;
}

export interface SubcategoryItem {
  id: string;
  metadata: {
    type: 'subcategory';
    subcategoryId: number;
    name: string;
    url: string;
    iconClass?: string;
  };
  sublist: {
    id: string;
    items: Label[];
    listType: 'generic';
  };
}
export interface NavData {
  navigationCategories: TopLevelCategoryWithSubcategories[];
}
