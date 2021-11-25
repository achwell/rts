import {FC, useEffect, useRef, useState} from 'react'
import {UserSearchProps} from "../classes/UserSearch";

const UserSearch: FC<UserSearchProps> = ({users}) => {
    const inputRef = useRef<HTMLInputElement |null>(null);
    const [name, setName] = useState<string>('')
    const [user, setUser] = useState<{name: string, age: number} | undefined>()

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

  const onClick = () => {
      const foundUser = users.find((user) => {
          return user.name === name
      })
      setUser(foundUser)
  }

  return (
    <div>
      User Search
      <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}/>
      <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
  )
}

export default UserSearch
