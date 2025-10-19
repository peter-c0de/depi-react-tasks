import { Container } from 'react-bootstrap';

// import './TheFooter.css'
import classes from './TheFooter.module.css'

function TheFooter(){
    return (
        // <footer className="hamada">
        <footer className={classes.hamada}>
            <Container>
                <p className="text-center">react project copyrights</p>
            </Container>
        </footer>
    );
}

export default TheFooter;