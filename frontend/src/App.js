import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home'
import Judge from './components/judge'
import Student from './components/student'
import Project from './components/project'
import JudgeAssignment from './components/judgeassignment'
import Unassigned from './components/Unassigned'
import Unassignedproject from './components/unassignedproject'
import Topprojects from './components/topprojects'
import Removejudge from './components/removejudge'
import Removeproject from './components/removeproject'
import RemoveAllData from './components/removealldata'
import Import from './components/Import'
function App() {
  return (
    <BrowserRouter>
    <br></br><br></br><br></br>
    <div>
      
      <Header />
      <main>
        <Container>
          <Switch>
          <Route path="/Home" component={Home} exact/>
          <Route path="/Import" component={Import} exact/>
          <Route path="/Student" component={Student} exact/>
          <Route path="/Judge" component={Judge} exact/>
          <Route path="/Project" component={Project} exact/>
          <Route path="/JudgeAssignment" component={JudgeAssignment} exact/>
          <Route path="/Unassigned" component={Unassigned} exact/>
          <Route path="/Unassignedproject" component={Unassignedproject} exact/>
          <Route path="/TopProject" component={Topprojects} exact/>
          <Route path="/RemoveJudge" component={Removejudge} exact/>
          <Route path="/RemoveProject" component={Removeproject} exact/>
          <Route path="/RemoveAllData" component={RemoveAllData} exact/>
          </Switch>
            
        </Container>
       </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
