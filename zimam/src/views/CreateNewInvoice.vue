<script setup>
import Basebutton from '@/components/Basebutton.vue';
import InvoiceForm from '@/components/invoiceForm.vue';
import pagesheader from '@/components/pagesheader.vue';
import ProductsTabel from '@/components/ProductsTabel.vue';

import { useProductStore } from '@/stores/useProductStore';
import { ref, onMounted } from 'vue'
let customerName = ref('');
let addedProducts = ref([])


let products = useProductStore();
onMounted(() => {
    products.fetchProducts()

})
</script>

<template>
    <pagesheader> </pagesheader>
    <div class="grid place-items-center mt-10 mb-20 px-4">

        <div class="flex flex-col w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg border border-gray-100 gap-8">

            <div>
                <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">إنشاء بيان جديد</h2>
                <InvoiceForm :products="products.products" buttonName="إضافة إلى المشتريات" />
            </div>

            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <ProductsTabel class="w-full bg-white rounded shadow-sm" :products="products.products">
                    <template #Headers>
                        <th class="py-3 px-2">الكمية</th>
                    </template>
                    <template #items>
                        <td class="py-3 px-2 font-bold text-blue-600">0</td>
                    </template>
                    <template #setting-btn>
                        <Basebutton>
                            <template #svg-img>
                                <img src="@/assets/svg/edit.svg" alt="حذف">
                            </template>
                        </Basebutton>
                        <Basebutton>
                            <template #svg-img>
                                <img src="@/assets/svg/delete-btn.svg" alt="حذف">
                            </template>
                        </Basebutton>
                    </template>
                </ProductsTabel>
            </div>

            <div class="flex justify-between items-center border-t border-gray-200 pt-6">
                <div class="text-xl">
                    <span class="font-bold text-gray-700">المجموع الكلي: </span>
                    <span class="font-bold text-green-600 text-2xl px-2">0 دينار</span>
                </div>

                <Basebutton>
                    <template #svg-img>
                        <img src="@/assets/svg/add.svg" alt="اعتماد">
                    </template>
                    <template #default>
                        اعتماد وإنشاء الفاتورة
                    </template>
                </Basebutton>
            </div>

        </div>
    </div>
</template>