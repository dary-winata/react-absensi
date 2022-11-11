import Navbar from './navbar'
import background from './item/webp.jpg'

const NotFound = () => {
    return (
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-12">
            <Navbar />
            <div style={{ backgroundImage: `url(${background})`, width: "100vw", height: "100vh", backgroundSize:'cover' }}>
            </div>
        </main>
    )
}

export default NotFound;