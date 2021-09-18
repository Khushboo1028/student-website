import React, { useState, useEffect } from 'react'
import axios from "axios";

const HomeIntro = () => {


    const [users, setUsers] = useState([]);
    const [studentId, setStudentId] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [gpa, setGpa] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [searchedStudents, setSearchedStudents] = useState([]);

 
    useEffect(() => {
        //api call here
        axios
            .get('http://localhost:3000/students/')
            .then(function (response) {

                console.log(response.data);
                setUsers(response.data);

           
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    const handleSubmit=(e)=>{
    
        const newStudent = {studentId, firstname, lastname, email, address, gpa}
        console.log(newStudent);

        axios.post('http://localhost:3000/students/', newStudent)
        .then((response)=>{
            
            console.log(response);
            alert("Succesfully Added Student");
        })
        .catch((error)=>{
            alert(error);
            console.log(error);
        })


    }

    const handleSearch=(e)=>{
        console.log("I am here");
        axios.get(`http://localhost:3000/students/${searchTerm}`)
        .then((response) => {
            console.log(response);
            setSearchedStudents(response.data);
     
        })
        .catch((error) => {
            alert(error);
        })

        e.preventDefault();
    }

    
    return (
        <div>
            <h1>ADD Students</h1>
            <form>
                <label>Student ID:</label> 
                <input value={studentId}  type="number" id="studentId" onChange={(event)=> setStudentId(event.target.value)}></input>
                <br/>

                <label>First Name:</label>
                <input value={firstname}  type="text" id="firstname" onChange={(event)=> setFirstname(event.target.value)}></input>
                <br/>

                <label>Last Name:</label>
                <input value={lastname}  type="text" id="lastname" onChange={(event)=> setLastname(event.target.value)}></input>
                <br/>

                <label>Email:</label>
                <input value={email}  type="text" id="email" onChange={(event)=> setEmail(event.target.value)}></input>
                <br/>

                <label>Mailing Address:</label>
                <input value={address}  type="text" id="address" onChange={(event)=> setAddress(event.target.value)}></input>
                <br/>

                <label>GPA:</label>
                <input value={gpa}  type="number" id="gpa" onChange={(event)=> setGpa(event.target.value)}></input>

                <br/>
                
                <input type="submit" onClick={handleSubmit}/>



            </form>

    

            <h1>All Students</h1>
           <table >
           <tr>
                <th> Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mailing Address</th>
                <th>GPA</th>
            </tr>

            {users.map((user) => {
                return <tr>
                <td>{user.studentId}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.gpa}</td>

                </tr>
            })}

           </table>

           <h1>Search for Students</h1>

           <form>
               <label>Search</label>
               <input type="text" value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)}/>

               <input type="submit" value="Search" onClick={handleSearch}/>
           </form>

           <table >
           <tr>
                <th> Student ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mailing Address</th>
                <th>GPA</th>
            </tr>

            {searchedStudents.map((user) => {
                return <tr>
                <td>{user.studentId}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.gpa}</td>

                </tr>
            })}

           </table>
           


        </div>
        
    )
}

export default HomeIntro
