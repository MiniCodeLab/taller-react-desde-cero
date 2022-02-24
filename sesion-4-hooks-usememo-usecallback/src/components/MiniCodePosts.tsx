import { useMemo, useState } from 'react';

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

export const MiniCodePosts: React.FC = () => {
  const [rerender, setRerender] = useState<boolean>(false);

  // Menuda locura de cálculos! 🤯
  const orderedPostsWithTitle = useMemo(() => {
    console.log('Calculando los posts con useMemo');

    return posts
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
  }, []);

  return (
    <div className="MiniCodePosts">
      <h1>Talleres destacados 😍</h1>

      <ul>
        {orderedPostsWithTitle.map((post) => (
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

export default MiniCodePosts;
