import homepage from "../../support/pageObjects/homePage";

require("cypress-xpath");
require("cypress-plugin-tab");

const mainPage = new homepage();

describe("Validations of the Main page", () => {
  mainPage.urlPage();
  it("Write test", () => {
    cy.log("Working as expected");
  });
});
