
import { CiGlobe } from "react-icons/ci";

const FooterDesktoplastSection = () => {
    return (
        <div className=" bg-[#1c1d1f] border-t border-[#d1d7dc] px-6">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between py-6">

                {/* left: Logo + Copyright */}
                <div className="flex items-center space-x-6">
                    <a href="/" className="flex items-center">
                        <img
                            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                            alt="Udemy"
                            width={91}
                            height={34}
                            loading="eager"
                        />
                    </a>
                    <div className="text-[#fff] text-fluid-body2 pt-2">© 2025 Udemy, Inc.</div>
                </div>

                {/* Center: Cookie Settings */}
                <div>
                    <ul className="flex space-x-6 text-[#fff] text-fluid-body2">
                        <li>
                            <button
                                type="button"
                                className="hover:underline"
                                data-purpose="footer.links.cookie_preferences"
                            >
                                Cookie settings
                            </button>
                        </li>
                    </ul>
                </div>

                {/* right: Language */}
                <div className="flex items-center text-[#fff] text-fluid-body3">
                    <CiGlobe className="text-lg" />
                    <span className="ml-1">English</span>
                </div>



            </div>
        </div>
    );
};

export default FooterDesktoplastSection;
