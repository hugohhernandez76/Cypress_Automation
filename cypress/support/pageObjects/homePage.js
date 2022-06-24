class homePage {
  urlPage() {
    before(() => {
      cy.visit("http://automationpractice.com/index.php");
      cy.title().should("eq", "My Store");
    });
  } //final
}
export default homePage;
