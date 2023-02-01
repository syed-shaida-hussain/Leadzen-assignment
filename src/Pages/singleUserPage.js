import { useNavigate } from "react-router-dom"
import { useUsers } from "../Contexts/userContext";

const SingleUserPage = () => {
    const navigate = useNavigate();
    const { currentUser } = useUsers();

return <div className="bg-white">
        <main className='wrapper bg-white'>
          <div className='company-name'> {currentUser.company.name}</div>
          <div className='flex-c contact'>
            <div className='md-ft-wt sm-ft-sz'>Contact</div>
            <div className='md-ft-sz'>{currentUser.name}</div>
          </div>
          <div className='flex-c contact'>
            <div className='md-ft-wt sm-ft-sz'>City</div>
            <div className='md-ft-sz'>{currentUser.address.city}</div>
          </div>
          <div className='flex-c contact'>
            <div className='md-ft-wt sm-ft-sz'>State</div>
            <div className='md-ft-sz'>{currentUser.address.street}</div>
          </div>
          <button className='btn sm-ft-sz' onClick={() => navigate('/users')}>Hide Details</button>
        </main>
        <section className="description">
            <h3 className="mb1">Description</h3>
            <div className="mb1">{currentUser.company.catchPhrase}.</div>

            <section className="flex-r address">
                <div >
                   <h4>Contact Person</h4>
                   <div className="mb1">{currentUser.name}</div>
                   <h4 >Username</h4>
                   <div className="mb1">{currentUser.username}</div>
                   <h4 >Emails</h4>
                   <div className="mb1">{currentUser.email}</div>
                   <h4 >Phones</h4>
                   <div>{currentUser.phone}</div>
                </div>
                <div >
                   <h4 >Address</h4>
                   <div className="mb1">{currentUser.address.street} {currentUser.address.city} {currentUser.address.zipcode}</div>
                   <h4 >City</h4>
                   <div className="mb1">{currentUser.address.city}</div>
                   <h4 >Street</h4>
                   <div className="mb1">{currentUser.address.street}</div>
                   <h4 >Website</h4>
                   <div>{currentUser.website}</div>                
                </div>
            </section>
        </section>
    </div>}

export {SingleUserPage}