import { MessageInformationObj } from "../../types/MessageInformationObj"
import Message from "./Message"

type PropsType = {
    transcription: MessageInformationObj[]
    handleMessageClick: (timeReference: number)=> void
    currentTimeReference: number
}

export default function TranscriptionSection(props: PropsType) {   

    const transcriptionDisplay = props.transcription.map(message => (
        <Message
        key={message.end}
        message={message}
        handleMessageClick={props.handleMessageClick}
        currentTimeReference={props.currentTimeReference} />
    ))

    return (
        <section className="d-flex flex-column container w-100 gap-3">
            {transcriptionDisplay}
        </section>
    )
}