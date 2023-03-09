export { }
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



const arrNumber: number[] = [1, 2, 3]
const arrMix: Array<{ id: number, name: string }> = [
    { id: 1, name: "abc" }
]



// định nghĩa kiểu dữ liệu với interface
/*
    interface hỗ trợ các thuộc tính sau
        required
        optional

*/

/* Object */
// const project: { id: number, name: string, image: string, link: string, status: boolean } = {
//     id: 1,
//     name: "Du an 1",
//     image: "https://picsum.photos/200/100",
//     link: "https://picsum.photos/100/200",
//     status: true
// }

// function getData(props: { id: number, name: string, image: string, link: string, status: boolean }): { id: number, name: string, image: string, link: string, status: boolean } {
//     console.log(props);
//     return props;
// }
// getData(project)

// interface Project {
//     id: number,
//     name: string,
//     image: string,
//     link: string,
//     status: boolean
// }
// const project: Project = {
//     id: 1,
//     name: "Du an 1",
//     image: "https://picsum.photos/200/100",
//     link: "https://picsum.photos/100/200",
//     status: true
// }

// function getData(props: Project): Project {
//     console.log(props);
//     return props;
// }
// getData(project)


/* Array */
// const projectList: { id: number, name: string }[] = [
//     { id: 1, name: "Du an mau" },
//     { id: 2, name: "Du an 1" }
// ]
// const getProject = (data: { id: number, name: string }[]): { id: number, name: string }[] => {
//     return data;
// }

interface Project {
    id: number,
    name: string,
    image: string,
    link: string,
    status?: boolean | string
}
const projectList: Project[] = [
    { id: 1, name: "abc", image: "ac", link: "abc", status: "true" },
    { id: 1, name: "abc", image: "ac", link: "abc" }
]
/* Function */ 