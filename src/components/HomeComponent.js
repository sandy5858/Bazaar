import React from 'react';
import { Jumbotron } from 'reactstrap';

function Home(props)  {
    return (
        <div className="container">
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Bazaar</h1>
                            <p>Shop on Doorstep</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    )
}
export default Home;