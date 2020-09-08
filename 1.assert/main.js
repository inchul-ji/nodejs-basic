var assert = require("assert"); // assert 객체를 생성

var v1 = 10;
var v2 = 10;
var v3 = 20;
var v4 = "10";

// assert();
// : 주어진 변수가 수식의 값이 0이거나 false 경우 오류가 발생한다.
assert(v1 < v3);
console.log("v1은 v3보다 작습니다.");

/*
assert(v1 == v3);
console.log("v1은 v3과 같습니다.");
*/

assert(v1 == v2);
console.log("v1과 v2는 같습니다.");

/*
assert(v1 - v2);
console.log("v1 - v2는 0이 아닙니다.");
*/

assert(v1 - v3);
console.log("v1 - v3은 0이 아닙니다.");

// assert.equal();
// : 주어진 두 변수나 수식의 결과 값이 다를 경우 오류가 발생한다.
//  값의 타입은 무시한다.
assert.equal(v1, v2);
console.log("v1과 v2는 같습니다.");

/*
assert.equal(v1, v3);
console.log("v1과 v3는 같습니다.");
 */

assert.equal(v1, v4);
console.log("v1과 v4는 같습니다.");

/*
assert.strictEqual(v1, v4);
console.log("v1과 v4는 같습니다.");
*/

/*
 assert.notEqual(v1, v2);
 console.log("v1과 v2는 다릅니다.");
*/

assert.notEqual(v1, v3);
console.log("v1과 v3는 다릅니다.");

/*
assert.notEqual(v1, v4);
console.log("v1과 v4는 다릅니다.");
*/

assert.notStrictEqual(v1, v4);
console.log("v1과 v4는 다릅니다.");

var obj1 = {
  a1: 10,
  a2: 20,
};

var obj2 = {
  a1: 10,
  a2: 20,
};

var obj3 = {
  a1: 10,
  a2: 30,
};
var obj4 = {
  a1: 10,
  a2: "20",
};

assert.deepEqual(obj1, obj2);
console.log("obj1과 obj2는 같습니다.");

/*
assert.deepEqual(obj1, obj3);
console.log("obj1과 obj3은 같습니다.");
 */

assert.deepEqual(obj1, obj4);
console.log("obj1과 obj4는 같습니다.");
/*
assert.deepStrictEqual(obj1, obj4);
console.log("obj1과 obj4는 같습니다.");
*/

/*
assert.notDeepEqual(obj1, obj2);
console.log("obj1과 obj2는 다릅니다.");
*/

assert.notDeepEqual(obj1, obj3);
console.log("obj1과 obj3은 다릅니다.");

/*
assert.notDeepEqual(obj1, obj4);
console.log("obj1과 obj4는 다릅니다.");
*/

assert.notDeepStrictEqual(obj1, obj4);
console.log("obj1과 obj4는 다릅니다.");
