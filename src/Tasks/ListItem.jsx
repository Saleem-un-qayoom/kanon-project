import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Badges from '../components/Badges';
import ThreeDots from '../components/ThreeDots';
import ImageStack from '../components/ImageStack';
import messageIcon from '../assets/svg/messages-icon.svg';
import folderIcon from '../assets/svg/folder-icon.svg';

const ListItem = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index} type="task">
      {(provided, snapshot) => (
        <div
          className={`rounded-[1.6rem] bg-white p-[2rem] ${'mb-[2rem]'}`}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
        >
          <div className="flex items-center justify-between">
            <Badges type={task.priority} />
            <ThreeDots />
          </div>
          <h1 className="my-[0.6rem] text-[1.8rem] font-semibold leading-[2.2rem] text-[#0D062D]">
            {task.heading}
          </h1>
          {(task.image && (
            <img
              src={task.image}
              className="mb-[1rem] inline-block w-full object-cover"
            />
          )) ||
            null}

          <p className="text-[1.2rem] text-[#787486]">{task.para}</p>
          <div className="mt-[3rem] flex items-center justify-between sm:flex-col sm:items-start 1100px:flex-row">
            <ImageStack
              direction="left"
              width={24}
              height={24}
              images={task.peoples || []}
            />
            <div className="flex items-center text-[1.2rem] sm:mt-2">
              <div className="mr-[1rem] flex items-center">
                <img src={messageIcon} className="h-[1.4rem] w-[1.4rem]" />
                <p className="ml-[0.5rem]">{task.comments} comments</p>
              </div>
              <div className="flex items-center">
                <img src={folderIcon} className="h-[1.4rem] w-[1.4rem]" />
                <p className="ml-[0.5rem]">{task.files} files</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
