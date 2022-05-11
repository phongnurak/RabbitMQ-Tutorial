var amqp = require('amqplib/callback_api');

//step 1 create connection
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }

    //step 2 create channel
    connection.createChannel( (error1, channel)=>{

        //3.create queue
        var queue = "hello";
        var msg   = "Hello world";
        
        channel.assertQueue(queue, { durable: false });
        
        //4. send message
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);

    } );


    //5. close connection
    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
});