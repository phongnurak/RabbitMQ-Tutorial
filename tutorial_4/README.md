# Totorial 4: Routing
##### How to run
1.  run receive_logs.js can use this argument [ info, warning, error]
    `node receive_logs_direct.js info warning`
2. run emit_log.js can use this argument [ info, warning, error] following message
	`node emit_log_direct.js info "This is my emit log"`

##### Description Tutorial
    ตัวอย่างนี้แสดงให้เห็นถึงวิธีการรับ-ส่ง message โดยฝั่งรับสามารถเลือกได้ว่าจะรับ message ที่มี routing key เป็นอะไร
    เช่น มีผู้ใช้ 2 คนแต่ละคนมีบทบาทต่างกันได้แก่ Admin, user ซึ่ง 2 คนนี้จะรับการแจ้งเตือนที่แตกต่างกัน หากในระบบมี routing key เป็น info warring และ error แล้วตัว admin บอกว่าจะรับแค่ message ที่มี routing key เป็น warring และ error ก็จะได้รับ message แค่ 2 key นี้เท่านั้น

- Bindings 
  เป็นการผูกค่าระหว่าง queue กับ exchange
- Direct exchange
    เป็นการเจาะจงว่า message จะเข้าไปยัง queue ไหนโดยใช้ Key ในการชี้ทางไปยัง queue ต่างๆ
------------

Reference:
[ Routing  with javascript](https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html "Routing")
