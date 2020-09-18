import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PlaceInfoData from '../../TravelGuruData/PlaceInfoData'
import { useForm } from "react-hook-form";
import './Booking.css'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
const Booking = () => {
    const { placeID } = useParams();
    const visitePlace = PlaceInfoData.find(selectedPlace => selectedPlace.id.toString() === placeID);

    // form data
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const id = visitePlace.id;
    console.log(watch("example"));

    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-09-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // handle booking
    const history = useHistory();
    const handleBooking = ()=> {
        history.push('/shipment/'+id)
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <img src={visitePlace.profile} className="img-fluid w-75 img-thumbnail" alt="" />
                        <h2 className="destination pt-3">{visitePlace.destination}</h2>
                        <p className="text-left text-justify">{visitePlace.description}</p>
                    </div>
                    <div className="col-md-5">
                        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                            <label>Origin</label> <br />
                            <input name="origin" defaultValue={visitePlace.origin} disabled />
                            <label>Destination</label> <br />
                            <input name="destination" defaultValue={visitePlace.destination} disabled />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <div className="row float-left">
                                    <div className="col-md-6">
                                        <label>From</label>
                                        <KeyboardDatePicker className="date"
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label=""
                                            format="dd/MM/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>To</label>
                                        <KeyboardDatePicker className="date"
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label=""
                                            format="dd/MM/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </div>
                                </div>
                            </MuiPickersUtilsProvider>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input className="booking-btn" destination={visitePlace.destination} onClick={handleBooking} type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Booking;