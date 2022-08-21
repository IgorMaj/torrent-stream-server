import { TorrentFileModel } from 'common/api'
import { default as toWebVTT } from 'srt-webvtt'

export function isVTT(file: File | TorrentFileModel) {
    return file.name.endsWith('.vtt')
}

export async function convertToVTT(file: File | Blob): Promise<string> {
    return await toWebVTT(file)
}

export function isSubtitle(file: TorrentFileModel | File): boolean {
    return file.name.endsWith('.srt') || file.name.endsWith('.vtt')
}
