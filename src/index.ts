import * as markdownIt from 'markdown-it';
import * as hljs from 'highlight.js';
import { ruby_plugin } from './ruby';

const twemoji = require('twemoji');

export function render(markdown: string) {
    const md = new markdownIt({
        html: true,
        typographer: true,
        linkify: true,
        highlight: (str, lang) => {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                    // tslint:disable-next-line:no-empty
                } catch (__) { }
            }
            return ''; // use external default escaping
        }
    });
    md.use(require('markdown-it-sub'));
    md.use(require('markdown-it-sup'));
    md.use(require('markdown-it-footnote'));
    md.use(require('markdown-it-deflist'));
    md.use(require('markdown-it-abbr'));
    md.use(require('markdown-it-emoji'));
    md.use(require('markdown-it-container'));
    md.use(require('markdown-it-ins'));
    md.use(require('markdown-it-mark'));
    md.use(require('markdown-it-task-lists'));
    md.use(ruby_plugin);
    md.use(require('markdown-it-anchor'), {
        level: 1,
        // slugify: string => string,
        permalink: true,
        // renderPermalink: (slug, opts, state, permalink) => {},
        permalinkClass: 'header-anchor',
        permalinkSymbol: '¶',
        permalinkBefore: false
    });
    md.renderer.rules.emoji = (token, idx) => {
        return twemoji.parse(token[idx].content);
    };
    return md.render(markdown);
}
