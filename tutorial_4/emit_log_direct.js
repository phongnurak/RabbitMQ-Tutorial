var amqp = require("amqplib/callback_api");

//connect to RabbitMQ server 
amqp.connect("amqp://localhost", function (error0, connection) {
    if (error0) {
        throw error0;
    }

    //create chanel
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }

        var exchange = "direct_logs";
        var args = process.argv.slice(2);
        var msg = args.slice(1).join(" ") || "Hello World!";
        var severity = (args.length > 0) ? args[0] : "info";

        channel.assertExchange(exchange, "direct", {
            durable: false
        });

        //send message to subscriber(argument is exchange, routing key , message)
        channel.publish(exchange, severity, Buffer.from(msg));

        console.log(" [x] Sent %s: '%s'", severity, msg);
    })

    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
});