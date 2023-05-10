import Hapi, { Request, ResponseToolkit } from "@hapi/hapi";

const usersRoutes = {
  name: "app/users",
  register: async function (server: Hapi.Server) {
    server.route([
      {
        method: "GET",
        path: "/v1/users",
        handler: function (request: Request, h: ResponseToolkit) {
          return "Hello World";
        },
      },
    ]);
  },
};

export default usersRoutes;