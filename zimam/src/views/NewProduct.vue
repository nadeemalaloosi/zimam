<script setup>
import ProductForm from '@/components/ProductForm.vue';
import { useProductStore } from '@/stores/useProductStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import TheHeader from '@/components/ TheHeader.vue';
import HeaderInfo from '@/components/HeaderInfo.vue';


let router = useRouter()
const useProduct = useProductStore()
let productName = ref('')
let productPrice = ref(null)
let errorProductName = ref(false)
let errorPrice = ref(false)
function validation() {
    if (productName.value === "" && productPrice.value === null) {
        errorPrice.value = true;
        errorProductName.value = true;

        return
    }
    if (productName.value === "") {
        errorProductName.value = true;
        return
    }
    if (productPrice.value === null) {
        errorPrice.value = true;
        return
    }
    if (productPrice.value <= 0 || typeof (productPrice.value) != "number") {



        console.log((productPrice.value > 0))
        console.log(typeof (productPrice.value))

        console.log(productPrice.value + "    الرجاء ادخال قيمة صحيحة")
        return
    }
    post()

}
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
    <div class="mt-10  grid place-items-center">
        <ProductForm v-model:errorProductName="errorProductName" v-model:errorPrice="errorPrice" @sendData="validation"
            buttonName="اضافة السلعة" v-model:productName="productName" v-model:productPrice="productPrice" />
    </div>
</template>