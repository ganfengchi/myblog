import{_ as n,o as s,c as a,b as t}from"./app.45bd6076.js";const e={},p=t(`<h1 id="\u624B\u52A8\u5B9E\u73B0\u4E00\u4E2Aoutside" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u5B9E\u73B0\u4E00\u4E2Aoutside" aria-hidden="true">#</a> \u624B\u52A8\u5B9E\u73B0\u4E00\u4E2Aoutside</h1><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>outside<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#outside</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">var</span> oout<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;outside&#39;</span><span class="token punctuation">)</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>oout<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        oout<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background<span class="token operator">=</span><span class="token string">&#39;blue&#39;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        oout<span class="token punctuation">.</span>style<span class="token punctuation">.</span>background<span class="token operator">=</span><span class="token string">&#39;blue&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(e,[["render",c],["__file","outside.html.vue"]]);export{d as default};