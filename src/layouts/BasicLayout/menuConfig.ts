
const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '数据页面',
    path: '/',
    icon: 'chart-pie',
    children: [
      {
        name: '分析页面',
        path: '/fusion/dashboard/analysis',
      },
      {
        name: '监控页面',
        path: '/fusion/dashboard/monitor',
      },
      {
        name: '工作台',
        path: '/fusion/dashboard/workplace',
      },
    ],
  },
  {
    name: '表单页面',
    path: '/',
    icon: 'copy',
    children: [
      {
        name: '单列表单',
        path: '/fusion/form/basic',
      },
      {
        name: '两列表单',
        path: '/fusion/form/two',
      },
      {
        name: '三列表单',
        path: '/fusion/form/three',
      },
      {
        name: '四列表单',
        path: '/fusion/form/four',
      },
      {
        name: '分步表单',
        path: '/fusion/form/step',
      },
      {
        name: '分类表单',
        path: '/fusion/form/classified',
      },
      {
        name: '分组表单',
        path: '/fusion/form/group',
      },
      {
        name: '流程表单',
        path: '/fusion/form/flow',
      },
      {
        name: '分级表单',
        path: '/fusion/form/hierarchical',
      },
    ],
  },
  {
    name: '列表页面',
    path: '/',
    icon: 'chart-bar',
    children: [
      {
        name: '基础列表',
        path: '/fusion/list/basic',
      },
      {
        name: '卡片列表',
        path: '/fusion/list/card',
      },
      {
        name: '表格列表',
        path: '/fusion/',
        children: [
          {
            name: '基础过滤',
            path: '/list/table/filter',
          },
          {
            name: '单列过滤',
            path: '/list/table/singlecol',
          },
          {
            name: '多列过滤',
            path: '/list/table/mutilcol',
          },
          {
            name: '带操作列',
            path: '/list/table/action',
          },
          {
            name: '可展开表',
            path: '/list/table/expand',
          },
          {
            name: '单层树表',
            path: '/list/table/singletree',
          },
          {
            name: '弹窗表格',
            path: '/list/table/dialog',
          },
          {
            name: '合并单元格',
            path: '/list/table/mergecell',
          },
        ],
      },
    ],
  },
  {
    name: '详情页面',
    path: '/',
    icon: 'calendar',
    children: [
      {
        name: '基础详情',
        path: '/fusion/detail/basic',
      },
      {
        name: '高级详情',
        path: '/fusion/detail/advanced',
      },
    ],
  },
  {
    name: '结果&缺省',
    path: '/',
    icon: 'warning',
    children: [
      {
        name: '成功页面',
        path: '/fusion/feedback/success',
      },
      {
        name: '失败页面',
        path: '/fusion/feedback/fail',
      },
      {
        name: '403',
        path: '/fusion/feedback/403',
      },
      {
        name: '404',
        path: '/fusion/feedback/404',
      },
      {
        name: '500',
        path: '/fusion/feedback/500',
      },
    ],
  },
  {
    name: '设置页面',
    path: '/',
    icon: 'set',
    children: [
      {
        name: '系统设置',
        path: '/fusion/settings',
      },
      {
        name: '个人设置',
        path: '/fusion/person',
      },
    ],
  },
  {
    name: '登录&注册',
    path: '/',
    icon: 'account',
    children: [
      {
        name: '登录',
        path: '/fusion/user/login',
      },
      {
        name: '注册',
        path: '/fusion/user/register',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
