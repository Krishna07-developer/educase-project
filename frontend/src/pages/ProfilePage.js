import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {signOut} from "../redux/user/userSlice.js"


const ProfilePage = () => {
  const dispatch = useDispatch()
  const {currentUser} = useSelector(state=>state.user)
  console.log(currentUser);

  const handleSignOut = async()=>{
    try {
      await fetch('https://educase-project.onrender.com/api/signout')
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
        <div className='container'>
          <h1 className='bg-white'>Account Settings</h1>
          <div className='d-flex  gap-3'>
            <img className='rounded-circle w-70 ' height={70} src="https://i.pinimg.com/236x/b9/26/65/b926652e91b122b1dc7b03d54b87cd55.jpg" alt="" />
            <div>
              <h6>{currentUser.fullname}</h6>
              <h6>{currentUser.emailaddress}</h6>
            </div> 
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quos voluptas excepturi a quod vitae doloribus corrupti accusamus temporibus at ex architecto inventore quam eos, reiciendis incidunt animi, nihil repellendus.</p>
      
          <button onClick={handleSignOut}>SignOut</button>
        </div>
    </div>
  );
};

export default ProfilePage;
