## Steps to run the django backend server on your machine:

1. Clone the repository: ***$ git clone <repo-url.> <repo-name(optional)>***

2. Make sure that you have pipenv installed on your machine

3. Run ***$ pipenv install*** which will install all the dependencies required for this project.

4. Run ***$ pipenv shell*** which will activate the virtual environment with all the dependencies installed.

5. To run the server: ***$ python manage.py runserver***

6. Server: http://127.0.0.1:8000/

**Django:**

- In the directory you wanted to store the code, install Django with setting up virtual environment. You should always use a dedicated virtual environment for every new Python Project
  - [ ] pipenv install django==2.2.0
  - [ ] pipenv shell
    > To check whether the environment is activated, it can be identified by the name of the directory within parenthesis before the command line.

**Django Web Framework**:

- Install Django REST Framework as following:
  - [ ] $pipenv install djangorestframework==3.9.2

**CORS**:

- Install CORS for client interactions to an API hosted on a different domain as follows:
  - [ ] $pipenv install django-cors-headers==2.5.2

## Steps to run the frontend server i.e, the React application:

1. cd to the 'frontend' from your terminal. From the root directory, ***$ cd frontend***
2. cd to the 'src' from your terminal. From the root directory, ***$ cd src***
3. Type ***$ npm install***. This installs the required dependencies.
4. Run the React project. ***$ npm start***.
5. Server:  http://127.0.0.1:3000/
6. Spreadsheet to be imported is "transfer_by_comm.arts_history.xlsx" which is present in the root directory of the project.

      If you do not quit the server with Ctrl+c then, the next time you run the server, port will be different. This port should be included in CORS_ORIGIN_WHITELIST of settings.py file of the config
      
**Installation guides for Node:**

    - Node Installations on all operating systems can be found in the below link:
      [https://nodejs.org/en/download/]

**Getting Started with Create React App**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Available Scripts**

In the project directory, you can run:

**npm start**

**React UI Framework**

To make use of UI I used in this project, you need to add it to the dependencies

**HTTP client requests**

To make HTTP client clients from the front end react application to the backend. I used Axios.

**Available Scripts**

In the project directory, you can run:

 - [ ] `npm i axios`

**React Router DOM**

DOM bindings for React Router

##Installation

In the project directory, you can run:
 - [ ] `npm install --save react-router-dom`

___________

### Note: **Both the server should be active**. For the React app to fetch the data from backend, please make sure that the django server is active.
