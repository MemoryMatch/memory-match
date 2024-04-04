describe('Welcome Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it('Says Welcome to Memory Match', () => {
    cy.get("header").contains("Welcome to Memory Match!").should("be.visible");
  });

  // it('Has a pop up with instructions if this is my first time visiting the page', () => {
  //   cy.get("h3").contains("Instructions").should("be.visible");
  //   cy.get("p").contains("You will see").should("be.visible");
  //   cy.get("button").contains("Close").should("be.visible");
  //   cy.get("button").contains("Close").click();

  //   //Which of the below is more preferable? 
  //   cy.get("h3").contains("Instructions").should("not.be.visible"); // might show a false positive?
  //   cy.get("h3").contains("Instructions").should("not.exist");
  // });

  // it('Does not have instructional pop up if I have visited page before', () => {
  //   cy.get("button").contains("Close").click();
  //   // Revisit the page
  //   cy.visit("/");
  //   cy.get("h3").contains("Instructions").should("not.exist");
  // });

  // it('Has a dropdown menu to pick game themes', () => { // What does () => mean?
  //   // check that default option is "Pick a theme"
  // });

  // it('Has a button to Play Game which redirects to gameplay page', () => {

  // });

  // it('If game theme is not selected, a randomized theme is chosen', () => {

  // });
});