import React from 'react';
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
// import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Plyr from 'plyr'


const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;

`

const Wrapper = styled.main`
    height: 100vh;
    width: 100%;
    background-color: #fadc58;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const HeaderWrapper = styled.main`
    background: url('/logo.png') no-repeat;
    min-height: 400px;
    background-position: center;
    width: 100%;
    background-color: #fadc58;
    `
const BottomHolder = styled.section`
    height: 6rem;
    background-image: url('/pattern.png');
    background-color: #15884d;
`

const DesktopWrapper = styled.section`
    max-width: 40rem;
    margin: 0 auto;
    position: relative;

    @media (max-width: 780px) {
        max-width: 780px;
  }

`


export default function Home() {

    React.useEffect(() => {

        const player = new Plyr('#player')
        return () => {
        }
    }, [])

    return (
        <DesktopWrapper>

            <Wrapper>
                <HeaderWrapper />

                <Footer>
                    {/* 
                */}
                    <audio id="player" controls>
                        <source src="https://s4.radio.co/s99d55c85b/listen" type="audio/mp3" />
                    </audio>
                    <BottomHolder />

                    {/* 
                    <AudioPlayer
                    autoPlay
                    showDownloadProgress
                    src="https://s4.radio.co/s99d55c85b/listen"
                    onPlay={e => console.log("Bufferring ...")}
                    defaultDuration="00:00"
                    onCanPlay={() => alert("Buffer complete")}
                    layout="horizontal-reverse"
                    showJumpControls={false}
                    
                    // other props here
                    />
                */}
                </Footer>
            </Wrapper>
        </DesktopWrapper>
    )
}