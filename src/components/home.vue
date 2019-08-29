<template>
    <b-container class="mt-3">
        <b-row v-if="showHome">
            <b-col>
            </b-col>
            <b-col cols="10">
                <b-card class="mt-2" border-variant="secondary" >
                    <h4 slot="header"><center>Welcome to the Tracker!!</center></h4>
                    <b-card-text>
                        <b>Use the buttons in the header to navigate.</b>
                        <ul>
                            <li><i>About</i> - All about</li>
                        </ul>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            showHome: true,
            items: null,
            loading: false //For the spinner
        }
    },
}
</script>

<style>

</style>
