import { useState } from "react"
import Dialog from "../Dialog/Dialog"

const EventButton = ({children, classNames}) => {
    const [ isDialogOpen, setIsDialogOpen ] = useState(false)

    const onClick = () => {
        setIsDialogOpen(true)
    }

    return (
        <>
        <Dialog buttonState={[isDialogOpen, setIsDialogOpen]}>
            <h3>
                Hey, I dont know what to do on click	&#128517;
            </h3>
        </Dialog>
        <button onClick={onClick} className={`button ${classNames}`}>{children}</button>
        </>
    )
}

export default EventButton