import{_ as n,o as s,c as a,e as t}from"./app.d3ffe916.js";const p={},e=t(`<h3 id="\u4EC0\u4E48\u662F-async-await" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-async-await" aria-hidden="true">#</a> \u4EC0\u4E48\u662F async/await</h3><p>async/await \u662F\u5F02\u6B65\u4EE3\u7801\u7684\u65B0\u65B9\u5F0F\uFF0C\u4EE5\u524D\u7684\u65B9\u6CD5\u6709\u56DE\u8C03\u51FD\u6570\u548C Promise\u3002<br> async/await \u662F\u57FA\u4E8E Promise \u5B9E\u73B0\u7684\uFF0C\u5B83\u4E0D\u80FD\u7528\u4E8E\u666E\u901A\u7684\u56DE\u586B\u51FD\u6570\u3002<br> async/await \u4E0E Promise \u4E00\u6837\uFF0C\u662F\u975E\u963B\u585E\u7684\u3002<br> async/await \u4F7F\u5F97\u5F02\u6B65\u4EE3\u7801\u770B\u8D77\u6765\u50CF\u540C\u6B65\u4EE3\u7801\uFF0C\u8FD9\u6B63\u662F\u5B83\u7684\u9B54\u529B\u6240\u5728\u4E4B\u5904\u3002<br></p><h3 id="\u4EC0\u4E48\u662F-promise" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-promise" aria-hidden="true">#</a> \u4EC0\u4E48\u662F Promise</h3><p>Promise \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u548C\u51FD\u6570\u7684\u533A\u522B\u5C31\u662F\u5BF9\u8C61\u53EF\u4EE5\u4FDD\u5B58\u72B6\u6001\uFF0C\u51FD\u6570\u4E0D\u53EF\u4EE5\uFF08\u95ED\u5305\u9664\u5916\uFF09<br> \u5E76\u672A\u5265\u593A\u51FD\u6570 return \u7684\u80FD\u529B\uFF0C\u56E0\u6B64\u65E0\u9700\u5C42\u5C42\u4F20\u9012 callback\uFF0C\u8FDB\u884C\u56DE\u8C03\u83B7\u53D6\u6570\u636E<br> \u4EE3\u7801\u98CE\u683C\uFF0C\u5BB9\u6613\u7406\u89E3\uFF0C\u4FBF\u4E8E\u7EF4\u62A4<br> \u591A\u4E2A\u5F02\u6B65\u7B49\u5F85\u5408\u5E76\u4FBF\u4E8E\u89E3\u51B3<br> Promise \u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u81EA\u5DF1\u8EAB\u4E0A\u6709 all\u3001reject\u3001resolve \u8FD9\u51E0\u4E2A\u773C\u719F\u7684\u65B9\u6CD5\uFF0C\u539F\u578B\u4E0A\u6709 then\u3001catch \u7B49\u540C\u6837\u5F88\u773C\u719F\u7684\u65B9\u6CD5\u3002<br></p><h3 id="async-await-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#async-await-\u8BED\u6CD5" aria-hidden="true">#</a> async/await \u8BED\u6CD5</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4F7F\u7528Promise</span>
<span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//promise</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528Async</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> getJSON<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u533A\u522B" aria-hidden="true">#</a> \u533A\u522B</h3><p>\u51FD\u6570\u524D\u9762\u591A\u4E86\u4E00\u4E2A async \u5173\u952E\u5B57\u3002await \u5173\u952E\u5B57\u53EA\u80FD\u7528\u4E8E async \u5B9A\u4E8E\u7684\u51FD\u6570\u5185\u3002async \u51FD\u6570\u4F1A\u9690\u5F0F\u5730\u8FD4\u56DE\u4E00\u4E2A Promise,\u8BE5 promise \u7684 resolve \u503C\u5C31\u662F return \u7684\u503C\u3002\u793A\u4F8B\u4E2D resolve \u7684\u503C\u5C31\u662F\u5B57\u7B26\u4E32&quot;aaa&quot;<br> await \u7684\u662F\u6709\u4F7F\u7528\u9650\u5236\u7684\uFF0Cawait \u5173\u952E\u5B57\u53EA\u80FD\u7528\u4E8E async \u5B9A\u4E8E\u7684\u51FD\u6570\u5185\uFF0C\u5982\u679C\u672A\u4F7F\u7528 async \u800C\u76F4\u63A5\u4F7F\u7528 await \u5C31\u4F1A\u629B SyntaxError\u3002)<br></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//\u4E0D\u5141\u8BB8\u51FA\u73B0\u672A\u4F7F\u7528async\u5173\u952E\u5B57\u7684\u51FD\u6570\u4E2D</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">syncFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">syncFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">syncFn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">syncFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E3A\u4EC0\u4E48-async-await-\u66F4\u597D" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-async-await-\u66F4\u597D" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48 async/await \u66F4\u597D\uFF1F</h3><p>\u4F7F\u7528 async \u51FD\u6570\u53EF\u4EE5\u8BA9\u4EE3\u7801\u7B80\u6D01\u5F88\u591A\uFF0C\u4E0D\u9700\u8981\u60F3 Promise \u4E00\u6837\u9700\u8981 then,\u4E0D\u9700\u8981\u5199\u533F\u540D\u51FD\u6570\u5904\u7406 Promise \u7684 resolve \u7684\u503C\uFF0C\u4E5F\u4E0D\u9700\u8981\u5B9A\u4E49\u591A\u4F59\u7684 data \u53D8\u91CF\uFF0C\u8FD8\u907F\u514D\u4E86\u5D4C\u5957\u4EE3\u7801\u3002<br> async/await \u8BA9 try/catch \u53EF\u4EE5\u540C\u65F6\u5904\u7406\u540C\u6B65\u548C\u5F02\u6B65\u7684\u9519\u8BEF\u3002\u5728\u4E0B\u9762\u7684\u793A\u4F8B\u4E2D\uFF0Ctry/catch \u4E0D\u80FD\u5904\u7406 JSON.parse \u7684\u9519\u8BEF\uFF0C\u56E0\u4E3A\u5B83\u5728 Promise \u4E2D,\u6211\u4EEC\u9700\u8981\u4F7F\u7528.catch,\u8FD9\u6837\u7684\u9519\u8BEF\u4F1A\u663E\u5F97\u4EE3\u7801\u975E\u5E38\u7684\u5197\u4F59\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">makeRequest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
  	<span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>result <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// JSON.parse\u53EF\u80FD\u4F1A\u51FA\u9519</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token comment">// \u53D6\u6D88\u6CE8\u91CA\uFF0C\u5904\u7406\u5F02\u6B65\u4EE3\u7801\u7684\u9519\u8BEF</span>
   <span class="token comment">// .catch((err) =&gt; {</span>
   <span class="token comment">//   console.log(err)</span>
   <span class="token comment">// })</span>
   <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 async/await \u7684\u8BDD\uFF0Ccatch \u80FD\u5904\u7406 JSON.parse \u9519\u8BEF</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">makeRequest</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// this parse may fail</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[e];function o(i,l){return s(),a("div",null,c)}var r=n(p,[["render",o],["__file","promiseAndAsyncAwait.html.vue"]]);export{r as default};
