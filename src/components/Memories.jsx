import React from 'react';

 const Memories = ({ memories }) => {
  const listMemories = memories.map((memory, index) => <li key={index}>{memory}</li>)
  return (
    <div className="quote">
      <h3>Memories</h3>
      <ul>{listMemories}</ul>
    </div>
  );
}

export default Memories;