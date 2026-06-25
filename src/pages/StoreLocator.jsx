import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import './StoreLocator.css'

const StoreLocator = () => {
  return (
    <>
    <h1>StoreLocator</h1>

       <div className="container">
  <div className="row">

    <div className="col-md-4 mb-4">
      <h4>Pune Branch</h4>
      <address>
        FC Road, Pune <br />
        Maharashtra - 411001
      </address>
      <p>Email: pune@pruthvicecream.com</p>
      <p>Phone: 9876543210</p>
    </div>

    <div className="col-md-4 mb-4">
      <h4>Mumbai Branch</h4>
      <address>
        Andheri West, Mumbai <br />
        Maharashtra - 400053
      </address>
      <p>Email: mumbai@pruthviicecream.com</p>
      <p>Phone: 9876543211</p>
    </div>

    <div className="col-md-4 mb-4">
      <h4>Nashik Branch</h4>
      <address>
        College Road, Nashik <br />
        Maharashtra - 422005
      </address>
      <p>Email: nashik@pruthviicecream.com</p>
      <p>Phone: 9876543212</p>
    </div>

    <div className="col-md-4 mb-4">
      <h4>Nagpur Branch</h4>
      <address>
        Sitabuldi, Nagpur <br />
        Maharashtra - 440012
      </address>
      <p>Email: nagpur@pruthviicecream.com</p>
      <p>Phone: 9876543213</p>
    </div>

    <div className="col-md-4 mb-4">
      <h4>Aurangabad Branch</h4>
      <address>
        CIDCO, Aurangabad <br />
        Maharashtra - 431001
      </address>
      <p>Email: aurangabad@pruthviicecream.com</p>
      <p>Phone: 9876543214</p>
    </div>

    <div className="col-md-4 mb-4">
      <h4>Kolhapur Branch</h4>
      <address>
        Rajarampuri, Kolhapur <br />
        Maharashtra - 416001
      </address>
      <p>Email: kolhapur@pruthviicecream.com</p>
      <p>Phone: 9876543215</p>
    </div>

  </div>
</div>
    </>
  )
}

export default StoreLocator