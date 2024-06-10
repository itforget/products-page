import React, { useState } from 'react';
import { ChevronDown, UserCircle } from 'lucide-react';


function Dropdown({label, props, option}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="inline-flex gap-3 text-xl font-extrabold items-center justify-center w-full px-4 py-2 text-gray-700 ">
        <UserCircle />
        {label}
        <ChevronDown />
      </button>
      {isOpen && (
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="py-1">
            <button onClick={props} className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{option}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
