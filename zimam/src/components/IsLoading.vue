<script setup>
defineProps({ isLoading: Boolean })
</script>

<template>
    <div v-if="isLoading"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/40 backdrop-blur-sm transition-all">
        <div class="flex flex-col items-center gap-4 bg-white px-10 py-8 rounded-2xl shadow-2xl">

            <svg class="w-12 h-12 text-gray-900 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>

            <div class="text-center mt-2">
                <h3 class="text-lg font-bold text-gray-800">جاري معالجة البيانات...</h3>
                <p class="text-sm text-gray-500 mt-1">الرجاء الانتظار لحظات</p>
            </div>

        </div>
    </div>
</template>