# Totorial 6: Remote procedure call (RPC)
##### How to run
1.  run receive_logs.js can use this argument [ info, warning, error]
    `node receive_logs_direct.js info warning`
2. run emit_log.js can use this argument [ info, warning, error] following message
	`node emit_log_direct.js info "This is my emit log"`

##### Description Tutorial
   ![]( https://www.rabbitmq.com/img/tutorials/python-six.png )

- Topic exchange
  คล้ายๆ กับ Directory แตกต่างกันที่ Routing key จะใช่เป็นคำที่ขั้นด้วย . เช่น  [color].[animal] จะได้เป็น Routing key โดยตัวอักษรพิเศษอีก 2 ตัวสำหรับใช้คือ
  1.*(star) สำหรับใส่คำอะไรก็ได้อย่างน้อย 1 ตัว
  2.#(hash) สำหรับใส่คำอะไรก็ได้ตั้งแต่ 0 หรือ มากกว่า

------------

Reference:
[ Remote procedure call (RPC) ](https://www.rabbitmq.com/tutorials/tutorial-six-javascript.html "Remote procedure call (RPC)")
