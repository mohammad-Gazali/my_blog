import './Landscape.css';

function Landscape(props) {
    return(
        <div className='absolute top-0 w-full bg-primary h-screen flex justify-center items-center my-shadow-sep-b' style={{'borderBottom': '5px solid #facc15', 'height': 'calc(100vh + 5px)'}}>
            <h1 className='text-mylight text-7xl'>Elgazali</h1>
        </div>
    )
}

export default Landscape