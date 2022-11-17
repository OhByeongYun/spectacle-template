import Slide1 from "./slide1";
import Slide2 from "./slide2";

import preloader from "../component/util/preloader";
import city from "../assets/city.jpg";
import kat from "../assets/kat.png";

preloader([city, kat]);

export default function Index() {
    return (
        <>
            <Slide1/>
            <Slide2/>
        </>
    );
}
