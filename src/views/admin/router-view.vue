<template>
  <div class="layout">
    <Row class="top-menu">
      <Col span="12">
        <div class="layout-logo"><img src="http://chuangzaoshi.com/assets/images/logo.svg" /></div>
      </Col>
      <Col span="12" class="col-right">
        {{userName}}<span @click="logoutHandle"><Icon class="my-icon-log-out" type="log-out"></Icon></span>
      </Col>
    </Row>
    <div class="layout-content-a" :class="{'layout-hide-text': spanLeft < 3}">
      <Row type="flex">
        <Col :span="spanLeft" class="layout-menu-left">
          <Menu theme="dark" @on-select="menuItemHandle" :active-name="activeRouteName" :open-names="openNames" accordion  class="layout-menu-ul" width="auto">
            <Submenu name="article">
              <template slot="title">
                  <Icon type="ios-paper"></Icon>博客管理
              </template>
              <MenuItem name="article-edit">新增文章</MenuItem>
              <MenuItem name="article-list">文章列表</MenuItem>
              <MenuItem name="article-series">专题编辑</MenuItem>
              <MenuItem name="article-links">增加友链</MenuItem>
            </Submenu>
            <Submenu name="hao">
              <template slot="title">
                <Icon type="paper-airplane"></Icon>导航管理
              </template>
              <MenuItem name="hao-edit">编辑导航</MenuItem>
            </Submenu>
          </Menu>
        </Col>
        <Col :span="spanRight">
          <div class="layout-header">
            <Button type="text" @click="toggleClick">
              <Icon type="navicon" size="32"></Icon>
            </Button>
          </div>
          <div class="layout-content">
            <router-view></router-view>
          </div>
          <div class="layout-copy">2016-2017 &copy; {{userName}}</div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      userName: 'Y.Jer',
      spanLeft: 3,
      spanRight: 21,
      activeRouteName: '',
      openNames: [],
    }
  },
  computed: {
    iconSize() {
      return this.spanLeft === 3 ? 14 : 24
    },
  },
  methods: {
    menuItemHandle(MenuItem) {
      this.$router.push({name: MenuItem})
    },
    modalHandle() {
      this.modalStatus = true
    },
    toggleClick() {
      if (this.spanLeft === 3) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 3
        this.spanRight = 21
      }
    },
    logoutHandle() {
      this.$ajax.adminLogout().then(() => {
        this.$router.push({name: 'login'})
      }).catch((err) => {
        this.$Message.error(`[${err.code}] : ${err.errorMsg}`)
      })
    },
  },
  created() {
    this.activeRouteName = this.$route.name
    this.openNames = [this.activeRouteName.split('-')[0]]
  },
}
</script>
<style lang="stylus">
.layout-logo{
  width: 100px
  height: 30px
  border-radius: 3px
  float: left
  position: relative
  top: 15px
  left: 20px

  img {
    margin-top: -6px
  }
}
.top-menu{
  background: #495060
  height: 60px
  .col-right {
    text-align : right
    color: #fff
    line-height: 56px
    font-size: 16px
  }
  .my-icon-log-out{
    margin: 0 30px 0 20px
    color: #fff
    font-size: 18px
    cursor: pointer
    vertical-align: middle
  }
}
.layout-nav{
  width: 420px
  margin: 0 auto
}
.layout-menu-ul{
  height : 100%
}

// ========================
.layout-breadcrumb{
    padding: 10px 15px 0
}
.layout-content{
    min-width: 1100px
    min-height: 200px
    margin: 30px 0 30px 30px
    padding-right: 30px
    overflow: hidden
    background: #fff
    border-radius: 4px
}
.layout-content-main{
    padding: 10px
}
.layout-copy{
    text-align: center
    padding: 10px 0 20px
    color: #9ea7b4
}

.layout-header{
    height: 60px
    background: #fff
    box-shadow: 0 1px 1px rgba(0,0,0,.1)
}
.layout-logo-left{
    width: 90%
    height: 30px
    background: #5b6270
    border-radius: 3px
    margin: 15px auto
}
.layout-menu-left {
  height : 1000px
}
.layout-ceiling-main a{
    color: #9ba7b5
}
.layout-hide-text .layout-text{
    display: none
}
.ivu-col{
    transition: width .2s ease-in-out
}
.layout-content-a {
  .ivu-col-span-5{
    width: 170px
  }
  .ivu-col-span-2{
    width: 72px
  }
}
// ============end============
.wrap-page{
  margin-top: 16px
  .ivu-page{
    float: right
  }
  .ivu-page-options-sizer {
    margin-right: 0
  }
}
.layout-copy{
  text-align: center
  padding: 10px 0 20px
  color: #9ea7b4
}
</style>
<style lang="stylus">
.wrap-page{
  .ivu-page-options-sizer {
    margin-right: 0
  }
}
</style>
