import { defineStore } from "pinia";
import { ref } from "vue";
import { archiveService } from "@/services/archiveService";

export const useArchiveStore = defineStore("ArchiveStore", () => {
  const archivedData = ref([]);
  const currentInvoice = ref(null);

  const fetchArchivedData = async () => {
    try {
      const r = await archiveService.getAll();
      archivedData.value = r.data;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchInvoiceById = async (id) => {
    try {
      const r = await archiveService.getOne(id);

      currentInvoice.value = r.data;

      console.log(" جلب البيان بنجاح:", currentInvoice.value);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب البيان المحدد:", error);
      currentInvoice.value = null;
    }
  };

  const archive = async (data) => {
    try {
      const r = await archiveService.create(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    archivedData,
    currentInvoice,
    fetchArchivedData,
    fetchInvoiceById,
    archive,
  };
});
