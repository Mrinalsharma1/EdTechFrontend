import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { labelData } from './data';
import { TopLevelCategoryWithSubcategories, Label } from './types';
import { cn } from '@/lib/utils';

interface NavMenuState {
  subSubcategoriesBySubLevelId: Record<number, Label[]>;
  loadingSubcategoryId: number | null;
  activeTopCategoryId: number | null;
  activeSubCategoryId: number | null;
  isInitialLoading: boolean;
  errorState: string | null;
}

const NavMenu = ({
  navigationCategories,
}: {
  navigationCategories: TopLevelCategoryWithSubcategories[];
}) => {
  const [navMenuData, setNavMenuData] = useState<NavMenuState>({
    subSubcategoriesBySubLevelId: {},
    loadingSubcategoryId: null,
    activeTopCategoryId: null,
    activeSubCategoryId: null,
    isInitialLoading: true,
    errorState: null,
  });

  useEffect(() => {
    const fetchLabelData = async () => {
      try {
        const subcategoryId = navMenuData.activeSubCategoryId;
        if (subcategoryId !== null) {
          setTimeout(() => {
            setNavMenuData((prevState) => ({
              ...prevState,
              subSubcategoriesBySubLevelId: {
                ...prevState.subSubcategoriesBySubLevelId,
                [subcategoryId.toString()]: labelData,
              },
            }));
          }, 2000);
        }
      } catch (error) {
        console.error('Error fetching label data:', error);
      }
    };
    fetchLabelData();
  }, [
    navMenuData.activeSubCategoryId,
    navMenuData.subSubcategoriesBySubLevelId,
  ]);

  const handleTopCategoryHover = (categoryId: number) => {
    setNavMenuData((prevState) => ({
      ...prevState,
      activeTopCategoryId: categoryId,
    }));
  };

  const handleSubCategoryHover = (subcategoryId: number) => {
    setNavMenuData((prevState) => ({
      ...prevState,
      activeSubCategoryId: subcategoryId,
    }));
  };

  console.log(navMenuData);
  return (
    <div className='h-full flex items-center justify-center gap-4 ml-4'>
      <HoverCard openDelay={0} closeDelay={150}>
        <HoverCardTrigger asChild>
          <Button
            variant='ghost'
            size='lg'
            className='font-medium hover:bg-blue-50 hover:text-blue-600'
          >
            Explore
            <ChevronDown className='size-4 ml-1.5 mt-0.5 transition-transform duration-200 group-hover:transform group-hover:-rotate-180' />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent
          className='z-[1100] w-auto p-0 border-none shadow-lg rounded-sm'
          align='start'
          sideOffset={4}
          alignOffset={0}
        >
          <div className='shadow-sm rounded-sm bg-white border border-gray-200 overflow-hidden'>
            <div id='list-menu-container' className='flex'>
              {/* Level One Navigation */}
              <div
                id='nav-level-one'
                className='relative w-[18rem] min-h-[40rem] border-r border-gray-100 bg-gray-50/50'
                onMouseEnter={() =>
                  setNavMenuData((prevState) => ({
                    ...prevState,
                    activeSubCategoryId: null,
                  }))
                }
              >
                <h2
                  id='categories-heading'
                  className='text-lg font-semibold flex justify-start border-b border-gray-100 py-4 px-6 text-gray-800 bg-white'
                >
                  Browse Categories
                </h2>

                <ul id='categories-list' className='list-none py-3 space-y-0.5'>
                  {navigationCategories.map((category) => (
                    <li
                      key={category.metadata.categoryId}
                      className='transition-all duration-200 px-3'
                      onMouseEnter={() =>
                        handleTopCategoryHover(category.metadata.categoryId)
                      }
                    >
                      <a
                        href={category.metadata.url}
                        className={cn(
                          'flex items-center justify-between py-3 px-4 rounded-none group transition-all duration-200',
                          navMenuData.activeTopCategoryId ===
                            category.metadata.categoryId
                            ? 'text-blue-600 bg-white shadow-sm'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-sm'
                        )}
                      >
                        <div className='flex items-center font-medium'>
                          {category.metadata.name}
                        </div>
                        <div
                          className={cn(
                            'transition-transform duration-200',
                            'group-hover:text-blue-500 group-hover:translate-x-0.5',
                            navMenuData.activeTopCategoryId ===
                              category.metadata.categoryId
                              ? 'text-blue-500 translate-x-0.5'
                              : 'text-gray-400'
                          )}
                        >
                          <ChevronRight className='w-4 h-4' />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Level Two Navigation */}
              <div
                id='nav-level-two'
                className={cn(
                  'relative w-[18rem] min-h-[40rem] border-r border-gray-100 bg-white transition-all duration-300',
                  navMenuData.activeTopCategoryId ? 'block' : 'hidden'
                )}
              >
                <h2
                  id='subcategories-heading'
                  className='text-lg font-semibold flex justify-start border-b border-gray-100 py-4 px-6 text-gray-800 bg-white sticky top-0'
                >
                  {
                    navigationCategories.find(
                      (category) =>
                        category.metadata.categoryId ===
                        navMenuData.activeTopCategoryId
                    )?.metadata.name
                  }
                </h2>

                <ul
                  id='subcategories-list'
                  className='list-none py-3 space-y-0.5'
                >
                  {navigationCategories
                    .find(
                      (category) =>
                        category.metadata.categoryId ===
                        navMenuData.activeTopCategoryId
                    )
                    ?.sublist.subcategories.map((subcategory) => (
                      <li
                        key={subcategory.metadata.subcategoryId}
                        className='transition-all duration-200 px-3'
                        onMouseEnter={() =>
                          handleSubCategoryHover(
                            subcategory.metadata.subcategoryId
                          )
                        }
                      >
                        <a
                          href={subcategory.metadata.url}
                          className={cn(
                            'flex items-center justify-between py-3 px-4 rounded-none group transition-all duration-200',
                            navMenuData.activeSubCategoryId ===
                              subcategory.metadata.subcategoryId
                              ? 'text-blue-600 bg-blue-50 shadow-sm'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                          )}
                        >
                          <div className='flex items-center font-medium'>
                            {subcategory.metadata.name}
                          </div>
                          <div
                            className={cn(
                              'transition-transform duration-200',
                              'group-hover:text-blue-500 group-hover:translate-x-0.5',
                              navMenuData.activeSubCategoryId ===
                                subcategory.metadata.subcategoryId
                                ? 'text-blue-500 translate-x-0.5'
                                : 'text-gray-400'
                            )}
                          >
                            <ChevronRight className='w-4 h-4' />
                          </div>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              {/* Level Three Navigation */}
              <div
                id='nav-level-three'
                className={cn(
                  'relative w-[18rem] min-h-[40rem] bg-white transition-all duration-300',
                  navMenuData.activeSubCategoryId ? 'block' : 'hidden'
                )}
              >
                <h2
                  id='subcategories-heading'
                  className='text-lg font-semibold flex justify-start border-b border-gray-100 py-4 px-6 text-gray-800 bg-white sticky top-0'
                >
                  {
                    navigationCategories
                      .flatMap((category) => category.sublist.subcategories)
                      .find(
                        (subcategory) =>
                          subcategory.metadata.subcategoryId ===
                          navMenuData.activeSubCategoryId
                      )?.metadata.name
                  }
                </h2>

                <ul
                  id='subcategories-list'
                  className='list-none py-3 space-y-0.5'
                >
                  {navMenuData.activeSubCategoryId &&
                    navMenuData.subSubcategoriesBySubLevelId[
                      navMenuData.activeSubCategoryId
                    ]?.map((label: Label) => (
                      <li
                        key={label.id}
                        className='transition-all duration-200 px-3'
                      >
                        <a
                          href={label.url}
                          className='flex items-center py-3 px-4 rounded-none group transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        >
                          <div className='flex items-center font-medium'>
                            {label.name}
                          </div>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default NavMenu;
