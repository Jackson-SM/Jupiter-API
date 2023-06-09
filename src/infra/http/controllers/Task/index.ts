import { CreateTaskCase } from "~/application/use-cases/tasks/create-task-case";
import { PrismaTaskRepository } from "~/infra/database/prisma/repositories/prisma-task-repository";
import { CreateTaskController } from "./CreateTaskController";
import { AddTaskResponsibleController } from "./AddTaskResponsibleController";
import { AddTaskResponsibleCase } from "~/application/use-cases/tasks/add-task-responsible-case";
import { FindTaskByResponsibleIdController } from "./FindTaskByResponsibleIdController";
import { FindTaskByResponsibleIdCase } from "~/application/use-cases/tasks/find-task-by-responsible-id-case";
import { FindTaskByIdController } from "./FindTaskByIdController";
import { FindTaskByIdCase } from "~/application/use-cases/tasks/find-task-by-id-case";
import { RemoveTaskController } from "./RemoveTaskController";
import { RemoveTaskCase } from "~/application/use-cases/tasks/remove-task-case";
import { DoneTaskController } from "./DoneTaskController";
import { DoneTaskCase } from "~/application/use-cases/tasks/done-task-case";
import { FindTaskByGroupIdController } from "./FindTaskByGroupIdController";
import { FindTaskByGroupIdCase } from "~/application/use-cases/tasks/find-task-by-group-id";
import { EditTaskController } from "./EditTaskController";
import { EditTaskCase } from "~/application/use-cases/tasks/edit-task-case";
import { MoveTaskInGroupController } from "./MoveTaskInGroupController";
import { MoveTaskInGroupCase } from "~/application/use-cases/tasks/move-task-in-group-case";
import { FindAllResponsiblesTaskController } from "./FindAllResponsiblesTaskController";
import { FindAllResponsiblesTaskCase } from "~/application/use-cases/tasks/find-all-responsibles-task-case";
import { RemoveResponsibleCase } from "~/application/use-cases/tasks/remove-responsible-case";
import { RemoveResponsibleController } from "./RemoveResponsibleController";

const prismaTaskRepository = new PrismaTaskRepository();

// Cases
const createTaskCase = new CreateTaskCase(prismaTaskRepository);
const addTaskResponsibleCase = new AddTaskResponsibleCase(prismaTaskRepository);
const findTaskByResponsibleIdCase = new FindTaskByResponsibleIdCase(
  prismaTaskRepository,
);
const findTaskByIdCase = new FindTaskByIdCase(prismaTaskRepository);
const removeTaskCase = new RemoveTaskCase(prismaTaskRepository);
const doneTaskCase = new DoneTaskCase(prismaTaskRepository);
const findTaskByGroupIdCase = new FindTaskByGroupIdCase(prismaTaskRepository);
const editTaskCase = new EditTaskCase(prismaTaskRepository);
const moveTaskInGroupCase = new MoveTaskInGroupCase(prismaTaskRepository);
const findAllResponsiblesTaskCase = new FindAllResponsiblesTaskCase(
  prismaTaskRepository,
);
const removeResponsibleCase = new RemoveResponsibleCase(prismaTaskRepository);

// Controllers
const createTaskController = new CreateTaskController(createTaskCase);
const addTaskResponsibleController = new AddTaskResponsibleController(
  addTaskResponsibleCase,
);
const findTaskByResponsibleIdController = new FindTaskByResponsibleIdController(
  findTaskByResponsibleIdCase,
);
const findTaskByIdController = new FindTaskByIdController(findTaskByIdCase);
const removeTaskController = new RemoveTaskController(removeTaskCase);
const doneTaskController = new DoneTaskController(doneTaskCase);
const findTaskByGroupIdController = new FindTaskByGroupIdController(
  findTaskByGroupIdCase,
);
const editTaskController = new EditTaskController(editTaskCase);
const moveTaskInGroupController = new MoveTaskInGroupController(
  moveTaskInGroupCase,
);
const findAllResponsiblesTaskController = new FindAllResponsiblesTaskController(
  findAllResponsiblesTaskCase,
);
const removeResponsibleController = new RemoveResponsibleController(
  removeResponsibleCase,
);

export {
  createTaskController,
  addTaskResponsibleController,
  findTaskByResponsibleIdController,
  findTaskByIdController,
  removeTaskController,
  doneTaskController,
  findTaskByGroupIdController,
  editTaskController,
  moveTaskInGroupController,
  findAllResponsiblesTaskController,
  removeResponsibleController,
};
