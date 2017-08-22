<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4 style="color: black">Créez un nouveau patient</h4>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="nom" label="Nom" id="nom" v-model="Nom" required/>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="prenom" label="Prénom" id="prenom" v-model="Prenom" required/>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="dateN" label="Date de naissance" id="dateN" v-model="dateNaissance"/>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-subheader style="color: grey">Sexe</v-subheader>
                            <v-radio v-model="Sexe" value="Féminin" label="Féminin" hide-details></v-radio>
                            <v-radio v-model="Sexe" value="Masculin" label="Masculin" hide-details></v-radio>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="cni" label="C.N.I" id="cni" v-model="CNI" required/>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="tel" label="Télephone" id="tel" v-model="Telephone"/>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="adresse" label="Adresse" id="adresse" multi-line v-model="Adress"/>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-subheader style="color: grey">Etat matrimonial</v-subheader>
                            <v-radio v-model="etatMatrimonial" value="Célibataire" label="Célibataire" hide-details></v-radio>
                            <v-radio v-model="etatMatrimonial" value="Marié" label="Marié" hide-details></v-radio>
                            <v-radio v-model="etatMatrimonial" value="Veuf" label="Veuf" hide-details></v-radio>
                            <v-radio v-model="etatMatrimonial" value="Séparé" label="Séparé" hide-details></v-radio>
                            <v-radio v-model="etatMatrimonial" value="Divorcé" label="Divorcé" hide-details></v-radio>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
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
                etatMatrimonial: ''
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