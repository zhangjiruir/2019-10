// 编写一个正则  可以匹配 有效数字
// 可以有 + - 号；  可以有小数  整数部分不能以0开头
var reg = /^[-+]?(([1-9]\d*)|0)(\.\d+)?$/

// 手机号
var reg = /^[3-9]\d{9}$/

// qq 邮箱验证
// 至少 5 位  不能以0开头 @qq.com
var reg = /^[1-9]\d{4,9}@qq\.com$/


// 密码 8-18位  既有大写 又有小写 还得有数字
function judeg(str){
    if(str.length>18||str.length<8)return false
    if(!/[A-Z]/.test(str))return false
    if(!/[a-z]/.test(str))return false
    if(!/\d/.test(str))return false
    return true

    // if(str.length>=8 && str.length<=18 &&/[A-Z]/.test(str)&&/[a-z]/.test(str)&&/\d/.test(str)){
    //     return true
    // }
    // return false
}


// 身份证号码验证  只验证18位
var reg = /^\d{6}\d{4}\d{2}\d{2}\d{2}\d(\d|x)$/

// 匹配 18 - 65 的年龄段
var reg = /^1[8-9]|[2-5]\d|6[0-5]$/ 