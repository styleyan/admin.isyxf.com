<template>
  <div>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"><img src="http://chuangzaoshi.com/assets/images/logo.svg" /></div>
      <div class="layout-nav">
        <MenuItem name="1">
          <Icon type="ios-navigate"></Icon>
          hao.isyxf.com
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad"></Icon>
          www.isyxf.com
        </MenuItem>
      </div>
    </Menu>
    <div class="layout-content-a" :class="{'layout-hide-text': spanLeft < 5}">
      <Row type="flex">
        <Col :span="spanLeft" class="layout-menu-left">
          <Menu active-name="1" theme="dark" class="layout-menu-ul" width="auto">
            <MenuItem name="1">
              <Icon type="ios-navigate" :size="iconSize"></Icon>
              <span class="layout-text">导航列表</span>
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad" :size="iconSize"></Icon>
              <span class="layout-text">友情链接</span>
            </MenuItem>
          </Menu>
        </Col>
        <Col :span="spanRight">
          <div class="layout-header">
            <Button type="text" @click="toggleClick">
              <Icon type="navicon" size="32"></Icon>
            </Button>
          </div>
          <div class="layout-content">
            <div class="layout-content-main">Content</div>
          </div>
          <div class="layout-copy">2016-2017 &copy; Y. Jer</div>
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
      spanLeft: 5,
      spanRight: 19,
    }
  },
  computed: {
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24
    },
  },
  methods: {
    toggleClick() {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
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
    min-height: 200px
    margin: 15px
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
.layout-copy{
  text-align: center
  padding: 10px 0 20px
  color: #9ea7b4
}
</style>

