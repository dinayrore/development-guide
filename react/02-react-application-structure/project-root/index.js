class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MoodGenerator />
        <Button />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
