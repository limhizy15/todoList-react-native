# 투두 앱 만들기 with React Native & TypeScript

## 🎯 요구사항

### 환경

- [x] React Native CLI, TypeScript로 환경구성 (Android, ios에서 구동가능해야 함)
- [x] 함수형 컴포넌트로 구현할 것
- [ ] 상태관리는 Zustand를 활용

### 기능

- [ ] 할 일 입력/수정/삭제 기능
  - [x] 할 일을 새롭게 추가할 수 있다.
  - [x] 할 일을 삭제할 수 있다.
  - [x] 할 일을 완료할 수 있다.
  - [ ] 할 일을 수정할 수 있다.
- [x] 할 일은 Task, CreateTime을 포함
- [x] FlatList를 활용해 List를 표현

<br />

## 🏁 학습내용

### React Native + TypeScript 환경구성

[React Native Typescript 설정하는 방법](https://ithub.tistory.com/234)
[React Native 설치와 실행](https://yuddomack.tistory.com/entry/1React-Native-%EC%84%A4%EC%B9%98%EC%99%80-%EC%8B%A4%ED%96%89hello-world)

#### 설치한 것들

- CocoaPods와 Pod Dependency 설치
- react-native cli 설치
- Xcode, Android Studio 설치 및 에뮬레이터 설정

#### 발생한 문제

- pod install로 dependency 설치 중 에러 발생
  - gem으로 cocoapods를 설치했는데 brew로 설치하니 해결됨

#### 프로젝트 세팅

- `npx react-native init todoRN`
- `npx react-native run-ios`로 실행 (ios)

<br />

### 투두 앱 기능 구현

```
투두앱에서 생성, 삭제 로직 및 레이아웃은 해봤던 거라 크게 정리할 것은 없음.
새로 배운 React Native만의 것들을 간단하게 정리
```

#### React Native의 Component

**`View`**

- UI 만들 때 가장 기본이 되는 컴포넌트이다. native view에 바로 맵핑된다.

**`Text`**

- text를 보여줄 때 사용하는 컴포넌트이다. nesting, styling, touch handling을 제공한다.

**`TextInput`**

- form에 input 같은 애라고 생각하면 편할 듯.
- onChangeText이벤트로 유저 인풋을 읽을 수 있다.
- autoComplete, autoCorrect 등 많은 속성을 가지고 있다..

**`TouchableOpacity`**

- 터치에 반응할 수 있는 View를 만들기 위한 것이다. 누르고 있으면 희미해짐!!

**`Button`**

- 기본 버튼! TouchableOpacity 얘로 대신할 수도 있다고 한다.
- onPress로 버튼이 눌렸을 때 이벤트를 처리할 수 있다.

**`SafeAreaView`**

- iOS에서만 먹히는 애.. safe한 영역에 컨텐츠를 렌더링하기 위한 것이다.

#### FlatList

- [활용법 참고링크](https://dev.to/reenydavidson/building-a-to-do-list-with-react-native-and-styled-components-2148)
- header, footer도 넣을 수 있고, 당겨서 새로고침할 수도 있고 이것저것 List에서 필요한 많은 기능을 지원해주고 있다.
- keyExtractor : key로 무슨 값을 쓸 지 명시하는 속성
- data : 만들고자하는 리스트의 데이터를 담는 속성
- renderItem : data에 담긴 item을 렌더링해주는 콜백함수

#### 스타일링

```
미세하게 css 문법이 다른 부분이 있으니 주의 ❗️
```

- [StyleSheet](https://reactnative.dev/docs/stylesheet)
- [FlexBox](https://reactnative.dev/docs/flexbox)
- 아이콘 활용 > [참고링크](https://oblador.github.io/react-native-vector-icons/)

#### TypeScript 첨가 😌

- [공식문서 - Using TypeScript](https://reactnative.dev/docs/typescript)
