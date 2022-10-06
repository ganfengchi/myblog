import{_ as n,o as s,c as a,e as t}from"./app.8f60391b.js";const p={},e=t(`<h3 id="\u52A8\u6001\u6E32\u67D3\u8868\u5934" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u6E32\u67D3\u8868\u5934" aria-hidden="true">#</a> \u52A8\u6001\u6E32\u67D3\u8868\u5934</h3><p>\u5F53\u8868\u5934\u662F\u540E\u7AEF\u8FD4\u56DE\u7684\u6839\u636E\u4E0D\u540C\u7684\u53C2\u6570\u8FD4\u56DE\u4E0D\u540C\u7684\u8868\u5934\u65F6</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-table</span>
    <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.type===&#39;LIST&#39;<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>format(item.key)<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.value<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-table</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-row</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>itme.type ===&#39;MAP&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(childrenItem) in item.key<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>childrenItem.seq<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ childrenItem.paraName }}:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>
      <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ item.value[childrenItem.paraKey] }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-col</span>
    <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-row</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    axios
      <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/getData&quot;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u52A8\u6001\u6E32\u67D3  \u672A\u77E5\u548Cmap\u591A\u5C11\u4E2A\u5F53type \u4E3ALIST\u6E32\u67D3\u8868\u683C    \u4E3AMAP\u6E32\u67D3 key value \u5BF9\u5E94\u7684 key value \u6570\u636E</span>
      <span class="token comment">//\u8868\u5934\u4E0D\u56FA\u5B9A\u4E2A\u6570\u4E0E\u5B57\u6BB5</span>
      <span class="token comment">//\u5176\u4E2D  LIST \u548CMAP  \u91CC\u9762\u7684key value \u6240\u6709\u6570\u636E\u90FD\u90FD\u4E0D\u56FA\u5B9A\u6709\u591A\u5C11\u4E2A</span>
      <span class="token comment">// res.data \u6570\u636E\u7ED3\u6784</span>
      res<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u5E93&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;MAP&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">paraKey</span><span class="token operator">:</span> <span class="token string">&quot;DATA_01&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">paraName</span><span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E_01&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">seq</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">paraKey</span><span class="token operator">:</span> <span class="token string">&quot;DATA_02&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">paraName</span><span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E02&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">seq</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token constant">DATA_01</span><span class="token operator">:</span> <span class="token string">&quot;sadkasjdaskdjaskdjkasd&quot;</span><span class="token punctuation">,</span>
            <span class="token constant">DATA_02</span><span class="token operator">:</span> <span class="token string">&quot;SADASDADSASDASDASDASDASD&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u989D\u8D37\u6B3E-\u4E2A\u4EBA\u8BB0\u5F55&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;LIST&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">paraKey</span><span class="token operator">:</span> <span class="token string">&quot;DATE_TIME&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">paraName</span><span class="token operator">:</span> <span class="token string">&quot;\u65F6\u95F4&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">seq</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">paraKey</span><span class="token operator">:</span> <span class="token string">&quot;AMOUNT&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">paraName</span><span class="token operator">:</span> <span class="token string">&quot;\u91D1\u989D&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">seq</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token constant">DATE_TIME</span><span class="token operator">:</span> <span class="token string">&quot;20211101&quot;</span><span class="token punctuation">,</span>
              <span class="token constant">AMOUNT</span><span class="token operator">:</span> <span class="token string">&quot;575757858558&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token constant">DATE_TIME</span><span class="token operator">:</span> <span class="token string">&quot;20220811&quot;</span><span class="token punctuation">,</span>
              <span class="token constant">AMOUNT</span><span class="token operator">:</span> <span class="token string">&quot;1232324343434&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u4EBA\u5458\u5217\u8868&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;LIST&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">paraKey</span><span class="token operator">:</span> <span class="token string">&quot;NAME&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">paraName</span><span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">seq</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">paraKey</span><span class="token operator">:</span> <span class="token string">&quot;AGE&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">paraName</span><span class="token operator">:</span> <span class="token string">&quot;\u5E74\u9F84&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">seq</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">paraKey</span><span class="token operator">:</span> <span class="token string">&quot;HOBBIES&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">paraName</span><span class="token operator">:</span> <span class="token string">&quot;\u7231\u597D&quot;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">seq</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token constant">NAME</span><span class="token operator">:</span> <span class="token string">&quot;20211101&quot;</span><span class="token punctuation">,</span>
              <span class="token constant">AGE</span><span class="token operator">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span>
              <span class="token constant">HOBBIES</span><span class="token operator">:</span> <span class="token string">&quot;\u7BEE\u7403&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token constant">NAME</span><span class="token operator">:</span> <span class="token string">&quot;1323123123&quot;</span><span class="token punctuation">,</span>
              <span class="token constant">AGE</span><span class="token operator">:</span> <span class="token string">&quot;23&quot;</span><span class="token punctuation">,</span>
              <span class="token constant">HOBBIES</span><span class="token operator">:</span> <span class="token string">&quot;\u8DB3\u7403&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token constant">NAME</span><span class="token operator">:</span> <span class="token string">&quot;20211101&quot;</span><span class="token punctuation">,</span>
              <span class="token constant">AGE</span><span class="token operator">:</span> <span class="token string">&quot;56&quot;</span><span class="token punctuation">,</span>
              <span class="token constant">HOBBIES</span><span class="token operator">:</span> <span class="token string">&quot;\u8DD1\u6B65&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
        data <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">//\u9A9A\u64CD\u4F5C\u4E4B\u65B9\u6CD5\u7ED1\u5B9A\u5230\u53D8\u91CF\u4E0A</span>
  <span class="token keyword">const</span> <span class="token function-variable function">format</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> list <span class="token operator">=</span> data
    list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span>item<span class="token punctuation">.</span>paraName<span class="token punctuation">,</span>
        dataIndex\uFF1Aitem<span class="token punctuation">.</span>paraKey<span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span>item<span class="token punctuation">.</span>paraKey
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","reactiveRender.html.vue"]]);export{r as default};
