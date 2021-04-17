import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddReview = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);
    const history = useHistory();
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
        formData.append('address', info.address);

        fetch('http://localhost:5000/addReview', {
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
    console.log(info)
    return (
        <div className='mt-5'>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="exampleInputPassword1">Your Name</label>
                <input onBlur={handleBlur} type="text" className="form-control" name='name' placeholder="Name" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Description</label>
                <input onBlur={handleBlur} type="text" className="form-control" name='description' placeholder="Description" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Address</label>
                <input onBlur={handleBlur} type="text" className="form-control" name='address' placeholder="where are you from ?" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Upload image</label>
                <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Image" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
};

export default AddReview;