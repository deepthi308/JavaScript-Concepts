// There are 5 falsy values in javascript
// They are
/*
1)---->0
2)---->''
3)---->undefined
4)---->null
5)---->NaN
*/
// ofcourse,false itself is a falsy value.
// Falsy values are not exactly false, But they become false if we try to cenvert into boolean value.

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean("text"));

const money = 0;
if (money) {
    console.log("Don't spend it all 😏");
} else {
    console.log("Earn some money 🤗");
}

// Here eventhough money is not boolean javascript implicitly try to convert the value to boolean. Since it is a falsy value it
// Here eventhough money is not boolean javascript implicitly try to convert the value to boolean. Since it is a falsy value it will be converted to false.

let height;
if (height) {
    console.log("Yayyyyy....🥳");
} else {
    console.log("Height is undefined");
}

// In the above context, what happens is,
// Since, height is undefined  which is falsy value. Javascript when tries to convert it into a boolean value behind the scenes. It will  become false. So the else block will be  executed.

// But if try to assign something other than falsy values to the height, no matter what it is. It will convert it into truthy value.

// Example of not falsy value or truthy value

height = {};
if (height) {
    console.log(`Height is defined and truthy`);
} else {
    console.log(`Height is not defined and falsy`);
}

// In the above logical context. since height is assigned to an empty object which is  truthy value. When javascript tries to convert the value to boolean. It will beome true and the if block will get executed.