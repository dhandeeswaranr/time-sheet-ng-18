import {environment} from '../../environments/environment'

const DOMAIN = environment.baseUrl;

export const urlPath = {
    /*POST*/
    login: DOMAIN + 'login',

    valid: DOMAIN + 'validation',

    userDetail: DOMAIN + 'signup/list'
}