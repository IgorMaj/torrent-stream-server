import { default as toWebVTT } from 'srt-webvtt'

export function isVTT(file: File) {
    return file.name.endsWith('.vtt')
}

export async function convertToVTT(file: File): Promise<string> {
    return await toWebVTT(file)
}
