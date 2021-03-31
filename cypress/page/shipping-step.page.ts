class ShippingPage {
    private termsOfServiceCheck: string
    private shippingProceedToCheckoutButton: string

    constructor(){
        this. termsOfServiceCheck = '#cgv'
        this.shippingProceedToCheckoutButton = '[name=processCarrier]'
    }

    public checkTermsOfService(): void {
        cy.get(this.termsOfServiceCheck).click()
    }

    public goToProceedToCheckoutInOptionShippingButton(): void {
        cy.get(this.shippingProceedToCheckoutButton).click()
    }

}
export { ShippingPage }
