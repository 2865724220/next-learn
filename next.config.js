
const withCSS = require('@zeit/next-css')
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) = {}
}

// module.exports = {
//     exportPathMap:function () {
//         return {
//             '/':{page:'/'},
//             '/about':{page:'/about'},
//             '/index':{page:'/index'}
//         }
//     }
// }

// module.exports = withCSS()
module.exports = {
    exportPathMap:function () {
        return {
            '/':{page:'/'},
            '/about':{page:'/about'},
            '/index':{page:'/index'}
        }
    },
    withCSS
}