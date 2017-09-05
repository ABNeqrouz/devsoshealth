<template>
    <v-card>
        <v-card-title>
            <b style="color: black">Liste des patients</b>
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
                :items="patients"
                v-bind:search="search"
        >
            <template slot="items" scope="props">
                <td  @click="onLoadPatient(props.item._id)" style="cursor: pointer;">{{ props.item.Nom }}</td>
                <td @click="onLoadPatient(props.item._id)" style="cursor: pointer;">{{ props.item.Prenom }}</td>
                <td @click="onLoadPatient(props.item._id)" style="cursor: pointer;">{{ props.item.Sexe.toString() }}</td>
                <td @click="onLoadPatient(props.item._id)" style="cursor: pointer;">{{ props.item.Telephone }}</td>
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
                    { text: 'Nom', value: 'Nom', align: 'left'},
                    { text: 'Prénom', value: 'Prenom', align: 'left'},
                    { text: 'Sexe', value: 'Sexe', align: 'left'},
                    { text: 'Télephone', value: 'Telephone', align: 'left'},
                ],
                patients: []
            }
        },
        methods: {
            onLoadPatient (id){
                this.$router.push('/patients/' + id)
            }
        },
        created() {
            this.$http.get('http://localhost:8002/getIndividus').then(function(data){
                this.patients = data.body;
            });
        }
    }
</script>