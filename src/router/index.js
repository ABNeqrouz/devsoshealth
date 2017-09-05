import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Patients from '@/components/patient/Patients'
import NouveauPatient from '@/components/patient/NouveauPatient'
import Patient from '@/components/patient/Patient'
import RendezVous from '@/components/patient/RendezVous'
import ListVisits from '@/components/patient/ListVisits'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import AuthGuard from './auth-guard'


Vue.use(Router);

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
          props: true,
          component: Patient
      },
      {
       path: '/nouveauPatient',
          name: 'newPatient',
          component: NouveauPatient,
          beforeEnter: AuthGuard
      },
      {
        path: '/patients/newvisit/:patientId',
          name: 'Visit',
          props: true,
          component: RendezVous
      },
      {
        path: '/patients/visits/:patientId',
          name: 'Visits',
          props: true,
          component: ListVisits
      },
      {
          path: '/profile',
          name: 'Profile',
          component: Profile,
          beforeEnter: AuthGuard
      },
      {
          path: '/signup',
          name: 'Signup',
          component: Signup
      },
      {
          path: '/signin',
          name: 'Signin',
          component: Signin
      }

  ],
    mode: 'history'
})