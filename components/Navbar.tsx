import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 space-x-4">
          {/* <div className="flex items-center">
            <Link className="text-white text-xl font-bold" href="/">
              Logo
            </Link>
          </div> */}
          
            <Link  className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" href="/">
              Home
            </Link>
            <Link className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" href="/about">
              About
            </Link>
            <Link className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" href="/contact">
              Contact
            </Link>
         
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
