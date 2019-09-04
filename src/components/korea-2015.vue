<template>
    <b-container class="mt-3">
        <b-row>
            <b-col>
            </b-col>
            <b-col cols="10">
                <b-card class="mt-2" border-variant="secondary" >
                    <h4 slot="header"><center>Korea 2015!!!</center></h4>
                    <b-card-text>
                        Korea
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col>
            </b-col>
        </b-row>

        <postList inputFile='/korea-2015.json' :inputItems="data"></postList>
        
    </b-container>
</template>

<script>
import postList from './postList'
import data from '../../public/json-files/korea-2015.json'

export default {
    data() {
        return {
            data
        }
    },
    components: {
        postList
    }
    
}
</script>

<style>

</style>
