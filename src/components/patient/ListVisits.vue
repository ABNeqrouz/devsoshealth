<template>
    <v-card>
        <v-card-title>
            <b style="color: black">Liste des Rendez-vous : </b>&nbsp;&nbsp;&nbsp;<i>{{ patient.Nom }} {{ patient.Prenom }}</i>
            <v-spacer></v-spacer>
            <v-text-field
                    append-icon="search"
                    label="Rechercher"
                    single-line
                    hide-details
                    v-model="search"
            ></v-text-field>
        </v-card-title>
        <v-data-table
                v-bind:headers="headers"
                :items="visits"
                v-bind:search="search"
        >
            <template slot="items" scope="props">
                <td>{{ props.item.Type }}</td>
                <td>{{ props.item.dateVisit }}&nbsp;/&nbsp;{{ props.item.timeVisit }}</td>
                <td>{{ props.item.medecin }}</td>
            </template>
            <template slot="pageText" scope="{ pageStart, pageStop }">
                De {{ pageStart }} à {{ pageStop }}
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
    export default{
        data(){
            return {
                search: '',
                pagination: {},
                headers: [
                    { text: 'Type', value: 'Type', align: 'left'},
                    { text: 'Date', value: 'Date', align: 'left'},
                    { text: 'Medecin', value: 'Medecin', align: 'left'}
                ],
                visits: [],
                patient: {}

            }
        },
        props: ['patientId'],
        created() {
            this.$http.get('http://localhost:8002/getIndividuVisit/' + this.patientId).then(function (data) {
            console.log(data);
            this.visits = data.body
        });
            this.$http.get('http://localhost:8002/getIndividus/' + this.patientId).then(function (data) {
                console.log(data);
                this.patient = data.body
            })
        }
    }
</script>