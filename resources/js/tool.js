Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: "netlify-deploy",
      path: "/netlify-deploy",
      component: require("./components/Tool"),
    },
  ]);
  Vue.component("netlify-deploy-card", require("./components/Card"));
  Vue.component("netlify-deploy-status", require("./components/DeployStatus"));
});
