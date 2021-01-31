import React, {Component} from 'react';
import { connect } from 'react-redux'

// import { useParams } from 'react-router-dom';

class MemberList extends Component {

    membersList = () => {
        return this.props.members.map(

            member => {
                <div>
                    <p>{member.name}</p>
                </div>
            }
                
        )
    }
    render() {
        return (
            <div>
                {}
            </div>
        )
    }

}

export default MemberList