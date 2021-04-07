class ProductListPage {
    private addTShirtToCartButton: string
    private cartProceedToCheckoutButton: string

    constructor() {
        this.addTShirtToCartButton = '.button.ajax_add_to_cart_button.btn.btn-default'
        this.cartProceedToCheckoutButton = 'a[title="Proceed to checkout"]'
    }

    public goToAddToCartButton(): void {
        cy.get(this.addTShirtToCartButton).click()
    }

    public goToProceedToCheckoutInOptionCartButton(): void {
        cy.get(this.cartProceedToCheckoutButton).click()
    }

}
export { ProductListPage }
