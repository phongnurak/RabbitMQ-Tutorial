var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var exchange = 'logs';

        channel.assertExchange(exchange, 'fanout', {
            durable: false
        });

        channel.assertQueue('', {
            exclusive: true
        }, function (error2, q) {
            if (error2) {
                throw error2;
            }
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);

            /**
             * A binding is a relationship between an exchange and a queue. 
             * This can be simply read as: the queue is interested in messages from this exchange.
             */
            channel.bindQueue(q.queue, exchange, '');

            channel.consume(q.queue, function (msg) {
                if (msg.content) {
                    console.log(" [x] %s", msg.content.toString());
                }
            }, {
                noAck: true
            });
        });
    });
});