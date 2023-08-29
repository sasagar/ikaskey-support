import { defineUserConfig } from '@vuepress/cli';
import defaultTheme from "@vuepress/theme-default";
import { blogPlugin } from "vuepress-plugin-blog2";
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';

export default defineUserConfig({
    base: '/',
    lang: 'ja-JP',
    title: 'いかすきーサポート',
    description: 'Misskeyサーバー「いかすきー」のサポートサイトです',
    lastUpdated: true,
    lastUpdatedText: '最終更新日',
    theme: defaultTheme({
        smoothScroll: true,
        logo: '/images/ikaskey-icon.png',
        contributors: false,
        navbar: [
            { text: 'Home', link: '/' },
            {
                text: 'ユーザー向け情報',
                children: [
                    { text: 'サポーター', link: '/supporter.html' },
                    { text: 'FAQ', link: '/FAQ.html' }
                ]
            },
            { text: 'おしらせ', link: '/category/おしらせ/' },
            { text: 'メンテナンス', link: '/category/メンテナンス/' },
            { text: 'カスタマイズ', link: '/customize.html' },
            {
                text: '利用規約',
                children: [
                    {
                        text: '現行規約',
                        children: [
                            { text: '利用規約全文', link: '/terms/' },
                            { text: '変更履歴', link: '/terms/changelog.html' },
                            { text: 'モデレーション関連事項', link: '/terms/other-terms.html' },
                        ]
                    },
                    {
                        text: 'プライバシーポリシー',
                        children: [
                            { text: 'プライバシーポリシー全文', link: '/privacy-policy/' },
                            { text: '変更履歴', link: '/privacy-policy/changelog.html' }
                        ]
                    },
                    {
                        text: 'ガイドライン',
                        children: [{ text: 'ガイドライン', link: '/guideline.html' }]
                    },
                    {
                        text: '旧規約',
                        children: [
                            { text: '利用規約全文', link: '/terms/terms_v1.html' },
                        ]
                    },
                ]
            },
            { text: 'いかすきー', link: 'https://ikaskey.bktsk.com/', target: '_blank' },
        ]
    }),
    plugins: [
        backToTopPlugin(),
        blogPlugin({
            // only files under posts are articles
            filter: ({ filePathRelative }) =>
                filePathRelative ? filePathRelative.startsWith("posts/") : false,

            // getting article info
            getInfo: ({ frontmatter, title, data }) => ({
                title,
                author: frontmatter["author"] || "",
                date: frontmatter.date || null,
                category: frontmatter["category"] || [],
                tag: frontmatter["tag"] || [],
                excerpt:
                    // support manually set excerpt through frontmatter
                    typeof frontmatter["excerpt"] === "string"
                        ? frontmatter["excerpt"]
                        : data?.["excerpt"] || "",
                status: frontmatter["status"] || null,
                statclass: frontmatter["statclass"] || "tip",
                planneddate: frontmatter.planneddate || null,
            }),

            // generate excerpt for all pages excerpt those users choose to disable
            excerptFilter: ({ frontmatter }) =>
                !frontmatter["home"] &&
                frontmatter["excerpt"] !== false &&
                typeof frontmatter["excerpt"] !== "string",

            category: [
                {
                    key: "category",
                    getter: (page) => page.frontmatter["category"] || [],
                    layout: "Category",
                    itemLayout: "Category",
                    frontmatter: () => ({ title: "Categories", sidebar: false }),
                    itemFrontmatter: (name) => ({
                        title: `Category ${name}`,
                        sidebar: false,
                    }),
                },
                {
                    key: "tag",
                    getter: (page) => page.frontmatter["tag"] || [],
                    layout: "Tag",
                    itemLayout: "Tag",
                    frontmatter: () => ({ title: "Tags", sidebar: false }),
                    itemFrontmatter: (name) => ({
                        title: `Tag ${name}`,
                        sidebar: false,
                    }),
                },
            ],

            type: [
                {
                    key: "article",
                    // remove archive articles
                    filter: (page) => !page.frontmatter["archive"],
                    path: "/posts/",
                    layout: "Article",
                    frontmatter: () => ({ title: "Articles", sidebar: false }),
                    // sort pages with time and sticky
                    sorter: (pageA, pageB) => {
                        if (pageA.frontmatter["sticky"] && pageB.frontmatter["sticky"])
                            return (
                                (pageB.frontmatter["sticky"]) -
                                (pageA.frontmatter["sticky"])
                            );

                        if (pageA.frontmatter["sticky"] && !pageB.frontmatter["sticky"])
                            return -1;

                        if (!pageA.frontmatter["sticky"] && pageB.frontmatter["sticky"])
                            return 1;

                        if (!pageB.frontmatter.date) return 1;
                        if (!pageA.frontmatter.date) return -1;

                        return (
                            new Date(pageB.frontmatter.date).getTime() -
                            new Date(pageA.frontmatter.date).getTime()
                        );
                    },
                },
                {
                    key: "timeline",
                    // only article with date should be added to timeline
                    filter: (page) => page.frontmatter.date instanceof Date,
                    // sort pages with time
                    sorter: (pageA, pageB) =>
                        new Date(pageB.frontmatter.date).getTime() -
                        new Date(pageA.frontmatter.date).getTime(),
                    path: "/timeline/",
                    layout: "Timeline",
                    frontmatter: () => ({ title: "Timeline", sidebar: false }),
                },
                {
                    key: "category-news",
                    filter: (page) => {
                        return page.frontmatter["category"].includes('おしらせ');
                    },
                    sorter: (pageA, pageB) =>
                        new Date(pageB.frontmatter.date).getTime() -
                        new Date(pageA.frontmatter.date).getTime(),
                },
                {
                    key: "category-maintenance",
                    filter: (page) => {
                        return page.frontmatter["category"].includes('メンテナンス');
                    },
                    sorter: (pageA, pageB) =>
                        new Date(pageB.frontmatter.date).getTime() -
                        new Date(pageA.frontmatter.date).getTime(),
                },
            ],
            hotReload: true,
        }),
    ]
})