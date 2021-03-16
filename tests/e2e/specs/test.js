// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
  });

  it('arithmetical operations should update the display with the result of the operation', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '6')
  });

  it('should update the display with the result of the operation', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '3')
  }); 

  it('should have a negative number as a total', () => {
    cy.get('#number8').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-1')
  }); 

  it(' should have a decimal number as a total', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.8')
  });

  it('should be a very large number', () => {
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number8').click();
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number8').click();
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('.display').should('contain', '64130226178225')
  });

  it('show error on divide by zero', () => {
		cy.get('#number1').click();
		cy.get('#operator_divide').click();
		cy.get('#number0').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', 'error: cannot divide by zero');
	});

});