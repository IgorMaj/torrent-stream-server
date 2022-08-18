import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { VideoJsPlayer } from 'video.js'
import { convertToVTT, isVTT } from '../utils'

export const CustomSubtitleSelector = (props: { player: VideoJsPlayer }) => {
    const { player } = props
    const uploadRef = React.useRef(null)
    const openSubtitlePickDialog = () => {
        ;(uploadRef?.current as any)?.click?.()
    }

    const handleSubtitleFileUpload = async (e: any) => {
        const file: File = e?.target?.files?.[0]
        if (file) {
            player.addRemoteTextTrack(
                {
                    kind: 'captions',
                    src: isVTT(file)
                        ? URL.createObjectURL(file)
                        : await convertToVTT(file),
                    mode: 'showing',
                    label: file?.name ?? 'untitled',
                },
                false
            )
        }
    }

    return (
        <Row>
            <Col sm={4}>
                <input
                    ref={uploadRef}
                    onChange={handleSubtitleFileUpload}
                    type="file"
                    style={{ display: 'none' }}
                    name="sub_upload"
                    accept=".vtt,.srt"
                />
                <Button
                    onClick={openSubtitlePickDialog}
                    variant="secondary"
                    className="mb-2 mt-2"
                >
                    Upload Custom Subtitle
                </Button>
            </Col>
        </Row>
    )
}
