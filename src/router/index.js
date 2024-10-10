import { createRouter, createWebHistory } from 'vue-router'
import WriteBook from '../views/WriteBook.vue'
import Contents from '../views/Contents.vue'
import Modal from '../views/Modal.vue'
import UI_CV_000 from '../components/ui_cv/UI_CV_000.vue'
import UI_CV_000_1 from '../components/ui_cv/UI_CV_000_1.vue'
import UI_CV_000_2 from '../components/ui_cv/UI_CV_000_2.vue'
import UI_CV_000_3 from '../components/ui_cv/UI_CV_000_3.vue'
import UI_CV_000_4 from '../components/ui_cv/UI_CV_000_4.vue'
import UI_CV_006 from '../components/ui_cv/UI_CV_006.vue'
import UI_CV_009 from '../components/ui_cv/UI_CV_009.vue'
import UI_CV_010 from '../components/ui_cv/UI_CV_010.vue'
import UI_CV_011 from '../components/ui_cv/UI_CV_011.vue'
import UI_CV_012 from '../components/ui_cv/UI_CV_012.vue'
import UI_CV_013 from '../components/ui_cv/UI_CV_013.vue'
import UI_CV_014 from '../components/ui_cv/UI_CV_014.vue'
import UI_CV_015_1 from '../components/ui_cv/UI_CV_015_1.vue'
import UI_CV_015_2 from '../components/ui_cv/UI_CV_015_2.vue'
import UI_CV_015_3 from '../components/ui_cv/UI_CV_015_3.vue'
import UI_CV_016 from '../components/ui_cv/UI_CV_016.vue'
import UI_CV_016_2 from '../components/ui_cv/UI_CV_016_2.vue'
import UI_CV_020 from '../components/ui_cv/UI_CV_020.vue'
import UI_CV_021 from '../components/ui_cv/UI_CV_021.vue'
import UI_CV_022 from '../components/ui_cv/UI_CV_022.vue'
import UI_CV_025 from '../components/ui_cv/UI_CV_025.vue'
import UI_CV_034 from '../components/ui_cv/UI_CV_034.vue'
import UI_CV_035 from '../components/ui_cv/UI_CV_035.vue'
import UI_CV_036 from '../components/ui_cv/UI_CV_036.vue'
import UI_CV_037 from '../components/ui_cv/UI_CV_037.vue'
import UI_CV_040 from '../components/ui_cv/UI_CV_040.vue'
import UI_CV_041 from '../components/ui_cv/UI_CV_041.vue'
import UI_CV_043 from '../components/ui_cv/UI_CV_043.vue'
import UI_CV_044 from '../components/ui_cv/UI_CV_044.vue'
import UI_CV_045 from '../components/ui_cv/UI_CV_045.vue'
import UI_CV_046 from '../components/ui_cv/UI_CV_046.vue'
import UI_CV_047 from '../components/ui_cv/UI_CV_047.vue'
import UI_CV_047_2 from '../components/ui_cv/UI_CV_047_2.vue'
import UI_CV_048 from '../components/ui_cv/UI_CV_048.vue'
import UI_CV_049 from '../components/ui_cv/UI_CV_049.vue'
import ChatBot from '../components/panel/ChatBot.vue'
import Guide from '../components/guide/Guide.vue'

const routes = [
  {
    path: '/Guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/',
    name: 'WriteBook',
    component: WriteBook
  },
  {
    path: '/contents',
    name: 'Contents',
    component: Contents,
    children: [
      { path: 'UI_CV_000', name: 'UI_CV_000', component: UI_CV_000 },
      { path: 'UI_CV_000_1', name: 'UI_CV_000_1', component: UI_CV_000_1 },
      { path: 'UI_CV_000_2', name: 'UI_CV_000_2', component: UI_CV_000_2 },
      { path: 'UI_CV_000_3', name: 'UI_CV_000_3', component: UI_CV_000_3 },
      { path: 'UI_CV_000_4', name: 'UI_CV_000_4', component: UI_CV_000_4 },
      { path: 'UI_CV_006', name: 'UI_CV_006', component: UI_CV_006 },
      { path: 'UI_CV_009', name: 'UI_CV_009', component: UI_CV_009 },
      { path: 'UI_CV_010', name: 'UI_CV_010', component: UI_CV_010 },
      { path: 'UI_CV_011', name: 'UI_CV_011', component: UI_CV_011 },
      { path: 'UI_CV_012', name: 'UI_CV_012', component: UI_CV_012 },
      { path: 'UI_CV_013', name: 'UI_CV_013', component: UI_CV_013 },
      { path: 'UI_CV_014', name: 'UI_CV_014', component: UI_CV_014 },
      { path: 'UI_CV_015_1', name: 'UI_CV_015_1', component: UI_CV_015_1 },
      { path: 'UI_CV_015_2', name: 'UI_CV_015_2', component: UI_CV_015_2 },
      { path: 'UI_CV_015_3', name: 'UI_CV_015_3', component: UI_CV_015_3 },
      { path: 'UI_CV_016', name: 'UI_CV_016', component: UI_CV_016 },
      { path: 'UI_CV_016_2', name: 'UI_CV_016_2', component: UI_CV_016_2 },
      { path: 'UI_CV_020', name: 'UI_CV_020', component: UI_CV_020 },
      { path: 'UI_CV_021', name: 'UI_CV_021', component: UI_CV_021 },
      { path: 'UI_CV_022', name: 'UI_CV_022', component: UI_CV_022 },
      { path: 'UI_CV_025', name: 'UI_CV_025', component: UI_CV_025 },
      { path: 'UI_CV_034', name: 'UI_CV_034', component: UI_CV_034 },
      { path: 'UI_CV_035', name: 'UI_CV_035', component: UI_CV_035 },
      { path: 'UI_CV_036', name: 'UI_CV_036', component: UI_CV_036 },
      { path: 'UI_CV_037', name: 'UI_CV_037', component: UI_CV_037 },
      { path: 'UI_CV_040', name: 'UI_CV_040', component: UI_CV_040 },
      { path: 'UI_CV_041', name: 'UI_CV_041', component: UI_CV_041 },
      { path: 'UI_CV_043', name: 'UI_CV_043', component: UI_CV_043 },
      { path: 'UI_CV_044', name: 'UI_CV_044', component: UI_CV_044 },
      { path: 'UI_CV_045', name: 'UI_CV_045', component: UI_CV_045 },
      { path: 'UI_CV_046', name: 'UI_CV_046', component: UI_CV_046 },
      { path: 'UI_CV_047', name: 'UI_CV_047', component: UI_CV_047 },
      { path: 'UI_CV_047_2', name: 'UI_CV_047_2', component: UI_CV_047_2 },
      { path: 'UI_CV_048', name: 'UI_CV_048', component: UI_CV_048 },
      { path: 'UI_CV_049', name: 'UI_CV_049', component: UI_CV_049 }
    ]
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/chatBot',
    name: 'ChatBot',
    component: ChatBot
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
