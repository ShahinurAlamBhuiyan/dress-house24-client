import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddAdmin = () => {
    const [info, setInfo] = useState({})
    const history = useHistory()
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', info.name);
        formData.append('email', info.email);
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                history.push('/')
            })
            .catch(error => {
                console.error(error)
            })

    }
    


    return (
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label for="exampleInputPassword1">Admin Name</label>
            <input onBlur={handleBlur} type="text" className="form-control" name='name' placeholder="Admin Name" />
        </div>
        <div className="form-group">
            <label for="exampleInputPassword2">Admin Email</label>
            <input onBlur={handleBlur} type="text" className="form-control" name='email' placeholder="Admin Email" />
        </div>
        <button type="submit"  className="btn btn-primary">Submit</button>
    </form>
    );
};

export default AddAdmin;