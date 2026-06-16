import { defineStore } from "pinia";
import { ref } from "vue";
import { productsService } from "@/services/porductsService";

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);
  const productNameById = ref("");
  const productPriceById = ref(0);

  const refreshProductlist = async (response) => {
    if (response.status === 201 || response.status === 200) {
      await fetchProducts();
    }
  };

  const fetchProducts = async () => {
    try {
      const r = await productsService.getAll();
      products.value = r.data;
    } catch (error) {
      console.error("حدث خطأ في جلب البيانات", error);
    }
  };

  const addProduct = async (productData) => {
    try {
      const r = await productsService.create(productData);
      refreshProductlist(r);
    } catch (error) {
      console.error("خطأ في الإضافة:", error);
      if (error.r) {
        console.log("السبب:", error.r.data);
      }
    }
  };

  const fetchSingleProduct = async (productId) => {
    try {
      const r = await productsService.getOne(productId);

      if (r.status === 201 || r.status === 200) {
        productNameById.value = r.data.name;
        productPriceById.value = r.data.price;
      }
    } catch (error) {
      console.error("خطأ في جلب بيانات المنتج:", error);
    }
  };

  const updateSingleProduct = async (productId, updatedData) => {
    try {
      const r = await productsService.update(productId, updatedData);

      refreshProductlist(r);
    } catch (error) {
      console.error("خطأ في جلب بيانات المنتج:", error);
    }
  };

  const deleteProductById = async (productId) => {
    try {
      const r = await productsService.delete(productId);
      refreshProductlist(r);
    } catch (error) {
      console.error("خطأ في حذف المنتج:", error);
    }
  };

  return {
    products,
    productNameById,
    productPriceById,
    deleteProductById,
    fetchProducts,
    fetchSingleProduct,
    addProduct,
    updateSingleProduct,
  };
});
