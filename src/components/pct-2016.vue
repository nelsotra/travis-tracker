<template>
    <b-container class="mt-3">
        <b-row>
            <b-col>
            </b-col>
            <b-col cols="8">
                <b-card class="mt-2" border-variant="secondary" >
                    <h4 slot="header"><center>PCT 2016!!!</center></h4>
                    <b-card-text>
                        <b>PCT!</b>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col>
            </b-col>
        </b-row>

        <postList inputFile='/pct-2016.json' mapId='pct-2016'></postList>
        
    </b-container>
</template>

<script>
import postList from './postList'
//import postMap from './postMap'

export default {
    components: {
        postList
        //postMap
    }
    
}
</script>

<style>

</style>
