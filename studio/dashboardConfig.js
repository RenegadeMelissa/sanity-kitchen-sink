export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ae9ebd354d2800edfbc24c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ht39efr8',
                  apiId: 'f291ee1d-1eef-4b9f-8bc4-68e0afe78459'
                },
                {
                  buildHookId: '60ae9ebd1993a7008945f452',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-seer83v6',
                  apiId: '7ae2fc52-7466-492a-81f7-8c11d2f925ab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmpstart/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-seer83v6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
