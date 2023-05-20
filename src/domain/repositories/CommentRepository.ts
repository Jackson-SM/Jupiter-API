import { Comment } from "../entities/Comment/Comment";

export interface CommentRepository {
  create(task: Comment): Promise<void>;
  findByid(id: string): Promise<Comment | null>;
  findByUserId(userId: string): Promise<Comment | null>;
  findAllCommentsByTaskId(taskId: string): Promise<Comment[]>;
  findAllCommentsByUser(userId: string): Promise<Comment[]>;
}