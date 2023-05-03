import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { addPin } from '../../actions'
import { Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Modal = (props) => {
    let history = useHistory();
    // const handleSubmit = React.useCallback((e) => {
    //     e.preventDefault
    // }, []);

    const dispatch = useDispatch();
    const [ModalClose, setModalClose] = useState(true);
    const handleModalClose = () => {
        setModalClose(!ModalClose)
    }

    const handleSubmit = React.useCallback((e) => {
        e.preventDefault();
        const postData = {
            "pin_id": 12,
            "name": e.target.name.value,
            "lat": e.target.Latitude.value,
            "lng": e.target.Longitude.value,
            "address": e.target.Address.value,
            "notes": e.target.Notes.value,
            "tags": [e.target.tag.value],
            "thumb": "M20 20C18.61 20 17.22 19.53 16 18.67C13.56 20.38 10.44 20.38 8 18.67C6.78 19.53 5.39 20 4 20H2V22H4C5.37 22 6.74 21.65 8 21C10.5 22.3 13.5 22.3 16 21C17.26 21.65 18.62 22 20 22H22V20M20 16C18.61 16 17.22 15.53 16 14.67C13.56 16.38 10.44 16.38 8 14.67C6.78 15.53 5.39 16 4 16H2V18H4C5.37 18 6.74 17.65 8 17C10.5 18.3 13.5 18.3 16 17C17.26 17.65 18.62 18 20 18H22V16M22 2H2V4H6V16H18V4H22M9 4H11V10H9M13 8H15V14H13Z",
            "colour": e.target.colour.value,
            "user_id": 1
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            }
        };

        fetch('/api/*', options)
            .then(r => r.json())
            .then(() => e.target.reset())
            .catch(console.warn)

        dispatch(addPin(postData))

        history.push('/map')
    }, []);


    return (
        <Route exact path="/map/addpin" >
            <div className='font-light fixed w-full h-100 inset-0 overflow-hidden flex justify-center items-center'
                style={{ background: "rgba(0,0,0,.7)" }}>


                <div className="p-12 bg-white mx-auto rounded-3xl w-3/4 lg:w-1/2 h-auto ">


                    <div className="container-content ">

                        <div className="flex justify-end items-center pb-1">

                            <div className="modal-close cursor-pointer  transform transition-all hover:scale-110" onClick={() => props.updateOpen()}>
                                <svg className="mb-1" width="18" height="18"
                                    viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                    </path>
                                </svg>
                            </div>
                        </div>

                        <h3 className="text-center font-semibold text-2xl text-center">Add Pin</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium  tracking-wide">Name: </label>
                                    <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Pin name" name="name" type="text" defaultValue={props.name}></input>
                                </div>
                                <div className="flex items-center justify-around">
                                    <div className="w-full mr-3">
                                        <label htmlFor="Latitude" className="text-sm font-medium  tracking-wide">Latitude: </label>
                                        <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Latitude" name="Latitude" type="number" step="any" defaultValue={props.lat}></input>
                                    </div>


                                    <div className="w-full ml-3">
                                        <label htmlFor="Longitude" className="text-sm font-medium  tracking-wide">Longitude: </label>
                                        <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Longitude" name="Longitude" type="number" step="any" defaultValue={props.lng}></input>
                                    </div>
                                </div>


                                <div className="space-y-2">
                                    <label htmlFor="Address" className="text-sm font-medium  tracking-wide">Address: </label>
                                    <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Address" name="Address" type="text" defaultValue={props.address}></input>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="Notes" className="text-sm font-medium  tracking-wide">Notes: </label>
                                    <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Notes" name="Notes" type="text"></input>
                                </div>

                                <div className="flex items-center justify-around">
                                    <div className="w-full mr-3">
                                        <label htmlFor="tag" className="text-sm font-medium  tracking-wide">Tag: </label>
                                        <input className=" shadow-sm border rounded-md w-full py-2 px-3  mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Tag" name="tag" type="text"></input>
                                    </div>


                                    <div className="w-full ml-3">
                                        <label htmlFor="colour" className="text-sm font-medium  tracking-wide">Colour: </label>
                                        <input className=" shadow-sm border rounded-md w-full px-3 mt-1 leading-tight  outline-none focus:outline-none focus-within:border-purple-400 transition-all duration-500 text-base rounded-lg" placeholder="Colour" name="colour" type="color" defaultValue="#ff006e"></input>
                                    </div>
                                </div>


                                <div className="flex flex-col items-center">
                                    <input className=" mt-6 text-white transform transition-all hover:scale-105 cursor-pointer gradscheme rounded-full focus:bg-purple-700 w-auto px-28 font-bold text-lg mx-auto p-2 " name="submit" type="submit" value="Add Pin" />
                                </div>
                            </div>
                        </form>
                    </div>







                </div>


            </div></Route>
    );
}

export default Modal;
