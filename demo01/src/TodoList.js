import React, { Component } from 'react';
import store from './store/index';
import { changeInputAction, addItemAction, deleteItemAction, getMyListAction } from './store/actionCreatores'
import TodoListUi from './TodoListUi';

class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange)
    }

    componentDidMount() {
        // redux-thunk
        // const action = getTodoList();
        // store.dispatch(action)

        // redux-sage
        const action = getMyListAction()
        store.dispatch(action)
        console.log(action)
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    clickBtn() {
        const action = addItemAction()
        store.dispatch(action);
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action);
    }

    render() {
        return (
            <TodoListUi
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            />
        )
    }
}

export default TodoList;