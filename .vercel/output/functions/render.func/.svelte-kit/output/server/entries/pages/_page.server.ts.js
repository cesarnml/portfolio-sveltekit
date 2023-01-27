import { _ as __vite_glob_0_0 } from "../../chunks/index4.js";
import { basename, dirname } from "path";
const MAX_POSTS = 10;
const load = async () => {
  const modules = /* @__PURE__ */ Object.assign({ "/markdown/posts/first/index.md": __vite_glob_0_0 });
  const posts = Object.entries(modules).map(([path, svxModule]) => {
    const slug = basename(dirname(path));
    const html = svxModule.default.render().html;
    const metadata = svxModule.metadata;
    return { slug, html, ...metadata };
  });
  const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS);
  publishedPosts.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1);
  return { posts: publishedPosts };
};
export {
  load
};
