import{_ as n,o as s,c as a,e as t}from"./app.8f60391b.js";const p={},o=t(`<h1 id="\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20</h1><h3 id="\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u77E5\u8BC6\u70B9</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">FormData</span>

<span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span><span class="token string">&#39;multipart/form-data&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//formdata\u7C7B\u578B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">upLoad</span> <span class="token operator">=</span> <span class="token punctuation">(</span>files<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FromData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  fromData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;upLoadFiles&quot;</span><span class="token punctuation">,</span> files<span class="token punctuation">.</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u4E3B\u8981\u6587\u4EF6</span>
  fromData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;xxxxx&quot;</span><span class="token punctuation">,</span> xxx<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5176\u4ED6\u53C2\u6570</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
axios
  <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/file/Upload&quot;</span><span class="token punctuation">,</span> formData<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;multipart/form-data&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> uid <span class="token operator">=</span> files<span class="token punctuation">.</span>file<span class="token punctuation">.</span>uid<span class="token punctuation">;</span>
    <span class="token keyword">const</span> currentFile <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>FileList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>uid <span class="token operator">===</span> uid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentFile <span class="token operator">&amp;&amp;</span> data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>fileNo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentFile<span class="token punctuation">.</span>fileNo <span class="token operator">=</span> data<span class="token punctuation">.</span>fileNo<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0A\u4F20\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fanally</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(i,l){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","fileUpload.html.vue"]]);export{r as default};
