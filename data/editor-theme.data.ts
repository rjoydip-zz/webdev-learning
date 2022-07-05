import { PrismTheme } from "prism-react-renderer";

export const EditorTheme: PrismTheme = {
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: '6272a4'
      }
    },
    {
      types: ['property', 'tag', 'constant', 'symbol', 'deleted'],
      style: { color: '#ff79c6' }
    },
    {
      types: ['boolean', 'number'],
      style: { color: '#bd93f9' }
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'insterted'],
      style: {
        color: '#50fa7b'
      }
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        'string',
        'style',
        'variable',
        'language-css'
      ],
      style: {
        color: '#f8f8f2',
        cursor: 'help'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#ffb86c'
      }
    },
    {
      types: ['atrule', 'attr-value', 'function', 'class-name'],
      style: {
        color: '#f1fa8c'
      }
    }, {
      types: ['keyword'],
      style: {
        color: '#8be9fd'
      }
    }, {
      types: ['punctuation'],
      style: {
        color: '#f8f8f2'
      }
    },
    {
      types: ['punctuation', 'symbol', 'namespace'],
      style: {
        opacity: 0.7
      }
    }
  ],
  plain: {
    color: "#f8f8f2",
    backgroundColor: "#282a36",
    fontStyle: "italic",
    fontWeight: "normal",
    textDecorationLine: "none",
    opacity: 1
  }
};

export default {}