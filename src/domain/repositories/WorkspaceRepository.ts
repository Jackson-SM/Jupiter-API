import { Workspace } from "../entities/Workspaces/Workspace";

export interface WorkspaceRepository {
  create(workspace: Workspace): Promise<void>;
  findByid(id: string): Promise<Workspace | null>;
}