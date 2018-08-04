<template>

    <!--切换页-->
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="icon"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">

        <!-- 第一个页面内容-->
        <div class="item-container" :style="contentStyle">
            <section-main></section-main>
        </div>

        <!-- 第二个页面内容-->
        <div class="item-container" :style="contentStyle"><text>特别推荐</text></div>

        <!-- 第三个页面内容-->
        <div class="item-container" :style="contentStyle"><text>消息中心</text></div>

        <!-- 第四个页面内容-->
        <div class="item-container" :style="contentStyle"><text>我的主页</text></div>
    </wxc-tab-bar>
    <!--切换页-->

</template>

<script>
    import { WxcMinibar, WxcEpSlider, WxcButton, WxcPopup, WxcTabBar, Utils } from 'weex-ui';
    import SectionMain from './SectionMain.vue';

    import Config from '../tabbar'

    export default {
        name: "MainPage",
        components: {
            SectionMain,
            WxcMinibar, WxcEpSlider, WxcButton, WxcPopup, WxcTabBar},
        data() {
            return {
                isShow: false,
                sliderId: 1,
                cardLength: 5,
                cardSize: {
                    width: 400,
                    height: 300,
                    spacing: 0,
                    scale: 0.8
                },
                tabTitles: Config.tabTitles,
                tabStyles: Config.tabStyles
            }
        },
        created() {
            const tabPageHeight = Utils.env.getPageHeight();

            // 如果页面没有导航栏，可以用下面这个计算高度的方法
            // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
            const { tabStyles } = this;

            console.log("tabPageHeight . ." + tabPageHeight);
            console.log("tabStyles.height . ." + tabStyles.height);

            this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
        },
        methods: {
            minibarLeftButtonClick() { // 顶部导航-左边按钮点击事件
            },
            minibarRightButtonClick() { // 顶部导航-右边按钮点击事件
            },
            wxcEpSliderCurrentIndexSelected (e) { // slider当前选中项
                const index = e.currentIndex;
            },
            wxcTabBarCurrentTabSelected (e) {
                const index = e.page;
                // console.log(index);
            }
        }
    }
</script>

<style scoped>
    .main-page {
        padding-top: 100px;
    }

    .slider {
        width: 400px;
        height: 300px;
        background-color: #C3413D;
        align-items: center;
        justify-content: center;
    }

    .slider1 {
        background-color: #635147;
    }

    .slider2 {
        background-color: #FFC302;
    }

    .slider3 {
        background-color: #FF9090;
    }

    .slider4 {
        background-color: #546E7A;
    }

    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
        justify-content: center;
    }
</style>