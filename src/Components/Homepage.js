import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
import Sidenav from './Sidenav';
import '../'


const Homepage = () => {
    console.log("I am the homepage component")
    const [puppies, setPuppies] = useState(['Snoopy', 'Beethoven', 'Kasha'])
    useEffect(() => {
        async function fetchPuppyData () {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players");
                const puppyData = await response.json();
                console.log("This is the translated JSON response:", puppyData);
                console.log("This is the puppy data for real:", puppyData.data.players);
                
                setPuppies(puppyData.data.players)
            
            } catch (error) {
                console.log(error);
            }
        }
        fetchPuppyData()
}, [])


    return (
        <>
            <div id='mySideNav' className='sideNav'>
                <Sidenav />
            </div>
            
            <div className='titleCard'>
                <h1>Puppy Bowl</h1>
                <h3>Behold!</h3>
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><FaSearch /></button>
            </div>
            
            
            <div className="flexBox">
                <Outlet context={[puppies, setPuppies]} />
                {
                    puppies && puppies.length ? puppies.map((puppy, idx) => {                        
                        return (
                        
                        <div className="PuppyCard" key={idx}>
                            <div>
                                {console.log(puppy.name)}
                                <p>Name of Puppy: {puppy.name}</p>
                                <p>Breed: {puppy.breed}</p>
                                <p>Status: {puppy.status}</p>
                                <p>Entered: {puppy.createdAt}</p>
                                <p>Qualified: {puppy.updatedAt}</p>
                                <p>Want to know more about {puppy.name}?  <button id='infoButton'>Click Here!</button></p>
                                <img className='puppyImage' src={puppy.imageUrl} />
                            </div>
                        </div>
                        
                    )}) : <p>Puppy sleeping yo</p>
                }
                
            </div>
        </>
    )
}

export default Homepage