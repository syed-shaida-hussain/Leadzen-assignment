import { useEffect, useState} from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../Contexts/userContext';
import ReactPaginate from "react-paginate"

const UserInfoPage = () => {
    const navigate = useNavigate()
    const {users , setUsers , setCurrentUser} = useUsers()

    useEffect( () =>  {
        try{
            axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
                setUsers(res.data)})
        }
        catch(e) {
            console.log(e)
        }
    
    },[])

    const [pageNumber , setPageNumber] = useState(0);
    const usersPerPage = 3;
    const usersVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(users.length / usersPerPage)

    const showSingleUserHandler = (user) => {
        setCurrentUser(user)
        navigate(`/users/${user.id}`)
    }

    const changePageHandler = ({selected}) => {
        setPageNumber(selected)
    }

    const displayUsers = users.slice(usersVisited , usersVisited + usersPerPage).map(user => <div key = {user.id}>
        <main className='wrapper'>
            {user.id}
          <div className='company-name'> {user.company.name}</div>
          <div className='flex-c contact'>
            <div className='md-ft-wt sm-ft-sz'>Contact</div>
            <div className='md-ft-sz'>{user.name}</div>
          </div>
          <div className='flex-c contact'>
            <div className='md-ft-wt sm-ft-sz'>City</div>
            <div className='md-ft-sz'>{user.address.city}</div>
          </div>
          <div className='flex-c contact'>
            <div className='md-ft-wt sm-ft-sz'>Street</div>
            <div className='md-ft-sz'>{user.address.street}</div>
          </div>
          <button className='btn sm-ft-sz' onClick={() => showSingleUserHandler(user)}>View Details</button>
        </main>
      </div>)

    return <div>
        {displayUsers}
        <ReactPaginate 
            previousLabel = "Prev"
            nextLabel = "Next"
            pageCount={pageCount}
            onPageChange={changePageHandler}
            containerClassName = {"pagination-buttons"}
            activeClassName = {"pagination-active-btn"}
        />
    </div>
}

export {UserInfoPage}