export default {
  path: '/user',
  component: dynamicImportPage('views/help/index'),
  children: [{
      name: 'user/index',
      path: '',
      component: dynamicImportPage('views/user/main'),
      meta: {
        title: '客户维护'
      }
    },
    {
      name: 'user/aboutus',
      path: 'aboutus/:id',
      component: dynamicImportPage('views/help/aboutus'),
      meta: {
        title: '约价合同'
      }
    }
  ]
}
