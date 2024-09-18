import AddressCard from "./HeroCards/AddressCard"
import TelCard from "./HeroCards/TelCard"
import EmailCard from "./HeroCards/EmailCard"


const HeroCards = ({card, ...props}) => {
    const items = {
        address: AddressCard,
        tel: TelCard,
        email: EmailCard
    }

    const Component = items[card.type]

    return <Component {...props} card={card}/>
}

export default HeroCards