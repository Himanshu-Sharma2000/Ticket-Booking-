import React, { useState, useEffect ,useRef} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import BookTicket from './BookTicket';
import Typed from 'typed.js';


const Summary = () => {

  const { showid } = useParams();
  const [show, setShow] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);



  const updateNews = async () => {
    const url = `https://api.tvmaze.com/shows/${showid}`;

    let data = await fetch(url);
    let parseData = await data.json();
    

    setShow(parseData);
  }

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["Show Summary"],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100
    });

    // Destropying
    return () => {
        typed.destroy();
    };
}, []);


  useEffect(() => {
    // eslint-disable-next-line
    updateNews();
  }, [])



  const handleBookingClick = () => {
    setShowBookingForm(true);
  };

;
  return (
    <div>
      <div className="clearfix text-light" style={{ padding: "60px 80px" ,background:"url(https://media.istockphoto.com/id/1204686514/vector/modern-cinema-background-realistic-film-strips-in-perspective-wave-form-3d-movie-template.jpg?s=170667a&w=0&k=20&c=H8201ZWqArZDHsGSb-XJ_sqX8yxnabK0J7HeVDUk0sI=) no-repeat center center/cover"}}>

        <img src={show.image ? show.image.medium : "https://static.tvmaze.com/uploads/images/medium_portrait/24/60454.jpg"} className="col-md-6 float-md-end mb-3 ms-md-3" style={{ width: "20rem" }} alt="..." />
        <div className="container mx-4 text-center">
        <h1 className=' mt-4'><span className="fs-3" ref={el}></span> </h1>
        <h4 className=''>Show Name : {show.name?show.name:""} </h4>
        <p  style={{margin:"0px 30px"}}>{show.summary}</p>
        <button onClick={handleBookingClick} className="btn  btn-success my-4  me-5 " type="button">Book Ticket</button>
       {showBookingForm && <BookTicket showName={show.name} />}
       <br />
       <Link to="/" >Back to Show List</Link>
        </div>
      </div>
    </div>
  )
}

export default Summary