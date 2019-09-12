//---------------------------------------------------------
var n = 10;

function outer() {
    var n = 15;

    function inner(n) {
        console.log(n)//15

        function center() {
            n++;//16
            console.log(n);//16
        }
        center();
    }
    inner(n);
}
outer();//15

//---------------------------------------------------------------
var n = 20;

function outer() {
    ++n;//21

    function inner() {
        console.log(n++);//22

        function center() {
            n += 2;
            console.log(n);//24
        }
        center();
    }
    inner();
};
outer();
console.log(n)//24



//----------------------------------------------------
alert(a);//undefined
console.log("a" in window);//false
if (!("a" in window)) {
    var a = 10;
}
alert(a);//undefined

console.log(fn);
if (9 == 8) {
    function fn() {
        alert(2);
    }
}
//    ---------------------------------
f = function () {
    return true
};
g = function () {
    return false
};
(function () {
    console.log(g);//false  函数体
    if (g() && [] == ![]) {
        f = function f() {
            return false
        };
    }

    function g() {
        return true
    };
})();
alert(f());//false
alert(g())//false

// ==========================================
var x = 5;

function fn() {
    return function (y) {
        console.log(y + (++x));
    }
}
var f = fn(6);
f(7);//13
fn(8)(9);//16
f(10);//18
console.log(x);8

//================================================
var x = 0,
    y = 1;

function fn() {
    x += 2;
    fn = function (y) {
        console.log(y + (--x));
    };
    console.log(x, y);
}
fn(3);
fn(4);
console.log(x, y);

//=================================================
function fn() {
    var i = 5;
    return function (n) {
        console.log(n * (--i))
    }
}
var f = fn();
f(10);
fn()(10);
fn()(20);
f(20);

//==============================================
var i = 2;

function fn() {
    i += 2;
    return function (n) {
        console.log(n + (--i));
    }
}
var f = fn();//i=4
f(2);//2+3  5
f(3);//3+2  5
fn()(2);//5
fn()(3);//7
f(4);//7

// ==================================================
var n = 10;

function fn() {
    var n = 20;

    function f() {
        n++;
        console.log(n);
    }
    f();
    return f;
}
var x = fn();//21
x();//22
x();//23
console.log(n);//10