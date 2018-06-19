import TRouter from './core'

window.THistory = new TRouter({
    type: 'hash',
    routes: [{
        path: '/',
        render: () => {
            document.getElementById('router-view').innerHTML = 'Haha Page'
            console.log('render init')
        }
    },{
        path: '/home',
        render: () => {
            document.getElementById('router-view').innerHTML = 'Home Page'
            console.log('render home')
        }
    },
    {
        path: '/page',
        render: function() {
            document.getElementById('router-view').innerHTML = 'Page Page'
            console.log('render page')
        },
    },
    {
        path: '/category',
        render: function() {
            document.getElementById('router-view').innerHTML = 'Category Page'
            console.log('render category')
        }
    }]
}).history
