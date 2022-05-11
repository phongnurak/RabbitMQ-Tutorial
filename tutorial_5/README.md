# Totorial 5: Topics
##### How to run
1.  run receive_logs.js can use this argument [word1].[word2] 
    `node receive_logs_topic.js  "hello.*"`
2. run emit_log_topic.js can use this argument [word1].[word2]  following message
	`node emit_log_topic.js "hello.Monday" "This is my emit log"`

##### Description Tutorial
    ยกตัวอย่างสถานะการที่เราจะใช้เพื่อรับข้อมูลเช่น รับสนใจข้อมูลที่มี Routing key เป็นลักษณะแบบนี้ [color].[animal] 

- Topic exchange
  คล้ายๆ กับ Directory แตกต่างกันที่ Routing key จะใช่เป็นคำที่ขั้นด้วย . เช่น  [color].[animal] จะได้เป็น Routing key โดยตัวอักษรพิเศษอีก 2 ตัวสำหรับใช้คือ
  1.*(star) สำหรับใส่คำอะไรก็ได้อย่างน้อย 1 ตัว
  2.#(hash) สำหรับใส่คำอะไรก็ได้ตั้งแต่ 0 หรือ มากกว่า
------------

Reference:
[ Topics ](https://www.rabbitmq.com/tutorials/tutorial-five-javascript.html "Topics")
