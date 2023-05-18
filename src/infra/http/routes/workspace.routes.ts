import Hapi from "@hapi/hapi";
import {
  createWorkspaceController,
  findWorkspaceByIdController,
  getAllWorkspacecByCretorIdController,
} from "../controllers/Workspace";

const workspacesRoutes = {
  name: "workspaces",
  register: async function (server: Hapi.Server) {
    server.route([
      {
        method: "GET",
        path: "/v1/workspaces/",
        handler: getAllWorkspacecByCretorIdController.handler,
      },
      {
        method: "GET",
        path: "/v1/workspaces/{id}",
        handler: findWorkspaceByIdController.handler,
      },
      {
        method: "POST",
        path: "/v1/workspaces/",
        handler: createWorkspaceController.handler,
      },
    ]);
  },
};

export default workspacesRoutes;
