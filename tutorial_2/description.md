# Totorial 2: Work Queues
How to run
1.  run receiver.js
    `node worker.js`
2. run sender.js
	`node new_task.js`

- Message acknowledgment
    งาน(Message) ที่ส่งไปยัง consumer จะไม่สูญหายหากเกิดการ lost connection ที่ตัว consumer
    ทางฝั่ง server จะทำการส่ง message ไปให้ cosumer คนถัดไปเพื่อไม่ให้เสีย message ไป
- Message durability
    ถ้าตัว server(RabbitMQ) หยุดให้บริการหรือทำการ restart จะเป็นการล้าง queue และข้อความทั้งหมด หากไม่ต้องการให้เป็นแบบนี้
    สามารถแก้ไขได้ด้วยการตั้งค่า durable กับ persistent
- Fair dispatch
    ไม่ส่ง message ไปจนกว่า worker จะทำงานเสร็จ แต่จะจัดส่งไปยัง worker ที่ว่างอยู่เพื่อไม่ให้งานมีมากเกินไปใน 1 worker 
    โดยใช้คำสั่ง channel.prefetch(int count); ใน count ใส่จำนวน messge ที่จะให้รับได้สูงสุด
------------

Reference:
[Work Queues](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html "Work Queues")
