import React, {Component} from 'react';

class MemberList extends Component {

    render() {

        return (
        <>
        <h1>Members List</h1>
        <p>Here is a listing of our members:</p>
        <ul>
        {this.props.members.map((member, index) => (
            <li key={index}> {member.name}, {member.bike}</li>
        ))}
        </ul>
        </>);
        
    }

}

export default MemberList