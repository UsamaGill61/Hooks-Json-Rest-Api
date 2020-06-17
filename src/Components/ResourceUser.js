import React from 'react'
import useResources from './useResources'


 const ResourceUser = () => {
    const users = useResources('users')
    return (
        <div>
            <ul>{users.map((user)=><li key={user.id}>{user.name}</li>)}</ul>
        </div>
    )
}
export default ResourceUser