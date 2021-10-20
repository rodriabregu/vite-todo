import { useState, useEffect } from 'react';
import { getDemonSlayer } from './getApi';
const urlDemon = 'https://evakny-api.herokuapp.com/animes/2';

const Anime = () => {
    const [anime, setAnime] = useState([])

    useEffect(() => {
        getDemonSlayer(urlDemon).then(res => setAnime(res.info[0].characters))
    }, []);

    return (
        <div>
            {anime?.map(e => {
                return (
                    <>
                    <span>{e?.name} {e?.age}{<br />}</span>
                    {/* <img src={e?.image} /> */}
                    </>
                )
            })}
        </div>
    )
}

export default Anime;