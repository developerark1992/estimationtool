import React from 'react';
import Images from "../assets/image";  // Make sure you import Images correctly

const Header = () => {
  return (
    <div className="flex flex-col flex-col-reverse lg:flex-row lg:px-24 lg:py-7">
      <div className="flex items-center py-5 justify-center lg:py-0 lg:justify-start lg:w-1/3">
        <img src={Images.WebLogo} alt="Logo" />
      </div>

      <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:justify-end space-x-0 bg-white lg:space-x-4 lg:w-2/3">
        <img
          src={Images.NotiCon}
          alt="Notification"
          className="w-12 h-12 object-contain p-2 border border-gray-200 rounded-lg"
        />

        {/* Text and Profile Section */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-right">
            <span className="font-bold text-base text-zinc-900">
              James Anderson
            </span>
            <span className="text-xs text-neutral-500 font-normal">
              James.anderson@gmail.com
            </span>
          </div>

          {/* Profile Image and Chevron */}
          <div className="flex flex-row items-center relative">
            <img
              src={Images.ProfileIcon}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover ml-6"
            />
            <img
              src={Images.DownArrow}
              alt="Down Arrow"
              className="w-4 h-2 rounded-full object-cover ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;