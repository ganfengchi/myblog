import{_ as n,o as s,c as a,e as t}from"./app.8f60391b.js";const p={},e=t(`<h2 id="\u6587\u4EF6\u6D41\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u6D41\u4E0B\u8F7D" aria-hidden="true">#</a> \u6587\u4EF6\u6D41\u4E0B\u8F7D</h2><div class="custom-container tip"><p class="custom-container-title"></p><p>\u4EC0\u4E48\u662F\u6587\u4EF6\u6D41<br> \u5F53\u6211\u4EEC\u524D\u7AEF\u4E0E\u540E\u7AEF\u4EA4\u4E92\u7684\u65F6\u5019 \u540E\u7AEF\u8FD4\u56DE\u6587\u4EF6\u6D41<br> \u5728\u54CD\u5E94\u5934 Response Headers\u4E2D Content-Type:application/octet-strean;charset=utf-8\u5C31\u662F\u6587\u4EF6\u6D41\u7684\u683C\u5F0F</p></div><h3 id="\u600E\u4E48\u5904\u7406\u6587\u4EF6\u6D41" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48\u5904\u7406\u6587\u4EF6\u6D41" aria-hidden="true">#</a> \u600E\u4E48\u5904\u7406\u6587\u4EF6\u6D41</h3><div class="custom-container tip"><p class="custom-container-title"></p><p>\u4E00\u822C\u6587\u4EF6\u6D41\u4F1A\u76F4\u63A5\u8FDB\u5165catch</p></div><h2 id="\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u77E5\u8BC6\u70B9</h2><div class="custom-container tip"><p class="custom-container-title"></p><p>new Blob()</p><p>blob\u5BF9\u8C61\u6807\u8BC6\u4E00\u4E2A\u4E0D\u53EF\u53D8\uFF0C\u539F\u751F\u6570\u636E\u7684\u7C7B\u578B\u6587\u4EF6\u5BF9\u8C61\uFF0C\u4ED6\u7684\u6570\u636E\u53EF\u4EE5\u6309\u6587\u672C\u6216\u8005\u5728\u4E8C\u8FDB\u5236\u7684\u683C\u5F0F\u8FDB\u884C\u8BFB\u53D6\uFF0C\u4E5F\u53EF\u4EE5\u8F6C\u6362\u6210ReadableStream\u6765\u7528\u4E8E\u6570\u636E\u64CD\u4F5C</p><p>new FlieRander</p><p>FlieRander\u5BF9\u8C61\u5141\u8BB8Web\u5E94\u7528\u7A0B\u5E8F\u5F02\u6B65\u53BB\u8BFB\u5B58\u50A8\u5728\u91D1\u9178\u5242\u4E0A\u7684\u6587\u4EF6(\u6216\u539F\u751F\u6570\u636E\u7F13\u51B2\u533A)\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528File\u6216Blob\u5BF9\u8C61\u6307\u5B9A\u8981\u8BFB\u53D6\u7684\u6587\u4EF6\u6216\u6570\u636E</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">fileDownload</span> <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span>params<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>params<span class="token punctuation">,</span><span class="token punctuation">{</span>
    responseTpye<span class="token operator">:</span><span class="token string">&#39;blob&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res<span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> blob <span class="token operator">=</span> nwe <span class="token function">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>window<span class="token punctuation">.</span>ActiveXObject <span class="token operator">||</span><span class="token string">&#39;ActiveXObject&#39;</span> <span class="token keyword">in</span> window <span class="token punctuation">)</span><span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span><span class="token function">msSavaBlob</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span>fileName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> DownloadElement<span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> href<span class="token operator">=</span>window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
        DownloadElement<span class="token punctuation">.</span>href<span class="token operator">=</span>href
        DownloadElement<span class="token punctuation">.</span>download<span class="token operator">=</span>fileName
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChile</span><span class="token punctuation">(</span>DownloadElement<span class="token punctuation">)</span>
        DownloadElement<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>err<span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>type<span class="token operator">===</span><span class="token string">&#39;application/json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> reader<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span>  res <span class="token operator">=</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>reslut<span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>code<span class="token operator">&amp;&amp;</span>res<span class="token punctuation">.</span>code<span class="token operator">===</span><span class="token string">&#39;9999&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>$message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        reader<span class="token punctuation">.</span><span class="token function">readAsText</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
         <span class="token keyword">const</span> blob <span class="token operator">=</span> nwe <span class="token function">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>res<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>window<span class="token punctuation">.</span>ActiveXObject <span class="token operator">||</span><span class="token string">&#39;ActiveXObject&#39;</span> <span class="token keyword">in</span> window <span class="token punctuation">)</span><span class="token punctuation">{</span>
            window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span><span class="token function">msSavaBlob</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span>fileName<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> DownloadElement<span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">let</span> href<span class="token operator">=</span>window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span>
            DownloadElement<span class="token punctuation">.</span>href<span class="token operator">=</span>href
            DownloadElement<span class="token punctuation">.</span>download<span class="token operator">=</span>fileName
            document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChile</span><span class="token punctuation">(</span>DownloadElement<span class="token punctuation">)</span>
            DownloadElement<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","fileDownload.html.vue"]]);export{k as default};
