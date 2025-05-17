import Title from "../components/Title"
import { skills } from "../utils/constant"


function Skills() {
  return (
    <div id="skills" className="pt-40">
    <div className="container">
    <Title title='my' highlight='skills' subtitle="Here Are Some Of The Technology I've worked with Recently" />    

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6 mt-10">
    {skills.map(skill =>{
        return(
        <div key={skill.id} className="flex items-center gap-2 flex-col">
            <img className="size-12 hover:-translate-y-2 transition-transform duration-500 ease-in-out md:size-16 mt-6" src={skill.icon} alt={skill.name} />
            <span className="font-bold">{skill.name}</span>
        </div>
        );
    })}
    </div>
    </div>        
    </div>
  )
}

export default Skills