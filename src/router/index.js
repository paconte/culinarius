import Vue from 'vue';
import Router from 'vue-router';

import LandingView from '../views/LandingView';
import FaqView from '../views/FaqView';
import PrivacyView from '../views/PrivacyView';
import ImpresumView from '../views/ImpresumView';
import FoodView from '../views/FoodView';
import MapView from '../views/MapView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: LandingView,
    },
    {
      path: '/meals/:location',
      component: FoodView,
    },
    {
      path: '/faq',
      component: FaqView,
    },
    {
      path: '/legal-and-privacy',
      component: PrivacyView,
    },
    {
      path: '/impressum',
      component: ImpresumView,
    },
    {
      path: '/map',
      component: MapView,
    },
  ],
});
