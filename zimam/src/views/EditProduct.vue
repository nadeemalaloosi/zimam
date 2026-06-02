<script setup>
import Pagesheader from '@/components/pagesheader.vue';
import AddProductForm from '@/components/AddProductForm.vue';
import { useProductStore } from '@/stores/useProductStore';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute()
const router = useRouter(); // لتوجيه المستخدم بعد الحفظ
const productId = route.params.id;
const useProduct = useProductStore()
let productName = ref('')
let productPrice = ref()
onMounted(async () => {
    await useProduct.fetchSingleProduct(productId);
    productName.value = useProduct.productNameById
    productPrice.value = useProduct.productPriceById
    console.log(productPrice.value)
})
async function update() {

    await useProduct.updateSingleProduct(productId, { "name": productName.value, "price": productPrice.value })
    router.push('/products');
}


</script>


<template>
    <Pagesheader />
    <div>
        <AddProductForm @sendData="update" v-model:productName="productName" v-model:productPrice="productPrice" />
    </div>
</template>