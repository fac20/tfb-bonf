/// <reference types="cypress" />

describe("Login page Test", () => {
	it("Gets, types and asserts", () => {
		// deletes the authenticated token from the indexedDB
		indexedDB.deleteDatabase("firebaseLocalStorageDb");
		cy.visit("/");		
		// Get an input, type into it and verify that the value has been updated
		cy.get("input[type=email]")
			.type("hello@me.com")
            .should("have.value", "hello@me.com");
        cy.get("input[type=password]")
            .type("123456")
            .should("have.value", "123456");
        cy.get("button[type=submit]")
            .click()
        cy.contains("Home");
               
	});
});