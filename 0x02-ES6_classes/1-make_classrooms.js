import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const container = [{}, {}, {}];

  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  container[0] = room1;
  container[1] = room2;
  container[2] = room3;

  return (container);
}
