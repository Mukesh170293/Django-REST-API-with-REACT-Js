## Steps to run the django backend server on your machine:

1. Clone the repository: ***$ git clone <repo-url.> <repo-name(optional)>***

2. Make sure that you have pipenv installed on your machine

3. Run ***$ pipenv install*** which will install all the dependencies required for this project.

4. Run ***$ pipenv shell*** which will activate the virtual environment with all the dependencies installed.

5. To run the server: ***$ python manage.py runserver***

6. Server: http://127.0.0.1:8000/

## Steps to run the frontend server i.e, the React application:

1. cd to the 'frontend' from your terminal. From the root directory, ***$ cd frontend***
2. cd to the 'src' from your terminal. From the root directory, ***$ cd src***
3. Type ***$ npm install***. This installs the required dependencies.
4. Run the React project. ***$ npm start***.
5. Server:  http://127.0.0.1:3000/
6. Spreadsheet to be imported is "transfer_by_comm.arts_history.xlsx" which is present in the root directory of the project.

      If you do not quit the server with Ctrl+c then, the next time you run the server, port will be different. This port should be included in CORS_ORIGIN_WHITELIST of settings.py file of the config

___________

### Note: **Both the server should be active**. For the React app to fetch the data from backend, please make sure that the django server is active.
