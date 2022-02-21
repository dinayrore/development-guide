const MoodGenerator = () => {
  const getEmoji = () => {
    const emojis = ["😡", "😁", "🤪", "🤯", "😷", "😴", "😭", "😱"];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };
  const feeling = getEmoji();
  return (
    <div>
      <h1> {feeling} </h1>
    </div>
  );
};
