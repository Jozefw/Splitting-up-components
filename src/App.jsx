

const descriptionArray = ['Cool','Eery','Unique'];

function randomInteger(maxNum){
  return Math.floor(Math.random()*(maxNum+1))
}



function App() {
  return (
    <div>
      <header>
      <h2>
        {descriptionArray[randomInteger(2)]} UI designs and Builds
      </h2>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
