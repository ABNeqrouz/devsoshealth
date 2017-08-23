<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4>Ajout d'un nouveau patient</h4>
            </v-flex>
        </v-layout>
        <br>
        <v-layout row>
            <v-flex xs12>
                <form>
                    <v-layout row wrap>
                        <v-flex xs4>
                            <v-text-field label="Nom" v-model="Nom" required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4>
                            <v-text-field name="prenom" label="Prénom" id="prenom" v-model="Prenom" required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm3 offset-sm2>
                            <v-text-field name="dateN" label="Date de naissance" id="dateN" v-model="dateNaissance"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm3 offset-sm2>
                            <v-radio v-model="Sexe" value="Féminin" label="Féminin" color="red" hide-details></v-radio>
                            <v-radio v-model="Sexe" value="Masculin" label="Masculin" color="blue" hide-details></v-radio>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm3 offset-sm2>
                            <v-text-field name="cni" label="C.N.I" id="cni" v-model="CNI" required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm3 offset-sm2>
                            <v-text-field name="tel" label="Télephone" id="tel" v-model="Telephone"/>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm3 offset-sm2>
                            <v-text-field name="adresse" label="Adresse" id="adresse" multi-line v-model="Adress"/>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm3 offset-sm2>
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
                            <v-btn class="info" v-on:click.prevent="post" :disabled="!formIsValid">
                                Valider
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
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
                states:['Célibataire', 'Marié', 'Veuf', 'Séparé', 'Divorcé']
                }
             },
        computed: {
            formIsValid (){
                return this.Nom !== '' &&
                       this.Prenom !== '' &&
                       this.Sexe !== '' &&
                       this.Telephone !== ''
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
            }
        }
    }
</script>