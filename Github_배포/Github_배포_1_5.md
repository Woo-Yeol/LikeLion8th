## Github EB 배포 2

### EB 환경 및 앱 생성

1. EB 어플리케이션 생성
```
eb init -p python-3.6 [애플리케이션 이름]
eb init : Y : 4(Create new KeyPair)
```

2. EB 환경 생성 및 애플리케이션 배포
```
eb create [환경 이름]
eb status : 환경 확인
eb deploy : 배포 하기
eb open : 창 띄우기
```

- CNAME : url - setting.py의 ALLOWED_HOSTS로 지정

### 애플리케이션 업데이트

1. 사이트 설정 수정

**settings.py**
```
TIME_ZONE = 'Asia/Seoul'

```

2. 사이트 관리자 생성
 - migrate 해주고 createsuperuser 해주기

3. 데이터 베이스 마이그레이션 구성 파일 추가
 - .ebextensions 폴더에 [db-migrate.config] 파일 생성

**db-migrate.config**
```
container_commands:
  01_migrate:
    command: "django-admin.py migrate"
    leader_only: true
option_settings:
  aws:elasticbeanstalk:application:environment:
    DJANGO_SETTINGS_MODULE: [프로젝트이름].settings
```

 - eb deploy : 배포 진행하기

**[[참조](https://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/create-deploy-python-django.html)]**