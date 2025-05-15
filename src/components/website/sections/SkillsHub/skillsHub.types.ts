import { Course } from "../CourseCarousel/types";

//final state needs to be improved we can optmised the state to more granular 
//structure lot of duplicate state present 


export interface TabItem {
  title: string;
  links: TabLink[];
}

export interface TabLink {
  id?: number;
  href: string;
  text: string;
}

export interface PillCourses {
  data: Course[];
  currentPage: number;
  hasMore: boolean;
  isLoading: boolean;
  error: string | null
}


export interface TabDataState {
  activePillIndex: number;
  cachedCourses: Record<string, PillCourses>;
}


export type SkillState = Record<string, TabDataState>;

export type CourseResponse = {
  data: Course[];
  hasMore: boolean;
};


export interface ActiveTabState {
  tabTitle: string;
  activePillIndex: number;
  activePillIdentifier: string | undefined | null;
  courses: Course[];
  isLoading: boolean;
  hasMore: boolean;
  error: string | null;
}
