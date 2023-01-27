import { c as create_ssr_component, e as escape, v as validate_component, h as each, d as add_attribute } from "../../chunks/index3.js";
import { U as Url } from "../../chunks/url.js";
const ReusableButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const onClick = () => {
    name = "You changed me!";
  };
  let name = "Hello world!";
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<button class="${"btn variant-filled-primary btn-base"}">${escape(name)}</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
<div>
	${validate_component(ReusableButton, "ReusableButton").$$render($$result, {}, {}, {})}</div>
<div><ul>${each(posts, (post) => {
    return `<li><a${add_attribute("href", Url.BlogDetail(post.slug), 0)}>${escape(post.title)}</a></li>`;
  })}</ul></div>`;
});
export {
  Page as default
};
