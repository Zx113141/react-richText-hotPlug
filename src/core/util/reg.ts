export const htmlRegExp = /^<([a-z]+)\s*((\w+)\s*=\s*("[^"]*"|'[^']*'))*\/?>.*(?:<\/\1>|)$/i


export const attributeRegExp = /(\w+)\s*=\s*("[^"]*"|'[^']*')/g
// 匹配HTML标签：/^<([a-z]+)\s*\/?>(?:<\/\1>|)$/i
// 该正则表达式可以匹配HTML标签，例如<div>或<img>。

// 匹配HTML标签属性：/(\w+)\s*=\s*("[^"]*"|'[^']*')/g
// 该正则表达式可以匹配HTML标签中的属性，例如class="example"或href='http://www.example.com'。

// 匹配CSS类名：/\.([a-z0-9_-]+)/i
// 该正则表达式可以匹配CSS类名，例如.example或.example-1。

// 匹配ID属性：/#([a-z0-9_-]+)/i
// 该正则表达式可以匹配HTML标签中的ID属性，例如<div id="example">。

// 匹配HTML注释：/<!--([\s\S]*?)-->/g
// 该正则表达式可以匹配HTML注释，例如<!-- This is a comment -->。

// 匹配CSS选择器：/([a-z0-9_-]*)#([a-z0-9_-]+)|([a-z0-9_-]*)\.([a-z0-9_-]+)|([a-z0-9_-]+)/ig
// 该正则表达式可以匹配CSS选择器，例如#example, .example, 或 div.example。

// 匹配URL：/(http|https|ftp):\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/gi
// 该正则表达式可以匹配URL，例如http://www.example.com或https://www.example.com/index.html。