import { About } from '../components/about/About'
import { Attributes } from '../components/attributes/Attributes'
import { Benefits } from '../components/benefits/Benefits'
import { Business } from '../components/business/Business'
import { Contact } from '../components/contact/Contact'
import { Main } from '../components/main/Main'
import { Methodology } from '../components/methodology/Methodology'
import { Offer } from '../components/offer/Offer'

const Home = (): JSX.Element => {
    return (
        <>
            <Main />
            <About />
            <Offer />
            <Methodology />
            <Benefits />
            <Attributes />
            <Business />
            <Contact />
        </>
    )
}

export default Home