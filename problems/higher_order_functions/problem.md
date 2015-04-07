Một hàm higher-order là một hàm thỏa mãn ít nhất một điều kiện dưới đây:

* Nhận một hay nhiều hàm khác (function) như tham số đầu vào
* Trả ra một hàm (function)

Các hàm không thỏa mãn điều kiện trên được gọi là hàm first order. [1]

Không như các ngôn ngữ lập trình khác, JavaScript hỗ trợ hàm higher-order vì các hàm trong JavaScript là các "hàm lớp đầu" ("first-class functions"). Vì vậy, bạn có thể coi hàm như một đối tượng trong chương trình giống như Strings hay Numbers, hay nói cách khác các giá trị của hàm (Function values) có thể được lưu trữ vào một biến, một thuộc tính của một đối tượng nào đó, hoặc truyền nó vào một hàm thông qua tham số đầu vào của hàm đó. Về bản chất, các hàm chính là các đối tượng (Objects) được kế thừa từ `Function.prototype`, nên bạn thậm chí còn có thể thêm được thuộc tính cho nó, lưu trữ giá trị của nó y như các các đối tượng bình thường khác.

Điểm khác cơ bản giữa hàm và các kiểu giá trị khác trong JavaScript là cú pháp gọi thực thi: nếu được gọi với cặp dấu ngoặc đơn (), và (có thể có hoặc không) các giá trị truyền vào bên trong cặp ngoặc đơn này như: `someFunctionValue(arg1, arg2, etc)`, thì nội dung của hàm sẽ được thực thi với các tham số đầu vào trong dấu ngoặc đơn.

Trong bài tập này ta sẽ sử dụng một hàm có thể nhận một hàm khác qua tham số đầu vào để giải quyết vấn đề.

# Nhiệm vụ

Viết một hàm nhận một hàm `operation` đầu vào qua tham số đầu tiên và một số `num` qua tham số thứ 2, sau đó sẽ gọi thực thi `operation` `num` lần.

Hay sử dụng mẫu chương trình bên dưới để viết mã của bạn. Hầu hết các bài tập ở đây đều cung cấp cho bạn một mẫu sẵn để bạn hoàn thiện tiếp.

## Tham số

* operation: Một hàm không có tham số đầu vào và không trả ra gì cả.
* num: Số lần cần gọi hàm `operation`

## Tham khảo

* https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

## Gợi ý

* Đừng nghĩ phức tạp vì cái này thực sự rất đơn giản.
* Bạn có thể dùng vòng lặp để xử lý, nhưng nên sử dụng phương pháp hồi quy.
* Bạn cần chú ý chút tới đầu ra, vì nó có thể chứa thông tin hữu ích.
* Bạn không cần phải console.log cái gì cả.

## Mẫu

```js
function repeat(operation, num) {
  // TODO hoàn thiện đoạn mã này
}

// Đừng thay đổi dòng này
module.exports = repeat
```
