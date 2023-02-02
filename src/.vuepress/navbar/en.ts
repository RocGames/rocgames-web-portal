import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Docs",
    icon: "note",
    link: "https://docs.roc.games/",
  },
  {
    text: "Service",
    icon: "tool",
    prefix: "/service/",
    children: [
      {
        text: "Core",
        icon: "edit",
        prefix: "core/",
        children: [
          { text: "Account", icon: "edit", link: "https://docs.roc.games/core/login/overview.html" },
          { text: "Pay", icon: "edit", link: "https://docs.roc.games/core/pay/overview.html" },
        ],
      },
      { text: "Gift", icon: "edit", link: "https://docs.roc.games/modules/gift/overview.html" },
      { text: "Analysis", icon: "edit", link: "https://docs.roc.games/core/daq/overview.html" },
      { text: "GM Tools", icon: "edit", link: "https://m.roc.games/" },
    ],
  },
  {
    text: "Analysis",
    icon: "info",
    children: [
      { text: "BI", icon: "edit", link: "http://bi.roc.games/" },
      { text: "Realtime", icon: "edit", link: "https://sls.console.aliyun.com/lognext/project/event-tracking-sg-adjust/dashboard/dashboard-1669828265494-919302?isShare=true&readOnly=true&hideTopbar=true&hideSidebar=true&hiddenAppBread=true&hiddenPSql=true&hiddenEtl=true" },
      { text: "Report", icon: "edit", link: "https://sls.console.aliyun.com/lognext/project/event-tracking-sg-adjust/dashboard/dashboard-1670831161182-476824?isShare=true&readOnly=true&hideTopbar=true&hideSidebar=true&hiddenAppBread=true&hiddenPSql=true&hiddenEtl=true" },
      { text: "Oath of Peak", icon: "edit", link: "https://sls.console.aliyun.com/lognext/project/event-tracking-sg-adjust/dashboard/dashboard-1673534532991-412994?isShare=true&readOnly=true&hideTopbar=true&hideSidebar=true&hiddenAppBread=true&hiddenPSql=true&hiddenEtl=true" },
    ],
  },
  {
    text: "Data Portal",
    icon: "eye",
    link: "https://bi-ap-southeast-1.data.aliyun.com/product/rocgames.htm",
  },
  {
    text: "My Space",
    icon: "at",
    link: "https://m.roc.games/",
  },
]);
