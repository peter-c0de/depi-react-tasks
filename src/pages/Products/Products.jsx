import { Link, Outlet } from "react-router";

export default function Products(){
    return (
        <div>
            {[...Array(10).keys()].map(num=>(
                // <Link key={num} to={`/product-details/${num+1}`} className="px-5">
                <Link key={num} to={`product-details/${num+1}`} className="px-5">
                    {num+1}
                </Link>
            ))}

            {/* <Outlet /> */}
            <Outlet />
        </div>
    );
}


