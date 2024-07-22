import './App.css'
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
console.log(skills);
function App() {

  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SKillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src="avatar.jpg" alt="hari nagle" />
}
function Intro() {
  return (
    <div>
      <h1>Hari nagle</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi magnam et nobis amet rerum, excepturi culpa sequi animi? Voluptate ratione sunt illo necessitatibus maxime facilis id tenetur, tempora in?
      </p>
    </div>
  );
}
function SKillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.id}
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        />
      ))}

      {/* <Skill skill="HTML+CSS" emoji="💪" color="#123456" />
      <Skill skill="JavaScript" emoji="💪" color="orangered" />
      <Skill skill="React" emoji="✌️" color="yellow" />
      <Skill skill="Tailwind" emoji="👶" color="green" />
      <Skill skill="Dot net" emoji="👶" color="#008B8B" /> */}
      
    </div>
  );
 }

function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "✌️"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App
 