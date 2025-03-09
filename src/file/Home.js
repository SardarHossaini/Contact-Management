import { useState } from "react";
import "./home.css";

const Home = () => {
  var p = document.querySelector("p.article");
  var read = document.querySelector("button.read");
  var show = document.querySelector("button.show");
  const [name, setName] = useState("Sardar");
  const [age, setAge] = useState(21);
  const showless = () => {
    setName("Mohammad");
    setAge(30);
    p.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro omnis quae velit deleniti voluptates cumque, laboriosam ab similique, quas modi quod voluptas error tempore atque rerum dicta enim beatae sapiente officiis architecto. Provident cupiditate?";
    show.classList.add("hidden");
    read.classList.remove("hidden");
  };
  const readMore = () => {
    p.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro omnis quae velit deleniti voluptates cumque, laboriosam ab similique, quas modi quod voluptas error tempore atque rerum dicta enim beatae sapiente officiis architecto. Provident cupiditate, sit libero laboriosam inventore sapiente, nisi mollitia laudantium ullam nemo aliquid exercitationem repudiandae voluptates commodi aspernatur excepturi deserunt corporis! Porro molestias beatae, voluptatem exercitationem magnam ullam! Voluptatem necessitatibus corrupti similique temporibus nisi sequi sint eligendi repellat dignissimos quasi possimus facilis non itaque deleniti velit mollitia ratione, perspiciatis obcaecati eos placeat praesentium quia laboriosam, eveniet debitis! Distinctio laboriosam reprehenderit praesentium officia, ea, quas voluptas et ab eum laudantium qui. Veritatis ratione corrupti similique facere cum sint. Error vero veritatis atque distinctio ducimus? Ipsa harum animi nihil quam voluptatibus id quidem, reiciendis soluta sapiente sequi, natus, officiis ex officia ullam. Expedita deleniti non molestiae error vel quae exercitationem aliquam quo animi ea rem neque doloribus, excepturi soluta nam facere blanditiis dolore ab corporis ducimus nemo natus. Quo, accusantium nemo voluptas sint itaque accusamus ut ex ea quas dolor quam est necessitatibus, autem corporis similique, quae dicta facere nihil excepturi voluptatum eligendi. Animi quas voluptatum ut doloribus aperiam fuga adipisci eaque recusandae numquam corrupti mollitia, vitae maxime? Explicabo!";
    show.classList.remove("hidden");
    read.classList.add("hidden");
  };
  const [blogs, setblogs] = useState([
    {
      title: "Get start with Python",
      author: "Pro.Sardar Hussaini",
      pages: 345,
      id: 1,
    },
    {
      title: "Java Development",
      author: "Pro.Mahdi Arveen & Dr.Zekrullah Askari",
      pages: 548,
      id: 2,
    },
    {
      title: "C++ Development with Programming",
      author: "Pro.Mohammad Ali Payenda",
      pages: 849,
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <img src="image/sardar.jpg" alt="Photo is not available" />
      <h1>I learn React soon 🏆🏆🏆</h1>
      <p className="article">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, vitae
        qui fugiat unde harum iste, quidem beatae labore, debitis ducimus dicta
        suscipit consequuntur velit. Officiis reprehenderit voluptatibus
        temporibus a! Quidem?
      </p>
      <p className="person">
        My name is {name} and I am {age} years old.
      </p>
      <button onClick={readMore} className="read">
        Read more ...
      </button>
      <button onClick={showless} className="show hidden">
        show less ...
      </button>
      <div>
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <h3>{blog.title}</h3>
            <h5>{blog.author}</h5>
            <h5>{blog.pages}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
