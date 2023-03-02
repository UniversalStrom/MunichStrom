module.exports = {
    
    fields: {
        add: {
            githubUrl: {
                type: 'url',
                label: 'GitHub organization url' 
            }
        },
        group: {
            basics: {
                label: 'Basics',
                fields: ['githubUrl']
            }
        }
    }
}