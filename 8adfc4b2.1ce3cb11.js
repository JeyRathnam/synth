(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(142)),c=["components"],l={title:"Hello world"},i={unversionedId:"getting_started/hello-world",id:"getting_started/hello-world",isDocsHomePage:!1,title:"Hello world",description:"After installing synth, the next step is to create a namespace.",source:"@site/docs/getting_started/hello-world.md",slug:"/getting_started/hello-world",permalink:"/synth/getting_started/hello-world",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/getting_started/hello-world.md",version:"current",sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/synth/getting_started/installation"},next:{title:"Core concepts",permalink:"/synth/getting_started/core-concepts"}},s=[{value:"Where to go from here",id:"where-to-go-from-here",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After installing ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth")),", the next step is to create a ",Object(o.b)("strong",{parentName:"p"},"namespace"),". "),Object(o.b)("p",null,"Namespaces are directories in your filesystem that ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," uses to read your schemas from. Currently ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," reads schemas written in a specialized JSON data model. You can find out everything there is to know about ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," schemas in the ",Object(o.b)("a",{parentName:"p",href:"/synth/content/object"},"Generators")," section or in the ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/schema"},"Schema"),' section. In this section we will show you how to set up a simple "hello world" data generator.'),Object(o.b)("p",null,"To create a namespace, just create a new directory:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir hello_synth\n")),Object(o.b)("p",null,"Finally, we need to add a ",Object(o.b)("strong",{parentName:"p"},"collection"),' to our namespace. Collections describe\nthe "shape" of the data we want to generate. They are individual JSON files\nwithin a namespace directory written according to\nthe ',Object(o.b)("a",{parentName:"p",href:"/synth/content/object"},Object(o.b)("inlineCode",{parentName:"a"},"synth")," schema"),"."),Object(o.b)("p",null,'To create a collection called "say_hello" in our namespace, simply copy/paste the content of the following example in a file\nat ',Object(o.b)("inlineCode",{parentName:"p"},"hello_synth/say_hello.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "subtype": "u64",\n        "constant": 1\n    },\n   "content": {\n        "type": "string",\n        "pattern": "Hello world!"\n    }\n}\n')),Object(o.b)("p",null,"The previous example snippet is an example of\na ",Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/schema"},Object(o.b)("inlineCode",{parentName:"a"},"synth")," schema"),'. All such examples in these pages\nare tagged with a "',Object(o.b)("strong",{parentName:"p"},"Run"),'"\nbutton that lets you preview how ',Object(o.b)("a",{parentName:"p",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," would output the corresponding\ndata."),Object(o.b)("p",null,"Finally, run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"synth generate hello_synth/\n")),Object(o.b)("p",null,"and you should see an output very close to the output of the snippet."),Object(o.b)("h2",{id:"where-to-go-from-here"},"Where to go from here"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Take a look at the exhaustive ",Object(o.b)("a",{parentName:"li",href:"/synth/content/object"},"generators reference"),"."),Object(o.b)("li",{parentName:"ul"},"Go deeper into how ",Object(o.b)("a",{parentName:"li",href:"/synth/getting_started/command-line"},Object(o.b)("inlineCode",{parentName:"a"},"synth"))," works by looking at the ",Object(o.b)("a",{parentName:"li",href:"/synth/getting_started/core-concepts"},"core concepts")," and the specifications of the ",Object(o.b)("a",{parentName:"li",href:"/synth/getting_started/schema"},"schema"),"."),Object(o.b)("li",{parentName:"ul"},"For more complex real life examples, see the ",Object(o.b)("a",{parentName:"li",href:"/synth/examples/bank"},"examples")," section.")))}b.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(c,".").concat(m)]||b[m]||h[m]||o;return n?r.a.createElement(u,l(l({ref:t},s),{},{components:n})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);