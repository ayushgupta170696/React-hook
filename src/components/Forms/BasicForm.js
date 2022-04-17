import React from 'react';
import {useState} from 'react';

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setallEntry] = useState("");

  const submitForm = () => {
  //    e.preventDefault();
      const newEntry = {id: new Date().getTime().toString() ,email: email, password:password}
      setallEntry([...allEntry,newEntry]);
    //  console.log(allEntry);
  }
  return (
    <>hello form
    <form action='' onSubmit={submitForm}>
        <div>
            <label htmlFor="email">Email</label><br/>
            <input type = "text" name="email" id="email" autoComplete='off' 
            value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor="password">PAssword</label>
            <br/>
            <input type = "password" name="password" id="password" autoComplete='off' value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button type="submit">Login</button>
    </form>

    <div>
        {
            allEntry.map((curElem)=> {
                return(
                    <div key={curElem.id}>
                        <p> {curElem.email}</p>
                        <p>{curElem.password}</p>
                    </div>
                )
            })
        }
    </div>
    </>       
  )
}

export default BasicForm