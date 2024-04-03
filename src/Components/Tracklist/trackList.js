import React from "react";




const TrackList = (props) => {
    const tracks = [
    {
       name: 'Beat It',
       artist: 'Micheal Jackson',
       album: 'Thriller',
       id: 1
        },
    {
       name: '1999',
       artist: 'NoCigar',
       album: 'Radical Road',
       id: 2
        }
    ]

    return (
        <div>
         {props.tracks.map((track) => {
            return (
                <track 
                 track={track}
                 key={track.id}
                 onAdd={props.onAdd}
                 isRemoval={props.isRemoval}
                 onRemove={props.onRemove}
                />
            );
         })}
        </div>
    );
};
export default TrackList