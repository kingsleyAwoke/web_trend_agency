# Web_Trend_Agency

Welcome to **Web Trend Agency** repository! This is a Django web app that is intended for recognized individuals only.

## Getting Started

To gain access to this web app, please follow the steps below:

### Prerequisties

Ensure that you meet the following requirements:

- You have been granted access to the project by the project managers.
- You have the following installed on your machine:

- Python 3.11.8
- Docker 20.10.25
- Django 5.0.4

### Installation
1. Fork & Clone the repository to your local machine :
    ```bash```
        git clone https://github.com/kingsleyAwoke/web_trend_agency.git
2. Change into the project directory:
    cd [__'directory name'__]
3. Build and Run the Docker container:
    ```bash```
         __docker-compose up --build__
4. Access the application in your web browser:
    __http//localhost:8000/__


### Contributing
This project is not open to public Contributions. if you are intrested in contributing, please join our Telegram group for recognition. Here's how you can join:
    1. Sign up for a [Telegram account] (https://web.telegram.org/k/).
    2. Join out Telegram group by clicking [there] (https://t.me/+Yr6L9n-lymFKMmU1)

### project Structure
The project follows a standard Django project structure, with following important directories and files:

- **webdir/**: This directory contains the main Django application for the project. It contains the manage.py, templates, static and other components specific to the app.
- **web_trend/**: This directory contains the project configuration files, including the Django settings, URL routing, and other project-level settings.
- **static/**: This directory is used to store static files such as CSS, Javascripts, and images.
- **templates/**: This dictory contains the HTML templates used by the Django views to render the web pages.
-**requirements.txt**: This file list all the python dependencies required for the project. The dependecies will automatically start installing when you run `docker-compose up --build`.
-**manage.py**: This is the Django management script uesd for various project-related tasks, such as running the development server and running database migrations.

### Testing
This project includes a comprehensive suite of tests to ensure its functionality and reliabilty. To run the tests, follow the steps below:

    1. Make sure you have installed the project dependencies.
    2. Change into the project directory.
    3. Run the test.
        **bash**
            `docker-compose run web python manage.py test`

### Contact
if you have any question or need further assistance, please feel free to [![Discord](https://img.shields.io/badge/Discord-Join%20our%20server-7289DA?logo=discord&logoColor=white)](https://discord.com/invite/pdfTAUpA).
