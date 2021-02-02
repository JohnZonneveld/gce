import React, {Component} from 'react';
import { connect } from "react-redux"
import {fetchMembers} from '../actions/memberActions'
import { Link } from "react-router-dom"

// import reducer from '../reducers/reducer'


class MemberList extends Component {

    componentDidMount() {
        this.props.fetchMembers()
    }

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
                                state: { 
                                    detailedMember: member
                                } 
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

const mapStateToProps = state => {

    return {
      members: state.members,
      loading: state.loading
    }
  }

export default connect(mapStateToProps, {fetchMembers})(MemberList)