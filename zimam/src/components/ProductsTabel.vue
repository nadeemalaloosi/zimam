<script setup>
import { useProductStore } from '@/stores/useProductStore';
import { ref, onMounted } from 'vue'
import Basebutton from './Basebutton.vue';

let products = useProductStore();
// تشغيل دالة الجلب تلقائياً بمجرد تحميل المكون في المتصفح
onMounted(() => {
    products.fetchProducts()

})
function deleteById(id) {
    products.deleteProductById(id)
}
</script>

<template>
    <div class="grid place-items-center mt-20">
        <table v-if="products.products.length > 0" class="w-4/5 text-right">

            <thead class="border-b border-gray-200 text-gray-500">
                <tr>
                    <th class="py-4 px-2">#</th>
                    <th class="py-4 px-2">السلعة</th>
                    <th class="py-4 px-2">السعر</th>
                    <th class="py-4 px-2 text-center">إعدادات</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(product, index) in products.products" :key="product.id"
                    class="border-b border-gray-100 hover:bg-gray-50 transition-colors">

                    <td class="py-4 px-2">{{ index + 1 }}</td>
                    <td class="py-4 px-2 font-medium">{{ product.name }}</td>
                    <td class="py-4 px-2 text-blue-600 font-bold">{{ product.price }} دينار</td>

                    <td class="py-4 px-2">
                        <div class="flex justify-evenly items-center gap-2">
                            <Basebutton :link="/edit-product/ + product.id">
                                <template #svg-img>
                                    <img src="@/assets/svg/edit.svg" alt="">
                                </template>
                            </Basebutton>

                            <Basebutton @click.prevent="deleteById(product.id)">
                                <template #svg-img>
                                    <img src="@/assets/svg/delete-btn.svg" alt="">
                                </template>
                            </Basebutton>
                        </div>
                    </td>

                </tr>

            </tbody>
        </table>
        <p v-else class="font-bold text-4xl">لا يوجد سلع</p>
    </div>
</template>