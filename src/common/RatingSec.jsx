import React, { useEffect, useState } from 'react'
import './Rating.css'
import { FaAngleUp, FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const RatingSec = () => {


    const[ratingCalcu,setRatingCalcu] = useState(false);

    const[progress,setProgress] = useState(0);
    const[fiveStar,setFiveStar] =useState(progress);
    const[fourStar,setFourStar] =useState(progress);
    const[threeStar,setThreeStar] =useState(progress);
    const[twoStar,setTwoStar] =useState(progress);
    const[oneStar,setOneStar] =useState(progress);

    useEffect(()=>{
            setInterval(()=>{
                setProgress((val) => val+1)
            },300)
    },[])


    useEffect(()=>{
        if(fiveStar < 73){
            setTimeout(()=>{
                setFiveStar((newVal) => newVal + 1)
            },200)
        }
    },[fiveStar])

    useEffect(()=>{
        if(fourStar < 33){
            setTimeout(()=>{
                setFourStar((newVal) => newVal + 1)
            },200)
        }
    },[fourStar])
    
    useEffect(()=>{
        if(threeStar < 23){
            setTimeout(()=>{
                setThreeStar((newVal) => newVal + 1)
            },200)
        }
    },[threeStar])
    
    useEffect(()=>{
        if(twoStar < 12){
            setTimeout(()=>{
                setTwoStar((newVal) => newVal + 1)
            },200)
        }
    },[twoStar])
    
    useEffect(()=>{
        if(oneStar < 25){
            setTimeout(()=>{
                setOneStar((newVal) => newVal + 1)
            },200)
        }
    },[oneStar])
    return (
        <div>
                <h3 className='text-white'>Customer Review</h3>
                <p> <span className='text-warning rateIcon'> <FaStar/>  <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/> </span> <span className='ms-2 text-white rateCon' > 4.5 out of 5</span> </p>
                <p style={{color:"gray"}}>305 global ratings</p>

                <div className='mainRateHead' style={{display:"flex"}}>
                <div className="ratingPart"> 5 Star </div>
                    <div className="progressBar">
                        <div className="progressFill" style={{width:`${fiveStar}%`}}> {fiveStar} % </div>
                    </div>
                </div>
                
                <div className='mainRateHead my-2' style={{display:"flex"}}>
                <div className="ratingPart"> 4 Star </div>
                    <div className="progressBar">
                        <div className="progressFill" style={{width:`${fourStar}%`}}> {fourStar} % </div>
                    </div>
                </div>

                
                <div className='mainRateHead' style={{display:"flex"}}>
                <div className="ratingPart"> 3 Star </div>
                    <div className="progressBar">
                        <div className="progressFill" style={{width:`${threeStar}%`}}> {threeStar} % </div>
                    </div>
                </div>

                
                <div className='mainRateHead my-2' style={{display:"flex"}}>
                <div className="ratingPart"> 2 Star </div>
                    <div className="progressBar">
                        <div className="progressFill" style={{width:`${twoStar}%`}}> {twoStar}  </div>
                    </div>
                </div>

                
                <div className='mainRateHead' style={{display:"flex"}}>
                <div className="ratingPart"> 1 Star </div>
                    <div className="progressBar">
                        <div className="progressFill" style={{width:`${oneStar}%`}}> {oneStar} % </div>
                    </div>
                </div>

                <div className="ratingCalculated mt-4" style={{color:"white"}}>
                   <p>How are ratings calculated?  <FaAngleDown onClick={()=> setRatingCalcu(true)}/> <FaAngleUp onClick={()=> setRatingCalcu(false)}/></p>
                   {
                    ratingCalcu ? "To calculate the overall star rating and percentage breakdown by star, we don’t use a simple average. Instead, our system considers things like how recent a review is and if the reviewer bought the item on Amazon. It also analyses reviews to verify trustworthiness.": null
                   } 
                </div>

                <div>
                <div>
                    
                </div>
                </div>
        </div>
    )
}

export default RatingSec
