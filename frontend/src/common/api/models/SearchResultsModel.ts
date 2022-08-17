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
import type { ProviderErrorModel } from './ProviderErrorModel'
import {
    ProviderErrorModelFromJSON,
    ProviderErrorModelFromJSONTyped,
    ProviderErrorModelToJSON,
} from './ProviderErrorModel'
import type { ProviderTorrentModel } from './ProviderTorrentModel'
import {
    ProviderTorrentModelFromJSON,
    ProviderTorrentModelFromJSONTyped,
    ProviderTorrentModelToJSON,
} from './ProviderTorrentModel'

/**
 *
 * @export
 * @interface SearchResultsModel
 */
export interface SearchResultsModel {
    /**
     *
     * @type {Array<ProviderTorrentModel>}
     * @memberof SearchResultsModel
     */
    items: Array<ProviderTorrentModel>
    /**
     *
     * @type {Array<ProviderErrorModel>}
     * @memberof SearchResultsModel
     */
    errors: Array<ProviderErrorModel>
}

/**
 * Check if a given object implements the SearchResultsModel interface.
 */
export function instanceOfSearchResultsModel(value: object): boolean {
    let isInstance = true
    isInstance = isInstance && 'items' in value
    isInstance = isInstance && 'errors' in value

    return isInstance
}

export function SearchResultsModelFromJSON(json: any): SearchResultsModel {
    return SearchResultsModelFromJSONTyped(json, false)
}

export function SearchResultsModelFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): SearchResultsModel {
    if (json === undefined || json === null) {
        return json
    }
    return {
        items: (json['items'] as Array<any>).map(ProviderTorrentModelFromJSON),
        errors: (json['errors'] as Array<any>).map(ProviderErrorModelFromJSON),
    }
}

export function SearchResultsModelToJSON(
    value?: SearchResultsModel | null
): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        items: (value.items as Array<any>).map(ProviderTorrentModelToJSON),
        errors: (value.errors as Array<any>).map(ProviderErrorModelToJSON),
    }
}
