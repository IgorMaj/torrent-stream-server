import { TorrentFileModel } from 'common/api'
import { convertToVTT, isSubtitle, isVTT } from 'features/player/utils'
import React from 'react'

export interface SubtitleItem {
    name: string
    src: string
}

const SubtitleFilesContext = React.createContext([] as SubtitleItem[])

async function streamToVTTLink(stream: string) {
    const blob = await fetch(stream).then((r) => r.blob())
    return await convertToVTT(blob)
}

const SubtitleFilesProvider = (props: {
    children: any
    files: TorrentFileModel[]
}) => {
    const { children, files } = props
    const [subtitleFiles, setSubtitleFiles] = React.useState(
        [] as SubtitleItem[]
    )
    const [loaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
        setLoaded(false)
        const filteredFiles = files?.filter((file) => isSubtitle(file)) ?? []
        // more than this (5) is not wise performance wise ;)
        Promise.all(
            filteredFiles.slice(0, 5).map(async (file) => {
                return {
                    name: file.name,
                    src: isVTT(file)
                        ? file.stream
                        : await streamToVTTLink(file.stream),
                } as SubtitleItem
            })
        ).then((response) => {
            setSubtitleFiles(response)
            setLoaded(true)
        })
    }, [files, setSubtitleFiles, setLoaded])

    return (
        <SubtitleFilesContext.Provider value={subtitleFiles}>
            {loaded ? children : <></>}
        </SubtitleFilesContext.Provider>
    )
}

/* Handles loaded torrent subtitles if, any */
export const useSubtitles = () => React.useContext(SubtitleFilesContext)

export default SubtitleFilesProvider
