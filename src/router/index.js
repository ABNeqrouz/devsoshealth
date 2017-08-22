import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Patients from '@/components/patient/Patients'
import NouveauPatient from '@/components/patient/NouveauPatient'
import Patient from '@/components/patient/Patient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/patients',
      name: 'Patients',
      component: Patients
    },
      {
        path: '/patients/:id',
          name: 'Patient',
          component: Patient
      },
      {
       path: '/nouveauPatient',
          name: 'newPatient',
          component: NouveauPatient
      }
  ],
    mode: 'history'
})