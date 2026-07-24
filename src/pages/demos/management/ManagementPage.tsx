import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, ArrowLeft, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import TaskModal from "./TaskModal";

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Diseñar la nueva landing page', description: 'Crear un mockup de alta fidelidad en Figma.', columnId: 'todo', labels: [{id: 'lbl-1', text: 'UI/UX', color: 'bg-blue-500'}], assignees: [{id: 'user-1', name: 'Lucio', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f'}] },
    'task-2': { id: 'task-2', title: 'Desarrollar la API de usuarios', description: 'Endpoints para CRUD de usuarios con autenticación JWT.', columnId: 'todo', labels: [{id: 'lbl-2', text: 'Backend', color: 'bg-red-500'}] },
    'task-3': { id: 'task-3', title: 'Implementar el login con OAuth', description: 'Añadir login con Google y GitHub.', columnId: 'in-progress', labels: [{id: 'lbl-2', text: 'Backend', color: 'bg-red-500'}, {id: 'lbl-3', text: 'Frontend', color: 'bg-green-500'}] },
    'task-4': { id: 'task-4', title: 'Corregir bug en el formulario de contacto', description: 'El endpoint de envío está fallando.', columnId: 'in-progress', labels: [{id: 'lbl-4', text: 'Bug', color: 'bg-yellow-500'}] },
    'task-5': { id: 'task-5', title: 'Desplegar la versión 1.2 en staging', description: 'Actualizar el servidor de staging con la última build.', columnId: 'done', labels: [{id: 'lbl-5', text: 'DevOps', color: 'bg-purple-500'}] },
  },
  columns: {
    'todo': { id: 'todo', title: 'Por Hacer', taskIds: ['task-1', 'task-2'] },
    'in-progress': { id: 'in-progress', title: 'En Progreso', taskIds: ['task-3', 'task-4'] },
    'done': { id: 'done', title: 'Hecho', taskIds: ['task-5'] },
  },
  columnOrder: ['todo', 'in-progress', 'done'],
};

const ManagementPage = () => {
  const [boardData, setBoardData] = useState(initialData);
  const [draggingTask, setDraggingTask] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDragStart = (e, taskId) => {
    setDraggingTask(taskId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, newColumnId) => {
    e.preventDefault();
    if (!draggingTask) return;

    const newBoardData = { ...boardData };
    const task = newBoardData.tasks[draggingTask];
    const oldColumn = newBoardData.columns[task.columnId];
    const newColumn = newBoardData.columns[newColumnId];

    oldColumn.taskIds = oldColumn.taskIds.filter(id => id !== draggingTask);
    newColumn.taskIds.push(draggingTask);
    task.columnId = newColumnId;

    setBoardData(newBoardData);
    setDraggingTask(null);
  };
  
  const handleSaveTask = (updatedTask) => {
    const newBoardData = { ...boardData };
    const oldColumn = newBoardData.columns[newBoardData.tasks[updatedTask.id].columnId];
    const newColumn = newBoardData.columns[updatedTask.columnId];

    if (oldColumn.id !== newColumn.id) {
       oldColumn.taskIds = oldColumn.taskIds.filter(id => id !== updatedTask.id);
       newColumn.taskIds.push(updatedTask.id);
    }
    
    newBoardData.tasks[updatedTask.id] = updatedTask;
    setBoardData(newBoardData);
    setSelectedTask(null);
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Proyecto Titán</h1>
          <Button asChild>
            <Link to="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> Volver al Portafolio</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {boardData.columnOrder.map((columnId) => {
            const column = boardData.columns[columnId];
            const tasks = column.taskIds.map(taskId => boardData.tasks[taskId]);
            return (
              <div
                key={column.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, column.id)}
                className="w-80 bg-gray-200 dark:bg-gray-800 rounded-lg p-4 flex-shrink-0"
              >
                <h2 className="font-bold text-lg mb-4 flex justify-between items-center">
                  {column.title}
                  <Plus size={20} className="cursor-pointer hover:text-primary" />
                </h2>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <Card
                      key={task.id}
                      draggable
                      onClick={() => setSelectedTask(task)}
                      onDragStart={(e) => handleDragStart(e, task.id)}
                      className={`cursor-pointer hover:border-primary ${draggingTask === task.id ? 'opacity-50' : 'opacity-100'}`}
                    >
                      <CardContent className="p-4">
                        <p className="font-semibold mb-2">{task.title}</p>
                         <div className="flex flex-wrap gap-2 mb-4">
                            {task.labels?.map(label => (
                                <Badge key={label.id} className={`${label.color} text-white`}>{label.text}</Badge>
                            ))}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-2">
                                {task.assignees?.map(assignee => (
                                    <Avatar key={assignee.id} className="w-7 h-7 border-2 border-card">
                                        <AvatarImage src={assignee.avatar} />
                                        <AvatarFallback>{assignee.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                            <MoreHorizontal size={18} className="text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="ghost" className="w-full mt-4">Añadir tarea...</Button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      
      <TaskModal 
        task={selectedTask}
        isOpen={!!selectedTask}
        onOpenChange={() => setSelectedTask(null)}
        onSave={handleSaveTask}
        columns={Object.values(boardData.columns)}
      />
    </div>
  );
};

export default ManagementPage;
