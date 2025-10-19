import { Container } from 'react-bootstrap';

// import './TheFooter.css'
import classes from './TheFooter.module.css'

function TheFooter(props){
    console.log("The Footer props:", props);
    return (
        // <footer className="hamada">
        <footer className={classes.hamada}>
            <Container>
                <p className="text-center">react project copyrights</p>
            </Container>
            <p>This component is child to {props.from}</p>
        </footer>
    );
}

export default TheFooter;