<template>
    <v-card>
        <v-card-title>
            <b style="color: black">Fiche de patient</b>
        </v-card-title>
                <v-flex xs12 sm6 offset-sm2>
                    <h4 style="color: #66bb6a"></h4>
                    <hr>
                <br><br>
                    <v-flex xs12 sm12 offset-sm2>
                        <table>
                            <tr>
                                <th>Nom:</th>
                                <td>
                                    <v-edit-dialog
                                            lazy
                                    > {{ patient.Nom }}
                                        <v-text-field
                                                slot="input"
                                                label="Modifier"
                                                v-model="patient.Nom"
                                                single-line
                                                counter
                                                :rules="[max25chars]"
                                        ></v-text-field>
                                    </v-edit-dialog>
                                </td>
                            </tr>
                            <tr>
                                <th>Prenom:</th><td>{{ patient.Prenom }}</td>
                            </tr>
                            <tr>
                                <th>Date de naissane:</th><td>{{ patient.dateNaissance }}</td>
                            </tr>
                            <tr>
                                <th>Sexe:</th><td>{{ patient.Sexe }}</td>
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
                                <th>Etat matrimonial:</th><td>{{ patient.etatMatrimonial }}</td>
                            </tr>
                        </table>
                    </v-flex>
            </v-flex>
            <v-flex xs12>
                <v-flex offset-sm1>
                    <v-dialog v-model="dialog" persistent>
                        <v-btn fab dark large class="primary" slot="activator">
                            <v-icon dark>edit</v-icon>
                        </v-btn>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Profil de patient</span>
                            </v-card-title>
                            <v-card-text>
                                <v-text-field label="Nom" v-model="patient.Nom" :rules="nomRules"
                                              :counter="10" required></v-text-field>
                                <v-text-field label="Prénom" v-model="patient.Prenom" :rules="prenomRules"
                                              :counter="10" required></v-text-field>

                                <v-text-field v-model="patient.dateNaissance" type="Date"></v-text-field>
                                <v-text-field label="C.N.I" v-model="patient.CNI"></v-text-field>
                                <v-text-field name="adresse" label="Adresse" id="adresse" multi-line v-model="patient.Adress"></v-text-field>
                                <v-radio v-model="patient.Sexe" value="Féminin" label="Féminin" color="red" hide-details></v-radio>
                                <v-radio v-model="patient.Sexe" value="Masculin" label="Masculin" color="blue" hide-details></v-radio>
                                <v-text-field name="tel" label="Télephone" id="tel" v-model="patient.Telephone"></v-text-field>
                                <v-select
                                        v-bind:items="states"
                                        v-model="patient.etatMatrimonial"
                                        label="Etat matrimonial"
                                        autocomplete
                                ></v-select>
                                <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Fermer</v-btn>
                                <v-btn class="blue--text darken-1" flat @click.native="dialog = false" @click.prevent="put">Enregistrer</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-flex>
                <v-flex offset-sm8>
                    <v-btn @click="createRendezVous(patient._id)" class="info">
                        <v-icon left dark>event</v-icon>
                        Rendez-vous
                    </v-btn>
                </v-flex>
            </v-flex>
        <v-flex xs12 sm4 offset-sm2>

        </v-flex>
    </v-card>
</template>
<script>
    export default{
        data () {
            return {
                Nom: '',
                Prenom: '',
                dateNaissance: '',
                Sexe: '',
                CNI: '',
                Telephone: '',
                Adress: '',
                etatMatrimonial: '',
                states:['Célibataire', 'Marié', 'Veuf', 'Séparé', 'Divorcé'],
                valid: false,
                nomRules: [
                    (v) => !!v || 'Le nom est obligatoire',
                    (v) => v && v.length <= 10 || 'Le nom doit être moins de 10 caractères'
                ],
                prenomRules: [
                    (v) => !!v || 'Le prénom est obligatoire',
                    (v) => v && v.length <= 10 || 'Le prénom doit être moins de 10 caractères'
                ],
                dialog: false,
                patient: {}
            }
        },
        props: ['id'],
        methods: {
            createRendezVous (id) {
                this.$router.push('/patients/newvisit/' + id)
            },
            put () {
                this.$http.put('http://localhost:8002/getIndividus/' + this.id, {
                    Nom: this.patient.Nom,
                    Prenom: this.patient.Prenom,
                    dateNaissance: this.patient.dateNaissance,
                    Sexe: this.patient.Sexe,
                    CNI: this.patient.CNI,
                    Telephone: this.patient.Telephone,
                    Adress: this.patient.Adress,
                    etatMatrimonial: this.patient.etatMatrimonial
                }).then(function(data){
                    console.log(data);
                });
            }
        },
        created () {
            this.$http.get('http://localhost:8002/getIndividus/' + this.id).then(function (data) {
                console.log(data);
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