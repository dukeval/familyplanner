import { useState } from "react";

export default function Goals({member, onNewGoals}){
    const [newActivity,setNewActivity] = useState("");
    const [newDescription,setNeewDescription] = useState("");
    const [newticketEarned,setNewticketEarned] = useState(0);

    function handleNewGoal(e){
        e.preventDefault();        
        const newChoresForMember = {id:crypto.randomUUID(),activity:newActivity,description:newDescription, ticketEarned:newticketEarned};
        //member = [...member,newChoresForMember];
        onNewGoals(newChoresForMember);
    }

    return (
        <form onSubmit={handleNewGoal}>
            <div className="newActivities">
                <div>
                    <label htmlFor="Activity">Activity Name:</label>
                    <input id="activity" type="text" value={newActivity} onChange={e=>setNewActivity(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input id="description" type="text" value={newDescription} onChange={e=>setNeewDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="ticket">Total Ticket:</label>
                    <input id="ticket" type="number" value={newticketEarned} onChange={e=>setNewticketEarned(e.target.value)} />
                </div>
                <button>Add</button>
            </div>
            
            <div>
                <ul>
                    {member?.listOfChores?.map(chore=>{
                        return <li key={chore.id}>{chore.activity}</li>
                    })}
                </ul>
            </div>
        </form>
    );
}