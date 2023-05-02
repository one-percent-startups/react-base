import styled from 'styled-components'

const CommonDiv = styled.div`
  padding-bottom: 5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 500 !important;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 10px;
  }

  h6 {
    font-size: 1rem;
    color: gray;
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  div.content > p {
    margin: 0.9rem 0;
    color: #667085;
  }

  ul {
    color: #667085;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  ul > li {
    display: list-item;
    text-align: match-parent;
    font-size: 1rem;
  }

  strong,
  h4 {
    font-size: 1.1rem;
    font-weight: normal;
    color: black;
  }

  pre {
    background-color: rgb(220, 245, 255);
    color: black;
    padding: 20px 20px 0 20px;
    overflow-x: scroll;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  pre * {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;w
  }

  p code,
  ul code {
    background-color: lightgray;
    color: rgb(185, 28, 28);
    padding: 0px 5px;
    border-radius: 2px;
  }
`

export const InstructionsDiv = styled(CommonDiv)`
  padding-bottom: 15rem;
  h2 {
    font-size: 1.2rem;
  }
`

export const ContentDiv = styled(CommonDiv)`
  h1 {
    border-bottom: 1px solid lightgrey;
    margin-bottom: 10px;
  }

  h2,
  details > summary {
    font-size: 2rem;
    border-bottom: 1px solid lightgray;
  }
  .content {
    margin-bottom: 4rem;
  }

  details > :not(summary) {
    margin-left: 10px;
  }

  details strong {
    font-size: inherit;
    color: inherit;
  }

  details em {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  a {
    border-bottom: 1px solid #09678c;
    color: #3366cc !important;
  }
  p,
  ul > li {
    font-size: 18px;
  }
  h4 {
    font-size: 1.5rem;
  }
`

export const EditorContent = styled(ContentDiv)`
  h1 {
    font-size: 2.5rem;
    font-weight: 500 !important;
    margin-bottom: 10px;
    border: none;
  }
`

