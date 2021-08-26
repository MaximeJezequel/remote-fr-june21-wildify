import React from 'react';
import { Link } from 'react-router-dom';

import './Album.css';

const InfoAlbum = ({ infoalbum }) => (
    <div className="info-album-bloc">
      <div className="info-album-bloc-img">
        <img src={infoalbum.image[4]['#text']} alt={infoalbum.image['#text']} />
      </div>
      <article className="info-album-bloc-article">
        <h2>{infoalbum.name}</h2>
        <div>
          <p>{infoalbum.strArtist}</p>
          <Link to={`/artist/${infoalbum.artist}`} >
            <p>{infoalbum.artist}</p>
          </Link>
        </div>
      </article>
    </div>
)

export default InfoAlbum;
