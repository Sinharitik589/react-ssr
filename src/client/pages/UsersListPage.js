import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchUsers} from "../actions"

class UserListPage extends Component{

    componentDidMount()
    {
        this.props.fetchUsers();
    }

    renderUsers (){
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }


    render()
    {
        return (
            <div>
                Here is a big list of users:-
                <ul>
                    {this.renderUsers()}   
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => { return { users } };
function loadData(store) {
    return store.dispatch(fetchUsers());
};
export { loadData };
export default {
    component: connect(mapStateToProps, { fetchUsers })(UserListPage),
    loadData
} ;