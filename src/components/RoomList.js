import React from 'react';
import Room from '../components/Room';

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms mathed your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
}
