<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    link: { type: [String, Object], default: null },
    text: { type: String, default: '' },
    disabled: { type: Boolean, default: false }
});

const emit = defineEmits(['click']);

const componentTag = computed(() => props.link ? RouterLink : 'button');
</script>

<template>
    <div class="flex flex-col place-items-center">

        <component :is="componentTag" :to="link" :disabled="disabled" @click.stop="emit('click')"
            class="bg-gray-100 hover:bg-yellow-50 cursor-pointer text-2xl font-bold w-15 h-15 p-3 flex items-center justify-center rounded-full leading-none transition-colors">
            <slot></slot>
        </component>

        <p v-if="text" class="mt-2 text-sm font-medium text-center">
            {{ text }}
        </p>

    </div>
</template>