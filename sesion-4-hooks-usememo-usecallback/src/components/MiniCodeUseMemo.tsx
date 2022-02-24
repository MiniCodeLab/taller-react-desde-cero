import BasicUseMemo from './BasicUseMemo';
import MiniCodePosts from './MiniCodePosts';
import MiniCodePostsAsync from './MiniCodePostsAsync';
import MiniCodeTabManager from './MiniCodeTabManager';

function MiniCodeUseMemo() {
  return (
    <div>
      <h2>Ejemplos de uso - useMemo</h2>

      <MiniCodeTabManager
        tabs={[
          {
            slug: 'useMemo',
            title: 'Ejemplo básico',
            content: BasicUseMemo,
          },
          {
            slug: 'useMemo-posts',
            title: 'Ejemplo con Posts',
            content: MiniCodePosts,
          },
          {
            slug: 'useMemo-posts-async',
            title: 'Ejemplo con Posts Async',
            content: MiniCodePostsAsync,
          },
        ]}
      />
    </div>
  );
}

export default MiniCodeUseMemo;
