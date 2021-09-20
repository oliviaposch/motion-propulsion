FROM continuumio/miniconda:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install wget -y

# RUN echo 'export PATH=/opt/miniconda/bin:$PATH' > /etc/profile.d/conda.sh && \
#     wget --quiet https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh && \
#     /bin/bash ~/miniconda.sh -b -p /opt/miniconda && \
#     rm ~/miniconda.sh

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs && apt-get install -y npm

RUN mkdir -p /backend
RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp
RUN mkdir -p /scripts
RUN mkdir -p /static-files

COPY ./backend /backend
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml

ENV PATH /opt/conda/envs/backend/bin:$PATH
RUN echo "conda activate backend" >~/.bashrc

COPY ./scripts /scripts
RUN chmod +x /scripts*
WORKDIR /backend


WORKDIR /frontend_tmp
COPY ./frontend/package.json /frontend_tmp/
COPY ./frontend/package-lock.json /frontend_temp/
RUN npm install
COPY ./frontend /frontend_tmp
RUN npm run build

WORKDIR /backend

