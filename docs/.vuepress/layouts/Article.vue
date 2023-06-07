<script setup>
  import { useBlogType } from "vuepress-plugin-blog2/client";

  import ArticleList from "../components/ArticleList.vue";
  import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";

  const articles = useBlogType("article");
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <h1 class="timeline-title">投稿一覧</h1>
        <ArticleList :items="articles.items" />
      </main>
    </template>
  </ParentLayout>
</template>

