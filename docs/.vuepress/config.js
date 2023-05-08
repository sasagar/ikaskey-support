import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    base: '/',
    lang: 'ja-JP',
    title: 'いかすきーサポート',
    description: 'Misskeyサーバー「いかすきー」のサポートサイトです',
    theme: defaultTheme({
        smoothScroll: true,
        logo: '/images/ikaskey-icon.png',
        navbar: [
            { text: 'Home', link: '/' },
            {
                text: '利用規約',
                children: [{ text: '利用規約全文', link: '/terms/' }, { text: '変更履歴', link: '/terms/changelog.html' }]
            },
            {
                text: 'プライバシーポリシー',
                children: [{ text: 'プライバシーポリシー全文', link: '/privacy-policy/' }, { text: '変更履歴', link: '/privacy-policy/changelog.html' }]
            },
            { text: 'いかすきー', link: 'https://ikaskey.bktsk.com/', target: '_blank' },
        ]
    })
})