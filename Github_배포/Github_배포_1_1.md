## GitHub 기초

### GitHub

1. Git은 코드의 변화를 기록한다.

2. GitHub는 Git과 코드를 저장하고 관리하는 오픈소스 저장소 + 개발자의 포트폴리오 역할

```저장소 = Repository```
</br>
### GitHub관련 명령어 

1. `Git` 저장소 초기화 (저장소에 깃 파일을 생성 -> Git을 시작하겠다.)
```
$ git init
```
</br>

2. Local Repository와 Online Repository를 **연결**
```
$ git remote add origin[원격 저장소] + 레포지토리 주소[URL]
```
</br>

3. Directory 전체를 Staging Area로 올리기 / 파일의 일부를 스테이징하기
```
$ git add .[파일]
$ git add -p [파일]
```
</br>

4. Repository로 'commit'하기
```
$ git commit -m "원하는 내용"[메세지]
```
*-m : 설명을 추가 </br></br>*

5. Local Repository에서 Online Repository로 업로드
```
$ git push origin master
```
*master : Repository 서버 </br></br>*

**코드 변경 후에는 add, commit, push**

