export const routes = {
  main: () => "/",
  aboutUs: () => "/about-us",
  hotTours: {
    root: () => "/hot-tours",
    element: (slug: string) => `/hot-tours/${slug}`,
  },
  tours: {
    root: () => "/tours",
    element: (slug: string) => `/tours/${slug}`,
  },
};

export const links = [
  { title: "Главная", href: routes.main() },
  { title: "О нас", href: routes.aboutUs() },
  { title: "Горящие туры", href: routes.hotTours.root() },
  { title: "Туры", href: routes.tours.root() },
];
