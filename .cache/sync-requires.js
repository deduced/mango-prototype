const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/charlieastrada/Sites/mango-prototype/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/charlieastrada/Sites/mango-prototype/src/pages/about.js"))),
  "component---src-pages-contact-mdx": hot(preferDefault(require("/Users/charlieastrada/Sites/mango-prototype/src/pages/contact.mdx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/charlieastrada/Sites/mango-prototype/src/pages/index.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/charlieastrada/Sites/mango-prototype/src/templates/post.js")))
}

