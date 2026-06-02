<script setup>
import Pagesheader from '@/components/pagesheader.vue';
import AddProductForm from '@/components/AddProductForm.vue';
import { useProductStore } from '@/stores/useProductStore';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute()
const productId = route.params.id;
const useProduct = useProductStore()
let productName = ref('')
let productPrice = ref()
onMounted(() => {
    useProduct.fetchSingleProduct(productId);
    productName.value = useProduct.productNameById
    productPrice.value = useProduct.productPriceById
    console.log(productPrice.value)
})
function update() {
    useProduct.updateProduct({ "name": productName.value, "price": productPrice.value },)
}

</script>


<template>
    <Pagesheader />
    <div>
        <AddProductForm @sendData="update" v-model:productName="productName" v-model:productPrice="productPrice" />
    </div>
</template>