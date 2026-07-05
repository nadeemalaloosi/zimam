import { ref } from "vue";

export function useValidation() {
  const errorProductName = ref(false);
  const errorPrice = ref(false);

  const validateProduct = (name, price) => {
    errorProductName.value = false;
    errorPrice.value = false;

    let isValid = true;

    if (!name || name === "") {
      errorProductName.value = true;
      isValid = false;
    }

    if (price === null || price <= 0 || typeof price !== "number") {
      errorPrice.value = true;
      isValid = false;
    }

    return isValid;
  };
  return {
    errorProductName,
    errorPrice,
    validateProduct,
  };
}
