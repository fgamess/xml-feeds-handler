export default {
  path: '/form',
  component: () => import('@/components/ProductFeedForm')
  // redirect: { name: 'FieldList' },
  // children: [
  //   {
  //     name: 'FieldList',
  //     path: '',
  //     component: () => import('@/components/field/List')
  //   },
  //   {
  //     name: 'FieldNew',
  //     path: 'new',
  //     component: () => import('@/components/field/Create')
  //   },
  //   {
  //     name: 'FieldUpdate',
  //     path: ':id/edit',
  //     component: () => import('@/components/field/Update')
  //   },
  //   {
  //     name: 'FieldShow',
  //     path: ':id',
  //     component: () => import('@/components/field/Show')
  //   }
  // ]
}
