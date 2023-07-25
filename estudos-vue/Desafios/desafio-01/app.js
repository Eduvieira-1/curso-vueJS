new Vue({
    el:'#desafio',
    data: {
        nome: 'Eduardo César',
        idade: '22',
        imagem: 'imgsla'
    },
    methods:{
        idade(){
            return this.idade * 3
        },
        random(){
           return Math.random();
        }
    }
})