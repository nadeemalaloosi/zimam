<script setup>
import Basebutton from './Basebutton.vue';
defineProps({
    productName: String,
    productPrice: Number
})
const emit = defineEmits(['update:productName', 'update:productPrice', 'sendData'])

</script>
<!-- @input="emit('update:firstname', $event.target.value)" -->
<template>
    <form class="flex flex-col" action="">
        <div class="mb-3">
            <label class=" w-1/5 font-bold" for="productname">اسم السلعة: </label>
            <input type="text" name="productname" id="productname" :value="productName"
                @input.prevent="emit('update:productName', $event.target.value)"
                class="mr-2 p-2 rounded focus:bg-gray-100 border w-4/5" placeholder="اسم السلعة...">
        </div>
        <div class="mb-3">
            <label class=" w-1/5 font-bold" for="productPrice">سعر السلعة: </label>
            <input type="text" name="productname" id="productname" :value="productPrice"
                @input.prevent="emit('update:productPrice', $event.target.value)"
                class="mr-2 p-2 rounded focus:bg-gray-100 border w-4/5" placeholder="سعر السلعة...">
        </div>

        <div class=" place-items-end ml-10">
            <Basebutton @click="emit('sendData')">
                <template #svg-img>
                    <img src="@/assets/svg/addProduct.svg" alt="">
                </template>
                <template #default>اضافة سلعة</template>
            </Basebutton>
        </div>

    </form>
</template>