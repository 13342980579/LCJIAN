<template>
    <div class="menu-page">
        <div class="menu-box">
            <div class="menu-head-first">
                <div class="menu-head-nav ">
                    <span>{{this.label}}</span>
                    <div>
                        <span v-for="(item,index) in headList" @click="jump(index)" :key="index">{{item.step}}</span>
                        <span @click="logout">退出</span>
                    </div>

                </div>
            </div>
            <div class="menu-head">
                <div class="menu-head-body">
                    <h3>
                        老爷爷管理系统
                    </h3>
                    <p>老爷爷管理系统是后台管理系统，主要是站点数据监控</p>
                    <p>{{this.baseUrl}}</p>
                </div>
            </div>
            <div class="menu-body  d_jump" v-for="(item,index) in list" :key="index">
                <div class="menu-body-head">
                    <h1>{{item.title}}</h1>
                    <hr>
                </div>
                <ul>
                    <li @click="handleLi" v-for="item in item.list" :key="item.id">
                        <div class="thumbnail">
                            <img class="pic-404__parent" :src="item.imgUrl" alt="404">
                            <div class="option">
                                <h1>{{item.title}}</h1>
                                <p>{{item.remark}}</p>
                            </div>
                        </div>
                    </li>
                    <!-- <li @click="handleLi">
                        <div class="thumbnail">
                            <img class="pic-404__parent" src="/src/assets/404_images/404.png" alt="404">
                            <div class="option">
                                <h1>办卡</h1>
                                <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici</p>
                            </div>
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    components: {},
    data() {
        return {
            list: [
                {
                    title: "Home",
                    list: [
                        {
                            id: "1",
                            title: "办卡",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        },
                        {
                            id: "2",
                            title: "贷款",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        },
                        {
                            id: "3",
                            title: "贷款",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        },
                        {
                            id: "4",
                            title: "贷款",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        },
                        {
                            id: "5",
                            title: "贷款",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        }
                    ]
                },
                {
                    title: "about",
                    list: [
                        {
                            id: "1",
                            title: "办卡",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        },
                        {
                            id: "2",
                            title: "贷款",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        },
                        {
                            id: "3",
                            title: "贷款",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        },
                        {
                            id: "4",
                            title: "贷款",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        },
                        {
                            id: "5",
                            title: "贷款",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        },
                        {
                            id: "6",
                            title: "贷款",
                            imgUrl: "/src/assets/404_images/404.png",
                            remark:
                                "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, mod in, pharetra ultrici"
                        }
                    ]
                }
            ],
            headList: [{ step: "报表统计" }, { step: "设置" }]
        };
    },
    computed: {
        ...mapState(["label", "baseUrl"]) //mapState通过扩展运算符把vux里的city映射到名字为city的计算属性中（映射到当前vue的this对象上）
        // ...mapGetters(['doubleState'])
    },
    methods: {
        logout() {
            console.log(this.label);
            this.$store.dispatch("LogOut").then(() => {
                location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
            });
        },
        handleLi() {
            //window.location.href="http://10.201.3.81:3034"

            window.open("http://10.201.3.81:3034");
        },
        jump(index) {
            // 用 class="d_jump" 添加锚点
            let jump = document.querySelectorAll(".d_jump");
            let total = jump[index].offsetTop - 50; // 获取需要滚动的距离,50为头部遮挡住的高度
            let distance =
                document.documentElement.scrollTop || document.body.scrollTop;
            // 平滑滚动，时长500ms，每10ms一跳，共50跳
            //     Chrome
            //     document.body.scrollTop = total;
            //     // Firefox
            //     document.documentElement.scrollTop = total;
            //     // Safari
            //     window.pageYOffset = total;
            let step = total / 50;
            if (total > distance) {
                smoothDown();
            } else {
                let newTotal = distance - total;
                step = newTotal / 50;
                smoothUp();
            }
            function smoothDown() {
                if (distance < total) {
                    distance += step;
                    document.body.scrollTop = distance;
                    document.documentElement.scrollTop = distance;
                    setTimeout(smoothDown, 10);
                } else {
                    document.body.scrollTop = total;
                    document.documentElement.scrollTop = total;
                }
            }
            function smoothUp() {
                if (distance > total) {
                    distance -= step;
                    document.body.scrollTop = distance;
                    document.documentElement.scrollTop = distance;
                    setTimeout(smoothUp, 10);
                } else {
                    document.body.scrollTop = total;
                    document.documentElement.scrollTop = total;
                }
            }
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.menu-page {
    background: #e6e6e6;
    width: 100%;
    height: 100%;
    .menu-box {
        background: #e6e6e6;
        .menu-head-first {
            height: 50px;
            width: 100%;
            background: rgb(39, 173, 96);
            line-height: 50px;
            box-shadow: rgba(0, 0, 0, 0.9) 0px 4px 16px 0px;
            z-index: 100000;
            position: fixed;
            top: 0px;
            color: #fff;
            font-weight: 600;
             .menu-head-nav {
                padding: 0 10px;
                color: #fff;
                span {
                    float: left;
                    padding: 0 0 0 10px;
                }
                div {
                    float: right;
                    padding: 0 10px;
                    span {
                        padding: 0 10px;
                        cursor: pointer;
                    }
                }
            }
        }
        .menu-head {
            background: #ffffff;
            width: 100%;
            height: 360px;
            background: url(/src/assets/carousel-bg.jpg) 0 0 repeat fixed;
            position: relative;
            .menu-head-body {
                width: 1200px;
                height: 140px;
                position: absolute;
                right: 0;
                left: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                text-align: center;
            }
            h3 {
                color: #fff;
                font-weight: bold;
                font-size: 32px;
            }
            p {
                color: #fff;
            }
        }
        .menu-body {
            margin: 10px auto;
            width: 1200px;
            .menu-body-head {
                text-align: center;
                h1 {
                    color: #3480d0;
                }
                hr {
                    width: 20%;
                    background-color: #3480d0;
                    height: 1px;
                }
            }
            ul {
                li {
                    list-style: none;
                    display: inline-block;
                    .thumbnail {
                        width: 200px;
                        margin: 10px;
                        border-radius: 5px;
                        background: #ffffff;
                        display: block;
                        height: auto;
                        max-width: 100%;
                        padding: 4px;
                        line-height: 1.4;
                        background-color: #ffffff;
                        border: 1px solid #dddddd;
                        box-shadow: 0 3px 3px 0 #e0e0e0;
                        &:active {
                            padding: 5px;
                            box-shadow: 0px 0px 40px 0px
                                rgba(132, 144, 255, 0.2);
                        }
                        &:focus {
                            padding: 5px;
                            box-shadow: 0px 0px 40px 0px
                                rgba(132, 144, 255, 0.2);
                        }
                        &:hover {
                            padding: 5px;
                            box-shadow: 0px 0px 40px 0px
                                rgba(132, 144, 255, 0.2);
                        }
                        img {
                            display: block;
                            height: auto;
                            max-width: 100%;
                            margin-right: auto;
                            margin-left: auto;
                        }
                        .option {
                            padding: 0px 15px;
                            h1 {
                                font-size: 18px;
                                line-height: 24px;
                                font-family: "source_sans_probold";
                                padding-bottom: 10px;
                                letter-spacing: 2px;
                                color: #3480d0;
                            }
                        }
                        p {
                            word-wrap: break-word;
                            font-size: 14px;
                            line-height: 24px;
                            color: #888888;
                            font-family: "source_sans_proregular";
                        }
                    }
                }
            }
        }
    }
}
</style>

