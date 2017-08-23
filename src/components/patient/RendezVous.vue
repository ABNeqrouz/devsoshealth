<template>
    <v-container fluid>
        <br>
        <v-layout>
            <v-flex xs12 sm6 offset-sm2>
                <h4 style="color: #66bb6a">Créez un rendez-vous</h4>
                <hr>
                <br>
                <div>
                    <a style="color: #29b6f6" href="#">{{ patient.Nom }} {{patient.Prenom }}</a>
                </div>
            </v-flex>
        </v-layout>
        <br><br>
        <v-layout row wrap>
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
                <v-select
                v-bind:items="types"
                v-model="type"
                label="Type"
                autocomplete
                prepend-icon="map"
                >
                </v-select>
            </v-flex>
            <v-flex xs12 sm4 offset-sm3>
                <v-text-field
                v-model="observDiag"
                label="Observation diagnostic"
                multiLine
                >
                </v-text-field>
            </v-flex>
            <v-flex xs12 sm4 offset-sm8>
                <v-btn class="info" @click="put">Confirmer</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default{
        data () {
            return {
                dateVisit: null,
                timeVisit:null,
                menu: false,
                menu2: false,
                types:['asthenie', 'reflux gastro-oesophagien'],
                type: '',
                observDiag: '',
                patient: {}
            }
        },
        props: ['patientId'],
        methods :{
            put () {
                this.$http.put('http://localhost:8002/getIndividus/' + patientId, {
                    Type: this.Type,
                    dateVisit: this.dateVisit,
                    observDiag: this.observDiag
                })
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