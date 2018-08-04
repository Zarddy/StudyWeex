<template>
    <scroller class="scroller">
        <div class="wrapper">

            <wxc-ep-slider :slider-id="autoSliderId"
                           :card-length='cardLength'
                           ref="wxc-ep-slider"
                           :card-s="cardSize"
                           :auto-play="autoPlay"
                           :select-index="selectIndex"
                           @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
                <!--自动生成demo-->
                <wxc-pan-item v-for="(v,index) in [1,2,3,4,5]"
                              :key="index"
                              :ext-id="index"
                              :class="['slider',`slider${index}`]"
                              url="https://h5.m.taobao.com/trip/weex-ui/demo/index.native-min.js"
                              @wxcPanItemPan="wxcPanItemPan"
                              @wxcPanItemClicked="wxcPanItemClicked"
                              :slot="`card${index}_${autoSliderId}`"
                              :accessible="true"
                              :aria-label="`这里是第${index + 1}个滑块`">
                    <text class="text">这里是第{{index + 1}}个滑块</text>
                </wxc-pan-item>
            </wxc-ep-slider>


            <div class="btn" @click="onClick">
                <text class="btn-text">手动切换2滑块</text>
            </div>

            <p>

                window.$docsify = {
                name: 'Weex Ui',
                search: 'auto',
                themeColor: '#F7C242',
                coverpage: 'docs/_coverpage.md',
                homepage: 'README.md',
                loadSidebar: 'docs/_sidebar.md',
                loadNavbar: 'docs/_navbar.md',
                auto2top: true,
                nameLink: {
                '/cn/': '#/cn/',
                '/': '#/'
                },
                alias: {
                '/.*/_navbar.md': 'docs/_navbar.md',
                '/cn/.*/_sidebar.md': 'docs/_sidebar_cn.md',
                '/packages/.*/_sidebar.md': 'docs/_sidebar.md',
                '/cn/': 'README_cn.md',
                '/cn/packages/(.*)/': 'packages/$1/README_cn.md',
                '/cn/with-weex-toolkit': 'docs/with-weex-toolkit_cn.md',
                '/cn/faq': 'docs/faq_cn.md',
                '/cn/who_use': 'docs/who_use.md',
                '/cn/CHANGELOG': 'CHANGELOG_cn.md',
                '/cn/weex-ui-weex-conf-2018': 'docs/weex-ui-weex-conf-2018',
                '/cn/weex-ui-report': 'docs/weex-ui-report'
                },
                basePath: location.port === '3000' ? '/' : '/weex-ui/',
                repo: 'alibaba/weex-ui',
                ga: 'UA-57207999-2',
                plugins: [
            </p>

            <br/>

            <p>

                window.$docsify = {
                name: 'Weex Ui',
                search: 'auto',
                themeColor: '#F7C242',
                coverpage: 'docs/_coverpage.md',
                homepage: 'README.md',
                loadSidebar: 'docs/_sidebar.md',
                loadNavbar: 'docs/_navbar.md',
                auto2top: true,
                nameLink: {
                '/cn/': '#/cn/',
                '/': '#/'
                },
                alias: {
                '/.*/_navbar.md': 'docs/_navbar.md',
                '/cn/.*/_sidebar.md': 'docs/_sidebar_cn.md',
                '/packages/.*/_sidebar.md': 'docs/_sidebar.md',
                '/cn/': 'README_cn.md',
                '/cn/packages/(.*)/': 'packages/$1/README_cn.md',
                '/cn/with-weex-toolkit': 'docs/with-weex-toolkit_cn.md',
                '/cn/faq': 'docs/faq_cn.md',
                '/cn/who_use': 'docs/who_use.md',
                '/cn/CHANGELOG': 'CHANGELOG_cn.md',
                '/cn/weex-ui-weex-conf-2018': 'docs/weex-ui-weex-conf-2018',
                '/cn/weex-ui-report': 'docs/weex-ui-report'
                },
                basePath: location.port === '3000' ? '/' : '/weex-ui/',
                repo: 'alibaba/weex-ui',
                ga: 'UA-57207999-2',
                plugins: [
            </p>

        </div>
    </scroller>
</template>

<script>
    const modal = weex.requireModule('modal');

    import { WxcEpSlider, WxcPanItem, BindEnv } from 'weex-ui';

    export default {
        components: { WxcEpSlider, WxcPanItem },
        data: () => ({
            sliderId: 1,
            autoPlay: true,
            autoSliderId: 2,
            selectIndex: 2,
            cardLength: 5,
            cardSize: {
                width: 400,
                height: 300,
                spacing: 0,
                scale: 0.8
            }
        }),
        methods: {
            wxcEpSliderCurrentIndexSelected (e) {
//        const index = e.currentIndex;
//        console.log(index);
            },
            onClick () {
                // 手动切换到第2张
                this.$refs['wxc-ep-slider'].manualSetPage(1);
            },
            pullMore () {
                modal.toast({
                    message: 'pull more',
                    duration: 1
                })
            },
            wxcPanItemPan (e) {
                if (BindEnv.supportsEBForAndroid()) {
                    this.$refs['wxc-ep-slider'].clearAutoPlay();
                    this.$refs['wxc-ep-slider'].bindExp(e.element)
                }
            },
            wxcPanItemClicked (e) {
                modal.toast({
                    message: e.extId,
                    duration: 1
                })
            },
            onloading(e) {
                ;
            }
        }
    }
</script>

<style scoped>

    .wxc-demo {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
    }
    .scroller {
        flex: 1;
    }
    .wrapper {
        padding-top: 0px;
        background-color: #afddff;
    }
    .text {
        font-size: 32px;
        color: #333333;
    }
    .btn {
        width: 250px;
        height: 80px;
        margin-left: 250px;
        margin-bottom: 40px;
        margin-top: 40px;
        background-color: #635147;
        align-items: center;
        justify-content: center;
    }
    .btn-text {
        font-size: 30px;
        color: #ffffff;
    }
    .slider {
        width: 400px;
        height: 300px;
        background-color: #c3413d;
        align-items: center;
        justify-content: center;
    }
    .slider1 {
        background-color: #635147;
    }
    .slider2 {
        background-color: #ffc302;
    }
    .slider3 {
        background-color: #ff9090;
    }
    .slider4 {
        background-color: #546e7a;
    }
    .more-slider{
        width: 100px;
        height: 300px;
        background-color: #ffc302;
    }
</style>