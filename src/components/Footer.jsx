import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div>
          <div className="container">
            <div className="row text-center">
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <p className="footer_p">For more information about VENTUREVAULT and how to participate, please visit our website at <a href="#">https://venture.cgc.ac.in/</a> tbiventurenest or contact us at <a href="#">venturenest@cgc.ac.in</a>
                    </p>

                    <h4>Follow Us:</h4>
                    <span>
                        <div className="icons">
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                        <div className="icons">
                            <a href="#">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                        <div className="icons">
                            <a href="#">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </span>
                    <p className="italy">Join Venture Vault today and be part of a transformative journey towards innovation and success!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
