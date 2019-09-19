<template>
  <el-container>
    <el-aside class="collapse-aside-style" :width="asideWidth">
      <img width="130" height="130" :src="logoSvg"/>
      <el-menu
        :collapse="isCollapse"
        :default-openeds="defaultOpeneds"
        class="el-menu-vertical"
        background-color="#495060"
        text-color="#fff"
        :default-active="defaultActive"
        active-text-color="#ffd04b"
        @select="menuSelectHandle"
      >
        <el-submenu index="blog">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>博客管理</span>
          </template>
          <!-- <el-menu-item index="/blog/article/new">新建文章</el-menu-item> -->
          <el-menu-item index="/blog/article">文章列表</el-menu-item>
          <el-menu-item index="/blog/maxim">箴言列表</el-menu-item>
          <el-menu-item index="/blog/books">书单列表</el-menu-item>
          <el-menu-item index="/blog/classify">专题列表</el-menu-item>
          <el-menu-item index="/blog/links">友链链接</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="admin-el-header">
        <div class="el-header-arrow" :class="{rotate180:isCollapse}" @click="arrowHandle">
          <i class="iconfont icon-zhankai"></i>
        </div>
        <span class="user">Y.Jer</span>
        <i class="iconfont icon-out"></i>
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import logoSvg from '@/assets/images/logo.svg'

export default {
  name: 'GlobalLayout',
  data() {
    return {
      logoSvg,
      isCollapse: false,
      asideWidth: '180px',
      defaultOpeneds: ['blog'],
      defaultActive: '',
    }
  },
  methods: {
    /**
     * 展开/收起
     */
    arrowHandle() {
      this.isCollapse = !this.isCollapse
      this.asideWidth = this.asideWidth === '180px' ? '60px' : '180px'
    },

    /**
     * 菜单
     */
    menuSelectHandle(index, indexPath) {
      if (index === this.$route.path) {
        return
      }
      this.$router.push({
        path: index,
      })
    },

  },

  updated() {
    this.defaultActive = this.$route.path
  },
}
</script>
<style lang="stylus">
  .el-header {
    position: relative;
    background-color: #495060;
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
    .el-submenu__title,.el-menu{
      margin-left -30px
    }

    .el-submenu__title{
      background-color: #434a50 !important
    }
    a{
      text-decoration none
      color #fff
    }
  }
  .el-aside {
    color: #333;
    background-color: #495060;
  }
  .admin-el-header{
      color #fff
      .user{
        font-size 15px
        font-weight bold
        margin-right 8px
      }
  }
</style>
