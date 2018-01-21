import Layout from '@/views/layout';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
      title: 'Login - 登录'
  },
  component: dynamicImportPage('views/login/index')
};
export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
      title: '404-页面不存在'
  },
  component: dynamicImportPage('views/error/404'),
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Layout,
  children: [
      { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: dynamicImportPage('views/dashboard/index') },
      { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: dynamicImportPage('views/error/404') },
      { path: 'shopping', title: '我的信息', name: 'shopping', component:dynamicImportPage('views/error/404') }, 
      { path: 'message', title: '系统设置', name: 'message_index',component: dynamicImportPage('views/error/404')}
  ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
      path: '/info',
      icon: 'key',
      name: 'access',
      title: '权限管理',
      component: Layout,
      children: [
          { path: 'index', title: '权限管理', name: 'access_index',component: dynamicImportPage('views/error/404') }
      ]
  },
  {
      path: '/access-test',
      icon: 'lock-combination',
      title: '权限测试页',
      name: 'accesstest',
      access: 0,
      component: Layout,
      children: [
          { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/views/access/access-test.vue') }
      ]
  },
  {
      path: '/international',
      icon: 'earth',
      title: {i18n: 'international'},
      name: 'international',
      component: Layout,
      children: [
          { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: () => import('@/views/international/international.vue') }
      ]
  },
  {
      path: '/component',
      icon: 'social-buffer',
      name: 'component',
      title: '组件',
      component: Layout,
      children: [
          {
              path: 'text-editor',
              icon: 'compose',
              name: 'text-editor',
              title: '富文本编辑器',
              component: () => import('@/views/my-components/text-editor/text-editor.vue')
          },
          {
              path: 'md-editor',
              icon: 'pound',
              name: 'md-editor',
              title: 'Markdown编辑器',
              component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
          },
          {
              path: 'image-editor',
              icon: 'crop',
              name: 'image-editor',
              title: '图片预览编辑',
              component: () => import('@/views/my-components/image-editor/image-editor.vue')
          },
          {
              path: 'draggable-list',
              icon: 'arrow-move',
              name: 'draggable-list',
              title: '可拖拽列表',
              component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
          },
          {
              path: 'area-linkage',
              icon: 'ios-more',
              name: 'area-linkage',
              title: '城市级联',
              component: () => import('@/views/my-components/area-linkage/area-linkage.vue')
          },
          {
              path: 'file-upload',
              icon: 'android-upload',
              name: 'file-upload',
              title: '文件上传',
              component: () => import('@/views/my-components/file-upload/file-upload.vue')
          },
          {
              path: 'count-to',
              icon: 'arrow-graph-up-right',
              name: 'count-to',
              title: '数字渐变',
              // component: () => import('@/views/my-components/count-to/count-to.vue')
              component: () => import('@/views/my-components/count-to/count-to.vue')
          },
          {
              path: 'split-pane-page',
              icon: 'ios-pause',
              name: 'split-pane-page',
              title: 'split-pane',
              component: () => import('@/views/my-components/split-pane/split-pane-page.vue')
          }
      ]
  },
  {
      path: '/form',
      icon: 'android-checkbox',
      name: 'form',
      title: '表单编辑',
      component: Layout,
      children: [
          { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish/article-publish.vue') },
          { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }

      ]
  },
  {
      path: '/tables',
      icon: 'ios-grid-view',
      name: 'tables',
      title: '表格',
      component: Layout,
      children: [
          { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: () => import('@/views/tables/dragable-table.vue') },
          { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: () => import('@/views/tables/editable-table.vue') },
          { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: () => import('@/views/tables/searchable-table.vue') },
          { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: () => import('@/views/tables/exportable-table.vue') },
          { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: () => import('@/views/tables/table-to-image.vue') }
      ]
  },
  {
      path: '/advanced-router',
      icon: 'ios-infinite',
      name: 'advanced-router',
      title: '高级路由',
      component: Layout,
      children: [
          { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
          { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
      ]
  },
  {
      path: '/error-page',
      icon: 'android-sad',
      title: '错误页面',
      name: 'errorpage',
      component: Layout,
      children: [
          { path: 'index', title: '错误页面', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
      ]
  }
];


// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter,
  page404,
  ...appRouter
];