export const Canvas = styled.div`
  :-moz-has-dir-attr {
    unicode-bidi: isolate;
  }
  :-moz-dir-attr-rtl {
    direction: rtl;
  }
  :-moz-dir-attr-ltr {
    direction: ltr;
  }

  :-moz-dir-attr-like-auto:dir(ltr) {
    direction: ltr;
  }
  :-moz-dir-attr-like-auto:dir(rtl) {
    direction: rtl;
  }

  /* https://html.spec.whatwg.org/#bidi-rendering */
  input[type='tel']:dir(ltr) {
    direction: ltr;
  }

  /* To ensure http://www.w3.org/TR/REC-html40/struct/dirlang.html#style-bidi:
 *
 * "When a block element that does not have a dir attribute is transformed to
 * the style of an inline element by a style sheet, the resulting presentation
 * should be equivalent, in terms of bidirectional formatting, to the
 * formatting obtained by explicitly adding a dir attribute (assigned the
 * inherited value) to the transformed element."
 *
 * and the rules in http://dev.w3.org/html5/spec/rendering.html#rendering
 */

  address,
  article,
  aside,
  blockquote,
  body,
  caption,
  center,
  col,
  colgroup,
  dd,
  dir,
  div,
  dl,
  dt,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  hr,
  html,
  legend,
  li,
  listing,
  main,
  marquee,
  menu,
  nav,
  noframes,
  ol,
  p,
  plaintext,
  pre,
  section,
  summary,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  tr,
  ul,
  xmp {
    unicode-bidi: isolate;
  }

  bdi,
  output {
    unicode-bidi: isolate;
  }
  /* We need the "bdo:-moz-has-dir-attr" bit because "bdo" has lower
   specificity than the ":-moz-has-dir-attr" selector above. */
  bdo,
  bdo:-moz-has-dir-attr {
    unicode-bidi: isolate-override;
  }
  textarea:-moz-dir-attr-like-auto,
  pre:-moz-dir-attr-like-auto {
    unicode-bidi: plaintext;
  }

  /* blocks */

  article,
  aside,
  details,
  div,
  dt,
  figcaption,
  footer,
  form,
  header,
  hgroup,
  html,
  main,
  nav,
  section,
  summary {
    display: block;
  }

  body {
    display: block;
    margin: 8px;
  }

  p,
  dl,
  multicol {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  dd {
    display: block;
    margin-inline-start: 40px;
  }

  blockquote,
  figure {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  }

  address {
    display: block;
    font-style: italic;
  }

  center {
    display: block;
    text-align: -moz-center;
  }

  blockquote[type='cite'] {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 1em;
    border-inline-start: solid;
    border-color: blue;
    border-width: thin;
  }

  span[_moz_quote='true'] {
    color: blue;
  }

  pre[_moz_quote='true'] {
    color: blue;
  }

  h1 {
    display: block;
    font-size: 2em;
    font-weight: bold;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
  }

  h2,
  :is(article, aside, nav, section) h1 {
    display: block;
    font-size: 1.5em;
    font-weight: bold;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }

  h3,
  :is(article, aside, nav, section) :is(article, aside, nav, section) h1 {
    display: block;
    font-size: 1.17em;
    font-weight: bold;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  h4,
  :is(article, aside, nav, section)
    :is(article, aside, nav, section)
    :is(article, aside, nav, section)
    h1 {
    display: block;
    font-size: 1em;
    font-weight: bold;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
  }

  h5,
  :is(article, aside, nav, section)
    :is(article, aside, nav, section)
    :is(article, aside, nav, section)
    :is(article, aside, nav, section)
    h1 {
    display: block;
    font-size: 0.83em;
    font-weight: bold;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
  }

  h6,
  :is(article, aside, nav, section)
    :is(article, aside, nav, section)
    :is(article, aside, nav, section)
    :is(article, aside, nav, section)
    :is(article, aside, nav, section)
    h1 {
    display: block;
    font-size: 0.67em;
    font-weight: bold;
    margin-block-start: 2.33em;
    margin-block-end: 2.33em;
  }

  listing {
    display: block;
    font-family: -moz-fixed;
    font-size: medium;
    white-space: pre;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  xmp,
  pre,
  plaintext {
    display: block;
    font-family: -moz-fixed;
    white-space: pre;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  /* tables */

  table {
    display: table;
    border-spacing: 2px;
    border-collapse: separate;
    /* XXXldb do we want this if we're border-collapse:collapse ? */
    box-sizing: border-box;
    text-indent: 0;
  }

  table[align='left'] {
    float: left;
  }

  table[align='right'] {
    float: right;
    text-align: start;
  }

  /* border collapse rules */

  /* Set hidden if we have 'frame' or 'rules' attribute.
     Set it on all sides when we do so there's more consistency
     in what authors should expect */

  /* Put this first so 'border' and 'frame' rules can override it. */
  table[rules] {
    border-width: thin;
    border-style: hidden;
  }

  /* 'border' before 'frame' so 'frame' overrides
      A border with a given value should, of course, pass that value
      as the border-width in pixels -> attr mapping */

  /* :-moz-table-border-nonzero is like [border]:not([border="0"]) except it
     also checks for other zero-like values according to HTML attribute
     parsing rules */
  table:-moz-table-border-nonzero {
    border-width: thin;
    border-style: outset;
  }

  table[frame] {
    border: thin hidden;
  }

  /* specificity must beat table:-moz-table-border-nonzero rule above */
  table[frame='void'] {
    border-style: hidden;
  }
  table[frame='above'] {
    border-style: outset hidden hidden hidden;
  }
  table[frame='below'] {
    border-style: hidden hidden outset hidden;
  }
  table[frame='lhs'] {
    border-style: hidden hidden hidden outset;
  }
  table[frame='rhs'] {
    border-style: hidden outset hidden hidden;
  }
  table[frame='hsides'] {
    border-style: outset hidden;
  }
  table[frame='vsides'] {
    border-style: hidden outset;
  }
  table[frame='box'],
  table[frame='border'] {
    border-style: outset;
  }

  /* Internal Table Borders */

  /* 'border' cell borders first */

  table:-moz-table-border-nonzero > * > tr > td,
  table:-moz-table-border-nonzero > * > tr > th,
  table:-moz-table-border-nonzero > * > td,
  table:-moz-table-border-nonzero > * > th,
  table:-moz-table-border-nonzero > td,
  table:-moz-table-border-nonzero > th {
    border-width: thin;
    border-style: inset;
  }

  /* collapse only if rules are really specified */
  table[rules]:not([rules='none'], [rules='']) {
    border-collapse: collapse;
  }

  /* only specified rules override 'border' settings
  (increased specificity to achieve this) */
  table[rules]:not([rules='']) > tr > td,
  table[rules]:not([rules='']) > * > tr > td,
  table[rules]:not([rules='']) > tr > th,
  table[rules]:not([rules='']) > * > tr > th,
  table[rules]:not([rules='']) > td,
  table[rules]:not([rules='']) > th {
    border-width: thin;
    border-style: none;
  }

  table[rules][rules='none'] > tr > td,
  table[rules][rules='none'] > * > tr > td,
  table[rules][rules='none'] > tr > th,
  table[rules][rules='none'] > * > tr > th,
  table[rules][rules='none'] > td,
  table[rules][rules='none'] > th {
    border-width: thin;
    border-style: none;
  }

  table[rules][rules='all'] > tr > td,
  table[rules][rules='all'] > * > tr > td,
  table[rules][rules='all'] > tr > th,
  table[rules][rules='all'] > * > tr > th,
  table[rules][rules='all'] > td,
  table[rules][rules='all'] > th {
    border-width: thin;
    border-style: solid;
  }

  table[rules][rules='rows'] > tr,
  table[rules][rules='rows'] > * > tr {
    border-block-start-width: thin;
    border-block-end-width: thin;
    border-block-start-style: solid;
    border-block-end-style: solid;
  }

  table[rules][rules='cols'] > tr > td,
  table[rules][rules='cols'] > * > tr > td,
  table[rules][rules='cols'] > tr > th,
  table[rules][rules='cols'] > * > tr > th {
    border-inline-start-width: thin;
    border-inline-end-width: thin;
    border-inline-start-style: solid;
    border-inline-end-style: solid;
  }

  table[rules][rules='groups'] > colgroup {
    border-inline-start-width: thin;
    border-inline-end-width: thin;
    border-inline-start-style: solid;
    border-inline-end-style: solid;
  }
  table[rules][rules='groups'] > tfoot,
  table[rules][rules='groups'] > thead,
  table[rules][rules='groups'] > tbody {
    border-block-start-width: thin;
    border-block-end-width: thin;
    border-block-start-style: solid;
    border-block-start-style: solid;
  }

  /* caption inherits from table not table-outer */
  caption {
    display: table-caption;
    text-align: center;
  }

  table[align='center'] > caption {
    margin-inline-start: auto;
    margin-inline-end: auto;
  }

  table[align='center'] > caption[align='left']:dir(ltr) {
    margin-inline-end: 0;
  }
  table[align='center'] > caption[align='left']:dir(rtl) {
    margin-inline-start: 0;
  }

  table[align='center'] > caption[align='right']:dir(ltr) {
    margin-inline-start: 0;
  }
  table[align='center'] > caption[align='right']:dir(rtl) {
    margin-inline-end: 0;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
  }

  col {
    display: table-column;
  }

  colgroup {
    display: table-column-group;
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
  }

  tfoot {
    display: table-footer-group;
    vertical-align: middle;
  }

  /* for XHTML tables without tbody */
  table > tr {
    vertical-align: middle;
  }

  td {
    display: table-cell;
    vertical-align: inherit;
    text-align: unset;
    padding: 1px;
  }

  th {
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    padding: 1px;
    text-align: -moz-center-or-inherit;
  }

  tr > form:-moz-is-html,
  tbody > form:-moz-is-html,
  thead > form:-moz-is-html,
  tfoot > form:-moz-is-html,
  table > form:-moz-is-html {
    /* Important: don't show these forms in HTML */
    display: none !important;
  }

  table[bordercolor] > tbody,
  table[bordercolor] > thead,
  table[bordercolor] > tfoot,
  table[bordercolor] > col,
  table[bordercolor] > colgroup,
  table[bordercolor] > tr,
  table[bordercolor] > * > tr,
  table[bordercolor] > tr > td,
  table[bordercolor] > * > tr > td,
  table[bordercolor] > tr > th,
  table[bordercolor] > * > tr > th {
    border-color: inherit;
  }

  /* inlines */

  q:before {
    content: open-quote;
  }

  q:after {
    content: close-quote;
  }

  b,
  strong {
    font-weight: bolder;
  }

  i,
  cite,
  em,
  var,
  dfn {
    font-style: italic;
  }

  tt,
  code,
  kbd,
  samp {
    font-family: -moz-fixed;
  }

  u,
  ins {
    text-decoration: underline;
  }

  s,
  strike,
  del {
    text-decoration: line-through;
  }

  big {
    font-size: larger;
  }

  small {
    font-size: smaller;
  }

  sub {
    vertical-align: sub;
    font-size: smaller;
  }

  sup {
    vertical-align: super;
    font-size: smaller;
  }

  nobr {
    white-space: nowrap;
  }

  mark {
    background: Mark;
    color: MarkText;
  }

  /* titles */
  abbr[title],
  acronym[title] {
    text-decoration: dotted underline;
  }

  /* lists */

  ul,
  menu,
  dir {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
  }

  ul,
  ol,
  menu {
    counter-reset: list-item;
  }

  ol {
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
  }

  li {
    display: list-item;
    text-align: match-parent;
  }

  /* nested lists have no top/bottom margins */
  :is(ul, ol, dir, menu, dl) ul,
  :is(ul, ol, dir, menu, dl) ol,
  :is(ul, ol, dir, menu, dl) dir,
  :is(ul, ol, dir, menu, dl) menu,
  :is(ul, ol, dir, menu, dl) dl {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  /* 2 deep unordered lists use a circle */
  :is(ol, ul, menu, dir) ul,
  :is(ol, ul, menu, dir) menu,
  :is(ol, ul, menu, dir) dir {
    list-style-type: circle;
  }

  /* 3 deep (or more) unordered lists use a square */
  :is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,
  :is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,
  :is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {
    list-style-type: square;
  }

  /* leafs */

  /* <hr> noshade and color attributes are handled completely by
 * HTMLHRElement::MapAttributesIntoRule.
 * https://html.spec.whatwg.org/#the-hr-element-2
 */
  hr {
    color: gray;
    border-width: 1px;
    border-style: inset;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;

    /* FIXME: This is not really per spec */
    display: block;
  }

  hr[size='1'] {
    border-style: solid none none none;
  }

  /* Note that we only intend for the alt content to show up if the image is
 * broken. But non-broken images/inputs will have a replaced box, and thus we
 * won't we don't generate the pseudo-element anyways. This prevents
 * unnecessary reframing when images become broken / non-broken. */
  input[type='image']::before,
  img::before {
    content: -moz-alt-content !important;
    unicode-bidi: isolate;
  }

  object:-moz-broken > *|* {
    /*
    Inherit in the object's alignment so that if we aren't aligned explicitly
    we'll end up in the right place vertically.  See bug 36997.  Note that this
    is not !important because we _might_ be aligned explicitly.
  */
    vertical-align: inherit;
  }

  img[usemap],
  object[usemap] {
    color: blue;
  }

  frameset {
    display: block !important;
    overflow: clip;
    position: static !important;
    float: none !important;
    border: none !important;
  }

  frame {
    border-radius: 0 !important;
  }

  iframe {
    border: 2px inset;
  }

  spacer {
    position: static !important;
    float: none !important;
  }

  canvas {
    user-select: none;
  }

  iframe:focus-visible,
  body:focus-visible,
  html:focus-visible {
    /* These elements historically don't show outlines when focused by default.
   * We could consider changing that if needed. */
    outline-style: none;
  }

  /* hidden elements: https://html.spec.whatwg.org/#hidden-elements
 *
 * Exceptions:
 *
 *  * area declaration needs to be !important, see below / bug 135040.  That's
 *    hacky and broken.
 *
 *  * [hidden] is implemented as a presentation attribute to avoid a global
 *    selector in a UA sheet.
 */
  base,
  basefont,
  datalist,
  head,
  link,
  meta,
  noembed,
  noframes,
  param,
  rp,
  script,
  style,
  template,
  title {
    display: none;
  }

  area {
    /* Don't give it frames other than its imageframe */
    display: none !important;
  }

  iframe:fullscreen {
    /* iframes in full-screen mode don't show a border. */
    border: none !important;
    padding: unset !important;
  }

  /* Details and summary
 * https://html.spec.whatwg.org/#the-details-and-summary-elements
 *
 * Note that these rules need to be duplicated in details.css for the anonymous
 * summary, which wouldn't match otherwise.
 *
 * The spec here says something different, see
 * https://github.com/whatwg/html/issues/8610
 */
  details > summary:first-of-type {
    display: list-item;
    counter-increment: list-item 0;
    list-style: disclosure-closed inside;
  }
  details[open] > summary:first-of-type {
    list-style-type: disclosure-open;
  }

  /* media elements */
  video {
    object-fit: contain;
  }

  video > img:-moz-native-anonymous {
    /* Video poster images should render with the video element's "object-fit" &
     "object-position" properties */
    object-fit: inherit !important;
    object-position: inherit !important;
  }

  audio:not([controls]) {
    display: none !important;
  }

  audio[controls] {
    /* This ensures that intrinsic sizing can reliably shrinkwrap our
      controls (which are also always horizontal) and produce a
      reasonable intrinsic size from them. */
    writing-mode: horizontal-tb !important;
  }

  *|*::-moz-html-canvas-content {
    display: block !important;
    /* we want to be an absolute and fixed container */
    transform: translate(0) !important;
  }

  video > .caption-box {
    width: 100%;
    height: 100%;
    position: relative;
  }

  /**
 * The pseudo element won't inherit CSS styles from its direct parent, "::cue"
 * would actually inherit styles from video because it's video's pseudo element.
 * Therefore, we have to explicitly set some styles which are already defined
 * in its parent element in vtt.jsm.
 */
  ::cue {
    color: rgba(255, 255, 255, 1);
    white-space: pre-line;
    background-color: rgba(0, 0, 0, 0.8);
    font: 10px sans-serif;
    font-size: var(--cue-font-size);
    writing-mode: var(--cue-writing-mode, inherit);
    overflow-wrap: break-word;
    /* TODO : enable unicode-bidi, right now enable it would cause incorrect
            display direction, maybe related with bug 1558431. */
  }

  /* <dialog> element styles */

  dialog {
    position: absolute;
    display: block;
    inset-inline-start: 0;
    inset-inline-end: 0;
    margin: auto;
    border-width: initial;
    border-style: solid;
    border-color: initial;
    border-image: initial;
    padding: 1em;
    background-color: Canvas;
    color: CanvasText;
    width: -moz-fit-content;
    height: -moz-fit-content;
  }

  dialog:not([open]) {
    display: none;
  }

  dialog:modal {
    -moz-top-layer: top !important;
    position: fixed;
    overflow: auto;
    visibility: visible;
    inset-block-start: 0;
    inset-block-end: 0;
    max-width: calc(100% - 6px - 2em);
    max-height: calc(100% - 6px - 2em);
  }

  /* https://html.spec.whatwg.org/#flow-content-3 */
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.1);
  }

  marquee {
    inline-size: -moz-available;
    display: inline-block;
    vertical-align: text-bottom;
    text-align: start;
  }

  marquee:is([direction='up'], [direction='down']) {
    block-size: 200px;
  }

  /* Ruby */

  ruby {
    display: ruby;
  }
  rb {
    display: ruby-base;
    white-space: nowrap;
  }
  rt {
    display: ruby-text;
  }
  rtc {
    display: ruby-text-container;
  }
  rtc,
  rt {
    white-space: nowrap;
    font-size: 50%;
    -moz-min-font-size-ratio: 50%;
    line-height: 1;
  }
  @media not (-moz-platform: windows) {
    rtc,
    rt {
      /* The widely-used Windows font Meiryo doesn't work fine with this
    * setting, so disable this on Windows. We should re-enable it once
    * Microsoft fixes this issue. See bug 1164279. */
      font-variant-east-asian: ruby;
    }
  }
  rtc,
  rt {
    text-emphasis: none;
  }
  rtc:lang(zh),
  rt:lang(zh) {
    ruby-align: center;
  }
  rtc:lang(zh-TW),
  rt:lang(zh-TW) {
    font-size: 30%; /* bopomofo */
    -moz-min-font-size-ratio: 30%;
  }
  rtc > rt {
    font-size: unset;
  }
  ruby,
  rb,
  rt,
  rtc {
    unicode-bidi: isolate;
  }

  /* Shadow DOM v1
 * https://drafts.csswg.org/css-scoping/#slots-in-shadow-tree */
  slot {
    display: contents;
  }
`
