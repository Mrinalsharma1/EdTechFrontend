
import { CiGlobe } from "react-icons/ci";

const FooterMobilelastSection = () => {
    return (
        <div className="bg-[#1c1d1f] border-t border-[#d1d7dc] px-6">
            <div className="flex flex-col py-6 gap-y-9.5">

            <div className="flex  justify-start items-center text-[#fff] text-fluid-body3">
                <CiGlobe className="w-5 h-5 text-bold font-weight-500 "/>
                <span className="ml-1">English</span>

            </div>
            <div>
                <ul className="flex flex-col space-y-2 text-fluid-body2">
                    <li>
                        <button
                            type="button"
                            className="text-white text-sm hover:underline"
                            data-purpose="footer.links.cookie_preferences"
                        >
                            Cookie settings
                        </button>
                    </li>
                </ul>
            </div>

            <div className="flex justify-start space-x-4 items-center">
                <a href="/" className="flex ">
                    <img
                        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                        alt="Udemy"
                        width={91}
                        height={34}
                        loading="eager"
                    />
                </a>
                <div className="text-white text-fluid-body2 pt-2">© 2025 Udemy, Inc.</div>


            </div>

            </div>

            
        </div>
    );
};

export default FooterMobilelastSection;
