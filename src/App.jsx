import React, { useState, useEffect } from 'react';
import Checkbox from '../src/components/Checkbox';

function App() {
  const [isAllPagesChecked, setIsAllPagesChecked] = useState(false);
  const [pageChecks, setPageChecks] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  useEffect(() => {
    const allChecked = Object.values(pageChecks).every((checked) => checked);
    setIsAllPagesChecked(allChecked);
  }, [pageChecks]);

  const handleAllPagesChange = () => {
    const newCheckedState = !isAllPagesChecked;
    setIsAllPagesChecked(newCheckedState);
    setPageChecks({
      page1: newCheckedState,
      page2: newCheckedState,
      page3: newCheckedState,
      page4: newCheckedState,
    });
  };

  const handlePageChange = (page) => {
    setPageChecks((prev) => {
      const newPageChecks = { ...prev, [page]: !prev[page] };
      return newPageChecks;
    });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-1/4 h-1/2 shadow-custom p-5 rounded-xl min-w-[200px] xs:min-w-[260px] md:min-w-[340px] lg:min-w-[400px] xl:max-w-[460px]">
        <div className="flex flex-col font-Montserrat xs:text-base text-sm w-full h-full gap-6">
          <Checkbox
            label="All Pages"
            checked={isAllPagesChecked}
            onChange={handleAllPagesChange}
            isAllPages={true}
          />
          <div className="w-full h-[1px] bg-Gray-default"></div>
          <Checkbox
            label="Page 1"
            checked={pageChecks.page1}
            onChange={() => handlePageChange('page1')}
            isAllPages={false}
          />
          <Checkbox
            label="Page 2"
            checked={pageChecks.page2}
            onChange={() => handlePageChange('page2')}
            isAllPages={false}
          />
          <Checkbox
            label="Page 3"
            checked={pageChecks.page3}
            onChange={() => handlePageChange('page3')}
            isAllPages={false}
          />
          <Checkbox
            label="Page 4"
            checked={pageChecks.page4}
            onChange={() => handlePageChange('page4')}
            isAllPages={false}
          />
          <div className="w-full h-[1px] bg-Gray-default"></div>
          <div className="w-full py-3 bg-Btn-default flex items-center justify-center rounded-lg cursor-pointer hover:bg-Btn-hover">
            Done
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
