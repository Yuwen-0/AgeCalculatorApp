export default function Form(){
    const date = new Date()
    console.log(date.getDay());
    return (
        <>
            <div className="form">
                <div className="Inputs">
                    <div>
                        <label htmlFor="Day">Day:</label>
                        <input type="number" name="Day" className="ageInput" min={1} max={31}/>
                    </div>
                    <div>
                        <label htmlFor="Month">Month:</label>
                        <input type="number" name="Month" className="ageInput" min={1} max={12}/>
                    </div>
                    <div>
                        <label htmlFor="Year">Year:</label>
                        <input type="number" name="Year" className="ageInput" min={1900} max={date.getFullYear()}/>
                    </div>
                </div>
                <button type="submit" className="submitButton">
                    <img className="icon-arrow" src="../public/images/icon-arrow.svg" alt="" />
                </button>
            </div>
        </>
    )
}
