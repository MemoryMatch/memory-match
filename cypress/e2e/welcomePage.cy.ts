describe('Welcome Page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it('Says Welcome to Memory Match', () => {
    cy.get("header").contains("Welcome to Memory Match!").should("be.visible");
  });

  it.skip('Has a pop up with instructions if this is my first time visiting the page', () => {
    cy.url().should(() => {
      expect(localStorage.getItem("returningUser")).to.not.exist;
    })
    cy.get("h3").contains("Instructions").should("be.visible");
    cy.get("p").contains("You will see").should("be.visible");
    cy.get("button").contains("Close").should("be.visible");

    cy.get("button").contains("Close").click();

    cy.url().should(() => {
      expect(localStorage.getItem("returningUser")).to.exist;
    })
    cy.get("h3").contains("Instructions").should("not.be.visible");
    cy.get("p").contains("You will see").should("not.be.visible");
    cy.get("button").contains("Close").should("not.be.visible");
  });

  it.skip('Does not have instructional pop up if I have visited page before', () => {
    expect(localStorage.getItem("returningUser")).to.not.exist;
    cy.get("button").contains("Close").click();
    // Revisit the page
    cy.visit("http://localhost:3000/");
    cy.url().should(() => {
      expect(localStorage.getItem("returningUser")).to.exist;
    })
    cy.get("h3").contains("Instructions").should("not.be.visible");
  });

  it('Has a dropdown menu to pick game themes', () => {
    cy.get("select").select("Select a Theme").should("have.value", "random");
    cy.get("select").select("Animals").should("have.value", "animals");
    cy.get("select").select("Flowers").should("have.value", "flowers");
    cy.get("select").select("Fruits").should("have.value", "fruits");
  });

  it('Has a button to Play Game which redirects to gameplay page', () => {
    cy.get("select").select("Animals");
    cy.get("input").click();
    cy.url().should('include', 'game?theme=animals');
  });

  it('If game theme is not selected, a randomized theme is chosen', () => {
    cy.get("select").select("Select a Theme");
    cy.get("input").click();
    cy.url().should('include', 'game?theme=random');
  });
});