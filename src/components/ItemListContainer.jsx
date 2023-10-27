import { Container } from "react-bootstrap";
import '../stylesheets/ItemListContainer.css';
import imagen from '../images/proximamente.png'

export const ItemListContainer = (props) => {
    return (
        <>
            <Container>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.greeting}</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur voluptate quae voluptatum quidem laboriosam porro molestiae minima.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </Container>
        </>
    )
}