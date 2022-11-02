import React, {useState} from "react"; 
import ProfilePic from "../Images/Device=Web, State=Default.png";
import "./Profile.css";
const Profile = () => {

        return (
            <div className='bioData'>
                <input type='file' accept='image/*' name='picture' id='profile_img'/>
                <label htmlFor='profilePicture'>
                    <div className='profilePic' role='button' title='click to edit photo'>
                        <img src={ProfilePic} alt=''/>
                    </div>
                </label>
            
            <div className='profileInfo'>
                <p className='name' id="twitter">OLAFISOYETIMIL1</p>
                <p className="username" id="slack"> Timi-Techy</p>
            </div> 
            </div>
        );
    
}

export default Profile;