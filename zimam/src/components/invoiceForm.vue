<script setup>
import Basebutton from './Basebutton.vue';
defineProps({
    products: Object,
    buttonName: String
})

</script>
<template>
    <form class="flex flex-col w-full gap-6">

        <div class="flex items-center bg-blue-50/50 p-4 rounded-lg border border-blue-100">
            <label class="w-1/5 font-bold text-blue-900" for="customerName">اسم العميل:</label>
            <input type="text" name="customerName" id="customerName" :value="customerName"
                @input="$emit('update:customerName', $event.target.value)"
                class="p-2 bg-white rounded border border-blue-200 w-4/5 focus:outline-blue-500 transition-colors shadow-sm"
                placeholder="اكتب اسم العميل هنا...">
        </div>

        <hr class="border-gray-100">

        <div class="flex items-center">
            <label class="w-1/5 font-bold text-gray-700" for="productSelect">اسم المنتج:</label>
            <select id="productSelect"
                class="w-4/5 p-2 border border-gray-300 rounded focus:outline-blue-500 bg-white shadow-sm">
                <option value="" disabled selected>-- اختر السلعة --</option>
                <option v-for="product in products" :key="product.id" :value="product.name">
                    {{ product.name }}
                </option>
            </select>
        </div>

        <div class="flex items-center">
            <label class="w-1/5 font-bold text-gray-700" for="productQuantity">الكمية (العدد):</label>
            <input type="number" name="productQuantity" id="productQuantity" :value="productPrice"
                @input.prevent="$emit('update:productQuantity', $event.target.value)"
                class="p-2 border border-gray-300 rounded focus:outline-blue-500 w-4/5 shadow-sm"
                placeholder="أدخل العدد...">
        </div>

        <div class="flex justify-end mt-2">
            <Basebutton @click.prevent="$emit('sendData')">
                <template #svg-img>
                    <img src="@/assets/svg/addProduct.svg" alt="إضافة">
                </template>
                <template #default>{{ buttonName }}</template>
            </Basebutton>
        </div>
    </form>
</template>