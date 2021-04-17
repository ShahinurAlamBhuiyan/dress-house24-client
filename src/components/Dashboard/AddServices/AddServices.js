import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddServices = () => {
    const history = useHistory();
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);
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
        formData.append('cost', info.cost);

        fetch('https://dress-house.herokuapp.com/addService', {
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
        <div className='mt-3'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputPassword1">Service Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name='name' placeholder="Service Name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Service Cost</label>
                    <input onBlur={handleBlur} type="number" className="form-control" name='cost' placeholder="Service Cost" />
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

export default AddServices;