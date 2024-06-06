import { MessageInformationObj } from "../../types/MessageInformationObj";

type PropsType = {
    message: MessageInformationObj,
    handleMessageClick: (timeReference: number)=> void
    currentTimeReference: number
}


export default function Message(props: PropsType) {
    return (
        <div className={`d-flex col-11 col-sm-7


        ${props.message.role === 'user' ? 'align-self-end justify-content-end' : 'align-self-start justify-content-start'}`} // Aligning user emited messages to the right, and agent emited messages to the left
        >

            <p
            role="button"
            onClick={()=>props.handleMessageClick(props.message.start)} 
            style={{transition: 'all 1s'}}
            className={`p-3 fs-6


            ${(props.message.start < props.currentTimeReference && props.currentTimeReference < props.message.end)
                ? 'opacity-100 border'
                : 'opacity-75 border-transparent'}
            ${props.message.role === 'user' ? 'bg-primary' : 'bg-danger'}`} // Setting a different color for messages made by the user and the agent
            >
                {props.message.content}
            </p>
        </div>
    )
}