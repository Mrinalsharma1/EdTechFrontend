import MobileFooterSection from './footer_udemybusiness/footer_udemybusinessMobile';
import DesktopFooterSection from './footer_udemybusiness/footer_udemybusinessDesktop';

import MobileAccordion from './footer_skills/footer_skillsMobile';
import DesktopAccordion from './footer_skills/footer_skillsDesktop';

import FooterLinksMobile from './footer_footerlinks/footer_footerlinksMobile';
import FooterLinksDesktop from './footer_footerlinks/footer_footerlinksDesktop';

import FooterMobilelastSection from './footer_lastsection/footer_lastsectionMobile';
import FooterDesktoplastSection from './footer_lastsection/footer_lastsectionDesktop';

export const MainFooter = () => {
  return (
    <footer className='border-t border-[#d1d7dc]'>
      <div className='hidden md:block'>
        <DesktopFooterSection />
        <DesktopAccordion />
        <FooterLinksDesktop />
        <FooterDesktoplastSection />
      </div>
      <div className='block md:hidden'>
        <MobileFooterSection />
        <MobileAccordion />
        <FooterLinksMobile />
        <FooterMobilelastSection />
      </div>
    </footer>
  );
};
