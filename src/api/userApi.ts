import request from "@/utils/request/index";
export default {
  async login(payload: object) {
    const response: any = await request("/api/user/login", {
      payload,
      payloadIn: "body",
      method: "POST",
    });
    return response.data;
  },
};
