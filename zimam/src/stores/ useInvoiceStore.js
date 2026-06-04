import { defineStore } from "pinia";
import { ref } from "vue";
export const useInvoiceStore = defineStore("invoiceStore", () => {
  const Invoice = ref([]);
});
