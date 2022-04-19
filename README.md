# tondo

## Tondo - 댓글의 온도

<img src="https://blog.kakaocdn.net/dn/bRlwgM/btq4J8TuQac/x095R0xMBoMLOhEVtNcwCk/img.png">

## 프로젝트 소개

사용자가 유튜브 링크를 입력 시, 해당 영상의 댓글 작성자의 아이디와 내용을 가져오고,<br>
NLP 모델을 활용해 악성 댓글을 감지하면 해당 댓글의 작성자의 아이디와 내용을 리스트로 보여준다.<br>
또한 해당 영상의 악플 비율을 조사해 시각화하여 보여준다.

## 담당 파트

Frontend - [송영모](https://github.com/mooyoung2309)  
Backend, AI - [지영주](https://github.com/Y-Joo)

## Tech Stack

Frontend - React<br>
Backend - Node.js, MongoDB<br>
AI - Python Tensorflow, Colab

## 스크린샷
### 검색 화면
<img src="https://blog.kakaocdn.net/dn/beMD1J/btq3Ty7I5mD/Q2kRCjy0xTNLe0sgVKhJS0/img.png">

### 결과 화면

실제로 작동하는 화면이 있었지만, 오래된 탓인지 남아있지 않아 테스트 화면으로 대체한다.<br>
실제 서비스에서는 AI가 Bad, Good, Vogue 댓글을 분류해 리스트로 넣어주고, 사용자가 직접 판별 한 뒤 댓글을 옮길 수 있게 했다.
<img src="https://blog.kakaocdn.net/dn/dsWq8W/btq3SSFOMsn/bG7B0stkHrO4FzP9JVEjj1/img.gif">

## 한계점

실 배포를 시도했으나, Tensorflow의 크기가 너무 커서 프리티어로는 감당할 수 없다는 판단을 내렸다.<br>
또한 인공지능의 정확도는 높았으나 결과가 좋지 않았는데, 아무래도 데이터셋이 적아서 그런 것 같다는 생각을 했다.
