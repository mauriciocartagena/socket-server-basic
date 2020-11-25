// Servidor de Express

const express = require('express'); 
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

class Server {

    constructor() {
        this.app = express() ;
        this.port = 8080;

        // Http server
        this.server = http.createServer( this.app );
        // Servidor de sockets

        // Configuración de socket server
        this.io = socketio( this.server, { /* Configuraciones */ } );
    }

    middlewares() {
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ));
    }

    configurarSockets() {
        // ????
    }

    execute() {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar sockets
        this.configurarSockets();

        // Inicializar Server
        this.server.listen( this.port, () => { 
            console.log('Server corriendo en puerto ', this.port);
        });
        
    }


}

module.exports = Server;