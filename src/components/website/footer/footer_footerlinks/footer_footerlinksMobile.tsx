import { footerLinks } from '../../../../constants/footer';

const FooterLinksMobile = () => {
  return (
    <div className='bg-[#1c1d1f]  border-t border-[#d1d7dc] text-[#fff] pt-6 px-6'>
      {footerLinks.map((section, idx) => (
        <div key={idx}>
          <div className='text-fluid-heading text-base my-4'>
            <span>{section.title}</span>
          </div>

          <ul className='space-y-0.5 pb-8'>
            {section.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className='text-fluid-body2 pb-1 hover:underline'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinksMobile;
