<script setup>
import Pagesheader from '@/components/pagesheader.vue';
import AddProductForm from '@/components/AddProductForm.vue';
import { useProductStore } from '@/stores/useProductStore';
import { ref } from 'vue';

const useProduct = useProductStore()
let productName = ref('')
let productPrice = ref()

function post() {
    useProduct.addProduct({ "name": productName.value, "price": productPrice.value },)
}

</script>


<template>
    <Pagesheader />
    <div>
        <AddProductForm @sendData="post" v-model:productName="productName" v-model:productPrice="productPrice" />
    </div>
</template>