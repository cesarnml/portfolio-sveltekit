import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  try {
    const postModule = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../markdown/posts/first/index.md": () => import("../../../../chunks/index4.js").then((n) => n._) }), `../../../../markdown/posts/${params.slug}/index.md`);
    if (!postModule || !postModule.metadata.published) {
      throw error(404, "Post not found");
    }
    const html = postModule.default.render().html;
    return {
      html,
      frontmatter: postModule.metadata
    };
  } catch (err) {
    throw error(428, "I am a teacup");
  }
};
export {
  load
};
