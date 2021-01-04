## Github EB 배포 1

### Elastic Beanstalk 이란?
 - 웹 앱과 서비스를 배포, 관리 및 증감을 손쉽게 할 수 있도록 하는 서비스


### 기본 로컬 설정
 - 필수 구성 요소

 ```
 Python 3.6
 pip
 virtualenv
 awsebcli

 배포를 진행할 Python 프로젝트
 ```

- 설치 및 확인
```
pip install virtualenv
pip install awsebcli
```

```
python -v
python3 -v
pip -v

virtualenv --version
eb --version
```

#### Code
```
mkdir [파일명]
cd [파일명]
python3 -m venv [가상환경 이름]
source venv/bin/activate
pip3 install django==2.2.1 : Django 2.2.1버전을 선택해서 설치
pip freeze : 설치된 패키지 보여주기
```


### Django 애플리케이션 설정

1. Requirements.txt 생성
- 해당 프로그램을 사용하기위한 패키지 리스트 제공

**Code**
```
pip freeze > requirements.txt
```

2. .ebextensions 설정

**Code**
```
mkdir .ebextensions
    [django.config 파일 생성]
```

**django.config**
```
option_settings:
  aws:elasticbeanstalk:container:python:
    WSGIPath: [자신의 프로젝트명].wsgi.py
```

**[[참조](https://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/create-deploy-python-django.html)]**