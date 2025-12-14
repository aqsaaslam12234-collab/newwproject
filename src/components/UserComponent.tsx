import { useState } from "react"

const UserComponent = () => {
    const[user, setUser] = useState ({
        name: " ",
        email: " ",
        grade: " "
        
    })
    const handleChange = (e) => {
        const{name, Value} = e.target;
        setUser({
            ...user,
            [name]: Value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(user);
    }
    // fetch ('https://jsonplaceholder.typicode.com/users')
    // .then((Response) => Response.json())
    // .then((data) => console.log(data));
    const fetchUserData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

  return (
    <div>
      <h1>User Data</h1>
<form onSubmit={handleSubmit}>
     <label htmlFor="name">
        Name
      </label>
      <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
      <label htmlFor="email">Email</label>
      <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
      <label htmlFor="grade">Grade</label>
      <input type="number" value={user.grade} onChange={(e) => setUser({...user, grade: e.target.value})} />
        <button type="submit">Submit</button>
</form>
     
    </div>
  )
}

export default UserComponent
