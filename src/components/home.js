import { Container } from 'react-bootstrap';
import Navbar from './navbar'
import background from './item/download.jpeg'

const Home = () => {
    return (
        <Container>
            <main className="col-md-12 ms-sm-auto col-lg-12 px-md-12">
                <Navbar />
                <div style={{backgroundImage: `url(${background})` }}>
                    <h1>Kontol</h1>
                    <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p className="lead">
                    <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
                    </p>
                </div>
            </main>
        </Container>
    )
}

export default Home;