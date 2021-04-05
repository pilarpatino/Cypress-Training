class ShoppingCartPage {
    private summaryProceedToCheckoutButton: string

    constructor() {
        this.summaryProceedToCheckoutButton = '.cart_navigation span'
    }

    public goToProceedToCheckoutInOptionSummaryButton(): void {
        cy.get(this.summaryProceedToCheckoutButton).click()
    }

}
export { ShoppingCartPage }
