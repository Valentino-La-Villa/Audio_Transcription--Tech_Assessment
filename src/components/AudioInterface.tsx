import call  from '../assets/audio/call.wav'

export default function AudioInterfaceSection() {
    return (
        <section className='d-flex justify-content-center my-5'>
            <audio
            className='w-75'
            src={call}
            id='callAudio'
            controls/>
        </section>
    )
}