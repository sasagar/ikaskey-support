<template>
  <div class="article-wrapper">
    <div v-if="!items.length">Nothing in here.</div>
    <article
      v-for="{ info, path } in items"
      class="article"
      @click="$router.push(path)"
    >
      <div class="article-info">
        <span v-if="info.date && !isTimeline" class="date">{{ new Date(info.date).toLocaleDateString("ja-JP", {year: "numeric", month:"2-digit", day:"2-digit" }) }}</span>
        <span v-if="info.author" class="author">by {{ info.author }}</span>
      </div>
      <header class="title">
        {{
          (isTimeline ? `${new Date(info.date).toLocaleDateString("ja-JP", {year: "numeric", month:"2-digit", day:"2-digit" })}: ` : "") +
          info.title
        }}
      </header>
      <div v-if="info.excerpt" class="excerpt" v-html="info.excerpt" />
      <hr />
      <div class="article-info">
        <span v-if="info.category" class="category">カテゴリー: {{ info.category.join(", ") }}</span>
      </div>
      <div class="article-info">
        <span v-if="info.tag.length" class="tag">タグ: {{ info.tag.join(", ") }}</span>
      </div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  isTimeline: Boolean,
});
</script>
<style lang="scss">
@use "@vuepress/theme-default/styles/mixins";

.article-wrapper {
  @include mixins.content_wrapper;
  text-align: center;
}

.article {
  position: relative;

  box-sizing: border-box;

  width: 100%;
  margin: 0 auto 1.25rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--c-border);
  border-radius: 0.4rem;
  color: var(--c-text);

  text-align: left;

  @media (max-width: 419px) {
    border-radius: 0;
  }

  &:hover {
    cursor: pointer;
  }

  .title {
    position: relative;

    display: inline-block;

    font-size: 1.28rem;
    line-height: 2rem;
    font-weight: bold;

    &::after {
      content: "";

      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 2px;

      background: var(--c-brand);

      visibility: hidden;

      transition: transform 0.3s ease-in-out;
      transform: scaleX(0);
    }

    &:hover {
      &::after {
        visibility: visible;
        transform: scaleX(1);
      }
    }

    a {
      color: inherit;
    }
  }

  .article-info {
    display: flex;
    flex-shrink: 0;
    font-size: 0.8rem;

    > span {
      margin-right: 0.5em;
      line-height: 1.8;
    }
  }

  .excerpt {
    margin-top: 0.5rem;
    h1 {
      display: none;
    }

    h2 {
      font-size: 1.2em;
    }

    h3 {
      font-size: 1.15em;
    }
  }
}
</style>
