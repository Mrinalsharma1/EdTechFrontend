import { footerLinks } from '../../../../constants/footer';

const FooterLinksDesktop = () => {
  return (
    <div className='bg-[#1c1d1f] border-t border-[#d1d7dc] text-[#fff] pt-6 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-4 gap-8 pb-7'>
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className='text-fluid-heading text-base my-4'>
              {section.title}
            </h3>
            <ul className='space-y-0.5'>
              {section.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-fluid-body2 hover:underline pb-1'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinksDesktop;
