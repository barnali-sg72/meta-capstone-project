function BookingForm({customerName, date, time, guests, occasion, area, availableTimes, handleChange, onSubmit}) {
    
    return (
        
        <form name="booking-form" aria-label="booking-form" className="white" 
            onSubmit={onSubmit}>
            <h2 className="white">Reserve a table</h2>
            <label htmlFor="res-name">Customer Name</label>
            <input type="text" name="customerName" id="res-name" value={customerName} onChange={handleChange}/>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" name="date" id="res-date" value={date} onChange={handleChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="time" value={time} onChange={handleChange}>
                { availableTimes.map((hr, ind) => (
                    <option key={ind}>{hr}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" name="guests" placeholder="1" min="1" max="10" id="guests" value={guests}
                onChange={handleChange}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={occasion} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Graduation</option>
            </select>
            <label>Seating Area</label>
            <div className="area">
                <span><input type="radio" id="indoor" value="Indoor" name="area" 
                    selected={area === "Indoor"} onChange={handleChange}/>
                </span>
                <span><label htmlFor="indoor">Indoor</label></span>
            </div>
            <div className="area">
                <span><input type="radio" id="outdoor" value="Outdoor" name="area"
                    selected={area === "Outdoor"} onChange={handleChange}/>
                </span>
                <span><label htmlFor="outdoor">Outdoor</label></span>
            </div>                
            <input type="submit" aria-label="submit" className="btn bg-yellow" value="Make Your reservation"/>
        </form>
        
    )
}

export default BookingForm;