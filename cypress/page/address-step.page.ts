class AddressPage {
    private addressProceedToCheckoutButton: string

    constructor() {
        this.addressProceedToCheckoutButton = '[name=processAddress]'
    }

    public goToProceedToCheckoutInOptionAddressButton(): void {
        cy.get(this.addressProceedToCheckoutButton).click()
    }

}
export { AddressPage }
