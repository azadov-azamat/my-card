import React from "react";
import CardPage from "../CardPage";

export default function HomePages() {

    const cardPage = document.querySelector('.cardPage');
    const toggle = document.querySelector('.toggle');
    toggle.onclick = function (){
        cardPage.classList.toggle('dark')
    }

    return (
        <>
            <div className='cardPage'>
                <div className="float-end toggle d-flex justify-content-center align-items-center"/>
                <div className="cardPage1 d-flex justify-content-center align-content-center align-items-center">
                    <div className="">
                        <CardPage/>
                    </div>
                </div>
            </div>

        </>
    )
}
