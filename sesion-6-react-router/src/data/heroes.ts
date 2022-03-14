export type Hero = {
  id: number;
  name: string;
  age: number;
  alias: string;
  slug: string;
};

export let heroes: Hero[] = [
  {
    id: 1,
    name: 'Superman',
    age: 65,
    alias: 'Clark Kent',
    slug: 'superman',
  },
  {
    id: 2,
    name: 'Batman',
    age: 55,
    slug: 'batman',
    alias: 'Bruce Wayne',
  },
  {
    id: 3,
    name: 'Wonder Woman',
    age: 1555,
    alias: 'Diana',
    slug: 'wonder-woman',
  },
];

export const getHeroes = () => heroes;

export const getHeroBySlug = async (
  slug: string
): Promise<Hero | undefined> => {
  return heroes.find((hero) => hero.slug === slug);
};

export const deleteHeroById = async (id: number): Promise<void> => {
  heroes = heroes.filter((hero) => hero.id !== id);
};
