import{_ as n,o as s,c as a,b as e}from"./app.212ddfa9.js";const t={},o=e(`<h1 id="rollup-\u6784\u5EFA-ts-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#rollup-\u6784\u5EFA-ts-\u9879\u76EE" aria-hidden="true">#</a> rollup \u6784\u5EFA TS \u9879\u76EE</h1><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h3><ol><li><p>\u5168\u5C40\u5B89\u88C5 rollup npm install rollup-g</p></li><li><p>\u5B89\u88C5 TypeScript npm install typescript -D</p></li><li><p>\u5B89\u88C5 TypeScript \u8F6C\u6362\u5668 npm install rollup-plugin-typescript2 -D</p></li><li><p>\u5B89\u88C5\u4EE3\u7801\u538B\u7F29\u63D2\u4EF6 npm install rollup-plugin-terser -D</p></li><li><p>\u5B89\u88C5 rollupweb \u670D\u52A1 npm install rollup-plugin-serve -D</p></li><li><p>\u5B89\u88C5\u70ED\u66F4\u65B0 npm install rollup-plugin-livereload -D</p></li><li><p>\u5F15\u5165\u5916\u90E8\u4F9D\u8D56 npm install rollup-plugin-node-resolve -D</p></li><li><p>\u5B89\u88C5\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u7528\u6765\u533A\u5206\u672C\u5730\u548C\u751F\u4EA7 npm install cross-env -D</p></li><li><p>\u66FF\u6362\u73AF\u5883\u53D8\u91CF\u7ED9\u6D4F\u89C8\u5668\u4F7F\u7528 npm install rollup-plugin-replace -D</p></li></ol><h3 id="\u914D\u7F6E-json-\u6587\u4EF6-package-json" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-json-\u6587\u4EF6-package-json" aria-hidden="true">#</a> \u914D\u7F6E json \u6587\u4EF6 package.json</h3><p>npm init -y</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollupTs&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development  rollup -c -w&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=produaction  rollup -c&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;cross-env&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.0.3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-livereload&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-node-resolve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-replace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-terser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.0.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-typescript2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.31.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.5.5&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E-rollup-\u6587\u4EF6-rollup-config-js" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-rollup-\u6587\u4EF6-rollup-config-js" aria-hidden="true">#</a> \u914D\u7F6E rollup \u6587\u4EF6 rollup.config.js</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ts <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-typescript2&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> serve <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-serve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> livereload <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-livereload&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> terser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-terser&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> repacle <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-replace&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">isDev</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;./src/main.ts&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./lib/index.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;umd&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">ts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">terser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token function">isDev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">repacle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token string-property property">&quot;p<wbr>rocess.env.NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">isDev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">livereload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">isDev</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      <span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">openPage</span><span class="token operator">:</span> <span class="token string">&quot;/public/index.html&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E-tsconfig-json-tsc-init-\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-tsconfig-json-tsc-init-\u751F\u6210" aria-hidden="true">#</a> \u914D\u7F6E tsconfig.json tsc --init \u751F\u6210</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>

<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* Visit https://aka.ms/tsconfig.json to read more about this file */</span>

    <span class="token comment">/* Projects */</span>
    <span class="token comment">// &quot;incremental&quot;: true,                              /* Enable incremental compilation */</span>
    <span class="token comment">// &quot;composite&quot;: true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */</span>
    <span class="token comment">// &quot;tsBuildInfoFile&quot;: &quot;./&quot;,                          /* Specify the folder for .tsbuildinfo incremental compilation files. */</span>
    <span class="token comment">// &quot;disableSourceOfProjectReferenceRedirect&quot;: true,  /* Disable preferring source files instead of declaration files when referencing composite projects */</span>
    <span class="token comment">// &quot;disableSolutionSearching&quot;: true,                 /* Opt a project out of multi-project reference checking when editing. */</span>
    <span class="token comment">// &quot;disableReferencedProjectLoad&quot;: true,             /* Reduce the number of projects loaded automatically by TypeScript. */</span>

    <span class="token comment">/* Language and Environment */</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>                                  <span class="token comment">/* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */</span>
    <span class="token comment">// &quot;lib&quot;: [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */</span>
    <span class="token comment">// &quot;jsx&quot;: &quot;preserve&quot;,                                /* Specify what JSX code is generated. */</span>
    <span class="token comment">// &quot;experimentalDecorators&quot;: true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */</span>
    <span class="token comment">// &quot;emitDecoratorMetadata&quot;: true,                    /* Emit design-type metadata for decorated declarations in source files. */</span>
    <span class="token comment">// &quot;jsxFactory&quot;: &quot;&quot;,                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. &#39;React.createElement&#39; or &#39;h&#39; */</span>
    <span class="token comment">// &quot;jsxFragmentFactory&quot;: &quot;&quot;,                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. &#39;React.Fragment&#39; or &#39;Fragment&#39;. */</span>
    <span class="token comment">// &quot;jsxImportSource&quot;: &quot;&quot;,                            /* Specify module specifier used to import the JSX factory functions when using \`jsx: react-jsx*\`.\` */</span>
    <span class="token comment">// &quot;reactNamespace&quot;: &quot;&quot;,                             /* Specify the object invoked for \`createElement\`. This only applies when targeting \`react\` JSX emit. */</span>
    <span class="token comment">// &quot;noLib&quot;: true,                                    /* Disable including any library files, including the default lib.d.ts. */</span>
    <span class="token comment">// &quot;useDefineForClassFields&quot;: true,                  /* Emit ECMAScript-standard-compliant class fields. */</span>

    <span class="token comment">/* Modules */</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>                                <span class="token comment">/* Specify what module code is generated. */</span>
    <span class="token comment">// &quot;rootDir&quot;: &quot;./&quot;,                                  /* Specify the root folder within your source files. */</span>
    <span class="token comment">// &quot;moduleResolution&quot;: &quot;node&quot;,                       /* Specify how TypeScript looks up a file from a given module specifier. */</span>
    <span class="token comment">// &quot;baseUrl&quot;: &quot;./&quot;,                                  /* Specify the base directory to resolve non-relative module names. */</span>
    <span class="token comment">// &quot;paths&quot;: {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */</span>
    <span class="token comment">// &quot;rootDirs&quot;: [],                                   /* Allow multiple folders to be treated as one when resolving modules. */</span>
    <span class="token comment">// &quot;typeRoots&quot;: [],                                  /* Specify multiple folders that act like \`./node_modules/@types\`. */</span>
    <span class="token comment">// &quot;types&quot;: [],                                      /* Specify type package names to be included without being referenced in a source file. */</span>
    <span class="token comment">// &quot;allowUmdGlobalAccess&quot;: true,                     /* Allow accessing UMD globals from modules. */</span>
    <span class="token comment">// &quot;resolveJsonModule&quot;: true,                        /* Enable importing .json files */</span>
    <span class="token comment">// &quot;noResolve&quot;: true,                                /* Disallow \`import\`s, \`require\`s or \`&lt;reference&gt;\`s from expanding the number of files TypeScript should add to a project. */</span>

    <span class="token comment">/* JavaScript Support */</span>
    <span class="token comment">// &quot;allowJs&quot;: true,                                  /* Allow JavaScript files to be a part of your program. Use the \`checkJS\` option to get errors from these files. */</span>
    <span class="token comment">// &quot;checkJs&quot;: true,                                  /* Enable error reporting in type-checked JavaScript files. */</span>
    <span class="token comment">// &quot;maxNodeModuleJsDepth&quot;: 1,                        /* Specify the maximum folder depth used for checking JavaScript files from \`node_modules\`. Only applicable with \`allowJs\`. */</span>

    <span class="token comment">/* Emit */</span>
    <span class="token comment">// &quot;declaration&quot;: true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */</span>
    <span class="token comment">// &quot;declarationMap&quot;: true,                           /* Create sourcemaps for d.ts files. */</span>
    <span class="token comment">// &quot;emitDeclarationOnly&quot;: true,                      /* Only output d.ts files and not JavaScript files. */</span>
      <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                                <span class="token comment">/* Create source map files for emitted JavaScript files. */</span>
    <span class="token comment">// &quot;outFile&quot;: &quot;./&quot;,                                  /* Specify a file that bundles all outputs into one JavaScript file. If \`declaration\` is true, also designates a file that bundles all .d.ts output. */</span>
    <span class="token comment">// &quot;outDir&quot;: &quot;./&quot;,                                   /* Specify an output folder for all emitted files. */</span>
    <span class="token comment">// &quot;removeComments&quot;: true,                           /* Disable emitting comments. */</span>
    <span class="token comment">// &quot;noEmit&quot;: true,                                   /* Disable emitting files from a compilation. */</span>
    <span class="token comment">// &quot;importHelpers&quot;: true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */</span>
    <span class="token comment">// &quot;importsNotUsedAsValues&quot;: &quot;remove&quot;,               /* Specify emit/checking behavior for imports that are only used for types */</span>
    <span class="token comment">// &quot;downlevelIteration&quot;: true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */</span>
    <span class="token comment">// &quot;sourceRoot&quot;: &quot;&quot;,                                 /* Specify the root path for debuggers to find the reference source code. */</span>
    <span class="token comment">// &quot;mapRoot&quot;: &quot;&quot;,                                    /* Specify the location where debugger should locate map files instead of generated locations. */</span>
    <span class="token comment">// &quot;inlineSourceMap&quot;: true,                          /* Include sourcemap files inside the emitted JavaScript. */</span>
    <span class="token comment">// &quot;inlineSources&quot;: true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */</span>
    <span class="token comment">// &quot;emitBOM&quot;: true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */</span>
    <span class="token comment">// &quot;newLine&quot;: &quot;crlf&quot;,                                /* Set the newline character for emitting files. */</span>
    <span class="token comment">// &quot;stripInternal&quot;: true,                            /* Disable emitting declarations that have \`@internal\` in their JSDoc comments. */</span>
    <span class="token comment">// &quot;noEmitHelpers&quot;: true,                            /* Disable generating custom helper functions like \`__extends\` in compiled output. */</span>
    <span class="token comment">// &quot;noEmitOnError&quot;: true,                            /* Disable emitting files if any type checking errors are reported. */</span>
    <span class="token comment">// &quot;preserveConstEnums&quot;: true,                       /* Disable erasing \`const enum\` declarations in generated code. */</span>
    <span class="token comment">// &quot;declarationDir&quot;: &quot;./&quot;,                           /* Specify the output directory for generated declaration files. */</span>
    <span class="token comment">// &quot;preserveValueImports&quot;: true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */</span>

    <span class="token comment">/* Interop Constraints */</span>
    <span class="token comment">// &quot;isolatedModules&quot;: true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */</span>
    <span class="token comment">// &quot;allowSyntheticDefaultImports&quot;: true,             /* Allow &#39;import x from y&#39; when a module doesn&#39;t have a default export. */</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                             <span class="token comment">/* Emit additional JavaScript to ease support for importing CommonJS modules. This enables \`allowSyntheticDefaultImports\` for type compatibility. */</span>
    <span class="token comment">// &quot;preserveSymlinks&quot;: true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */</span>
    <span class="token property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>            <span class="token comment">/* Ensure that casing is correct in imports. */</span>
    <span class="token comment">/* Type Checking */</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                                      <span class="token comment">/* Enable all strict type-checking options. */</span>
    <span class="token comment">// &quot;noImplicitAny&quot;: true,                            /* Enable error reporting for expressions and declarations with an implied \`any\` type.. */</span>
    <span class="token comment">// &quot;strictNullChecks&quot;: true,                         /* When type checking, take into account \`null\` and \`undefined\`. */</span>
    <span class="token comment">// &quot;strictFunctionTypes&quot;: true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */</span>
    <span class="token comment">// &quot;strictBindCallApply&quot;: true,                      /* Check that the arguments for \`bind\`, \`call\`, and \`apply\` methods match the original function. */</span>
    <span class="token comment">// &quot;strictPropertyInitialization&quot;: true,             /* Check for class properties that are declared but not set in the constructor. */</span>
    <span class="token comment">// &quot;noImplicitThis&quot;: true,                           /* Enable error reporting when \`this\` is given the type \`any\`. */</span>
    <span class="token comment">// &quot;useUnknownInCatchVariables&quot;: true,               /* Type catch clause variables as &#39;unknown&#39; instead of &#39;any&#39;. */</span>
    <span class="token comment">// &quot;alwaysStrict&quot;: true,                             /* Ensure &#39;use strict&#39; is always emitted. */</span>
    <span class="token comment">// &quot;noUnusedLocals&quot;: true,                           /* Enable error reporting when a local variables aren&#39;t read. */</span>
    <span class="token comment">// &quot;noUnusedParameters&quot;: true,                       /* Raise an error when a function parameter isn&#39;t read */</span>
    <span class="token comment">// &quot;exactOptionalPropertyTypes&quot;: true,               /* Interpret optional property types as written, rather than adding &#39;undefined&#39;. */</span>
    <span class="token comment">// &quot;noImplicitReturns&quot;: true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */</span>
    <span class="token comment">// &quot;noFallthroughCasesInSwitch&quot;: true,               /* Enable error reporting for fallthrough cases in switch statements. */</span>
    <span class="token comment">// &quot;noUncheckedIndexedAccess&quot;: true,                 /* Include &#39;undefined&#39; in index signature results */</span>
    <span class="token comment">// &quot;noImplicitOverride&quot;: true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */</span>
    <span class="token comment">// &quot;noPropertyAccessFromIndexSignature&quot;: true,       /* Enforces using indexed accessors for keys declared using an indexed type */</span>
    <span class="token comment">// &quot;allowUnusedLabels&quot;: true,                        /* Disable error reporting for unused labels. */</span>
    <span class="token comment">// &quot;allowUnreachableCode&quot;: true,                     /* Disable error reporting for unreachable code. */</span>
    <span class="token comment">/* Completeness */</span>
    <span class="token comment">// &quot;skipDefaultLibCheck&quot;: true,                      /* Skip type checking .d.ts files that are included with TypeScript. */</span>
    <span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>                                 <span class="token comment">/* Skip type checking all .d.ts files. */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm run dev \u542F\u52A8\u5C31\u53EF\u4EE5\u5C3D\u60C5\u7684\u73A9\u800D\u4E86</p>`,11),p=[o];function i(l,c){return s(),a("div",null,p)}var u=n(t,[["render",i],["__file","rollup.html.vue"]]);export{u as default};
