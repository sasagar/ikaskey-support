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
    // position: static;
    // box-sizing: border-box;
    // display: inline-block;
    display: block;
    width: fit-content;
    margin: 1rem auto calc(1rem + var(--navbar-height));
    font-size: 1.2rem;
    // padding: .8rem 1.6rem;
    transition: background-color var(--t-color);
    box-sizing: border-box;
    
    a {
        // display: block;
        // width: fit-content;
        // box-sizing: border-box;
        // margin: 0 auto calc(1rem + var(--navbar-height));
        padding: 1rem 2rem;
        border-width: 2px;
        border-style: solid;
        border-radius: 4px;
        // border: 1px solid var(--c-border-dark);
        // border-radius: 1rem;
        // background-color: var(--c-border);
        // color: var(--c-bg);
        // font-weight: bold;
        // transition: .3s;
        text-decoration: none;
        color: var(--c-bg);
        background-color: var(--c-brand);
        border-color: var(--c-brand);
        &:hover {
            background-color: var(--c-brand-light);
        }
    }
}

p + .button {
    margin-top: 2rem;
}
</style>