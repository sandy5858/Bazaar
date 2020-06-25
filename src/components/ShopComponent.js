import React, { Component } from 'react';
import logo from '../assets/logo.jpg';

class Shop extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                <a href="#rice" style={{ fontWeight: "bold", margin: "10px" }}>RICE</a>
                <a href="#dal" style={{ fontWeight: "bold", margin: "10px" }}>DAL</a>
                <div id="rice"><h1>RICE</h1></div>
                <div className="row">
                    <div class="card my-2" style={{ width: "15rem", margin: "auto" }}>
                        <img src={logo} className="card-img-top" alt="" style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Katarni Rice</h5><h5>Rs.45</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card my-2" style={{ width: "15rem", margin: "auto" }}>
                        <img src={logo} className="card-img-top" alt="" style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Basmati Rice</h5><h5>Rs.50</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card my-2" style={{ width: "15rem", margin: "auto" }}>
                        <img src={logo} className="card-img-top" alt="" style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Miniket Rice</h5><h5>Rs.42</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card my-2" style={{ width: "15rem", margin: "auto" }}>
                        <img src={logo} className="card-img-top" alt="" style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Gobindo Bhog Rice</h5><h5>Rs.48</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <br />
                <div id="dal"><h1>DAL</h1></div>
                <div className="row">
                    <div class="card my-2" style={{ width: "15rem", margin: "auto" }}>
                        <img src={logo} className="card-img-top" alt="" style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Katarni Rice</h5><h5>Rs.45</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card my-2" style={{ width: "15rem", margin: "auto" }}>
                        <img src={logo} className="card-img-top" alt="" style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Basmati Rice</h5><h5>Rs.50</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card my-2" style={{ width: "15rem", margin: "auto" }}>
                        <img src={logo} className="card-img-top" alt="" style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Miniket Rice</h5><h5>Rs.42</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card my-2" style={{ width: "15rem", margin: "auto" }}>
                        <img src={logo} className="card-img-top" alt="" style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Gobindo Bhog Rice</h5><h5>Rs.48</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Shop;