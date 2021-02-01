import React from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';

function MemberPage() {

    let { id } = useParams();
    // let member  = this.props.members.find(member => (member.id === id))
    console.log(this.props.members)
    return (

        <>
            <h1>Member Info {id}</h1>
            
            {/* Name: {member.name} */}

            

        </>

    );

}

const mapStateToProps = state => {

    return {
      members: state.members,
      loading: state.loading
    }
  }

  export default connect(mapStateToProps)(MemberPage)