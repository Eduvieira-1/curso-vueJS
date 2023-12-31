import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/Template/Menu'
import MenuAlt from './components/Template/MenuAlt'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior(to, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { selector: to.hash }
        }
    },
    routes: [{
        name: 'inicio',
        path: '/',
        //component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    },
    {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            {
                path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
                    // console.log('antes da rota -> usuário detalhe')
                    next()
                }
            },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
        ]
    }, {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    // console('antes das rotas -> global')
    // if (to.path !== '/usuario') {
    //     next('/usuario')
    // } else {
    //     next()
    // }
    next()
})

export default router