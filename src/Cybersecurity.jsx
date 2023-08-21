import React from 'react'
import './Cybersecurity.css'

function Cybersecurity() {
  return (
    <>
    <div className="c1">
    <h1>What is Cyber Security?</h1>&nbsp; &nbsp;
    <p> Cyber security
    is the practice of defending computers, servers,
     mobile devices, electronic systems, networks, and data from malicious attacks.
      It's also known as information technology security or electronic information security.
       The term applies in a variety of contexts, from business to mobile computing, 
    and can be divided into a few common categories.</p>&nbsp; &nbsp; &nbsp;
    <div>
      <div className='img'>
        <img src="https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/What-is-Cyber-Security.jpg"></img>
      </div>
    <ul className="a">
  <li>   <b>Network security</b> is the practice of securing a computer network from intruders, 
    whether targeted attackers or opportunistic malware.</li>&nbsp; &nbsp;
  <li> <b>Application security</b> focuses on keeping software and devices free of threats. 
    A compromised application could provide access to the data its designed to protect. Successful security begins in the design stage,
     well before a program or device is deployed.</li>&nbsp; &nbsp; 
  <li><b>Information security</b> protects the integrity and privacy of data, both in storage and in transit.</li>
</ul> 
    </div>
    </div>
    </>
    
  )
}

export default Cybersecurity