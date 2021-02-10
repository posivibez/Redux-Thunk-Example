import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class User extends React.Component {
    componentDidMount() {
        // console.log(this.props);
        //every time post mapped over this is triggered

        //eveytime this called it is simply fetching that users data and adding
        //it to our state array, its not returning that specific user or anything
        //we are just triggering this 
        this.props.fetchUsers(this.props.userId);
    }

    render() {
        const { user } = this.props;

        if(!user) {
            return null;
        }
        
        
        return <div>{user.name}</div>
    }
};

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUsers })(User);