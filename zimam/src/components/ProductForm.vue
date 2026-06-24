<script setup>

defineProps({
    errorProductName: {
        type: Boolean,
        default: false
    },
    errorPrice: {
        type: Boolean,
        default: false
    },
    productName: String,
    productPrice: Number,
    buttonName: String

})
const emit = defineEmits(['update:productName', 'update:productPrice', 'sendData'])

</script>
<template>
    <div class="flex justify-center items-center w-full mt-12 px-4">

        <div class="w-full max-w-lg bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

            <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                {{ buttonName === 'تعديل السلعة' ? 'تعديل بيانات السلعة' : 'إضافة بيانات السلعة' }}
            </h2>

            <form @submit.prevent="emit('sendData')" class="flex flex-col gap-5">

                <div class="flex flex-col gap-2">

                    <div v-if="errorProductName"
                        class="flex items-center gap-3 p-3 text-red-700 bg-red-50 border border-red-200 rounded-lg shadow-sm"
                        role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0 text-red-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p class="font-bold text-sm">الرجاء إدخال اسم السلعة.</p>
                    </div>

                    <label class="text-sm font-semibold text-gray-700" for="productName">اسم السلعة</label>
                    <input type="text" name="productName" id="productName" :value="productName"
                        @input="emit('update:productName', $event.target.value)"
                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        placeholder="مثال: علبة بسكويت بالتمر">
                </div>

                <div class="flex flex-col gap-2">

                    <div v-if="errorPrice"
                        class="flex items-center gap-3 p-3 text-red-700 bg-red-50 border border-red-200 rounded-lg shadow-sm"
                        role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0 text-red-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p class="font-bold text-sm">الرجاء إدخال سعر السلعة.</p>
                    </div>

                    <label class="text-sm font-semibold text-gray-700" for="productPrice">سعر السلعة (دينار)</label>
                    <input type="number" name="productPrice" id="productPrice" :value="Number(productPrice)"
                        @input="emit('update:productPrice', Number($event.target.value))"
                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                        placeholder="مثال: 5000">
                </div>

                <hr class="border-gray-100 my-2">

                <button type="submit"
                    class="flex items-center justify-center gap-2 w-full py-3.5 bg-gray-900 text-white rounded-xl font-medium text-lg hover:bg-gray-800 transition-colors shadow-sm">
                    <img v-if="buttonName === 'تعديل السلعة'" src="@/assets/svg/edit.svg" class="w-5 h-5 invert"
                        alt="تعديل">
                    <img v-else src="@/assets/svg/addProduct.svg" class="w-5 h-5 invert" alt="إضافة">
                    <span>{{ buttonName }}</span>
                </button>

            </form>
        </div>
    </div>
</template>