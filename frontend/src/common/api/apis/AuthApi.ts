/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime'
import type { ApiErrorModel, SuccessModel } from '../models'
import {
    ApiErrorModelFromJSON,
    ApiErrorModelToJSON,
    SuccessModelFromJSON,
    SuccessModelToJSON,
} from '../models'

/**
 *
 */
export class AuthApi extends runtime.BaseAPI {
    /**
     */
    async authRaw(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<SuccessModel>> {
        const queryParameters: any = {}

        const headerParameters: runtime.HTTPHeaders = {}

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken
            const tokenString = await token('apiKey', [])

            if (tokenString) {
                headerParameters['Authorization'] = `Bearer ${tokenString}`
            }
        }
        const response = await this.request(
            {
                path: `/api/auth`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        )

        return new runtime.JSONApiResponse(response, (jsonValue) =>
            SuccessModelFromJSON(jsonValue)
        )
    }

    /**
     */
    async auth(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<SuccessModel> {
        const response = await this.authRaw(initOverrides)
        return await response.value()
    }
}
