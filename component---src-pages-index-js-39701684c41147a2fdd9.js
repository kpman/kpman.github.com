webpackJsonp([35783957827783],{24:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(2),l=n(a),o=r(13),u=n(o),s=r(33),c=n(s),f=r(32),d=n(f),i=r(34),p=n(i),m=function(e){var t=e.slug,r=e.html,n=e.date,o=e.title,s=e.tags,f=e.disqusShortname,i=e.readmore;return l.default.createElement(a.Fragment,null,l.default.createElement("article",{id:o,className:"post"},l.default.createElement(d.default,{slug:t,date:n}),l.default.createElement(c.default,{slug:t,title:o}),l.default.createElement("div",{className:"entry-content"},l.default.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:i?r.split("<!-- more -->")[0]:r}}),i?l.default.createElement("p",{className:"article-more-link"},l.default.createElement(u.default,{to:t+"#more"},"Read More"),l.default.createElement("p",null,f)):null),l.default.createElement(p.default,{tags:s}),l.default.createElement("hr",{className:"article-devider"})))};t.default=m,e.exports=t.default},138:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=r(2),s=n(u),c=r(24),f=n(c),d=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return this.props.errors&&this.props.errors.length?(this.props.errors.forEach(function(e){var t=e.message;console.error("BlogIndex render errr: "+t)}),s.default.createElement("h1",null,"Errors found: Check the console for details")):s.default.createElement("div",null,this.props.data.allMarkdownRemark.edges.map(function(e){var t=e.node;return s.default.createElement(f.default,{slug:t.fields.slug,html:t.html,title:t.frontmatter.title,date:t.frontmatter.date,tags:t.frontmatter.tags,key:t.fields.slug,readmore:!0})}))},t}(u.Component);t.default=d;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-39701684c41147a2fdd9.js.map