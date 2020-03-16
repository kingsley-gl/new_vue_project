<template>
  <el-container>
<!--    <el-header></el-header>-->
    <el-aside>
      <DashMenu></DashMenu>
    </el-aside>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
import DashMenu from './DashMenu'
export default {
  name: 'Layout',
  components: {DashMenu}
}
</script>

<style scoped>

</style>
