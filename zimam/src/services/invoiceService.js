import api from "./api";

export const invoiceService = {
  getAll: () => api.get("/invoices"),
  getOne: (id) => api.get(`/invoices/${id}`),
  create: (data) => api.post("/invoices", data),
  delete: (id) => api.delete(`/invoices/${id}`),
};
