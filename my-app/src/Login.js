import React from 'react'
import './Login.css'
import image from './Asset/Nis.jpeg'
const Login = () => {
  return (
    <div style={{backgroundImage:`url(${image})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'100vh'}}>
    <div className='loginstyle' >
      <div className='leftrighthead'>
        <div className='lefthead'><h1>LEARN & DISCOVER.</h1></div>
        <div className='righthead'>
          <h1 className='changefont'>Online Admission Enquiry-2026</h1>
          <div className="formContainer">
            <div className="formGroup">
              <label className='lablename'>Name</label>
              <input type="text" placeholder="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>Father Name</label>
              <input type="text" placeholder="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>Date of Birth</label>
              <input type="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>Gender</label>
              <select>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="formGroup">
              <label className='lablename'>Register Number [+2 / Diploma / UG]</label>
              <input type="text" placeholder="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>Email</label>
              <input type="email" placeholder="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>Mobile Number</label>
              <input type="tel" placeholder="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>Parent Mobile Number</label>
              <input type="tel" placeholder="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>Community</label>
              <select>
                <option value="">Select</option>
                <option>BC</option>
                <option>MBC</option>
                <option>SC</option>
                <option>ST</option>
                <option>OC</option>
              </select>
            </div>

            <div className="formGroup">
              <label className='lablename'>First Graduate</label>
              <select>
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="formGroup">
              <label className='lablename'>Address</label>
              <input type="text" placeholder="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>City / Town</label>
              <input type="text" placeholder="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>District</label>
              <input type="text" placeholder="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>State</label>
              <input type="text" placeholder="" />
            </div>

            <div className="formGroup">
              <label className='lablename'>Course</label>
              <select>
                <option value="">Select</option>
                <option>B.E</option>
                <option>B.Tech</option>
                <option>M.E</option>
              </select>
            </div>

            <div className="formGroup">
              <label className='lablename'>Referred by</label>
              <input type="text" placeholder="" /><br/>
              <button type='submit'>Apply</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
      
    </div>
    
  )
}

export default Login