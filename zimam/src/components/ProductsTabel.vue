<script setup>
defineProps({
    products: Object
})
</script>

<template>
    <div class="grid place-items-center mt-20">
        <table v-if="products.length > 0" class="w-4/5 text-right">

            <thead class="border-b border-gray-200 text-gray-500">
                <tr>
                    <th class="py-4 px-2">#</th>
                    <th class="py-4 px-2">السلعة</th>
                    <th class="py-4 px-2">السعر</th>
                    <slot newHeaders="headers"></slot>
                    <th class="py-4 px-2 text-center">إعدادات</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(product, index) in products" :key="product.id"
                    class="border-b border-gray-100 hover:bg-gray-50 transition-colors">

                    <td class="py-4 px-2">{{ index + 1 }}</td>
                    <td class="py-4 px-2 font-medium">{{ product.name }}</td>
                    <td class="py-4 px-2 text-blue-600 font-bold">{{ product.price }} دينار</td>
                    <slot newItems="items"></slot>
                    <td class="py-4 px-2">
                        <div class="flex justify-evenly items-center gap-2">
                            <slot name="setting-btn" :productId="product.id"></slot>

                        </div>
                    </td>

                </tr>

            </tbody>
        </table>
        <p v-else class="font-bold text-4xl">لا يوجد سلع</p>
    </div>
</template>