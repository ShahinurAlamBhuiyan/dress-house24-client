import React from 'react';

const HeaderMain = () => {
    return (
        <main className='row d-flex align-items-center pl-3' style={{height:'500px'}}>
            <div className="col-md-4 col-sm-12 col-12 offset-md-1 fontContainer">
                <h1 >We are the best <br/> Tailor </h1>
                <p className='text-justify pr-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur nisi quisquam optio temporibus dignissimos quos nobis corporis quia culpa aliquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam consectetur quo deleniti obcaecati eveniet sapiente incidunt veniam corporis alias rem?</p>
                <button className='btn btn-primary' >GET APPOINTMENT</button>
            </div>
        </main>
    );
};

export default HeaderMain;