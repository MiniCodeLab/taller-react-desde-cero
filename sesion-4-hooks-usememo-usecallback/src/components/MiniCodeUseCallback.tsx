import BasicUseCallback from './BasicUseCallback';
import BasicUseMemo from './BasicUseMemo';
import MiniCodePosts from './MiniCodePosts';
import MiniCodePostsAsync from './MiniCodePostsAsync';
import MiniCodeTabManager from './MiniCodeTabManager';

function MiniCodeUseCallback() {
  return (
    <div>
      <h2>Ejemplos de uso - useMemo</h2>

      <MiniCodeTabManager
        tabs={[
          {
            slug: 'useCallback',
            title: 'Ejemplo básico',
            content: BasicUseCallback,
          },
        ]}
      />
    </div>
  );
}

export default MiniCodeUseCallback;
