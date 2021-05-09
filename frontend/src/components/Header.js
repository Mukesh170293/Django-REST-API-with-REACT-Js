import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function Header(){
    return(
        
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                 <Navbar.Brand href="/">NHSEE</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Judge">Judge</Nav.Link>
                        <Nav.Link href="/Student">Student</Nav.Link>
                        <Nav.Link href="/Project">Project</Nav.Link>
                        <Nav.Link href="/JudgeAssignment">JudgeAssignment</Nav.Link>
                        <Nav.Link href="/Import">Import</Nav.Link>
                        <NavDropdown title="Export" id="basic-nav-dropdown">
                            <NavDropdown.Item href="http://127.0.0.1:8000/export_judge_assignment">Export Judge Assignment</NavDropdown.Item>
                            <NavDropdown.Item href="http://127.0.0.1:8000/export_project">Export Project</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Scoring">Scoring</Nav.Link>
                        <Nav.Link href="/TopProject">TopProject</Nav.Link>
                        <NavDropdown title="Unassign/assign" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Unassigned">Unassigned Judges</NavDropdown.Item>
                            <NavDropdown.Item href="/UnassignedProject">Unassigned Project</NavDropdown.Item>
                            
                        </NavDropdown>
                        <NavDropdown title="Delete" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/RemoveJudge">Remove Judge</NavDropdown.Item>
                            <NavDropdown.Item href="/RemoveProject">Remove Project</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/RemoveAllData">Remove All Data</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                 </Navbar.Collapse>
                 </Container>
            </Navbar>
        </header>
        
    )
}

export default Header