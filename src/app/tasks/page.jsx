import AddTask from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { getTask } from "@/lib/tasks";

const TaskPage = async () => {
  const tasks = await getTask();
  return (
    <div className="mt-10 space-y-10">
      <AddTask/>
      <div className="container mx-auto grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
