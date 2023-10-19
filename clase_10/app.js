var appVue2 = new Vue ({
    el:'#app',
    data: {
        mensaje: 'hola mundo',
        nombre:"carlitos"
    },
    methods: {
        mostrarMensaje: function(){
            return " el profe dice "+ this.mensaje;
        }
    }
})