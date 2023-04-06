import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "home",
    link: "/zh",
  },
  {
    text: "文档",
    icon: "note",
    link: "https://docs.roc.games/",
  },
  {
    text: "开发者服务",
    icon: "tool",
    prefix: "/service/",
    children: [
      {
        text: "核心",
        icon: "edit",
        prefix: "core/",
        children: [
          { text: "账户", icon: "edit", link: "https://docs.roc.games/core/login/overview.html" },
          { text: "支付", icon: "edit", link: "https://docs.roc.games/core/pay/overview.html" },
        ],
      },
      { text: "礼包系统", icon: "edit", link: "https://docs.roc.games/modules/gift/overview.html" },
      { text: "数据分析", icon: "edit", link: "https://docs.roc.games/core/daq/overview.html" },
      { text: "管理工具", icon: "edit", link: "https://m.roc.games/" },
    ],
  },
  {
    text: "视图报表",
    icon: "info",
    children: [
      { text: "BI", icon: "edit", link: "http://bi.roc.games/" },
      { text: "实时分析", icon: "edit", link: "https://sls.console.aliyun.com/lognext/project/event-tracking-sg-adjust/dashboard/dashboard-1669828265494-919302?isShare=true&readOnly=true&hideTopbar=true&hideSidebar=true&hiddenAppBread=true&hiddenPSql=true&hiddenEtl=true" },
      { text: "留存数据", icon: "edit", link: "https://sls.console.aliyun.com/lognext/project/event-tracking-sg-adjust/dashboard/dashboard-1670831161182-476824?isShare=true&readOnly=true&hideTopbar=true&hideSidebar=true&hiddenAppBread=true&hiddenPSql=true&hiddenEtl=true" },
      { text: "云山之约", icon: "edit", link: "https://sls.console.aliyun.com/lognext/project/event-tracking-sg-adjust/dashboard/dashboard-1673534532991-412994?isShare=true&readOnly=true&hideTopbar=true&hideSidebar=true&hiddenAppBread=true&hiddenPSql=true&hiddenEtl=true" },
    ],
  },
  {
    text: "数据门户",
    icon: "eye",
    link: "https://bi-ap-southeast-1.data.aliyun.com/product/analysis.htm",
  },
  {
    text: "数据门户(旧版)",
    icon: "eye",
    link: "https://bi-ap-southeast-1.data.aliyun.com/product/analysis.htm",
  },
  {
    text: "管理中心",
    icon: "at",
    link: "https://m.roc.games/",
  },
]);
