import * as markdownIt from 'markdown-it';

const UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

function rubyscript(state: any, silent: any) {
  let found = 0;
  let content: string = '';
  let token: any;
  const max = state.posMax;
  const start = state.pos;
  if (state.src.charCodeAt(start) !== 0x2A/* * */) { return false; }
  if (silent) { return false; } // don't run any pairs in validation mode
  if (start + 2 >= max) { return false; }

  state.pos = start + 1;

  while (state.pos < max) {
    if (found === 0 && state.src.charCodeAt(state.pos) === 0x5E/* ^ */) {
      found++;
    } else if (found === 1 && state.src.charCodeAt(state.pos) === 0x2A/* * */) {
      found++;
      break;
    }

    state.md.inline.skipToken(state);
  }

  if (found !== 2 || start + 1 === state.pos) {
    state.pos = start;
    return false;
  }

  content = state.src.slice(start + 1, state.pos);

  state.posMax = state.pos;
  state.pos = start + 1;

  token = state.push('ruby_open', 'ruby', 1);
  token.markup = '*';

  const [word, rt] = content.split('^');

  token = state.push('text', '', 0);
  token.content = word.replace(UNESCAPE_RE, '$1');

  token = state.push('rp_open', 'rp', 1);

  token = state.push('text', '(', 0);

  token = state.push('rp_close', 'rp', -1);

  token = state.push('rt_open', 'rt', 1);

  token = state.push('text', '', 0);
  token.content = rt.replace(UNESCAPE_RE, '$1');

  token = state.push('rt_close', 'rt', -1);

  token = state.push('rp_open', 'rp', 1);

  token = state.push('text', ')', 0);

  token = state.push('rp_close', 'rp', -1);

  token = state.push('ruby_close', 'ruby', -1);
  token.markup = '*';

  state.pos = state.posMax + 1;
  state.posMax = max;
  return true;
}

export function ruby_plugin(md: markdownIt.MarkdownIt) {
  md.inline.ruler.before('emphasis', 'ruby', rubyscript as any);
}
