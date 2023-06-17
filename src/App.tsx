import './App.scss';
import Layout from './layout';
import editIcon from './assets/svg/edit-icon.svg';
import linkIcon from './assets/svg/link-icon.svg';
import addBlueIcon from './assets/svg/add-blue-icon.svg';
import filterIcon from './assets/svg/filter-icon.svg';
import arrowDownGray from './assets/svg/arrow-down-gray-icon.svg';
import calendarIcon2 from './assets/svg/calendar-icon-2.svg';
import shareIcon from './assets/svg/members-icon.svg';
import messageIcon from './assets/svg/messages-icon.svg';
import folderIcon from './assets/svg/folder-icon.svg';

import avatar1 from './assets/avatars/avatar-1.png';
import avatar2 from './assets/avatars/avatar-2.png';
import avatar3 from './assets/avatars/avatar-3.png';
import avatar4 from './assets/avatars/avatar-4.png';

import { useState } from 'react';
import Badges from './components/Badges';
import ThreeDots from './components/ThreeDots';
import ImageStack from './components/ImageStack';
import DragDrop from './DragDrop';

const friends = [avatar1, avatar2, avatar3, avatar4];

interface TaskType {
  priority: 'low' | 'medium' | 'high';
  peoples?: string[];
  image?: string;
  comments: number;
  files: number;
  heading: string;
  para: string;
}

interface ListType {
  title: string;
  color: string;
  tasks: TaskType[] | [];
}

const list: ListType[] = [
  {
    title: 'To Do',
    color: '#5030E5',
    tasks: [
      {
        priority: 'low',
        peoples: [avatar1, avatar2, avatar3, avatar4],
        comments: 0,
        files: 0,
        heading: 'What is Lorem Ipsum?',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      },
      {
        priority: 'high',
        peoples: [avatar1, avatar2, avatar3, avatar4],
        comments: 30,
        files: 10,
        heading: 'Why do we use it?',
        para: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
      {
        priority: 'low',
        peoples: [avatar1, avatar2, avatar3, avatar4],
        comments: 0,
        files: 0,
        heading: 'Where does it come from?',
        para: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      },
    ],
  },
  {
    title: 'On Progress',
    color: '#FFA500',
    tasks: [
      {
        priority: 'low',
        peoples: [avatar1, avatar2, avatar3, avatar4],
        comments: 0,
        files: 0,
        heading: 'Where does it come from?',
        para: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      },
    ],
  },
  {
    title: 'Done',
    color: '#8BC48A',
    tasks: [],
  },
];

interface StateType {
  heading: string;
  headingEditMode: boolean;
}
const initialState: StateType = {
  heading: 'Mobile App',
  headingEditMode: false,
};

function App() {
  const [{ heading, headingEditMode }, setState] = useState(initialState);
  return (
    <Layout>
      <>
        {/*  */}
        <div className="mb-[4rem] flex items-center justify-between">
          <div className="flex items-center">
            <h1
              className="text-[4.6rem] font-semibold"
              contentEditable={headingEditMode}
            >
              {heading}
            </h1>
            <img
              src={editIcon}
              className="mx-[1.5rem] cursor-pointer"
              onClick={() =>
                setState(prevData => ({ ...prevData, headingEditMode: true }))
              }
              alt=""
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
        <div className="flex items-center justify-between">
          <div className="flex items-center">
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
                  className={`h-[0.6rem] w-[1.5rem] rounded-sm bg-white ${
                    index !== 1 && 'mb-1'
                  }`}
                ></div>
              ))}
            </div>

            <div className=" flex h-[4rem] w-[4rem] flex-wrap items-center rounded-[0.6rem] px-[0.8rem] py-[1rem]">
              {[...Array(4)].map(() => (
                <div className="mx-1 h-[0.7rem] w-[0.7rem] rounded-full border border-[#787486]"></div>
              ))}
            </div>
          </div>
        </div>

        {/* LIST */}
        {/* <div className="mt-[5rem] grid grid-cols-3 grid-rows-1 items-start gap-[1.5rem]">
          {list.map(({ title, tasks, color }) => {
            let bgStyle = { background: color };
            return (
              <div className="rounded-[1.6rem] bg-[#F5F5F5] p-[2rem]">
                <div className="flex items-center">
                  <div
                    className="mr-[2rem] h-[0.8rem] w-[0.8rem] rounded-full"
                    style={bgStyle}
                  />
                  <p className="text-[1.6rem] font-medium text-[#0D062D]">
                    {title}
                  </p>
                </div>
                <div
                  className="my-[2rem] h-[0.3rem] rounded-full "
                  style={bgStyle}
                />
                {tasks.map(
                  (
                    {
                      peoples,
                      priority,
                      comments,
                      heading,
                      files,
                      para,
                      image,
                    },
                    index,
                  ) => (
                    <div
                      className={`rounded-[1.6rem] bg-white p-[2rem] ${
                        (tasks.length !== index + 1 && 'mb-[2rem]') || ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Badges type={priority} />
                        <ThreeDots />
                      </div>
                      <h1 className="my-[0.6rem] text-[1.8rem] font-semibold leading-[2.2rem] text-[#0D062D]">
                        {heading}
                      </h1>
                      {(image && (
                        <img
                          src={image}
                          className="mb-[1rem] inline-block w-full object-cover"
                          alt=""
                        />
                      )) ||
                        null}

                      <p className="text-[1.2rem] text-[#787486]">{para}</p>
                      <div className="mt-[3rem] flex items-center justify-between">
                        <ImageStack
                          direction="left"
                          width={24}
                          height={24}
                          images={peoples || []}
                        />
                        <div className="flex items-center text-[1.2rem]">
                          <div className="mr-[1rem] flex items-center">
                            <img
                              src={messageIcon}
                              alt=""
                              className="h-[1.4rem] w-[1.4rem]"
                            />
                            <p className="ml-[0.5rem]">{comments} comments</p>
                          </div>
                          <div className="flex items-center">
                            <img
                              src={folderIcon}
                              alt=""
                              className="h-[1.4rem] w-[1.4rem]"
                            />
                            <p className="ml-[0.5rem]">{files} files</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            );
          })}
        </div> */}
        <DragDrop list={list} />
      </>
    </Layout>
  );
}

export default App;
