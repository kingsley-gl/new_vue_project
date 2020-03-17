<template>
  <el-menu>
    <el-menu-item index="1">菜单1</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'DashMenu',
  data() {
    return {
      menu: {
        title: 'Home',
        icon: 'home'
      }
    }
  }
}
</script>

<style scoped>

</style>
