<script setup>
import Pagesheader from '@/components/pagesheader.vue';
import AddProductForm from '@/components/AddProductForm.vue';
import Basebutton from '@/components/Basebutton.vue';
import { useProductStore } from '@/stores/useProductStore';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute()
const router = useRouter(); 
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
    <Pagesheader>
        <template #default>
            <Basebutton link="/products">
                <template #svg-img>
                    <img src="@/assets/svg/products.svg" alt="" srcset="">
                </template>
                <template #default>
                    السلع
                </template>
            </Basebutton>

        </template>
    </Pagesheader>
    <div class="mt-30  grid place-items-center">
        <AddProductForm @sendData="update" v-model:productName="productName" buttonName="تعديل السلعة"
            v-model:productPrice="productPrice" />
    </div>
</template>