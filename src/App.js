import React from "react";
import HomePages from "./components/pages/HomePages";
import './components/style/index.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Video from "./components/pages/Video";
import audio from "./components/audio/Fredji - Happy Life (Kygo Style) (320 kbps).mp3";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePages}/>
                <Route exact path="/video" component={Video}/>
            </Switch>
        </Router>
    );
}

export default App;
