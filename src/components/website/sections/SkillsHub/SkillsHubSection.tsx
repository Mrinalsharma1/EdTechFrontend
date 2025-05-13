import { TabItem, SkillState } from './skillsHub.types';
import { useEffect, useState, useCallback } from 'react';
import { TabData } from './skillsHub.data';
import SkillHubHeader from './SkillHubHeader';
import DesktopSkills from './DesktopSkills';
import MobileSkills from './MobileSkills';
import SectionLayout from '@/components/website/layouts/SectionLayout';

export const SkillsHubSection = () => {
  console.log('skill hub rerender');

  const [tabsData, setTabsData] = useState<TabItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [skillState, setSkillState] = useState<SkillState>({});

  useEffect(() => {
    const fetchTabData = async () => {
      setIsLoading(true);
      setTimeout(() => {
        const loadedData = TabData;
        setTabsData(loadedData);

        if (loadedData.length > 0) {
          const initialSkillState: SkillState = {};
          loadedData.forEach((tab) => {
            initialSkillState[tab.title] = {
              activePillIndex: 0,
            };
          });

          setSkillState(initialSkillState);
        }

        setIsLoading(false);
      }, 2000);
    };

    fetchTabData();
  }, []);

  const getActivePillIndex = (tabTitle: string): number => {
    return skillState[tabTitle]?.activePillIndex ?? 0;
  };

  const handlePillSelect = useCallback(
    (tabTitle: string, pillIndex: number) => {
      setSkillState((prevState) => ({
        ...prevState,
        [tabTitle]: {
          ...prevState[tabTitle],
          activePillIndex: pillIndex,
        },
      }));
    },
    []
  );

  if (isLoading) {
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

  return (
    <SectionLayout>
      <div className='w-full h-full'>
        {/* skillhub header */}
        <SkillHubHeader />

        {/* skillhub skills container */}
        <div id='skillhub-skills' className='mt-4'>
          {/* desktop carousel view of skills */}
          <div id='desktop-skill' className='hidden sm:block'>
            <DesktopSkills
              tabsData={tabsData}
              getActivePillIndex={getActivePillIndex}
              handlePillSelect={handlePillSelect}
            />
          </div>

          {/*mobile accordian view of skills  */}
          <div id='mobile-skills' className='block sm:hidden'>
            <MobileSkills
              tabsData={tabsData}
              getActivePillIndex={getActivePillIndex}
              handlePillSelect={handlePillSelect}
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
