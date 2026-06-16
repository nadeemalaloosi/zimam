import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useInvoiceStore = defineStore("invoiceStore", () => {
  const Invoice = ref(null);
  let productsList = ref([]);
  const isLoading = ref(false);
  let customerName = ref("");
  const lastInvoiceNumber = ref(1000);
  const currentInvoice = ref(null);

  const addSelectedProduct = (data) => {
    productsList.value.push(data);
  };
  const removeProduct = (productId) => {
    productsList.value = productsList.value.filter(
      (item) => item.id !== productId,
    );
  };
  const submitInvoiceToServer = async () => {
    isLoading.value = true;
    lastInvoiceNumber.value++;
    const invoiceId = `INV-${lastInvoiceNumber.value}`;
    const finalInvoiceData = {
      id: invoiceId,
      InvoiceNumber: invoiceId,
      archive: false,
      customer: customerName.value,
      items: [...productsList.value],
      total: grandTotal.value,
      date: new Date().toLocaleDateString("ar-EG"),
    };
    currentInvoice.value = finalInvoiceData;
    isLoading.value = false;
    return true;
  };
  const resetData = () => {
    customerName.value = "";
    productsList.value = [];
    currentInvoice.value = null;
  };

  const grandTotal = computed(() => {
    // reduce تمر على كل منتج، تضرب سعره في كميته، وتراكم الناتج فوق المجموع السابق
    return productsList.value.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  });
  return {
    Invoice,
    currentInvoice,
    customerName,
    isLoading,
    productsList,
    grandTotal,
    resetData,
    removeProduct,
    addSelectedProduct,
    submitInvoiceToServer,
  };
});
