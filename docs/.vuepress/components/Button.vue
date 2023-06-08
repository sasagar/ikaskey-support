<template>
    <div class="button">
        <a :href="link">
            {{ text }}
        </a>
    </div>
</template>

<script setup>
defineProps({
  link: String,
  text: String,
});
</script>

<style lang="scss" scoped>
.button {
    position: static;
    box-sizing: border-box;
    
    a {
        display: block;
        width: fit-content;
        box-sizing: border-box;
        margin: 0 auto calc(1rem + var(--navbar-height));
        padding: 1rem 2rem;
        border: 1px solid var(--c-border-dark);
        border-radius: 1rem;
        background-color: var(--c-border);
        color: var(--c-bg);
        font-weight: bold;
        &:hover {
            background-color: var(--c-text-light);
        }
    }
}
</style>