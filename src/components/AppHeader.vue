<template>
    <header class="header">
        <div class="header__container">
            <div class="header__body">
                <nav class="header__nav nav">
                    <router-link class="nav__link" to="/">First account</router-link>
                    <router-link class="nav__link" to="/second-account">Second account</router-link>
                </nav>
                <button class="header__btn">Log Out</button>
             </div>
        </div>
     </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    background-color: #00B4D8;
    width: 100%;
    box-shadow: 0 0 5px black;
}
.header__container{
    max-width: 1300px;
    padding: 0 10px;
    margin: 0 auto;
}
.header__body{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
}
.nav{
    display: flex;
    align-items: center;
}
.nav>*:not(:last-child){
    margin-right: 20px;
}
.nav__link{
    font-size: 1.5em;
    font-weight: 700;
    color: black;
}
.header__btn{
    padding: 4px;
}
</style>