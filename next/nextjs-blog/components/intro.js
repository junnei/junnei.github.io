import Line from './Intro/line.js'
import Wrapper from './Intro/wrapper.js'
import Background from './Intro/background.js'

export default function Intro() {
    return (
        <>
        <Background/>
        <Wrapper>
            <a href="/blog">
            <Line
                title={'Blog'}
                src={'/images/profile.jpg'}
                width={200}/></a>
            <Line
                title={'Music'}
                src={'/images/profile.jpg'}
                width={300}/>
            <Line
                title={'Project'}
                src={'/images/profile.jpg'}
                width={400}/>
        </Wrapper>
        </>
    )
  }
  