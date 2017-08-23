<template>
    <v-container fluid>
        <v-layout row wrap>
            <br><br>
                <v-flex xs12 sm6 offset-sm2>
                    <h4 style="color: #66bb6a">Fiche de patient</h4>
                    <hr>
                <br><br>
                    <v-flex xs12 sm12 offset-sm2>
                        <table>
                            <tr>
                                <th>Nom:</th><td>{{ patient.Nom }}</td>
                            </tr>
                            <tr>
                                <th>Prenom:</th><td>{{ patient.Prenom }}</td>
                            </tr>
                            <tr>
                                <th>Date de naissane:</th><td>{{ patient.dateNaissance }}</td>
                            </tr>
                            <tr>
                                <th>Sexe:</th><td>{{ patient.Sexe.toString() }}</td>
                            </tr>
                            <tr>
                                <th>C.N.I:</th><td>{{ patient.CNI }}</td>
                            </tr>
                            <tr>
                                <th>Télephone:</th><td>{{ patient.Telephone }}</td>
                            </tr>
                            <tr>
                                <th>Adresse:</th><td>{{ patient.Adress }}</td>
                            </tr>
                            <tr>
                                <th>Etat matrimonial:</th><td>{{ patient.etatMatrimonial.toString() }}</td>
                            </tr>
                        </table>
                    </v-flex>
            </v-flex>
            <v-flex xs12 sm4 offset-sm8>
                <v-btn @click="createRendezVous(patient._id)">Rendez-vous</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default{
        data () {
            return {
                patient: {}
            }
        },
        methods: {
            createRendezVous (id) {
                this.$router.push('/rendezvous/' + id)
            }
        },
        props: ['id'],
        created () {
            this.$http.get('http://localhost:8002/getIndividus/' + this.id).then(function (data) {
                console.log(data)
                this.patient = data.body

            })
        }
    }
</script>

<style>
    th{
        text-align: left;
        padding-right: 20px;
    }
    td{
        padding: 10px;
    }
</style>