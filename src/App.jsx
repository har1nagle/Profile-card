import './App.css'
import "./style.css";

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
      <Skill skill="HTML+CSS" emoji="💪" color="#123456" />
      <Skill skill="JavaScript" emoji="💪" color="orangered" />
      <Skill skill="React" emoji="✌️" color="yellow" />
      <Skill skill="Tailwind" emoji="👶" color="green" />
      <Skill skill="Dot net" emoji="👶" color="#008B8B" />
    </div>
  );
 }

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App
 