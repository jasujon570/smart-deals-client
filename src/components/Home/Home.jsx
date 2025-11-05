import LatestProducts from "../LatestProducts/LatestProducts";

const latestProductsPromise = fetch('http://localhost:3000/latest-products')
.then(res => res.json());


const Home = () => {

    return (
        <div>
            <h3 className='bg-primary'>This is Home</h3>
            <LatestProducts latestProductsPromise={latestProductsPromise}/>
        </div>
    );
};

export default Home;