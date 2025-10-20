// import TheHeader from "./../../components/TheHeader/TheHeader";
import TheFooter from "@/components/TheFooter/TheFooter";

function Home() {
    return <div className="home-page">
        {/* <TheHeader /> */}
        Home
        {/* <TheFooter from="Home Page" /> */}
        {/* Props as Children */}
        <TheFooter from="Home Page" myTag={<div>Hi</div>}>
            <p>This p is from Home Page</p>
        </TheFooter>
    </div>;
}

export default Home;