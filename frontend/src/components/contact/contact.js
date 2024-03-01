import { useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

import './contact.css'

export default function Contact() {

 

 
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    
    
    const navigate= useNavigate()
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};

    function handlecontact(e){
        e.preventDefault()
        setLoading(true)
          axios.put(`https://online-food-website.onrender.com/Contact/user/Message/`+ userInfo._id,{message})
          .then((result)=>{ 
            alert(result.data.message)
            navigate('/')
            setLoading(false)
        })
          .catch(err=>{alert("Login to send Message")})
        
    }

    return (
            <div className="contact-container">
            <div className="contact-form">
            <h2 className="contact-title">Contact US</h2>
                        <form onSubmit={handlecontact} >
                        <input required type="text" placeholder='name' className='form-control' value={userInfo.name}/>
                        <input required type="email" placeholder='email' className='form-control' value={userInfo.email} />
                        <br /><textarea required  placeholder="Your Message" onChange={(e) => setMessage(e.target.value)}/>
                        
                        {!userInfo.name ? (<button className='btn contact-btn' disabled >Login to Submit</button>):
                        (<button className='btn btn-standard' disabled={loading} onClick={handlecontact}>
                        {loading && <i className='fa fa-refresh fa-spin'></i>}
                        {loading && <span>loading..</span>}
                        {!loading && <span>Submit</span>}
                      </button>)}
                        
                       
                        </form>
                    </div>
                </div>
    )
}
