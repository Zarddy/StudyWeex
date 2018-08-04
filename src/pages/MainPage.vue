<!--主页-->
<!--weex-ui：https://alibaba.github.io/weex-ui/#/cn/-->

<template>
    <div class="main-page">

        <!--顶部导航-->
        <wxc-minibar title="标题"
                     background-color="#009ff0"
                     text-color="#FFFFFF"
                     leftButton=""
                     right-text="设置"
                     @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                     @wxcMinibarRightButtonClicked="minibarRightButtonClick">
        </wxc-minibar>
        <!--顶部导航-->

        <!--轮播控件-->
        <wxc-ep-slider :slider-id="sliderId"
                       :card-length='cardLength'
                       :card-s="cardSize"
                       :select-index="2"
                       :auto-play="true"
                       @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">

            <!--自动生成demo-->
            <div v-for="(v,index) in [1,2,3,4,5]"
                 :key="index"
                 :slot="`card${index}_${sliderId}`"
                 :class="['slider',`slider${index}`]">
                <text>这里是第{{index + 1}}个滑块</text>
            </div>
        </wxc-ep-slider>
        <!--轮播控件-->

    </div>
</template>

<script>
    import { WxcMinibar, WxcEpSlider, WxcIcon, WxcButton, Utils } from 'weex-ui';

    export default {
        name: "MainPage",
        components: { WxcMinibar, WxcEpSlider, WxcIcon },
        data() {
            return {
                title: '',
                isShow: false,
                sliderId: 1,
                cardLength: 5,
                cardSize: {
                    width: 400,
                    height: 300,
                    spacing: 0,
                    scale: 0.8
                }
            }
        },
        methods: {
            minibarLeftButtonClick() { // 顶部导航-左边按钮点击事件
            },
            minibarRightButtonClick() { // 顶部导航-右边按钮点击事件
                // TODO 跳转到设置页
                this.$router.push('/settings');
                // this.$router.push({name:'Settings',params:{key:''}})
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
    }

    .slider {
        width: 100%;
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
</style>