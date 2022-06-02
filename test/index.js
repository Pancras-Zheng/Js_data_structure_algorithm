/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 计算两个超大数相加结果
 * @param str1 string字符串 数值字符串1
 * @param str2 string字符串 数值字符串2
 * @return string字符串
 */

function largeNumberPlus(str1, str2) {
    // write code here

    if (str1.length > str2.length) {
        var str11 = str1.slice(0, str1.length / 3);
        var str12 = str1.slice(str1.length / 3, str1.length - str2.length);
        var str13 = str1.slice(str1.length - str2.length);


        var sum1 = str11;
        var sum2 = parseInt(str12) + parseInt(str2);
        var strSum = sum1 + sum2.toString();
        return strSum;

    } else if (str1.length < str2.length) {
        var str21 = str2.slice(0, str2.length - str1.length);
        var str22 = str2.slice(str2.length - str1.length);
        var sum1 = str21;
        var sum2 = parseInt(str22) + parseInt(str1);
        var strSum = sum1 + sum2.toString();
        return strSum;

    } else {

        var str11 = str1.slice(0, str1.length / 3);
        var str12 = str1.slice(str1.length / 3, 2 * str1.length / 3);
        var str13 = str1.slice(2 * str1.length / 3);

        var str21 = str2.slice(0, str2.length / 3);
        var str22 = str2.slice(str2.length / 3, 2 * str2.length / 3);
        var str23 = str2.slice(2 * str2.length / 3);

        var sum1 = parseInt(str11) + parseInt(str21);
        var sum2 = parseInt(str12) + parseInt(str22);
        var sum3 = parseInt(str13) + parseInt(str23);


        var strSum = sum1.toString() + sum2.toString() + sum3.toString();
        return strSum
    }

}

var str1 = "4527139234233492535423333222134",
    str2 = "1";
var res = largeNumberPlus(str1, str2);
console.log(res)