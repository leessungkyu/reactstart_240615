export const CommetnTiemStamp = () => {
  const date = new Date().toLocaleDateString();
  const [_, time] = new Date().toLocaleTimeString().split(" ");
  return `${date} ${time}`;
};
