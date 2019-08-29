<template>
    <b-container class="mt-3">
        <b-row>
            <b-col>
            </b-col>
            <b-col cols="8">
                <b-card class="mt-2" border-variant="secondary" >
                    <h4 slot="header"><center>Pacific Coast 2014!!!</center></h4>
                    <b-card-text>
                        <b>"I had biked from Seattle to Florence, OR during my crazy summer of 2013, and I decided that it was time to go back and finish the rest of the Pacific Coast."</b>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col>
            </b-col>
        </b-row>

        <postList inputFile='/pacificCoast-2014.json'></postList>
        
    </b-container>
</template>

<script>
import postList from './postList'

export default {
    components: {
        postList
    }
    
}
</script>

<style>

</style>
