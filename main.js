"use strict";
// exports.__esModule = true;
// let username: string;
// username = "datlt"
// console.log(username);
// const phoneNumber: number = 1234566;
// const arrNumber: number[] = [1, 2, 3];
// const arrStr: string[] = ["1234", "def"];
// const arrMix: Array<number | string | boolean> = [1, "abcd", true];
// const isAdmin: boolean = true;
// const project: { id: number, name: string, email?: string } = {
//     id: 1,
//     name: "project 1",
//     email: "abcd@gmail.com"
// }
// function sum(a: number, b: number): any {
//     let result = a + b
//     return result
// }
// sum(10, 20)
var project = {
    id: 1,
    name: "Du an 1",
    image: "https://picsum.photos/200/100",
    link: "https://picsum.photos/100/200",
    status: true
};
function getData(props) {
    console.log(props);
}
getData(project);
