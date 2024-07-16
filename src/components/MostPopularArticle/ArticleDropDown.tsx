import React from "react";

type Props = {
  articalsSize: number;
  onClickSetArticalsSize: (size: any) => void;
  popularArticals: any;
};

const ArticalsSizeDropDown = ({
  articalsSize,
  onClickSetArticalsSize,
  popularArticals,
}: Props) => {

  return (
    <div className="w-full flex justify-between items-center mx-auto max-w-7xl px-6 lg:px-8">
      <div>
        {popularArticals?.length} Popular Articles from last {articalsSize}{" "}
        {articalsSize > 1 ? "days" : "day"}
      </div>
      <div className="flex items-center md:w-[30%]">
        <label
          aria-label="days"
          className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Days
        </label>
        <select
          data-testid="days"
          name="day"
          value={articalsSize}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ml-5 w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => onClickSetArticalsSize(e.target.value)}
        >
          <option value={articalsSize}>{articalsSize} selected</option>
          <option data-testid="select-option1" value={1}>Last 1 day</option>
          <option data-testid="select-option7" value={7}>Last 7 days</option>
          <option data-testid="select-option30" value={30}>Last 30 days</option>
        </select>
      </div>
    </div>
  );
};

export default ArticalsSizeDropDown;
