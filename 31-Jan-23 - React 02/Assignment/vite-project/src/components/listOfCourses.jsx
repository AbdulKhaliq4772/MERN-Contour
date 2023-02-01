function Courses() {
    let courses = [
      {name: "Physics", id: 1},
      {name: "chemistry", id:2},
      {name: "Maths", id: 3},
    ]
  
    let course = courses.map(c=>
      <li key={c.id}>{c.name}</li>);
  
    return (
      <ul>{course}</ul>
    );
  }
  
  export default Courses