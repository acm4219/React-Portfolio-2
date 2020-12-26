import React from "react";
import "../styles/jumbotron.css";

function ContactInfo(){
    const style={
        background:{
            backgroundColor: "#99B898",
            width: "100%",
            height: "90%",
            position: "absolute"
        }
    }
    return(
        <div style={style.background}>
        <div className="container">
         <div className="card mt-5 p-5">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img className="w-100 p-3 h-100 d-inline-block" src={process.env.PUBLIC_URL + "/photoAssets/Professional pic.JPG"} alt="professionalpic" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Contact Info</h5>
                        <hr />
                        <table>
                            <tbody>
                                <tr>
                                    <td>Email: <a  href = "mailto: acm4219@gmail.com">acm4219@gmail.com</a></td>
                                    <td className="pl-3">Phone Number: (763)-614-8255</td>
                                    <td className="pr-2">GitHub: <a href="https://github.com/acm4219">acm4219</a></td>
                                    <td>LinkedIn: <a href="https://www.linkedin.com/in/alexander-mcdonald-80b52a166/">LinkedIn Profile</a></td>
                                    <td className="pl-1">Resume: <a href="https://docs.google.com/document/d/1NAkbvXWE4RRzWK9Uq1Uqlz-iJCPX5mVleTTRK_GvrxY/edit?usp=sharing">Resume 2020</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
     </div>
    

    )
}

export default ContactInfo;