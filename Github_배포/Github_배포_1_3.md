## GitHub 협업

### Code

```
git init : git 저장소를 초기화

git add : 폴더에 변경된 모든 파일 staging area에 올리기

git commit -m "커밋에 대한 설명" : 유사시 들어갈 수 있는 저장소의 체크 포인트 생성

git remote add origin http://원격 저장소 주소.git : 원격저장소(remote repository)

git branch 브랜치 명 : 새로운 브랜치를 생성

git checkout 브랜치 명 : 해당 브랜치로 이동

git push origin 브랜치 : 원격 저장소의 특정 브랜치에 프로젝트 저장 - 올리기

git pull origin 브랜치 : 원격 저장소의 특정 브랜치에서 변경사항 pull 해오기 - 다운받기

git clone http://원격 저정소 주소.git : 원격 저장소에 있는 파일 전체 복사

git status : git 저장소의 상태를 확인
```

### Collaborator일 경우

1. 원격 저장소 (Github Repostory 생성)

2. 팀원을 Collaborator 추가하기
</br>
경로

```
GitHub - Repository - Settings - Manage access - Invite a collaborator
```

3. 초기 프로젝트 Push

**코드가 있는 Directory**
```
init
remote add origin (url)
add .
commit
git push origin master
```
</br>

4. 팀원들이 로컬에 프로젝트 Pull하기 : git clone도 가능

```
git clone (url) : push한 초기 코드가 다운 받아짐
```

</br>

5. 팀원 각자의 브랜치를 생성하여 작업 + 6. 브랜치에 작업 한 내용을 push

```
git branch : 생성된 branch를 보여줌

git branch (other.user)

git checkout (other.user) : branch 전환

----------------코드 수정----------------

git add .
git commit -m "커밋에 대한 설명"
git push origin (other.user)
```
</br>
7. Master 와 merge 하기 전 Pull Request + Pull Request 확인 후 Master와 Merge

팀원
</br>
- pull - request : 변경 승인 요청
    base : master <- compare : other.user
        
- create pull request

팀장
</br>
- GitHub에서 자동으로 base branch와 Conflicts가 있는지 검사 후 Merge(승인)이 가능함.

**Merge가 되었다면 Base Branch에 Commit이 **
</br></br>
### Fork

1. 작업하고 싶은 Repository를 Fork 해오기

- 검색 후 찾은 Repository에 들어가 우측 상단의 folk 누르기
     
2. 로컬에서 작업하기 + 3. 변경사항을 자신의 branch에 push
```
mkdir -     // 작업환경구분

cd -        // 작업환경구분

git clone (url)

---------------코드 수정---------------

git add .

git commit -m "ID_Change" // example

git checkout -b (other.user) // branch 생성

git push origin (other.user)
```

4. 원본 Repository 소유자에게 Pull Request 요청

**Pull Request**
```
base repositry : - / base : -    ->  head repository : - / compare : -
```

5. 소유자가 Pull Request를 승인하여 Merger하면 자동으로 Collaborator 추가
