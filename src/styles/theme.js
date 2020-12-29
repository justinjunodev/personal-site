import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --sans: 'Work Sans', sans-serif;
        --mono: 'Space Mono', monospace;
        --heading: 700;
        --bold: 500;
        --copy: 400; 
        --scale-8: 4.207rem;
        --scale-7: 3.157rem;
        --scale-6: 2.369rem;
        --scale-5: 1.777rem;
        --scale-4: 1.333rem;
        --scale-3: 1rem;
        --scale-2: .75rem;
        --scale-1: 0.563rem; 
        --border: 0.422rem;
        --primary: #FF8906;
        --secondary: #F25F4C;
        --tertiary: #E53170;
        --gradient: linear-gradient(115deg, #FF8906 0%, #F25F4C 100%); 
        --dark: #050506;
        --dark-alt: #161617;
        --light: #FDFDFE;
        --light-alt: #BDBDBE;
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html {
        font-size: 17px;
        text-size-adjust: 100%;
    }
    body {
        font-family: var(--sans);
        font-weight: var(--copy);
        font-size: var(--scale-3);
        color: var(--light-alt);
        line-height: 2rem;
        background: var(--dark);
        ::before {
            content: '';
            display: block;
            height: var(--border);
            width: 100%;
            background-color: var(--primary);
            background-image: var(--gradient);
        }
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: var(--heading);
        color: var(--light);
        line-height: var(--scale-5);
        margin: var(--scale-5) 0 var(--scale-3);
    }
    h1 {
        font-size: var(--scale-6);
        line-height: var(--scale-6);
        margin-bottom: var(--scale-5);
    }
    h2 {
        font-size: var(--scale-5);
        line-height: var(--scale-6);
    }
    h3 {
        font-size: var(--scale-4);
    }
    h4 {
        font-size: 1.25rem;
        line-height: var(--scale-3);
        margin-bottom: var(--scale-2);
    }
    h5 {
        font-size: var(--scale-3);
        font-weight: var(--bold);
        line-height: var(--scale-3);
        margin-bottom: var(--scale-2);
    }
    strong,
    b {
        font-weight: var(--bold);
    }
    p,
    ul,
    ol,
    pre,
    table,
    blockquote {
        margin-bottom: var(--scale-4);
    }
    ul ul,
    ol ol,
    ul ol,
    ol ul {
        margin: 0;
    }
    ul {
        list-style: none;
        display: inline-block;
        margin-left: var(--scale-3);
        li {
            position: relative;
            padding-left: var(--scale-3);
            :not(:last-of-type) {
                margin-bottom: var(--scale-1);
            }
            ::before {
               content: "";
               position: absolute;
               left: 0;
               top: var(--scale-2);
               background-color: var(--primary);
               background-image: var(--gradient);
               width: var(--border);
               height: var(--border); 
            }
        }
    }
    hr {
        display: block;
        border: none;
        background-color: var(--primary);
        background-image: var(--gradient);
        height: var(--border);
        margin-top: var(--scale-5);
        width: var(--scale-7);
    }
    b,
    i,
    strong,
    em,
    small,
    code {
        line-height: 0;
    }
    sub,
    sup {
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    sub {
        bottom: -0.25em;
    }
    img {
        display: block;
        height: auto;
        width: 100%;
    }
    a {
        font-weight: var(--bold);
        text-decoration: none;
        display: inline-block;
        position: relative;
        color: var(--light);
        ::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 1px;
            left: 0;
            background-color: var(--primary);
            background-image: var(--gradient);
            transform-origin: bottom right;
            transition: transform 0.3s cubic-bezier(0.85, 0, 0.075, 1);
        }
        :hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
    code[class*='language-'],
    pre[class*='language-'] {
        color: var(--light);
        font-family: var(--mono);
        font-weight: var(--copy);
        font-style: italic;
        font-size: var(--scale-2);
        text-shadow: 1px 1px 2px var(--dark);
        background: var(--dark-alt);
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: var(--scale-4);
        -moz-tab-size: 2;
        -o-tab-size: 2;
        tab-size: 2;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }
    pre[class*='language-'] {
        padding: var(--scale-5);
        margin: var(--scale-5) 0 var(--scale-6);
        overflow: auto;
    }
    :not(pre) > code[class*='language-'] {
        display: inline-block;
        padding: 0 var(--scale-1);
        white-space: normal;
        background: var(--dark-alt);
        color: var(--light);
        margin: 0 2px;
    }
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata,
    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted,
    .token.boolean,
    .token.number,
    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted,
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
        color: var(--light-alt);
    }
    .token.punctuation,
    .token.regex,
    .token.important,
    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.keyword {
        color: var(--primary);
    }
    .token.selector,
    .token.important,
    .token.atrule,
    .token.keyword,
    .token.builtin {
        color: var(--secondary);
    }
`
