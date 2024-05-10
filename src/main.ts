import { createApp } from "vue";
import "./tailwind.css";
import "./style.css";
import App from "./App.vue";

import { buildRouter } from "./routes/root";
import { IEcwidServiceKey } from "./service/IEcwidService";
import { ApiEcwidService } from "./service/ApiEcwidService";
import { createStore, storeSymbol } from './store/store';

const router = buildRouter();

const app = createApp(App);
const store = createStore();

app.provide(IEcwidServiceKey, new ApiEcwidService());
app.provide(storeSymbol, store);
app.use(router);
app.mount("#app");
