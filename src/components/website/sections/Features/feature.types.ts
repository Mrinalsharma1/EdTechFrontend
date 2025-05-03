interface ImageInfo { 
    url: string;
    altText: string;
  }
  
  export interface FeatureItem {
    heading: string;
    description: string;
    contentUrl?: string | null;
    contentUrlText?: string | null;
    image: ImageInfo;
    secondaryImage: ImageInfo;
    labelText?: string; 
    trackingId: string; 
  }