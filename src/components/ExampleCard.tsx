import React, {useState} from 'react';

interface ICard {
    img: string,
    location: any
}

const ExampleCard = (props: ICard) => {
    const [active, setActive] = useState(false)

    const redirect = (url: Location) => {
        window.location = url
    }

    return (
        <>
            {
                active ?
                    <img
                        src={props.img}
                        className={'example-image example-image-scaling'}
                        height='60%'
                        width='60%'
                        onClick={(e) => setActive(true)}
                    />
                    :
                    <img
                        src={props.img}
                        className={'example-image '}
                        height='60%'
                        width='60%'
                        onClick={async e => {
                            setActive(true)
                            await setTimeout(() => {
                                setActive(false)
                            }, 600)
                            redirect(props.location)
                        }}
                    />
            }
        </>
    )
}

export default ExampleCard;