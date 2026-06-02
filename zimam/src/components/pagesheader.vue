<script setup>
import Basebutton from './Basebutton.vue';
</script>
<template>

    <div class=" flex m-10">
        <div class=" w-54 items-center text-right">
            <RouterLink class="" " to=" /">
                <h1 class="font-bold inline text-2xl mr-2">زِمام</h1>
            </RouterLink>
            <RouterLink to="/">
                <img class="inline w-15" src="@/assets/svg/logo.svg" alt="" srcset="">
            </RouterLink>

        </div>



        <div class=" flex w-4/5 justify-evenly ">

            <Basebutton link="/">
                <template #svg-img>
                    <img src="@/assets/svg/home.svg" alt="" srcset="">
                </template>
                <template #default>
                    الصفحة الرئيسة
                </template>
            </Basebutton>
            <slot></slot>
        </div>




    </div>

</template>