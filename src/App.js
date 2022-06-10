import IsolatedBlockEditor, {
  EditorLoaded,
  DocumentSection,
  ToolbarSlot,
  // CollaborativeEditing
} from '@automattic/isolated-block-editor';
// import './style.scss';
import '@automattic/isolated-block-editor/build-browser/isolated-block-editor.css';

const settings = {
  iso: {
    toolbar: {
      inspector: true,
      toc: true,
      navigation: true,
    },
    moreMenu: {
      editor: true,
      fullscreen: true,
      preview: true,
      topToolbar: true,
    },
    blocks: {
      disallowBlocks: [
        // "core/page-break",
        'core/html',
        'core/next-page',
        // "core/more",
        'core/embed',
        'core/shortcode',
        'core/archives',
        'core/calendar',
        'core/categories',
        'core/custom',
        'core/latest-comments',
        'core/latest-posts',
        'core/rss',
        'core/social',
        'core/tag-cloud',
        'core/search',
        'core/social-link',
        'core/social-links',
        'core/file',
      ],
    },
  },
};

function saveContent(html) {
  console.log({ html });
}

export default function App() {
  return (
    <div className="App">
      <IsolatedBlockEditor
        settings={settings}
        onSaveContent={(html) => saveContent(html)}
        // onLoad={(parse) => loadInitialContent(parse)}
        onError={() => document.location.reload()}
      >
        <EditorLoaded onLoaded={() => {}} onLoading={() => {}} />
        <DocumentSection>Extra Information</DocumentSection>

        <ToolbarSlot>
          <button>Beep!</button>
        </ToolbarSlot>
      </IsolatedBlockEditor>
      ,
    </div>
  );
}
