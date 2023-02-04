import React from "react";

const HeaderIcon = ({ Icon, title, activeButton, setActiveButton }) => {
  return (
    <div className="flex flex-col items-center justify-center text-gray-400">
      <Icon
        size={25}
        className={`hover:text-blue-600 cursor-pointer ${
          activeButton === title && "text-blue-600"
        }`}
        onClick={() => setActiveButton(title)}
      />
      <p className="pt-2 hidden md:block text-sm">{title}</p>
    </div>
  );
};

export default HeaderIcon;
