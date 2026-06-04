import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useInvoiceStore = defineStore("invoiceStore", () => {
  const Invoice = ref(null);
  let productsList = ref([]);

  function addSelectedProduct(data) {
    console.log("Hallo invoice Data:", data);
    productsList.value.push(data);
  }
  const removeProduct = (productId) => {
    productsList.value = productsList.value.filter(
      (item) => item.id !== productId,
    );
  };
  const grandTotal = computed(() => {
    // reduce تمر على كل منتج، تضرب سعره في كميته، وتراكم الناتج فوق المجموع السابق
    return productsList.value.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0); // الصفر هنا هو نقطة البداية للمجموع
  });

  return {
    Invoice,
    productsList,
    grandTotal,
    removeProduct,
    addSelectedProduct,
  };
});
