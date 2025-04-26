import { Menu, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { TopLevelCategoryWithSubcategories } from './types';
import { buttonVariants } from '@/components/ui/button-variants';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MobileMenuState {
  isOpen: boolean;
  activeTopCategoryId: number | null;
  activeSubCategoryId: number | null;
  activeDrawerLevel: 'main' | 'category' | 'subcategory';
}

export const MobileMenu = ({
  navigationCategories,
}: {
  navigationCategories: TopLevelCategoryWithSubcategories[];
}) => {
  const [menuState, setMenuState] = useState<MobileMenuState>({
    isOpen: false,
    activeTopCategoryId: null,
    activeSubCategoryId: null,
    activeDrawerLevel: 'main',
  });

  const activeCategory = navigationCategories.find(
    (cat) => cat.metadata.categoryId === menuState.activeTopCategoryId
  );

  const handleCategoryClick = (categoryId: number) => {
    setMenuState((prev) => ({
      ...prev,
      activeTopCategoryId: categoryId,
      activeSubCategoryId: null,
      activeDrawerLevel: 'category',
    }));
  };

  const handleSubCategoryClick = (subcategoryId: number) => {
    setMenuState((prev) => ({
      ...prev,
      activeSubCategoryId: subcategoryId,
      activeDrawerLevel: 'subcategory',
    }));
  };

  const handleBackClick = () => {
    setMenuState((prev) => {
      if (prev.activeDrawerLevel === 'subcategory') {
        return {
          ...prev,
          activeSubCategoryId: null,
          activeDrawerLevel: 'category',
        };
      }
      return {
        ...prev,
        activeTopCategoryId: null,
        activeDrawerLevel: 'main',
      };
    });
  };

  const toggleMenu = (open: boolean) => {
    setMenuState((prev) => ({
      ...prev,
      isOpen: open,
      // Reset state when closing menu
      ...(open === false && {
        activeTopCategoryId: null,
        activeSubCategoryId: null,
        activeDrawerLevel: 'main',
      }),
    }));
  };

  return (
    <div className='relative'>
      <Button
        variant='ghost'
        size='icon'
        className='relative'
        onClick={() => toggleMenu(!menuState.isOpen)}
      >
        <Menu className='h-6 w-6' />
      </Button>

      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 transition-all duration-300 z-[1150] cursor-pointer',
          menuState.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={() => toggleMenu(false)}
      />

      {/* Drawer Container */}
      <div
        className={cn(
          'fixed w-[280px] inset-0 transition-all duration-150 z-[1160]',
          menuState.isOpen
            ? 'pointer-events-auto visible'
            : 'pointer-events-none invisible'
        )}
      >
        {/* Main Drawer Panel */}
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[1170] overflow-hidden',
            menuState.isOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          {/* Level 1 - Main Menu */}
          <div
            className={cn(
              'absolute inset-0 transform transition-transform duration-300 bg-white',
              menuState.activeDrawerLevel === 'main'
                ? 'translate-x-0'
                : '-translate-x-full'
            )}
          >
            <div className='h-full flex flex-col'>
              {/* Login/Signup Section */}
              <div className='p-4 space-y-3 border-b border-gray-100'>
                <Link
                  to='/login'
                  className={cn(
                    buttonVariants({
                      variant: 'login',
                      size: 'lg',
                      className: 'w-full',
                    })
                  )}
                >
                  Log in
                </Link>
                <Link
                  to='/signup'
                  className={cn(
                    buttonVariants({
                      variant: 'signup',
                      size: 'lg',
                      className: 'w-full',
                    })
                  )}
                >
                  Sign up
                </Link>
              </div>

              <h2 className='text-lg font-semibold flex justify-start border-b border-gray-100 py-4 px-6 text-gray-800 bg-white'>
                Browse Categories
              </h2>

              <ScrollArea className='flex-1'>
                <ul className='list-none py-3 space-y-0.5'>
                  {navigationCategories.map((category) => (
                    <li
                      key={category.metadata.categoryId}
                      className='transition-all duration-200 px-3'
                    >
                      <button
                        onClick={() =>
                          handleCategoryClick(category.metadata.categoryId)
                        }
                        className={cn(
                          'w-full flex items-center justify-between py-3 px-4 rounded-none group transition-all duration-200 cursor-pointer',
                          'text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-sm'
                        )}
                      >
                        <span className='flex items-center font-medium'>
                          {category.metadata.name}
                        </span>
                        <span className='transition-transform duration-200 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5'>
                          <ChevronRight className='w-4 h-4' />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </div>

          {/* Level 2 - Category Content */}
          <div
            className={cn(
              'absolute inset-0 transform transition-transform duration-300 bg-white',
              {
                'translate-x-0': menuState.activeDrawerLevel === 'category',
                'translate-x-full': menuState.activeDrawerLevel === 'main',
                '-translate-x-full':
                  menuState.activeDrawerLevel === 'subcategory',
              }
            )}
          >
            <div className='h-full flex flex-col'>
              <div className='border-b border-gray-100'>
                <button
                  onClick={handleBackClick}
                  className='w-full py-4 px-6 text-blue-600 font-medium flex items-center gap-2 cursor-pointer'
                >
                  <ChevronRight className='w-4 h-4 rotate-180' />
                  Back
                </button>
              </div>

              <h2 className='text-lg font-semibold border-b border-gray-100 py-4 px-6 text-gray-800 bg-white'>
                {activeCategory?.metadata.name}
              </h2>

              <ScrollArea className='flex-1'>
                <ul className='list-none py-3 space-y-0.5'>
                  {activeCategory?.sublist.subcategories.map((subcategory) => (
                    <li
                      key={subcategory.metadata.subcategoryId}
                      className='transition-all duration-200 px-3'
                    >
                      <button
                        onClick={() =>
                          handleSubCategoryClick(
                            subcategory.metadata.subcategoryId
                          )
                        }
                        className={cn(
                          'w-full flex items-center justify-between py-3 px-4 rounded-none group transition-all duration-200 cursor-pointer',
                          'text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-sm'
                        )}
                      >
                        <span className='flex items-center font-medium'>
                          {subcategory.metadata.name}
                        </span>
                        <span className='transition-transform duration-200 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5'>
                          <ChevronRight className='w-4 h-4' />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </div>

          {/* Level 3 - Subcategory Content */}
          <div
            className={cn(
              'absolute inset-0 transform transition-transform duration-300 bg-white',
              {
                'translate-x-0': menuState.activeDrawerLevel === 'subcategory',
                'translate-x-full':
                  menuState.activeDrawerLevel === 'category' ||
                  menuState.activeDrawerLevel === 'main',
              }
            )}
          >
            <div className='h-full flex flex-col'>
              <div className='border-b border-gray-100'>
                <button
                  onClick={handleBackClick}
                  className='w-full py-4 px-6 text-blue-600 font-medium flex items-center gap-2 cursor-pointer'
                >
                  <ChevronRight className='w-4 h-4 rotate-180' />
                  Back
                </button>
              </div>

              <h2 className='text-lg font-semibold border-b border-gray-100 py-4 px-6 text-gray-800 bg-white'>
                {
                  activeCategory?.sublist.subcategories.find(
                    (sub) =>
                      sub.metadata.subcategoryId ===
                      menuState.activeSubCategoryId
                  )?.metadata.name
                }
              </h2>

              <ScrollArea className='flex-1'>
                <ul className='list-none py-3 space-y-0.5'>
                  <li className='transition-all duration-200 px-3'>
                    <button className='w-full flex items-center py-3 px-4 rounded-none transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-gray-50'>
                      <span className='flex items-center font-medium'>
                        Coming Soon...
                      </span>
                    </button>
                  </li>
                </ul>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => toggleMenu(false)}
        className={cn(
          'absolute top-1 -right-70',
          'z-[1180] h-10 w-10',
          'rounded-full bg-white shadow-lg cursor-pointer',
          'flex items-center justify-center',
          'transform transition-all duration-200',
          'hover:bg-gray-50 hover:scale-110 hover:rotate-90',
          'focus:outline-none focus:ring-2 focus:ring-gray-200',
          menuState.isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <X className='h-5 w-5 text-gray-600' />
      </button>
    </div>
  );
};
