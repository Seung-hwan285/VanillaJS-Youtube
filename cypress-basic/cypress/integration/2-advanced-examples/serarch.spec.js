// TODO 검색 테스트
// -[x] 유투브 영상 검색기능
// give : 유저가 동영상 검색버튼 클릭
// when : 검색 모달창이 뜨고 동영상 이름을 작성하고 검색 버튼을 누른다
// then :
// -[x] 검색을 하고 버튼 누르면 최근 검색어가 나온다
// -[x] 데이터를 불러올때 로딩컴포넌트가 나와야한다
// -[x] 4개씩 동영상이 나온다
// -[x] 동영상 개수는 4개씩 보여준다. -> 스크롤바로 내리면 4개가 추가로 보여진다.


// -[x] 저장하기 저장 버튼기능
// give : 유저가 저장버튼을 클릭
// when : 저장버튼을 클릭하면 로컬스토리지에 저장된다.
// then :
// -[x] 로컬스토리지에 첫번째 인덱스와 해당 첫번째 동영상이 같은지 비교한다
// -[]  로컬스토리지에 저장개수가 5개이상이면 에러메시지를 출력한다.



import {STORAGE_FULL} from "../../../../src/js/constant.js";

describe('나만의 유투브', () => {
    beforeEach(() => {
        cy.visit('http://localhost:63342/Youtube/index.html?_ijt=ia51uc4ominhpl19ost0mhdvss&_ij_reload=RELOAD_ON_SAVE');

    });

    const typeSearchToSubmitButton =(keyword)=>{
        cy.get('#search-button').click();
        cy.get('#search-input').type(keyword);
        cy.get('#search-submit').click();

    };

    //
    // it('최근 검색어가 3개씩 나오는지 테스트',()=> {
    //
    //
    //     const KEYWORDS = ['카카오','쿠팡','네이버'];
    //     const TRY_COUNT = KEYWORDS.length;
    //
    //
    //     KEYWORDS.forEach((keyword) => {
    //         cy.get('#search-input').clear().type(keyword);
    //         cy.get('#search-keyword-form').submit();
    //     });
    //
    //     cy.get('#recent-keyword')
    //         .siblings()
    //         .should('have.length', 3);
    // });
    //
    //
    // it('검색 키워드 제출하고, 키워드 관련된 영상들이 나오는지 테스트',()=>{
    //
    //     typeSearchToSubmitButton('프론트개발자');
    //     cy.get('.published-at').each(($el)=>cy.wrap($el).should('have.class','line'));
    //     cy.get('.channel-title').each(($el)=>cy.wrap($el).should('have.class','line'));
    //     cy.get('.video-title').each(($el)=>cy.wrap($el).should('have.class','line'));
    // });


    // it('스크롤바 끝까지 이동시키면 다음 2개 영상을 추가로 불러오는지 테스트',()=>{
    //
    //     typeSearchToSubmitButton('먹방');
    //
    //
    //     cy.get('.modal-inner').scrollTo('bottom');
    //     cy.get('#search-result-video-wrapper')
    //         .children()
    //         .should('have.length',7);
    //
    // });


    //
    // it('저장버튼 누르면 로컬스토리지에 저장되는지 테스트',()=>{
    //
    //     typeSearchToSubmitButton('먹방');
    //
    //
    //     cy.get('.save-button')
    //         .eq(0) //첫번째 인덱스 가져옴 -> 첫번째 동영상
    //         // 첫번째 동영상 클릭
    //         .click()
    //         //첫번째 동영상 제목 가져옴
    //         .invoke('attrxix','data-video-id')
    //
    //         .then((firstVideoId)=>{
    //
    //
    //             const list = JSON.parse(localStorage.getItem('videoWatch'));
    //             // 로컬스토리지에 있는 첫번째 videoId , 클릭한 버튼 videoId 비교
    //             expect(list[0].videoId).to.equal(firstVideoId);
    //         });
    //
    // });

    it('로컬스토리지에 영상저장 개수가 5개 넘어가면 저장실패 메세지 테스트',()=>{
       typeSearchToSubmitButton('먹방');

       cy.get('.save-button')

           // $eq 버튼 요소
          .each(($el,index)=>{

               if(index >=5){
                   console.log($el);
                   console.log(index);
                   $el.click();

                   cy.get('#storage-full').contains(STORAGE_FULL);
                   return;
               }
          });




    });
});
