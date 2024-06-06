export type MessageInformationObj = {
    content: string,
    end: number,
    role: 'user' | 'agent',
    start: number
}