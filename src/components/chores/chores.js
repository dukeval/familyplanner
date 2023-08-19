export default function Chores({familyMember}){
    return (
    <div className="chores">
        <div>
            <h1>{familyMember?.name}</h1>
        </div>
        <div>
            <ul>
                <div className="choresList">
                {
                    familyMember?.listOfChores?.map(chore=>{
                    return (
                        <li key={chore.id}>
                            <a href="/">
                                <div className="choreContainer">
                                    <h3>{chore.activity}</h3>
                                    <span><img src={chore.image} alt={chore.activity} /></span>
                                    <p>
                                        {chore.description}
                                    </p>
                                    <footer className="choreFooter">
                                        <span>
                                            <h4>Schedule: {chore.schedule}</h4>
                                        </span>
                                        <span>
                                            <h4>Ticket: {chore.ticketEarned}</h4>
                                        </span>
                                    </footer>                                
                                </div>
                            </a>
                        </li>
                    )})
                }</div>
            </ul>
        </div>
        <div>
                Total Ticket Earned: 
                {familyMember?.listOfChores?.reduce((n, {ticketEarned})=>{
                    return ((typeof(n)==="object"?n.ticketEarned:n) + Number(ticketEarned))
                },0)}
        </div>
    </div>);
}