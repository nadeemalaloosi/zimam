<script setup>
import Pagesheader from '@/components/pagesheader.vue';
import AddProductForm from '@/components/AddProductForm.vue';
import { useProductStore } from '@/stores/useProductStore';
import Basebutton from '@/components/Basebutton.vue';
import popupModel from '@/components/popupModel.vue';
import { ref, Teleport } from 'vue';
import { useRouter } from 'vue-router';
let router = useRouter()
const useProduct = useProductStore()
let productName = ref('')
let productPrice = ref(null)
let toggleModal = ref(false);

async function post() {
    if (productName.value === "" || productPrice.value === null) {
        toggleModal.value = true
        setTimeout(() => {
           toggleModal.value = false 
        }, 3000);
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
    <Teleport to="body">
    <popupModel :showingModal="toggleModal" @closeModal="toggleModal = false">
      <template #default>
            الرجاء اكمال ملئ الحقول
      </template>
      <template #footer>
          <button class="bg-green-500 hover:bg-green-600 rounded-md cursor-pointer p-1 ml-5" @click="toggleModal = false">إلغاء</button>
    </template>
    </popupModel>
</Teleport>
    <div class="mt-30  grid place-items-center">
        <AddProductForm @sendData="post" buttonName="اضافة السلعة" v-model:productName="productName"
            v-model:productPrice="productPrice" />
    </div>
</template>