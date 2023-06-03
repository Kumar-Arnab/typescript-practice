let color: [number, number, number];
color = [255, 0, 255];


type HTTPResponse = [number, string];

const res1: HTTPResponse = [200, "OK"];

const responses: HTTPResponse[] = [[404, "Not Found"], [200, "OK"], [400, "Bad Request"]];


// ENUMS
enum OrderStatus {
  PENDING, // 0
  SHIPPED, // 1
  DELIVERED, // 2
  RETURNED, // 3
}

let myStatus = OrderStatus.DELIVERED;
console.log(myStatus); // 2

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

console.log(ArrowKeys.LEFT)