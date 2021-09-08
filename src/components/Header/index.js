import logo from "./../../assets/react.svg";
import adrianzamora from "./../../assets/adrianzamora.jpg";

export default function Header() {

    return (
      <nav className="bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
                <a href="#"  rel="noopener noreferrer">
                    <img className="lg:block h-4 w-auto stroke-2" src={logo} alt="logo-react" />
                    
                </a>
            </div>
            <div className="flex items-center">
              <div className="md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                <div className="ml-3 relative">
                    <a href="http://soyadrianzamora.com/" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 w-8 rounded-full" src={adrianzamora} alt="" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}
