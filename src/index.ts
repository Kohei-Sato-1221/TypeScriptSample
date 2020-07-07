import { sayHello, getEmpNumber, Employee, getEmpName, showYourGirlFriends, Student} from './sugarUtils';

// 文字列リテラル
let jobStr: 'Teacher' | 'Doctor' | 'Scientist' | 'Engineer';

jobStr = 'Teacher';
//以下はコンパイルエラー
//jobStr = 'Student';

sayHello(jobStr);
console.log('');


//オブジェクト型：部分型
const emp1 = {empNum: 1001};
const emp2 = {empNum: 1099, age:24};
const emp3 = {empNum: 2013, sex:'Male'};
const emp4 = {age:100, sex:'female'};

console.log('1.社員番号は....' + getEmpNumber(emp1));
console.log('2.社員番号は....' + getEmpNumber(emp2));
console.log('3.社員番号は....' + getEmpNumber(emp3));
//以下はコンパイルエラー
//console.log('4.社員番号は....' + getEmpNumber(emp4));
console.log('');


//interface
const koheiSato:Employee = {
    empNum: 4,
    name: 'KoheiSato',
    isSingle: true
};
console.log('His name is ' + getEmpName(koheiSato));
console.log('');


//可変長変数
showYourGirlFriends('Atsuko', 'Yuko', 'Mariko');
console.log('');


//Class
const seitoKaityo = new Student('Yuki Taira', 122);
seitoKaityo.selfIntroduction();

