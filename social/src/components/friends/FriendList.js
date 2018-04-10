import React from 'react';

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <React.Fragment>
      {friends.map(friend => (
        <p key={friend._id}>
          {friend.firstName} {friend.lastName}
        </p>
      ))}
    </React.Fragment>
  );
};

export default FriendList;