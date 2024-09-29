// test.ts

import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/user/login",
    method: "post",
    rawResponse(req, res) {
      res.setHeader("Content-Type", "application/json");
      console.log(req);
      res.statusCode = 200;
      res.end(
        JSON.stringify({
          code: 200,
          data: {
            name: "admin",
            token: "admin-token111",
          },
          message: "success",
        }),
      );
    },
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: "vben",
      },
    },
  },
  {
    url: "/api/text",
    method: "post",
    rawResponse: async (req, res) => {
      let reqbody = "";
      await new Promise(resolve => {
        req.on("data", chunk => {
          reqbody += chunk;
        });
        req.on("end", () => resolve(undefined));
      });
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
