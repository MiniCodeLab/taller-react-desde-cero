import { useEffect, useMemo, useState } from 'react';

type Post = {
  slug: string;
  date: string;
  title?: string;
};

const posts = [
  {
    slug: 'vue-desde-0',
    date: 'Fri Oct 06 2023 10:45:00 GMT+0200 (Central European Summer Time)',
  },
  {
    slug: 'react-desde-0',
    date: 'Thu Feb 17 2022 18:15:00 GMT+0100 (Central European Standard Time)',
  },
  {
    slug: 'angular-desde-0',
    date: 'Tue Aug 23 2022 13:21:00 GMT+0200 (Central European Summer Time)',
  },
];

// Imagina que esto pide info de una API
const fetchPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 2000);
  });
};

export const MiniCodePostsAsync: React.FC = () => {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [rerender, setRerender] = useState<boolean>(false);

  useEffect(() => {
    // Simulamos que pedimos info a una API
    fetchPosts().then((postsResponse) => {
      console.log('Formateando posts');
      const formattedPosts = postsResponse
        .map((post) => {
          return {
            ...post,
            date: new Date(post.date),
            title: post.slug.split('-').join(' ').toUpperCase(),
          };
        })
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map((post) => ({
          ...post,
          date: new Intl.DateTimeFormat('es-ES').format(post.date),
        }));

      setAllPosts(formattedPosts);
    });
  }, []);

  // Menuda locura de cálculos! 🤯
  // const orderedPostsWithTitle = useMemo(() => {
  //   console.log('Calculando los posts con useMemo');

  //   return allPosts
  //     .map((post) => {
  //       return {
  //         ...post,
  //         date: new Date(post.date),
  //         title: post.slug.split('-').join(' ').toUpperCase(),
  //       };
  //     })
  //     .sort((a, b) => a.date.getTime() - b.date.getTime())
  //     .map((post) => ({
  //       ...post,
  //       date: new Intl.DateTimeFormat('es-ES').format(post.date),
  //     }));
  // }, [allPosts]);

  return (
    <div className="MiniCodePostsAsync">
      <h1>Talleres destacados 😍</h1>

      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <h3>{post.title}</h3> {post.date}
            <hr />
          </li>
        ))}
      </ul>

      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </div>
  );
};

export default MiniCodePostsAsync;
