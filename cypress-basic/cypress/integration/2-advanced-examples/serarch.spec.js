// TODO 검색 테스트
// -[] 유투브 영상 검색기능
// give : 유저가 동영상 검색버튼 클릭
// when : 검색 모달창이 뜨고 동영상 이름을 작성하고 검색 버튼을 누른다
// then :
// -[] 검색을 하고 버튼 누르면 최근 검색어가 나온다
// -[] 데이터를 불러올때 로딩컴포넌트가 나와야한다
// -[] 검색 결과가 없으면 결과 없음 이미지 텍스트가 보여진다
// -[] 동영상 개수는 10개씩 보여준다. -> 스크롤바로 내리면 10개가 추가로 보여진다.


describe('유튜브 검색 테스트', () => {
    beforeEach(() => {
        cy.visit('http://localhost:63342/Youtube/index.html?_ijt=ia51uc4ominhpl19ost0mhdvss&_ij_reload=RELOAD_ON_SAVE');
        cy.get('#search-button').click();
    });

    const typeSearchToSubmitButton =(keyword)=>{

        cy.get('#search-input').type(keyword);
        cy.get('#search-submit').click();

    };

    it('최근 검색어 나오는지 테스트',()=>{

        typeSearchToSubmitButton('123');
        cy.get('.chip').should('have.text','123');
    });

    it('검색 키워드 제출하고, 데이터를 불러오기 전이면 로딩 컴포넌트 나오는지 테스트',()=>{

        typeSearchToSubmitButton('프론트개발자');


        cy.get('#search-modal_spinner').should('have.class','spinner');

    });



});