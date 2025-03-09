// -------> Imports
import { useState } from "react";

// -------> variables
const Name = "Test File";
const date = 2343342;
const url = "http://google.com/testfiles";
const email = "mailto:sardarhossaini2022@gmail.com";
const list = document.querySelector("#list");
const user = document.querySelector("#user");

// -------> Functions
const hide = () => {
  list.style.display = "none";
  user.innerHTML = "User hide the list.";
  user.style.color = "red";
};
const show = () => {
  list.style.display = "block";
  user.innerHTML = "User unhide the list";
  user.style.color = "green";
};

// -------> Codes
const Test = () => {
  const [name, setName] = useState("Sardar Hussaini");
  const [age, setAge] = useState(23);
  const change = () => {
    setName("Amin Mohammadi");
    setAge(19);
  };
  const unchange = () => {
    setName("Sardar Hussaini");
    setAge(23);
  };
  const [list, setList] = useState([
    {
      id: 1,
      name: "Sardar Hussaini",
      age: 23,
      phone: +9378214885,
      email: "sardarhossaini2022@gmail.com",
    },
    {
      id: 2,
      name: "Ali Ahmadi",
      age: 24,
      phone: +937333422789,
      email: "alahmadi2022@gmail.com",
    },
    {
      id: 3,
      name: "Hamid Refayi",
      age: 22,
      phone: +937823984782,
      email: "hamidrefayi2022@gmail.com",
    },
    {
      id: 4,
      name: "Amin Mohammadi",
      age: 19,
      phone: +937823987644,
      email: "aminmohammadi2019@gmail.com",
    },
  ]);
  return (
    <div className="Test">
      <h1
        style={{
          color: "green",
          fontSize: "20px",
          marginTop: "20px",
          paddingTop: "20px",
        }}
      >
        This is the {Name}
      </h1>
      <h3
        style={{
          backgroundColor: "yellow",
          color: "cyan",
          fontFamily: "Poppins",
        }}
      >
        {date}
      </h3>
      <a
        href={email}
        style={{
          textDecoration: "none",
          textTransform: "uppercase",
        }}
        id="user"
      >
        Sardar
      </a>
      <h4 id="list">{[2024, 2023, 2022, 2021, 2020]}</h4>
      <a
        href={url}
        style={{
          textDecoration: "none",
          textTransform: "uppercase",
          display: "block",
        }}
      >
        www.google.com
      </a>
      <br />
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          marginRight: "10px",
        }}
        onClick={() => hide()}
      >
        Hide
      </button>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
        onClick={() => show()}
      >
        Show
      </button>
      <h1>
        I'm {name} and {age} years old.
      </h1>
      <button onMouseOver={change}>Change</button>
      <button onMouseOver={unchange}>Unchange</button>
      {list.map((my_list) => {
        <div className="my_list" key={my_list.id}>
          <h1>{my_list.name}</h1>
          <h2>{my_list.email}</h2>
          <h2>{my_list.phone}</h2>
          <h3>{my_list.age}</h3>
        </div>;
      })}
    </div>
  );
};

export default Test;
