export default function Solution(props){
    return (
        <>
            <div className="solution">
                <h1><span>{props.years || '--'}</span> years</h1>
                <h1><span>{props.months || '--'}</span> months</h1>
                <h1><span>{props.days || '--'}</span> days</h1>
            </div>
        </>
    )
}