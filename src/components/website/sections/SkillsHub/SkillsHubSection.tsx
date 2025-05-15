import { TabItem, SkillState, TabLink, CourseResponse } from './skillsHub.types';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { TabData } from './skillsHub.data';
import SkillHubHeader from './SkillHubHeader';
import DesktopSkills from './DesktopSkills';
import MobileSkills from './MobileSkills';
import SectionLayout from '@/components/website/layouts/SectionLayout';
import { categorizedCourses } from '../CourseCarousel/data';

export const SkillsHubSection = () => {
  console.log('SkillsHubSection rerender');

  const [tabsData, setTabsData] = useState<TabItem[]>([]);
  const [isLoadingTabs, setIsLoadingTabs] = useState(true);
  const [skillState, setSkillState] = useState<SkillState>({});
  const [activeTabTitle, setActiveTabTitle] = useState<string | null>(null);

  // todo : currently data fetching using effect and temp data 
  //migertating to rtk-query 


  useEffect(() => {
    const fetchTabData = async () => {
      setIsLoadingTabs(true);
      setTimeout(() => {
        const loadedData: TabItem[] = TabData;
        setTabsData(loadedData);

        if (loadedData.length > 0) {
          const initialSkillState: SkillState = {};
          loadedData.forEach((tab) => {
            initialSkillState[tab.title] = {
              activePillIndex: 0,
              cachedCourses: {},
            };
          });
          setSkillState(initialSkillState);
          setActiveTabTitle(loadedData[0].title);

          if (loadedData[0] && loadedData[0].links[0]) {
            const initialTabTitle = loadedData[0].title;
            const initialPill = loadedData[0].links[0];
            fetchCoursesForPill(initialTabTitle, initialPill, 1);
          }
        }
        setIsLoadingTabs(false);
      }, 1000);
    };

    fetchTabData();
  }, []);


  const fetchCoursesForPill = useCallback(async (tabTitle: string, pill: TabLink, page: number = 1) => {
    const pillIdentifier = pill.id || pill.text;

    setSkillState(prevState => {
      const tabState = prevState[tabTitle] || { activePillIndex: 0, cachedCourses: {} };
      const currentPillCourses = tabState.cachedCourses[pillIdentifier] || { data: [], currentPage: 0, hasMore: true, isLoading: false, error: null };

      // loading setup pill+page
      const newState = {
        ...prevState,
        [tabTitle]: {
          ...tabState,
          cachedCourses: {
            ...tabState.cachedCourses,
            [pillIdentifier]: {
              ...currentPillCourses,
              isLoading: true,
              error: null,
            }
          }
        }
      };
      return newState;
    });


    try {
      const response: CourseResponse = await new Promise(resolve => setTimeout(() => {
        const hasMore = true;
        resolve({
          data: categorizedCourses.popular,
          hasMore: hasMore
        });
      }, 500));

      const newCourses = response.data;
      const hasMore = response.hasMore;

      //seting up the fetehed coureses and laodin false 
      setSkillState(prevState => {
        const tabState = prevState[tabTitle];
        if (!tabState) return prevState;

        const currentPillCourses = tabState.cachedCourses[pillIdentifier];
        if (!currentPillCourses) {
          console.warn(`State structure changed during fetch for ${tabTitle} - ${pill.text}`);
          return prevState;
        }
        const updatedData = page === 1 ? newCourses : [...currentPillCourses.data, ...newCourses];

        return {
          ...prevState,
          [tabTitle]: {
            ...tabState,
            cachedCourses: {
              ...tabState.cachedCourses,
              [pillIdentifier]: {
                ...currentPillCourses,
                data: updatedData,
                currentPage: page,
                hasMore: hasMore,
                isLoading: false,
                error: null,
              }
            }
          }
        };
      });

    } catch (error: any) {
      console.error(`Error fetching courses for ${tabTitle} - ${pill.text}:`, error);
      setSkillState(prevState => {
        const tabState = prevState[tabTitle];
        if (!tabState) return prevState;
        const currentPillCourses = tabState.cachedCourses[pillIdentifier];
        if (!currentPillCourses) return prevState;

        return {
          ...prevState,
          [tabTitle]: {
            ...tabState,
            cachedCourses: {
              ...tabState.cachedCourses,
              [pillIdentifier]: {
                ...currentPillCourses,
                isLoading: false,
                error: error.message || 'Failed to fetch courses',
              }
            }
          }
        };
      });
    }
  }, []);



  const handleTabChange = useCallback((tabTitle: string) => {

    console.log("hey from kfnadklfndkalfndkl", tabTitle);
    if (!tabTitle)
      return;
    setActiveTabTitle(tabTitle);
    const selectedTab = tabsData.find(tab => tab.title === tabTitle);
    if (!selectedTab) return;

    const tabState = skillState[tabTitle];
    const activePillIndex = tabState?.activePillIndex ?? 0;
    const selectedPill = selectedTab.links[activePillIndex];

    if (!selectedPill) return;
    fetchCoursesForPill(tabTitle, selectedPill, 1);

  }, [tabsData, skillState, fetchCoursesForPill]);


  const handlePillSelect = useCallback(
    (tabTitle: string, pillIndex: number) => {
      const selectedTab = tabsData.find(tab => tab.title === tabTitle);
      if (!selectedTab) return;

      const selectedPill = selectedTab.links[pillIndex];
      if (!selectedPill) return;

      setSkillState((prevState) => ({
        ...prevState,
        [tabTitle]: {
          ...prevState[tabTitle],
          activePillIndex: pillIndex,
        },
      }));
      fetchCoursesForPill(tabTitle, selectedPill, 1);
    },
    [tabsData, fetchCoursesForPill]
  );


  //-----------------------------------------------------------------------
  //not using as of now will move to library for fetching will impelemtn the same in that
  // carousel loadmore functionality will impelement with data fethcing library

  const loadMoreCourses = useCallback((tabTitle: string) => {
    const tabState = skillState[tabTitle];
    if (!tabState) return;

    const activePillIndex = tabState.activePillIndex;
    const activePill = tabsData.find(t => t.title === tabTitle)?.links[activePillIndex];

    if (!activePill) return;

    const pillIdentifier = activePill.id || activePill.text;
    const currentPillCourses = tabState.cachedCourses[pillIdentifier];

    // Trigger fetch for the next page if not already loading and has more
    if (currentPillCourses && !currentPillCourses.isLoading && currentPillCourses.hasMore) {
      fetchCoursesForPill(tabTitle, activePill, currentPillCourses.currentPage + 1);
    } else {

    }

  }, [skillState, tabsData, fetchCoursesForPill]);
  //not in use
  //--------------------------------------------------------------------------------

  const activeTabState = useMemo(() => {
    if (!activeTabTitle || !skillState[activeTabTitle]) {
      return null;
    }
    const tabState = skillState[activeTabTitle];
    const activePillIndex = tabState.activePillIndex;
    const activePill = tabsData.find(tab => tab.title === activeTabTitle)?.links[activePillIndex];
    const pillIdentifier = activePill?.text!;
    const pillCourses = tabState.cachedCourses[pillIdentifier];

    console.log("pillindesition working", pillIdentifier)
    return {
      tabTitle: activeTabTitle,
      activePillIndex: activePillIndex,
      activePillIdentifier: pillIdentifier,
      courses: pillCourses?.data ?? [],
      isLoading: pillCourses?.isLoading ?? false,
      hasMore: pillCourses?.hasMore ?? false,
      error: pillCourses?.error ?? null,
      currentPage: pillCourses?.currentPage ?? 0,
    };
  }, [activeTabTitle, skillState, tabsData]);


  if (isLoadingTabs) {
    return (
      <SectionLayout>
        <div className='w-full h-full'>
          <div className='py-16 flex justify-center'>
            <p>Loading skills hub...</p>
          </div>
        </div>
      </SectionLayout>
    );
  }

  if (!tabsData || tabsData.length === 0) {
    return (
      <SectionLayout>
        <div className='w-full h-full'>
          <div className='py-16 flex justify-center'>
            <p>No skill data available.</p>
          </div>
        </div>
      </SectionLayout>
    );
  }

  console.log("SkillState:", skillState);
  console.log("Active Tab State:", activeTabState);

  return (
    <SectionLayout>
      <div className='w-full h-full'>
        {/* skillhub header */}
        <SkillHubHeader />

        {/* skillhub skills container */}
        <div id='skillhub-skills' className='mt-4'>
          {/* desktop carousel view of skills */}
          <div id='desktop-skill' className='hidden sm:block'>
            {activeTabState && (
              <DesktopSkills
                tabsData={tabsData}
                activeTabState={activeTabState}
                handlePillSelect={handlePillSelect}
                loadMoreCourses={loadMoreCourses}
                handleTabChange={handleTabChange}
              />
            )}
          </div>

          {/*mobile accordian view of skills  */}
          <div id='mobile-skills' className='block sm:hidden'>
            {activeTabState && (
              <MobileSkills
                tabsData={tabsData}
                activeTabState={activeTabState}
                handlePillSelect={handlePillSelect}
                loadMoreCourses={loadMoreCourses}
                handleTabChange={handleTabChange}
              />
            )}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};