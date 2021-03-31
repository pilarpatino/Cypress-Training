class ProductListPage {
    private addTShirtToCartButton: string
    private cartProceedToCheckoutButton: string

    constructor() {
        this.addTShirtToCartButton = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default'
        this.cartProceedToCheckoutButton = '[style*=\"display: block;\"] .button-container > a'
    }

    public goToAddToCartButton(): void {
        cy.get(this.addTShirtToCartButton).click()
    }

    public goToProceedToCheckoutInOptionCartButton(): void {
        cy.get(this.cartProceedToCheckoutButton).click()
    }

}
export { ProductListPage }
