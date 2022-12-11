import ReactPlayer from "react-player"
import { notFoundImage } from "../../utils/defaultNotFound"

export default function MediaCard({ article }) {
    if (!article.TypeDeMedia) return <p style={{ textAlign: 'center', color: 'gray' }}>Unknown format</p>
    switch (article.TypeDeMedia[0]) {
        case 'image':
            return <MediaImage imageSrc={article?.MediaImageGoogleDrive[0]?.url} />
        case 'video':
            return <ReactPlayer
                light={true}
                width="950px"
                height="450px"
                url={article.MediaURL}
            />
        case 'audio':
            if (article.MediaImageGoogleDrive) {
                return <MediaImage imageSrc={article?.MediaImageGoogleDrive[0]?.url} />
            } else {
                return <img style={{
                    width: '100%',
                    height: '100%'
                }} src={notFoundImage} alt='Not Found' />
            }
        default:
    }
}

function MediaImage({ imageSrc }) {
    return <img style={{

        width: '100%',
        height: '100%'
    }} src={imageSrc} alt='' />
}