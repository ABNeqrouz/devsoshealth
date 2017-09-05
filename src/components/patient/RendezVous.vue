<template>
    <v-card>
        <v-card-title>
            <b style="color: black">Créez un rendez-vous</b>
            <v-spacer></v-spacer>
            <a style="color: #29b6f6" href="#">{{ patient.Nom }} {{patient.Prenom }}</a>
        </v-card-title>
        <v-layout row wrap>
            <v-flex xs12 sm3 offset-sm3>
                <v-select
                        v-bind:items="types"
                        v-model="type"
                        label="Type"
                        autocomplete
                        prepend-icon="assignment"
                >
                </v-select>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
                <v-menu
                        lazy
                        :close-on-content-click="false"
                        v-model="menu"
                        transition="scale-transition"
                        offset-y
                        :nudge-left="40"
                >
                    <v-text-field
                            slot="activator"
                            label="La date de visit"
                            v-model="dateVisit"
                            prepend-icon="event"
                            readonly
                            required
                    ></v-text-field>
                    <v-date-picker v-model="dateVisit" no-title scrollable actions>
                        <template scope="{ save, cancel }">
                            <v-card-actions>
                                <v-btn flat primary @click.native="cancel()">Annuler</v-btn>
                                <v-btn flat primary @click.native="save()">Enregistrer</v-btn>
                            </v-card-actions>
                        </template>
                    </v-date-picker>
                </v-menu>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
                <v-menu
                        lazy
                        :close-on-content-click="false"
                        v-model="menu2"
                        transition="scale-transition"
                        offset-y
                        :nudge-left="40"
                >
                    <v-text-field
                            slot="activator"
                            label="L'heure de visit"
                            v-model="timeVisit"
                            prepend-icon="access_time"
                            readonly
                    ></v-text-field>
                    <v-time-picker v-model="timeVisit" autosave></v-time-picker>
                </v-menu>
            </v-flex>
            <v-flex xs12 sm3 offset-sm3>
                <v-text-field
                        v-model="medecin"
                        label="Medecin"
                        prepend-icon="assignment_ind"
                >
                </v-text-field>
            </v-flex>
            <v-flex xs12 sm4 offset-sm8>
                <v-btn class="info" @click="post">Confirmer</v-btn>
            </v-flex>
        </v-layout>
    </v-card>
</template>
<script>
    export default{
        data () {
            return {
                dateVisit: null,
                timeVisit:null,
                menu: false,
                menu2: false,
                types:['Consultation'],
                type: '',
                medecin: '',
                patient: {}
            }
        },
        props: ['patientId'],
        methods :{
            post () {
                this.$http.post('http://localhost:8002/postIndividuVisit/' + this.patientId, {
                    Type: this.type,
                    dateVisit: this.dateVisit,
                    timeVisit: this.timeVisit,
                    medecin: this.medecin
                }).then(function (data) {
                    console.log(data);
                });
                this.$router.push('/patients/visits/' + this.patientId)
            }
        },
        created() {
            this.$http.get('http://localhost:8002/getIndividus/' + this.patientId).then(function (data) {
                console.log(data);
                this.patient = data.body

            })
        }

    }
</script>