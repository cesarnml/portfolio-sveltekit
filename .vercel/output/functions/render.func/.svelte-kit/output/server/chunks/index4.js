import { c as create_ssr_component, d as add_attribute, v as validate_component } from "./index3.js";
const ReusableImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}>`;
});
const metadata = {
  "published": true,
  "title": "First Svelte MDX post",
  "description": "My first markdown content",
  "author": "Cesar Mejia",
  "tags": ["cool", "beans"],
  "image": "/images/hero.webp",
  "date": "2023-01-17T00:00:00.000Z",
  "readingTime": {
    "text": "1 min read",
    "minutes": 0.475,
    "time": 28500,
    "words": 95
  }
};
const First = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 id="${"heading-2-first"}"><a href="${"#heading-2-first"}">Heading 2 First</a></h2>
<h2 id="${"heading-2-second"}"><a href="${"#heading-2-second"}">Heading 2 Second</a></h2>
<h3 id="${"heading-3-first"}"><a href="${"#heading-3-first"}">Heading 3 First</a></h3>
<h2 id="${"heading-2-third"}"><a href="${"#heading-2-third"}">Heading 2 Third</a></h2>
<ol><li>Make a list</li>
<li>Yup</li></ol>
<div class="${"remark-code-title"}">JavaScript</div>
<pre class="${"shiki"}" style="${"background-color: #262335"}" tabindex="${"0"}"><code><span class="${"line"}"><span style="${"color: #72F1B8"}">export</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FEDE5D"}">async</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FEDE5D"}">function</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #36F9F6"}">load</span><span style="${"color: #BBBBBB"}">({ </span><span style="${"color: #FF7EDB"}">fetch</span><span style="${"color: #BBBBBB"}"> }) {</span></span>
<span class="${"line highlight-line-remove"}"><span style="${"color: #BBBBBB"}">	</span><span style="${"color: #FEDE5D"}">const</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF7EDB"}">variable</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FFFFFFEE"}">=</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF8B39"}">&quot;this is a super long variable declaration come on&quot;</span></span>
<span class="${"line highlight-line-add"}"><span style="${"color: #BBBBBB"}">	</span><span style="${"color: #FEDE5D"}">const</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF7EDB"}">res</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FFFFFFEE"}">=</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FEDE5D"}">await</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #36F9F6"}">fetch</span><span style="${"color: #BBBBBB"}">(</span><span style="${"color: #FF8B39"}">\`/posts.json\`</span><span style="${"color: #BBBBBB"}">)</span></span>
<span class="${"line highlight-line-add"}"><span style="${"color: #BBBBBB"}">	</span><span style="${"color: #FEDE5D"}">if</span><span style="${"color: #BBBBBB"}"> (</span><span style="${"color: #FF7EDB"}">res</span><span style="${"color: #BBBBBB"}">.</span><span style="${"color: #2EE2FA"}">ok</span><span style="${"color: #BBBBBB"}">) {</span></span>
<span class="${"line highlight-line-add"}"><span style="${"color: #BBBBBB"}">		</span><span style="${"color: #FEDE5D"}">const</span><span style="${"color: #BBBBBB"}"> { </span><span style="${"color: #FF7EDB"}">posts</span><span style="${"color: #BBBBBB"}"> } </span><span style="${"color: #FFFFFFEE"}">=</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FEDE5D"}">await</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF7EDB"}">res</span><span style="${"color: #BBBBBB"}">.</span><span style="${"color: #36F9F6"}">json</span><span style="${"color: #BBBBBB"}">()</span></span>
<span class="${"line highlight-line-add"}"><span style="${"color: #BBBBBB"}">		</span><span style="${"color: #FEDE5D"}">return</span><span style="${"color: #BBBBBB"}"> { </span><span style="${"color: #FF7EDB"}">posts</span><span style="${"color: #BBBBBB"}"> }</span></span>
<span class="${"line highlight-line-add"}"><span style="${"color: #BBBBBB"}">	}</span></span>
<span class="${"line"}"><span style="${"color: #BBBBBB"}">}</span></span>
<span class="${"line highlight-line-normal"}"><span style="${"color: #FEDE5D"}">const</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF7EDB"}">code</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FFFFFFEE"}">=</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF8B39"}">&#39;yay!&#39;</span></span>
<span class="${"line highlight-line-normal"}"></span>
<span class="${"line"}"><span style="${"color: #FEDE5D"}">const</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF7EDB"}">code</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FFFFFFEE"}">=</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF8B39"}">&#39;yay!&#39;</span></span></code></pre>
<div class="${"remark-code-title"}">Svelte</div>
<pre class="${"shiki"}" style="${"background-color: #262335"}" tabindex="${"0"}"><code><span class="${"line"}"><span style="${"color: #72F1B8"}">export</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FEDE5D"}">async</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FEDE5D"}">function</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #36F9F6"}">load</span><span style="${"color: #BBBBBB"}">({ </span><span style="${"color: #FF7EDB"}">fetch</span><span style="${"color: #BBBBBB"}"> }) {</span></span>
<span class="${"line"}"><span style="${"color: #BBBBBB"}">	</span><span style="${"color: #FEDE5D"}">const</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF7EDB"}">res</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FFFFFFEE"}">=</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FEDE5D"}">await</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #36F9F6"}">fetch</span><span style="${"color: #BBBBBB"}">(</span><span style="${"color: #FF8B39"}">\`/posts.json\`</span><span style="${"color: #BBBBBB"}">)</span></span>
<span class="${"line"}"><span style="${"color: #BBBBBB"}">	</span><span style="${"color: #FEDE5D"}">if</span><span style="${"color: #BBBBBB"}"> (</span><span style="${"color: #FF7EDB"}">res</span><span style="${"color: #BBBBBB"}">.</span><span style="${"color: #2EE2FA"}">ok</span><span style="${"color: #BBBBBB"}">) {</span></span>
<span class="${"line"}"><span style="${"color: #BBBBBB"}">		</span><span style="${"color: #FEDE5D"}">const</span><span style="${"color: #BBBBBB"}"> { </span><span style="${"color: #FF7EDB"}">posts</span><span style="${"color: #BBBBBB"}"> } </span><span style="${"color: #FFFFFFEE"}">=</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FEDE5D"}">await</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF7EDB"}">res</span><span style="${"color: #BBBBBB"}">.</span><span style="${"color: #36F9F6"}">json</span><span style="${"color: #BBBBBB"}">()</span></span>
<span class="${"line"}"><span style="${"color: #BBBBBB"}">		</span><span style="${"color: #FEDE5D"}">return</span><span style="${"color: #BBBBBB"}"> { </span><span style="${"color: #FF7EDB"}">posts</span><span style="${"color: #BBBBBB"}"> }</span></span>
<span class="${"line"}"><span style="${"color: #BBBBBB"}">	}</span></span>
<span class="${"line"}"><span style="${"color: #BBBBBB"}">}</span></span>
<span class="${"line"}"><span style="${"color: #FEDE5D"}">const</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF7EDB"}">code</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FFFFFFEE"}">=</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF8B39"}">&#39;yay!&#39;</span></span>
<span class="${"line"}"></span>
<span class="${"line"}"><span style="${"color: #FEDE5D"}">const</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF7EDB"}">code</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FFFFFFEE"}">=</span><span style="${"color: #BBBBBB"}"> </span><span style="${"color: #FF8B39"}">&#39;yay!&#39;</span></span></code></pre>
${validate_component(ReusableImage, "ReusableImage").$$render(
    $$result,
    {
      src: "/images/revue-subscribers-list-search.png",
      alt: "cool"
    },
    {},
    {}
  )}
<ul class="${"contains-task-list"}"><li class="${"task-list-item"}"><input type="${"checkbox"}" disabled> Do checkboxes worK?</li>
<li class="${"task-list-item"}"><input type="${"checkbox"}" checked disabled> Maybe?</li></ul>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: First,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
