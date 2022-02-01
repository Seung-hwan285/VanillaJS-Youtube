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

        cy.get('#data-input').type(keyword);
        cy.get('#data-submit').click();
        cy.get('#search-keyword-form').submit();
    };




    it('검색 키워드 제출하고, 데이터를 불러오기 전이면 로딩 컴포넌트 나오는지 테스트',()=>{

        typeSearchToSubmitButton('프론트개발자');


        cy.get('#search-result-video-wrapper').should('have.class','spinner');
        cy.get('.video-title').each(($el)=>cy.wrap($el).should('have.class','line'));

    });


    it('검색 결과가 없을 경우 이미지를 화면에 표시하는 테스트',()=>{
        typeSearchToSubmitButton('fdasfdasfdsafdsa');

        cy.get('#search-result-video-wrapper').find('img').should('have.attr','src').should('include','not_found');

    });

});