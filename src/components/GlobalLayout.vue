<template>
  <el-container>
    <el-aside :width="asideWidth">
      <el-menu
        :collapse="isCollapse"
        default-active="2"
        class="el-menu-vertical"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>博客管理</span>
          </template>
          <el-menu-item index="1-1">新建文章</el-menu-item>
          <el-menu-item index="1-2">文章列表</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="l">
        <div class="el-header-arrow" :class="{rotate180:isCollapse}" @click="arrowHandle">
          <i class="iconfont icon-zhankai"></i>
        </div>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'GlobalLayout',
  data() {
    return {
      isCollapse: false,
      asideWidth: '200px',
    }
  },
  methods: {
    arrowHandle() {
      this.isCollapse = !this.isCollapse
      this.asideWidth = this.asideWidth === '200px' ? '60px' : '200px'
    },
  },
}
</script>
<style lang="stylus">
  .el-header {
    position: relative;
    background-color: #f3f3f3;
    color: #333;
    line-height: 60px;
    text-align: right;
    font-size: 12px;
  }
  .el-header-arrow{
    position: absolute;
    left: 20px;
    top: 0;
    transform rotate(180deg)

    .icon-zhankai{
      cursor pointer
      font-size 20px
    }
  }
  .rotate180{
    transform rotate(0)
  }
  .el-menu-vertical{
    border-right none !important

    .el-submenu{
      .el-menu-item{
        padding 0 0 0 20px !important
        height 40px
        line-height 40px
        font-size 12px
      }
    }
  }
  .el-aside {
    color: #333;
    background-color: #545c64;
  }
</style>
