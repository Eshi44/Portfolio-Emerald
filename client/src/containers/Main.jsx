import React, {Component} from 'react';

class Main extends Component {
    render () {
        return (
           <>
            <section id="frontpage" className="top-container flex" style={{height: 20 }}>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="title">
                    <div className="row">
                        <div className="col-sm-1 col-md-1 col-lg-2"></div>
                        <div className="col-sm-10 col-md-10 col-lg-8">
                            <span id="intro">Hi! </span>
                            <span id="intro"> I'm Emerald 
                                <img id = "emerald-img"
                                id="emerald"
                                src="assets/img/emerald.png"
                                alt="emerald"
                                height="80px"
                            /></span>
                            
                            <span id="intro"> </span> 
                            <p id="introtext">
                                I'm baby asymmetrical brunch kinfolk narwhal leggings, bitters
                                vaporware actually retro chartreuse organic disrupt brooklyn.
                                8-bit street art twee sriracha prism crucifix pinterest raw denim
                                selvage drinking vinegar.
                            </p>
                            <button type="button" id="button" className="btn btn-outline-success">
                                View more <i className="fas fa-arrow-down"></i></button>
                            <div className="col-sm-1 col-md-1 col-lg-2"></div>
                        </div> 
                    </div> 
     
             </div> 
             </section>
            
            </>
        );
    }
}
export default Main;