// TODO 검색 테스트
// -[] 유투브 영상 검색기능
// give : 유저가 동영상 검색버튼 클릭
// when : 검색 모달창이 뜨고 동영상 이름을 작성하고 검색 버튼을 누른다
// then :
// 1. 데이터를 불러올때 로딩컴포넌트가 나와야한다
// 2. 검색 결과가 없으면 결과 없음 이미지 텍스트가 보여진다
// 3. 동영상 개수는 10개씩 보여준다. -> 스크롤바로 내리면 10개가 추가로 보여진다.

describe('유튜브 검색 테스트', () => {
    beforeEach(() => {
        cy.visit('http://localhost:63342/Youtube/index.html?_ijt=ia51uc4ominhpl19ost0mhdvss&_ij_reload=RELOAD_ON_SAVE');
        cy.get('#search-button').click();
    });



    const typeSearchToSubmitButton =(keyword)=>{

        cy.get('#data-input').type(keyword);
        cy.get('#data-submit').click();
    };



    it('유투브 검색하고 검색하기 버튼 누르면 로딩 컴포넌트 나오는지 테스트',()=>{
        typeSearchToSubmitButton('먹방');
    });


    it('검색후 결과가 10개씩 나오는지 테스트',()=>{
        typeSearchToSubmitButton('먹방');
    });

    it('검색후 스크룰 내리면 10개씩 추가되는 테스트',()=>{
       typeSearchToSubmitButton('먹방');
    });



})