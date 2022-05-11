var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function (errorConnect, connect) {
    if (errorConnect) {
        throw errorConnect;
    }

    connect.createChannel(function(errorCreateChannel, channel){

        if (errorCreateChannel) {
            throw errorCreateChannel;
        }

        var exchange = "topic_logs";
        var args = process.argv.slice(2);
        var key = (args.length > 0)? args[0]: "anonymous.info";
        var msg = args.slice(1).join(' ') || "Hello World!";


        channel.assertExchange(exchange, "topic", {
            durable: false
        });

        channel.publish(exchange, key, Buffer.from(msg));

        console.log(" [x] Sent %s: '%s'", key, msg);
    });

    setTimeout(() => {
        connect.close();
        process.exit(0);
    }, 500);

});