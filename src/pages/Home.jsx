import { Landscape, Navbar, Footer } from '../components'


function Home() {
    return (
        <div className='flex  flex-col relative h-[400vh]'>
            <Navbar />
            <Landscape />
            <Footer />
        </div>
    )
}


export default Home