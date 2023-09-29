import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers());
    },[])

    return (
        <>
        <h1>este es home</h1>
        <CardsContainer />
        </>
    )
};

export default Home;