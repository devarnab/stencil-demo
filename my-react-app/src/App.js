import "./App.css";

function App() {
  return (
    <div className="App">
      <ac-fetch-users class="mt2"></ac-fetch-users>
      <ac-card
        class="mt2"
        ac-title="Lorem, ipsum dolor."
        ac-footer-link="http://google.com"
        ac-footer-text="Go to Google"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
          officiis nam ad eaque illo doloribus omnis, harum tempora recusandae
          minus, at deserunt autem itaque nostrum obcaecati voluptates aliquid
          earum quis?
        </div>
      </ac-card>
    </div>
  );
}

export default App;
