FROM python:3

ENV PYTHONUNBUFFERED=1

WORKDIR /webdir

COPY . /webdir/

COPY requirements.txt /webdir/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /webdir/

EXPOSE 8000

CMD python manage.py runserver 0.0.0.0:8000