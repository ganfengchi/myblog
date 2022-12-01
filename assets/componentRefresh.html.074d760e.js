import{_ as n,o as s,c as a,b as e}from"./app.831fd069.js";const t={},p=e(`<h1 id="vue-\u7EC4\u4EF6\u5237\u65B0" tabindex="-1"><a class="header-anchor" href="#vue-\u7EC4\u4EF6\u5237\u65B0" aria-hidden="true">#</a> vue \u7EC4\u4EF6\u5237\u65B0</h1><p>\u5F53\u6211\u4EEC\u5C01\u88C5\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6 \u4F8B\u5982 tabs \u5F53\u5207\u6362 tabs \u65F6 content \u5BB9\u5668\u91CC\u9762\u7684\u7EC4\u4EF6</p><p>\u56E0\u4E3A\u6709 keep-alive \u7F13\u5B58\u7EC4\u4EF6\u4E0D\u9500\u6BC1 \uFF0C\u5207\u6362 tabs \u65F6\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C\u4F46\u662F content \u91CC\u9762\u7684\u5B50\u7EC4\u4EF6\u5185\u5BB9\u5E76\u6CA1\u6709\u66F4\u65B0</p><p>\u8FD9\u65F6\u5019\u5C31\u8981\u53BB\u60F3\u65B9\u6CD5\u6BCF\u6B21\u70B9 tab \u9500\u6BC1\u7EC4\u4EF6\u518D\u52A0\u8F7D \u5B50\u7EC4\u4EF6</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>temlate</span><span class="token punctuation">&gt;</span></span> \u6211\u662F\u5B50\u7EC4\u4EF6 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>temlate</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>temlate<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>tabs  @click<span class="token operator">=</span><span class="token string">&#39;selectTab&#39;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>content v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&#39;!isRefresh&#39;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>temlate<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">isRefresh</span><span class="token operator">:</span><span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token function">selectTab</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// \u67D0\u4E9B\u64CD\u4F5C</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>isRefresh <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>isRefresh <span class="token operator">=</span> <span class="token boolean">false</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(l,i){return s(),a("div",null,o)}var u=n(t,[["render",c],["__file","componentRefresh.html.vue"]]);export{u as default};