import React, {useState} from "react";
import CardPage from "../CardPage";

export default function HomePages() {

    const [activeClass, setClass] = useState(' ');

    const addClassList = () => {
        setClass(!activeClass)
        if (activeClass !== " ") {
            setClass(" ")
        } else {
            setClass('light')
        }

    }

    return (
        <>
            <div className={'cardPage ' + activeClass}>
                <div className="float-end toggle d-flex justify-content-center align-items-center"
                     onClick={addClassList}/>
                <div className="cardPage1 d-flex justify-content-center align-content-center align-items-center">
                    <div className="">
                        <CardPage/>
                    </div>
                </div>
            </div>

        </>
    )
}
