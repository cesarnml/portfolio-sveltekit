const Url = {
  Home: "/",
  About: "/about",
  Projects: "/projects",
  Contact: "/contact",
  Blog: "/blog",
  BlogDetail: (slug) => `${Url.Blog}/${slug}`,
  Resume: "/resume"
};
export {
  Url as U
};
