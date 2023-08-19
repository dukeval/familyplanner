import { useState } from "react";
import "./navigation.styles.scss";
import Chores from "../chores/chores";
import Goals from "../goals/goals";

const Navigation =() =>{
  const [showChores,setShowChores]= useState(false);
  const [goals,setGoals]= useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [familyMember, setFamilyMember] = useState([{name:"",listOfChores:null},
                                                    {name:"Emilia Valerius", 
                                                    listOfChores:[
                                                      {id:1,activity:"Vacuuming",image:"",description:"Vacuum the house.  That includes the kitchen, dinning room and living room.",schedule:"M W", ticketEarned:2}
                                                    ]},
                                                    {name:'Miles Valerius', 
                                                    listOfChores:[
                                                      {id:1,activity:'Trash',image:'https://picsum.photos/id/27/250/150',description:"Checkign",schedule:'T F', ticketEarned:1},
                                                      {id:2,activity:'Place and return trash can',image:'https://picsum.photos/id/25/250/150',description:"Checkign",schedule:'T F', ticketEarned:1},
                                                      {id:3,activity:'Keep Room Clean',image:'https://picsum.photos/id/23/250/150',description:"Checkign",schedule:'T F', ticketEarned:0},
                                                      {id:4,activity:'Wash Dished',image:'https://picsum.photos/id/21/250/150',description:"Checkign",schedule:'T F', ticketEarned:1},
                                                      {id:5,activity:'Cook',image:'https://picsum.photos/id/19/250/150',description:"Checkign",schedule:'T F', ticketEarned:2}]}
                                                    ])
  
  function handleFamilyMemberChanges(member){
    console.log(member);
    selectedMember.listOfChores = [...selectedMember?.listOfChores,member];
    setGoals(false);
    setShowChores(true);
  }

  function handleMemberChange(member){
    setSelectedMember(familyMember.find(x=> x.name===member));
  }

  function handleChores(status){
    setShowChores(status);
  }

  function handleGoals(){
    handleChores(false);
    setGoals(true);
  }

  return (
    <div className="container">
      <div className="topBar">
        <h1>Family Planner</h1>
        <div>
          <select onChange={(e)=>handleMemberChange(e.target.value)}>
            {familyMember.map(member=>{
              return <option key={member.name} value={member.name}>{member.name}</option>
            })}
          </select>
        </div>
      </div>
      <div className="mainBody">
        <div className="sideBar">
          <div className="navigation">
            <div>Icon</div>
            <div className="navHeading">Dashboard</div>
          </div>        
          <div className="subNavigation">
            <div><a onClick={()=>handleChores(true)}>Chores</a></div>
            <div><a onClick={handleGoals}>Goals</a></div>
            <div><a href="/">Calendar</a></div>
            <div><a href="/">Finance</a></div>
            <div><a href="/">Messages</a></div>
          </div>
        </div>
          <div className="contents">
          {(showChores) &&
          <div>
            <Chores familyMember={selectedMember}/>
          </div>}
          {(goals && !showChores)&& <Goals member={selectedMember} onNewGoals={handleFamilyMemberChanges}/>}
          {(!showChores && !goals ) &&
          <div>
            <div>
              Proident aliqua ullamco id est. Aliquip sit officia adipisicing sunt pariatur. Laborum enim et tempor occaecat adipisicing ut cupidatat do sit laboris eiusmod sit est aliquip.
            </div>
            <br/>
            <div>
              Ut deserunt deserunt ipsum dolore est aliquip labore in occaecat officia sit incididunt voluptate. Nisi exercitation cillum commodo nostrud eu magna enim non do occaecat voluptate. Ullamco aliqua anim incididunt officia nulla adipisicing. Eu fugiat fugiat exercitation exercitation dolore.

  Nostrud voluptate laborum labore incididunt est nisi nisi. Sit qui reprehenderit proident duis velit nostrud minim magna laborum ex ut cupidatat ullamco. Aliquip aliqua adipisicing anim laboris eu duis voluptate id culpa consectetur officia. Ea cillum esse enim aute excepteur culpa labore est veniam Lorem labore laborum enim nisi.

  Deserunt eu ad dolor id magna pariatur ea aute eiusmod cupidatat ipsum sit est. Nostrud cillum culpa cillum nisi commodo est pariatur elit nostrud in nulla dolore quis. Sit et dolore enim elit nulla eu. Aute ex sit anim qui elit ullamco eiusmod. Cupidatat commodo aute aute mollit quis esse irure adipisicing consequat. Laboris consectetur anim excepteur do incididunt elit nulla sunt cillum ea. Pariatur veniam consequat anim proident nisi et in culpa et officia eu adipisicing consectetur.
            </div>
            <br/>
            <div>
              Ut deserunt deserunt ipsum dolore est aliquip labore in occaecat officia sit incididunt voluptate. Nisi exercitation cillum commodo nostrud eu magna enim non do occaecat voluptate. Ullamco aliqua anim incididunt officia nulla adipisicing. Eu fugiat fugiat exercitation exercitation dolore.

  Nostrud voluptate laborum labore incididunt est nisi nisi. Sit qui reprehenderit proident duis velit nostrud minim magna laborum ex ut cupidatat ullamco. Aliquip aliqua adipisicing anim laboris eu duis voluptate id culpa consectetur officia. Ea cillum esse enim aute excepteur culpa labore est veniam Lorem labore laborum enim nisi.

  Deserunt eu ad dolor id magna pariatur ea aute eiusmod cupidatat ipsum sit est. Nostrud cillum culpa cillum nisi commodo est pariatur elit nostrud in nulla dolore quis. Sit et dolore enim elit nulla eu. Aute ex sit anim qui elit ullamco eiusmod. Cupidatat commodo aute aute mollit quis esse irure adipisicing consequat. Laboris consectetur anim excepteur do incididunt elit nulla sunt cillum ea. Pariatur veniam consequat anim proident nisi et in culpa et officia eu adipisicing consectetur.
            </div>
            <br/>
            <div>
              Ut deserunt deserunt ipsum dolore est aliquip labore in occaecat officia sit incididunt voluptate. Nisi exercitation cillum commodo nostrud eu magna enim non do occaecat voluptate. Ullamco aliqua anim incididunt officia nulla adipisicing. Eu fugiat fugiat exercitation exercitation dolore.

  Nostrud voluptate laborum labore incididunt est nisi nisi. Sit qui reprehenderit proident duis velit nostrud minim magna laborum ex ut cupidatat ullamco. Aliquip aliqua adipisicing anim laboris eu duis voluptate id culpa consectetur officia. Ea cillum esse enim aute excepteur culpa labore est veniam Lorem labore laborum enim nisi.

  Deserunt eu ad dolor id magna pariatur ea aute eiusmod cupidatat ipsum sit est. Nostrud cillum culpa cillum nisi commodo est pariatur elit nostrud in nulla dolore quis. Sit et dolore enim elit nulla eu. Aute ex sit anim qui elit ullamco eiusmod. Cupidatat commodo aute aute mollit quis esse irure adipisicing consequat. Laboris consectetur anim excepteur do incididunt elit nulla sunt cillum ea. Pariatur veniam consequat anim proident nisi et in culpa et officia eu adipisicing consectetur.
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navigation;
