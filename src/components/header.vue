<template>
    <div>
        <ul>
            <li>
                <router-link to='/home'>主页</router-link>
            </li>
            <li>
                <router-link to='/about'>光辉岁月</router-link>
            </li>
            <li>
                <router-link to='/last'>愕然回首</router-link>
            </li>
        </ul>
    </div>
</template>
<style scoped>
div{

}
div ul {
    width: 1200px;
    margin: 0 auto;
    background: pink;
    display: flex;
    justify-content: flex-start;
    list-style: none;
}
div ul li a{
    padding: 20px;
    display: inline-block;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
}
</style>