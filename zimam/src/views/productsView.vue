<script setup lang="ts">
import Basebutton from '@/components/Basebutton.vue';
import ProductsTabel from '@/components/ProductsTabel.vue';
import pagesheader from '@/components/pagesheader.vue';
</script>

<template>

    <pagesheader>
        <template #default>
            <Basebutton link="new-product">
                <template #svg-img>
                    <img src="@/assets/svg/addProduct.svg" alt="" srcset="">
                </template>
                <template #default>
                    اضافة سلعة جديدة
                </template>
            </Basebutton>
        </template>
    </pagesheader>

    <ProductsTabel />


</template>