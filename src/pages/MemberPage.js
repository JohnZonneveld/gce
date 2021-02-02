import React, { Component } from 'react'

class MemberPage extends Component {

    render() {
        let searchId = this.props.match.params.id 
        let member = this.props.location.state.detailedMember
        console.log({member})
        return (
            <div className="content">
                <h1>Member Info {searchId} {member.name}</h1>
                <table>
                    <tr>
                        <td>
                            Name:
                        </td>
                        <td></td>
                        <td>
                            {member.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Country:
                        </td>
                        <td></td>
                        <td>
                            {member.country}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Home Town:
                        </td>
                        <td></td>
                        <td>
                            {member.hometown}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Bike:
                        </td>
                        <td></td>
                        <td>
                            {member.bike}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Role in Club:
                        </td>
                        <td></td>
                        <td>
                            {member.role}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Bio:
                        </td>
                        <td></td>
                        <td>
                            {member.bio}
                        </td>
                    </tr>
                </table>
            </div>
        );
    } 
    
    
}

  export default MemberPage
