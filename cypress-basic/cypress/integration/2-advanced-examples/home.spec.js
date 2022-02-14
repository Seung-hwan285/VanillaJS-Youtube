// TODO 홈 화면 테스트
// -[] 시청중인 영상 리스트
// give : 유저가 동영상 저장버튼 클릭
// when : 동영상 이름을 검색하고 저장버튼을 누른다
// then :
// -[x] 저장버튼을 누르면 시청중인 영상에 보여지게 된다.
// -[] 체크박스를 누르면 시청완료 영상으로 이동한다.
// -[] 휴지통박스를 누르면 제거가 된다.
// -[] 영상이 삭제 될때는 메세지를 보여준다.


describe('시청중인 화면 테스트',()=>{
   beforeEach(()=>{
       cy.visit('http://localhost:63342/Youtube/index.html?_ijt=ia51uc4ominhpl19ost0mhdvss&_ij_reload=RELOAD_ON_SAVE');
   });


   const typeSearchToSubmitButton =(keyword)=>{
       cy.get('#search-button').click();
       cy.get('#search-input').type(keyword);
       cy.get('#search-submit').click();

   }

   it('저장버튼을 누르면 시청중인 영상에 보여지는지 테스트',()=>{

       typeSearchToSubmitButton('먹방');


       cy.wait(5000);



       cy.get('.save-button')


           .each(($el)=>{

               $el.click();

           });

       cy.get('.modal-close').click();


       cy.get('.channel-title').each(($el)=>{
           console.log($el);
           cy.wrap($el).should('have.class','line');
       });







   });
});