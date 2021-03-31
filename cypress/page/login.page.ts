class LoginPage {
    private emailAddressField: string
    private passwordField: string
    private signInButton: string

    constructor() {
        this.emailAddressField = '#email'
        this.passwordField = '#passwd'
        this.signInButton = '#SubmitLogin'
    }

    public typeEmailAddress(): void {
        cy.get(this.emailAddressField).type("aperdomobo@gmail.com")
    }

    public typePassword(): void {
        cy.get(this.passwordField).type("WorkshopProtractor")
    }

    public goToSignInButton(): void {
        cy.get(this.signInButton).click()
    }

}
export { LoginPage }
