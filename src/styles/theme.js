import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --sans: 'Work Sans', sans-serif;
        --heading: 700;
        --bold: 500;
        --copy: 400; 
        --scale-8: 7.594rem;
        --scale-7: 5.063rem;
        --scale-6: 3.375rem;
        --scale-5: 2.25rem;
        --scale-4: 1.5rem;
        --scale-3: 1rem;
        --scale-2: .667rem;
        --scale-1: 0.444rem; 
    }
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 16px;
        text-size-adjust: 100%;
    }
    body {
        font-family: var(--sans);
        font-weight: var(--copy);
        font-size: var(--scale-3);
        line-height: calc(var(--scale-3) * 2);
        max-width: 45rem;
        width: calc(100% - var(--scale-6));
        margin: var(--scale-5) auto var(--scale-6);
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: var(--heading);
        line-height: var(--scale-5);
        margin: var(--scale-5) 0;
    }
    h1 {
        font-size: var(--scale-6);
        line-height: var(--scale-6);
    }
    h2 {
        font-size: var(--scale-5);
        line-height: var(--scale-6);
    }
    h3 {
        font-size: var(--scale-4);
    }
    h4 {
        font-size: calc(var(--scale-2) + var(--scale-1));
        line-height: var(--scale-3);
        margin-bottom: 0;
    }
    h5 {
        font-size: var(--scale-3);
        font-weight: var(--bold);
        line-height: var(--scale-3);
        margin-bottom: 0;
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
        margin-bottom: var(--scale-5);
    }
    ul ul,
    ol ol,
    ul ol,
    ol ul {
        margin: 0;
    }
    hr {
        border: 1px solid;
        margin: -1px 0;
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
    }
`
