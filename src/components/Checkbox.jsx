import React from 'react';

const Checkbox = ({ label, checked, onChange, isAllPages }) => {

  const tickSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="xs:w-full xs:h-full w-4 h-4"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const faintTickSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9E9B9B"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="xs:w-full xs:h-full h-4 w-4"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <div className="flex items-center justify-between mx-2">
      <label className={`relative flex items-center cursor-pointer group justify-between w-full ${isAllPages ? 'group-hover:bg-blue-500 group-hover:border-blue-500' : ''}`}>
        <div>{label}</div>
        <div
          className={`xs:w-6 xs:h-6 w-4 h-4 border-2 xs:rounded-lg rounded-[0.3rem] border-Gray-default flex justify-center items-center transition-all duration-200 
            ${checked ? 'bg-blue-500 border-blue-500' : 'bg-white border-Gray-default group-hover:border-Gray-hover'}
            ${isAllPages ? 'group-hover:bg-blue-500' : ''}`}
        >
          <div className={`absolute flex justify-center items-center w-full h-full ${isAllPages ? 'opacity-100 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-90'}`}>
            {isAllPages ? tickSVG : faintTickSVG}
          </div>

          {checked && (
            <div className="absolute flex justify-center items-center w-full h-full">
              {tickSVG}
            </div>
          )}
        </div>
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
