import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props:{count:number})=> {
    return<div>{props.count}</div>
}

const UsersSecret = (props:{users:Array<string>})=> {
    return <div>{
        props.users.map((u,i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = ()=> {
    console.log("Example1")
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(['Anton', 'Vasya', 'Vika'])
    const addUser=()=> {
        const newUsers = [...users,'Lera'+ new Date().getTime()]
       setUsers(newUsers)
    }

    users.push('Lera'+ new Date().getTime())

    return <>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick= {addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}