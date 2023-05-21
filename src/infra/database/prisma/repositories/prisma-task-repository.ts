import { Task } from "../../../../domain/entities/Task/Task";
import prisma from "../client/prisma";
import Boom from "@hapi/boom";
import { TaskRepository } from "~/domain/repositories/TaskRepository";
import { PrismaTaskMapper } from "../mappers/prisma-task-mapper";

export class PrismaTaskRepository implements TaskRepository {
  async findByid(id: string): Promise<Task | null> {
    try {
      const task = await prisma.task.findUnique({ where: { id: id } });

      if (!task) {
        return null;
      }

      return PrismaTaskMapper.toDomain(task);
    } catch (err: any) {
      if (err.code === "P2023") {
        throw Boom.badRequest("ID Invalid");
      }
      throw Boom.badRequest(err.message);
    }
  }
  async findByProjectId(projectId: string): Promise<Task[]> {
    try {
      const taskByProject = await prisma.task.findMany({
        where: { projectId: projectId },
      });

      return taskByProject.map((task) => PrismaTaskMapper.toDomain(task));
    } catch (err: any) {
      if (err.code === "P2023") {
        throw Boom.badRequest("ID Invalid");
      }
      throw Boom.badRequest(err.message);
    }
  }
  async findByResponsibleId(responsibleId: string): Promise<Task[]> {
    try {
      const taskByResponsibleId = await prisma.tasksResponsible.findMany({
        where: { userId: responsibleId },
        include: {
          task: true,
        },
      });

      return taskByResponsibleId.map((relation) =>
        PrismaTaskMapper.toDomain(relation.task),
      );
    } catch (err: any) {
      if (err.code === "P2023") {
        throw Boom.badRequest("ID Invalid");
      }
      throw Boom.badRequest(err.message);
    }
  }
  async create(task: Task): Promise<void> {
    const rawTask = PrismaTaskMapper.toPrisma(task);

    await prisma.task.create({
      data: rawTask,
    });
  }
}