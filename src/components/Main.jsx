/* eslint-disable react/prop-types */
export default function Main(props) {
    return (
        <>
            <main className="main">
                {props.children}
            </main>
        </>
    )
}