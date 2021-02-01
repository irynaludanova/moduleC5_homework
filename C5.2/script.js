//1 task
const parser = new DOMParser();
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const list = [];
let studentNodes = listNode.querySelectorAll("student");
studentNodes = Array.prototype.slice.call(studentNodes);
studentNodes.forEach((studentNode) => {
  const nameNode = studentNode.querySelector("name");
  const firstNode = nameNode.querySelector("first");
  const secondNode = nameNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const langAttr = nameNode.getAttribute("lang");
  list.push({
    name: firstNode.textContent + " " + secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  });
});
console.log("list", list);
//2 task
const jsonString = `{
    "list": [
     {"name": "Petr", "age": "20", "prof": "mechanic"},
     {"name": "Vova", "age": "60", "prof": "pilot"}
    ]
   }`;

const data = JSON.parse(jsonString);
const result2 = [];
let list2 = data.list;
list2 = Array.prototype.slice.call(list2);
list2.forEach((elem) => {
  result2.push({
    name: elem.name,
    age: elem.age,
    prof: elem.prof,
  });
});
console.log("list2", result2);
