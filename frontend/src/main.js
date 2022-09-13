import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import NavBar from "@/components/global/NavBar.vue";
import PageFooter from "@/components/global/PageFooter.vue";

const app = createApp(App);

app.component("NavBar", NavBar);
app.component("PageFooter", PageFooter);

app.use(store).use(router).mount("#app");
