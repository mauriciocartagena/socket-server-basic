const Server = require("./models/servers");


const server = new Server();

server.execute();


// io.on('connection', ( socket ) => { 
    
//     // socket.emit('mensaje-bienvenida', {
//     //     msg:'Bienvenido al server',
//     //     fecha: new Date()
//     // });

//     socket.on( 'mensaje-to-server', ( data ) => {
//         console.log( data )

//         io.emit('mensaje-from-server', data );

//     });


// });


