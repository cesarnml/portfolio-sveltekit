import { c as create_ssr_component, o as onDestroy, e as escape, h as each, d as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
import "iconify-icon";
import "../../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
const cLabel = "p-4 pt-0";
const cListItem = "px-4 py-2 cursor-pointer";
function setHeadingClasses(headingElem) {
  if (headingElem.tagName === "H3")
    return "ml-3";
  if (headingElem.tagName === "H4")
    return "ml-6";
  if (headingElem.tagName === "H5")
    return "ml-9";
  if (headingElem.tagName === "H6")
    return "ml-12";
  return "";
}
const TableOfContents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesLabel;
  let classesList;
  let classesListItem;
  let { scrollParent = "#page" } = $$props;
  let { target = "#page" } = $$props;
  let { allowedHeadings = "h2, h3" } = $$props;
  let { label = "On This Page" } = $$props;
  let { width = "w-[240px]" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { text = "text-surface-600-300-token" } = $$props;
  let { hover = "hover:bg-primary-hover-token" } = $$props;
  let { active = "bg-primary-active-token !text-on-primary-token" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { regionLabel = "font-bold" } = $$props;
  let { regionList = "list-none" } = $$props;
  let filteredHeadingsList = [];
  let activeHeaderId;
  onDestroy(() => {
  });
  if ($$props.scrollParent === void 0 && $$bindings.scrollParent && scrollParent !== void 0)
    $$bindings.scrollParent(scrollParent);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.allowedHeadings === void 0 && $$bindings.allowedHeadings && allowedHeadings !== void 0)
    $$bindings.allowedHeadings(allowedHeadings);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.regionLabel === void 0 && $$bindings.regionLabel && regionLabel !== void 0)
    $$bindings.regionLabel(regionLabel);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel} ${regionLabel}`;
  classesList = `${regionList}`;
  classesListItem = `${cListItem} ${text} ${hover} ${rounded}`;
  return `

<div class="${"toc " + escape(classesBase, true)}"><nav class="${"toc-list " + escape(classesList, true)}"><div class="${"toc-label " + escape(classesLabel, true)}">${escape(label)}</div>
		${each(filteredHeadingsList, (headingElem, i) => {
    return `
			<li class="${"toc-list-item " + escape(classesListItem, true) + " " + escape(setHeadingClasses(headingElem), true) + " " + escape(headingElem.id === activeHeaderId ? active : "", true)}">${escape(headingElem.innerText)}
			</li>`;
  })}</nav></div>`;
});
const shiki = "";
const siteTitle = "SvelteKit + MDsveX Blog";
const PageHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `${$$result.head += `<!-- HEAD_svelte-pviwej_START -->${$$result.title = `<title>${escape(formattedTitle)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)}><meta httpequiv="${"Content-Security-Policy"}" content="${"script-src 'self'"}"><meta property="${"og:site_name"}"${add_attribute("content", siteTitle, 0)}><meta property="${"og:title"}"${add_attribute("content", formattedTitle, 0)}><meta property="${"og:description"}"${add_attribute("content", description, 0)}><!-- HEAD_svelte-pviwej_END -->`, ""}`;
});
const ArticleTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slug = "" } = $$props;
  let { title } = $$props;
  const id = title.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s/g, "-");
  const href = slug ? `/posts/${slug}` : "#" + id;
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<h1${add_attribute("id", id, 0)}><a${add_attribute("href", href, 0)}>${escape(title)}</a></h1>`;
});
const ArticleMeta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { author } = $$props;
  let { date } = $$props;
  let { readingTime } = $$props;
  let { wordCount } = $$props;
  let { image = "" } = $$props;
  const formattedDate = new Date(date).toDateString().split(" ").slice(1).join(" ");
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.readingTime === void 0 && $$bindings.readingTime && readingTime !== void 0)
    $$bindings.readingTime(readingTime);
  if ($$props.wordCount === void 0 && $$bindings.wordCount && wordCount !== void 0)
    $$bindings.wordCount(wordCount);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div class="${"flex items-center gap-4"}"><div class="${"md:w-14 md:h-14 w-12 h-12"}"><img class="${"m-0"}" src="${"/images/favicon.png"}" alt="${"avatar"}"></div>
	<div class="${"flex flex-col"}"><div class="${"space-x-1"}"><span class="${"text-lg font-semibold"}">${escape(author)}</span>
			<span>·</span>
			<span>${escape(formattedDate)}</span></div>
		<div class="${"flex items-center space-x-2"}"><div class="${"flex items-center gap-2"}"><iconify-icon icon="${"material-symbols:menu-book-outline"}" alt="${"book-outline"}" class="${"text-lg"}"></iconify-icon>
				<span>${escape(readingTime)}</span></div>
			<span>·</span>
			<span>${escape(wordCount)} words</span></div></div></div>

<div><img${add_attribute("src", image, 0)} alt="${"article hero"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(PageHead, "PageHead").$$render(
    $$result,
    {
      title: data.frontmatter.title,
      description: data.frontmatter.description
    },
    {},
    {}
  )}

<div class="${"hidden absolute w-[240px] xl:inline-block h-full top-0 -right-[264px]"}">${validate_component(TableOfContents, "TableOfContents").$$render(
    $$result,
    {
      target: "#toc-target",
      class: "top-8 card variant-soft-primary sticky p-4",
      width: "w-fit",
      hover: "dark:hover:text-primary-400 hover:text-secondary-900",
      regionList: "list-none font-semibold"
    },
    {},
    {}
  )}</div>

<article><section class="${"mb-8"}">${validate_component(ArticleTitle, "ArticleTitle").$$render($$result, { title: data.frontmatter.title }, {}, {})}
		${validate_component(ArticleMeta, "ArticleMeta").$$render(
    $$result,
    {
      author: data.frontmatter.author,
      date: data.frontmatter.date,
      readingTime: data.frontmatter.readingTime.text,
      wordCount: data.frontmatter.readingTime.words,
      image: data.frontmatter.image
    },
    {},
    {}
  )}</section>
	<section id="${"toc-target"}" data-testid="${"raw-html-wrapper"}" class="${""}"><!-- HTML_TAG_START -->${data.html}<!-- HTML_TAG_END --></section></article>`;
});
export {
  Page as default
};
