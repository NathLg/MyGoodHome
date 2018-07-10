<template>
    <div class="AdminHome">
        <Header/>
        <b-card id="historicOpening">
            <HistoricOpening/>
        </b-card>
  </div>
</template>
<script>
import Header from './Header'
import HistoricOpening from './HistoricOpening'
export default {
    name: 'AdminHome',
    components: {Header, HistoricOpening},

    data (){
        return {
            brand: 'My Good Home',
            ShowMenu: false
        }
    }
}
</script>

<style lang="scss" scoped>
#historicOpening{
    width: 40em;
    margin: 4.5em 2em;
}
</style>
