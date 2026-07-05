<script setup>
import ProductForm from '@/components/ProductForm.vue';
import { useProductStore } from '@/stores/useProductStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import HeaderInfo from '@/components/HeaderInfo.vue';
import { useValidation } from '@/composables/useValidation';

const useProduct = useProductStore()
const router = useRouter()
const productName = ref('')
const productPrice = ref(null)

const { errorProductName, errorPrice, validateProduct } = useValidation();

const onSubmit = () => {

    const isValid = validateProduct(productName.value, productPrice.value);

    if (isValid) {
        post();
    } else {
        console.log("يوجد خطأ في المدخلات، لن يتم الحفظ.");
    }
};
async function post() {

    await useProduct.addProduct({ "name": productName.value, "price": productPrice.value },)
    router.push('/products')
}

</script>


<template>
    <TheHeader />
    <div class="flex justify-center">
        <HeaderInfo class="justify-center items-center max-w-4xl" title="إضافة سلعة"
            subtitle="إدخال سلعة جديدة الى قائمة السلع" />
    </div>
    <div class="  grid place-items-center">
        <ProductForm v-model:errorProductName="errorProductName" v-model:errorPrice="errorPrice" @sendData="onSubmit"
            buttonName="اضافة السلعة" v-model:productName="productName" v-model:productPrice="productPrice" />
    </div>
</template>