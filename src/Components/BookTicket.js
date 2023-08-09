import React, { useState } from 'react'

const BookTicket = (props) => {

    let { showName } = props;

    const [formData, setFormData] = useState({name: showName, });

    // Add other relevant details here


    const handleFormSubmit = e => {
        e.preventDefault();
       localStorage.setItem("user",formData);
        console.log('Form data submitted:', formData);
    };


    const onChange =(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
      }
      

    return (
        <div>

            <form onSubmit={handleFormSubmit}>
            <div className="conatiner bg-dark py-4" style={{width:"60%" ,marginLeft:"95px", background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDpyOkmjtmEsPpQAbKAn8SnPMMi1zSISt0Q&usqp=CAU) no-repeat center center/cover"}}>
                   <div className="mb-3 text-center">
                  
                        <label htmlFor="show" className="form-label">Show Name</label>
                        <input type="text" className="form-control text-center" id="name" onChange={onChange} value={formData.name} aria-describedby="emailHelp" style={{width:"50%" , margin:"auto"}}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="seats" className="form-label">No. of Seats </label>
                        <input type="text" className="form-control text-center" value={formData.seats} onChange={onChange} id="seats" style={{width:"50%", margin:"auto"}}/>
                    </div>


                    <button type="submit" className="btn btn-primary">Book Now</button>
                </div>
            </form>
        </div>
    )
}

export default BookTicket