<script setup>
import Pagesheader from '@/components/pagesheader.vue';
import AddProductForm from '@/components/AddProductForm.vue';
import { useProductStore } from '@/stores/useProductStore';
import Basebutton from '@/components/Basebutton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let router = useRouter()
const useProduct = useProductStore()
let productName = ref('')
let productPrice = ref()

async function post() {
    if (productName.value === "" || productPrice.value === 0) {
        console.log("HAllO")
        return
    }
    await useProduct.addProduct({ "name": productName.value, "price": productPrice.value },)
    router.push('/products')
}

</script>


<template>
    <Pagesheader>
        <template #default>
            <Basebutton link="products">
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
        <AddProductForm @sendData="post" buttonName="اضافة السلعة" v-model:productName="productName"
            v-model:productPrice="productPrice" />
    </div>
</template>