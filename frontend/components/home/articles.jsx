import React from "react"
import img1 from "../../../app/assets/images/article1.jpg"
import img2 from "../../../app/assets/images/article2.jpg"
import img3 from "../../../app/assets/images/article3.jpg"
import img4 from "../../../app/assets/images/article4.jpg"


const Articles = () => {

    return (
        <ul className="articles-list-wrapper">
            <li className="article-div">
                <img src={img1} className="article-img" />
                <div className="article-body">
                    <h1>First month with your new pup</h1>
                    <p>The first month is the most important to bond with a new dog. Learn what to expect.</p>
                </div>
            </li>
            <li className="article-div">
                <img src={img2} className="article-img" />
                <div className="article-body">
                    <h1>How to Throw a 'Gotcha Day' Pawty</h1>
                    <p>10 tips on throwing the best 'Gotcha Day' party for your pup with tasty treats and fun ideas!</p>
                </div>
            </li>
            <li className="article-div">
                <img src={img3} className="article-img" />
                <div className="article-body">
                    <h1>Staying Active with Your Pup's Help</h1>
                    <p>Stay fit while giving your pup the exercise it needs to stay happy and calm.</p>
                </div>
            </li>
            <li className="article-div">
                <img src={img4} className="article-img" />
                <div className="article-body">
                    <h1>Returning to the Office with a Pandemic Pup</h1>
                    <p>Learn how to help your pup adjust to your absence while you're at work.</p>
                </div>
            </li>
        </ul>
       
    )
}

export default Articles