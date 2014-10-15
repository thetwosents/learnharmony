export var page = {
    "title": "Tagged Template Strings",
    "navGroup": ".lessons",
    "heading": "Template Strings (tags)",
    "code": "function uc(strings, ...values) {\n    let result = '';\n    for(let string of strings) {\n        result += string;\n        result += (values.shift() || '').toUpperCase();\n    }\n\n    return result;\n}\n\nlet processed = uc`First: ${'abc'} Second: ${'def'}`;\nconsole.log(processed);",
    "intro": "<p>You can have some control over how template strings get stitched together.  If you &quot;tag&quot; a template string, the strings and evaluated values get passed into a function of the same name.  Here is an example of a template string tag that stitches the string together but causes the values to be upper case.</p>\n<pre><code class=\"lang-javascript\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">uc</span><span class=\"hljs-params\">(strings, ...values)</span> </span>{\n  <span class=\"hljs-keyword\">let</span> result = <span class=\"hljs-string\">''</span>;\n  <span class=\"hljs-keyword\">for</span>(<span class=\"hljs-keyword\">let</span> string of strings) {\n    result += string;\n    result += (values.shift() || <span class=\"hljs-string\">''</span>).toUpperCase();\n  }\n\n  <span class=\"hljs-keyword\">return</span> result;\n}\n\n<span class=\"hljs-keyword\">let</span> processed = uc`First: ${<span class=\"hljs-string\">'abc'</span>} Second: ${<span class=\"hljs-string\">'def'</span>}`;\n</code></pre>\n<p>You can expect JavaScript libraries of the future using tags to aid with internationalization, string formatters, HTML templates, and HTTP generators.</p>\n"
};