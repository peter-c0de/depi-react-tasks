import { useEffect } from "react";
import { Container } from "react-bootstrap";
// import { useParams } from "react-router";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetching from "../../hooks/useFetching";

const URL = "https://fakestoreapi.com/products/";

function ProductDetails() {
    // Moved to: src/hooks/useFetching.jsx
    // const {id} = useParams();

    // Moved to: src/hooks/useFetching.jsx
    // const [isLoading, setIsLoading] = useState(true);
    // const [isError, setIsError] = useState(false);
    // const [data, setData] = useState(null);
    
    // Moved to: src/hooks/useFetching.jsx
    // const fetchProductDetails = async()=> {
    //     if (isNaN(id)){ 
    //         setIsLoading(false);
    //         setIsError(true);
    //         return
    //     };
    //     try{
    //         const response = await fetch(`${URL}${id}`);
    //         console.log("response:", response);
    //         if(!response.ok) throw new Error("Invalid product Id");
    //         const data = await response.json();
    //         // console.log("data:", data);
    //         setData(data);
    //     }catch(error){
    //         setIsError(true);
    //         // console.error(error);
    //     }finally{
    //         setIsLoading(false);
    //         console.log("Finally!");
    //     }
    // };

    const {handleFetchData, isLoading, isError, data} = useFetching(URL);

    // Moved inside the button:
    // useEffect( ()=> {
    //     handleFetchData();
    // },[]);

    // console.log("params:", params);

    return (<div className="product-details">
        <Container>

            <button onClick={handleFetchData}>Fetch Data</button>

            {/* First Way: */}
            {/* {isLoading ? ( <div>Loading product details data...</div> )
            : ( <div>Fetched data successfully</div> ) } */}

            {/* Second Way: */}
            {/* <div>
                {isLoading ? "Loading product details data..."
                : "Fetched data successfully</div>"}
            </div> */}

            {/* Best Way: */}
            {isLoading && <div>Loading product details data...</div>}
            {(!isLoading && isError) && <div>Failed to fetch data</div>}
            {!isLoading && !isError &&
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.image} />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                            {data.description}
                            {data.price}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>}
        </Container>
    </div>);
}

export default ProductDetails;