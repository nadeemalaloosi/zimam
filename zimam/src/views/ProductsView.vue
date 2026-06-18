<script setup lang="ts">
import Basebutton from '@/components/Basebutton.vue';
import ProductsTabel from '@/components/ProductsTabel.vue';
import TheHeader from '@/components/ TheHeader.vue';
import popupModel from '@/components/popupModel.vue';
import { useProductStore } from '@/stores/useProductStore';
import { ref, onMounted, Teleport } from 'vue';
import BaseButton from '@/components/BaseButton.vue';

let products = useProductStore();
let toggleModal = ref(false);
let trackerproductId = ref("");
onMounted(() => {
    products.fetchProducts()

})
function setProductId(id) {
    if (!toggleModal.value) {
        trackerproductId.value = id
        console.log(trackerproductId.value)
    } else {
        trackerproductId.value = ""
        console.log(trackerproductId.value)
    }

}
function toggleDeleteModal(id) {
    setProductId(id)
    toggleModal.value = !toggleModal.value;
}

function deleteById(id: string) {
    toggleModal.value = !toggleModal.value;
    products.deleteProductById(id)
}
</script>

<template>

    <div class="flex flex-col items-center w-full min-h-screen bg-gray-50">

        <TheHeader />
        <main class="w-full max-w-5xl px-4 mt-8">

            <div class="flex justify-between items-center mb-6">

                <div>
                    <h2 class="text-2xl font-bold text-gray-800">قائمة السلع</h2>
                    <p class="text-sm text-gray-500 mt-1">إدارة المنتجات وتحديث أسعارها</p>
                </div>

                <RouterLink to="/new-product"
                    class="flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-green-600 transition-all shadow-sm hover:shadow-md">
                    <img src="@/assets/svg/addProduct.svg" alt="اضافة" class="w-5 h-5">
                    <span>إضافة سلعة جديدة</span>
                </RouterLink>

            </div>
        </main>
        <div class="bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden ">

            <div class="flex w-6xl  items-center  justify-center">
                <ProductsTabel :products="products.products">
                    <template #setting-btn="{ productId }">
                        <div class="flex items-center justify-center gap-2">

                            <RouterLink :to="`/edit-product/${productId}`"
                                class="p-2 rounded-lg text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                title="تعديل السلعة">
                                <img src="@/assets/svg/edit.svg" alt="تعديل"
                                    class="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
                            </RouterLink>

                            <button @click="toggleDeleteModal(productId)"
                                class="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                                title="حذف السلعة">
                                <img src="@/assets/svg/delete-btn.svg" alt="حذف"
                                    class="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
                            </button>

                        </div>
                    </template>
                </ProductsTabel>
            </div>


        </div>
    </div>
    <Teleport to="body">
        <popupModel :showingModal="toggleModal" @closeModal="toggleModal = false">
            <template #header>
                هل تريد فعلا حذف سلعة:
            </template>
            <template #default>
                <p>اسم السلعة المحذوفة</p>
            </template>
            <template #footer>
                <button class="bg-red-500 hover:bg-red-600 rounded-md cursor-pointer p-1 ml-5"
                    @click="deleteById(trackerproductId);">حذف</button>
                <button class="bg-green-500 hover:bg-green-600 rounded-md cursor-pointer p-1 ml-5"
                    @click="toggleModal = false">إلغاء</button>
            </template>
        </popupModel>
    </Teleport>

</template>