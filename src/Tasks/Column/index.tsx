// @ts-ignore
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ListItem from '../ListItem';
import { ColumnType, TaskType } from '../../interfaces';

interface PropType {
  tasks: TaskType[];
  column: ColumnType;
  index: number;
}

const Column = ({ tasks, column, index }: PropType) => {
  let bgStyle = { background: column.color };
  return (
    <Draggable draggableId={column.id} index={index} type="column">
      {provided => (
        <div
          className="rounded-[1.6rem] bg-[#F5F5F5] p-[2rem] sm:mb-[2rem] 900px:m-0 "
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex items-center">
            <div
              className="mr-[2rem] h-[0.8rem] w-[0.8rem] rounded-full"
              style={bgStyle}
            />
            <p className="text-[1.6rem] font-medium text-[#0D062D]">
              {column.title}
            </p>
            <div className="ml-[1rem] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-[#E0E0E0] text-[1.2rem] font-medium text-[#625F6D]">
              {tasks.length}
            </div>
          </div>
          <div className="my-[2rem] h-[0.3rem] rounded-full " style={bgStyle} />
          <Droppable droppableId={column.id} type="task">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.length ? (
                  tasks.map((task, index) => (
                    <ListItem
                      key={task.id}
                      task={task}
                      index={index}
                      length={tasks.length}
                      columnTitle={column.title}
                    />
                  ))
                ) : (
                  <h1 className="text-center text-[2rem]">No Tasks!</h1>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
