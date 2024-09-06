import { Helmet } from "react-helmet-async";
import Faq from "./Faq/Faq";
import Banner from "./HomeElements/Banner";


export default function Home() {
  return (
    <>
    <Helmet>
        <title>Home | FurniFlex</title>
    </Helmet>
        <section>
            <Banner/>
        </section>
        <section>
            <Faq/>
        </section>
    </>
  )
}
