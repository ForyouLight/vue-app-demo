<template>
    <div id="menu">
        <div class="logo">Peony OS</div>
        <a-menu mode="horizontal"
        defaultSelectedKeys="1">
            <a-menu-item key="1" ><router-link to="/">首页</router-link></a-menu-item>
            <a-menu-item key="2">首页</a-menu-item>
            <a-sub-menu title="子菜单">
            <a-menu-item>子菜单项</a-menu-item>
        </a-sub-menu>
        </a-menu>
    </div>
</template>
<script>
export default {
    
}
</script>

<style  scoped>
#menu{
    width: 100%;
    position: fixed;
}
.logo{
    width: 150px;
    height: 49px;
    float: left;
    font-size: 25px;
    text-align: center;
    line-height: 50px;
}
</style>

