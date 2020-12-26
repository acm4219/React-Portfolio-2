import React from "react";
import { Link } from "react-router-dom";
import "../styles/jumbotron.css"

function Jumbotron(){
        return(
        <div>
            <div className="container">
            <div className="jumbotron jumbotron-center">
                <h1 className="display-4">Alexander McDonald Portfolio</h1>
                <hr />
                <div className="row">
                    <div className="col d-flex justify-content-center">
                    <Link className="btn btn-primary btn-lg" to="/home">Check it out!</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Jumbotron;