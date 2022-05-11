# Totorial 3: Publish / Subscribe
How to run
1.  run receive_logs.js
    `node receive_logs.js`
2. run emit_log.js
	`node new_task.js`

ทำการ run receive_logs.js หลายๆหน้าจอเพื่อดูการทำงาน
หลังจาก receive_logs ทำการ subscribe ไว้แล้ว เมื่อมีการยิง message จาก emit_log จะทำให้ทุกๆ receive_logs ที่ subscribe อยู่ได้รับข้อความพร้อมกัน

------------

Reference:
[ Publish / Subscribe ](https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html "Publish / Subscribe")
