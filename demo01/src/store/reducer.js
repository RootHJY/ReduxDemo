import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经a理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
}
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = 'Write Something                                                      ';
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)  //删除数组中对应的值
        return newState
    }

    if (action.type === GET_LIST) { //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list //复制性的List数组进去
        return newState
    }
    return state
}