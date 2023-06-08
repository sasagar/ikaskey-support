import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'
import Article from "./layouts/Article.vue";
import Category from "./layouts/Category.vue";
import Tag from "./layouts/Tag.vue";
import Timeline from "./layouts/Timeline.vue";

import NewsList from "./components/NewsList.vue";
import MaintenanceList from "./components/MaintenanceList.vue";
import Button from "./components/Button.vue";

export default defineClientConfig({
    enhance({ app }) {
        app.component('NewsList', NewsList);
        app.component('MaintenanceList', MaintenanceList);
        app.component('Button', Button);
    },
    layouts: {
        Layout,
        Article,
        Category,
        Tag,
        Timeline,
    },
})