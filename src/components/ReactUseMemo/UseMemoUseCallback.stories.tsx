import React, {useCallback, useMemo, useState} from 'react'

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(9)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResult = tempResult * i;
        }
        return tempResult
    }, [a])

    resultB = useMemo(() => {
        let tempResultB = 1
        for (let i = 1; i <= b; i++) {
            tempResultB = tempResultB * i;
        }
        return tempResultB;
    }, [b])

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Anton', 'Vasya', 'Viktor'])

    const newArray = useMemo(()=>{
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1);
        return newArray
    },[users])

    const addUser=()=> {
        const newUsers = [...users,'Lera'+ new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() =>addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}



export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Js', 'Css'])

  /*  const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf("a") > -1);
        return newArray
    }, [books])*/

    const memoizedAddBook2 = useCallback(() => {
        console.log('Book')
        const newBook = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBook)
    }, [books])

    /*const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }
    }, [books])*/

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book  addBook={memoizedAddBook2}/>
        {/*<Book books={newArray} addBook={addBook}/>*/}
    </>
}

type BooksSecretPropsType ={
    //books: Array<string>
    addBook: () => void
}

const BooksSecret = (props:BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {
            /*props.books.map((book, i) =>
                <div key={i}>{book}</div>)*/
        }</div>
}

const Book = React.memo(BooksSecret)