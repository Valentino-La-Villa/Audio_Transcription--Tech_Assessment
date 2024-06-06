import AudioInterfaceSection from './components/AudioInterface'
import TranscriptionSection from './components/transcription/Transcription.tsx'
import transcription from './data/transcription'
import { MessageInformationObj } from './types/MessageInformationObj.ts'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';

function App() {

  const [currentTimeReference, setCurrentTimeReference] = useState(0)

  useEffect(()=>{ // This will update CurrentTimeReference in order to keep up with the user's input
    const audioPlayer = document.getElementById('callAudio') as HTMLAudioElement

    audioPlayer.addEventListener('timeupdate', ()=>{
      setCurrentTimeReference(audioPlayer.currentTime)
    })
  }, [])
  
  function handleMessageClick(timeReference: number): void {
    const audioPlayer = document.getElementById('callAudio') as HTMLAudioElement
    audioPlayer.currentTime = timeReference
    audioPlayer.play()
  }

  return (
    <main>
      <AudioInterfaceSection />
      <TranscriptionSection
      transcription={transcription as MessageInformationObj[]}
      handleMessageClick={handleMessageClick} />
    </main>
  )
}

export default App
