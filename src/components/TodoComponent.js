import React, { Component } from 'react';
import { connect } from 'react-redux';
import todo from '../store/modules/Todo';
import { actionCreators } from '../store/modules/Todo';

class TodoComponent extends Component{
constructor(props) {
    super(props);
    this.state = {
        text: props.text
    }
    this.deleteTodoList = this.deleteTodoList.bind(this);
}
deleteTodoList (){
    this.setState({
        text: ""
    });
    this.props.delTodo()
}

render() {
    return(
        <div className="todo">
            <div className="text">
                { this.state.text }
            </div>
            <button onClick={this.deleteTodoList}>Delete</button>
        </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        delTodo: () => dispatch(actionCreators.subTodoCount(-1))
    }
}

export default connect(undefined,mapDispatchToProps)(TodoComponent);