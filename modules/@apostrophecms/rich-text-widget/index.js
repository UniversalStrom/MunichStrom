module.exports = {
    options: {
      label: 'Home Page'
    },
    fields: {
      add: {
        main: {
          type: 'area',
          options: {
            widgets: {
              '@apostrophecms/rich-text': {
                toolbar: [
                  'styles',
                  '|',
                  'bold',
                  'italic',
                  'strike',
                  'superscript',
                  'subscript',
                  'link',
                  '|',
                  'anchor',
                  'horizontalRule',
                  'blockquote',
                  'codeBlock',
                  'bulletList',
                  'orderedList',
                  '|',
                  'alignLeft',
                  'alignCenter',
                  'alignRight',
                  'alignJustify',
                  '|',
                  'table',
                  'image',
                  'undo',
                  'redo'
                ],
                styles: [
                  {
                    tag: 'p',
                    label: 'Paragraph (P)'
                  },
                  {
                    tag: 'h2',
                    label: 'Heading 2 (H2)'
                  },
                  {
                    tag: 'h3',
                    label: 'Heading 3 (H3)'
                  },
                  {
                    tag: 'h4',
                    label: 'Heading 4 (H4)'
                  }
                ]
              },
              '@apostrophecms/image': {},
              '@apostrophecms/video': {}
            },
            imageStyles: [
                {
                  value: 'image-float-left',
                  label: 'Float Left'
                },
                {
                  value: 'image-float-right',
                  label: 'Float Right'
                },
                {
                  value: 'image-float-center',
                  label: 'Center'
                }
              ]
          }
        }
      },
      group: {
        basics: {
          label: 'Basics',
          fields: [
            'title',
            'main'
          ]
        }
      }
    }
  };
  