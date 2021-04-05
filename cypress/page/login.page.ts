class LoginPage {
    private emailAddressField: string
    private passwordField: string
    private signInButton: string

    constructor() {
        this.emailAddressField = '#email'
        this.passwordField = '#passwd'
        this.signInButton = '#SubmitLogin'
    }

    public typeEmailAddress(email:string): void {
        cy.get(this.emailAddressField).type(email)
    }

    public typePassword(password:string): void {
        cy.get(this.passwordField).type(password)
    }

    public goToSignInButton(): void {
        cy.get(this.signInButton).click()
    }

}
export { LoginPage }
