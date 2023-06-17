import './App.scss';
import Layout from './layout';
import editIcon from './assets/svg/edit-icon.svg';
import linkIcon from './assets/svg/link-icon.svg';
import addBlueIcon from './assets/svg/add-blue-icon.svg';
import filterIcon from './assets/svg/filter-icon.svg';
import arrowDownGray from './assets/svg/arrow-down-gray-icon.svg';
import calendarIcon2 from './assets/svg/calendar-icon-2.svg';
import shareIcon from './assets/svg/members-icon.svg';
import { useRef } from 'react';
import avatar1 from './assets/avatars/avatar-1.png';
import avatar2 from './assets/avatars/avatar-2.png';
import avatar3 from './assets/avatars/avatar-3.png';
import avatar4 from './assets/avatars/avatar-4.png';

import { useState } from 'react';
import ImageStack from './components/ImageStack';
import DragDrop from './Tasks';

const friends = [avatar1, avatar2, avatar3, avatar4];

interface StateType {
  heading: string;
  headingEditMode: boolean;
}
const initialState: StateType = {
  heading: 'Mobile App',
  headingEditMode: false,
};

function App() {
  const inputRef = useRef(null);

  const [{ heading, headingEditMode }, setState] = useState(initialState);
  return (
    <Layout>
      <>
        {/*  */}
        <div className="mb-[4rem] flex items-center justify-between  sm:flex-col 700px:flex-row">
          <div className="flex items-center">
            {headingEditMode ? (
              <input
                ref={inputRef}
                type="text"
                className="max-w-[25rem] text-[4.6rem]"
                value={heading}
                onBlur={() =>
                  setState(prevData => ({
                    ...prevData,
                    headingEditMode: false,
                  }))
                }
                onChange={({ target }) => {
                  setState(prevData => ({
                    ...prevData,
                    heading: target.value,
                  }));
                }}
              />
            ) : (
              <h1 className="text-[4.6rem] font-semibold">{heading}</h1>
            )}
            <img
              src={editIcon}
              className="mx-[1.5rem] cursor-pointer"
              onClick={() => {
                inputRef?.current?.focus();
                setState(prevData => ({ ...prevData, headingEditMode: true }));
              }}
            />
            <img src={linkIcon} className="cursor-pointer" alt="" />
          </div>
          <div className="flex items-center">
            <img src={addBlueIcon} className="cursor-pointer" alt="" />
            <p className="ml-[1rem] cursor-pointer text-[1.6rem] font-medium leading-4 text-[#5030E5]">
              Invite
            </p>
            <div className="ml-[1rem] flex">
              <ImageStack images={friends} />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex items-center justify-between sm:flex-col 650px:flex-row">
          <div className="flex items-center sm:mb-4">
            <div className="flex h-[4rem] w-[12.2rem] items-center justify-between rounded-[0.6rem] border border-[#787486] px-[1rem]">
              <img src={filterIcon} alt="" />
              <p className="text-[1.6rem] font-medium text-[#787486]">Filter</p>
              <img src={arrowDownGray} alt="" />
            </div>
            <div className="ml-[2rem] flex h-[4rem] w-[12.2rem] items-center justify-between rounded-[0.6rem] border border-[#787486] px-[1rem]">
              <img src={calendarIcon2} alt="" />
              <p className="text-[1.6rem] font-medium text-[#787486]">Filter</p>
              <img src={arrowDownGray} alt="" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-[2rem] flex h-[4rem] w-[9.7rem] items-center justify-between rounded-[0.6rem] border border-[#787486] px-[1rem]">
              <img src={shareIcon} className="h-[1.6rem] w-[1.6rem]" alt="" />
              <p className="text-[1.6rem] font-medium text-[#787486]">Share</p>
            </div>

            <div className="mx-[2rem] h-[2.8rem] w-[0.1rem] bg-[#787486]" />

            <div className="mr-[1rem] flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-[0.6rem] bg-[#5030E5]">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className={`h-[0.6rem] w-[1.5rem] rounded-sm bg-white ${
                    index !== 1 && 'mb-1'
                  }`}
                ></div>
              ))}
            </div>

            <div className=" flex h-[4rem] w-[4rem] flex-wrap items-center rounded-[0.6rem] px-[0.8rem] py-[1rem]">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="mx-1 h-[0.7rem] w-[0.7rem] rounded-full border border-[#787486]"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* LIST */}
        <DragDrop />
      </>
    </Layout>
  );
}

export default App;
