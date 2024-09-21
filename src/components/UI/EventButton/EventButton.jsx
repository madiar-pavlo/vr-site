import { useContext, useState } from "react"
import Dialog from "../Dialog/Dialog"
import { Context } from "../../../context/Context"

const EventButton = ({children, classNames = ''}) => {
    const {setIsPopupOpen, setIsIDKDialogOpen} = useContext(Context)

    const onClick = () => {
        setIsIDKDialogOpen(true)
        setIsPopupOpen(true)
    }

    return (
        <>
        <button onClick={onClick} className={`button ${classNames}`}>{children}</button>
        </>
    )
}

export default EventButton