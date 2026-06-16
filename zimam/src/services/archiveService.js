import api from "./api";

export const archiveService = {
  getAll: () => api.get("/archive"),
  getOne: (id) => api.get(`/archive/${id}`),
  create: (data) => api.post("/archive", data),
  delete: (id) => api.delete(`/archive/${id}`),
};
