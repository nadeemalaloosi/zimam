import { defineStore } from "pinia";
import { ref } from "vue";
export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);

  const productNameById = ref("");
  const productPriceById = ref(0);

  const fetchProducts = async () => {
    try {
      let r = await fetch("http://localhost:3000/products");

      products.value = await r.json();
    } catch (error) {
      console.error("حدث خطأ في جلب البيانات", error);
    }
  };
  const addProduct = async (newProduct) => {
    try {
      const r = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        await fetchProducts();
      }
    } catch (error) {
      console.error("خطأ في الإضافة:", error);
    }
  };

  const fetchSingleProduct = async (productId) => {
    try {
      // لاحظ كيف أضفنا الـ ID في نهاية الرابط!
      const response = await fetch(
        `http://localhost:3000/products/${productId}`,
      );

      if (response.ok) {
        const data = await response.json();
        // تعبئة الحقول بالبيانات القادمة من السيرفر لكي يراها المستخدم ويعدلها
        productNameById.value = data.name;
        productPriceById.value = data.price;
      }
    } catch (error) {
      console.error("خطأ في جلب بيانات المنتج:", error);
    }
  };

  const updateSingleProduct = async (productId, updatedData) => {
    try {
      // لاحظ كيف أضفنا الـ ID في نهاية الرابط!
      const response = await fetch(
        `http://localhost:3000/products/${productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        },
      );

      if (response.ok) {
        await fetchProducts();
      }
    } catch (error) {
      console.error("خطأ في جلب بيانات المنتج:", error);
    }
  };
  return {
    products,
    productNameById,
    productPriceById,
    fetchProducts,
    fetchSingleProduct,
    addProduct,
    updateSingleProduct,
  };
});
