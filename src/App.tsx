import AudioInterfaceSection from './components/AudioInterface'
import TranscriptionSection from './components/transcription/Transcription.tsx'
import transcription from './data/transcription'
import { MessageInformationObj } from './types/MessageInformationObj.ts'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  const audioPlayer = document.getElementById('callAudio') as HTMLAudioElement
  
  function handleMessageClick(timeReference: number): void {
    audioPlayer.currentTime = timeReference
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
