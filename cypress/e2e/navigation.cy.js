describe("Navigation Test", ()=>{
        beforeEach(() =>{
            cy.visit("bugz-six.vercel.app");
        })
  
        it("Navigate to the event page",()=>{
            cy.contains("Event").click()
            
        })
})
