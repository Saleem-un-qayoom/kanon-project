import Badges from './components/Badges';
import ImageStack from './components/ImageStack';
import ThreeDots from './components/ThreeDots';

import messageIcon from './assets/svg/messages-icon.svg';
import folderIcon from './assets/svg/folder-icon.svg';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

interface PropType {
  list: ListType;
}

function DragDrop({ list }: PropType) {
  return (
    <DragDropContext>
      <Droppable droppableId="board" type="COLUMN" direction="horizontal">
        {provided => (
          <div
            className="mt-[5rem] grid grid-cols-3 grid-rows-1 items-start gap-[1.5rem]"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {list.map(({ title, tasks, color }, index) => {
              let bgStyle = { background: color };

              return (
                <Draggable draggableId={title} index={index}>
                  {provided => (
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
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );

  return (
    <DragDropContext>
      <div className="mt-[5rem] grid grid-cols-3 grid-rows-1 items-start gap-[1.5rem]">
        {list.map(({ title, tasks, color }) => {
          let bgStyle = { background: color };
          return (
            <Droppable droppableId={title}>
              {provided => (
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
                  <div {...provided.droppableProps} ref={provided.innerRef}>
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
                        <Draggable draggableId={heading} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              snapshot={snapshot}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`rounded-[1.6rem] bg-white p-[2rem] ${
                                (tasks.length !== index + 1 && 'mb-[2rem]') ||
                                ''
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

                              <p className="text-[1.2rem] text-[#787486]">
                                {para}
                              </p>
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
                                    <p className="ml-[0.5rem]">
                                      {comments} comments
                                    </p>
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
                          )}
                        </Draggable>
                      ),
                    )}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
}

export default DragDrop;
