<template>
  <div class="article-wrapper">
    <div v-if="!news.length">Nothing in here.</div>
    <article
      v-for="{ info, path } in news"
      class="article"
      @click="$router.push(path)"
    >
      <div class="article-info">
        <span v-if="info.date" class="date">{{ new Date(info.date).toLocaleDateString("ja-JP", {year: "numeric", month:"2-digit", day:"2-digit" }) }}</span>
        <span v-if="info.status">
            <Badge :type="info.statclass" :text="info.status" vertical="middle" />
        </span>
        <div class="title-container">
          <span class="planneddate">実施予定日: {{ new Date(info.planneddate).toLocaleDateString("ja-JP", {year: "numeric", month:"2-digit", day:"2-digit" }) }}</span><br />
          <span class="title">{{ info.title }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import { useBlogType } from "vuepress-plugin-blog2/client";
  const posts = useBlogType("category-maintenance");
  
  const news = computed(() => posts.value.items.slice(0, 4));
</script>

<style lang="scss" scoped>
@use "@vuepress/theme-default/styles/mixins";

.article-wrapper {
  max-width: 90%;
}

.article {
  padding: 0 1.25rem;
  color: var(--c-brand);
  border: none;
  margin-bottom: 0.5rem;

.title-container {
  padding-top: 0.3rem;
  .planneddate {
    font-size: 0.8rem;
    font-weight: bold;
  }

  .title {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5rem;
  }
}

  .article-info {
    display: flex;
    flex-shrink: 0;
    font-size: 1rem;

    > span {
      margin-right: 0.5em;
      line-height: 1.8;
    }
  }
}
</style>
