import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form'
import ParseTorrent from 'parse-torrent'

interface Inputs {
    torrent: string
}

export function InputWidget() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const history = useHistory()

    const onSubmit: SubmitHandler<Inputs> = ({ torrent }) => {
        history.push(`/play?torrent=${encodeURIComponent(torrent.trim())}`)
    }

    const torrentFileUploadRef = useRef(null)

    const openTorrentFileUpload = () => {
        ;(torrentFileUploadRef?.current as any)?.click?.()
    }

    const handleTorrentUpload = async (e: any) => {
        const file: File = e?.target?.files?.[0]
        if (file) {
            const result = ParseTorrent(Buffer.from(await file.arrayBuffer()))
            const uri = ParseTorrent.toMagnetURI(result)
            onSubmit({ torrent: uri })
        }
    }

    return (
        <Card>
            <Card.Header>
                <Card.Title as="h3">
                    <i className="ti-control-play text-success" /> Stream
                    torrents
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col sm={8}>
                            <Form.Control
                                placeholder="Torrent file or magnet link"
                                className="mb-2"
                                {...register('torrent', { required: true })}
                                isInvalid={!!errors.torrent}
                            />
                        </Col>
                        <Col sm={4}>
                            <Button
                                variant="secondary"
                                className="w-100 mb-2"
                                type="submit"
                            >
                                Stream
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <input
                            ref={torrentFileUploadRef}
                            type="file"
                            accept=".torrent"
                            onChange={handleTorrentUpload}
                            style={{ display: 'none' }}
                        />
                        <Col>
                            <Button
                                onClick={() => openTorrentFileUpload()}
                                variant="secondary"
                                className="w-100 mb-2"
                            >
                                Upload Torrent File Instead
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Card.Body>
        </Card>
    )
}
