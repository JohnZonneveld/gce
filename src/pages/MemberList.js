import React, {Component} from 'react';
import { Link } from "react-router-dom"

class MemberList extends Component {

    render() {

        return (
                    <div className="content">
                    <h1>Members List</h1>
                    <p>Here is a listing of our members:</p>
                    <ul>
                    {this.props.members.map((member, index) => (
                        
                        <li key={member.id}>  
                            <Link to={{
                                pathname:"/members/" + member.id,
                                props: { members: member} 
                            }}>
                                {member.name}
                            </Link>
                            {member.role ? `, ${member.role}` : ''}
                        </li>
                    ))}
                    </ul>
                    </div>);
}
}

export default MemberList