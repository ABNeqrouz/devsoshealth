<template>
    <v-card>
        <v-card-title>
            <b style="color: black;">Ajouter un Nouveau Patient</b>
        </v-card-title>
        <br>
            <v-flex xs12 offset-sm1>
                <form v-model="valid" ref="form">
                    <v-layout row wrap>
                        <v-flex xs4>
                            <v-text-field name="nom" label="Nom" v-model="Nom" :rules="nomRules"
                                          :counter="10" required></v-text-field>
                        </v-flex>
                        <v-flex xs4 offset-sm1>
                            <v-text-field label="Prénom" v-model="Prenom" :rules="prenomRules"
                                          :counter="10" required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row >
                        <v-flex xs4>
                            <v-text-field v-model="dateNaissance" type="Date"></v-text-field>
                        </v-flex>
                        <v-flex xs4 offset-sm1>
                            <v-text-field label="C.N.I" v-model="CNI"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4>
                            <v-text-field name="adresse" label="Adresse" id="adresse" multi-line v-model="Adress"></v-text-field>
                        </v-flex>
                        <v-flex xs4 offset-sm1>
                            <v-radio v-model="Sexe" value="Féminin" label="Féminin" color="red" hide-details></v-radio>
                            <v-radio v-model="Sexe" value="Masculin" label="Masculin" color="blue" hide-details></v-radio>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4>
                            <v-text-field name="tel" label="Télephone" id="tel" v-model="Telephone"></v-text-field>
                        </v-flex>
                        <v-flex xs4 offset-sm1>
                            <v-select
                                    v-bind:items="states"
                                    v-model="etatMatrimonial"
                                    label="Etat matrimonial"
                                    autocomplete
                            ></v-select>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm3 offset-sm8>
                            <v-dialog v-model="dialog" lazy absolute>
                                <v-btn class="info" v-on:click.prevent="post" :disabled="!formIsValid" slot="activator">
                                    Valider
                                </v-btn>
                                <v-card>
                                    <v-card-title>
                                        <div class="headline">Patient ajouté avec succés!</div>
                                    </v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false" @click="clear">OK</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <v-btn v-on:click.prevent="clear" :disabled="!formIsEmpty">Effacer</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
    </v-card>
</template>
<script>
    export default{
        data(){
            return{
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
                dialog: false,
                nomRules: [
                    (v) => !!v || 'Le nom est obligatoire',
                    (v) => v && v.length <= 10 || 'Le nom doit être moins de 10 caractères'
                ],
                prenomRules: [
                    (v) => !!v || 'Le prénom est obligatoire',
                    (v) => v && v.length <= 10 || 'Le prénom doit être moins de 10 caractères'
                ],
                }
             },
        computed: {
            formIsValid (){
                return this.Nom !== '' &&
                       this.Prenom !== ''
            },
            formIsEmpty (){
                return this.Nom !== '' ||
                    this.Prenom !== '' ||
                    this.dateNaissance !== '' ||
                    this.CNI !== '' ||
                    this.Telephone !== '' ||
                    this.Adress !== '' ||
                    this.Sexe !== '' ||
                    this.etatMatrimonial !== ''
            }
        },
        methods:{
            post: function () {
                this.$http.post('http://localhost:8002/postIndividu', {
                    Nom: this.Nom,
                    Prenom: this.Prenom,
                    dateNaissance: this.dateNaissance,
                    Sexe: this.Sexe,
                    CNI: this.CNI,
                    Telephone: this.Telephone,
                    Adress: this.Adress,
                    etatMatrimonial: this.etatMatrimonial
                }).then(function(data){
                    console.log(data);
                });
            },
            clear () {
                this.$refs.form.reset()
            }
        }
    }
</script>