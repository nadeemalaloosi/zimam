<script setup>
defineProps({
    title: String,
    subtitle: String
})
</script>

<template>
    <main class="w-full max-w-5xl px-4 mt-8">

        <div class="flex justify-between items-center mb-6">

            <div>
                <h2 class="text-2xl font-bold text-gray-800">{{ title }}</h2>
                <p class="text-sm text-gray-500 mt-1">{{ subtitle }}</p>
            </div>
            <slot></slot>


        </div>
    </main>
</template>