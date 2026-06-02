<script setup>
import { useProductStore } from '@/stores/useProductStore';
import { ref, onMounted } from 'vue'
import Basebutton from './Basebutton.vue';

let products = useProductStore();
// تشغيل دالة الجلب تلقائياً بمجرد تحميل المكون في المتصفح
onMounted(() => {
    products.fetchProducts()

})
</script>

<template>
    <div class=" place-items-center mt-20 grid ">
        <table class=" border-spacing-y-5 border-separate w-4/5 border-collapse ">
            <thead class=" text-right border-b p-2 border-gray-200">
                <tr>
                    <th>#</th>
                    <th>السلعة</th>
                    <th>السعر</th>
                    <th>تعديل</th>

                </tr>
            </thead>
            <tbody>
                <tr class="  " v-for="(product, index) in products.products" :key="product.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td class="flex ">
                        <Basebutton :link="/edit-product/ + product.id">
                            <template #svg-img>
                                <img src="@/assets/svg/edit.svg" alt="">
                            </template>
                        </Basebutton>
                    </td>

                </tr>

            </tbody>
        </table>
    </div>
</template>