/**
 * Tutorial 2: Work queue
 */

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        throw error0;
    }

    connection.createChannel((error1, channel) => {
        if (error1) {
            throw error1
        }

        var queue = "task_queue";

        // This makes sure the queue is declared before attempting to consume from it
        channel.assertQueue(queue, {
            durable: true
        });

        channel.prefetch(1);

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        channel.consume(queue, function (msg) {
            var secs = msg.toString().slice('.').length -1;

            console.log(" [x] Received %s", msg.content.toString());
            setTimeout(function() {
                console.log(" [x] Done");
            }, secs * 1000);

        }, {
            // manual acknowledgment mode,
            // see ../confirms.html for details
            noAck: true,
        });
    });


});