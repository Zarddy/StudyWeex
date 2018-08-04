<!--设置页-->
<template>
    <div class="settings">

        <!--顶部导航-->
        <wxc-minibar background-color="#009ff0">
            <wxc-icon name="back"></wxc-icon>

            <text style="color: white; font-size: 32px;" slot="middle">设置</text>
        </wxc-minibar>
        <!--顶部导航-->

        <h3>Settings Page</h3>
    </div>
</template>

<script>
    import { WxcMinibar, WxcIcon } from 'weex-ui'

    export default {
        name: "SettingsPage",
        components: { WxcMinibar, WxcIcon },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>