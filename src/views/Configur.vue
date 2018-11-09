<template>
    <!-- <s-alert></s-alert> -->
    <div class="full">
        <div class="s_title _index_title">
            {{$t('config.title')}}
        </div>
        <s-box :title="$t('config.boxTitle')" class="main-full config-box">
            <s-scroll slot="main" class="config--div _config-left">
                <div slot="main">
                    <ul class="_config-items">
                        <li v-for="item in 10" :key="item">
                            <div @click="toggle">
                                <img :src="IMGS._dep" alt="">
                                <span>DepartmentA</span>
                                <i class="el-icon-caret-bottom"></i>
                            </div>
                            <ul class="_config-item">
                                <li v-for="item in 10" :key="item">
                                    <span>host</span>
                                    <span>192.136.15.1</span>
                                    <span class="_config-status">{{$t("public.online")}}</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </s-scroll>
            <s-scroll slot="main" class="config--div _config-right">
                <div slot="main">
                    <ul class="_config-list">
                        <li>
                            <div class="_config-list-box">
                                <img :src="IMGS._winfo" alt="">
                                <span>{{$t("config.is_probe")}}</span>
                                {{disable?$t("public.yes"):$t("public.no")}}
                            </div>
                        </li>
                        <li :class="disable?'_config-show':''">
                            <div class="_config-list-box">
                                <img :src="IMGS._u" alt="">
                                <span>{{$t("config.is_u")}}</span>
                                <el-checkbox v-model="disable"></el-checkbox>
                            </div>
                        </li>
                        <li :class="disable?'_config-show':''">
                            <div class="_config-list-box">
                                <img :src="IMGS._cd" alt="">
                                <span>{{$t("config.is_drive")}}</span>
                                <el-checkbox v-model="disable"></el-checkbox>
                            </div>
                        </li>
                        <li :class="disable?'_config-show':''">
                            <div class="_config-list-box">
                                <img :src="IMGS._wifi" alt="">
                                <span>{{$t("config.is_wifi")}}</span>
                                <el-checkbox v-model="disable"></el-checkbox>
                            </div>
                        </li>
                        <li :class="disable?'_config-show':''">
                            <div class="_config-list-box">
                                <img :src="IMGS._delete" alt="">
                                <span>{{$t("config.is_client")}}</span>
                                <el-checkbox v-model="disable"></el-checkbox>
                            </div>
                        </li>
                        <li :class="disable?'_config-show':''">
                            <div class="_config-list-box">
                                <img :src="IMGS._while" alt="">
                                <span>{{$t("config.is_while")}}</span>
                            </div>
                            <div class="_config-list-items">
                                <div v-for="item in 30" :key="item">
                                    <span>
                                        Microsolft Office
                                    </span>
                                    <el-checkbox v-model="disable"></el-checkbox>
                                </div>
                            </div>
                        </li>
                        <li :class="disable?'_config-show':''">
                            <div>
                                <a class="_config-pros">{{$t("config.port")}}</a>
                                <el-input v-model="input" :placeholder="$t('public.please')" style="width:450px" class="_config-inp"></el-input>
                            </div>
                        </li>
                    </ul>
                    <div class="_config-save">
                        <button @click="submit">
                            <img :src="IMGS._save" alt="">
                            {{$t("public.save")}}</button>
                    </div>
                </div>
            </s-scroll>
        </s-box>
    </div>
</template>

<script >
import scroll from "@/components/public/scroll.vue";
import box from "@/components/public/box.vue";
import * as IMGS from "@/assets/config/config.js";
import Lang, { $zh } from "@/lang/public";
export default {
  components: {
    "s-box": box,
    "s-scroll": scroll
  },
  data() {
    return {
      IMGS: IMGS,
      input: "",
      disable: false
    };
  },
  methods: {
    submit() {
      console.log(this._i18n);

      if (this._i18n.locale == "zh") {
        this._i18n.locale = "en";
      } else {
        this._i18n.locale = "zh";
      }
    },
    toggle(e) {}
  }
};
</script>
<style lang="less" scoped>
@width: 325px;
@color-border: #47738b;
._config-show {
  position: relative;
  z-index: 0;
  -moz-user-select: none;
  /*火狐*/
  -webkit-user-select: none;
  /*webkit浏览器*/
  -ms-user-select: none;
  /*IE10*/
  -khtml-user-select: none;
  /*早期浏览器*/
  user-select: none;
}
._config-show::after {
  position: absolute;
  content: " ";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}
.config-box {
  .config--div {
    position: absolute;
    bottom: 0;
    top: 30px;
  }
  ._config-left {
    position: absolute;
    left: 0;
    width: @width;
    border-right: 2px solid @color-border;
  }
  ._config-right {
    position: absolute;
    left: @width + 2;
    right: 0;
  }
  ._config-inp {
    margin-left: 7px;
  }
}

._config-items {
  span,
  li {
    color: #fff;
  }
  > li {
    padding-top: 15px;
    padding-left: 39px;
    i {
      color: #9b9b9b;
    }
    > div {
      line-height: 45px;
      cursor: pointer;
      img {
        height: 26px;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
  ._config-item {
    > li {
      padding-left: 49px;
      cursor: pointer;
      font-size: 14px;
      line-height: 32px;
      transition: all 0.2s;
      span:first-child {
        display: inline-block;
        width: 45px;
      }
      span._config-status {
        font-size: 12px;
        background: #637379;
        padding: 0 3px;
        border-radius: 2px;
      }
    }

    li:hover,
    li.active {
      span {
        color: #e49f36;
      }
    }
  }
}
._config-list {
  > li {
    position: relative;
    padding: 15px 45px;
    border: 1px solid #20416a;
    font-weight: 100;
    ._config-list-box {
      line-height: 34px;
      padding-left: 45px;
      span {
        display: inline-block;
        width: 278px;
      }
    }
    ._config-pros {
      display: inline-block;
      width: 35px;
      color: #3b89bf;
    }
    img {
      vertical-align: middle;
      max-height: 34px;
      max-width: 34px;
      margin-right: 13px;
      position: absolute;
      left: 57px;
      top: 17px;
      transform: translate(-50%, 0);
    }
  }
  ._config-list-items {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 47px;
    padding-top: 20px;
    > div {
      flex: 33.33%;
      border-top: 1px solid #1c222d;
      font-size: 14px;
      line-height: 44px;
      span {
        display: inline-block;
        width: 228px;
      }
    }
  }
}
._config-save {
  height: 95px;
  line-height: 95px;
  position: relative;
  img {
    vertical-align: middle;
    margin-right: 5px;
  }
  button {
    cursor: pointer;
    font-size: 16px;
    height: 49px;
    border: 1px solid #87d8fb;
    color: #87d8fb;
    background: #06476d;
    border-radius: 5px;
    width: 123px;
    font-weight: bold;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
<style lang="less">
._config-inp {
  input {
    background-color: #010710;
  }
}
</style>