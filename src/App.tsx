import React from 'react';
import './App.css';
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Examples from "./components/Examples";
import Footer from "./components/Footer";
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
    return (
        <ReactFullpage
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000}
            navigation={true}
            render={() => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className='section' >
                            <Introduction type='left' img={'./notebook.jpg'}
                                          text={['Портфолио', 'Fullstack-разработчика', 'Миколае Ариона']}/>
                        </div>

                        <div className='section'>
                            <Introduction type='right' img={'./man.png'} text={['Разработка сайтов ', 'с нуля']}/>
                        </div>

                        <div className='section'>
                            <Introduction type='left' img={'./html.jpg'} text={['Анимации', 'скорость', 'всё на ts']}/>
                        </div>

                        <div className='section'>
                            <Skills/>
                        </div>

                        <div className='section'>
                            <Examples/>
                        </div>

                        <div className='section'>
                            <Footer/>
                        </div>
                    </ReactFullpage.Wrapper>

                )
            }}
        />
    )
}

export default App;
