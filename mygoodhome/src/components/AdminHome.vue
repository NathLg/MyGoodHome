<template>
    <div class="AdminHome">
        <Header/>
        Admin Home
    </div>
</template>
<script>
import Header from './Header'
export default {
    name: 'AdminHome',
    components: {Header},

    data (){
        return {
            brand: 'My Good Home',
            ShowMenu: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
