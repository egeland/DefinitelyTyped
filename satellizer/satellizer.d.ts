// Type definitions for Satellizer 0.11.2+
// Project: https://github.com/sahat/satellizer
// Definitions by: Frode Egeland <http://github.com/egeland>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path='../angularjs/angular.d.ts' />

// Support AMD require
declare module 'satellizer' {
    export = satellizer;
}

///////////////////////////////////////////////////////////////////////////////
// satellizer module
///////////////////////////////////////////////////////////////////////////////
declare module satellizer {
    interface IBaseOptions {
        url: string
    }
    interface IAuthEndpointOptions extends IBaseOptions {
        clientId: string
        authorizationEndpoint: string
        redirectUri: string
        scopeDelimiter: string
    }
    interface IFacebookOptions extends IAuthEndpointOptions {
        type: string
        requiredUrlParams: string[]
        popupOptions: { width: number, height: number}
    }
    interface IGoogleOptions extends IAuthEndpointOptions {
        scope: string[]
        scopePrefix: string
        requiredUrlParams: string[]
        optionalUrlParams: string[]
        display: string
        type: string
        popupOptions: { width: number, height: number}
    }
    interface IGithubOptions extends IAuthEndpointOptions {
        scope: string[]
        type: string
        popupOptions: { width: number, height: number}
    }
    interface ILinkedinOptions extends IAuthEndpointOptions {
        requiredUrlParams: string[]
        scope: string[]
        state: string
        type: string
        popupOptions: { width: number, height: number}
    }
    interface IYahooOptions extends IAuthEndpointOptions {
        scope: string[]
        type: string
        popupOptions: { width: number, height: number}
    }
    interface ILiveOptions extends IAuthEndpointOptions {
        scope: string[]
        requiredUrlParams: string[]
        display: string
        type: string
        popupOptions: { width: number, height: number}
    }
    interface ITwitterOptions extends IBaseOptions {
        type: string
        popupOptions: { width: number, height: number}
    }
    interface IOauth2Options {
        url: any
        name: any
        scope: any
        scopeDelimiter: any
        clientId: any
        redirectUri: any
        popupOptions: any
        authorizationEndpoint: any
        responseParams: any
        requiredUrlParams: any
        optionalUrlParams: any
        defaultUrlParams: string[]
        responseType: string
    }
    interface IOauth1Options {
        url: any
        name: any
        popupOptions: any
    }

    interface IAuthProvider {
        httpInterceptor: boolean
        loginOnSignup: boolean
        baseUrl: string
        loginRedirect: string
        logoutRedirect: string
        signupRedirect: string
        loginUrl: string
        signupUrl: string
        loginRoute: string
        signupRoute: string
        tokenRoot: boolean
        tokenName: string
        tokenPrefix: string
        unlinkUrl: string
        unlinkMethod: string
        authHeader: string
        authToken: string
        withCredentials: boolean
        platform: string
        storage: string
        facebook(options: IFacebookOptions): void
        google(options: IGoogleOptions): void
        github(options: IGithubOptions): void
        linkedin(options: ILinkedinOptions): void
        yahoo(options: IYahooOptions): void
        live(options: ILiveOptions): void
        twitter(options: ITwitterOptions): void
        oauth2(options: IOauth2Options): void
        oauth1(options: IOauth1Options): void
    }

    interface IAuthService {
        authenticate(provider: string): void
    }
}
