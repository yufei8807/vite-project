import request from "@/utils/request";
export default {
  async login(params: object) {
    const response: any = await request.post("/api/user/login", params);
    return response.data;
  },
};
