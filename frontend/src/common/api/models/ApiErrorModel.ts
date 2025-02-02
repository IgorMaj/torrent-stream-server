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

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface ApiErrorModel
 */
export interface ApiErrorModel {
    /**
     *
     * @type {string}
     * @memberof ApiErrorModel
     */
    error: string
}

/**
 * Check if a given object implements the ApiErrorModel interface.
 */
export function instanceOfApiErrorModel(value: object): boolean {
    let isInstance = true
    isInstance = isInstance && 'error' in value

    return isInstance
}

export function ApiErrorModelFromJSON(json: any): ApiErrorModel {
    return ApiErrorModelFromJSONTyped(json, false)
}

export function ApiErrorModelFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): ApiErrorModel {
    if (json === undefined || json === null) {
        return json
    }
    return {
        error: json['error'],
    }
}

export function ApiErrorModelToJSON(value?: ApiErrorModel | null): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        error: value.error,
    }
}
